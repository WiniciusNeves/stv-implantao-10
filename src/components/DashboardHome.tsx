import { useState } from 'react';
import { Building2, CheckCircle, Clock, AlertCircle, ClipboardCheck, XCircle, TrendingUp, Calendar, ArrowLeft, MapPin } from 'lucide-react';
import { Condominio } from '../types';

interface DashboardHomeProps {
  condominios: Condominio[];
}

type FilterType = 
  | 'all'
  | 'concluidos'
  | 'emAndamento'
  | 'naoIniciados'
  | 'vistoriasConcluidas'
  | 'vistoriasEmAndamento'
  | 'vistoriasNaoIniciadas'
  | 'cftvConcluido'
  | 'cftvEmAndamento'
  | 'cftvAguardando'
  | 'instalacaoConcluida'
  | 'instalacaoEmAndamento'
  | 'proximasImplantacoes';

export function DashboardHome({ condominios }: DashboardHomeProps) {
  const [filterType, setFilterType] = useState<FilterType | null>(null);

  // Estatísticas gerais
  const totalCondominios = condominios.length;
  const concluidos = condominios.filter(c => c.status === 'CONCLUÍDA').length;
  const emAndamento = condominios.filter(c => c.status === 'EM ANDAMENTO').length;
  const naoIniciados = condominios.filter(c => c.status === 'NÃO INICIADA').length;

  // Estatísticas de Vistorias
  const vistoriasConcluidas = condominios.filter(c => c.vistorias === 'CONCLUÍDA').length;
  const vistoriasEmAndamento = condominios.filter(c => c.vistorias === 'EM ANDAMENTO').length;
  const vistoriasNaoIniciadas = condominios.filter(c => c.vistorias === 'NÃO INICIADA').length;

  // Estatísticas de CFTV
  const cftvConcluido = condominios.filter(c => c.cftv === 'CONCLUÍDO').length;
  const cftvEmAndamento = condominios.filter(c => c.cftv === 'EM ANDAMENTO').length;
  const cftvAguardando = condominios.filter(c => c.cftv === 'AGUARDANDO TÉCNICA').length;

  // Estatísticas de Instalação
  const instalacaoConcluida = condominios.filter(c => c.instalacao === 'CONCLUÍDA').length;
  const instalacaoEmAndamento = condominios.filter(c => c.instalacao === 'EM ANDAMENTO').length;

  // Próximas implantações (próximos 30 dias)
  const hoje = new Date();
  const proximos30Dias = new Date();
  proximos30Dias.setDate(hoje.getDate() + 30);
  
  const proximasImplantacoes = condominios.filter(c => {
    if (!c.dataImplantacao) return false;
    const dataImpl = new Date(c.dataImplantacao);
    return dataImpl >= hoje && dataImpl <= proximos30Dias;
  }).length;

  // Função para filtrar condomínios baseado no tipo
  const getFilteredCondominios = (): { condominios: Condominio[], title: string } => {
    switch (filterType) {
      case 'all':
        return { condominios, title: 'Todos os Condomínios' };
      case 'concluidos':
        return { condominios: condominios.filter(c => c.status === 'CONCLUÍDA'), title: 'Condomínios Concluídos' };
      case 'emAndamento':
        return { condominios: condominios.filter(c => c.status === 'EM ANDAMENTO'), title: 'Condomínios em Andamento' };
      case 'naoIniciados':
        return { condominios: condominios.filter(c => c.status === 'NÃO INICIADA'), title: 'Condomínios Não Iniciados' };
      case 'vistoriasConcluidas':
        return { condominios: condominios.filter(c => c.vistorias === 'CONCLUÍDA'), title: 'Vistorias Concluídas' };
      case 'vistoriasEmAndamento':
        return { condominios: condominios.filter(c => c.vistorias === 'EM ANDAMENTO'), title: 'Vistorias em Andamento' };
      case 'vistoriasNaoIniciadas':
        return { condominios: condominios.filter(c => c.vistorias === 'NÃO INICIADA'), title: 'Vistorias Não Iniciadas' };
      case 'cftvConcluido':
        return { condominios: condominios.filter(c => c.cftv === 'CONCLUÍDO'), title: 'CFTV Concluído' };
      case 'cftvEmAndamento':
        return { condominios: condominios.filter(c => c.cftv === 'EM ANDAMENTO'), title: 'CFTV em Andamento' };
      case 'cftvAguardando':
        return { condominios: condominios.filter(c => c.cftv === 'AGUARDANDO TÉCNICA'), title: 'CFTV Aguardando Técnica' };
      case 'instalacaoConcluida':
        return { condominios: condominios.filter(c => c.instalacao === 'CONCLUÍDA'), title: 'Instalações Concluídas' };
      case 'instalacaoEmAndamento':
        return { condominios: condominios.filter(c => c.instalacao === 'EM ANDAMENTO'), title: 'Instalações em Andamento' };
      case 'proximasImplantacoes':
        return { 
          condominios: condominios.filter(c => {
            if (!c.dataImplantacao) return false;
            const dataImpl = new Date(c.dataImplantacao);
            return dataImpl >= hoje && dataImpl <= proximos30Dias;
          }), 
          title: 'Próximas Implantações (30 dias)' 
        };
      default:
        return { condominios: [], title: '' };
    }
  };

  // Se tem filtro ativo, mostrar lista filtrada
  if (filterType) {
    const { condominios: filtered, title } = getFilteredCondominios();

    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header com botão voltar */}
          <div className="mb-8">
            <button
              onClick={() => setFilterType(null)}
              className="flex items-center gap-2 mb-4 px-4 py-2 bg-white dark:bg-gray-800 border border-[#0a6c45]/20 dark:border-gray-700 rounded-xl text-[#0a6c45] dark:text-[#0a6c45]/80 hover:bg-[#0a6c45]/5 dark:hover:bg-[#0a6c45]/20 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Dashboard</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0a6c45] rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900 dark:text-gray-100">{title}</h1>
                <p className="text-[#0a6c45] dark:text-gray-400">{filtered.length} condomínio(s) encontrado(s)</p>
              </div>
            </div>
          </div>

          {/* Lista de Condomínios */}
          {filtered.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-12 text-center">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-gray-700 dark:text-gray-300 mb-2">Nenhum condomínio encontrado</h3>
              <p className="text-gray-500 dark:text-gray-400">Não há condomínios que correspondam a este filtro.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((condominio) => (
                <div
                  key={condominio.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-emerald-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all"
                >
                  {/* Nome do Condomínio - Destaque Principal */}
                  <div className="mb-4 pb-4 border-b border-[#0a6c45]/20 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-[#0a6c45] dark:text-[#0a6c45]/80" />
                      <h3 className="text-gray-900 dark:text-gray-100 flex-1">{condominio.nomeCondominio}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-lg text-sm ${
                        condominio.status === 'CONCLUÍDA' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : condominio.status === 'EM ANDAMENTO'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {condominio.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 dark:text-gray-400">CFTV:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        condominio.cftv === 'CONCLUÍDO'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : condominio.cftv === 'EM ANDAMENTO'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                      }`}>
                        {condominio.cftv}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 dark:text-gray-400">Vistorias:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        condominio.vistorias === 'CONCLUÍDA'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : condominio.vistorias === 'EM ANDAMENTO'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {condominio.vistorias}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 dark:text-gray-400">Instalação:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        condominio.instalacao === 'CONCLUÍDA'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : condominio.instalacao === 'EM ANDAMENTO'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}>
                        {condominio.instalacao}
                      </span>
                    </div>

                    {condominio.dataImplantacao && (
                      <div className="flex items-center justify-between pt-2 border-t border-emerald-100 dark:border-gray-700">
                        <span className="text-emerald-600 dark:text-gray-400">Implantação:</span>
                        <span className="text-emerald-700 dark:text-gray-300">
                          {new Date(condominio.dataImplantacao).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    )}

                    {condominio.licencas && (
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-600 dark:text-gray-400">Licenças:</span>
                        <span className="text-emerald-700 dark:text-gray-300">{condominio.licencas}</span>
                      </div>
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

  const statCards = [
    {
      title: 'Total de Condomínios',
      value: totalCondominios,
      icon: Building2,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
      filter: 'all' as FilterType,
    },
    {
      title: 'Concluídos',
      value: concluidos,
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      percentage: totalCondominios > 0 ? Math.round((concluidos / totalCondominios) * 100) : 0,
      filter: 'concluidos' as FilterType,
    },
    {
      title: 'Em Andamento',
      value: emAndamento,
      icon: Clock,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      percentage: totalCondominios > 0 ? Math.round((emAndamento / totalCondominios) * 100) : 0,
      filter: 'emAndamento' as FilterType,
    },
    {
      title: 'Não Iniciados',
      value: naoIniciados,
      icon: AlertCircle,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      iconColor: 'text-gray-600',
      percentage: totalCondominios > 0 ? Math.round((naoIniciados / totalCondominios) * 100) : 0,
      filter: 'naoIniciados' as FilterType,
    },
  ];

  const vistoriasCards = [
    {
      title: 'Vistorias Concluídas',
      value: vistoriasConcluidas,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      filter: 'vistoriasConcluidas' as FilterType,
    },
    {
      title: 'Vistorias em Andamento',
      value: vistoriasEmAndamento,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      filter: 'vistoriasEmAndamento' as FilterType,
    },
    {
      title: 'Vistorias Não Iniciadas',
      value: vistoriasNaoIniciadas,
      icon: XCircle,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      filter: 'vistoriasNaoIniciadas' as FilterType,
    },
  ];

  const detailCards = [
    {
      title: 'CFTV Concluído',
      value: cftvConcluido,
      subtitle: `${cftvEmAndamento} em andamento, ${cftvAguardando} aguardando`,
      icon: CheckCircle,
      color: 'text-emerald-600',
      filter: 'cftvConcluido' as FilterType,
    },
    {
      title: 'Instalações Concluídas',
      value: instalacaoConcluida,
      subtitle: `${instalacaoEmAndamento} em andamento`,
      icon: ClipboardCheck,
      color: 'text-teal-600',
      filter: 'instalacaoConcluida' as FilterType,
    },
    {
      title: 'Próximas Implantações',
      value: proximasImplantacoes,
      subtitle: 'Próximos 30 dias',
      icon: Calendar,
      color: 'text-purple-600',
      filter: 'proximasImplantacoes' as FilterType,
    },
  ];

  return (
    <div className="p-4 md:p-8 min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7BD955] rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform">
              <TrendingUp className="w-7 h-7 text-white drop-shadow-md" />
            </div>
            <div>
              <h1 className="text-gray-900 dark:text-gray-100 drop-shadow-sm">Dashboard</h1>
              <p className="text-[#0a6c45] dark:text-[#7BD955]">Visão geral dos condomínios cadastrados</p>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <button
                key={index}
                onClick={() => setFilterType(stat.filter)}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-4 md:p-6 hover:shadow-2xl hover:scale-105 hover:border-[#7BD955] dark:hover:border-[#7BD955] transition-all text-left cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.bgColor} dark:bg-opacity-30 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${stat.iconColor} dark:opacity-90`} />
                  </div>
                  {stat.percentage !== undefined && (
                    <div className={`px-2.5 md:px-3 py-1 rounded-xl ${stat.bgColor} dark:bg-opacity-30 ${stat.iconColor} shadow-md`}>
                      {stat.percentage}%
                    </div>
                  )}
                </div>
                <h3 className="text-gray-900 dark:text-gray-100 mb-1">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.title}</p>
              </button>
            );
          })}
        </div>

        {/* Vistorias Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-gray-900 dark:text-gray-100">Status das Vistorias</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {vistoriasCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <button
                  key={index}
                  onClick={() => setFilterType(card.filter)}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 ${card.borderColor} dark:border-gray-700 p-5 md:p-6 hover:shadow-2xl hover:scale-105 transition-all text-left cursor-pointer group relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 ${card.bgColor} opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity`}></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-12 h-12 md:w-14 md:h-14 ${card.bgColor} dark:bg-opacity-30 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${card.color} dark:opacity-90`} />
                    </div>
                    <h3 className={`${card.color} dark:opacity-90 w-8 text-center flex-shrink-0 drop-shadow-sm`}>{card.value}</h3>
                    <p className="text-gray-700 dark:text-gray-300 flex-1">{card.title}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Cards */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-gray-900 dark:text-gray-100">Detalhes Adicionais</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {detailCards.map((card, index) => {
              const Icon = card.icon;
              const gradients = [
                'from-[#7BD955] to-[#0a6c45]',
                'from-amber-500 to-orange-600',
                'from-cyan-500 to-blue-600'
              ];
              return (
                <button
                  key={index}
                  onClick={() => setFilterType(card.filter)}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-5 md:p-6 hover:shadow-2xl hover:scale-105 hover:border-[#7BD955] dark:hover:border-[#7BD955] transition-all text-left cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-900 dark:text-gray-100 mb-1">{card.value}</h3>
                      <p className={`${card.color} dark:opacity-90 mb-1`}>{card.title}</p>
                      <p className="text-gray-600 dark:text-gray-400">{card.subtitle}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Progress Bars */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-xl border-2 border-white dark:border-gray-700 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-gray-900 dark:text-gray-100">Progresso Geral</h2>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            {/* Status Geral */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10 rounded-2xl p-4 md:p-5 border border-emerald-200 dark:border-emerald-800/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-800 dark:text-gray-200">Status Geral dos Condomínios</span>
                <span className="text-[#0a6c45] dark:text-[#7BD955] px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {totalCondominios > 0 ? Math.round((concluidos / totalCondominios) * 100) : 0}% Concluído
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner">
                <div className="h-full flex">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 transition-all shadow-sm"
                    style={{ width: `${totalCondominios > 0 ? (concluidos / totalCondominios) * 100 : 0}%` }}
                  />
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 transition-all shadow-sm"
                    style={{ width: `${totalCondominios > 0 ? (emAndamento / totalCondominios) * 100 : 0}%` }}
                  />
                  <div
                    className="bg-gradient-to-r from-gray-400 to-gray-500 transition-all shadow-sm"
                    style={{ width: `${totalCondominios > 0 ? (naoIniciados / totalCondominios) * 100 : 0}%` }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-sm" />
                  <span className="text-gray-700 dark:text-gray-300">Concluídos ({concluidos})</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-sm" />
                  <span className="text-gray-700 dark:text-gray-300">Em Andamento ({emAndamento})</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-full shadow-sm">
                  <div className="w-3 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-sm" />
                  <span className="text-gray-700 dark:text-gray-300">Não Iniciados ({naoIniciados})</span>
                </div>
              </div>
            </div>

            {/* Vistorias */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/10 dark:to-cyan-900/10 rounded-2xl p-4 md:p-5 border border-teal-200 dark:border-teal-800/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-800 dark:text-gray-200">Progresso de Vistorias</span>
                <span className="text-teal-700 dark:text-teal-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {totalCondominios > 0 ? Math.round((vistoriasConcluidas / totalCondominios) * 100) : 0}% Concluído
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-teal-600 transition-all shadow-sm"
                  style={{ width: `${totalCondominios > 0 ? (vistoriasConcluidas / totalCondominios) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* CFTV */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-4 md:p-5 border border-blue-200 dark:border-blue-800/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-800 dark:text-gray-200">Progresso de CFTV</span>
                <span className="text-blue-700 dark:text-blue-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {totalCondominios > 0 ? Math.round((cftvConcluido / totalCondominios) * 100) : 0}% Concluído
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-cyan-600 transition-all shadow-sm"
                  style={{ width: `${totalCondominios > 0 ? (cftvConcluido / totalCondominios) * 100 : 0}%` }}
                />
              </div>
            </div>

            {/* Instalações */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl p-4 md:p-5 border border-purple-200 dark:border-purple-800/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-800 dark:text-gray-200">Progresso de Instalações</span>
                <span className="text-purple-700 dark:text-purple-400 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-sm">
                  {totalCondominios > 0 ? Math.round((instalacaoConcluida / totalCondominios) * 100) : 0}% Concluído
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 transition-all shadow-sm"
                  style={{ width: `${totalCondominios > 0 ? (instalacaoConcluida / totalCondominios) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}