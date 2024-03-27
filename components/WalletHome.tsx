import { Sendtransfer, getBalance } from "@/lib/utils/wallet";
import { Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navbar } from "./ui/Navbar";
import { Menu } from "./ui/Menu";

export const WalletHome = ({ wallet, setwallet }: any) => {
  const [balance, setbalance] = useState<any>();
  getBalance(wallet.address).then((data) => setbalance(data));

  const deleteWallet = () => {
    localStorage.removeItem("walletStorage");
    setwallet(null);
  };

  return (
    <Stack h={"100vh"} w={"100%"} justify={"flex-start"} align={"center"}>
      <Navbar deleteWallet={deleteWallet} />

      {balance && <Text fontSize="6xl">{Number(balance).toFixed(4)} ETH</Text>}
      <Menu />
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
    </Stack>
  );
};
