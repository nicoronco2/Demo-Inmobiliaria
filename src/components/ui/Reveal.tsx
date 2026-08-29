import { motion, useReducedMotion, type Variants } from "motion/react";

import { fadeUp } from "@/animations/variants";

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Variante de entrada a aplicar. Por defecto `fadeUp`. */
  variant?: Variants;
  /** Retardo en segundos para entradas escalonadas. */
  delay?: number;
}

/**
 * Reveal — Entrada suave (fade + deslizamiento) al entrar en viewport.
 * Reutilizable y presentacional. Respeta `prefers-reduced-motion`:
 * si el usuario lo prefiere, el contenido se muestra sin animación.
 */
export function Reveal({
  children,
  className,
  variant = fadeUp,
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}