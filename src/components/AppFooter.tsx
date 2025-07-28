import { GithubIcon } from "../assets/GithubIcon";
import { LogoIcon } from "../assets/LogoIcon";
import { API_LINK, GITHUB_LINK } from "../config/uiConfig";
import { FooterWarper } from "./layout/FooterWarper";
import { Button, Text, VStack } from "@chakra-ui/react";

export const AppFooter = () => {
  return (
    <FooterWarper>
      <Text pb={"15px"}>Project by Michael Uzan</Text>
      <VStack alignItems={"flex-start"}>
        <Button
          size={"xs"}
          as="a"
          variant={"link"}
          href={GITHUB_LINK}
          target="_blank"
          leftIcon={<GithubIcon />}
          alignItems={"center"}
        >
          <Text color={"ButtonText"}>Code</Text>
        </Button>
        <Button
          as="a"
          size={"xs"}
          variant={"link"}
          href={API_LINK}
          target="_blank"
          leftIcon={<LogoIcon height={"32px"} width={"32px"} />}
          alignItems={"center"}
        >
          <Text color={"ButtonText"}>API Docs</Text>
        </Button>
      </VStack>
    </FooterWarper>
  );
};
