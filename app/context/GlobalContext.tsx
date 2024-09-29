// context/GlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalStateProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalStateContext = createContext<GlobalStateProps | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>('en');

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateProps => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};