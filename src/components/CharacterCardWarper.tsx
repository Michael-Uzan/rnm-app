import { useIsFavoriteCharacter } from "../hooks/useIsFavoriteCharacter";
import type { ICharacter } from "../interfaces/ICharacter";
import { characterStore$ } from "../store/characterStore";
import { toggleFavoriteCharacter } from "../store/favoritesStore";
import { CharacterCard } from "./ui/CharacterCard";

type CharacterCardWarperProps = {
  character: ICharacter;
};

export const CharacterCardWarper = ({
  character,
}: CharacterCardWarperProps) => {
  const { id, image, name, status } = character;
  const isFavorite = useIsFavoriteCharacter(id);

  return (
    <CharacterCard
      image={image}
      name={name}
      status={status}
      isFavorite={isFavorite}
      onClick={() => {
        characterStore$.selected.set(character);
      }}
      onFavoriteClick={() => {
        toggleFavoriteCharacter(character);
      }}
    />
  );
};
