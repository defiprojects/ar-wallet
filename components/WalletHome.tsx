import { Sendtransfer, getBalance } from "@/lib/utils/wallet";
import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar } from "./ui/Navbar";
import { Menu } from "./ui/Menu";

export const WalletHome = ({ wallet, setwallet }: any) => {
  const [balance, setbalance] = useState<any>({increase: 0, balance: Number(localStorage.getItem("eth_balance"))});

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceInfo = await getBalance(wallet.address);
        if (balanceInfo) {
          setbalance(balanceInfo);
        }
      } catch (error) {
        console.error("Error al obtener el balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const deleteWallet = () => {
    localStorage.removeItem("walletStorage");
    localStorage.removeItem("eth_balance");
    setwallet(null);
  };

  return (
    <Stack h={"100vh"} w={"100%"} justify={"flex-start"} align={"center"}>
      <Navbar deleteWallet={deleteWallet} />
      {balance?.increase > 0 && <Text color={'green'}>+ {balance.increase.toFixed(5)} </Text>}
      {balance && <Text fontSize="6xl">{balance.balance.toFixed(4)} ETH</Text>}
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
