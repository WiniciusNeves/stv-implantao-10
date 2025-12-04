import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";
// CORREÇÃO: Adicionados espaços dentro das chaves (object-curly-spacing)
import { Condominio, HistoricoItem, Backup } from "./types";

if (admin.apps.length === 0) {
  admin.initializeApp();
}

const db = admin.firestore();
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const logChanges = async (
  condominioId: string,
  condominioNome: string,
  changes: Partial<HistoricoItem>[],
  usuario: string
) => {
  const batch = db.batch();
  const timestamp = new Date().toISOString();

  changes.forEach((change) => {
    const historicoRef = db.collection("historico").doc();
    const newHistorico: HistoricoItem = {
      id: historicoRef.id,
      condominioId,
      condominioNome,
      usuario,
      acao: "Atualização",
      campo: change.campo || "N/A",
      valorAnterior: change.valorAnterior || "",
      valorNovo: change.valorNovo || "",
      dataHora: timestamp,
    };
    batch.set(historicoRef, newHistorico);
  });

  await batch.commit();
};

const createBackup = async (condominioId: string) => {
  const condominioRef = db.collection("condominios").doc(condominioId);
  const doc = await condominioRef.get();
  if (!doc.exists) {
    return;
  }

  const originalData = doc.data() as Condominio;
  const backupData: Backup = {
    ...originalData,
    originalId: condominioId,
    backupDate: new Date().toISOString(),
  };

  const timestamp = Date.now();
  const backupRef = db.collection("backups").doc(
    `${condominioId}_${timestamp}`
  );
  await backupRef.set(backupData);
};

const initializeNewCondominio = (
  data: Partial<Condominio>,
  username: string
): Condominio => {
  const timestamp = new Date().toISOString();
  return {
    id: "",
    nomeCondominio: data.nomeCondominio || "",
    linkCadastro: data.linkCadastro || "",
    status: "NÃO INICIADA",
    ramais: [],
    cftv: "EM ANDAMENTO",
    contaSituator: "",
    configuracaoSituator: "EM ANDAMENTO",
    licencas: "SOLICITADAS",
    appStv: "EM ANDAMENTO",
    dataImplantacao: "",
    dispositivosAcesso: [],
    observacoes: "",
    vistorias: "NÃO INICIADA",
    parametrizacao: "A FAZER",
    instalacao: "EM ANDAMENTO",
    testesTecnico: "EM ANDAMENTO",
    entregaInstrucao: [],
    criadoEm: timestamp,
    atualizadoEm: timestamp,
    criadoPor: username,
  };
};

app.post("/condominios", async (req: express.Request, res: express.Response) => {
  try {
    const username =
      (req.headers["x-user-name"] as string) || "system";
    const newCondoData = initializeNewCondominio(req.body, username);

    if (!newCondoData.nomeCondominio) {
      return res.status(400).send("O nome do condomínio é obrigatório.");
    }

    const newCondominioRef = db.collection("condominios").doc();
    newCondoData.id = newCondominioRef.id;

    await newCondominioRef.set(newCondoData);

    // CORREÇÃO: Espaço no objeto { id: ... }
    return res.status(201).send({ id: newCondominioRef.id });
  } catch (error) {
    console.error("Erro ao criar condomínio:", error);
    return res.status(500).send("Ocorreu um erro inesperado.");
  }
});

app.get("/condominios", async (req: express.Request, res: express.Response) => {
  try {
    const snapshot = await db
      .collection("condominios")
      .orderBy("nomeCondominio")
      .get();
    const condominios: Condominio[] = snapshot.docs.map(
      // CORREÇÃO: Espaço no objeto { id: ... }
      (doc) => ({ id: doc.id, ...doc.data() } as Condominio)
    );
    return res.status(200).json(condominios);
  } catch (error) {
    console.error("Erro ao buscar condomínios:", error);
    return res.status(500).send("Erro ao buscar condomínios.");
  }
});

// CORREÇÃO: Quebra de linha para max-len
app.get("/condominios/:id", async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const doc = await db.collection("condominios").doc(req.params.id).get();
    if (!doc.exists) {
      return res.status(404).send("Condomínio não encontrado.");
    }
    // CORREÇÃO: Espaço no objeto { id: ... }
    return res.status(200).json({ id: doc.id, ...doc.data() } as Condominio);
  } catch (error) {
    console.error("Erro ao buscar condomínio:", error);
    return res.status(500).send("Erro ao buscar condomínio.");
  }
});

