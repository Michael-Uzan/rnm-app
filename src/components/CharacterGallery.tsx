import { CharacterCard } from "./CharacterCard";
import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Wrap,
} from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { CharacterStatus } from "../interfaces/ICharacter";
import { FilterStatus } from "./FilterStatus";
import { PagingButtons } from "./ui/PagingButtons";
import { SearchIcon } from "@chakra-ui/icons";
import { characterStore$ } from "../store/characterStore";

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
      <InputGroup>
        <Input
          type="search"
          placeholder="Type a name..."
          marginBottom={"10px"}
          value={filterBy.name}
          onChange={({ target }) => handleInputChange(target.value)}
        />
        <InputRightElement>
          <SearchIcon color="teal.500" />
        </InputRightElement>
      </InputGroup>
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
        {characters.map((character) => {
          const { id, image, name, status } = character;

          return (
            <CharacterCard
              key={id}
              image={image}
              name={name}
              status={status}
              onClick={() => {
                characterStore$.selected.set(character);
              }}
            />
          );
        })}
      </Wrap>
    </Box>
  );
};
