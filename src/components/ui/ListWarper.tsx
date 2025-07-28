import { Wrap } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const ListWarper = ({ children }: { children: ReactNode }) => {
  return <Wrap spacing="10px">{children}</Wrap>;
};
