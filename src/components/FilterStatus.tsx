import { HStack, useRadioGroup, type RadioProps } from "@chakra-ui/react";
import RadioCard from "./ui/RadioCard";

type FilterStatusProps = {
  onChange: (nextValue: string) => void;
  options: string[];
  name: string;
  defaultValue?: string;
};

export const FilterStatus = ({
  name,
  options,
  defaultValue = "",
  onChange,
}: FilterStatusProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <HStack {...group} marginBottom={"10px"}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...(radio as RadioProps)}>
            {value || "All"}
          </RadioCard>
        );
      })}
    </HStack>
  );
};
