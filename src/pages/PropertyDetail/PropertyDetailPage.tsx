
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  Bath,
  Bed,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  Ruler,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Price } from "@/components/property/Price";
import { PropertyBadge } from "@/components/property/PropertyBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import type { Property, PropertyType } from "@/types/property";
import { propertiesRepository } from "@/repositories/properties.repository";
import { usePageMeta } from "@/lib/seo";

const TYPE_LABELS: Record<PropertyType, string> = {
  casa: "Casa",
  departamento: "Departamento",
  local: "Local",
  terreno: "Terreno",
};

/** Amenities derivados del modelo de datos (sin lógica de negocio). */
function buildAmenities(property: Property): string[] {
  const items = [
    TYPE_LABELS[property.propertyType],
    `${property.area} m² de superficie`,
  ];
  if (property.bedrooms > 0) {
    items.push(`${property.bedrooms} dormitorio${property.bedrooms > 1 ? "s" : ""}`);
  }
  if (property.bathrooms > 0) {
    items.push(`${property.bathrooms} baño${property.bathrooms > 1 ? "s" : ""}`);
  }
  items.push("Excelente ubicación");
  return items;
}

export interface PropertyGalleryProps {
  property: Property;
}

/**
 * PropertyGallery — Galería presentacional de una propiedad.
 * Imagen principal + miniaturas + navegación, con transición sutil de Motion.
 */
export function PropertyGallery({ property }: PropertyGalleryProps) {
  const [active, setActive] = useState(0);
  const images = property.images;
  const current = images[active];

  function go(step: number) {
    setActive((prev) => (prev + step + images.length) % images.length);
  }

  return (
    <div className="space-y-4">
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted shadow-nova-card">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={current}
              alt={`${property.title} — imagen ${active + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full object-cover"
            />
          </AnimatePresence>
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              aria-label="Imagen anterior"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-nova-card transition-colors hover:bg-background"
            >
              <ChevronLeft className="relative z-10 h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Imagen siguiente"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-foreground shadow-nova-card transition-colors hover:bg-background"
            >
              <ChevronRight className="relative z-10 h-5 w-5" />
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-foreground/70 px-2.5 py-1 text-xs font-medium text-primary-foreground">
              {active + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver imagen ${i + 1}`}
              aria-pressed={i === active}
              className={`overflow-hidden rounded-lg border-2 transition-[border-color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                i === active
                  ? "border-primary"
                  : "border-transparent hover:scale-[1.02]"
              }`}
            >
              <img
                src={image}
                alt=""
                className="aspect-[4/3] w-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
/**
 * PropertyDetailPage — Detalle público de una propiedad (Sprint 4).
 * Ruta /propiedades/:slug. Obtiene la propiedad vía `propertiesRepository
 * .getBySlug(slug)` (arquitectura Page → Repository → Data). Si el slug no
 * existe, muestra un estado amigable con enlace de vuelta al listado.
 */
export function PropertyDetailPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const property = propertiesRepository.getBySlug(slug);
usePageMeta(
    property
      ? `${property.title} — NOVA Inmobiliaria`
      : "Propiedad no encontrada — NOVA Inmobiliaria",
    property
      ? `Propiedad en ${property.location}: ${property.title}. Consultá por esta y otras propiedades de NOVA. Demo ilustrativa.`
      : "No encontramos la propiedad que buscás."
  );

  if (!property) {
    return (
      <Section>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-2xl border border-dashed border-border bg-muted/30 px-6 py-20 text-center">
          <p className="text-5xl">🏠</p>
          <h1 className="font-display text-3xl font-medium tracking-tight">
            Propiedad no encontrada
          </h1>
          <p className="text-muted-foreground">
            No encontramos una propiedad con ese identificador. Puede que haya
            sido removida o que la dirección sea incorrecta.
          </p>
          <Button asChild>
            <Link to="/propiedades">
              <ArrowLeft className="h-4 w-4" />
              Volver a propiedades
            </Link>
          </Button>
        </div>
      </Section>
    );
  }

  const amenities = buildAmenities(property);

  return (
    <div>
      <Section className="bg-muted/30" padded={false}>
        <div className="pb-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="mb-5">
            <Link to="/propiedades">
              <ArrowLeft className="h-4 w-4" />
              Volver a propiedades
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <PropertyBadge operation={property.operation} />
            <span className="text-sm text-muted-foreground">
              {TYPE_LABELS[property.propertyType]}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {property.title}
          </h1>
          <p className="mt-2 inline-flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {property.location} · {property.address}
          </p>
        </div>
      </Section>

      <Section padded={false} className="pb-4 pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <PropertyGallery property={property} />
          </Reveal>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="space-y-5 p-0">
                <Price
                  price={property.price}
                  currency={property.currency}
                  className="text-3xl"
                />
                <div className="grid grid-cols-2 gap-4 border-t border-border/70 pt-5">
                  {[
                    { label: "Superficie", value: `${property.area} m²`, icon: Ruler },
                    { label: "Dormitorios", value: property.bedrooms, icon: Bed },
                    { label: "Baños", value: property.bathrooms, icon: Bath },
                    { label: "Operación", value: property.operation === "venta" ? "Venta" : "Alquiler", icon: MapPin },
                  ]
                    .filter((item) => item.value !== 0)
                    .map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground">
                            {item.label}
                          </span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 p-0">
                <h2 className="font-display text-xl font-medium tracking-tight">
                  Consultá por esta propiedad
                </h2>
                <Button asChild variant="brand" className="w-full">
                  <a
                    href="https://wa.me/543510000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="mailto:hola@novainmobiliaria.com">
                    <CalendarClock className="h-4 w-4" />
                    Solicitar visita
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section padded={false} className="py-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-6">
            <div>
              <h2 className="mb-3 font-display text-2xl font-medium tracking-tight">
                Descripción
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="mb-3 font-display text-2xl font-medium tracking-tight">
                Características
              </h2>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {amenities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:pt-2">
            <Card className="bg-muted/40 p-6">
              <CardContent className="p-0 text-sm leading-relaxed text-muted-foreground">
                <p className="mb-4">
                  ¿Tenés dudas sobre esta propiedad o querés coordinar una
                  visita presencial o virtual? Escribinos y un asesor de NOVA te
                  va a acompañar en cada paso.
                </p>
                <p>
                  📍 {property.location}
                  <br />
                  {property.address}
                </p>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}