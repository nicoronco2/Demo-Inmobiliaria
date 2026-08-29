import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { PropertyGrid } from "@/components/property/PropertyGrid";
import { SearchBar } from "@/components/property/SearchBar";
import { CTA } from "@/components/sections/CTA";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { zones } from "@/data/zones";
import { propertiesRepository } from "@/repositories/properties.repository";
import { usePageMeta } from "@/lib/seo";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80";
const EDITORIAL_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80";

const TRUST_ITEMS = [
  { value: "12", label: "años de trayectoria" },
  { value: "350+", label: "propiedades gestionadas" },
  { value: "98%", label: "de satisfacción" },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/40" />
      <Container className="relative py-24 sm:py-28 lg:py-36">
        <Reveal className="max-w-2xl space-y-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/90">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Inmobiliaria referente en Córdoba
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Propiedades que cuentan{" "}
            <span className="italic text-brand">historias</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Acompañamos a las familias de Córdoba a comprar, alquilar y vender
            con asesoramiento integral, transparencia y una curaduría exclusiva
            de propiedades.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button asChild variant="brand" size="lg">
              <Link to="/propiedades">Ver propiedades</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/vender">Vender mi propiedad</Link>
            </Button>
          </div>
          <dl className="flex max-w-md flex-wrap items-center gap-x-8 gap-y-4 border-t border-primary-foreground/15 pt-6">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label}>
                <dd className="font-display text-2xl font-semibold text-primary-foreground">
                  {item.value}
                </dd>
                <dt className="text-xs text-primary-foreground/70">
                  {item.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}

function Editorial() {
  return (
    <Section className="bg-muted/30">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl shadow-nova-card">
            <img
              src={EDITORIAL_IMAGE}
              alt="Interior de una propiedad premium de NOVA"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="space-y-6">
          <SectionHeading
            eyebrow="Nuestra identidad"
            title="Más que metros cuadrados"
            align="left"
          />
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            En NOVA entendemos que cada propiedad es el escenario de los
            proyectos de una familia. Por eso cuidamos cada detalle, desde la
            selección de inmuebles hasta el acompañamiento legal y comercial,
            para que la experiencia sea tan buena como el lugar que buscás.
          </p>
          <ul className="space-y-3">
            {[
              "Curaduría exclusiva de propiedades verificadas",
              "Asesoramiento integral de compra, venta y alquiler",
              "Acompañamiento profesional en cada etapa",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline">
            <Link to="/nosotros">
              Conocé NOVA
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}function ZoneCard({ zone }: { zone: (typeof zones)[number] }) {
  return (
    <Card className="group h-full overflow-hidden transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-nova-lift">
      <div className="relative h-52 overflow-hidden">
        <img
          src={zone.image}
          alt={zone.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
          {zone.propertiesCount}
        </span>
      </div>
      <CardContent className="p-5">
        <h3 className="font-display text-xl font-medium tracking-tight">
          {zone.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {zone.description}
        </p>
      </CardContent>
    </Card>
  );
}
export function HomePage() {
  usePageMeta(
    "NOVA Inmobiliaria — Propiedades en Córdoba",
    "NOVA Inmobiliaria: comprá, alquilá o vendé propiedades en Córdoba con asesoramiento premium y una curaduría exclusiva de inmuebles. Demo ilustrativa."
  );

  const featuredProperties = propertiesRepository.getFeatured();

  return (
    <div>
      <Hero />

      <Section>
        <Reveal>
          <SearchBar />
        </Reveal>
      </Section>

      <Section id="propiedades">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Destacadas"
            title="Propiedades seleccionadas"
            description="Una curaduría exclusiva de inmuebles en las mejores zonas de Córdoba."
          />
          <Button asChild variant="outline">
            <Link to="/propiedades">
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <Reveal className="mt-8">
          <PropertyGrid properties={featuredProperties} />
        </Reveal>
      </Section>

      <Editorial />

      <Section>
        <SectionHeading
          eyebrow="Servicios"
          title="Cómo te acompañamos"
          description="Soluciones integrales para cada etapa de tu vida inmobiliaria."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06}>
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

      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="NOVa en números"
          title="Confianza que se construye"
          description="Datos de la demo para ilustrar el alcance de la propuesta."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <Reveal className="mt-10">
          <Stats stats={stats} />
        </Reveal>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Zonas"
          title="Dónde trabajamos"
          description="Los barrios y zonas de Córdoba donde nos especializamos."
        />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone, i) => (
            <Reveal key={zone.id} delay={(i % 3) * 0.06}>
              <ZoneCard zone={zone} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Historias ilustrativas de la demo NOVA (contenido ficticio)."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06}>
              <Testimonial quote={t.quote} author={t.author} role={t.role} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <CTA
            title="¿Sos dueño de una propiedad en Córdoba?"
            description="Recibí una tasación profesional y sin compromiso. También podés ver las propiedades disponibles o escribirnos para asesorarte."
            primaryLabel="Ver propiedades"
            secondaryLabel="Quiero vender"
          />
        </Reveal>
      </Section>
    </div>
  );
}