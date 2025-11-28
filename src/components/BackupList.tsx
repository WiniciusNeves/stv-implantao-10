import { useState, useEffect } from 'react';
import { Database, Search, Building2, Calendar, Download, Eye, Trash2 } from 'lucide-react';
import { Condominio } from '../types';
import { db } from '../firebase';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';

interface BackupListProps {
  onViewBackup: (backup: Condominio) => void;
}

export function BackupList({ onViewBackup }: BackupListProps) {
  const [backups, setBackups] = useState<Condominio[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "backups"), (snapshot) => {
      const backupsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Condominio[];
      const sortedData = backupsData.sort((a, b) => new Date(b.atualizadoEm).getTime() - new Date(a.atualizadoEm).getTime());
      setBackups(sortedData);
    });
    return () => unsubscribe();
  }, []);

  const filteredBackups = backups.filter(b => 
    b.nomeCondominio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteBackup = async (id: string, nome: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o backup do condomínio "${nome}"?`)) {
      await deleteDoc(doc(db, "backups", id));
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
  
  const getStatusColor = (status: string = '') => {
    status = status || 'N/A';
    const baseClasses = 'inline-block px-2 py-1 rounded-lg text-sm border w-full text-center';
    switch (status) {
      case 'CONCLUÍDA':
      case 'CONCLUÍDO':
        return `${baseClasses} bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700`;
      case 'EM ANDAMENTO':
        return `${baseClasses} bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700`;
      case 'NÃO INICIADA':
      case 'A FAZER':
        return `${baseClasses} bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600`;
      case 'AGUARDANDO TÉCNICA':
        return `${baseClasses} bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-700`;
      case 'SOLICITADAS':
        return `${baseClasses} bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600`;
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-emerald-900 dark:text-emerald-100">Backup de Condomínios</h1>
                <p className="text-emerald-600 dark:text-emerald-400">
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

          <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-xl p-4">
            <p className="text-purple-900 dark:text-purple-200">
              <strong>💡 Info:</strong> Esta aba armazena automaticamente todos os condomínios que atingem o status "CONCLUÍDA". 
              Os dados são preservados mesmo se o condomínio original for editado ou excluído.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar no backup..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>
        </div>

        {filteredBackups.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
            <Database className="w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4" />
            <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Nenhum backup encontrado</h3>
            <p className="text-emerald-600 dark:text-emerald-400">
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 border-purple-200 dark:border-purple-700 p-6 hover:shadow-xl transition-all flex flex-col"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-emerald-900 dark:text-emerald-100 mb-1">{backup.nomeCondominio}</h3>
                  <p className="text-emerald-600 dark:text-emerald-400">
                    Conta: {backup.contaSituator || 'N/A'}
                  </p>
                </div>

                <div className="space-y-3 mb-4 flex-1">
                  <p className={getStatusColor(backup.status)}>Status: {backup.status || 'N/A'}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <p className={getStatusColor(backup.cftv)}>CFTV: {backup.cftv || 'N/A'}</p>
                    <p className={getStatusColor(backup.vistorias)}>Vistorias: {backup.vistorias || 'N/A'}</p>
                    <p className={getStatusColor(backup.instalacao)}>Instalação: {backup.instalacao || 'N/A'}</p>
                    <p className={getStatusColor(backup.licencas)}>Licenças: {backup.licencas || 'N/A'}</p>
                  </div>
                  <div className="pt-3 border-t border-purple-100 dark:border-purple-700">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Arquivado em: {new Date(backup.atualizadoEm).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-purple-100 dark:border-purple-700">
                  <button onClick={() => onViewBackup(backup)} className="flex-1 p-3 text-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 rounded-xl transition-all flex items-center justify-center gap-2" title="Visualizar">
                    <Eye className="w-4 h-4" /> <span>Ver</span>
                  </button>
                  <button onClick={() => handleDeleteBackup(backup.id, backup.nomeCondominio)} className="p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all" title="Excluir do Backup">
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
