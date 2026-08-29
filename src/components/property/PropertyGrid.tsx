import { PropertyCard } from "@/components/property/PropertyCard";
import type { Property } from "@/types/property";
import { cn } from "@/lib/utils";

export interface PropertyGridProps {
  properties: Property[];
  className?: string;
  /** Limita la cantidad de propiedades a mostrar (p. ej. destacadas). */
  limit?: number;
}

/**
 * PropertyGrid — Grilla responsive de PropertyCard.
 * Presentacional: recibe `Property[]` por props y las renderiza. No accede a
 * repositorios ni datos.
 */
export function PropertyGrid({
  properties,
  className,
  limit,
}: PropertyGridProps) {
  const visible = limit ? properties.slice(0, limit) : properties;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {visible.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}