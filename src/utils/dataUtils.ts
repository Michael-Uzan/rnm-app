import type { ICharacterApi } from "../interfaces/ICharacerApi";
import type { ICharacter } from "../interfaces/ICharacter";
import type { ILocation } from "../interfaces/ILocation";
import type { ILocationApi } from "../interfaces/ILocationApi";

export function parseCharacterData(apiResults: ICharacterApi[]): ICharacter[] {
  return apiResults.map(
    ({ id, name, episode, image, origin, species, gender, status }) => ({
      id,
      name,
      episodes: episode.length,
      image,
      originId: parseInt(origin.url.split("/").pop() || "-1", 10),
      species,
      gender,
      status,
    })
  );
}

export function parseLocationData(apiResult: ILocationApi): ILocation {
  const { id, name, type, dimension } = apiResult;

  return { id, name, type, dimension };
}
