/**
 * Tipos del dominio inmobiliario NOVA.
 * Definen el contrato de datos usado por repositorios, páginas y componentes
 * presentacionales. Siguen el modelo conceptual de la Sección 9 del README.
 */

export const PROPERTY_OPERATIONS = ["venta", "alquiler"] as const;
export type PropertyOperation = (typeof PROPERTY_OPERATIONS)[number];

export const PROPERTY_TYPES = ["casa", "departamento", "local", "terreno"] as const;
export type PropertyType = (typeof PROPERTY_TYPES)[number];

export const PROPERTY_CURRENCIES = ["USD", "ARS"] as const;
export type PropertyCurrency = (typeof PROPERTY_CURRENCIES)[number];

export interface Property {
  id: string;
  slug: string;
  title: string;
  operation: PropertyOperation;
  propertyType: PropertyType;
  price: number;
  currency: PropertyCurrency;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  images: string[];
  featured: boolean;
}