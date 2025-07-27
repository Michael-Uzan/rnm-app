import { characterStore$ } from "../store/characterStore";
import { use$ } from "@legendapp/state/react";
import { CharacterModal } from "./ui/CharacterModal";
import { useFetchLocation } from "../hooks/useFetchLocation";
import { useMemo } from "react";
import { useIsFavoriteCharacter } from "../hooks/useIsFavoriteCharacter";
import { toggleFavoriteCharacter } from "../store/favoritesStore";

export const CharacterDetails = () => {
  const isSelected = use$(characterStore$.isSelected);
  const selectedCharacter = characterStore$.selected.get();

  const { id, name, status, species, gender, episodes, image, originId } =
    selectedCharacter || {};

  const { location } = useFetchLocation({ locationId: originId || -1 });
  const isFavorite = useIsFavoriteCharacter(id || -1);

  const locationDetails = useMemo(() => {
    if (!location) {
      return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = location;

    return rest;
  }, [location]);

  return (
    <CharacterModal
      isOpen={isSelected}
      isFavorite={isFavorite}
      title={name}
      image={image}
      labels={isSelected ? ([status, species, gender] as string[]) : undefined}
      detailsTitle="Origin"
      details={locationDetails}
      description={`${name}, appears in ${episodes} episodes.`}
      onFavoriteClicked={() =>
        selectedCharacter ? toggleFavoriteCharacter(selectedCharacter) : null
      }
      onClose={() => characterStore$.selected.set(null)}
    />
  );
};
