import { useEffect, useState } from "react";
import { characterService } from "../services/characterService";
import type { IInfoApi } from "../interfaces/IInfoApi";
import type { ICharacterApi } from "../interfaces/ICharacerApi";
import { parseCharacterData } from "../utils/dataUtils";
import type { ICharacter } from "../interfaces/ICharacter";

export const useFetchCharacters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = (await characterService.query({
          // name: "rick",
          // status: Status.Alive,
        })) as { info: IInfoApi; results: ICharacterApi[] };
        setCharacters(parseCharacterData(fetchedData.results));
      } catch (e) {
        setError(true);
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return { characters, loading, error };
};
