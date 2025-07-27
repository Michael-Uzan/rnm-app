import { Box, Wrap } from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { CharacterStatus } from "../interfaces/ICharacter";
import { FilterStatus } from "./FilterStatus";
import { PagingButtons } from "./ui/PagingButtons";
import { CharacterCardWarper } from "./CharacterCardWarper";
import { CharacterCardSkeleton } from "./ui/CharacterCard";
import { SearchInput } from "./ui/SearchInput";

export const CharacterGallery = () => {
  const { loading, characters, pages, filterBy, setFilterBy } =
    useFetchCharacters();
  const handleInputChange = (name: string) =>
    setFilterBy((prevFilterBy) => ({
      ...prevFilterBy,
      // Reset paging when searching
      page: 1,
      name,
    }));

  return (
    <Box>
      <SearchInput
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
      <Wrap spacing="10px">
        {loading
          ? new Array(8)
              .fill(null)
              .map((_, index) => <CharacterCardSkeleton key={index} />)
          : null}
        {characters.map((character) => (
          <CharacterCardWarper key={character.id} character={character} />
        ))}
      </Wrap>
    </Box>
  );
};
