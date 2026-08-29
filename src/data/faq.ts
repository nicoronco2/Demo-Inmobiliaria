/**
 * Preguntas frecuentes de la demo NOVA.
 * Contenido ficticio/ilustrativo para la sección FAQ (Accordion).
 */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "faq-001",
    question: "¿Qué es NOVA Inmobiliaria?",
    answer:
      "NOVA es un concepto de inmobiliaria demo de Córdoba que propone una experiencia cercana, transparente y premium para comprar, alquilar y vender propiedades.",
  },
  {
    id: "faq-002",
    question: "¿En qué zonas de Córdoba trabajan?",
    answer:
      "Nos especializamos en los barrios y zonas más relevantes de la ciudad: Nueva Córdoba, Centro, La Country, Valle Escondido, General Paz y Alta Gracia, entre otros.",
  },
  {
    id: "faq-003",
    question: "¿Cuál es el costo de la tasación de mi propiedad?",
    answer:
      "La tasación inicial es sin cargo. Visitamos tu inmueble y te entregamos una valoración profesional sin compromiso.",
  },
  {
    id: "faq-004",
    question: "¿Cómo coordino una visita a una propiedad?",
    answer:
      "Podés escribirnos por WhatsApp, teléfono o el formulario de contacto. Un asesor va a coordinar la visita en el horario que mejor te convenga.",
  },
  {
    id: "faq-005",
    question: "¿La información de esta web corresponde a una inmobiliaria real?",
    answer:
      "No. NOVA es una demo ilustrativa: las propiedades, testimonios, estadísticas y datos de contacto son ficticios y no representan a una empresa existente.",
  },
];