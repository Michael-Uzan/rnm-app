import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

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
          <Heading maxWidth={"100px"} size="sm">
            {name}
          </Heading>
          <Text py="2">{status}</Text>
        </CardBody>

        <CardFooter>
          <IconButton
            variant="outline"
            aria-label="Send email"
            icon={<StarIcon color={"gray.300"} />}
            onClick={(e) => {
              e.stopPropagation();
              console.log("like");
            }}
          />
        </CardFooter>
      </Stack>
    </Card>
  );
};
