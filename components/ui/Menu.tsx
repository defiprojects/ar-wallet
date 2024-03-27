import { Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

import React from "react";
export const Menu = () => {
    const { isOpen: isOpenSend, onOpen: onOpenSend, onClose: onCloseSend } = useDisclosure()
    const { isOpen: isOpenReceive, onOpen: onOpenReceive, onClose: onCloseReceive } = useDisclosure()
  return (
    <HStack p={2} w={"100%"} justify={"center"} gap={4}>
      <Button onClick={onOpenReceive} w={'50%'}>Receive</Button>
      <Button onClick={onOpenSend} w={'50%'}>Send</Button>
      <SendModal onClose={onCloseSend} isOpen={isOpenSend}/>
      <ReceiveModal onClose={onCloseReceive} isOpen={isOpenReceive}/>
    </HStack>
  );
};

 const SendModal = ({onClose, isOpen}: any) => {
  return (
    <Modal
    isCentered
    onClose={onClose}
    isOpen={isOpen}
    motionPreset='slideInBottom'
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Modal Title</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
     
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant='ghost'>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  )
}

const ReceiveModal = ({onClose, isOpen}: any) => {
    return (
      <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
       
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant='ghost'>Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    )
  }