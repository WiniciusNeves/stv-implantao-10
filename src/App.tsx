import { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { AuthProvider, useAuth } from './components/AuthContext';
import { ConfiguracoesProvider } from './components/ConfiguracoesContext';
import './styles/globals.css';

function AppContent() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <ConfiguracoesProvider>
        <AppContent />
      </ConfiguracoesProvider>
    </AuthProvider>
  );
}