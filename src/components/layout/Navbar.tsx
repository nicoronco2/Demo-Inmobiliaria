import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Building2, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Navbar — Navegación pública responsiva (base).
 * Sticky con blur, menú móvil animado (Motion) usando MotionConfig
 * reducedMotion="user" a nivel de App. Preparada para las páginas de la landing.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent backdrop-blur transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-border/70 bg-background/85 shadow-nova-soft"
          : "bg-background/70"
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-6 sm:h-18">
        {/* Logo */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5"
          aria-label="NOVA Inmobiliaria — inicio"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
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

        {/* Navegación de escritorio */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive && "bg-accent text-accent-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="brand" size="sm">
            <Link to="/contacto">Contacto</Link>
          </Button>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-border/70 bg-background/95 lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                        isActive && "bg-accent text-accent-foreground"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Button asChild variant="brand" className="w-full">
                  <Link to="/contacto" onClick={() => setOpen(false)}>
                    Contacto
                  </Link>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}