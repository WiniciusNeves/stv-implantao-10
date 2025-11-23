import { useState } from 'react';
import { History, Search, User, Calendar, FileText } from 'lucide-react';
import { HistoricoItem } from '../types';

interface HistoricoListProps {
  historico: HistoricoItem[];
}

export function HistoricoList({ historico }: HistoricoListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAcao, setFilterAcao] = useState<string>('TODAS');

  const filteredHistorico = historico.filter(h => {
    const matchesSearch = 
      h.condominioNome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.usuario.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.campo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAcao = filterAcao === 'TODAS' || h.acao === filterAcao;
    return matchesSearch && matchesAcao;
  });

  const getAcaoColor = (acao: string) => {
    switch (acao) {
      case 'CRIAÇÃO':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'EDIÇÃO':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'EXCLUSÃO':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString('pt-BR'),
      time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <History className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-emerald-900">Histórico de Modificações</h1>
              <p className="text-emerald-600">
                {filteredHistorico.length} registro{filteredHistorico.length !== 1 ? 's' : ''} encontrado{filteredHistorico.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0a6c45] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar no histórico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <select
            value={filterAcao}
            onChange={(e) => setFilterAcao(e.target.value)}
            className="px-4 py-3 border border-emerald-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
          >
            <option value="TODAS">Todas as Ações</option>
            <option value="CRIAÇÃO">Criação</option>
            <option value="EDIÇÃO">Edição</option>
            <option value="EXCLUSÃO">Exclusão</option>
          </select>
        </div>

        {/* Lista de Histórico */}
        {filteredHistorico.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-12 text-center">
            <History className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
            <h3 className="text-emerald-900 mb-2">Nenhum registro encontrado</h3>
            <p className="text-emerald-600">
              {historico.length === 0 
                ? 'O histórico de modificações aparecerá aqui.' 
                : 'Tente ajustar os filtros de busca.'}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredHistorico.map((item) => {
              const { date, time } = formatDateTime(item.dataHora);
              
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg border border-emerald-100 p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block px-3 py-1 rounded-lg text-sm border ${getAcaoColor(item.acao)}`}>
                          {item.acao}
                        </span>
                        <h3 className="text-emerald-900">{item.condominioNome}</h3>
                      </div>
                      
                      <div className="flex items-center gap-4 text-emerald-600 mb-3">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{item.usuario}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{date} às {time}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <FileText className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-emerald-700 mb-1">
                            <strong>Campo:</strong> {item.campo}
                          </p>
                          
                          {item.acao === 'EDIÇÃO' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-red-700 mb-1">Valor Anterior:</p>
                                <p className="text-red-900">
                                  {item.valorAnterior || '(vazio)'}
                                </p>
                              </div>
                              <div className="p-3 bg-green-50 border border-green-200 rounded-xl">
                                <p className="text-green-700 mb-1">Valor Novo:</p>
                                <p className="text-green-900">
                                  {item.valorNovo || '(vazio)'}
                                </p>
                              </div>
                            </div>
                          )}

                          {item.acao === 'CRIAÇÃO' && (
                            <div className="p-3 bg-green-50 border border-green-200 rounded-xl mt-2">
                              <p className="text-green-900">{item.valorNovo}</p>
                            </div>
                          )}

                          {item.acao === 'EXCLUSÃO' && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl mt-2">
                              <p className="text-red-900">{item.valorNovo}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}