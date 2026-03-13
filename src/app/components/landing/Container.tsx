import type { ReactNode } from "react";

type ContainerSize = "3xl" | "4xl" | "6xl" | "7xl";

const sizeClasses: Record<ContainerSize, string> = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export function Container({
  children,
  size = "6xl",
  className = "",
}: ContainerProps) {
  return (
    <div className={`${sizeClasses[size]} mx-auto ${className}`.trim()}>
      {children}
    </div>
  );
}
