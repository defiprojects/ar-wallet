import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";

// Definir el tipo del contexto
type WalletContextType = {
  wallet: {
    address?: string,
    mnemonic?: string,
    privateKey?: string
  }; 
  setWallet: (wallet: any) => void; 
};

// Definir los valores por defecto
const defaultValues: WalletContextType = {
  wallet: {},
  setWallet: () => {}
};

export const WalletContext = createContext(defaultValues);

export const WalletProvider = ({ children }: any) => {
  const [wallet, setWallet] = useLocalStorage("walletStorage", {});

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
