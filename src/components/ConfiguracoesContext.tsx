import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ConfiguracoesContextType {
  densidade: 'compacto' | 'normal' | 'confortavel';
  tamanhoFonte: 'extra-pequeno' | 'pequeno' | 'medio' | 'grande';
  modoEscuro: boolean;
  setDensidade: (densidade: 'compacto' | 'normal' | 'confortavel') => void;
  setTamanhoFonte: (tamanho: 'extra-pequeno' | 'pequeno' | 'medio' | 'grande') => void;
  setModoEscuro: (modo: boolean) => void;
}

const ConfiguracoesContext = createContext<ConfiguracoesContextType | null>(null);

export function ConfiguracoesProvider({ children }: { children: ReactNode }) {
  const [densidade, setDensidadeState] = useState<'compacto' | 'normal' | 'confortavel'>(() => {
    const saved = localStorage.getItem('densidade');
    return (saved as 'compacto' | 'normal' | 'confortavel') || 'normal';
  });

  const [tamanhoFonte, setTamanhoFonteState] = useState<'extra-pequeno' | 'pequeno' | 'medio' | 'grande'>(() => {
    const saved = localStorage.getItem('tamanhoFonte');
    return (saved as 'extra-pequeno' | 'pequeno' | 'medio' | 'grande') || 'medio';
  });

  const [modoEscuro, setModoEscuroState] = useState<boolean>(() => {
    const saved = localStorage.getItem('modoEscuro');
    return saved === 'true';
  });

  const setDensidade = (newDensidade: 'compacto' | 'normal' | 'confortavel') => {
    setDensidadeState(newDensidade);
    localStorage.setItem('densidade', newDensidade);
  };

  const setTamanhoFonte = (newTamanho: 'extra-pequeno' | 'pequeno' | 'medio' | 'grande') => {
    setTamanhoFonteState(newTamanho);
    localStorage.setItem('tamanhoFonte', newTamanho);
  };

  const setModoEscuro = (newModo: boolean) => {
    setModoEscuroState(newModo);
    localStorage.setItem('modoEscuro', String(newModo));
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Aplicar densidade
    root.setAttribute('data-densidade', densidade);
    
    // Aplicar tamanho de fonte
    const fontSizes = {
      'extra-pequeno': '12px',
      pequeno: '14px',
      medio: '16px',
      grande: '18px'
    };
    root.style.fontSize = fontSizes[tamanhoFonte];
    
    // Aplicar modo escuro
    if (modoEscuro) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [densidade, tamanhoFonte, modoEscuro]);

  return (
    <ConfiguracoesContext.Provider
      value={{
        densidade,
        tamanhoFonte,
        modoEscuro,
        setDensidade,
        setTamanhoFonte,
        setModoEscuro,
      }}
    >
      {children}
    </ConfiguracoesContext.Provider>
  );
}

export function useConfiguracoes() {
  const context = useContext(ConfiguracoesContext);
  if (!context) {
    throw new Error('useConfiguracoes must be used within ConfiguracoesProvider');
  }
  return context;
}