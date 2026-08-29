import { Badge } from "@/components/ui/badge";
import type { PropertyOperation } from "@/types/property";

const OPERATION_LABELS: Record<PropertyOperation, string> = {
  venta: "Venta",
  alquiler: "Alquiler",
};

/** Variante de Badge según la operación (usa el token `brand` del DS). */
const OPERATION_VARIANT: Record<PropertyOperation, "brand" | "outline"> = {
  venta: "brand",
  alquiler: "outline",
};

export interface PropertyBadgeProps {
  operation: PropertyOperation;
  className?: string;
}

/**
 * PropertyBadge — Insignia de operación (Venta / Alquiler).
 * Reutilizable en PropertyCard y listados. Centraliza el mapeo operación→texto
 * y evita repetir lógica de etiquetas dentro de las tarjetas.
 */
export function PropertyBadge({ operation, className }: PropertyBadgeProps) {
  return (
    <Badge variant={OPERATION_VARIANT[operation]} className={className}>
      {OPERATION_LABELS[operation]}
    </Badge>
  );
}