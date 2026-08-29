import { z } from "zod";

/**
 * Esquema de validación del formulario de contacto (Sprint 5).
 * Se mantiene en la capa `validations` (independiente de la UI).
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Ingresá tu nombre completo")
    .max(80, "El nombre es demasiado largo"),
  email: z
    .string()
    .min(1, "Ingresá tu email")
    .email("Ingresá un email válido"),
  phone: z
    .string()
    .min(6, "Ingresá un teléfono válido")
    .regex(/^[0-9+\-\s()]*$/, "El teléfono solo puede contener números"),
  subject: z.string().min(1, "Elegí un motivo de consulta"),
  message: z
    .string()
    .min(10, "Contanos un poco más (mínimo 10 caracteres)")
    .max(1000, "El mensaje es demasiado largo"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Email de contacto de la demo NOVA. */
export const NOVA_CONTACT_EMAIL = "hola@novainmobiliaria.com";

/** Motivos disponibles para el asunto del formulario. */
export const CONTACT_SUBJECTS = [
  "Compra de propiedad",
  "Alquiler de propiedad",
  "Venta de mi propiedad",
  "Inversión",
  "Otro",
] as const;