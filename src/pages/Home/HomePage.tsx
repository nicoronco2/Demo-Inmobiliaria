import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

/**
 * Página de inicio mínima (placeholder).
 * Solo verifica que el proyecto compila y renderiza correctamente.
 * La landing real se desarrolla a partir del siguiente sprint.
 */
export function HomePage() {
  return (
    <section className="container flex flex-1 flex-col items-center justify-center gap-6 py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
          NOVA Inmobiliaria
        </h1>
        <p className="mt-4 text-muted-foreground">
          Sprint 0 — Base técnica lista. La landing se desarrolla a continuación.
        </p>
      </motion.div>
      <Button asChild>
        <a href="#inicio">Comenzar</a>
      </Button>
    </section>
  );
}