import { Sendtransfer, getBalance } from '@/lib/utils/wallet';
import React, { useState } from 'react'

export const WalletHome = ({wallet, setwallet }: any) => {
    const [balance, setbalance] = useState<any>();
    getBalance(wallet.address).then((data) => setbalance(data));

    const deleteWallet = () => {
        localStorage.removeItem("walletStorage");
        setwallet(null);
      };

  return (
    <div>
    <h1>ArWallet</h1>
    <p>Address: {wallet?.address}</p>
    {balance && <p>Balance: {balance} ETH</p>}
    <button onClick={deleteWallet}>Desconectar</button>
    <button
      onClick={() =>
        Sendtransfer(
          "0x6894128dDd01706420516448505deF3873eafCc5",
          wallet.address,
          wallet.privateKey
        )
      }
    >
      Transfer
    </button>
  </div>
  )
}
