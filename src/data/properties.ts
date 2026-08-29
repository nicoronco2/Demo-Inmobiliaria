import type { Property } from "@/types/property";

/**
 * Propiedades ficticias de la demo NOVA.
 * Son datos locales de la Etapa 1 (landing). Los componentes NO deben importar
 * este módulo directamente: el acceso se resuelve a través del repository.
 */
export const properties: Property[] = [
  {
    id: "prop-001",
    slug: "casa-3-dormitorios-recodo-la-country",
    title: "Casa moderna en Barrio La Country",
    operation: "venta",
    propertyType: "casa",
    price: 385000,
    currency: "USD",
    location: "La Country, Córdoba",
    address: "Av. del Boulevard 2450",
    bedrooms: 3,
    bathrooms: 3,
    area: 320,
    description:
      "Amplia casa de estreno con living comedor a doble altura, parque con pileta y cochera para dos vehículos. A pasos del golf y con vistas verdes.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "prop-002",
    slug: "departamento-2-dormitorios-nueva-cordoba",
    title: "Departamento luminoso en Nueva Córdoba",
    operation: "alquiler",
    propertyType: "departamento",
    price: 620000,
    currency: "ARS",
    location: "Nueva Córdoba, Córdoba",
    address: "Bv. San Juan 187",
    bedrooms: 2,
    bathrooms: 1,
    area: 68,
    description:
      "Departamento a estrenar con balcón, cocina integrada y amenities de edificio: gimnasio, SUM y seguridad 24 hs.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "prop-003",
    slug: "casa-4-dormitorios-valle-escondido",
    title: "Residencia de lujo en Valle Escondido",
    operation: "venta",
    propertyType: "casa",
    price: 520000,
    currency: "USD",
    location: "Valle Escondido, Córdoba",
    address: "Pasaje de la Vid 890",
    bedrooms: 4,
    bathrooms: 4,
    area: 460,
    description:
      "Residencia contemporánea en condominio cerrado con piscina climatizada, quincho y amplios espacios verdes.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "prop-004",
    slug: "local-comercial-centro",
    title: "Local comercial en pleno Centro",
    operation: "alquiler",
    propertyType: "local",
    price: 950000,
    currency: "ARS",
    location: "Centro, Córdoba",
    address: "Av. Colón 361",
    bedrooms: 0,
    bathrooms: 1,
    area: 120,
    description:
      "Local a la calle con vidriera amplia, buena circulación peatonal y pocas expensas. Ideal para comercio o servicios.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "prop-005",
    slug: "terreno-alta-gracia",
    title: "Terreno de 800 m² en Alta Gracia",
    operation: "venta",
    propertyType: "terreno",
    price: 65000,
    currency: "USD",
    location: "Alta Gracia, Córdoba",
    address: "Ruta 5, km 34",
    bedrooms: 0,
    bathrooms: 0,
    area: 800,
    description:
      "Lote plano con todos los servicios (luz, agua, gas) en zona residencial en crecimiento del Valle de Paravachasca.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "prop-006",
    slug: "ph-3-dormitorios-general-paz",
    title: "PH completo en General Paz",
    operation: "venta",
    propertyType: "casa",
    price: 185000,
    currency: "USD",
    location: "General Paz, Córdoba",
    address: "Ambrosio Olmos 1320",
    bedrooms: 3,
    bathrooms: 2,
    area: 210,
    description:
      "PH con patio, cochera fija y terraza propia. A estrenar, con excelente ubicación residencial.",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
];