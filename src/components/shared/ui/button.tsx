import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/components/shared/lib/utils";

const buttonVariants = cva(
  "blob-button cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-[0.75rem] text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] px-6 py-3 text-[var(--primary-foreground)] shadow-[0_14px_30px_rgba(54,83,39,0.22)] hover:-translate-y-0.5 hover:bg-[var(--primary-strong)]",
        outline: "border border-[var(--primary)] bg-[var(--surface)] px-6 py-3 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white",
        ghost: "px-3 py-2 text-[var(--foreground)] hover:bg-black/5 before:hidden after:hidden",
      },
      size: {
        default: "h-11",
        sm: "h-9 rounded-lg px-4",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10 before:hidden after:hidden",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        <span>{children}</span>
      </Comp>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
