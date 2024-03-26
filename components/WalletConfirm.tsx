import React from "react";

export const WalletConfirm = ({ setwallet, setconfirm, confirm }: any) => {
  const confirmData = () => {
    localStorage.setItem("walletStorage", JSON.stringify(confirm));
    setwallet(confirm);
    setconfirm(null);
  };

  return (
    <div>
      <h1>Copia tu pharse seed</h1>
      <p>{confirm?.mnemonic}</p>
      <button onClick={confirmData}>Confirmar</button>
    </div>
  );
};
