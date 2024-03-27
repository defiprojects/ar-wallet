import useSendTransfer from "@/hooks/useSendTransfer";
import { Sendtransfer } from "@/lib/utils/wallet";
import {
  Button,
  Container,
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
} from "@chakra-ui/react";

import React, { useState } from "react";
export const Menu = ({ wallet }: any) => {
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
      <SendModal onClose={onCloseSend} isOpen={isOpenSend} wallet={wallet} />
      <ReceiveModal onClose={onCloseReceive} isOpen={isOpenReceive} />
    </HStack>
  );
};

const SendModal = ({ onClose, isOpen, wallet }: any) => {

    const [address, setaddress] = useState(undefined)
    const [value, setvalue] = useState(undefined)

    const { sendTransfer, loading, success } = useSendTransfer();

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
            <Input placeholder="Address 0x.." onChange={(e: any) => setaddress(e.target.value)}/>
            <Input placeholder="Import ETH" onChange={(e: any) => setvalue(e.target.value)} />
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
                wallet.address,
                wallet.privateKey
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
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
