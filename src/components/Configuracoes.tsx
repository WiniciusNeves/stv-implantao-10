import { useState, useEffect } from 'react';
import { Settings, Download, History, Search, Database } from 'lucide-react';
import { useConfiguracoes } from './ConfiguracoesContext';
import { Condominio, HistoricoItem } from '../types';
import { HistoricoAlteracoes } from './HistoricoAlteracoes';
import { BackupsList } from './BackupsList';
import { db } from '../firebase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

interface ConfiguracoesProps {
  onViewBackup: (backup: Condominio) => void;
}

export function Configuracoes({ onViewBackup }: ConfiguracoesProps) {
  const { setDensidade, setTamanhoFonte, setModoEscuro } = useConfiguracoes();
  const [condominios, setCondominios] = useState<Condominio[]>([]);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [backups, setBackups] = useState<Condominio[]>([]);
  const [showHistorico, setShowHistorico] = useState(false);
  const [showBackups, setShowBackups] = useState(false);

  useEffect(() => {
    const unsubCondominios = onSnapshot(collection(db, "condominios"), (snapshot) => {
      setCondominios(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Condominio[]);
    });
    const unsubHistorico = onSnapshot(collection(db, "historico"), (snapshot) => {
      setHistorico(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as HistoricoItem[]);
    });
    const unsubBackups = onSnapshot(collection(db, "backups"), (snapshot) => {
      setBackups(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Condominio[]);
    });

    return () => {
      unsubCondominios();
      unsubHistorico();
      unsubBackups();
    };
  }, []);

  const handleDeleteBackup = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este backup? Esta ação não pode ser desfeita.")) {
      await deleteDoc(doc(db, "backups", id));
    }
  };

  const exportarParaCSV = () => {
    const headers = [
      'Nome',
      'Link Cadastro',
      'Status',
      'Ramais',
      'CFTV',
      'Conta Situator',
      'Configuração Situator',
      'Licenças',
      'App STV',
      'Data Implantação',
      'Observações',
      'Vistorias',
      'Parametrização',
      'Instalação',
      'Testes Técnico'
    ];
    const rows = condominios.map(c => [
      c.nomeCondominio,
      c.linkCadastro || '',
      c.status,
      c.ramais.join(', '),
      c.cftv,
      c.contaSituator || '',
      c.configuracaoSituator || '',
      c.licencas,
      c.appStv || '',
      c.dataImplantacao || '',
      c.observacoes || '',
      c.vistorias,
      c.parametrizacao || '',
      c.instalacao,
      c.testesTecnico || ''
    ].map(cell => `"${String(cell).replace(/"/g, '""')}"`));

    const csvContent = [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `condominios_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {showHistorico && (
        <HistoricoAlteracoes onClose={() => setShowHistorico(false)} />
      )}

      {showBackups && (
        <BackupsList
          onViewBackup={onViewBackup}
          onDeleteBackup={handleDeleteBackup}
          onClose={() => setShowBackups(false)}
        />
      )}
      
      <div className="p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-emerald-900 dark:text-gray-100">Configurações</h1>
                  <p className="text-emerald-600 dark:text-gray-400">Personalize sua experiência e gerencie os dados</p>
                </div>
              </div>
          </div>

          <div className="space-y-6">
             {/* Histórico de Alterações - Botão */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-xl flex items-center justify-center">
                    <History className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-emerald-900 dark:text-gray-100">Histórico de Alterações</h3>
                    <p className="text-emerald-600 dark:text-gray-400">
                      {historico.length} {historico.length === 1 ? 'alteração registrada' : 'alterações registradas'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowHistorico(true)}
                  className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Buscar</span>
                </button>
              </div>
            </div>

            {/* Backups - Botão */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-500 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-emerald-900 dark:text-gray-100">Backups</h3>
                    <p className="text-emerald-600 dark:text-gray-400">
                      {backups.length} {backups.length === 1 ? 'backup' : 'backups'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBackups(true)}
                  className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl hover:from-gray-600 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Buscar</span>
                </button>
              </div>
            </div>

            {/* Exportar Dados */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-emerald-900 dark:text-gray-100">Exportar Dados</h3>
                  <p className="text-emerald-600 dark:text-gray-400">Baixe os dados dos condomínios em formato CSV</p>
                </div>
              </div>

              <button
                onClick={exportarParaCSV}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Exportar Condomínios (CSV)</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}