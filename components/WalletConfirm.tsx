import { useWallet } from "@/context/WalletContext";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const WalletConfirm = ({ setconfirm, confirm }: any) => {
  const { setWallet } = useWallet();
  const confirmData = () => {
    localStorage.setItem("walletStorage", JSON.stringify(confirm));
    setWallet(confirm);
    setconfirm(null);
  };

  return (
    <Stack h={"100vh"} w={"100%"} justify={"center"} align={"center"}>
      <Heading>Copy your pharse seed</Heading>
      <Text>After Confirming you will no longer access this information</Text>
      <Stack padding={2} background={"gray.600"} borderRadius={"15px"}>
        <Text textAlign={"center"}> {confirm?.mnemonic}</Text>
      </Stack>
      <Button onClick={confirmData}>Confirmar</Button>
    </Stack>
  );
};
