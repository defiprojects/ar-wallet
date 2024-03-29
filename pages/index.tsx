import { Landing } from "@/components/Landing";
import { WalletHome } from "@/components/WalletHome";
import { useWallet } from "@/context/WalletContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect } from "react";

export default function Home() {
  const [walletStorage] = useLocalStorage("walletStorage", null);
  const { setWallet, wallet } = useWallet();

  useEffect(() => {
    if (walletStorage) {
      setWallet(walletStorage);
    }
  }, [walletStorage]); 

  return wallet ? <WalletHome /> : <Landing />;
}
