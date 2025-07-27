export type ICharacter = {
  id: number;
  name: string;
  episodes: number;
  image: string;
  originId: number;
  species: string;
  gender: string;
  status: CharacterStatus;
};

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
