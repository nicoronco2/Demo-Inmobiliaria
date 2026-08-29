import { Link } from "react-router-dom";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { PropertyShowcase } from "@/pages/DesignSystem/PropertyShowcase";
import { cn } from "@/lib/utils";

/* Tokens de color leídos en vivo desde las variables CSS del tema. */
const colorTokens: Array<{ name: string; token: string; text?: string }> = [
  { name: "Primary", token: "--primary", text: "hsl(var(--primary))" },
  { name: "Brand", token: "--brand", text: "hsl(var(--brand))" },
  { name: "Foreground", token: "--foreground" },
  { name: "Card", token: "--card" },
  { name: "Background", token: "--background" },
  { name: "Secondary", token: "--secondary" },
  { name: "Muted", token: "--muted" },
  { name: "Accent", token: "--accent" },
  { name: "Border", token: "--border" },
  { name: "Destructive", token: "--destructive" },
];

const spacingScale = [0.5, 1, 1.5, 2, 3, 4, 5, 6];

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-border bg-muted/50 p-4 text-xs leading-relaxed text-foreground">
      <code>{children}</code>
    </pre>
  );
}

/**
 * DesignSystemPage — Showcase interno temporal del design system NOVA.
 * Ruta /design-system. Permite visualizar y probar colores, tipografías,
 * headings, botones, cards, badges, spacing, radius, sombras y states.
 * NO forma parte de la landing (se eliminará o movilizará en sprints finales).
 */
