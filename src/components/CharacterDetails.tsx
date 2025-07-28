import { characterStore$ } from "../store/characterStore";
import { use$ } from "@legendapp/state/react";
import { CharacterModal } from "./ui/CharacterModal";
import { useFetchLocation } from "../hooks/useFetchLocation";
import { useEffect, useMemo } from "react";
import { useIsFavoriteCharacter } from "../hooks/useIsFavoriteCharacter";
import { toggleFavoriteCharacter } from "../store/favoritesStore";
import { useToastMessages } from "../hooks/useToastMessages";
import { ERROR_MESSAGE } from "../config/uiConfig";

export const CharacterDetails = () => {
  const isSelected = use$(characterStore$.isSelected);
  const selectedCharacter = characterStore$.selected.get();

  const { id, name, status, species, gender, episodes, image, originId } =
    selectedCharacter || {};

  const { warnToast } = useToastMessages();
  const { location, loading, error } = useFetchLocation({
    locationId: originId || -1,
  });
  const isFavorite = useIsFavoriteCharacter(id || -1);

  useEffect(() => {
    if (error) {
      warnToast({ description: ERROR_MESSAGE });
    }
  }, [error, warnToast]);

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
      loading={loading}
      isOpen={isSelected}
      isFavorite={isFavorite}
      title={name}
      image={image}
      labels={
        isSelected
          ? ([status, species, gender].filter(
              (value) => value !== "unknown"
            ) as string[])
          : undefined
      }
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
