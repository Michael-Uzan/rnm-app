import {
  Heading,
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
import { LocationDetail } from "./LocationDetail";

type CharacterModalProps = {
  isOpen: boolean;
  isFavorite: boolean;
  title?: string;
  image?: string;
  labels?: string[];
  description?: string;
  detailsTitle: string;
  details?: Record<string, string>;
  onFavoriteClicked: () => void;
  onClose: () => void;
};

export const CharacterModal = ({
  title,
  image,
  description,
  labels,
  detailsTitle,
  details,
  isOpen,
  isFavorite,
  onFavoriteClicked,
  onClose,
}: CharacterModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      closeOnOverlayClick={true}
      onClose={onClose}
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"22px"} textAlign={"center"}>
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack justifyContent={"center"}>
            <Image
              objectFit="cover"
              w={{ base: "200px", sm: "150px" }}
              h={"200px"}
              src={image}
            />
            <HStack>
              {labels?.map((label) => (
                <Tag key={label} colorScheme="teal">
                  {label}
                </Tag>
              ))}
            </HStack>
            <Text marginBottom={"10px"}>{description}</Text>
            {details ? (
              <VStack width={"100%"}>
                <Heading fontSize={"18px"}>{detailsTitle}</Heading>
                {Object.entries(details).map(([key, value]) => (
                  <LocationDetail
                    key={`${key}-${value}`}
                    label={key}
                    value={value}
                  />
                ))}
              </VStack>
            ) : null}
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <FavoriteButton isActive={isFavorite} onClick={onFavoriteClicked} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
