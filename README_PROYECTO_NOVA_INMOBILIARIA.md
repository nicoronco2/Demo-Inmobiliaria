# NOVA Inmobiliaria — Documentación del Proyecto

## 1. Objetivo

NOVA Inmobiliaria es una demo de una solución web para una inmobiliaria ficticia, pensada principalmente como herramienta comercial para presentar a inmobiliarias reales de Córdoba.

El proyecto se desarrollará en dos grandes etapas:

1. **Landing / sitio web comercial**
2. **Sistema de gestión / administrador**

La primera etapa debe poder venderse por sí sola. La segunda se incorpora únicamente cuando un negocio manifieste interés en funcionalidades de gestión.

La arquitectura debe permitir evolucionar de la landing hacia un sistema completo sin tener que rehacer el frontend.

---

# 2. Estrategia del producto

## Etapa 1 — Landing

Objetivo:

> Crear una presencia digital profesional, moderna y confiable para una inmobiliaria.

La landing debe mostrar:

- propiedades
- servicios
- información institucional
- zonas
- contacto
- WhatsApp
- formularios
- llamados a la acción
- navegación responsive

No necesita backend ni base de datos inicialmente.

Las propiedades de la demo pueden almacenarse como datos locales en TypeScript.

## Etapa 2 — Gestión

Si una inmobiliaria quiere avanzar, se agrega:

- administrador
- login
- propiedades
- imágenes
- consultas
- clientes
- leads
- agentes
- visitas
- tareas
- seguimiento
- reportes
- automatizaciones

La segunda etapa debe mantener la misma aplicación frontend y comenzar a consumir una API REST.

---

# 3. Stack tecnológico actualizado

## Etapa 1 — Landing

### Frontend

- React
- Vite
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui
- Motion
- React Bits
- Aceternity UI
- Magic UI
- Lucide React
- React Hook Form
- Zod
- Axios

### Infraestructura

- Git
- GitHub
- Vercel

### Datos

Inicialmente:

- módulos `.ts`
- objetos tipados
- datos ficticios locales

No se incorpora todavía:

- PostgreSQL
- Sequelize
- backend
- Keycloak

Axios puede estar instalado desde esta etapa para mantener la estructura preparada, aunque no sea necesario utilizarlo mientras los datos sean locales.

---

# 4. Arquitectura frontend — Etapa 1

La organización debe respetar separación de responsabilidades.

Conceptualmente:

```text
Page / Component
       ↓
Repository
       ↓
Fuente de datos local
```

Cuando exista backend:

```text
Page / Component
       ↓
Repository
       ↓
Axios
       ↓
REST API
```

### Regla importante

Los componentes y páginas no deben realizar llamadas directas a Axios.

Los repositorios son la capa encargada de obtener/enviar datos.

Este patrón sigue el enfoque trabajado en Diseño de Sistemas: separación entre componentes/páginas, repositorios y acceso a la API.

---

# 5. Estructura frontend propuesta

```text
src/
├── components/
│   ├── ui/
│   ├── layout/
│   ├── property/
│   └── sections/
│
├── pages/
│   ├── Home/
│   ├── Properties/
│   ├── PropertyDetail/
│   ├── About/
│   ├── Contact/
│   └── Sell/
│
├── layouts/
│   ├── PublicLayout.tsx
│   └── AdminLayout.tsx
│
├── repositories/
│   ├── properties.repository.ts
│   ├── inquiries.repository.ts
│   └── ...
│
├── api/
│   └── axios.config.ts
│
├── data/
│   ├── properties.ts
│   ├── services.ts
│   └── testimonials.ts
│
├── types/
│   ├── property.ts
│   └── inquiry.ts
│
├── validations/
│   └── inquiry.schema.ts
│
├── animations/
│
├── lib/
│
├── App.tsx
├── main.tsx
└── index.css
```

No es obligatorio crear todas las carpetas desde el primer sprint. La estructura representa la dirección arquitectónica del proyecto.

---

# 6. Componentes presentacionales

Los componentes visuales deben ser independientes del origen de los datos.

Ejemplo:

```tsx
<PropertyCard property={property} />
```

`PropertyCard` no debe conocer:

- Axios
- REST
- PostgreSQL
- Sequelize
- autenticación

Solo debe recibir la información necesaria mediante props y encargarse de representarla.

