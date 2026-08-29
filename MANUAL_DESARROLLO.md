# Manual de Desarrollo — NOVA Inmobiliaria

Manual operativo para cualquier integrante del equipo que trabaje con el proyecto NOVA.
Está pensado para personas que ya conocen los conceptos básicos de Git, Node.js y desarrollo web.

> **Package manager oficial: `npm`.**
> No usar `pnpm`, `yarn` ni otros package managers. El proyecto está configurado y versionado con `npm` (`package.json` + `package-lock.json`). Mezclar package managers rompe el lockfile y produce estados inconsistentes.

---

## 1. Requisitos

Verificá que tenés instalado lo siguiente antes de empezar:

| Requisito | Detalle |
| --- | --- |
| **Node.js** | Vite 6 (las dependencias del proyecto usan `vite ^6.0.7`) requiere Node 18.18+ / 20+ / 22+. El entorno de desarrollo actual usa **Node 24**; se recomienda una versión LTS reciente compatible. |
| **npm** | Viene incluido con Node.js. El entorno actual usa npm **11**. |
| **Git** | Se usa para clonar y colaborar. El entorno actual usa Git **2.53**. |
| **Editor** | Recomendado: **VS Code** (con soporte nativo de TypeScript y ESLint). |

Otras consideraciones según el estado actual del proyecto:

- **No hay variables de entorno obligatorias.** El proyecto funciona sin `.env`. La única variable contemplada es `VITE_API_URL` (la instancia de Axios en `src/api/axios.config.ts` usa `import.meta.env.VITE_API_URL ?? "/api"`), que solo es relevante cuando exista una API. Los datos actuales son locales (módulos `.ts` en `src/data/`).
- **Un solo dev server:** cualquiera de las rutas del sitio se sirve desde el mismo dev server de Vite (no requiere backend).

---

## 2. Clonar el proyecto

Cloná el repositorio y entrá a la carpeta:

```bash
git clone https://github.com/nicoronco2/Demo-Inmobiliaria.git
cd Demo-Inmobiliaria
```

Verificá que quedaste en la rama correcta:

```bash
git branch
# * main
```

---

## 3. Actualizar el proyecto (git pull)

Antes de trabajar con una feature, asegurate de estar en `develop` y traé los últimos cambios del remoto:

```bash
git checkout develop
git pull origin develop
```

> **Recomendación:** es buena práctica hacer `git pull` antes de crear una rama nueva y antes de subir cambios, para evitar conflictos y trabajar sobre la versión más reciente.

---

## 4. Instalar dependencias

Con `npm` (package manager oficial):

```bash
npm install
```

Esto instala todo lo que figura en `package.json` y genera/actualiza el `package-lock.json`.

Para un entorno reproducible (por ejemplo CI o una instalación limpia en otra máquina) se recomienda instalar en base al lockfile:

```bash
npm ci
```

> `npm ci` borra `node_modules` y reinstala exactamente lo que está bloqueado en `package-lock.json`. Úsalo en vez de `npm install` cuando quieras una instalación determinista.

**Advertencia:** nunca mezclar con `pnpm install` / `yarn`. Si detectás archivos como `pnpm-lock.yaml` o `pnpm-workspace.yaml`, eliminarlos y quedarte con `package-lock.json` de npm.

---

## 5. Levantar la aplicación

### Desarrollo (con hot reload)

```bash
npm run dev
```

Vite levanta el dev server (por defecto en `http://localhost:5173`). Las rutas públicas son:

- `/` — Home
- `/propiedades` — listado de propiedades
- `/propiedades/:slug` — detalle de una propiedad (ej.: `/propiedades/casa-3-dormitorios-recodo-la-country`)
- `/comprar`, `/alquilar`, `/vender`, `/nosotros`, `/contacto` — páginas secundarias
- `/design-system` — showcase interno del design system

### Build de producción

```bash
npm run build
```

