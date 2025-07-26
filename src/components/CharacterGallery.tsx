import { useEffect, useState } from "react";
import { characterService } from "../services/characterService";
import { CharacterCard } from "./CharacterCard";
import { Wrap } from "@chakra-ui/react";

export const CharacterGallery = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const load = async () => {
      const query = await characterService.query({
        // name: "rick",
        // status: Status.Alive,
      });
      setCharacters(query.results);
    };

    load();
  });
  return (
    <Wrap spacing="10px">
      {characters.map(({ id, image, name, status }) => (
        <CharacterCard key={id} image={image} name={name} status={status} />
      ))}
    </Wrap>
  );
};
