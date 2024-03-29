import { getBalance } from "@/lib/utils/wallet";
import { Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar } from "./ui/Navbar";
import { Menu } from "./ui/Menu";
import { useWallet } from "@/context/WalletContext";

export const WalletHome = () => {
  const { wallet, setWallet } = useWallet();
  const [balance, setbalance] = useState<any>({
    increase: 0,
    balance: Number(
      typeof window !== "undefined" ? localStorage.getItem("eth_balance") : 0
    ),
  });

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceInfo = await getBalance(wallet.address as string);
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
    if (typeof window !== "undefined") {
      localStorage.removeItem("walletStorage");
      localStorage.removeItem("eth_balance");
    }

    setWallet(null);
  };

  return (
    <Stack h={"100vh"} w={"100%"} justify={"flex-start"} align={"center"}>
      <Navbar deleteWallet={deleteWallet} />
      {balance?.increase > 0 && (
        <Text color={"green"}>+ {balance.increase.toFixed(5)} </Text>
      )}
      {balance && <Text fontSize="6xl">{balance.balance.toFixed(4)} ETH</Text>}
      <Menu wallet={wallet} />
    </Stack>
  );
};
