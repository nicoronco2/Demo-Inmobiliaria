import { Link } from "react-router-dom";
import { Bath, Bed, MapPin, Ruler } from "lucide-react";

import { Price } from "@/components/property/Price";
import { PropertyBadge } from "@/components/property/PropertyBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Property } from "@/types/property";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  property: Property;
  className?: string;
}

/**
 * Feature row — fila de características (dormitorios, baños, superficie).
 * Solo muestra el dato cuando tiene valor (p. ej. terrenos sin ambientes).
 */
function Features({ property }: { property: Property }) {
  const items = [
    { value: property.bedrooms, label: "dorm", icon: Bed },
    { value: property.bathrooms, label: "baño", icon: Bath },
    { value: property.area, label: "m²", icon: Ruler },
  ].filter((item) => item.value > 0);

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
      {items.map(({ value, label, icon: Icon }) => (
        <span key={label} className="inline-flex items-center gap-1.5">
          <Icon className="h-4 w-4 text-primary" />
          <span>
            {value} {label}
          </span>
        </span>
      ))}
    </div>
  );
}

/**
 * PropertyCard — Tarjeta presentacional de una propiedad.
 * Recibe una `Property` por props y no conoce repositorios, Axios ni datos.
 * Hover elegante: elevación de sombra + zoom sutil en la imagen.
 */
export function PropertyCard({ property, className }: PropertyCardProps) {
  const detailHref = `/propiedades/${property.slug}`;

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-[box-shadow,transform] duration-300 hover:shadow-nova-lift",
        className
      )}
    >
      <Link
        to={detailHref}
        className="relative block h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-brand/20"
        aria-label={property.title}
      >
        <img
          src={property.images[0]}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <PropertyBadge operation={property.operation} />
        </div>
      </Link>

      <CardContent className="space-y-4 p-5">
        <div className="space-y-1.5">
          <Price price={property.price} currency={property.currency} />
          <Link to={detailHref} className="block">
            <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
              {property.title}
            </h3>
          </Link>
          <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary/70" />
            {property.location}
          </p>
        </div>

        <Features property={property} />

        <div className="pt-1">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link to={detailHref}>Ver propiedad</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}