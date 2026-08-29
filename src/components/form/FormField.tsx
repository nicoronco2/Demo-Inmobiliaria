import * as React from "react";

import { FormError } from "@/components/form/FormError";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  /** Mensaje de error a mostrar debajo del control. */
  error?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * FormField — Wrapper de campo de formulario (label + control + error).
 * Presentacional y reutilizable en los formularios RHF + Zod de la página.
 */
export function FormField({
  label,
  htmlFor,
  required,
  error,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-0", className)}>
      <Label htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="ml-0.5 text-destructive" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      {children}
      <FormError message={error} />
    </div>
  );
}