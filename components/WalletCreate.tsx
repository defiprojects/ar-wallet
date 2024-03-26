import React, { useState } from "react";
import { WalletConfirm } from "./WalletConfirm";
import { createWallet } from "@/lib/utils/wallet";

export const WalletCreate = ({ setwallet }: any) => {
  const [confirm, setconfirm] = useState<any>();
  if (confirm) {
    return (
      <WalletConfirm
        setwallet={setwallet}
        setconfirm={setconfirm}
        confirm={confirm}
      />
    );
  }

  return (
    <div>
      <h1>WalletCreate</h1>
      <button onClick={() => createWallet().then((data) => setconfirm(data))}>
        Crear
      </button>
    </div>
  );
};
