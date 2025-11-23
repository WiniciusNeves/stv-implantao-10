import { History, Search, X, ArrowLeft } from 'lucide-react';
import { HistoricoItem } from '../types';
import { useState } from 'react';

interface HistoricoAlteracoesProps {
  historico: HistoricoItem[];
  onClose: () => void;
}

export function HistoricoAlteracoes({ historico, onClose }: HistoricoAlteracoesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterUser, setFilterUser] = useState<string>('todos');

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
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto">
      <div className="p-4 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <button
                onClick={onClose}
                className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="flex-1">
                <h1 className="text-emerald-900 dark:text-gray-100">Histórico de Alterações</h1>
                <p className="text-emerald-600 dark:text-gray-400">
                  {historicoFiltrado.length} {historicoFiltrado.length === 1 ? 'alteração encontrada' : 'alterações encontradas'}
                </p>
              </div>
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Busca */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 dark:text-gray-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por condomínio ou campo..."
                  className="w-full pl-10 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100"
                />
              </div>

              {/* Filtro por usuário */}
              <select
                value={filterUser}
                onChange={(e) => setFilterUser(e.target.value)}
                className="px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="todos">Todos os usuários</option>
                {usuarios.map(usuario => (
                  <option key={usuario} value={usuario}>{usuario}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Lista de Histórico */}
          <div className="space-y-4">
            {historicoFiltrado.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
                <History className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Nenhuma alteração encontrada</p>
                {(searchTerm || filterUser !== 'todos') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilterUser('todos');
                    }}
                    className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all"
                  >
                    Limpar filtros
                  </button>
                )}
              </div>
            ) : (
              historicoFiltrado.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-emerald-900 dark:text-gray-100 mb-1">
                        {item.condominioNome}
                      </h4>
                      <p className="text-emerald-600 dark:text-gray-400">
                        <span className="font-medium">{item.campo}</span> alterado
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-emerald-700 dark:text-gray-300">
                        {new Date(item.dataHora).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-emerald-600 dark:text-gray-400">
                        {new Date(item.dataHora).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-emerald-50 dark:bg-gray-700/50 rounded-xl">
                    <div>
                      <p className="text-emerald-600 dark:text-gray-400 mb-1">Valor Anterior:</p>
                      <p className="text-emerald-900 dark:text-gray-100">{item.valorAnterior || '-'}</p>
                    </div>
                    <div>
                      <p className="text-emerald-600 dark:text-gray-400 mb-1">Valor Novo:</p>
                      <p className="text-emerald-900 dark:text-gray-100">{item.valorNovo || '-'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-600 text-white rounded-lg">
                      {item.usuario}
                    </span>
                    <span className="text-emerald-600 dark:text-gray-400">{item.acao}</span>
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
