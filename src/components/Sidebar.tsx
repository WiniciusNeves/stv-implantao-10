import image_ff5bca3deeca0a320525d259911cf9ed71c08bcf from 'figma:asset/ff5bca3deeca0a320525d259911cf9ed71c08bcf.png';
import { Building2, List, History, Plus, LogOut, User, Shield, LayoutDashboard, Database, Settings } from 'lucide-react';
import { useAuth } from './AuthContext';
import logoImage from 'figma:asset/7b25baec81f6dae16e7a1c873f2c5a5153fde3e3.png';

interface SidebarProps {
  currentView: 'dashboard' | 'list' | 'form' | 'historico' | 'backup' | 'configuracoes';
  onViewChange: (view: 'dashboard' | 'list' | 'form' | 'historico' | 'backup' | 'configuracoes') => void;
  onAddCondominio: () => void;
}

export function Sidebar({ currentView, onViewChange, onAddCondominio }: SidebarProps) {
  const { user, logout } = useAuth();

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'ADM':
        return 'bg-[#0a6c45]';
      case 'MONITORAMENTO':
        return 'bg-blue-600';
      case 'TECNICO':
        return 'bg-orange-600';
      case 'ANALISADOR':
        return 'bg-gray-600';
      default:
        return 'bg-gray-600';
    }
  };

  const canAdd = user?.role === 'ADM' || user?.role === 'MONITORAMENTO' || user?.role === 'TECNICO';

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', view: 'dashboard' as const },
    { id: 'list', icon: List, label: 'Condomínios', view: 'list' as const },
  ];

  return (
    <>
      {/* Desktop Header - Topo */}
      <header className="hidden lg:block bg-white dark:bg-gray-900 border-b border-emerald-100 dark:border-gray-700 shadow-lg">
        <div className="px-6 py-3 bg-gradient-to-r from-white via-emerald-50/30 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-b-2 border-white dark:border-gray-700 shadow-lg relative overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7BD955]/5 via-transparent to-yellow-300/5 pointer-events-none"></div>
          
          <div className="flex items-center justify-center gap-3 relative z-10">
            {/* Logo à esquerda */}
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955]/20 to-[#0a6c45]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img src={image_ff5bca3deeca0a320525d259911cf9ed71c08bcf} alt="STV Implantação" className="h-11 relative z-10 drop-shadow-lg transition-transform group-hover:scale-105" />
              </div>
            </div>
            
            {/* Navegação Central - TODOS os botões com mesma altura */}
            <nav className="flex items-center gap-3">
              {/* Dashboard */}
              <button
                onClick={() => onViewChange('dashboard')}
                className={`flex items-center gap-2 px-4 h-11 rounded-xl transition-all backdrop-blur-sm group ${
                  currentView === 'dashboard'
                    ? 'bg-white dark:bg-gray-700 shadow-lg scale-105 border-2 border-[#7BD955]'
                    : 'bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105 border border-emerald-100/50 dark:border-gray-600/50'
                }`}
              >
                <LayoutDashboard className={`w-5 h-5 transition-transform ${currentView === 'dashboard' ? 'text-[#7BD955] drop-shadow-md' : 'group-hover:scale-110'}`} />
                <span className={`${currentView === 'dashboard' ? 'text-gray-900 dark:text-gray-100' : ''}`}>Dashboard</span>
              </button>

              {/* Condomínios */}
              <button
                onClick={() => onViewChange('list')}
                className={`flex items-center gap-2 px-4 h-11 rounded-xl transition-all backdrop-blur-sm group ${
                  currentView === 'list'
                    ? 'bg-white dark:bg-gray-700 shadow-lg scale-105 border-2 border-[#7BD955]'
                    : 'bg-white/60 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105 border border-emerald-100/50 dark:border-gray-600/50'
                }`}
              >
                <List className={`w-5 h-5 transition-transform ${currentView === 'list' ? 'text-[#7BD955] drop-shadow-md' : 'group-hover:scale-110'}`} />
                <span className={`${currentView === 'list' ? 'text-gray-900 dark:text-gray-100' : ''}`}>Condomínios</span>
              </button>

              {/* Novo Condomínio */}
              {canAdd && (
                <button
                  onClick={onAddCondominio}
                  className="flex items-center gap-2 px-4 h-11 rounded-xl text-white bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-emerald-700 hover:from-[#6BC845] hover:via-[#095c35] hover:to-emerald-800 transition-all shadow-xl shadow-[#0a6c45]/40 hover:shadow-2xl hover:scale-105 active:scale-95 border border-white/20 group"
                >
                  <Plus className="w-5 h-5 drop-shadow-md group-hover:rotate-90 transition-transform" />
                  <span className="drop-shadow-sm">Novo Condomínio</span>
                </button>
              )}
              
              {/* Configurações */}
              <button
                onClick={() => onViewChange('configuracoes')}
                className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all backdrop-blur-sm group ${
                  currentView === 'configuracoes'
                    ? 'bg-white dark:bg-gray-700 shadow-lg scale-105 border-2 border-gray-400'
                    : 'bg-white/60 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg hover:scale-105 border border-gray-200/50 dark:border-gray-600/50'
                }`}
                title="Configurações"
              >
                <Settings className={`w-5 h-5 transition-transform ${currentView === 'configuracoes' ? 'rotate-90 text-gray-600 dark:text-gray-300' : 'group-hover:rotate-90'}`} />
              </button>

              {/* Sair */}
              <button
                onClick={logout}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:shadow-lg hover:scale-105 transition-all border border-red-200/50 dark:border-red-800/50 group"
                title="Sair"
              >
                <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* User Info */}
              <div className="flex items-center gap-2 px-3 h-11 bg-white/80 dark:bg-gray-700/80 backdrop-blur-xl rounded-xl border-2 border-[#7BD955]/30 dark:border-[#7BD955]/40 shadow-lg hover:shadow-xl transition-all">
                <div className="w-7 h-7 bg-gradient-to-br from-[#7BD955] to-[#0a6c45] rounded-full flex items-center justify-center shadow-md">
                  <User className="w-4 h-4 text-white drop-shadow-sm" />
                </div>
                <span className="text-gray-900 dark:text-gray-100 text-sm">{user?.username}</span>
                <span className={`px-2.5 py-1 ${getRoleBadgeColor(user?.role || '')} text-white rounded-lg text-xs shadow-md backdrop-blur-sm`}>
                  {user?.role}
                </span>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Rodapé */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#0a6c45]/20 shadow-2xl z-50">
        <div className="w-full flex items-center justify-center py-4 gap-3 bg-gradient-to-t from-emerald-50 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
          {/* Decorative glow under the "Novo" button area */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#7BD955]/10 via-transparent to-transparent pointer-events-none"></div>
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.view;
            const isBackup = item.id === 'backup';
            
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.view)}
                className={`flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 group ${
                  isActive
                    ? isBackup
                      ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-gradient-to-br from-[#7BD955] to-[#0a6c45] text-white shadow-lg shadow-[#0a6c45]/30 scale-105'
                    : isBackup
                      ? 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 border border-purple-200/50 dark:border-purple-800/50'
                      : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-[#0a6c45] dark:text-[#7BD955] hover:bg-emerald-50 dark:hover:bg-gray-700 hover:scale-105 border border-emerald-200/50 dark:border-gray-600/50'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'drop-shadow-md scale-110' : 'group-hover:scale-110'}`} />
                <span className={`text-[10px] whitespace-nowrap ${isActive ? 'drop-shadow-sm' : ''}`}>{item.label}</span>
              </button>
            );
          })}

          {canAdd && (
            <div className="relative -translate-y-3 z-20">
              {/* Outer glow ring - animated */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7BD955] via-yellow-400 to-[#0a6c45] rounded-full blur-xl opacity-60 animate-pulse scale-110"></div>
              
              {/* Pulsing border ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/50 dark:border-gray-800/50 animate-ping opacity-75"></div>
              
              {/* Main button container */}
              <div className="relative bg-white dark:bg-gray-900 rounded-full p-1.5 shadow-2xl">
                <button
                  onClick={onAddCondominio}
                  className="flex flex-col items-center justify-center gap-1 px-4 py-3 rounded-full text-white bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-emerald-700 hover:from-[#6BC845] hover:via-[#095c35] hover:to-emerald-800 shadow-2xl shadow-[#0a6c45]/50 hover:shadow-[#0a6c45]/70 transition-all hover:scale-110 active:scale-95 w-20 h-20 group relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <Plus className="w-8 h-8 drop-shadow-lg group-hover:rotate-90 transition-transform relative z-10" />
                  <span className="text-xs drop-shadow-md relative z-10">Novo</span>
                </button>
              </div>
            </div>
          )}

          {user?.role === 'ADM' && (
            <button
              onClick={() => onViewChange('configuracoes')}
              className={`flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 group ${
                currentView === 'configuracoes'
                  ? 'bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-lg shadow-gray-500/30 scale-105'
                  : 'bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105 border border-gray-200/50 dark:border-gray-600/50'
              }`}
            >
              <Settings className={`w-5 h-5 transition-transform ${currentView === 'configuracoes' ? 'rotate-90 drop-shadow-md' : 'group-hover:rotate-90'}`} />
              <span className={`text-[10px] whitespace-nowrap ${currentView === 'configuracoes' ? 'drop-shadow-sm' : ''}`}>Config</span>
            </button>
          )}

          <button
            onClick={logout}
            className="flex flex-col items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl transition-all w-20 relative z-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:scale-105 border border-red-200/50 dark:border-red-800/50 group"
          >
            <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span className="text-[10px] whitespace-nowrap">Sair</span>
          </button>
        </div>
      </nav>

      {/* Mobile Header - Logo e User */}
      <header className="lg:hidden bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-emerald-700 border-b-2 border-white/20 shadow-2xl px-6 py-4 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-300 rounded-full mix-blend-overlay filter blur-2xl opacity-30 animate-pulse delay-700"></div>
        
        <div className="flex items-center justify-between relative z-10">
          <div className="flex-1"></div>
          
          <div className="flex items-center justify-center">
            <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg">
              <img 
                src={image_ff5bca3deeca0a320525d259911cf9ed71c08bcf} 
                alt="STV" 
                className="h-10 w-auto drop-shadow-lg"
              />
            </div>
          </div>
          
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-2xl px-3 py-2 shadow-lg border border-white/30">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                <User className="w-4 h-4 text-[#0a6c45]" />
              </div>
              <span className={`px-3 py-1.5 ${getRoleBadgeColor(user?.role || '')} text-white rounded-xl text-xs shadow-md`}>
                {user?.role}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}