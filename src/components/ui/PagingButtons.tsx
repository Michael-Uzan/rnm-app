import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Text } from "@chakra-ui/react";

type PagingButtonsProps = {
  currentPage: number;
  pages: number;
  backDisabled: boolean;
  forwardDisabled: boolean;
  onBackClicked: () => void;
  onForwardClicked: () => void;
};

export const PagingButtons = ({
  pages,
  currentPage,
  backDisabled,
  forwardDisabled,
  onBackClicked,
  onForwardClicked,
}: PagingButtonsProps) => {
  return (
    <HStack marginBottom={"10px"}>
      <IconButton
        aria-label="left-icon-button"
        size={"xs"}
        icon={<ArrowLeftIcon />}
        disabled={backDisabled}
        onClick={onBackClicked}
      />
      <Text>{currentPage}</Text>
      <IconButton
        aria-label="right-icon-button"
        size={"xs"}
        icon={<ArrowRightIcon />}
        disabled={forwardDisabled}
        onClick={onForwardClicked}
      />
      <Text fontSize="xs">
        Page {currentPage} of {pages}
      </Text>
    </HStack>
  );
};
