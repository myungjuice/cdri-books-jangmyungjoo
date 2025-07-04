import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const inputVariants = cva(
  "h-9 w-full outline-none px-4 py-3 placeholder:text-text-sub-title text-black",
  {
    variants: {
      variant: {
        underline: "text-caption-medium border-0 border-b border-gray-3 focus:border-primary",
        ghost: "text-caption border-none bg-transparent outline-none",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  },
);

type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputVariants>;

export default function Input({ className, variant, ...props }: InputProps) {
  return <input type="text" className={cn(inputVariants({ variant, className }))} {...props} />;
}
