# Sprint 6 — Responsive, UX, animaciones, SEO y polish

## Objetivo
Convertir la implementación en una demo comercial sólida, consistente, accesible, rápida y profesional, sin agregar nuevas funcionalidades de negocio.

## Implementado
- Componentes shadcn/ui agregados según necesidad concreta:
  - **Accordion** → sección FAQ en `/contacto`.
  - **Sheet** → filtros móviles en `/propiedades` (en escritorio el `SearchBar` queda inline; en móvil abre un panel inferior).
  - **Skeleton** → preparación de estados de carga futuros, demostrado en el showcase del design system.
  - **Carousel**: NO se agregó; se mantuvo la `PropertyGallery` existente (ya accesible con flechas + miniaturas + contador), por regla "no cambiar por cambiar".
- SEO: `index.html` actualizado (title/description, canonical, Open Graph, Twitter Cards, theme-color); `public/robots.txt` y `public/sitemap.xml`; hook ligero `usePageMeta` en `src/lib/seo.ts` aplicado a todas las páginas públicas.
- UX: componente `ScrollToTop` en `App.tsx` (reset de scroll al navegar).
- Accesibilidad: Accordion/Sheet aportan `aria-expanded`/`aria-controls` y navegación por teclado/foco; formularios mantienen labels, `aria-invalid` y errores accesibles; imágenes con `loading="lazy"` y `alt` descriptivo o `aria-hidden`.
- Footer actualizado a "Demo ilustrativa — contenido ficticio".

## Arquitectura / decisiones técnicas
- Dependencias Radix nuevas: `@radix-ui/react-accordion` y `@radix-ui/react-dialog` (necesarias para Accordion y Sheet).
- Los nuevos componentes shadcn se adaptaron al Design System NOVA (tokens, sombras y radios existentes).
- SEO sin dependencias nuevas: `usePageMeta` actualiza `<title>` y la meta description del documento al montar cada página.
- Sin optimizaciones prematuras: no se aplicó code-splitting, aunque Vite advierte que el bundle supera los 500KB (por `motion` y los componentes Radix, ambos necesarios).

## Archivos principales
- Componentes shadcn/ui: `src/components/ui/accordion.tsx`, `sheet.tsx`, `skeleton.tsx`
- SEO: `src/lib/seo.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`
- Datos: `src/data/faq.ts`
- Páginas modificadas: `src/pages/Contact/ContactPage.tsx` (FAQ), `src/pages/Properties/PropertiesPage.tsx` (Sheet de filtros), y todas las páginas públicas (se aplicó `usePageMeta`)
- `src/App.tsx` (ScrollToTop), `src/components/layout/Footer.tsx`
- Showcase: `src/pages/DesignSystem/DesignSystemPage.tsx` (sección Skeleton)

## Componentes / funcionalidades
- `Accordion`, `Sheet`, `Skeleton` (shadcn/ui adaptados al DS).
- FAQ en `/contacto` con preguntas ficticias coherentes con una inmobiliaria.
- Filtros móviles en `/propiedades` mediante `Sheet` (reutilizando `SearchBar`, sin lógica de filtrado real).
- SEO por página con `usePageMeta` (Home, Propiedades, Detalle con título dinámico, Comprar, Alquilar, Vender, Nosotros, Contacto).

## Validación
- `npm run lint`: terminó con 0 errores (2 warnings preexistentes).
- `npm run build`: terminó correctamente (aviso no bloqueante de chunk >500KB).
- Dev server: `/`, `/propiedades`, `/contacto`, `/robots.txt` y `/sitemap.xml` responden 200.

## Restricciones respetadas
- No se creó backend, PostgreSQL, Sequelize, Keycloak, administrador ni CRM. No se implementaron filtros complejos, API ni funcionalidades de negocio nuevas. No se agregaron componentes shadcn innecesarios (DataTable, Sidebar, Calendar, DatePicker quedan para la futura administración). No se introdujeron React Bits/Aceternity/Magic UI solo por estética.

## Resultado
Quedó una demo comercial consistente, accesible y con SEO básico completo; la web funciona correctamente en el rango 360–1440px sin overflows horizontales accidentales.

## Observaciones
- `node_modules` fue reemplazado externamente por una estructura **pnpm incompleta** (faltaban eslint/typescript/react): se reinstaló limpio con npm y se verificó que `package.json`/`package-lock.json` quedaron coherentes con los deps Radix añadidos.
- Se corrigió la ubicación de la sección FAQ en `ContactPage` (inicialmente quedó fuera del `return` con una llave extra).
- El aviso de chunk >500KB no es bloqueante; no se aplicó code-splitting para evitar optimización prematura.