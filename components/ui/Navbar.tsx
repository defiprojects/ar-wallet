import { convertFormat } from "@/lib/utils/convertFormat";
import { HStack, IconButton, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { CgLogOut, CgSun, CgMoon } from "react-icons/cg";

export const Navbar = ({ deleteWallet }: any) => {

  const { colorMode, toggleColorMode } = useColorMode()

  const icon = colorMode === 'light' ? <CgSun />: <CgMoon />
  return (
    <HStack p={2} w={"100%"} justify={"flex-end"}>
      <IconButton aria-label="" icon={<CgLogOut />} onClick={deleteWallet} />
      <IconButton aria-label="" icon={icon} onClick={toggleColorMode}/>
    </HStack>
  );
};