export function DesignSystemPage() {
  return (
    <div className="divide-y divide-border/60">
      {/* Hero de la página */}
      <Section className="border-t-0">
        <Reveal>
          <SectionHeading
            eyebrow="Design System"
            title="NOVA · Sistema visual"
            description="Base reutilizable de la identidad NOVA: tokens de color, tipografía, espaciado, bordes y componentes. Referencia interna durante el desarrollo."
            align="center"
            className="max-w-3xl"
          />
        </Reveal>
      </Section>

      {/* Colores */}
      <Section>
        <SectionHeading eyebrow="Tokens" title="Colores" />
        <Reveal className="mt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {colorTokens.map((c) => (
              <div
                key={c.name}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-nova-soft"
              >
                <div
                  className="h-20 w-full"
                  style={{ background: `hsl(var(${c.token}))` }}
                />
                <div className="space-y-0.5 p-3">
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {c.text ?? `var(${c.token})`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Tipografías */}
      <Section>
        <SectionHeading eyebrow="Tipografía" title="Fuentes y jerarquía" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-nova-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Display · Fraunces
            </p>
            <p className="font-display text-3xl font-medium tracking-tight">
              La propiedad que buscás, con tranquilidad.
            </p>
            <p className="font-display text-lg italic text-muted-foreground">
              Fraunces regular / medium — 400, 500, 600.
            </p>
          </Reveal>
          <Reveal
            delay={0.05}
            className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-nova-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Cuerpo · Inter
            </p>
            <p className="text-base leading-relaxed">
              Texto de lectura para la página: descripciones de propiedades,
              servicios e información institucional.
            </p>
            <p className="text-sm text-muted-foreground">
              Inter regular / medium — 300, 400, 500, 600, 700.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-8 rounded-xl border border-border bg-card p-6 shadow-nova-soft">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Escala de títulos
          </p>
          <div className="space-y-3">
            {[
              { tag: "h1", cls: "text-5xl sm:text-6xl" },
              { tag: "h2", cls: "text-4xl" },
              { tag: "h3", cls: "text-3xl" },
              { tag: "h4", cls: "text-2xl" },
              { tag: "h5", cls: "text-xl" },
              { tag: "h6", cls: "text-lg" },
            ].map(({ tag, cls }) => (
              <p
                key={tag}
                className={cn("font-display font-medium tracking-tight", cls)}
              >
                <span className="mr-3 text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
                Encabezado de sección
              </p>
            ))}
          </div>
        </Reveal>
      </Section>
{/* Headings */}
      <Section>
        <SectionHeading eyebrow="Componente" title="SectionHeading" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6 shadow-nova-soft">
              <SectionHeading
                eyebrow="Alineación izquierda"
                title="Propiedades destacadas"
                description="Una selección curada de propiedades en las mejores zonas de Córdoba."
              />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-xl border border-border bg-card p-6 shadow-nova-soft">
              <SectionHeading
                eyebrow="Alineación centrada"
                title="Servicios inmobiliarios"
                description="Te acompañamos en cada etapa del proceso, con transparencia y confianza."
                align="center"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Botones */}
      <Section>
        <SectionHeading eyebrow="Componente" title="Botones" />
        <Reveal className="mt-8 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Default</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Pequeño</Button>
            <Button>Mediano</Button>
            <Button size="lg">Grande</Button>
            <Button disabled>Deshabilitado</Button>
            <Button asChild variant="brand">
              <Link to="/design-system">Como enlace</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Estados: <strong>hover</strong> y <strong>focus</strong> al pasar el
            cursor o tabular (anillo de enfoque usando el token de color{" "}
            <code className="text-foreground">ring</code>); <strong>disabled</strong>{" "}
            reduce opacidad y deshabilita interacción.
          </p>
        </Reveal>
      </Section>

      {/* Cards */}
      <Section>
        <SectionHeading eyebrow="Componente" title="Cards" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="transition-shadow hover:shadow-nova-lift">
              <CardHeader>
                <Badge variant="brand" className="w-fit">
                  Destacado
                </Badge>
                <CardTitle>Casa en NuevA Córdoba</CardTitle>
                <CardDescription>
                  Descripción breve de una propiedad de ejemplo para el design
                  system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contenido de la card: datos, características o texto libre.
                  La card base consume los tokens de color, borde, radio y sombra.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" asChild>
                  <Link to="/design-system">Ver detalle</Link>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card>
              <CardHeader>
                <CardTitle>Card simple</CardTitle>
                <CardDescription>
                  Sin footer, con hover suave de elevación (sombra nova-lift).
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge>3 dorm</Badge>
                <Badge>2 baños</Badge>
                <Badge>120 m²</Badge>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Badges */}
      <Section>
        <SectionHeading eyebrow="Componente" title="Badges" />
        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Default</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </Reveal>
      </Section>
{/* Escalas */}
      <Section>
        <SectionHeading eyebrow="Escalas" title="Espaciado, radio y sombras" />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-border bg-card p-6 shadow-nova-soft">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Escala de espaciado (rem)
            </p>
            <div className="space-y-3">
              {spacingScale.map((rem) => (
                <div key={rem} className="flex items-center gap-4">
                  <span className="w-16 shrink-0 text-xs tabular-nums text-muted-foreground">
                    {rem}rem
                  </span>
                  <div className="h-4 rounded-sm bg-primary/80" style={{ width: `${rem}rem` }} />
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Se usa la escala de Tailwind (base 0.25rem). Container aporta
              padding responsive y las secciones definen el ritmo vertical.
            </p>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="rounded-xl border border-border bg-card p-6 shadow-nova-soft">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Border radius
              </p>
              <div className="flex flex-wrap items-end gap-4">
                {["rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-full"].map(
                  (r) => (
                    <div key={r} className="text-center">
                      <div className={cn("h-16 w-16 border-2 border-primary/40 bg-primary/10", r)} />
                      <span className="mt-2 block text-xs text-muted-foreground">{r}</span>
                    </div>
                  )
                )}
              </div>
            </Reveal>

            <Reveal className="rounded-xl border border-border bg-card p-6 shadow-nova-soft">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Sombras
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { label: "nova-soft", cls: "shadow-nova-soft" },
                  { label: "nova-card", cls: "shadow-nova-card" },
                  { label: "nova-lift", cls: "shadow-nova-lift" },
                ].map((s) => (
                  <div key={s.cls} className="text-center">
                    <div className={cn("h-16 w-24 rounded-lg bg-card", s.cls)} />
                    <span className="mt-2 block text-xs text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Containers */}
      <Section>
        <SectionHeading eyebrow="Layout" title="Containers" />
        <Reveal className="mt-8 space-y-4">
          <p className="text-sm text-muted-foreground">
            El componente <code className="text-foreground">Container</code>{" "}
            centra el contenido y define el ancho máximo según el breakpoint.
            Tamaños disponibles: default, narrow (max-w-3xl) y wide (max-w-7xl).
          </p>
          {[
            ["default", "container"],
            ["wide", "container max-w-7xl"],
            ["narrow", "container max-w-3xl"],
          ].map(([label, cls]) => (
            <div key={label} className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground">{label} — {cls}</p>
              <div className="h-6 rounded-md border border-dashed border-primary/40 bg-primary/5" />
            </div>
          ))}
        </Reveal>
      </Section>

{/* Skeleton (estados de carga futuros) */}
      <Section>
        <SectionHeading
          eyebrow="Skeleton"
          title="Estados de carga"
          description="Placeholder para preparar los futuros estados de carga cuando las propiedades provengan de una API."
        />
        <Reveal className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="h-52 rounded-none" />
              <CardContent className="space-y-3 p-5">
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </Reveal>
      </Section>
      {/* Navbar y Footer */}
{/* Componentes inmobiliarios (Sprint 2) */}
      <PropertyShowcase />
      <Section>
        <SectionHeading
          eyebrow="Componentes globales"
          title="Navbar y Footer"
          description="Ya se renderizan en esta misma página (arriba y abajo). Navbar sticky con menú móvil animado y Footer responsive de 4 columnas; ambos consumen los enlaces compartidos de navegación."
        />
        <Reveal className="mt-8">
          <Code>{`<PublicLayout>
  <Navbar />          {/* sticky + menú móvil con Motion */}
  <Outlet />          {/* contenido de la página */}
  <Footer />          {/* marca, enlaces y contacto */}
</PublicLayout>`}</Code>
        </Reveal>
      </Section>
    </div>
  );
}