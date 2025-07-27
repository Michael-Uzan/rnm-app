import { HStack, Text } from "@chakra-ui/react";
import { capitalize } from "../../utils/stringUtils";

type LocationDetailProp = {
  label: string;
  value: string;
};

export const LocationDetail = ({ label, value }: LocationDetailProp) => {
  return (
    <HStack>
      <Text fontWeight={600}>{capitalize(label)}:</Text>
      <Text>{value}</Text>
    </HStack>
  );
};
