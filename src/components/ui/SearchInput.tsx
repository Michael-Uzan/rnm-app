import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({
  placeholder,
  value,
  onChange,
}: SearchInputProps) => {
  return (
    <InputGroup>
      <Input
        type="search"
        marginBottom={"10px"}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
      <InputRightElement>
        <SearchIcon color="teal.500" />
      </InputRightElement>
    </InputGroup>
  );
};
