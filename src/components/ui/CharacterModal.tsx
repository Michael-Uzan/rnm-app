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
  Skeleton,
  Tag,
  Text,
  VStack,
  type ModalProps,
} from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";
import { LocationDetail } from "./LocationDetail";
import HeadingSection from "./HeadingSection";

type CharacterModalProps = {
  loading: boolean;
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
  loading,
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
  return loading ? (
    <ModalSkeleton isOpen={isOpen} onClose={onClose} />
  ) : (
    <Modal
      size={"xl"}
      closeOnOverlayClick={true}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={"22px"} textAlign={"center"}>
          {loading ? <Skeleton width={"150px"} height={"40px"} /> : title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack justifyContent={"center"}>
            {loading ? (
              <Skeleton w={{ base: "200px", sm: "150px" }} h={"200px"} />
            ) : (
              <Image
                objectFit="cover"
                w={{ base: "200px", sm: "150px" }}
                h={"200px"}
                src={image}
              />
            )}
            <HStack>
              {loading
                ? new Array(3)
                    .fill(null)
                    .map((_, index) => (
                      <Skeleton key={index} width={"45px"} height={"24px"} />
                    ))
                : labels?.map((label) => (
                    <Tag key={label} colorScheme="teal">
                      {label}
                    </Tag>
                  ))}
            </HStack>
            {loading ? (
              <Skeleton width={"100px"} h={"24px"} />
            ) : (
              <Text marginBottom={"10px"}>{description}</Text>
            )}
            {details ? (
              <VStack width={"100%"}>
                <HeadingSection title={detailsTitle} />
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

const ModalSkeleton = ({ isOpen, onClose }: Omit<ModalProps, "children">) => {
  return (
    <Modal
      size={"xl"}
      isOpen={isOpen}
      closeOnOverlayClick={true}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display={"flex"} justifyContent={"center"}>
          <Skeleton width={"150px"} height={"40px"} />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack justifyContent={"center"}>
            <Skeleton w={{ base: "200px", sm: "150px" }} h={"200px"} />
            <HStack>
              {new Array(3).fill(null).map((_, index) => (
                <Skeleton key={index} width={"45px"} height={"24px"} />
              ))}
            </HStack>
            <Skeleton width={"100px"} h={"24px"} />

            <VStack width={"100%"}>
              <Skeleton width={"59px"} height={"24px"} marginBottom={"20px"} />
              <Skeleton width={"100px"} height={"24px"} />
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Skeleton boxSize={"40px"} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
