import React, { useState } from "react";
import { WalletConfirm } from "./WalletConfirm";
import { createWallet } from "@/lib/utils/wallet";
import { Button, Heading, Stack } from "@chakra-ui/react";

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
    <Stack h={"100vh"} w={"100%"} justify={"center"} align={"center"}>
      <Heading>Create new account</Heading>
      <Button onClick={() => createWallet().then((data) => setconfirm(data))}>
        Start
      </Button>
    </Stack>
  );
};
