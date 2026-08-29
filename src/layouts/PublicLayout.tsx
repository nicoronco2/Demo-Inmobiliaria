import { Outlet } from "react-router-dom";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/**
 * PublicLayout — Layout del sitio público (Etapa 1 - Landing).
 * Compone Navbar + contenido (Outlet) + Footer, con skip-link para accesibilidad.
 */
export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}