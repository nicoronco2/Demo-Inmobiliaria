import * as React from "react";

import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

/**
 * Label — Etiqueta de campo del design system.
 * Reutilizable en formularios (RHF + Zod).
 */
function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Label };