import { CircleAlert } from "lucide-react";

export interface FormErrorProps {
  message?: string;
}

/**
 * FormError — Mensaje de error de campo presentacional.
 * Reutilizado por `FormField` para los errores de React Hook Form + Zod.
 */
export function FormError({ message }: FormErrorProps) {
  if (!message) return null;

  return (
    <p
      role="alert"
      className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-destructive"
    >
      <CircleAlert className="h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}