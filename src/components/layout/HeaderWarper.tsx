import { HStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const HeaderWarper = ({ children }: { children: ReactNode }) => {
  return (
    <HStack
      alignItems="center"
      pl="29px"
      w="100%"
      h="72px"
      borderColor="gray.200"
      borderBottomWidth="1px"
    >
      {children}
    </HStack>
  );
};
