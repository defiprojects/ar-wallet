import { importWallet } from "@/lib/utils/wallet";
import React, { useState } from "react";

export const WalletImport = ({ setwallet }: any) => {
  const [mnemonic, setmnemonic] = useState<string>();
  const importExistWallet = () => {
    importWallet(mnemonic as string).then((dataW) => {
      localStorage.setItem("walletStorage", JSON.stringify(dataW));
      setwallet(dataW);
    });
  };
  return (
    <div>
      <h1>WalletImport</h1>
      <input onChange={(e: any) => setmnemonic(e.target.value)} />
      <button disabled={!mnemonic}onClick={importExistWallet}>Importar wallet</button>
    </div>
  );
};
