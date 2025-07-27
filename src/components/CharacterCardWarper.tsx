import { useIsFavoriteCharacter } from "../hooks/useIsFavoriteCharacter";
import { useToastMessages } from "../hooks/useToastMessages";
import type { ICharacter } from "../interfaces/ICharacter";
import { characterStore$ } from "../store/characterStore";
import { toggleFavoriteCharacter } from "../store/favoritesStore";
import { CharacterCard } from "./ui/CharacterCard";

type CharacterCardWarperProps = {
  minimize?: boolean;
  character: ICharacter;
};

export const CharacterCardWarper = ({
  minimize = false,
  character,
}: CharacterCardWarperProps) => {
  const { id, image, name, status } = character;
  const isFavorite = useIsFavoriteCharacter(id);
  const { successToast } = useToastMessages();

  return (
    <CharacterCard
      minimize={minimize}
      image={image}
      name={name}
      status={status}
      isFavorite={isFavorite}
      onClick={() => {
        characterStore$.selected.set(character);
      }}
      onFavoriteClick={() => {
        successToast({
          description: `${name} ${
            isFavorite ? "removed from" : "add to "
          } favorite`,
        });
        toggleFavoriteCharacter(character);
      }}
    />
  );
};