Ejecuta `tsc -b && vite build` (chequeo de tipos TypeScript + build de Vite) y genera la carpeta `dist/`. Es la verificación obligatoria antes de cerrar cualquier cambio.

### Previsualizar el build

```bash
npm run preview
```

Sirve el contenido de `dist/` localmente para probar la compilación de producción.

### Lint

```bash
npm run lint
```

Corre ESLint sobre el proyecto. Es la otra verificación obligatoria antes de cerrar cambios.

---

## 6. Trabajar en una rama

Convención de ramas del proyecto (definida en `README_PROYECTO_NOVA_INMOBILIARIA.md`, Sección 24):

```text
main       → versión estable / producción
develop    → rama de integración
feature/*  → desarrollo de funcionalidades o tareas
```

Reglas del flujo:

- **No trabajar directamente sobre `main`.** `main` se reserva para versiones estables publicadas.
- Las ramas `feature/*` se crean **desde `develop`**.
- Los Pull Requests de las features apuntan **a `develop`**.
- `develop` se integra a `main` cuando corresponda publicar una versión estable.

Cada cambio debería ser pequeño y entendible.

Ejemplos de ramas usadas en este proyecto:

```text
feature/navbar
feature/hero
feature/property-card
feature/properties-page
```

Para crear una rama nueva a partir de `develop`:

```bash
git checkout develop
git pull origin develop
git checkout -b feature/mi-cambio
```

Verificá en qué rama estás con `git branch`. Trabajá solo sobre tu rama.

---

## 7. Subir cambios

### 7.1 Revisá qué cambió

```bash
git status
git diff
```

### 7.2 Agregá y commité tus cambios

```bash
git add .
git commit -m "feature: descripción breve y entendible del cambio"
```

Mensajes de commit claros y descriptivos (ej.: `feature: agregar pagina de contacto con formulario validado`).

### 7.3 Subí la rama al remoto

```bash
git push -u origin feature/mi-cambio
```

`-u` vincula tu rama local con la remota la primera vez. En siguientes pushes alcanza con `git push`.

### 7.4 Crear el Pull Request

En GitHub, abrí un Pull Request desde `feature/mi-cambio` hacia `develop`, describiendo el cambio y mencionando la validación local (lint + build). `develop` se integrará a `main` recién cuando corresponda publicar una versión estable.

---

## 8. Flujo de trabajo recomendado (resumen)

```bash
# 1. Posicionarte en develop y traer los últimos cambios
git checkout develop
git pull origin develop

# 2. Crear rama de feature
git checkout -b feature/mi-cambio

# 3. Desarrollar
npm run dev

# 4. Verificar antes de cerrar
npm run lint
npm run build

# 5. Revisar y commitear
git status
git add .
git commit -m "feat: descripcion del cambio"
git push -u origin feature/mi-cambio

# 6. Abrir Pull Request hacia develop en GitHub
```

---

## 9. Notas y advertencias

- **Package manager:** solo `npm`. No usar `pnpm`/`yarn` (el manual y el proyecto asumen npm).
- **Flujo de ramas:** las features se crean desde `develop` y sus Pull Requests apuntan a `develop`; no trabajar directo sobre `main`.
- **No modificar `README_PROYECTO_NOVA_INMOBILIARIA.md`** salvo tarea explícita: es la fuente de verdad del proyecto.
- **Antes de cerrar un sprint/cambio:** siempre `npm run lint` y `npm run build`, y revisar la app en desktop y mobile (resoluciones 360–1440px).
- **Datos:** la landing usa datos ficticios locales (`src/data/`). No presentar esos datos como información real de una inmobiliaria existente.
- **Documentación por sprint:** el detalle de cada sprint está en `docs/sprints/` (archivos `SPRINT_XX_*.md`), que describen lo realmente implementado en cada etapa.
- **Mantené los cambios pequeños y entendibles**, siguiendo la arquitectura por capas del README (Page → Repository → Data → Props → Componentes presentacionales).