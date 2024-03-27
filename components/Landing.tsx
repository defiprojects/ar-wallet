import {
  Button,
  Divider,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { WalletCreate } from "./WalletCreate";
import { WalletImport } from "./WalletImport";

const LANDING_VIEWS = {
  create: "create",
  import: "import",
};
export const Landing = ({ setwallet }: any) => {
  const [view, setview] = useState<string>();

  if (view === LANDING_VIEWS.create) {
    return <WalletCreate setwallet={setwallet} />;
  }
  if (view === LANDING_VIEWS.import) {
    return <WalletImport setwallet={setwallet} />;
  }

  return (
    <Stack h={"100vh"} w={"100%"} justify={"center"} align={"center"}>
      <Heading>ArWallet 🐨</Heading>
      <Text>Dedicated wallet for Morphl2</Text>
      <HStack gap={2} pt={4}>
        <Button onClick={() => setview(LANDING_VIEWS.create)}>Create</Button>
        <Text>or</Text>
        <Button onClick={() => setview(LANDING_VIEWS.import)}>Import</Button>
      </HStack>
    </Stack>
  );
};
