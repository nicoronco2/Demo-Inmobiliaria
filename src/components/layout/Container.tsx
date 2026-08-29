import * as React from "react";

import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "narrow" | "wide";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Ancho máximo del contenedor dentro del layout. */
  size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
  // Usa las utilidades `container` de Tailwind (centrado + padding responsive).
  default: "container",
  narrow: "container max-w-3xl",
  wide: "container max-w-7xl",
};

/**
 * Container — Wrapper de ancho y padding del design system.
 * Centra el contenido y respeta la escala de contenedores configurada.
 */
export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return <div className={cn(sizeClasses[size], className)} {...props} />;
}