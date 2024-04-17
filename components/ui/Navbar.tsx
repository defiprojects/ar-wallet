import { HStack, IconButton, Select, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CgLogOut, CgSun, CgMoon } from "react-icons/cg";

export const Navbar = ({ deleteWallet }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const icon = colorMode === "light" ? <CgSun /> : <CgMoon />;
  return (
    <HStack p={2} w={"100%"} justify={'space-between'}>
      <Select w={"fit-content"}>
        <option value="option1">Morph Testnet</option>
        <option disabled value="option2">Morph Mainnet</option>
      </Select>
      <HStack>
        <IconButton aria-label="" icon={<CgLogOut />} onClick={deleteWallet} />
        <IconButton aria-label="" icon={icon} onClick={toggleColorMode} />
      </HStack>
    </HStack>
  );
};
