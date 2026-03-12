import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/components/shared/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return <Component className={cn("container-shell", className)} {...props} />;
}
