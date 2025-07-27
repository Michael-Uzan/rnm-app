import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Skeleton,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";

type CharacterCardProps = {
  name: string;
  status: string;
  image: string;
  isFavorite: boolean;
  onClick: () => void;
  onFavoriteClick: () => void;
};

export const CharacterCard = ({
  name,
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
        w={{ base: "200px", sm: "150px" }}
        h={"200px"}
        src={image}
      />
      <Stack>
        <CardBody width={"140px"}>
          <Heading maxWidth={"100px"} size="sm" marginBottom={"10px"}>
            {name}
          </Heading>
          <Tag colorScheme="teal">{status}</Tag>
        </CardBody>

        <CardFooter>
          <FavoriteButton isActive={isFavorite} onClick={onFavoriteClick} />
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
