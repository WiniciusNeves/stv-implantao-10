import { Settings, Maximize2, Type, Moon, Download, Check, History, Search, Database, Building2, Calendar, Eye, Trash2 } from 'lucide-react';
import { useConfiguracoes } from './ConfiguracoesContext';
import { Condominio, HistoricoItem } from '../types';
import { useState } from 'react';
import { HistoricoAlteracoes } from './HistoricoAlteracoes';
import { BackupsList } from './BackupsList';

interface ConfiguracoesProps {
  condominios: Condominio[];
  historico: HistoricoItem[];
  backups: Condominio[];
  onViewBackup: (backup: Condominio) => void;
  onDeleteBackup: (id: string) => void;
}

export function Configuracoes({ condominios, historico, backups, onViewBackup, onDeleteBackup }: ConfiguracoesProps) {
  const { densidade, tamanhoFonte, modoEscuro, setDensidade, setTamanhoFonte, setModoEscuro } = useConfiguracoes();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUser, setFilterUser] = useState<string>('todos');
  const [backupSearchTerm, setBackupSearchTerm] = useState('');
  const [showHistorico, setShowHistorico] = useState(false);
  const [showBackups, setShowBackups] = useState(false);

  const exportarParaCSV = () => {
    // Cabeçalhos
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

    // Dados
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
    ]);

    // Criar CSV
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
    ].join('\n');

    // Download
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

  // Filtrar histórico
  const usuarios = Array.from(new Set(historico.map(h => h.usuario)));

  const historicoFiltrado = historico
    .filter(item => {
      const matchSearch = searchTerm === '' || 
        item.condominioNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.campo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.valorAnterior.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.valorNovo.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchUser = filterUser === 'todos' || item.usuario === filterUser;
      
      return matchSearch && matchUser;
    })
    .sort((a, b) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());

  return (
    <>
      {showHistorico && (
        <HistoricoAlteracoes
          historico={historico}
          onClose={() => setShowHistorico(false)}
        />
      )}

      {showBackups && (
        <BackupsList
          backups={backups}
          onViewBackup={onViewBackup}
          onDeleteBackup={onDeleteBackup}
          onClose={() => setShowBackups(false)}
        />
      )}
      
      <div className="p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-emerald-900 dark:text-gray-100">Configurações</h1>
                <p className="text-emerald-600 dark:text-gray-400">Personalize sua experiência</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Tamanho da Fonte */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-emerald-900 dark:text-gray-100">Tamanho da Fonte</h3>
                  <p className="text-emerald-600 dark:text-gray-400">Ajuste o tamanho do texto</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <button
                  onClick={() => setTamanhoFonte('extra-pequeno')}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    tamanhoFonte === 'extra-pequeno'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-emerald-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {tamanhoFonte === 'extra-pequeno' && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-emerald-900 dark:text-gray-100 mb-1">Mini</div>
                    <div className="text-emerald-600 dark:text-gray-400">12px</div>
                  </div>
                </button>

                <button
                  onClick={() => setTamanhoFonte('pequeno')}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    tamanhoFonte === 'pequeno'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-emerald-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {tamanhoFonte === 'pequeno' && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-emerald-900 dark:text-gray-100 mb-1">Pequeno</div>
                    <div className="text-emerald-600 dark:text-gray-400">14px</div>
                  </div>
                </button>

                <button
                  onClick={() => setTamanhoFonte('medio')}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    tamanhoFonte === 'medio'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-emerald-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {tamanhoFonte === 'medio' && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-emerald-900 dark:text-gray-100 mb-1">Médio</div>
                    <div className="text-emerald-600 dark:text-gray-400">16px</div>
                  </div>
                </button>

                <button
                  onClick={() => setTamanhoFonte('grande')}
                  className={`relative p-4 rounded-xl border-2 transition-all ${
                    tamanhoFonte === 'grande'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-emerald-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {tamanhoFonte === 'grande' && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-emerald-900 dark:text-gray-100 mb-1">Grande</div>
                    <div className="text-emerald-600 dark:text-gray-400">18px</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Modo Escuro */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-emerald-900 dark:text-gray-100">Modo Escuro</h3>
                    <p className="text-emerald-600 dark:text-gray-400">Reduza o cansaço visual</p>
                  </div>
                </div>

                <button
                  onClick={() => setModoEscuro(!modoEscuro)}
                  className={`relative w-16 h-8 rounded-full transition-all ${
                    modoEscuro ? 'bg-gray-800' : 'bg-emerald-200'
                  }`}
                >
                  <div
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all ${
                      modoEscuro ? 'left-9' : 'left-1'
                    }`}
                  />
                </button>
              </div>
            </div>

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
                  <p className="text-emerald-600 dark:text-gray-400">Baixe seus dados em formato CSV</p>
                </div>
              </div>

              <button
                onClick={exportarParaCSV}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Exportar para CSV (Google Sheets)</span>
              </button>

              <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
                <p className="text-emerald-800 dark:text-emerald-300 mb-2">📊 Como importar no Google Sheets:</p>
                <ol className="text-emerald-700 dark:text-emerald-400 space-y-1 ml-4 list-decimal">
                  <li>Abra o Google Sheets</li>
                  <li>Vá em Arquivo → Importar</li>
                  <li>Selecione o arquivo CSV baixado</li>
                  <li>Escolha "Substituir planilha atual" ou "Criar nova planilha"</li>
                  <li>Clique em "Importar dados"</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}