import { convertFormat } from "@/lib/utils/convertFormat";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { CgLogOut } from "react-icons/cg";

export const Navbar = ({ deleteWallet }: any) => {
  return (
    <HStack p={2} w={"100%"} justify={"flex-end"}>
      <IconButton aria-label="" icon={<CgLogOut />} onClick={deleteWallet} />
    </HStack>
  );
};
