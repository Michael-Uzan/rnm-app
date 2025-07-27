import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";

type CharacterCardProps = {
  minimize: boolean;
  name: string;
  status: string;
  image: string;
  isFavorite: boolean;
  onClick: () => void;
  onFavoriteClick: () => void;
};

export const CharacterCard = ({
  name,
  minimize,
  status,
  image,
  isFavorite,
  onClick,
  onFavoriteClick,
}: CharacterCardProps) => {
  return (
    <Card
      size={"sm"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "2xl",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Image
        objectFit="cover"
        w={{
          base: minimize ? "140px" : "200px",
          sm: minimize ? "80px" : "150px",
        }}
        h={minimize ? "140px" : "200px"}
        src={image}
      />
      <Stack>
        <CardBody width={"150px"} padding={minimize ? "8px" : "12px"}>
          <Heading maxWidth={"100px"} size="sm" marginBottom={"10px"}>
            {name}
          </Heading>
          {!minimize ? (
            <HStack width="100%">
              <Text fontSize={"14px"}>Status: </Text>
              <Tag colorScheme="teal">{status}</Tag>
            </HStack>
          ) : null}
        </CardBody>

        <CardFooter padding={minimize ? "8px" : "12px"}>
          <FavoriteButton
            aria-label="favorite-button-card"
            size={minimize ? "xs" : "md"}
            isActive={isFavorite}
            onClick={onFavoriteClick}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};

export const CharacterCardSkeleton = () => {
  return (
    <Card
      size={"sm"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius="lg"
    >
      <Skeleton w={{ base: "200px", sm: "150px" }} h={"200px"} />
      <Stack>
        <CardBody width={"140px"}>
          <Skeleton width={"100px"} height={"20px"} marginBottom={"10px"} />
          <Skeleton width={"47px"} height={"24px"} />
        </CardBody>

        <CardFooter>
          <Skeleton boxSize={"40px"} />
        </CardFooter>
      </Stack>
    </Card>
  );
};
