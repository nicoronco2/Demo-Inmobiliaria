/**
 * Navegación pública compartida entre Navbar y Footer.
 * Sigue las rutas definidas en el README (Sección 10). Las páginas de destino
 * se construyen en sprints posteriores; Navbar/Footer quedan preparados.
 */
export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Propiedades", href: "/propiedades" },
  { label: "Comprar", href: "/comprar" },
  { label: "Alquilar", href: "/alquilar" },
  { label: "Vender", href: "/vender" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];