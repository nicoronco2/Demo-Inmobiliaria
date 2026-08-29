import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import type { Property } from "@/types/property";

export interface OperationListingProps {
  eyebrow: string;
  title: string;
  description: string;
  /** Propiedades a mostrar (ya provistas por la página vía repository). */
  properties: Property[];
  /** Título/descripción del CTA final. */
  ctaTitle: string;
  ctaDescription?: string;
  ctaPrimaryLabel: string;
}

/**
 * OperationListing — Listado presentacional por operación (comprar/alquilar).
 * Recibe las propiedades por props (la página obtiene los datos vía repository).
 * Reutiliza PropertyGrid y CTA, sin duplicar diseño.
 */
export function OperationListing({
  eyebrow,
  title,
  description,
  properties,
  ctaTitle,
  ctaDescription,
  ctaPrimaryLabel,
}: OperationListingProps) {
  const isEmpty = properties.length === 0;
  const navigate = useNavigate();

  return (
    <div>
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>
      </Section>

      <Section>
        {isEmpty ? (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center text-muted-foreground">
              Todavía no hay propiedades para esta operación. Volvé pronto.
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <PropertyGrid properties={properties} />
          </Reveal>
        )}
        <Reveal className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/propiedades">
              Ver todas las propiedades
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <CTA
            title={ctaTitle}
            description={ctaDescription}
            primaryLabel={ctaPrimaryLabel}
            primaryAction={() => navigate("/contacto")}
          />
        </Reveal>
      </Section>
    </div>
  );
}