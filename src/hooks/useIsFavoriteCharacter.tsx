import { use$ } from "@legendapp/state/react";
import { favoriteStore$ } from "../store/favoritesStore";

export function useIsFavoriteCharacter(characterId: number) {
  return use$(() =>
    favoriteStore$.characters.get().some((f) => f.id === characterId)
  );
}
