import { Search02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Button,
  Field,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui";

const Search = () => {
  return (
    <Field
      orientation="horizontal"
      className="mt-16 max-w-xl gap-4 self-center"
    >
      <InputGroup>
        <InputGroupInput size="lg" placeholder="Search for a place..." />
        <InputGroupAddon>
          <HugeiconsIcon
            icon={Search02Icon}
            strokeWidth={2}
            className="size-4"
          />
        </InputGroupAddon>
      </InputGroup>
      <Button size="lg">Search</Button>
    </Field>
  );
};

export default Search;
