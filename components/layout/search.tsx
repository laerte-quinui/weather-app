"use client";

import { type Location, useGetLocation } from "@/api/location";
import { debounce } from "@/utils";
import { LoaderIcon, Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Field, InputGroupAddon } from "../ui";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxStatus,
} from "../ui/combobox";

const Search = () => {
  const [openSuggestions, setOpenSuggestions] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  // Debounce the search term update to avoid excessive API calls
  const debouncedSetSearchTerm = useMemo(() => {
    return debounce((val: string) => {
      setSearchTerm(val);
    }, 500);
  }, []);

  const handleInputValueChange = (val: string) => {
    setInputValue(val);
    setOpenSuggestions(val.length > 0);
    debouncedSetSearchTerm(val);
  };

  const locationDetails = (location: Location) => {
    return [
      location.admin1,
      location.admin2,
      location.admin3,
      location.admin4,
      location.country,
    ]
      .filter(Boolean)
      .join(", ");
  };

  // Cancel any pending debounced calls on unmount
  useEffect(() => {
    return () => debouncedSetSearchTerm.cancel();
  }, [debouncedSetSearchTerm]);

  const { data: locations, isLoading: isLoadingLocations } = useGetLocation(
    searchTerm,
    {
      enabled: !!searchTerm, // Only fetch when search term is not empty
    },
  );

  const isDebouncePending = inputValue !== searchTerm && inputValue.length > 0;
  const isLoading = isDebouncePending || isLoadingLocations;

  return (
    <Field
      orientation="horizontal"
      className="mt-16 max-w-xl gap-4 self-center"
    >
      {/* Search input */}
      <Combobox
        items={locations?.results}
        open={openSuggestions}
        onOpenChange={setOpenSuggestions}
        onInputValueChange={handleInputValueChange}
        itemToStringValue={(location: Location) => location.name}
        itemToStringLabel={(location: Location) => location.name}
        openOnInputClick={false}
      >
        <ComboboxInput
          ref={inputRef}
          size="lg"
          showClear
          showTrigger={false}
          className="w-full"
          placeholder="Search for a place..."
        >
          <InputGroupAddon>
            <HugeiconsIcon
              icon={Search02Icon}
              strokeWidth={2}
              className="size-4"
            />
          </InputGroupAddon>
        </ComboboxInput>

        {/* Menu content */}
        <ComboboxContent sideOffset={12} anchor={inputRef}>
          {/* Statuses */}
          <ComboboxStatus isVisible={isLoading}>
            <HugeiconsIcon
              icon={LoaderIcon}
              strokeWidth={2}
              className="size-4 animate-spin"
            />
            Search in progress
          </ComboboxStatus>

          {!isLoading && (
            <ComboboxEmpty>No search results found.</ComboboxEmpty>
          )}

          {/* List of search results */}
          <ComboboxList>
            {(location: Location) => (
              <ComboboxItem
                key={location.id}
                value={location}
                className="flex flex-col items-start gap-1 text-start"
              >
                <p>{location.name}</p>
                <p className="text-xs/relaxed text-neutral-300">
                  {locationDetails(location)}
                </p>
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      {/* Search button */}
      <Button size="lg">Search</Button>
    </Field>
  );
};

export default Search;
