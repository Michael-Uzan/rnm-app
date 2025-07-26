import { observable } from "@legendapp/state";
import type { ICharacter } from "../interfaces/ICharacter";

export const characterStore$ = observable({
  selected: null as ICharacter | null,
  isSelected: () => !!characterStore$.selected.get(),
});
