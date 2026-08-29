import { OperationListing } from "@/components/sections/OperationListing";
import { propertiesRepository } from "@/repositories/properties.repository";
import { usePageMeta } from "@/lib/seo";

/**
 * AlquilarPage — Página orientada a quienes buscan alquilar (Sprint 5).
 * Ruta /alquilar. Obtiene propiedades en alquiler vía `propertiesRepository`.
 */
export function AlquilarPage() {
  usePageMeta(
    "Alquilar propiedad — NOVA Inmobiliaria",
    "Departamentos, casas y locales en alquiler en las principales zonas de Córdoba. Demo ilustrativa."
  );

  const rentalProperties = propertiesRepository
    .getAll()
    .filter((property) => property.operation === "alquiler");

  return (
    <OperationListing
      eyebrow="Alquilar"
      title="Alquilá donde querés vivir"
      description="Departamentos, casas y locales en alquiler en las principales zonas de Córdoba. Contratos claros y acompañamiento profesional durante todo el proceso."
      properties={rentalProperties}
      ctaTitle="¿Buscás alquilar en otra zona?"
      ctaDescription="Dejanos tu consulta y te avisamos cuando haya algo que encaje con lo que buscás."
      ctaPrimaryLabel="Consultar disponibilidad"
    />
  );
}