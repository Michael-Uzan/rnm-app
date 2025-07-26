import { HeaderWarper } from "./layout/HeaderWarper";
import { LogoIcon } from "../assets/LogoIcon";
import { Image } from "@chakra-ui/react";
import titleUrl from "../assets/title.svg";

export const AppHeader = () => {
  return (
    <HeaderWarper>
      <LogoIcon
        boxSize={{ base: "45px", md: "60px" }}
        fill={"teal.400"}
        marginRight={{ base: "5px", md: "10px" }}
      />
      <Image width={{ base: "150px", md: "200px" }} src={titleUrl} />
    </HeaderWarper>
  );
};
