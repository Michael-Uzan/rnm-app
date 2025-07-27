import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { debounce } from "lodash";

type SearchInputDebounceProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInputDebounce = ({
  placeholder,
  value,
  onChange,
}: SearchInputDebounceProps) => {
  const [localValue, setLocalValue] = useState(value);

  const debouncedOnChange = useMemo(() => debounce(onChange, 500), [onChange]);

  const handleChange = (newValue: string) => {
    setLocalValue(newValue); //  updates immediately
    debouncedOnChange(newValue); //  triggers debounce
  };

  return (
    <InputGroup>
      <Input
        type="search"
        marginBottom={"10px"}
        placeholder={placeholder}
        value={localValue}
        onChange={({ target }) => handleChange(target.value)}
      />
      <InputRightElement>
        <SearchIcon color="teal.500" />
      </InputRightElement>
    </InputGroup>
  );
};
