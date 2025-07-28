import { Text } from "@chakra-ui/react";
import { NUMBER_OF_SKELETON_CARDS } from "../config/uiConfig";
import type { ICharacter } from "../interfaces/ICharacter";
import { CharacterCardWarper } from "./CharacterCardWarper";
import { CharacterCardSkeleton } from "./ui/CharacterCard";
import { ListWarper } from "./ui/ListWarper";

type CharacterListProps = {
  characters: ICharacter[];
  loading: boolean;
  noResultText: string;
};

const CharacterList = ({
  characters,
  noResultText,
  loading,
}: CharacterListProps) => {
  return (
    <ListWarper>
      {loading
        ? new Array(NUMBER_OF_SKELETON_CARDS)
            .fill(null)
            .map((_, index) => <CharacterCardSkeleton key={index} />)
        : null}
      {characters.map((character) => (
        <CharacterCardWarper key={character.id} character={character} />
      ))}
      {!characters.length ? <Text>{noResultText}</Text> : null}
    </ListWarper>
  );
};

export default CharacterList;
