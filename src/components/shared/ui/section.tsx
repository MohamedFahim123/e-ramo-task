import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/components/shared/lib/utils";

const spacingClasses = {
  default: "pt-18",
  hero: "pt-32",
  compact: "pt-10",
  none: "",
} as const;

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  spacing?: keyof typeof spacingClasses;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  className,
  spacing = "default",
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return <Component className={cn(spacingClasses[spacing], className)} {...props} />;
}