Esto permite reutilizar los componentes tanto con datos locales como con datos obtenidos desde la API.

---

# 7. Sistema de componentes

Los componentes base deben ser reutilizables.

## UI base

- Button
- Input
- Textarea
- Badge
- Card
- Dialog
- Accordion
- Tabs
- IconButton

## Componentes propios

- Navbar
- Footer
- Container
- Section
- SectionHeading
- PropertyCard
- PropertyGrid
- PropertyBadge
- Price
- SearchBar
- ServiceCard
- Stats
- Testimonial
- CTA

Evitar duplicar estructuras y estilos.

---

# 8. Animaciones y estética

La identidad visual debe ser:

- premium
- elegante
- minimalista
- confiable
- inmobiliaria
- moderna

No debe parecer una demo tecnológica llena de efectos.

## Herramientas

### Motion

Usar para:

- entrada de elementos
- scroll reveal
- stagger
- hover
- transiciones
- navbar
- microinteracciones

### React Bits

Usar para componentes y efectos específicos que aporten valor visual.

### Aceternity UI / Magic UI

Usar como fuente de componentes visuales cuando encajen con el diseño.

### Regla

Priorizar:

> 80% diseño propio + 20% componentes/efectos externos.

No agregar animaciones solamente porque están disponibles.

También respetar `prefers-reduced-motion`.

---

# 9. Datos de propiedades

Durante la etapa de landing:

```text
src/data/properties.ts
```

Los datos deben representar entidades reales desde el punto de vista conceptual.

Ejemplo:

```ts
export type Property = {
  id: string
  slug: string
  title: string
  operation: "venta" | "alquiler"
  propertyType: "casa" | "departamento" | "local" | "terreno"
  price: number
  currency: "USD" | "ARS"
  location: string
  address: string
  bedrooms: number
  bathrooms: number
  area: number
  description: string
  images: string[]
  featured: boolean
}
```

La UI debe consumir este tipo y no depender de strings hardcodeados en cada componente.

---

# 10. Rutas públicas

La primera etapa debe contemplar:

```text
/
├── /propiedades
├── /propiedades/:slug
├── /comprar
├── /alquilar
├── /vender
├── /nosotros
└── /contacto
```

La navegación debe realizarse mediante React Router.

---

# 11. Etapa 2 — Backend

Cuando el negocio quiera gestión se incorpora un backend separado.

## Stack

- Node.js
- Express
- TypeScript
- Sequelize
- PostgreSQL
- Zod
- Swagger / OpenAPI

SQLite puede utilizarse para desarrollo o pruebas, mientras que PostgreSQL será la base prevista para producción.

---

# 12. Arquitectura backend

La arquitectura seguirá una separación por capas:

```text
Routes
   ↓
Controllers
   ↓
Services
   ↓
Repositories
   ↓
Sequelize
   ↓
PostgreSQL
```

## Responsabilidades

### Routes

Definen endpoints y vinculan rutas con controladores.

### Controllers

Reciben la petición HTTP y construyen la respuesta.

### Services

Contienen la lógica y reglas de negocio.

### Repositories

Contienen el acceso a datos.

Esta separación sigue directamente el modelo trabajado en Diseño de Sistemas.

No colocar lógica de negocio dentro de controllers ni acceso directo a base de datos fuera de repositories.

---

# 13. API REST

Ejemplo para propiedades:

```text
GET    /api/properties
GET    /api/properties/:id
POST   /api/properties
PATCH  /api/properties/:id
DELETE /api/properties/:id
```

Consultas:

```text
GET    /api/inquiries
GET    /api/inquiries/:id
POST   /api/inquiries
PATCH  /api/inquiries/:id
```

Más adelante:

```text
/api/clients
/api/leads
/api/agents
/api/appointments
/api/tasks
```

---

# 14. Envelope de respuestas

El backend utilizará una estructura uniforme:

```json
{
  "success": true,
  "message": "Propiedades obtenidas correctamente",
  "data": [],
  "meta": {
    "total": 6
  }
}
```

Los repositorios frontend deben encargarse de devolver a las páginas el dato útil, no el envelope completo.

Esto permite mantener una interfaz consistente entre frontend y backend.

---

# 15. Manejo de errores

Centralizar la interpretación de errores de API.

