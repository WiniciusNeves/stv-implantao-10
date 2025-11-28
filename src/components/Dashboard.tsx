
import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { Sidebar } from './Sidebar';
import { DashboardHome } from './DashboardHome';
import { CondominiosList } from './CondominiosList';
import { CondominioForm } from './CondominioForm';
import { HistoricoList } from './HistoricoList';
import { BackupList } from './BackupList';
import { Configuracoes } from './Configuracoes';
import { Condominio, HistoricoItem } from '../types';
import { ProtectedRoute } from './ProtectedRoute';
import { API_BASE_URL } from '../firebase';

// NOTE: The backend API used here is simplified and does not yet handle
// creating history records or backups. This functionality will need to be
// added to the backend in the future.

type View = 'dashboard' | 'list' | 'form' | 'historico' | 'backup' | 'configuracoes';

export function Dashboard() {
  const { user } = useAuth();
  const [view, setView] = useState<View>('dashboard');
  const [condominios, setCondominios] = useState<Condominio[]>([]);
  const [selectedCondominio, setSelectedCondominio] = useState<Condominio | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCondominios = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/condominios`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCondominios(data);
    } catch (e: any) {
      setError(e.message || 'Failed to fetch condominios');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCondominios();
  }, [fetchCondominios]);

  const handleAddCondominio = () => {
    setSelectedCondominio(null);
    setView('form');
  };

  const handleEditCondominio = (condominio: Condominio) => {
    setSelectedCondominio(condominio);
    setView('form');
  };

  const handleSaveCondominio = async (condominio: Condominio) => {
    const isUpdating = !!condominio.id;
    const url = isUpdating ? `${API_BASE_URL}/condominios/${condominio.id}` : `${API_BASE_URL}/condominios`;
    const method = isUpdating ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(condominio),
      });

      if (!response.ok) {
        throw new Error(`Failed to save condominio: ${response.statusText}`);
      }

      await fetchCondominios(); // Refresh list
      setView('list');
      setSelectedCondominio(null);

    } catch (err: any) {
      console.error('Error saving condominio:', err);
      // Here you could set an error state to show in the UI
      alert(`Error saving: ${err.message}`);
    }
  };

  const handleCancelForm = () => {
    setView('list');
    setSelectedCondominio(null);
  };

  const handleDeleteCondominio = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/condominios/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete condominio: ${response.statusText}`);
      }
      
      await fetchCondominios(); // Refresh list

    } catch (err: any) {
      console.error('Error deleting condominio:', err);
      alert(`Error deleting: ${err.message}`);
    }
  };

  const handleViewBackup = (backup: Condominio) => {
    setSelectedCondominio(backup);
    setView('form');
  };

  const renderContent = () => {
    if (isLoading) {
      return <div className="flex items-center justify-center h-full">Loading...</div>;
    }

    if (error) {
      return <div className="flex items-center justify-center h-full text-red-500">Error: {error}</div>;
    }

    switch (view) {
      case 'dashboard':
        return <DashboardHome condominios={condominios} />;
      case 'list':
        return (
          <CondominiosList
            condominios={condominios}
            onEdit={handleEditCondominio}
            onDelete={handleDeleteCondominio}
          />
        );
      case 'form':
        return (
          <ProtectedRoute roles={['ADM', 'MONITORAMENTO', 'TECNICO', 'ANALISADOR']}>
            <CondominioForm 
              condominio={selectedCondominio}
              onSave={handleSaveCondominio}
              onCancel={handleCancelForm}
            />
          </ProtectedRoute>
        );
      case 'historico':
        return (
          <ProtectedRoute roles={['ADM', 'MONITORAMENTO']}>
            <HistoricoList />
          </ProtectedRoute>
        );
      case 'backup':
        return (
          <ProtectedRoute roles={['ADM']}>
            <BackupList onViewBackup={handleViewBackup} />
          </ProtectedRoute>
        );
      case 'configuracoes':
        return (
          <ProtectedRoute roles={['ADM']}>
            <Configuracoes onViewBackup={handleViewBackup} />
          </ProtectedRoute>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Sidebar 
        currentView={view} 
        onViewChange={setView}
        onAddCondominio={handleAddCondominio}
      />
      
      <main className="flex-1 overflow-auto pb-20 lg:pb-0">
        {renderContent()}
      </main>
    </div>
  );
}
