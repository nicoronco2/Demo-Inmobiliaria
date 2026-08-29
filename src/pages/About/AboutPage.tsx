import { Compass, Handshake, Gem, Headphones } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Stats } from "@/components/sections/Stats";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/stats";
import { usePageMeta } from "@/lib/seo";

const values = [
  {
    title: "Confianza",
    description:
      "Construimos relaciones a largo plazo basadas en la honestidad y la transparencia.",
    icon: Handshake,
  },
  {
    title: "Excelencia",
    description:
      "Cuidamos cada detalle para ofrecer un servicio premium y de calidad sostenida.",
    icon: Gem,
  },
  {
    title: "Cercanía",
    description:
      "Escuchamos las necesidades de cada familia y las acompañamos en cada decisión.",
    icon: Headphones,
  },
  {
    title: "Compromiso",
    description:
      "Nos involucramos de verdad en cada operación, de principio a fin.",
    icon: Compass,
  },
];

const howWeWork = [
  {
    title: "Te escuchamos",
    description: "Empezamos por entender qué buscás o necesitás de tu propiedad.",
  },
  {
    title: "Te asesoramos",
    description:
      "Te orientamos con información clara y profesional sobre el mercado.",
  },
  {
    title: "Te acompañamos",
    description: "Estamos con vos en cada etapa, hasta que concretes tu objetivo.",
  },
];

const team = [
  {
    name: "Mariana López",
    role: "Directora comercial",
    description: "Más de una década asesorando proyectos residenciales.",
  },
  {
    name: "Santiago Ferreyra",
    role: "Especialista en ventas",
    description: "Enfocado en propiedades premium y countries.",
  },
  {
    name: "Carla Medina",
    role: "Gestora de alquileres",
    description: "Cuidando la relación entre propietarios e inquilinos.",
  },
  {
    name: "Juan Solari",
    role: "Tasador profesional",
    description: "Valoraciones precisas y análisis de mercado.",
  },
];

/**
 * AboutPage — Página institucional (Sprint 5). Ruta /nosotros.
 * Presenta a NOVA, sus valores, forma de trabajo y un equipo ficticio.
 * El contenido es ilustrativo (demo) y no representa una empresa real.
 */
export function AboutPage() {
  usePageMeta(
    "Nosotros — NOVA Inmobiliaria",
    "Conocé NOVA: nuestra propuesta, valores, forma de trabajo y equipo. Demo ilustrativa de una inmobiliaria en Córdoba."
  );

  return (
    <div>
      {/* Presentación */}
      <Section className="bg-foreground !py-24 text-center sm:!py-28">
        <Reveal className="mx-auto max-w-2xl space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            Sobre NOVA
          </p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            Una forma diferente de vivir{" "}
            <span className="italic text-brand">lo inmobiliario</span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            NOVA es una inmobiliaria demo de Córdoba que propone una experiencia
            cercana, transparente y premium para comprar, alquilar y vender
            propiedades.
          </p>
        </Reveal>
      </Section>
{/* Nuestra historia / propósito */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <SectionHeading
              eyebrow="Nuestra propuesta"
              title="Cada propiedad, un nuevo comienzo"
              align="left"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              Creemos que detrás de cada inmueble hay historias, proyectos y
              sueños. Por eso trabajamos con dedicación artesanal: seleccionamos
              cuidadosamente las propiedades, escuchamos a cada persona y
              acompañamos cada operación con profesionalismo y calidez.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Nuestro equipo combina experiencia, conocimiento local y atención
              personalizada para que la experiencia inmobiliaria sea simple y
              gratificante.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="bg-primary text-primary-foreground shadow-nova-lift">
              <CardContent className="space-y-4 p-8 sm:p-10">
                <p className="font-display text-xl font-medium">
                  “El verdadero valor de una propiedad está en las personas que
                  la van a habitar.”
                </p>
                <p className="text-sm text-primary-foreground/80">
                  — Equipo NOVA
                </p>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Estadísticas de confianza */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="En números"
          title="Nuestra trayectoria"
          align="center"
          className="mx-auto max-w-2xl"
        />
        <Reveal className="mt-10">
          <Stats stats={stats} />
        </Reveal>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Cifras de la demo, con fines ilustrativos.
        </p>
      </Section>

      {/* Valores */}
      <Section>
        <SectionHeading
          eyebrow="Valores"
          title="Lo que nos define"
          description="Cuatro pilares que sostienen nuestra manera de trabajar."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <Card className="h-full p-6">
                <CardContent className="space-y-4 p-0">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
{/* Forma de trabajo */}
      <Section className="bg-muted/30">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Tres momentos, un solo objetivo: vos"
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {howWeWork.map((step, i) => (
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

      {/* Equipo (ficticio) */}
      <Section>
        <SectionHeading
          eyebrow="Equipo"
          title="Las personas detrás de NOVA"
          description="Equipo ilustrativo de la demo. No corresponde a personas reales."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <Card className="h-full p-6">
                <CardContent className="space-y-3 p-0">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-brand/20 font-display text-xl font-semibold text-primary">
                    {member.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}