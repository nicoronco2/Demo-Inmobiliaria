import { z } from "zod";

/**
 * Esquema de validación del formulario "Quiero vender" (Sprint 5).
 * Ubicado en la capa `validations`, independiente de la UI.
 */
export const sellingFormSchema = z.object({
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
  propertyType: z.string().min(1, "Elegí el tipo de propiedad"),
  zone: z.string().min(1, "Ingresá la zona de tu propiedad"),
  message: z
    .string()
    .min(10, "Contanos un poco más (mínimo 10 caracteres)")
    .max(1000, "El mensaje es demasiado largo"),
});

export type SellingFormValues = z.infer<typeof sellingFormSchema>;

/** Tipos de propiedad disponibles en el formulario de venta. */
export const SELLING_PROPERTY_TYPES = [
  "Casa",
  "Departamento",
  "PH",
  "Local",
  "Oficina",
  "Terreno",
  "Country / Barrio cerrado",
] as const;