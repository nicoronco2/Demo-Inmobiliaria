import { useState } from "react";
import { SearchX, SlidersHorizontal } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchBar } from "@/components/property/SearchBar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Reveal } from "@/components/ui/Reveal";
import { propertiesRepository } from "@/repositories/properties.repository";
import { usePageMeta } from "@/lib/seo";

/**
 * PropertiesPage — Listado público de propiedades (Sprint 4).
 * Ruta /propiedades. Obtiene los datos vía `propertiesRepository` (arquitectura
 * Page → Repository → Data). Reutiliza SearchBar y PropertyGrid.
 * En mobile los filtros se muestran en un Sheet (shadcn/ui).
 */
export function PropertiesPage() {
  usePageMeta(
    "Propiedades — NOVA Inmobiliaria",
    "Explorá la curaduría de propiedades en venta y alquiler que gestiona NOVA en Córdoba. Demo ilustrativa."
  );

  const [filtersOpen, setFiltersOpen] = useState(false);
  const properties = propertiesRepository.getAll();
  const isEmpty = properties.length === 0;

  return (
    <div>
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow="Propiedades"
            title="Encontrá tu próximo hogar"
            description="Explorá la curaduría completa de propiedades que gestiona NOVA en Córdoba. Podés filtrar por operación, tipo, ubicación y precio."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>

        {/* Filtros: Sheet en mobile, inline en escritorio */}
        <div className="mt-8">
          <div className="lg:hidden">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full"
                  aria-label="Abrir filtros de propiedades"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="pb-8 pt-6">
                <SheetHeader className="mb-3">
                  <SheetTitle>Filtrar propiedades</SheetTitle>
                  <SheetDescription>
                    Ajustá los criterios para explorar la curaduría de NOVA.
                  </SheetDescription>
                </SheetHeader>
                <SearchBar onSearch={() => setFiltersOpen(false)} />
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden lg:block">
            <Reveal>
              <SearchBar />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <SectionHeading
            eyebrow="Resultados"
            title={
              isEmpty
                ? "Sin propiedades disponibles"
                : `${properties.length} ${
                    properties.length === 1 ? "propiedad" : "propiedades"
                  }`
            }
          />
        </div>

        {isEmpty ? (
          <Reveal>
            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-20 text-center">
              <SearchX className="h-10 w-10 text-muted-foreground" />
              <p className="max-w-md text-muted-foreground">
                Todavía no hay propiedades publicadas. Volvé pronto para ver
                nuevas oportunidades en el mercado de Córdoba.
              </p>
              <Button asChild variant="outline">
                <a href="/#propiedades">Volver al inicio</a>
              </Button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <PropertyGrid properties={properties} />
          </Reveal>
        )}
      </Section>
    </div>
  );
}