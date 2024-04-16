import { useWallet } from "@/context/WalletContext";
import useSendTransfer from "@/hooks/useSendTransfer";
import {
  Button,
  Center,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { QRCodeSVG } from "qrcode.react";

import React, { useState } from "react";
export const Menu = () => {
  const {
    isOpen: isOpenSend,
    onOpen: onOpenSend,
    onClose: onCloseSend,
  } = useDisclosure();
  const {
    isOpen: isOpenReceive,
    onOpen: onOpenReceive,
    onClose: onCloseReceive,
  } = useDisclosure();

  return (
    <HStack p={2} w={"100%"} justify={"center"} gap={4}>
      <Button onClick={onOpenReceive} w={"50%"}>
        Receive
      </Button>
      <Button onClick={onOpenSend} w={"50%"}>
        Send
      </Button>
      <SendModal onClose={onCloseSend} isOpen={isOpenSend} />
      <ReceiveModal onClose={onCloseReceive} isOpen={isOpenReceive} />
    </HStack>
  );
};

const SendModal = ({ onClose, isOpen }: any) => {
  const { wallet } = useWallet();
  const [address, setaddress] = useState(undefined);
  const [value, setvalue] = useState(undefined);

  const { sendTransfer, loading, success, tx } = useSendTransfer();
  const toast = useToast();

  if (tx) {
    toast({
      title: "successful",
      description: `https://explorer-testnet.morphl2.io/tx/${tx}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Send to</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack>
            <Input
              placeholder="Address 0x.."
              onChange={(e: any) => setaddress(e.target.value)}
            />
            <Input
              placeholder="Import ETH"
              onChange={(e: any) => setvalue(e.target.value)}
            />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button
            isDisabled={!value || !address}
            isLoading={loading}
            onClick={() =>
              sendTransfer(
                String(address),
                String(value),
                wallet.address as string,
                wallet.privateKey as string
              ).then(() => onClose())
            }
          >
            Transfer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ReceiveModal = ({ onClose, isOpen }: any) => {
  const { wallet } = useWallet();
 
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Receive ETH</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <Center>
        <QRCodeSVG size={215} value={wallet?.address as string} />
          </Center> 
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
