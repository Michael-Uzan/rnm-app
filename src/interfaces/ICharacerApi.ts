import type { CharacterStatus } from "./ICharacter";

export type ICharacterApi = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: string;
  image: string;
  episode: string[];
  created: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  type: string;
  url: string;
};
