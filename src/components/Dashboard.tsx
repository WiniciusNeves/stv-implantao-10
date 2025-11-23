import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { Sidebar } from './Sidebar';
import { DashboardHome } from './DashboardHome';
import { CondominiosList } from './CondominiosList';
import { CondominioForm } from './CondominioForm';
import { HistoricoList } from './HistoricoList';
import { BackupList } from './BackupList';
import { Configuracoes } from './Configuracoes';
import { Condominio, HistoricoItem } from '../types';

type View = 'dashboard' | 'list' | 'form' | 'historico' | 'backup' | 'configuracoes';

export function Dashboard() {
  const { user } = useAuth();
  const [view, setView] = useState<View>('dashboard');
  const [condominios, setCondominios] = useState<Condominio[]>([]);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [backups, setBackups] = useState<Condominio[]>([]);
  const [selectedCondominio, setSelectedCondominio] = useState<Condominio | null>(null);

  // Carregar dados do localStorage
  useEffect(() => {
    const savedCondominios = localStorage.getItem('condominios');
    const savedHistorico = localStorage.getItem('historico');
    const savedBackups = localStorage.getItem('backups');
    
    if (savedCondominios) {
      const parsed = JSON.parse(savedCondominios);
      // Migração: adicionar campo dispositivosAcesso se não existir
      const migrated = parsed.map((c: Condominio) => ({
        ...c,
        dispositivosAcesso: c.dispositivosAcesso || [],
      }));
      setCondominios(migrated);
    }
    if (savedHistorico) {
      setHistorico(JSON.parse(savedHistorico));
    }
    if (savedBackups) {
      const parsed = JSON.parse(savedBackups);
      // Migração: adicionar campo dispositivosAcesso se não existir
      const migrated = parsed.map((c: Condominio) => ({
        ...c,
        dispositivosAcesso: c.dispositivosAcesso || [],
      }));
      setBackups(migrated);
    }
  }, []);

  // Salvar condominios no localStorage
  useEffect(() => {
    if (condominios.length > 0) {
      localStorage.setItem('condominios', JSON.stringify(condominios));
    }
  }, [condominios]);

  // Salvar histórico no localStorage
  useEffect(() => {
    if (historico.length > 0) {
      localStorage.setItem('historico', JSON.stringify(historico));
    }
  }, [historico]);

  // Salvar backups no localStorage
  useEffect(() => {
    localStorage.setItem('backups', JSON.stringify(backups));
  }, [backups]);

  // Função para criar backup quando condomínio é concluído
  const createBackupIfCompleted = (condominio: Condominio) => {
    if (condominio.status === 'CONCLUÍDA') {
      // Verifica se já existe backup deste condomínio
      const backupExists = backups.some(b => b.id === condominio.id);
      
      if (!backupExists) {
        // Cria um clone do condomínio para backup
        const backup = { ...condominio };
        setBackups(prev => [...prev, backup]);
      } else {
        // Atualiza o backup existente
        setBackups(prev => 
          prev.map(b => b.id === condominio.id ? { ...condominio } : b)
        );
      }
    }
  };

  const handleAddCondominio = () => {
    setSelectedCondominio(null);
    setView('form');
  };

  const handleEditCondominio = (condominio: Condominio) => {
    setSelectedCondominio(condominio);
    setView('form');
  };

  const handleSaveCondominio = (condominio: Condominio, changes?: { campo: string; valorAnterior: string; valorNovo: string }[]) => {
    const now = new Date().toISOString();
    
    if (selectedCondominio) {
      // Editar existente
      const updatedCondominio = { ...condominio, atualizadoEm: now };
      setCondominios(prev => 
        prev.map(c => c.id === condominio.id ? updatedCondominio : c)
      );

      // Criar backup se estiver concluído
      createBackupIfCompleted(updatedCondominio);

      // Adicionar ao histórico
      if (changes && user) {
        const newHistoricoItems: HistoricoItem[] = changes.map(change => ({
          id: `hist-${Date.now()}-${Math.random()}`,
          condominioId: condominio.id,
          condominioNome: condominio.nomeCondominio,
          usuario: user.username,
          acao: 'EDIÇÃO',
          campo: change.campo,
          valorAnterior: change.valorAnterior,
          valorNovo: change.valorNovo,
          dataHora: now,
        }));
        setHistorico(prev => [...newHistoricoItems, ...prev]);
      }
    } else {
      // Criar novo
      const newCondominio = {
        ...condominio,
        criadoEm: now,
        atualizadoEm: now,
        criadoPor: user?.username || '',
      };
      setCondominios(prev => [...prev, newCondominio]);

      // Criar backup se estiver concluído
      createBackupIfCompleted(newCondominio);

      // Adicionar ao histórico
      if (user) {
        const newHistoricoItem: HistoricoItem = {
          id: `hist-${Date.now()}`,
          condominioId: condominio.id,
          condominioNome: condominio.nomeCondominio,
          usuario: user.username,
          acao: 'CRIAÇÃO',
          campo: 'Condomínio',
          valorAnterior: '',
          valorNovo: 'Novo condomínio criado',
          dataHora: now,
        };
        setHistorico(prev => [newHistoricoItem, ...prev]);
      }
    }

    setView('list');
    setSelectedCondominio(null);
  };

  const handleCancelForm = () => {
    setView('list');
    setSelectedCondominio(null);
  };

  const handleDeleteCondominio = (id: string) => {
    const condominio = condominios.find(c => c.id === id);
    if (condominio && user) {
      setCondominios(prev => prev.filter(c => c.id !== id));
      
      // Adicionar ao histórico
      const newHistoricoItem: HistoricoItem = {
        id: `hist-${Date.now()}`,
        condominioId: id,
        condominioNome: condominio.nomeCondominio,
        usuario: user.username,
        acao: 'EXCLUSÃO',
        campo: 'Condomínio',
        valorAnterior: condominio.nomeCondominio,
        valorNovo: 'Condomínio excluído',
        dataHora: new Date().toISOString(),
      };
      setHistorico(prev => [newHistoricoItem, ...prev]);
    }
  };

  const handleViewBackup = (backup: Condominio) => {
    setSelectedCondominio(backup);
    setView('form');
  };

  const handleDeleteBackup = (id: string) => {
    setBackups(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Sidebar 
        currentView={view} 
        onViewChange={setView}
        onAddCondominio={handleAddCondominio}
      />
      
      <main className="flex-1 overflow-auto pb-20 lg:pb-0">
        {view === 'dashboard' && (
          <DashboardHome condominios={condominios} />
        )}
        
        {view === 'list' && (
          <CondominiosList 
            condominios={condominios}
            onEdit={handleEditCondominio}
            onDelete={handleDeleteCondominio}
          />
        )}
        
        {view === 'form' && (
          <CondominioForm 
            condominio={selectedCondominio}
            onSave={handleSaveCondominio}
            onCancel={handleCancelForm}
          />
        )}
        
        {view === 'historico' && (
          <HistoricoList historico={historico} />
        )}

        {view === 'backup' && (
          <BackupList 
            backups={backups}
            onViewBackup={handleViewBackup}
            onDeleteBackup={handleDeleteBackup}
          />
        )}

        {view === 'configuracoes' && (
          <Configuracoes 
            condominios={condominios} 
            historico={historico}
            backups={backups}
            onViewBackup={handleViewBackup}
            onDeleteBackup={handleDeleteBackup}
          />
        )}
      </main>
    </div>
  );
}