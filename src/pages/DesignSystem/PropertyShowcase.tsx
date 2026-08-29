import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { CTA } from "@/components/sections/CTA";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { Price } from "@/components/property/Price";
import { PropertyBadge } from "@/components/property/PropertyBadge";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchBar } from "@/components/property/SearchBar";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { propertiesRepository } from "@/repositories/properties.repository";

/**
 * PropertyShowcase — Secciones de componentes inmobiliarios del design system.
 * Consume datos vía el repository (página → repository) y entrega los datos por
 * props a los componentes presentacionales. Ningún componente importa `data/`.
 */
export function PropertyShowcase() {
  const properties = propertiesRepository.getAll();
  const featured = propertiesRepository.getFeatured();
  const first = properties[0];

  return (
    <div className="divide-y divide-border/60">
      {/* Propiedad destacada individual */}
      <Section>
        <SectionHeading
          eyebrow="PropertyCard"
          title="Tarjeta de propiedad"
          description="Tarjeta presentacional con imagen, operación, título, precio, ubicación, características y CTA. Hover elegante de elevación + zoom sutil."
        />
        <Reveal className="mt-8 max-w-md">
          {first ? <PropertyCard property={first} /> : null}
        </Reveal>
      </Section>

      {/* PropertyGrid */}
      <Section>
        <SectionHeading
          eyebrow="PropertyGrid"
          title="Grilla de propiedades"
          description="Grilla responsive (1/2/3 columnas) que recibe Property[] por props. Aquí se resuelve a través del repository."
        />
        <Reveal className="mt-8">
          <PropertyGrid properties={featured} />
        </Reveal>
        <p className="mt-6 text-sm text-muted-foreground">
          <strong>{properties.length}</strong> propiedades en total ·
          <strong> {featured.length}</strong> destacadas (featured).
        </p>
      </Section>

      {/* PropertyBadge + Price */}
      <Section>
        <SectionHeading
          eyebrow="PropertyBadge · Price"
          title="Insignia y precio"
          description="Componentes reutilizables para operación (Venta/Alquiler) y precio + moneda. Evitan repetir lógica dentro de otras tarjetas."
        />
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Reveal className="flex items-center gap-3">
            <PropertyBadge operation="venta" />
            <PropertyBadge operation="alquiler" />
          </Reveal>
          <Reveal delay={0.05} className="flex flex-wrap items-end gap-8">
            <Price price={385000} currency="USD" />
            <Price price={620000} currency="ARS" />
            <Price price={950000} currency="ARS" prefix="desde" />
          </Reveal>
        </div>
      </Section>

      {/* SearchBar */}
      <Section>
        <SectionHeading
          eyebrow="SearchBar"
          title="Buscador de propiedades"
          description="Formulario visual de búsqueda (operación, tipo, ubicación y rango de precio). Aún sin lógica de filtros reales."
        />
        <Reveal className="mt-8">
          <SearchBar />
        </Reveal>
      </Section>

      {/* ServiceCard */}
      <Section>
        <SectionHeading
          eyebrow="ServiceCard"
          title="Servicios"
          description="Tarjetas presentacionales para Comprar, Alquilar, Vender e Invertir."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                ctaLabel={service.ctaLabel}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <SectionHeading
          eyebrow="Stats"
          title="Estadísticas"
          description="Componente reutilizable que recibe los datos por props."
        />
        <Reveal className="mt-8">
          <Stats stats={stats} />
        </Reveal>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Testimonial"
          title="Testimonios"
          description="Testimonios ficticios de la demo, presentados como contenido ilustrativo y no como reseñas reales."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <Testimonial quote={t.quote} author={t.author} role={t.role} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <SectionHeading
          eyebrow="CTA"
          title="Llamado a la acción"
          description="Componente reutilizable con título, descripción y acciones por props."
        />
        <Reveal className="mt-8">
          <CTA
            title="¿Sos dueño de una propiedad en Córdoba?"
            description="Recibí una tasación profesional y sin compromiso. Te ayudamos a venderla al mejor precio."
            primaryLabel="Tasá tu propiedad"
            secondaryLabel="Ver propiedades"
          />
        </Reveal>
      </Section>
    </div>
  );
}