import { Grid, GridItem } from "@chakra-ui/react";
import type { ReactNode } from "react";

export const MainContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      gap={10}
      padding={"15px"}
      marginBottom={"150px"}
    >
      {/* templateColumns={{ base: "1fr", md: "1fr 1fr" }} */}
      {children}
    </Grid>
  );
};

export const HalfSide = ({ children }: { children: ReactNode }) => {
  return <GridItem>{children}</GridItem>;
};
