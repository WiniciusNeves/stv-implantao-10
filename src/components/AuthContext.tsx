import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback
} from 'react';
import {
  getAuth,
  onIdTokenChanged, // MUDANÇA: Usar onIdTokenChanged é melhor para capturar atualizações de permissão
  User as FirebaseUser,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

// Define a interface para o objeto de usuário, estendendo o FirebaseUser
// Adicionamos 'username' para ser compatível com seu formulário que usa user.username
interface User extends FirebaseUser {
  role: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  login: (email: string, pass: string) => Promise<any>;
  auth: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();

  const login = useCallback(async (email: string, password: string) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }, [auth]);

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }, [auth]);

  useEffect(() => {
    // CORREÇÃO PRINCIPAL AQUI:
    // Usamos onIdTokenChanged para detectar login e renovação de token
    const unsubscribe = onIdTokenChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // 1. FORÇA O REACT A BUSCAR AS PERMISSÕES REAIS (Custom Claims)
          const tokenResult = await firebaseUser.getIdTokenResult();

          // 2. LÊ A PERMISSÃO QUE GRAVAMOS (ADM, TECNICO, ETC)
          // Se não tiver permissão definida, assume 'ANALISADOR' por segurança
          const role = (tokenResult.claims.role as string) || 'ANALISADOR';

          const extendedUser: User = {
            ...firebaseUser,
            role: role, // AGORA É DINÂMICO!
            username: firebaseUser.email ? firebaseUser.email.split('@')[0] : 'Usuário'
          };

          setUser(extendedUser);
        } catch (error) {
          console.error("Erro ao buscar permissões do usuário:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  const value: AuthContextType = {
    user,
    loading,
    logout,
    login,
    auth,
  };

  return (
    <AuthContext.Provider value={value}>
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