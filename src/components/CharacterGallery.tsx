import { CharacterCard } from "./CharacterCard";
import { Box, Input, Wrap } from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { PagingButtons } from "./PagingButtons";

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
      <Input
        type="search"
        placeholder="Type a name..."
        marginBottom={"10px"}
        value={filterBy.name}
        onChange={({ target }) => handleInputChange(target.value)}
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
        {characters.map(({ id, image, name, status }) => (
          <CharacterCard key={id} image={image} name={name} status={status} />
        ))}
      </Wrap>
    </Box>
  );
};
