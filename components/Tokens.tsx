import {
    Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { TokenList } from "./TokenList";
import { useWallet } from "@/context/WalletContext";

export const Tokens = () => {
    const { wallet } = useWallet();
  return (
    <Stack w={"100%"} pt={5}>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList >
          <Tab>Tokens</Tab>
          <Tab>Activity</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
           <TokenList />
          </TabPanel>
          <TabPanel>
            <Link target="_blank" href={`https://explorer-testnet.morphl2.io/address/${wallet?.address}`}>View active in explorer</Link>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
