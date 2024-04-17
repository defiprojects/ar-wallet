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
import { CgExternal } from "react-icons/cg";

export const Tokens = () => {
    const { wallet } = useWallet();
  return (
    <Stack w={"100%"} pt={5}>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList >
          <Tab>Tokens</Tab>
          <Tab>Activity</Tab>
          <Tab>Bridge</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
           <TokenList />
          </TabPanel>
          <TabPanel>
            <Link isExternal href={`https://explorer-testnet.morphl2.io/address/${wallet?.address}`}display={'flex'}alignItems={'center'} flexDirection={'row'} >View active in explorer <CgExternal /></Link>
          </TabPanel>
          <TabPanel>
            <Link isExternal href={`https://bridge-testnet.morphl2.io/`} display={'flex'}alignItems={'center'} flexDirection={'row'}>Morph Sepolia Official Bridge <CgExternal /></Link>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};
