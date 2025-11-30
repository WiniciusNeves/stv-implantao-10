
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
  onAuthStateChanged, 
  User as FirebaseUser, 
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';

// Define a interface para o objeto de usuário, estendendo o FirebaseUser
interface User extends FirebaseUser {
  role: string; // Adicione outros campos personalizados conforme necessário
}

// Define a interface para o valor do contexto de autenticação
interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  login: (email: string, pass: string) => Promise<any>;
  // Adicione a propriedade auth ao tipo de contexto
  auth: any; 
}

// Cria o contexto de autenticação com um valor inicial undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define a interface para as props do provedor de autenticação
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); // Obtenha o objeto auth

  const login = useCallback(async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }, [auth]);

  // Lida com o logout do usuário
  const logout = useCallback(async () => {
    try {
      await signOut(auth);
      // A lógica onAuthStateChanged cuidará de definir o usuário como nulo
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  }, [auth]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Adicione a propriedade 'role' ao objeto de usuário
        const extendedUser: User = {
          ...firebaseUser,
          role: 'ADM', // Defina a role do usuário aqui (pode ser dinâmica)
        };
        setUser(extendedUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Limpa o listener quando o componente é desmontado
    return () => unsubscribe();
  }, [auth]);

  // Cria o valor do contexto
  const value: AuthContextType = {
    user,
    loading,
    logout,
    login,
    auth, // Fornece o objeto auth
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
