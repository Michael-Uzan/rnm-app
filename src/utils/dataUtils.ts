import type { ICharacterApi } from "../interfaces/ICharacerApi";
import type { ICharacter } from "../interfaces/ICharacter";

export function parseCharacterData(apiResults: ICharacterApi[]): ICharacter[] {
  return apiResults.map(
    ({ id, name, episode, image, origin, species, gender, status }) => ({
      id,
      name,
      episodes: episode.length,
      image,
      originUrl: origin.url,
      species,
      gender,
      status,
    })
  );
}
