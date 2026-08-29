import * as React from "react";

import { Container } from "./Container";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Envuelve el contenido en un Container. */
  container?: boolean;
  /** Activa/desactiva el espaciado vertical de la sección. */
  padded?: boolean;
}

/**
 * Section — Sección semántica con ritmo vertical consistente del design system.
 * Presentacional y reutilizable en todas las páginas públicas.
 */
export function Section({
  className,
  container = true,
  padded = true,
  ...props
}: SectionProps) {
  const content = props.children;

  return (
    <section
      className={cn(
        "border-border/60",
        padded && "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      {container ? (
        <Container>{content}</Container>
      ) : (
        <>{content}</>
      )}
    </section>
  );
}