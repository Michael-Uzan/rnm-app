import { HeaderWarper } from "./layout/HeaderWarper";
import { LogoIcon } from "../assets/LogoIcon";
import { Heading } from "@chakra-ui/react";

export const AppHeader = () => {
  return (
    <HeaderWarper>
      <LogoIcon fill={"teal.400"} />
      <Heading>Rick and Morty</Heading>
    </HeaderWarper>
  );
};
