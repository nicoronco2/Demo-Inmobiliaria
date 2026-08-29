# Sprint 3 — Landing / Home

## Objetivo
Construir la Home pública de NOVA reutilizando los componentes existentes del Design System y de la biblioteca inmobiliaria, navegable y visualmente coherente.

## Implementado
- Ruta `/` implementada bajo `PublicLayout` (Navbar + contenido + Footer).
- Secciones de la Home en orden:
  1. Navbar existente.
  2. Hero principal premium (imagen de arquitectura con gradiente oscuro, titular serif con acento itálico en `brand`, subtítulo, 2 CTAs y franja de confianza).
  3. `SearchBar` existente (sin filtros reales).
  4. Propiedades destacadas via `propertiesRepository.getFeatured()` + `PropertyGrid`.
  5. Sección editorial "Más que metros cuadrados" (imagen + texto + iconos de confianza).
  6. Servicios con `ServiceCard` + `data/services.ts` (Comprar, Alquilar, Vender, Invertir).
  7. Estadísticas con `Stats` + `data/stats.ts`.
  8. Zonas de Córdoba (sección visual/informativa con tarjeta local `ZoneCard`).
  9. Testimonios con `Testimonial` + `data/testimonials.ts`.
  10. CTA final con `CTA`.
  11. Footer existente.

## Arquitectura / decisiones técnicas
- La página obtiene las propiedades mediante `propertiesRepository` (nunca importa `data/properties.ts` directamente).
- `Hero` y `Editorial` son componentes locales de la página porque se usan una sola vez (no se crearon componentes genéricos innecesarios, según la pauta del sprint).
- `ZoneCard` es un componente presentacional local que recibe una `Zone` por props; los datos de zonas viven en `src/data/zones.ts`.
- Se reutilizaron `Section`, `SectionHeading`, `Container`, `Button`, `Card`, `Reveal` y las variantes de Motion existentes; animaciones sutiles de entrada (stagger) y hovers de elevación/zoom.

## Archivos principales
- `src/pages/Home/HomePage.tsx` (reconstruido por completo; reemplaza al placeholder del Sprint 0)
- `src/data/zones.ts` (nuevo)

## Componentes / funcionalidades
- `Hero`, `Editorial`, `ZoneCard` (locales de la página).
- Reutilización de `SearchBar`, `PropertyGrid`, `ServiceCard`, `Stats`, `Testimonial`, `CTA`, `Section`, `SectionHeading`, `Reveal`.

## Validación
- `npm run lint`: terminó con 0 errores (2 warnings preexistentes).
- `npm run build`: terminó correctamente. Se corrigió durante el desarrollo un problema de estructura del `HomePage.tsx` (inserción desplazada), reconstruyéndolo limpio.
- Dev server: `/` responde 200.

## Restricciones respetadas
- No se construyó `/propiedades` ni ficha de propiedad (Sprint 4), ni backend/base de datos/autenticación. No se implementaron filtros reales. No se adelantaron tareas del Sprint 4.

## Resultado
Quedó una landing completa, responsive y coherente con la identidad premium, sirviendo como puerta de entrada comercial de la demo.

## Observaciones
- `HomePage.tsx` se escribió por partes (el contenido superaba el límite por llamada); durante el armado se corrigió una inserción mal ubicada y se validó el archivo final completo.
- La Home conserva los links a `/propiedades`, `/vender`, `/nosotros` y `/design-system`; varias de esas rutas se completan en sprints posteriores.