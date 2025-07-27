import { characterStore$ } from "./characterStore";
import type { CharacterStatus, ICharacter } from "../interfaces/ICharacter";

describe("characterStore$", () => {
  const mockCharacter: ICharacter = {
    id: 1,
    name: "Rick Sanchez",
    episodes: 10,
    image: "rick.png",
    originId: 1,
    species: "Human",
    gender: "Male",
    status: "Alive" as CharacterStatus.Alive,
  };

  afterEach(() => {
    // Reset the selected character after each test
    characterStore$.selected.set(null);
  });

  it("should have null selected initially", () => {
    expect(characterStore$.selected.get()).toBeNull();
  });

  it("should return false for isSelected when selected is null", () => {
    expect(characterStore$.isSelected()).toBe(false);
  });

  it("should return true for isSelected when a character is selected", () => {
    characterStore$.selected.set(mockCharacter);
    expect(characterStore$.isSelected()).toBe(true);
  });

  it("should update selected correctly", () => {
    characterStore$.selected.set(mockCharacter);
    expect(characterStore$.selected.get()).toEqual(mockCharacter);
  });
});
