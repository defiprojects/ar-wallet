import { Landing } from "@/components/Landing";
import { WalletHome } from "@/components/WalletHome";
import { useWallet } from "@/context/WalletContext";
import { useEffect, useState } from "react";

export default function Home() {
  const {wallet, setWallet} = useWallet();

  useEffect(() => {
    let wallet = localStorage.getItem("walletStorage");
    const walletObj = JSON.parse(wallet as string);

    if (walletObj) {
      setWallet(walletObj);
      return;
    }
  }, []);

  if (wallet) {
    return <WalletHome  />;
  }
  return <Landing />;
}
