# Sprint 2 — Componentes inmobiliarios

## Objetivo
Crear la biblioteca de componentes específicos del dominio inmobiliario y definir el modelo de datos local que utilizará la landing.

## Implementado
- Modelo de propiedad tipado (`Property`) con sus derivados (`PropertyOperation`, `PropertyType`, `PropertyCurrency`).
- Datos ficticios realistas de propiedades de Córdoba.
- Repository que abstrae el acceso a los datos locales.
- Componentes presentacionales del dominio: `PropertyCard`, `PropertyGrid`, `PropertyBadge`, `Price`, `SearchBar`, `ServiceCard`, `Stats`, `Testimonial`, `CTA`.
- Ampliación del showcase `/design-system` para visualizar todos los componentes inmobiliarios.

## Arquitectura / decisiones técnicas
- Respeto estricto de la capa **Page → Repository → Data → Props → Presentational Components**: las páginas usan el repository y los componentes presentacionales reciben datos por props; ninguno importa `data/` directamente.
- `properties.repository.ts` expone `getAll()`, `getFeatured()` y `getBySlug()`. Cuando exista backend, esta capa pasará a consumir la API sin cambiar su interfaz.
- `PropertyCard` recibe una `Property` por props y no conoce repositorios, Axios ni datos.
- Se evitó duplicar lógica: `Price` centraliza el formateo con `Intl`, `PropertyBadge` centraliza el mapeo operación → etiqueta.

## Archivos principales
- Dominio/datos: `src/types/property.ts`, `src/data/properties.ts`, `src/repositories/properties.repository.ts`
- Datos auxiliares: `src/data/services.ts`, `src/data/stats.ts`, `src/data/testimonials.ts`
- Componentes property: `src/components/property/PropertyCard.tsx`, `PropertyGrid.tsx`, `PropertyBadge.tsx`, `Price.tsx`, `SearchBar.tsx`
- Componentes sections: `src/components/sections/ServiceCard.tsx`, `Stats.tsx`, `Testimonial.tsx`, `CTA.tsx`
- Showcase: `src/pages/DesignSystem/PropertyShowcase.tsx` + integración en `DesignSystemPage.tsx`

## Componentes / funcionalidades
- `PropertyCard`: imagen (con fallback de gradiente), operación, título, precio, ubicación, dormitorios/baños/superficie y CTA; hover elegante (elevación + zoom sutil).
- `PropertyGrid`: grilla responsive 1/2/3 columnas, con `limit` opcional.
- `PropertyBadge`: insignia Venta/Alquiler. `Price`: precio + moneda.
- `SearchBar`: formulario visual (operación, tipo, ubicación, rango de precio) sin lógica real de filtros.
- `ServiceCard`, `Stats`, `Testimonial`, `CTA`: presentacionales, reciben datos por props.

## Validación
- `npm run lint`: terminó con 0 errores (2 warnings preexistentes).
- `npm run build`: terminó correctamente.
- `/design-system` responde 200 en dev server.

## Restricciones respetadas
- No se construyó Home, `/propiedades` ni páginas de contenido (Sprints 3 y 4). Sin backend, base de datos, autenticación ni filtros reales. Sin librerías nuevas.
- Los componentes son presentacionales e independientes de los datos.

## Resultado
Se dispuso de la biblioteca de componentes inmobiliarios y del modelo de datos local necesarios para construir la Home y el listado/detalle de propiedades sin duplicar diseño.

## Observaciones
- Las imágenes de las propiedades son URLs de Unsplash (demo); `PropertyCard` incluye un gradiente de fallback para verse bien sin conexión.
- Los testimonios, estadísticas y servicios son datos ficticios de demo.