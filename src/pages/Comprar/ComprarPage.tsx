import { OperationListing } from "@/components/sections/OperationListing";
import { propertiesRepository } from "@/repositories/properties.repository";
import { usePageMeta } from "@/lib/seo";

/**
 * ComprarPage — Página orientada a quienes buscan comprar (Sprint 5).
 * Ruta /comprar. Obtiene propiedades en venta vía `propertiesRepository`.
 */
export function ComprarPage() {
  usePageMeta(
    "Comprar propiedad — NOVA Inmobiliaria",
    "Propiedades en venta en Córdoba: casas, departamentos, locales y terrenos con asesoramiento premium. Demo ilustrativa."
  );

  const saleProperties = propertiesRepository
    .getAll()
    .filter((property) => property.operation === "venta");

  return (
    <OperationListing
      eyebrow="Comprar"
      title="Encontrá la propiedad perfecta"
      description="Explorá casas, departamentos, locales y terrenos en venta en las mejores zonas de Córdoba. Nuestro equipo te acompaña en cada paso para que compres con confianza."
      properties={saleProperties}
      ctaTitle="¿No encontraste lo que buscabas?"
      ctaDescription="Contanos qué necesitás y te ayudamos a encontrar la propiedad ideal."
      ctaPrimaryLabel="Contar qué busco"
    />
  );
}