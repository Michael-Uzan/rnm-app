import { observable } from "@legendapp/state";
import type { ICharacter } from "../interfaces/ICharacter";

export const favoriteStore$ = observable({
  characters: [] as ICharacter[],
});

function isFavoriteCharacter(characterId: number) {
  const favoritesCharacters = favoriteStore$.characters.get();

  return favoritesCharacters.some((favorite) => favorite.id === characterId);
}

export function toggleFavoriteCharacter(character: ICharacter) {
  const favoritesCharacters = favoriteStore$.characters.get();
  const exists = isFavoriteCharacter(character.id);

  if (exists) {
    favoriteStore$.characters.set(
      favoritesCharacters.filter((fav) => fav.id !== character.id)
    );
  } else {
    favoriteStore$.characters.set([...favoritesCharacters, character]);
  }
}
