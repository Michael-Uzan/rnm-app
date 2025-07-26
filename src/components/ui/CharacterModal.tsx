import {
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";

type CharacterModalProps = {
  title?: string;
  image?: string;
  labels?: string[];
  description?: string;
  isOpen: boolean;
  onClose: () => void;
};

export const CharacterModal = ({
  title,
  image,
  description,
  labels,
  isOpen,
  onClose,
}: CharacterModalProps) => {
  return (
    <Modal isOpen={isOpen} closeOnOverlayClick={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack justifyContent={"center"}>
            <Image
              objectFit="cover"
              w={{ base: "200px", sm: "150px" }}
              h={"200px"}
              src={image}
            />
            <Text>{description}</Text>
            <HStack>
              {labels?.map((label) => (
                <Tag key={label} colorScheme="teal">
                  {label}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <FavoriteButton isActive onClick={() => console.log("like")} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
