/**
 * Zonas de Córdoba de la demo NOVA.
 * Sección informativa/visual de la landing. Las imágenes son referencias de
 * demo (no corresponden literalmente a cada barrio). La página las importa y
 * las entrega por props a su sección local.
 */
export interface Zone {
  id: string;
  name: string;
  description: string;
  propertiesCount: string;
  image: string;
}

export const zones: Zone[] = [
  {
    id: "zone-nueva-cordoba",
    name: "Nueva Córdoba",
    description:
      "Vida universitaria, cafés y departamentos modernos en el corazón de la ciudad.",
    propertiesCount: "24 propiedades",
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "zone-centro",
    name: "Centro",
    description:
      "El polo comercial y de oficinas por excelencia, con locales y unidades premium.",
    propertiesCount: "18 propiedades",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "zone-la-country",
    name: "La Country",
    description:
      "Caserones con parque, golf y la vida residencial más exclusiva de Córdoba.",
    propertiesCount: "12 propiedades",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "zone-valle-escondido",
    name: "Valle Escondido",
    description:
      "Condominios cerrados con amenities y amplios espacios verdes para la familia.",
    propertiesCount: "15 propiedades",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "zone-general-paz",
    name: "General Paz",
    description:
      "Barrio residencial arbolado con PH y casas de época a pasos del centro.",
    propertiesCount: "11 propiedades",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80",
  },
];