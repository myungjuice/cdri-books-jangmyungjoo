import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/libs/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary !text-white shadow-xs hover:bg-primary/90",
        outline:
          "!text-text-sub-title border border-text-sub-title bg-background shadow-xs  hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-light-gray !text-text-secondary shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        plain: "",
        underline:
          "!text-text-sub-title border-0 border-b-1 border-b-gray-3 bg-background rounded-none shadow-none hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-b-input dark:hover:bg-input/50",
      },
      size: {
        default: "h-12 w-[115px] px-4 py-2 has-[>svg]:px-3 text-caption",
        sm: "h-9 w-18  gap-1.5 px-3 has-[>svg]:px-2.5 text-body-2",
        lg: "h-12 w-[240px] px-6 has-[>svg]:px-4 text-body-medium",
        fill: "h-9 w-full text-caption-medium",
        icon: "size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export default function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