app.put("/condominios/:id", async (req: express.Request, res: express.Response) => {
  try {
    const condominioId = req.params.id;
    const userRole = req.headers["x-user-role"] as string;
    const userName = (req.headers["x-user-name"] as string) || "system";

    if (!userRole) {
      return res
        .status(403).send("A função do usuário (role) é necessária.");
    }

    const condominioRef = db.collection("condominios").doc(condominioId);
    const doc = await condominioRef.get();

    if (!doc.exists) {
      return res.status(404).send("Condomínio não encontrado.");
    }

    const originalData = doc.data() as Condominio;
    const newData = req.body as Partial<Condominio>;

    const canEditMonitoramento =
      userRole === "ADM" || userRole === "MONITORAMENTO";
    const canEditTecnica = userRole === "ADM" || userRole === "TECNICO";
    const canEditGeral = userRole === "ADM";

    if (userRole === "ANALISADOR") {
      return res
        .status(403)
        .send("Usuário não tem permissão para editar.");
    }

    const detectChanges = (): Partial<HistoricoItem>[] => {
      const changes: Partial<HistoricoItem>[] = [];
      const keys = Object.keys(newData) as (keyof Condominio)[];

      keys.forEach((field) => {
        const valorAnterior = originalData[field];
        const valorNovo = newData[field];
        const strAnterior = Array.isArray(valorAnterior) ?
          valorAnterior.join(", ") :
          String(valorAnterior ?? "");
        const strNovo = Array.isArray(valorNovo) ?
          valorNovo.join(", ") :
          String(valorNovo ?? "");

        if (strAnterior !== strNovo) {
          changes.push({
            campo: field,
            valorAnterior: strAnterior,
            valorNovo: strNovo,
          });
        }
      });
      return changes;
    };

    const allChanges = detectChanges();
    if (allChanges.length === 0) {
      return res.status(200).send("Nenhuma alteração detectada.");
    }

    await createBackup(condominioId);

    const allowedUpdateData: Record<string, unknown> = {};
    const loggedChanges: Partial<HistoricoItem>[] = [];

    allChanges.forEach((change) => {
      const field = change.campo as keyof Condominio;
      if (!field) return;

      const isMonitoramentoField = [
        "nomeCondominio",
        "linkCadastro",
        "status",
        "ramais",
        "cftv",
        "contaSituator",
        "configuracaoSituator",
        "licencas",
        "appStv",
        "dataImplantacao",
        "dispositivosAcesso",
        "observacoes",
      ].includes(field);

      const isTecnicaField = [
        "vistorias",
        "parametrizacao",
        "instalacao",
        "testesTecnico",
        "entregaInstrucao",
      ].includes(field);

      let isAllowed = false;
      if (canEditGeral) {
        isAllowed = true;
      } else if (
        canEditMonitoramento &&
        isMonitoramentoField
      ) {
        isAllowed = true;
      } else if (
        canEditTecnica &&
        isTecnicaField
      ) {
        isAllowed = true;
      }

      if (isAllowed) {
        allowedUpdateData[field] = newData[field];
        loggedChanges.push(change);
      }
    });

    if (Object.keys(allowedUpdateData).length === 0) {
      // CORREÇÃO: Quebra de linha para evitar erro max-len (linha 246 no original)
      return res
        .status(403)
        .send("Você não tem permissão para alterar os campos especificados.");
    }

    allowedUpdateData.atualizadoEm = new Date().toISOString();
    await condominioRef.update(allowedUpdateData);

    await logChanges(
      condominioId,
      originalData.nomeCondominio,
      loggedChanges,
      userName
    );

    return res.status(200).send("Condomínio atualizado com sucesso.");
  } catch (error) {
    console.error("Erro ao atualizar condomínio:", error);
    // CORREÇÃO: Quebra de linha
    return res
      .status(500)
      .send("Ocorreu um erro inesperado ao atualizar o condomínio.");
  }
});

// CORREÇÃO: Quebra de linha na definição da função para max-len
app.delete("/condominios/:id", async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const userRole = req.headers["x-user-role"] as string;
    if (userRole !== "ADM") {
      return res
        .status(403)
        .send("Apenas administradores podem deletar condomínios.");
    }

    const condominioId = req.params.id;
    await createBackup(condominioId);
    await db.collection("condominios").doc(condominioId).delete();

    return res.status(200).send("Condomínio deletado com sucesso.");
  } catch (error) {
    console.error("Erro ao deletar condomínio:", error);
    return res.status(500).send("Erro ao deletar condomínio.");
  }
});

// ...existing code...
app.get("/seed-initial-users", async (req: express.Request, res: express.Response) => {
  const usersToCreate = [
    { email: "marcos@stv.com.br", password: "@marcos123", role: "ADM" },
    { email: "lino@stv.com.br", password: "@lino123", role: "MONITORAMENTO" },
    { email: "lucas@stv.com.br", password: "@lucas123", role: "TECNICO" },
    { email: "alisson@stv.com.br", password: "@alisson123", role: "ANALISADOR" },
  ];

  const results: Array<Record<string, unknown>> = [];

  for (const user of usersToCreate) {
    try {
      const userRecord = await admin.auth().createUser({
        email: user.email,
        password: user.password,
        emailVerified: true,
        displayName: `${user.role} - ${user.email.split("@")[0].toUpperCase()}`,
      });

      await admin.auth().setCustomUserClaims(userRecord.uid, { role: user.role });

      console.log(`[SUCESSO] Usuário ${user.email} criado com role ${user.role}.`);
      results.push({ email: user.email, status: "CRIADO", uid: userRecord.uid });
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string };
      if (err.code === "auth/email-already-exists") {
        try {
          const existingUser = await admin.auth().getUserByEmail(user.email);
          await admin.auth().setCustomUserClaims(existingUser.uid, { role: user.role });

          console.log(`[ATUALIZADO] Usuário ${user.email} já existia. Role atualizada para ${user.role}.`);
          results.push({ email: user.email, status: "JÁ EXISTIA (ROLE ATUALIZADA)", uid: existingUser.uid });
        } catch (updateError) {
          results.push({ email: user.email, status: "ERRO AO ATUALIZAR", error: String(updateError) });
        }
      } else {
        console.error(`[ERRO] Falha ao criar ${user.email}:`, err);
        results.push({ email: user.email, status: "ERRO", error: err.message ?? String(err) });
      }
    }
  }

  return res.json({
    message: "Processo de criação em massa finalizado.",
    details: results,
  });
});
// ...existing code...

export const condominiosApi = functions.https.onRequest(app);