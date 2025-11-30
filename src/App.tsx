
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CondominioForm } from './components/CondominioForm';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { AuthProvider, useAuth } from './components/AuthContext';
import { ConfiguracoesProvider } from './components/ConfiguracoesContext';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase'; // Make sure to export auth from firebase.ts

function App() {
  return (
    <ConfiguracoesProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ConfiguracoesProvider>
  );
}

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/form" element={user ? <CondominioForm onSuccess={() => {}} /> : <Navigate to="/login" />} />
      <Route path="/form/:id" element={user ? <CondominioForm onSuccess={() => {}} /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
