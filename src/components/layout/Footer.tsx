import { Link } from "react-router-dom";
import {
  Building2,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/data/navigation";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

const contactItems = [
  { label: "Av. Colón 1234, Córdoba", icon: MapPin },
  { label: "+54 351 000 0000", icon: Phone },
  { label: "hola@novainmobiliaria.com", icon: Mail },
];

/**
 * Footer — Pie de página público responsivo (base).
 * Presentacional y preparado para las páginas futuras de la landing.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-tight">
                  NOVA
                </span>
                <span className="text-[0.6rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  Inmobiliaria
                </span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              NOVA Inmobiliaria — una solución web demo para acompañar a las
              inmobiliarias de Córdoba en la venta y alquiler de propiedades.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              {contactItems.map(({ label, icon: Icon }) => (
                <li key={label} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-border/70">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {year} NOVA Inmobiliaria. Todos los derechos reservados.</p>
          <p>Demo ilustrativa — contenido ficticio</p>
        </Container>
      </div>
    </footer>
  );
}