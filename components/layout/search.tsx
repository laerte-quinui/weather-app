"use client";

import { useGetLocation } from "@/api/location";
import { debounce } from "@/utils";
import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Field,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Debounce the search term update to avoid excessive API calls
  const debouncedSetSearchTerm = useMemo(() => {
    return debounce((value: string) => {
      setSearchTerm(value);
    }, 300);
  }, []);

  const { data: locations } = useGetLocation(searchTerm, {
    enabled: !!searchTerm, // Only fetch when search term is not empty
  });

  // Cancel any pending debounced calls on unmount
  useEffect(() => {
    return () => {
      debouncedSetSearchTerm.cancel();
    };
  }, [debouncedSetSearchTerm]);

  console.log(locations);

  return (
    <Field
      orientation="horizontal"
      className="mt-16 max-w-xl gap-4 self-center"
    >
      {/* Search input */}
      <InputGroup>
        <InputGroupInput
          size="lg"
          placeholder="Search for a place..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            debouncedSetSearchTerm(e.target.value);
          }}
        />
        <InputGroupAddon>
          <HugeiconsIcon
            icon={Search02Icon}
            strokeWidth={2}
            className="size-4"
          />
        </InputGroupAddon>
      </InputGroup>

      {/* Search button */}
      <Button size="lg">Search</Button>
    </Field>
  );
};

export default Search;
