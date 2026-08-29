# Sprint 5 — Páginas secundarias y conversión

## Objetivo
Completar las páginas públicas de NOVA y cerrar el recorrido comercial de la landing con las rutas `/comprar`, `/alquilar`, `/vender`, `/nosotros` y `/contacto`.

## Implementado
- `/comprar` y `/alquilar`: páginas orientadas a compra/alquiler con propuesta de valor, propiedades filtradas por operación (obtenidas via repository), `PropertyGrid`, CTA "ver todas" y CTA de contacto.
- `/vender`: hero, proceso en 4 pasos, beneficios, CTA destacado y formulario de tasación validado.
- `/nosotros`: presentación, propósito, cita, estadísticas, valores, forma de trabajo y equipo ficticio (contenido claramente de demo).
- `/contacto`: canales (teléfono, WhatsApp, email, ubicación), horarios y formulario de contacto validado.
- Formularios con **React Hook Form + Zod** y estado visual de éxito (sin envío real a API).

## Arquitectura / decisiones técnicas
- Arquitectura **Page → Repository → Data** mantenida: `ComprarPage`/`AlquilarPage` filtran vía `propertiesRepository.getAll().filter(...)`.
- Validaciones ubicadas en la capa `src/validations/` (independiente de la UI): `contactForm.ts` y `sellingForm.ts`.
- Componentes de formulario base reutilizables (`label`, `input`, `textarea`, `select`) y `FormField`/`FormError` en `src/components/form/` para evitar duplicar la estructura label+control+error.
- Datos de contacto centralizados en `src/data/contactInfo.ts`.
- `OperationListing` (componente compartido) evita duplicar el listado por operación entre `/comprar` y `/alquilar`.

## Archivos principales
- Validaciones: `src/validations/contactForm.ts`, `src/validations/sellingForm.ts`
- UI/base form: `src/components/ui/{label,input,textarea,select}.tsx`, `src/components/form/{FormField,FormError}.tsx`
- Datos: `src/data/contactInfo.ts`
- Páginas: `src/pages/Comprar/ComprarPage.tsx`, `src/pages/Alquilar/AlquilarPage.tsx`, `src/pages/Sell/{SellPage,SellingForm}.tsx`, `src/pages/About/AboutPage.tsx`, `src/pages/Contact/{ContactPage,ContactForm}.tsx`
- Compartido: `src/components/sections/OperationListing.tsx`
- Router: `src/App.tsx` (5 rutas nuevas)

## Componentes / funcionalidades
- `ContactForm` y `SellingForm`: validación por campo, `aria-invalid`, mensajes de error (`role="alert"`), estado `isSubmitting` y estado de éxito visual.
- `OperationListing`: listado presentacional por operación recibiendo propiedades por props.

## Validación
- `npm run lint`: terminó con 0 errores (2 warnings preexistentes). Se corrigieron 4 errores de interfaces vacías en los nuevos componentes UI usando `type` en lugar de `interface`.
- `npm run build`: terminó correctamente.
- Dev server: `/comprar`, `/alquilar`, `/vender`, `/nosotros`, `/contacto` responden 200.

## Restricciones respetadas
- Sin backend, PostgreSQL, Sequelize, Keycloak, administrador, CRM, envío real de formularios ni API. Sin librerías nuevas (RHF, Zod y resolvers ya estaban instalados desde Sprint 0). Se reutilizaron los componentes del DS.

## Resultado
Quedó completo el recorrido comercial de la landing con formularios validados y contenido institucional/de conversión, sin realizar envío real a backend.

## Observaciones
- La navegación desde Navbar/Footer ya apuntaba a estas rutas (`NAV_LINKS` del Sprint 1) y quedó funcional.
- Los testimonios, equipo y cifras son ficticios y están marcados como contenido de demo (no como datos de una inmobiliaria real).
- Se eliminó un `pnpm-lock.yaml` accidental detectado en la validación para mantener el proyecto con npm.