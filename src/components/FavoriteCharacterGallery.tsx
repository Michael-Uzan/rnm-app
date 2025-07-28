import { Text } from "@chakra-ui/react";
import { CharacterCardWarper } from "./CharacterCardWarper";
import { For, use$ } from "@legendapp/state/react";
import { favoriteStore$ } from "../store/favoritesStore";
import { ListWarper } from "./ui/ListWarper";

export const FavoriteCharacterGallery = () => {
  const isEmpty = use$(() => favoriteStore$.characters.length === 0);

  return (
    <ListWarper>
      <For each={favoriteStore$.characters}>
        {(character) => (
          <CharacterCardWarper
            minimize
            key={character.id.get()}
            character={character.get()}
          />
        )}
      </For>
      {isEmpty ? <Text>No favorite characters.</Text> : null}
    </ListWarper>
  );
};
