import { characterStore$ } from "../store/characterStore";
import { use$ } from "@legendapp/state/react";
import { CharacterModal } from "./ui/CharacterModal";
import { useFetchLocation } from "../hooks/useFetchLocation";

export const CharacterDetails = () => {
  const isSelected = use$(characterStore$.isSelected);

  const { name, status, species, gender, episodes, image, originId } =
    characterStore$.selected.get() || {};

  const { location } = useFetchLocation({ locationId: originId || -1 });
  console.log("🚀 ~ CharacterDetails ~ location:", location);

  return (
    <CharacterModal
      title={name}
      image={image}
      labels={isSelected ? ([status, species, gender] as string[]) : undefined}
      description={`${name}, appears in ${episodes} episodes.`}
      isOpen={isSelected}
      onClose={() => characterStore$.selected.set(null)}
    />
  );
};
