/**
 * Testimonios ficticios de la demo NOVA.
 * Se presentan como contenido ilustrativo de la landing y NO deben exhibirse
 * como reseñas reales de clientes (Sección "Testimonial" del Sprint 2).
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    quote:
      "Encontrar la casa de la familia fue mucho más simple de lo que imaginábamos. El equipo nos acompañó en cada paso.",
    author: "María y Juan Pérez",
    role: "Compradores · Nueva Córdoba",
  },
  {
    id: "test-002",
    quote:
      "Alquilamos en tiempo récord y con total transparencia. La gestión de papeles fue impecable.",
    author: "Lucía Fernández",
    role: "Inquilina · Alto Alberdi",
  },
  {
    id: "test-003",
    quote:
      "Vendieron nuestra casa al valor que esperábamos y en menos de dos meses. Un servicio premium.",
    author: "Roberto Sosa",
    role: "Vendedor · La Country",
  },
];