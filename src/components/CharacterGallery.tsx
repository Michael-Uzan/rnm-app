import { CharacterCard } from "./CharacterCard";
import { Wrap } from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

export const CharacterGallery = () => {
  const { characters } = useFetchCharacters();

  return (
    <Wrap spacing="10px">
      {characters.map(({ id, image, name, status }) => (
        <CharacterCard key={id} image={image} name={name} status={status} />
      ))}
    </Wrap>
  );
};
