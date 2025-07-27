import { HeaderWarper } from "./layout/HeaderWarper";
import { LogoIcon } from "../assets/LogoIcon";
import { IconButton, Image, Spacer, useColorMode } from "@chakra-ui/react";
import titleUrl from "../assets/title.svg";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const AppHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HeaderWarper>
      <LogoIcon
        boxSize={{ base: "45px", md: "60px" }}
        fill={"teal.400"}
        marginRight={{ base: "5px", md: "10px" }}
      />
      <Image width={{ base: "150px", md: "200px" }} src={titleUrl} />
      <Spacer />
      <IconButton
        isRound
        colorScheme="teal"
        aria-label="color-mode-button"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      ></IconButton>
    </HeaderWarper>
  );
};
