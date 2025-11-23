import { useState } from 'react';
import { Database, Search, Building2, Calendar, Download, Eye, Trash2 } from 'lucide-react';
import { Condominio } from '../types';

interface BackupListProps {
  backups: Condominio[];
  onViewBackup: (backup: Condominio) => void;
  onDeleteBackup: (id: string) => void;
}

export function BackupList({ backups, onViewBackup, onDeleteBackup }: BackupListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBackups = backups.filter(b => 
    b.nomeCondominio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONCLUÍDA':
      case 'CONCLUÍDO':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'EM ANDAMENTO':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'NÃO INICIADA':
      case 'A FAZER':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'AGUARDANDO TÉCNICA':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'SOLICITADAS':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleDelete = (id: string, nome: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o backup do condomínio "${nome}"?`)) {
      onDeleteBackup(id);
    }
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(backups, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `backup-condominios-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-emerald-900">Backup de Condomínios</h1>
                <p className="text-emerald-600">
                  {filteredBackups.length} condomínio{filteredBackups.length !== 1 ? 's' : ''} concluído{filteredBackups.length !== 1 ? 's' : ''} arquivado{filteredBackups.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>

            {backups.length > 0 && (
              <button
                onClick={exportToJSON}
                className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Exportar Backup</span>
              </button>
            )}
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-purple-900">
              <strong>💡 Info:</strong> Esta aba armazena automaticamente todos os condomínios que atingem o status "CONCLUÍDA". 
              Os dados são preservados mesmo se o condomínio original for editado ou excluído.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar no backup..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Lista de Backups */}
        {filteredBackups.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-12 text-center">
            <Database className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-emerald-900 mb-2">Nenhum backup encontrado</h3>
            <p className="text-emerald-600">
              {backups.length === 0 
                ? 'Os condomínios com status "CONCLUÍDA" serão automaticamente arquivados aqui.' 
                : 'Tente ajustar o termo de busca.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBackups.map((backup) => (
              <div
                key={backup.id}
                className="bg-white rounded-2xl shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl transition-all flex flex-col"
              >
                {/* Header */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-emerald-900 mb-1">{backup.nomeCondominio}</h3>
                  <p className="text-emerald-600">
                    Conta: {backup.contaSituator || 'N/A'}
                  </p>
                </div>

                {/* Informações */}
                <div className="space-y-3 mb-4 flex-1">
                  <div>
                    <p className="text-emerald-600 mb-1">Status Geral</p>
                    <span className={`inline-block px-2 py-1 rounded-lg text-sm border w-full text-center ${getStatusColor(backup.status)}`}>
                      {backup.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-emerald-600 mb-1 text-sm">CFTV</p>
                      <span className={`inline-block px-2 py-1 rounded-lg text-xs border w-full text-center ${getStatusColor(backup.cftv)}`}>
                        {backup.cftv === 'CONCLUÍDO' ? '✓' : backup.cftv}
                      </span>
                    </div>
                    <div>
                      <p className="text-emerald-600 mb-1 text-sm">Vistorias</p>
                      <span className={`inline-block px-2 py-1 rounded-lg text-xs border w-full text-center ${getStatusColor(backup.vistorias)}`}>
                        {backup.vistorias === 'CONCLUÍDA' ? '✓' : backup.vistorias}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-emerald-600 mb-1 text-sm">Instalação</p>
                      <span className={`inline-block px-2 py-1 rounded-lg text-xs border w-full text-center ${getStatusColor(backup.instalacao)}`}>
                        {backup.instalacao === 'CONCLUÍDA' ? '✓' : backup.instalacao}
                      </span>
                    </div>
                    <div>
                      <p className="text-emerald-600 mb-1 text-sm">Licenças</p>
                      <span className={`inline-block px-2 py-1 rounded-lg text-xs border w-full text-center ${getStatusColor(backup.licencas)}`}>
                        {backup.licencas === 'CONCLUÍDO' ? '✓' : backup.licencas}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-purple-100">
                    <div className="flex items-center gap-2 text-purple-600 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Arquivado em: {new Date(backup.atualizadoEm).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-purple-100">
                  <button
                    onClick={() => onViewBackup(backup)}
                    className="flex-1 p-3 text-purple-600 hover:bg-purple-50 rounded-xl transition-all flex items-center justify-center gap-2"
                    title="Visualizar"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver</span>
                  </button>
                  
                  <button
                    onClick={() => handleDelete(backup.id, backup.nomeCondominio)}
                    className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all"
                    title="Excluir do Backup"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
