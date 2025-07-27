import { HStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const HeaderWarper = ({ children }: { children: ReactNode }) => {
  return (
    <HStack
      alignItems="center"
      px="15px"
      w="100%"
      h="80px"
      borderColor="gray.200"
      borderBottomWidth="1px"
    >
      {children}
    </HStack>
  );
};
