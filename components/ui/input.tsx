import { Input as InputPrimitive } from "@base-ui/react/input";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "cn";
import * as React from "react";

const inputVariants = cva(
  "w-full min-w-0 cursor-pointer rounded-md border border-transparent bg-neutral-800 bg-clip-padding text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs/relaxed file:font-medium file:text-foreground placeholder:text-neutral-300 hover:bg-neutral-700 focus-visible:border-background focus-visible:ring-2 focus-visible:ring-neutral-0 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-2 md:text-xs/relaxed",
  {
    variants: {
      size: {
        default: "h-8.5 px-3 py-0.5 text-sm md:text-xs/relaxed!",
        lg: "h-12 rounded-lg px-4 py-1 text-base/relaxed!",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Input({
  className,
  type,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
