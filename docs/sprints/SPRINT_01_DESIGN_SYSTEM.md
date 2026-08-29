# Sprint 1 — Design System

## Objetivo
Crear la base visual reutilizable de NOVA antes de desarrollar la landing: tokens de identidad, componentes base y globales, y una página showcase para visualizar el sistema.

## Implementado
- Identidad visual premium (inmobiliaria elegante, no estética de startup): paleta verde pino profundo, fondo marfil cálido y acento latón/dorado (`brand`).
- Tipografías: `Inter` (cuerpo) y `Fraunces` (display/serif) cargadas desde Google Fonts en `index.html`.
- Tokens reutilizables en variables CSS y Tailwind: colores (clear/dark), tipografías, escala de espaciado, border radius, sombras propias (`nova-soft`, `nova-card`, `nova-lift`), anchors de container y soporte de `prefers-reduced-motion`.
- Componentes base: `Button`, `Container`, `Section`, `SectionHeading`, `Card`, `Badge`.
- Componentes globales: `PublicLayout`, `Navbar` (sticky con blur, menú móvil animado), `Footer` responsive.
- Showcase interno del design system en `/design-system`.
- Animaciones simples reutilizables (fade/slide de entrada) con Motion.

## Arquitectura / decisiones técnicas
- Tokens centralizados en `src/index.css` (variables HSL) mapeados por `tailwind.config.js`, evitando estilos hardcodeados repetidos fuera del DS.
- Sistema de animaciones propio muy simple: `src/animations/variants.ts` y componente `Reveal` (presentacional, respeta `prefers-reduced-motion` vía `useReducedMotion`).
- No se introdujeron React Bits, Aceternity UI ni Magic UI: para esta etapa las animaciones simples de Motion cubren las necesidades sin sobrecarga.

## Archivos principales
- Config: `tailwind.config.js`, `index.html`, `src/index.css`
- Tokens/layout: `src/components/layout/Container.tsx`, `Section.tsx`, `SectionHeading.tsx`
- Globales: `src/components/layout/Navbar.tsx`, `Footer.tsx`, `src/layouts/PublicLayout.tsx`
- Base: `src/components/ui/button.tsx` (modificado), `card.tsx`, `badge.tsx`, `Reveal.tsx`
- Animaciones: `src/animations/variants.ts`
- Datos compartidos: `src/data/navigation.ts`
- Showcase: `src/pages/DesignSystem/DesignSystemPage.tsx`

## Componentes / funcionalidades
- `Button` con variantes NOVA (`default`, `brand`, `destructive`, `outline`, `secondary`, `ghost`, `link`), tamaños y soporte `asChild`.
- `Card` (+ Header/Title/Description/Content/Footer), `Badge` con variantes.
- `Container` (anchos default/narrow/wide), `Section` (ritmo vertical), `SectionHeading` (eyebrow + título serif + descripción).
- `Navbar`/`Footer` responsivos y `PublicLayout` con skip-link para accesibilidad.
- Página `/design-system` que visualiza colores, tipografías, headings, botones, cards, badges, spacing, radius, sombras, containers, navbar y footer.

## Validación
- `npm run lint`: terminó con 0 errores (solo 2 warnings `react-refresh` en `button.tsx`/`badge.tsx` por exportar variantes junto al componente; es el patrón estándar de shadcn).
- `npm run build`: terminó correctamente. Se corrigieron 2 errores TS (imports `cn` y `React` sin usar).
- Dev server: `/` y `/design-system` responden 200.

## Restricciones respetadas
- No se construyó la Home ni páginas de contenido (Sprint 3), ni backend/base de datos/autenticación. No se agregaron librerías nuevas.

## Resultado
Quedó una base visual consistente y reutilizable que permitió construir la landing y las páginas secundarias sin duplicar estilos.

## Observaciones
- Se mantuvo el patrón estándar de shadcn de exportar `buttonVariants`/`badgeVariants` junto al componente, que ESLint marca como warning de fast-refresh pero es inofensivo.
- El README menciona React Bits/Aceternity/Magic UI como stack; por decisión del Sprint 1 no se instalaron hasta que una sección concreta lo requiera (no se requería en este sprint).