import type { CharacterStatus, ICharacter } from "../interfaces/ICharacter";
import {
  favoriteStore$,
  isFavoriteCharacter,
  toggleFavoriteCharacter,
} from "./favoritesStore";

describe("favoriteStore$", () => {
  const mockCharacter: ICharacter = {
    id: 1,
    name: "Rick",
    episodes: 3,
    image: "rick.png",
    originId: 1,
    species: "Human",
    gender: "Male",
    status: "Alive" as CharacterStatus.Alive,
  };

  afterEach(() => {
    // Clear store after each test
    favoriteStore$.characters.set([]);
  });

  it("should initially have no favorites", () => {
    expect(favoriteStore$.characters.get()).toEqual([]);
  });

  it("should add a character to favorites", () => {
    toggleFavoriteCharacter(mockCharacter);
    expect(favoriteStore$.characters.get()).toEqual([mockCharacter]);
  });

  it("should return true if character is favorite", () => {
    toggleFavoriteCharacter(mockCharacter);
    expect(isFavoriteCharacter(mockCharacter.id)).toBe(true);
  });

  it("should remove a character if toggled again", () => {
    toggleFavoriteCharacter(mockCharacter);
    toggleFavoriteCharacter(mockCharacter);
    expect(favoriteStore$.characters.get()).toEqual([]);
  });

  it("should return false if character is not favorite", () => {
    expect(isFavoriteCharacter(mockCharacter.id)).toBe(false);
  });
});
