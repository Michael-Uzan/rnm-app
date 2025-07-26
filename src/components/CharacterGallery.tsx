import { CharacterCard } from "./CharacterCard";
import { Box, Input, Wrap } from "@chakra-ui/react";
import { useFetchCharacters } from "../hooks/useFetchCharacters";

export const CharacterGallery = () => {
  const { characters, filterBy, setFilterBy } = useFetchCharacters();

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
      <Wrap spacing="10px">
        {characters.map(({ id, image, name, status }) => (
          <CharacterCard key={id} image={image} name={name} status={status} />
        ))}
      </Wrap>
    </Box>
  );
};
