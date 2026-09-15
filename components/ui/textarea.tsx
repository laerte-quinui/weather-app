import { cn } from "cn";
import * as React from "react";
import { inputVariants } from "./input";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full resize-none px-2 py-2",
        inputVariants({ className }),
      )}
      {...props}
    />
  );
}

export { Textarea };
