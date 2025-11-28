import { useState, useEffect } from 'react';
import { History, Search, User, Calendar, FileText } from 'lucide-react';
import { HistoricoItem } from '../types';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export function HistoricoList() {
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAcao, setFilterAcao] = useState<string>('TODAS');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "historico"), (snapshot) => {
      const historicoData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as HistoricoItem[];
      const sortedData = historicoData.sort((a, b) => new Date(b.dataHora).getTime() - new Date(a.dataHora).getTime());
      setHistorico(sortedData);
    });
    return () => unsubscribe();
  }, []);

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
        return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700';
      case 'EDIÇÃO':
        return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-700';
      case 'EXCLUSÃO':
        return 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-400 dark:border-gray-600';
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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
              <History className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-emerald-900 dark:text-emerald-100">Histórico de Modificações</h1>
              <p className="text-emerald-600 dark:text-emerald-400">
                {filteredHistorico.length} registro{filteredHistorico.length !== 1 ? 's' : ''} encontrado{filteredHistorico.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#0a6c45] dark:text-[#7BD955] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar no histórico..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 dark:bg-gray-700 dark:text-gray-100"
            />
          </div>

          <select
            value={filterAcao}
            onChange={(e) => setFilterAcao(e.target.value)}
            className="px-4 py-3 border border-emerald-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 bg-white dark:bg-gray-700 dark:text-gray-100"
          >
            <option value="TODAS">Todas as Ações</option>
            <option value="CRIAÇÃO">Criação</option>
            <option value="EDIÇÃO">Edição</option>
            <option value="EXCLUSÃO">Exclusão</option>
          </select>
        </div>

        {filteredHistorico.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
            <History className="w-16 h-16 text-emerald-300 dark:text-emerald-600 mx-auto mb-4" />
            <h3 className="text-emerald-900 dark:text-emerald-100 mb-2">Nenhum registro encontrado</h3>
            <p className="text-emerald-600 dark:text-emerald-400">
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
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`inline-block px-3 py-1 rounded-lg text-sm border ${getAcaoColor(item.acao)}`}>
                          {item.acao}
                        </span>
                        <h3 className="text-emerald-900 dark:text-emerald-100">{item.condominioNome}</h3>
                      </div>
                      
                      <div className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 mb-3">
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
                        <FileText className="w-4 h-4 text-emerald-400 dark:text-emerald-500 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-emerald-700 dark:text-emerald-300 mb-1">
                            <strong>Campo:</strong> {item.campo}
                          </p>
                          
                          {item.acao === 'EDIÇÃO' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                              <div className="p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl">
                                <p className="text-red-700 dark:text-red-400 mb-1">Valor Anterior:</p>
                                <p className="text-red-900 dark:text-red-200">
                                  {item.valorAnterior || '(vazio)'}
                                </p>
                              </div>
                              <div className="p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl">
                                <p className="text-green-700 dark:text-green-400 mb-1">Valor Novo:</p>
                                <p className="text-green-900 dark:text-green-200">
                                  {item.valorNovo || '(vazio)'}
                                </p>
                              </div>
                            </div>
                          )}

                          {(item.acao === 'CRIAÇÃO' || item.acao === 'EXCLUSÃO') && (
                            <div className={`p-3 rounded-xl mt-2 ${item.acao === 'CRIAÇÃO' ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700' : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700'}`}>
                              <p className={`${item.acao === 'CRIAÇÃO' ? 'text-green-900 dark:text-green-200' : 'text-red-900 dark:text-red-200'}`}>
                                {item.valorNovo}
                              </p>
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