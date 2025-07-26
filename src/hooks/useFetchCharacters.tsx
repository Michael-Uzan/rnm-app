import { useEffect, useState } from "react";
import { characterService } from "../services/characterService";
import type { IInfoApi } from "../interfaces/IInfoApi";
import type { ICharacterApi } from "../interfaces/ICharacerApi";
import { parseCharacterData } from "../utils/dataUtils";
import type { CharacterStatus, ICharacter } from "../interfaces/ICharacter";

export const useFetchCharacters = () => {
  const [filterBy, setFilterBy] = useState<{
    page: number;
    name?: string;
    status?: CharacterStatus;
  }>({ page: 1 });
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = (await characterService.query(filterBy)) as {
          info: IInfoApi;
          results: ICharacterApi[];
        };
        setPages(fetchedData.info.pages);
        setCharacters(parseCharacterData(fetchedData.results));
      } catch (e) {
        setError(true);
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [filterBy]);

  return { characters, pages, loading, error, filterBy, setFilterBy };
};
