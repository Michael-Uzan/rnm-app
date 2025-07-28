import { Box } from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { CharacterStatus } from "../interfaces/ICharacter";
import { FilterStatus } from "./FilterStatus";
import { PagingButtons } from "./ui/PagingButtons";
import { SearchInputDebounce } from "./ui/SearchInputDebounce";
import { useToastMessages } from "../hooks/useToastMessages";
import { useEffect } from "react";
import CharacterList from "./CharacterList";
import { ERROR_MESSAGE } from "../config/uiConfig";

export const CharacterGallery = () => {
  const { loading, error, characters, pages, filterBy, setFilterBy } =
    useFetchCharacters();
  const { warnToast } = useToastMessages();

  useEffect(() => {
    if (error) {
      warnToast({ description: ERROR_MESSAGE });
    }
  }, [error, warnToast]);

  const handleInputChange = (name: string) =>
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      // Reset paging when searching
      page: 1,
      name,
    }));

  return (
    <Box>
      <SearchInputDebounce
        value={filterBy.name || ""}
        placeholder="Type a name..."
        onChange={handleInputChange}
      />
      <FilterStatus
        name="status"
        options={[
          "",
          CharacterStatus.Alive,
          CharacterStatus.Dead,
          CharacterStatus.Unknown,
        ]}
        onChange={(nextValue: string) =>
          setFilterBy((prevFilter) => ({
            ...prevFilter,
            page: 1,
            status: nextValue as CharacterStatus,
          }))
        }
      />
      <PagingButtons
        currentPage={filterBy.page}
        pages={pages}
        backDisabled={loading || filterBy.page === 1}
        forwardDisabled={loading || filterBy.page === pages}
        onBackClicked={() =>
          setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            page: prevFilterBy.page - 1,
          }))
        }
        onForwardClicked={() =>
          setFilterBy((prevFilterBy) => ({
            ...prevFilterBy,
            page: prevFilterBy.page + 1,
          }))
        }
      />
      <CharacterList
        noResultText={`No Results for ${filterBy.status || ""} ${
          filterBy.name
        }`}
        characters={characters}
        loading={loading}
      />
    </Box>
  );
};