Ejemplo conceptual:

```text
API
 ↓
Repository
 ↓
Error handler
 ↓
UI
 ↓
Mensaje / Toast
```

Los componentes no deberían tener lógica repetida para interpretar distintos errores HTTP.

---

# 16. Estado en frontend

Cuando una pantalla consuma API debe contemplar como mínimo:

```text
datos
cargando
error
```

Patrón conceptual:

```ts
const [data, setData] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState<string | null>(null)
```

La implementación concreta puede evolucionar si el proyecto lo requiere, pero no introducir herramientas globales innecesarias.

---

# 17. Base de datos futura

Las principales entidades previstas son:

```text
Agency
User
Property
PropertyImage
Inquiry
Client
Lead
Agent
Appointment
Task
```

Inicialmente solo se necesita modelar conceptualmente:

```text
Property
PropertyImage
Inquiry
Agency
User
```

El resto se incorpora según necesidades reales del cliente.

---

# 18. Autenticación — Etapa 2

Para la administración se incorporará Keycloak.

Arquitectura:

```text
Frontend
   ↓
Keycloak
   ↓
JWT
   ↓
Frontend
   ↓
Authorization: Bearer <token>
   ↓
Backend
   ↓
Validación del token
```

Roles iniciales posibles:

```text
admin
agente
```

Keycloak será responsable de identidad, autenticación y roles.

El backend será responsable de validar los tokens antes de permitir operaciones protegidas.

Para producción no copiar decisiones puramente pedagógicas sin evaluarlas previamente.

---

# 19. Layouts

Mantener separación entre sitio público y administración.

```text
PublicLayout
├── Navbar
├── contenido
└── Footer
```

Y posteriormente:

```text
AdminLayout
├── Sidebar
├── Header
├── contenido
└── Footer
```

La administración debe existir como zona separada de la página pública.

---

# 20. Documentación de API

Cuando exista backend se debe incorporar Swagger/OpenAPI.

Ruta prevista:

```text
/api/docs
```

La documentación debe reflejar:

- endpoints
- métodos
- parámetros
- bodies
- respuestas
- errores
- autenticación

La API debe funcionar como contrato entre frontend y backend.

---

# 21. Imágenes

En la landing las imágenes pueden mantenerse dentro de `public/` durante la etapa de demo.

Cuando haya administración y propiedades reales:

- usar Cloudinary o almacenamiento compatible con S3
- guardar las URLs en PostgreSQL
- optimizar imágenes
- usar `loading` y tamaños apropiados

No almacenar archivos de imágenes directamente dentro de PostgreSQL.

---

# 22. SEO

La landing debe estar preparada para posicionamiento.

Incluir:

- title
- description
- Open Graph
- sitemap
- robots.txt
- URLs semánticas
- metadata por propiedad cuando corresponda

Ejemplo:

```text
/propiedades/departamento-2-dormitorios-nueva-cordoba
```

en lugar de:

```text
/property/123
```

---

# 23. Responsive y rendimiento

La web debe probarse como mínimo en:

```text
360px
390px
768px
1024px
1280px
1440px
```

Prioridades:

- mobile-first
- imágenes optimizadas
- evitar bundles innecesarios
- animaciones ligeras
- accesibilidad
- navegación por teclado
- `prefers-reduced-motion`

---

# 24. Git y trabajo en equipo

Ramas recomendadas:

```text
main
develop
feature/*
```

Ejemplos:

```text
feature/navbar
feature/hero
feature/property-card
feature/properties-page
```

Evitar trabajar directamente sobre `main`.

Cada cambio debería ser pequeño y entendible.

---

# 25. Roadmap

## Sprint 0 — Setup

- crear proyecto React + Vite
- TypeScript
- Tailwind
- shadcn/ui
- ESLint
- estructura inicial
- GitHub
- reglas del proyecto
- comprobar build

### Resultado

Proyecto ejecutando correctamente y listo para desarrollo.

---

## Sprint 1 — Design System

- colores
- tipografías
- espaciado
- tamaños
- botones
- cards
- containers
- headings
- navbar base
- footer base

### Resultado

Sistema visual consistente.

---

## Sprint 2 — Componentes inmobiliarios

- PropertyCard
- PropertyGrid
- PropertyBadge
- Price
- SearchBar
- ServiceCard
- Stats
- Testimonial
- CTA
- animaciones

