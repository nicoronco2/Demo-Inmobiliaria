# Sprint 0 — Setup técnico

## Objetivo
Preparar la base técnica del proyecto, sin desarrollar todavía la landing: crear el proyecto React + Vite + TypeScript, configurar el tooling y dejar la estructura base de carpetas.

## Implementado
- Proyecto creado manualmente (fuera del scaffold interactivo de Vite, porque el directorio ya contenía el README y `.git`), de forma determinista.
- Stack instalado: React 18, Vite 6, TypeScript 5.7, React Router 6, Tailwind CSS 3, Motion, Lucide React, React Hook Form, Zod, Axios.
- Tooling: ESLint (flat config con typescript-eslint, react-hooks, react-refresh), TypeScript estricto.
- shadcn/ui preparado: `components.json`, `src/lib/utils.ts` (helper `cn`) y `src/components/ui/button.tsx`.
- Tailwind configurado con token inicial (`tailwind.config.js`, `postcss.config.js`).
- Alias `@` → `./src` en `vite.config.ts` y `tsconfig`.
- App/Layout mínimo para comprobar que el proyecto funciona.
- Repositorio Git listo (origen remoto ya configurado) y commit inicial.

## Arquitectura / decisiones técnicas
- Estructura base respetando la separación por capas del README: `components/` (`ui`, `layout`, `property`, `sections`), `pages/`, `layouts/`, `repositories/`, `api/`, `data/`, `types/`, `validations/`, `animations/`, `lib/`.
- `api/axios.config.ts` centraliza la instancia de Axios preparada para una futura REST API (sin usarse todavía, ya que los datos son locales).
- TypeScript estricto activado desde el inicio (`strict`, `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`).

## Archivos principales
- `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- `tailwind.config.js`, `postcss.config.js`, `eslint.config.js`
- `components.json`, `.gitignore`, `index.html`
- `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`
- `src/lib/utils.ts`, `src/components/ui/button.tsx`, `src/api/axios.config.ts`
- `src/layouts/PublicLayout.tsx`, `src/pages/Home/HomePage.tsx` (placeholder)

## Componentes / funcionalidades
- `Button` base de shadcn/ui.
- Layout público mínimo con `Outlet` de React Router.

## Validación
- `npm run lint`: terminó correctamente (0 errores).
- `npm run build`: terminó correctamente. Se corrigió un error de tipos en `vite.config.ts` agregando `@types/node` y referenciándolo en `tsconfig.node.json`.
- Se verificó que `/` renderiza la SPA.

## Restricciones respetadas
- Sin backend, sin base de datos, sin Keycloak, sin landing ni funcionalidades de otros sprints.

## Resultado
Quedó lista la base técnica reutilizable sobre la que se construyeron todos los sprints posteriores (Sprint 1 → Design System).

## Observaciones
- El proyecto se inició con npm (package.json/package-lock.json). En este Sprint 0 se evitó el scaffold interactivo de Vite porque el directorio no estaba vacío.
- Toda la etapa de landing opera con datos locales en TypeScript; Axios queda instalado solo para mantener la estructura preparada (ver README, Sección 3).