import type { ICharacterApi } from "../interfaces/ICharacerApi";
import type { CharacterStatus, ICharacter } from "../interfaces/ICharacter";
import type { ILocation } from "../interfaces/ILocation";
import type { ILocationApi } from "../interfaces/ILocationApi";
import { parseCharacterData, parseLocationData } from "./dataUtils";

describe("parseCharacterData", () => {
  it("should parse API character data correctly", () => {
    const apiCharacters: ICharacterApi[] = [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive" as CharacterStatus.Alive,
        species: "Human",
        gender: "Male",
        image: "https://example.com/rick.png",
        episode: ["ep1", "ep2", "ep3"],
        created: "2020-01-01",
        type: "",
        url: "https://rickandmortyapi.com/api/character/1",
        location: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        origin: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/1",
        },
      },
    ];

    const expected: ICharacter[] = [
      {
        id: 1,
        name: "Rick Sanchez",
        episodes: 3,
        image: "https://example.com/rick.png",
        originId: 1,
        species: "Human",
        gender: "Male",
        status: "Alive" as CharacterStatus.Alive,
      },
    ];

    const result = parseCharacterData(apiCharacters);
    expect(result).toEqual(expected);
  });

  it("should set originId to -1 if origin.url is empty", () => {
    const apiCharacters: ICharacterApi[] = [
      {
        id: 2,
        name: "Unknown Character",
        status: "unknown" as CharacterStatus.Unknown,
        species: "Alien",
        gender: "Unknown",
        image: "https://example.com/unknown.png",
        episode: ["ep1"],
        created: "2020-01-02",
        type: "",
        url: "https://rickandmortyapi.com/api/character/2",
        location: {
          name: "Unknown",
          url: "",
        },
        origin: {
          name: "Unknown",
          url: "",
        },
      },
    ];

    const expected: ICharacter[] = [
      {
        id: 2,
        name: "Unknown Character",
        episodes: 1,
        image: "https://example.com/unknown.png",
        originId: -1,
        species: "Alien",
        gender: "Unknown",
        status: "unknown" as CharacterStatus.Unknown,
      },
    ];

    const result = parseCharacterData(apiCharacters);
    expect(result).toEqual(expected);
  });
});

describe("parseLocationData", () => {
  it("should parse API location data correctly", () => {
    const apiLocation: ILocationApi = {
      id: 1,
      name: "Earth (C-137)",
      type: "Planet",
      dimension: "Dimension C-137",
      residents: [],
      url: "https://rickandmortyapi.com/api/location/1",
      created: "2020-01-01",
    };

    const expected: ILocation = {
      id: 1,
      name: "Earth (C-137)",
      type: "Planet",
      dimension: "Dimension C-137",
    };

    const result = parseLocationData(apiLocation);
    expect(result).toEqual(expected);
  });
});
