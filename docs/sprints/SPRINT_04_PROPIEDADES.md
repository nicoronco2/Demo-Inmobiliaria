# Sprint 4 — Listado y detalle de propiedades

## Objetivo
Crear el flujo público completo de consulta de propiedades: Home → `/propiedades` → `/propiedades/:slug`, manteniendo la arquitectura Page → Repository → Data.

## Implementado
- Página `/propiedades` con encabezado, descripción, `SearchBar` (visual, sin filtros reales), `PropertyGrid` con todas las propiedades del repository y estado de lista vacía.
- Página `/propiedades/:slug` con galería, operación, título, precio, ubicación, superficie, dormitorios, baños, descripción, características/amenities, CTA de consulta y navegación de vuelta.
- Galería presentacional local `PropertyGallery` con imagen principal (transición de Motion), miniaturas y navegación anterior/siguiente.
- Estado amigable de "propiedad no encontrada" para slugs inexistentes, con botón de regreso a `/propiedades`.
- Rutas agregadas en `App.tsx` bajo `PublicLayout`.

## Arquitectura / decisiones técnicas
- En `/propiedades`: `const properties = propertiesRepository.getAll();`.
- En el detalle: `const property = propertiesRepository.getBySlug(slug);` usando `useParams<{ slug: string }>()`.
- Ninguna página importa directamente `data/properties.ts`; el acceso pasa siempre por el repository.
- `PropertyCard` ya enlazaba a `/propiedades/:slug`, por lo que no se duplicó el diseño de la tarjeta.
- Las URLs son semánticas (slug de la propiedad).

## Archivos principales
- `src/pages/Properties/PropertiesPage.tsx` (nuevo)
- `src/pages/PropertyDetail/PropertyDetailPage.tsx` (nuevo; incluye `PropertyGallery` y `buildAmenities`)
- `src/App.tsx` (modificado: rutas `/propiedades` y `/propiedades/:slug`)

## Componentes / funcionalidades
- `PropertiesPage`: encabezado + `SearchBar` + `PropertyGrid` + estado vacío.
- `PropertyGallery`: galería responsive con transición de imagen (Motion) y accesibilidad básica.
- `PropertyDetailPage`: CTA "Consultar por WhatsApp" (enlace `wa.me`) y "Solicitar visita" (mailto), sin envío real.
- Los amenities se derivan del modelo de datos existente (no requirieron modificar `data/properties.ts`).

## Validación
- `npm run lint`: terminó con 0 errores (2 warnings preexistentes).
- `npm run build`: terminó correctamente.
- Dev server: `/propiedades` y `/propiedades/casa-3-dormitorios-recodo-la-country` responden 200.

## Restricciones respetadas
- No se creó backend, PostgreSQL, Sequelize, Keycloak, administrador ni CRM. No se implementaron filtros reales ni API. No se adelantaron tareas del Sprint 5.
- No se modificó `data/properties.ts` (los datos actuales bastaban para el detalle).

## Resultado
Quedó completo el recorrido de consulta de propiedades (Home → listado → detalle), responsive y sin pantallas en blanco ante slugs inexistentes.

## Observaciones
- Durante la validación se detectaron artefactos accidentales de pnpm en el working tree (`package-lock.json` borrado y archivos `pnpm-*.yaml`); se restauró el lock de npm y se eliminaron los archivos de pnpm para dejar el proyecto coherente con npm.
- La galería se implementó a mano (accesible con flechas + miniaturas + contador); en el Sprint 6 se evaluó mantenerla en lugar de reemplazarla por un Carousel de shadcn.