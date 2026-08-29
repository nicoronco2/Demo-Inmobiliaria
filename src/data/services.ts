import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Briefcase,
  Handshake,
  Home,
  KeyRound,
} from "lucide-react";

/**
 * Servicios de la demo NOVA.
 * Datos de presentación de la Etapa 1 (landing). Los componentes los reciben
 * mediante props; nada importa este módulo salvo la página/repositorio.
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    id: "service-comprar",
    title: "Comprar",
    description:
      "Te ayudamos a encontrar la casa o departamento ideal con asesoramiento integral y financiación.",
    ctaLabel: "Ver propiedades",
    icon: Home,
  },
  {
    id: "service-alquilar",
    title: "Alquilar",
    description:
      "Acceso a departamentos y casas en alquiler con contratos claros y gestión profesional.",
    ctaLabel: "Explorar alquileres",
    icon: KeyRound,
  },
  {
    id: "service-vender",
    title: "Vender",
    description:
      "Tasamos tu propiedad a valor de mercado y la promocionamos para venderla en tiempo récord.",
    ctaLabel: "Tasá tu propiedad",
    icon: Handshake,
  },
  {
    id: "service-invertir",
    title: "Invertir",
    description:
      "Oportunidades de inversión en el mercado inmobiliario de Córdoba con análisis de rentabilidad.",
    ctaLabel: "Consultar inversiones",
    icon: Briefcase,
  },
];

/** Acción compartida de servicio (usa ArrowRight en el card). */
export const serviceArrowIcon: LucideIcon = ArrowRight;