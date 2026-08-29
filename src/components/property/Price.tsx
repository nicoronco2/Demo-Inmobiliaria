import type { PropertyCurrency } from "@/types/property";
import { cn } from "@/lib/utils";

/** Formatea un precio con la moneda indicada usando Intl (es-AR). */
function formatPrice(price: number, currency: PropertyCurrency): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export interface PriceProps {
  price: number;
  currency: PropertyCurrency;
  className?: string;
  prefix?: string;
}

/**
 * Price — Presenta un precio con su moneda.
 * Reutilizable en PropertyCard y demás tarjetas. Envuelve el precio en
 * conjunción con la moneda, integrando el formato con una sola fuente de verdad.
 */
export function Price({ price, currency, className, prefix }: PriceProps) {
  return (
    <p
      className={cn(
        "font-display text-xl font-semibold tracking-tight text-foreground",
        className
      )}
    >
      {prefix ? <span className="mr-1 text-sm font-normal text-muted-foreground">{prefix}</span> : null}
      {formatPrice(price, currency)}
    </p>
  );
}