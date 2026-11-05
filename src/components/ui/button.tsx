// shadcn/ui Button pattern, adapted to the portfolio's approved visual system.
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: { default: "button button-primary", outline: "schema-tab" },
      size: { default: "", small: "text-xs" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);
type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };
export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
