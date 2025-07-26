import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { FavoriteButton } from "./FavoriteButton";

type CharacterCardProps = {
  name: string;
  status: string;
  image: string;
  onClick: () => void;
};

export const CharacterCard = ({
  name,
  status,
  image,
  onClick,
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
          <FavoriteButton isActive onClick={() => console.log("like")} />
        </CardFooter>
      </Stack>
    </Card>
  );
};
