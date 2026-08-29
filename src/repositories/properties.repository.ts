import { properties } from "@/data/properties";
import type { Property } from "@/types/property";

/**
 * PropertiesRepository — Capa de acceso a datos de propiedades.
 *
 * Regla de arquitectura (README, Sección 4): páginas y componentes NO acceden
 * directamente a Axios ni a `data/properties.ts`. Este repository encapsula la
 * fuente de datos local. Cuando exista backend, esta capa pasará a consumir la
 * API REST mediante Axios sin cambiar la API aquí expuesta.
 */
export const propertiesRepository = {
  /** Devuelve todas las propiedades. */
  getAll(): Property[] {
    return properties;
  },

  /** Devuelve las propiedades destacadas (featured). */
  getFeatured(): Property[] {
    return properties.filter((property) => property.featured);
  },

  /** Devuelve una propiedad por slug, o undefined si no existe. */
  getBySlug(slug: string): Property | undefined {
    return properties.find((property) => property.slug === slug);
  },
};