import { useWallet } from "@/context/WalletContext";
import { importWallet } from "@/lib/utils/wallet";
import { Button, Heading, Stack, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

export const WalletImport = () => {
  const [mnemonic, setmnemonic] = useState<string>();
  const { setWallet } = useWallet();
  const importExistWallet = () => {
    importWallet(mnemonic as string).then((dataW) => {
      localStorage.setItem("walletStorage", JSON.stringify(dataW));
      setWallet(dataW);
    });
  };
  return (
    <Stack h={"100vh"} w={"100%"} justify={"center"} align={"center"}>
      <Heading>Import new account</Heading>
      <Textarea
        placeholder="wink midnight foot swift chef lucky ceiling blind cream citizen dish..."
        onChange={(e: any) => setmnemonic(e.target.value)}
      />
      <Button disabled={!mnemonic} onClick={importExistWallet}>
        Import
      </Button>
    </Stack>
  );
};
