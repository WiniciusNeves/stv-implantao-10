import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'ADM' | 'MONITORAMENTO' | 'TECNICO' | 'ANALISADOR';

export interface User {
  username: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuários pré-configurados
const USERS = [
  { username: 'marcos', password: '@marcos123', role: 'ADM' as UserRole },
  { username: 'lino', password: '@lino123', role: 'MONITORAMENTO' as UserRole },
  { username: 'lucas', password: '@lucas123', role: 'TECNICO' as UserRole },
  { username: 'tiagolemos', password: '@tiagolemos123', role: 'ANALISADOR' as UserRole },
  { username: 'roger', password: '@roger123', role: 'ANALISADOR' as UserRole },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username: string, password: string): boolean => {
    const foundUser = USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      const userData = { username: foundUser.username, role: foundUser.role };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
