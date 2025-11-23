import { useState } from 'react';
import { useAuth } from './AuthContext';
import { Building2, Lock, User, AlertCircle } from 'lucide-react';
import logoImage from 'figma:asset/ff5bca3deeca0a320525d259911cf9ed71c08bcf.png';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    const success = login(username, password);
    if (!success) {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7BD955] via-[#0a6c45] to-[#004d32] dark:from-gray-900 dark:via-[#0a6c45] dark:to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7BD955] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo/Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-4 md:p-6 shadow-2xl backdrop-blur-sm mb-6">
            <img src={logoImage} alt="STV Implantação" className="w-full max-w-sm mx-auto" />
          </div>
          <p className="text-white dark:text-gray-100 text-lg md:text-xl drop-shadow-lg">Faça login para continuar</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 border border-white/20 dark:border-gray-700/50">
          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-gray-700 dark:text-gray-200 mb-2 ml-1">
                Usuário
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all group-focus-within:scale-110">
                  <User className="h-5 w-5 text-[#7BD955] dark:text-[#7BD955]" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 md:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7BD955] focus:border-[#7BD955] transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  placeholder="Digite seu usuário"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-2 ml-1">
                Senha
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-all group-focus-within:scale-110">
                  <Lock className="h-5 w-5 text-[#7BD955] dark:text-[#7BD955]" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 md:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7BD955] focus:border-[#7BD955] transition-all bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  placeholder="Digite sua senha"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 p-3.5 bg-red-50 dark:bg-red-900/30 border-2 border-red-300 dark:border-red-700 rounded-2xl text-red-700 dark:text-red-300 shadow-lg">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7BD955] via-[#0a6c45] to-[#004d32] text-white py-4 md:py-4.5 rounded-2xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl border border-white/20"
            >
              <span className="drop-shadow-md">Entrar</span>
            </button>
          </form>

          {/* Helper Text */}
          <div className="mt-6 p-4 md:p-5 bg-gradient-to-br from-[#7BD955]/10 to-emerald-100/50 dark:from-[#7BD955]/10 dark:to-emerald-900/20 rounded-2xl border border-[#7BD955]/20">
            <p className="text-[#0a6c45] dark:text-[#7BD955] text-center mb-3">
              <strong>Usuários de Teste:</strong>
            </p>
            <div className="space-y-2 text-emerald-700 dark:text-emerald-300">
              <p className="text-center bg-white/60 dark:bg-gray-700/40 rounded-lg py-1.5 px-3">marcos / @marcos123 <span className="text-xs opacity-75">(ADM)</span></p>
              <p className="text-center bg-white/60 dark:bg-gray-700/40 rounded-lg py-1.5 px-3">lino / @lino123 <span className="text-xs opacity-75">(MONITORAMENTO)</span></p>
              <p className="text-center bg-white/60 dark:bg-gray-700/40 rounded-lg py-1.5 px-3">lucas / @lucas123 <span className="text-xs opacity-75">(TECNICO)</span></p>
              <p className="text-center bg-white/60 dark:bg-gray-700/40 rounded-lg py-1.5 px-3">ana / @ana123 <span className="text-xs opacity-75">(ANALISADOR)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}