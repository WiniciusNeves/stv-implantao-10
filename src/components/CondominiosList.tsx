import { useState } from 'react';
import { Edit2, Trash2, Search, Building2, ExternalLink } from 'lucide-react';
import { Condominio } from '../types';
import { useAuth } from './AuthContext';

interface CondominiosListProps {
  condominios: Condominio[];
  onEdit: (condominio: Condominio) => void;
  onDelete: (id: string) => void;
}

export function CondominiosList({ condominios, onEdit, onDelete }: CondominiosListProps) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('TODOS');

  const canEdit = user?.role !== 'ANALISADOR';
  const canDelete = user?.role === 'ADM';

  const filteredCondominios = condominios.filter(c => {
    const matchesSearch = c.nomeCondominio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'TODOS' || c.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'CONCLUÍDA':
        return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700';
      case 'EM ANDAMENTO':
        return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700';
      case 'NÃO INICIADA':
        return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600';
    }
  };

  const handleDelete = (id: string, nome: string) => {
    if (window.confirm(`Tem certeza que deseja excluir o condomínio "${nome}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-emerald-900 dark:text-emerald-100 mb-2">Lista de Condomínios</h1>
          <p className="text-emerald-600 dark:text-emerald-400">
            {filteredCondominios.length} condomínio{filteredCondominios.length !== 1 ? 's' : ''} encontrado{filteredCondominios.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0a6c45] dark:text-[#7BD955] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar condomínio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="TODOS">Todos os Status</option>
            <option value="NÃO INICIADA">Não Iniciada</option>
            <option value="EM ANDAMENTO">Em Andamento</option>
            <option value="CONCLUÍDA">Concluída</option>
          </select>
        </div>

        {/* Lista de Condomínios */}
        {filteredCondominios.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
            <Building2 className="w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4" />
            <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Nenhum condomínio encontrado</h3>
            <p className="text-emerald-600 dark:text-emerald-400">
              {condominios.length === 0 
                ? 'Adicione seu primeiro condomínio para começar.' 
                : 'Tente ajustar os filtros de busca.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCondominios.map((condominio) => (
              <div
                key={condominio.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all flex flex-col"
              >
                {/* Header com ícone e nome */}
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#0a6c45] dark:bg-[#7BD955]/20 dark:border dark:border-[#7BD955] rounded-xl flex items-center justify-center shadow-md mx-auto mb-3">
                    <Building2 className="w-8 h-8 text-white dark:text-[#7BD955]" />
                  </div>
                  <h3 className="text-gray-900 dark:text-gray-100 mb-1">{condominio.nomeCondominio}</h3>
                  <p className="text-[#0a6c45] dark:text-[#7BD955]">
                    Conta: {condominio.contaSituator || 'N/A'}
                  </p>
                </div>

                {/* Informações principais */}
                <div className="mb-4 flex-1">
                  {/* 3 Status lado a lado */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div>
                      <p className="text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center">Status Geral</p>
                      <span className={`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${getStatusColor(condominio.status)}`}>
                        {condominio.status === 'CONCLUÍDA' ? '✓ OK' : condominio.status === 'EM ANDAMENTO' ? 'Em And.' : 'Não Inic.'}
                      </span>
                    </div>
                    
                    <div>
                      <p className="text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center">CFTV</p>
                      <span className={`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${getStatusColor(condominio.cftv)}`}>
                        {condominio.cftv === 'CONCLUÍDO' ? '✓ OK' : condominio.cftv === 'EM ANDAMENTO' ? 'Em And.' : condominio.cftv === 'AGUARDANDO TÉCNICA' ? 'Aguard.' : 'Não Inic.'}
                      </span>
                    </div>

                    <div>
                      <p className="text-[#0a6c45] dark:text-[#7BD955] mb-1 text-xs text-center">Vistorias</p>
                      <span className={`inline-block px-1 py-1 rounded-lg text-xs border w-full text-center leading-tight ${getStatusColor(condominio.vistorias)}`}>
                        {condominio.vistorias === 'CONCLUÍDA' ? '✓ OK' : condominio.vistorias === 'EM ANDAMENTO' ? 'Em And.' : 'Não Inic.'}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[#0a6c45] dark:text-[#7BD955] mb-1 text-sm">Data Implantação</p>
                    <p className="text-gray-900 dark:text-gray-100 text-center">
                      {condominio.dataImplantacao 
                        ? new Date(condominio.dataImplantacao).toLocaleDateString('pt-BR')
                        : 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Link de cadastro */}
                {condominio.linkCadastro && (
                  <a
                    href={condominio.linkCadastro}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors mb-4 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Link de Cadastro</span>
                  </a>
                )}

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-emerald-100 dark:border-gray-700">
                  {canEdit && (
                    <button
                      onClick={() => onEdit(condominio)}
                      className="flex-1 p-3 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-xl transition-all flex items-center justify-center gap-2"
                      title="Editar"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Editar</span>
                    </button>
                  )}
                  
                  {canDelete && (
                    <button
                      onClick={() => handleDelete(condominio.id, condominio.nomeCondominio)}
                      className="p-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-xl transition-all"
                      title="Excluir"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}