import { characterStore$ } from "../store/characterStore";
import { use$ } from "@legendapp/state/react";
import { CharacterModal } from "./ui/CharacterModal";

export const CharacterDetails = () => {
  const isSelected = use$(characterStore$.isSelected);
  const { name, status, species, gender, episodes, image } =
    characterStore$.selected.get() || {};

  return (
    <CharacterModal
      title={name}
      image={image}
      labels={isSelected ? ([status, species, gender] as string[]) : undefined}
      description={`${name}, appears in ${episodes} episodes`}
      isOpen={isSelected}
      onClose={() => characterStore$.selected.set(null)}
    />
  );
};
