
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '../firebase'; // Removed 'db' import, it's no longer used

// Corrected the role to match the data 'TECNICO'
export type UserRole = 'ADM' | 'MONITORAMENTO' | 'TECNICO' | 'ANALISADOR' | 'USER';

export interface User {
  uid: string;
  email: string | null;
  role: UserRole;
  displayName?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // User is signed in, get their role from custom claims in the ID token.
        // Force a refresh of the token to get the latest claims.
        const idTokenResult = await firebaseUser.getIdTokenResult(true);
        
        const userData: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || undefined,
          // Cast the claim to UserRole and provide a default fallback role.
          role: (idTokenResult.claims.role as UserRole) || 'USER',
        };
        setUser(userData);
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
    // onAuthStateChanged will handle setting the user state.
  };

  const logout = () => {
    signOut(auth);
    // onAuthStateChanged will handle setting the user state to null.
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
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
