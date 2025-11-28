import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import { Request, Response } from "express";
import { Condominio, HistoricoItem, Backup } from "./types"; // Assuming types are in a separate file

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();
const app = express();

// Middleware to log changes
const logChanges = async (condominioId: string, changes: any[], user: string) => {
  const timestamp = new Date().toISOString();
  const historicoRef = db.collection("historico").doc();
  await historicoRef.set({
    id: historicoRef.id,
    condominioId,
    timestamp,
    user,
    changes,
  });
};

// Helper to create a backup
const createBackup = async (condominioId: string, condominioData: Condominio) => {
    const backupRef = db.collection("backups").doc(`${condominioId}_${new Date().toISOString()}`);
    await backupRef.set(condominioData);
};


const getCondominioWithDefaults = (data: Partial<Condominio>): Condominio => {
    const timestamp = new Date().toISOString();

    return {
        id: data.id || '',
        criadoEm: data.criadoEm || timestamp,
        atualizadoEm: data.atualizadoEm || timestamp,

        // Informações básicas
        nomeCondominio: data.nomeCondominio || '',
        contaSituator: data.contaSituator || null,
        cidade: data.cidade || '',
        bairro: data.bairro || '',
        dataImplantacao: data.dataImplantacao || null,
        status: data.status || 'EM IMPLANTAÇÃO',

        // Links
        linkCadastro: data.linkCadastro || null,
        linkFotos: data.linkFotos || null,
        linkCentral: data.linkCentral || null,
        linkDocumentos: data.linkDocumentos || null,

        // Checklist de Monitoramento
        checklistMonitoramento: data.checklistMonitoramento || {
            statusComunicador: 'NÃO INICIADO',
            statusAcessoRemoto: 'NÃO INICIADO',
            statusCadastro: 'NÃO INICIADO',
            statusApp: 'NÃO INICIADO',
        },

        // Checklist de Técnica
        checklistTecnica: data.checklistTecnica || {
            statusVistoria: 'NÃO INICIADO',
            statusMaterial: 'NÃO INICIADO',
            statusFotos: 'NÃO INICIADO',
            statusAcompanhamento: 'NÃO INICIADO',
            statusFinalizacao: 'NÃO INICIADO',
        },

        // Serviços
        cftv: data.cftv || 'NÃO INICIADO',
        alarme: data.alarme || 'NÃO INICIADO',
        controleAcesso: data.controleAcesso || 'NÃO INICIADO',
        incendio: data.incendio || 'NÃO INICIADO',
        gerador: data.gerador || 'NÃO INICIADO',

        // Campos de texto para detalhes
        detalhesComunicador: data.detalhesComunicador || null,
        detalhesAcessoRemoto: data.detalhesAcessoRemoto || null,
        detalhesCadastro: data.detalhesCadastro || null,
        detalhesApp: data.detalhesApp || null,
        detalhesVistoria: data.detalhesVistoria || null,
        detalhesMaterial: data.detalhesMaterial || null,
        detalhesFotos: data.detalhesFotos || null,
        detalhesAcompanhamento: data.detalhesAcompanhamento || null,
        detalhesFinalizacao: data.detalhesFinalizacao || null,
    };
};

// CREATE
app.post("/condominios", async (req: Request, res: Response) => {
  try {
    const condominioData = getCondominioWithDefaults(req.body);
    const newCondominioRef = db.collection("condominios").doc();
    condominioData.id = newCondominioRef.id;

    await newCondominioRef.set(condominioData);
    
    res.status(201).send({id: newCondominioRef.id});

  } catch (error) {
    console.error("Error creating condominio:", error);
    if (error instanceof Error) {
        res.status(500).send(`Error creating condominio: ${error.message}`);
    } else {
        res.status(500).send("An unexpected error occurred.");
    }
  }
});

// READ (all)
app.get("/condominios", async (req: Request, res: Response) => {
  try {
    const snapshot = await db.collection("condominios").get();
    const condominios: Condominio[] = [];
    snapshot.forEach((doc) => {
      condominios.push({id: doc.id, ...doc.data()} as Condominio);
    });
    res.status(200).json(condominios);
  } catch (error) {
    console.error("Error getting condominios:", error);
    res.status(500).send("Error getting condominios");
  }
});

// READ (one)
app.get("/condominios/:id", async (req: Request, res: Response) => {
  try {
    const doc = await db.collection("condominios").doc(req.params.id).get();
    if (!doc.exists) {
      res.status(404).send("Condominio not found");
    } else {
      res.status(200).json({id: doc.id, ...doc.data()} as Condominio);
    }
  } catch (error) {
    console.error("Error getting condominio:", error);
    res.status(500).send("Error getting condominio");
  }
});

// UPDATE
app.put("/condominios/:id", async (req: Request, res: Response) => {
    try {
        const condominioRef = db.collection("condominios").doc(req.params.id);
        const doc = await condominioRef.get();

        if (!doc.exists) {
            return res.status(404).send("Condominio not found");
        }

        const originalData = doc.data() as Condominio;
        const updatedData = req.body;
        updatedData.atualizadoEm = new Date().toISOString();

        // Backup before updating
        await createBackup(req.params.id, originalData);
        
        // Log changes
        const user = req.headers['x-user-email'] as string || 'unknown_user'; 
        const changes = req.body.changes || []; // Assume changes are sent from frontend
        if(changes.length > 0){
             await logChanges(req.params.id, changes, user);
        }

        await condominioRef.update(updatedData);
        
        res.status(200).send("Condominio updated successfully");

    } catch (error) {
        console.error("Error updating condominio:", error);
        res.status(500).send("Error updating condominio");
    }
});

// DELETE
app.delete("/condominios/:id", async (req: Request, res: Response) => {
  try {
    const condominioRef = db.collection("condominios").doc(req.params.id);
    const doc = await condominioRef.get();

    if (!doc.exists) {
      return res.status(404).send("Condominio not found");
    }

    const data = doc.data() as Condominio;

    // Backup before deleting
    await createBackup(req.params.id, data);
    
    await condominioRef.delete();
    
    res.status(200).send("Condominio deleted successfully");
  } catch (error) {
    console.error("Error deleting condominio:", error);
    res.status(500).send("Error deleting condominio");
  }
});


export const condominiosApi = functions.https.onRequest(app);