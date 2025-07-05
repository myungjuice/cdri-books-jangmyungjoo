import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const spinnerVariants = cva(
  "inline-block animate-spin rounded-full border-2 border-gray-300 border-t-primary",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
        xxl: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof spinnerVariants>;

export default function Spinner({ className, size, ...props }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-live="polite"
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  );
}
