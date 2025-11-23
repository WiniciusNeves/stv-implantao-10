import { Database, Search, ArrowLeft, Eye, Trash2, Building2, Calendar } from 'lucide-react';
import { Condominio } from '../types';
import { useState } from 'react';

interface BackupsListProps {
  backups: Condominio[];
  onViewBackup: (backup: Condominio) => void;
  onDeleteBackup: (id: string) => void;
  onClose: () => void;
}

export function BackupsList({ backups, onViewBackup, onDeleteBackup, onClose }: BackupsListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const backupsFiltrados = backups
    .filter(backup => 
      searchTerm === '' || 
      backup.nomeCondominio.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.dataImplantacao || '').getTime() - new Date(a.dataImplantacao || '').getTime());

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
      <div className="p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={onClose}
                className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl flex items-center justify-center shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex-1">
                <h1 className="text-emerald-900 dark:text-gray-100">Backups</h1>
                <p className="text-emerald-600 dark:text-gray-400">
                  {backupsFiltrados.length} {backupsFiltrados.length === 1 ? 'backup encontrado' : 'backups encontrados'}
                </p>
              </div>
            </div>
          </div>

          {/* Busca */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 dark:text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por condomínio..."
                className="w-full pl-10 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Lista de Backups */}
          <div className="space-y-4">
            {backupsFiltrados.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
                <Database className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Nenhum backup encontrado</p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all"
                  >
                    Limpar busca
                  </button>
                )}
              </div>
            ) : (
              backupsFiltrados.map((backup) => (
                <div
                  key={backup.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="text-emerald-900 dark:text-gray-100">
                          {backup.nomeCondominio}
                        </h4>
                      </div>
                      <p className="text-emerald-600 dark:text-gray-400">
                        Backup do condomínio
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 justify-end mb-1">
                        <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <p className="text-emerald-700 dark:text-gray-300">
                          {new Date(backup.dataImplantacao || '').toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <p className="text-emerald-600 dark:text-gray-400">
                        {new Date(backup.dataImplantacao || '').toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-4 bg-emerald-50 dark:bg-gray-700/50 rounded-xl">
                    <div>
                      <p className="text-emerald-600 dark:text-gray-400 mb-1">Status:</p>
                      <p className="text-emerald-900 dark:text-gray-100">{backup.status || '-'}</p>
                    </div>
                    <div>
                      <p className="text-emerald-600 dark:text-gray-400 mb-1">Ramais:</p>
                      <p className="text-emerald-900 dark:text-gray-100">{backup.ramais.join(', ') || '-'}</p>
                    </div>
                    <div>
                      <p className="text-emerald-600 dark:text-gray-400 mb-1">CFTV:</p>
                      <p className="text-emerald-900 dark:text-gray-100">{backup.cftv || '-'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onViewBackup(backup);
                        onClose();
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Visualizar</span>
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Tem certeza que deseja excluir o backup do condomínio "${backup.nomeCondominio}"?`)) {
                          onDeleteBackup(backup.id);
                        }
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Excluir</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