### Resultado

Biblioteca reutilizable de componentes.

---

## Sprint 3 — Landing

Construir:

1. Navbar
2. Hero
3. Buscador
4. Propiedades destacadas
5. Sección editorial
6. Servicios
7. Estadísticas
8. Zonas
9. Testimonios
10. CTA
11. Footer

### Resultado

Landing completa.

---

## Sprint 4 — Propiedades

Crear:

```text
/propiedades
/propiedades/:slug
```

Con:

- listado
- filtros visuales
- detalle
- galería
- características
- CTA
- consulta

### Resultado

Demo inmobiliaria completa y navegable.

---

## Sprint 5 — Polish

- responsive
- SEO
- accesibilidad
- rendimiento
- imágenes
- animaciones
- errores
- navegación
- revisión visual

### Resultado

Versión lista para presentar a negocios.

---

# 26. Definition of Done

Un componente se considera terminado cuando:

```text
✓ Funciona
✓ Responsive
✓ TypeScript correcto
✓ Accesible
✓ Sin errores de consola
✓ Reutilizable
✓ Animación coherente
✓ No duplica lógica
✓ No rompe otras páginas
```

Antes de cerrar cada sprint:

```text
npm run lint
npm run build
```

y revisar la aplicación en desktop y mobile.

---

# 27. Principios arquitectónicos obligatorios

Estos principios deben mantenerse durante todo el proyecto:

1. Separación de responsabilidades.
2. Los componentes no acceden directamente a Axios.
3. Los repositorios encapsulan acceso a datos.
4. La lógica de negocio pertenece a Services.
5. El acceso a base de datos pertenece a Repositories.
6. Los Controllers manejan HTTP.
7. Los componentes presentacionales reciben datos por props.
8. Evitar duplicación.
9. Evitar sobreingeniería.
10. Construir primero lo que el negocio necesita.

---

# 28. Contexto de Diseño de Sistemas

Este proyecto debe utilizar la implementación como oportunidad para aplicar los conceptos vistos en la materia.

Conceptos principales a mantener:

- separación de responsabilidades
- arquitectura por capas
- frontend / backend
- API REST
- repositories
- services
- controllers
- rutas
- DTO / estructuras de datos cuando corresponda
- validaciones
- autenticación
- autorización por roles
- manejo de errores
- estado de interfaz
- contratos de API
- componentes presentacionales

La guía de la materia utiliza precisamente una separación frontend/backend con autenticación y una organización por capas en backend:

```text
Routes
→ Controllers
→ Services
→ Repositories
```

y en frontend:

```text
Components / Pages
→ Repositories
→ Axios
→ API
```

NOVA debe adaptar estos conceptos al stack elegido, sin copiar literalmente decisiones que solamente tengan sentido para el ejercicio académico.

---

# 29. Instrucciones para Cline

Antes de modificar código:

1. Leer este README completo.
2. Respetar la arquitectura definida.
3. No introducir una librería nueva sin justificarla.
4. No crear lógica duplicada.
5. Revisar si ya existe un componente reutilizable antes de crear otro.
6. Mantener TypeScript estricto.
7. No agregar backend/base de datos mientras el sprint sea exclusivamente de landing.
8. No implementar funcionalidades futuras antes de que formen parte del sprint.
9. Priorizar responsive y accesibilidad.
10. Mantener las animaciones sutiles y coherentes con una inmobiliaria premium.
11. Mantener la separación por capas indicada en este documento.
12. Cuando se incorpore backend, respetar:
   `routes → controllers → services → repositories → database`.
13. Cuando se incorpore API en frontend, respetar:
   `pages/components → repositories → Axios → API`.
14. Los componentes presentacionales no deben conocer detalles del backend.
15. Antes de finalizar cambios importantes ejecutar lint y build.

---

# 30. Objetivo final

La primera meta no es construir un sistema inmobiliario completo.

La primera meta es:

> **tener una landing profesional que podamos mostrar a una inmobiliaria real y utilizar como puerta de entrada comercial.**

La segunda meta es:

> **convertir esa misma aplicación en una plataforma de gestión cuando un cliente realmente lo necesite.**

La arquitectura debe permitir ambas cosas sin sobreingeniería ni duplicación innecesaria.
