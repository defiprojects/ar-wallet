import { Landing } from "@/components/Landing";
import { WalletCreate } from "@/components/WalletCreate";
import { WalletHome } from "@/components/WalletHome";
import { WalletImport } from "@/components/WalletImport";
import { useEffect, useState } from "react";

export default function Home() {
  const [wallet, setwallet] = useState<any>();

  useEffect(() => {
    let wallet = localStorage.getItem("walletStorage");
    const walletObj = JSON.parse(wallet as string);

    if (walletObj) {
      setwallet(walletObj);
      return;
    }
  }, []);

  if (wallet) {
    return <WalletHome setwallet={setwallet} wallet={wallet} />;
  }
  return <Landing setwallet={setwallet}/>;
}
