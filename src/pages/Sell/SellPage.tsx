import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, KeyRound, Scale } from "lucide-react";

import { SellingForm } from "@/pages/Sell/SellingForm";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";
import { usePageMeta } from "@/lib/seo";

const processSteps = [
  {
    title: "Contactanos",
    description:
      "Completá el formulario y coordinamos una primera conversación para conocer tu propiedad.",
  },
  {
    title: "Tasación sin costo",
    description:
      "Visitamos tu inmueble y te entregamos una valoración profesional sin compromiso.",
  },
  {
    title: "Promoción exclusiva",
    description:
      "Publicamos tu propiedad con fotografía profesional y la difundimos en nuestros canales.",
  },
  {
    title: "Cierre acompañado",
    description:
      "Te asesoramos en la negociación y en el cierre, con tranquilidad y transparencia.",
  },
];

const benefits = [
  {
    title: "Tasación precisa",
    description: "Valoramos tu propiedad según el mercado real de Córdoba.",
  },
  {
    title: "Comercialización efectiva",
    description: "Exposición amplia y acompañamiento constante durante el proceso.",
  },
  {
    title: "Transparencia total",
    description: "Información clara en cada etapa, sin sorpresas ni letra chica.",
  },
];

/**
 * SellPage — Página orientada a propietarios que quieren vender (Sprint 5).
 * Ruta /vender. Incluye presentación, proceso, beneficios y formulario (RHF+Zod).
 */
export function SellPage() {
  usePageMeta(
    "Vender mi propiedad — NOVA Inmobiliaria",
    "Tasación sin cargo y acompañamiento profesional para vender tu propiedad en Córdoba. Demo ilustrativa."
  );

  return (
    <div>
      {/* Hero */}
      <Section className="bg-foreground !py-24 text-center sm:!py-28">
        <Reveal className="mx-auto max-w-2xl space-y-6">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            <KeyRound className="h-4 w-4 text-brand" />
            Quiero vender
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            Vendé tu propiedad al{" "}
            <span className="italic text-brand">mejor precio</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            En NOVA te acompañamos con una valoración profesional, promoción
            efectiva y asesoramiento integral para que vendas con confianza.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="brand" size="lg">
              <a href="#formulario">Pedir tasación</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link to="/contacto">Contacto</Link>
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Proceso */}
      <Section>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple y transparente"
          description="Cuatro pasos claros para vender tu propiedad sin complicaciones."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <Card className="h-full p-6">
                <CardContent className="space-y-3 p-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
{/* Beneficios */}
      <Section className="bg-muted/30">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <SectionHeading
              eyebrow="Beneficios"
              title="Por qué elegir NOVA"
              align="left"
            />
            <ul className="space-y-4">
              {benefits.map(({ title, description }) => (
                <li key={title} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{title}</p>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="overflow-hidden border-0 bg-primary text-primary-foreground shadow-nova-lift">
              <CardContent className="space-y-6 p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10">
                  <Scale className="h-6 w-6 text-brand" />
                </span>
                <div className="space-y-2">
                  <p className="font-display text-2xl font-medium leading-snug">
                    Tasación profesional sin cargo
                  </p>
                  <p className="text-primary-foreground/85">
                    Sabé cuánto vale tu propiedad hoy. Sin compromiso y con la
                    garantía de un equipo especializado en el mercado cordobés.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Formulario */}
      <Section id="formulario">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Formulario"
              title="Solicitá tu tasación"
              description="Contanos sobre tu propiedad y te contactamos a la brevedad. Demo sin envío real."
              align="center"
              className="mx-auto max-w-2xl"
            />
          </Reveal>
          <Reveal className="mt-8">
            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <SellingForm />
              </CardContent>
            </Card>
          </Reveal>
          <Reveal className="mt-6 text-center">
            <Button asChild variant="link">
              <Link to="/propiedades">
                Ver propiedades en venta
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}