import { useState } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PROPERTY_OPERATIONS,
  PROPERTY_TYPES,
} from "@/types/property";
import { cn } from "@/lib/utils";

export interface SearchBarProps {
  className?: string;
  /** Callback opcional al enviar la búsqueda (a implementar en Sprint 4). */
  onSearch?: () => void;
}

const OPERATION_OPTIONS = ["todos", ...PROPERTY_OPERATIONS] as const;
const TYPE_OPTIONS = ["tipo", ...PROPERTY_TYPES] as const;
const LOCATIONS = [
  "Todas las ubicaciones",
  "Nueva Córdoba",
  "Centro",
  "La Country",
  "Alta Gracia",
  "General Paz",
];

/**
 * SearchBar — Componente visual de búsqueda de propiedades.
 * Solo representa el formulario (operación, tipo, ubicación y rango); la lógica
 * real de filtros se implementa en Sprint 4. Presentacional y con estado local
 * de UI (sin lógica de negocio).
 */
export function SearchBar({ className, onSearch }: SearchBarProps) {
  const [operation, setOperation] = useState<string>(OPERATION_OPTIONS[0]);
  const [type, setType] = useState<string>(TYPE_OPTIONS[0]);
  const [location, setLocation] = useState<string>(LOCATIONS[0]);
  const [minPrice, setMinPrice] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.();
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={cn(
        "rounded-2xl border border-border bg-card p-4 shadow-nova-card sm:p-5",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr_1.2fr_auto]">
        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Operación
          </span>
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {OPERATION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt === "todos"
                  ? "Comprar o alquilar"
                  : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tipo
          </span>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {TYPE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt === "tipo"
                  ? "Tipo de propiedad"
                  : opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Ubicación
          </span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {LOCATIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Precio máximo
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Sin límite"
            aria-label="Precio máximo"
            className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </label>

        <div className="flex items-end">
          <Button type="submit" variant="brand" className="h-11 w-full md:w-auto md:px-6">
            <Search className="h-4 w-4" />
            Buscar
          </Button>
        </div>
      </div>
    </form>
  );
}