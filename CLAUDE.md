# TecniCopa — Guía del proyecto para Claude Code

## Descripción del proyecto

**TecniCopa** es el sitio web de una empresa de soporte técnico de computadores a domicilio ubicada en Copacabana, Antioquia, Colombia. Es una landing page informativa cuyo **objetivo principal es convertir visitantes en clientes que escriban por WhatsApp**.

El sitio debe transmitir confianza, profesionalismo y cercanía — sin jerga técnica innecesaria.

---

## Stack técnico

| Tecnología | Versión | Notas |
|---|---|---|
| Astro | ^6.1.5 | Framework principal |
| TypeScript | strict | `astro/tsconfigs/strict` en tsconfig.json |
| Tailwind CSS | ^4.2.2 | Vía `@tailwindcss/vite` — sin tailwind.config.js |
| @astrojs/sitemap | latest | Genera sitemap automático |
| ESLint | latest | Con `eslint-plugin-astro` y soporte TypeScript |
| Prettier | latest | Con `prettier-plugin-astro` |

---

## Estructura de carpetas

```
tecnicopa-web/
├── public/
│   ├── favicon.ico          # Favicon actual (reemplazar con uno de marca)
│   ├── favicon.svg          # SVG favicon
│   ├── logo.png             # Logo actual (convertir a .webp para producción)
│   └── robots.txt           # Directivas para crawlers
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navegación fija — NO modificar sin necesidad
│   │   ├── Hero.astro       # Sección principal — NO modificar sin necesidad
│   │   ├── Services.astro   # id="servicios"
│   │   ├── WhyUs.astro      # id="por-que"
│   │   ├── Pricing.astro    # id="precios"
│   │   ├── About.astro      # id="nosotros"
│   │   ├── Testimonials.astro # id="testimonios"
│   │   ├── Contact.astro    # id="contacto"
│   │   ├── Footer.astro     # Pie de página
│   │   ├── SEO.astro        # Componente SEO reutilizable (usado en Layout)
│   │   └── WhatsAppFloat.astro # Botón flotante WhatsApp (siempre visible)
│   ├── layouts/
│   │   └── Layout.astro     # Layout base con SEO, Schema.org, fonts
│   ├── pages/
│   │   └── index.astro      # Página principal
│   └── styles/
│       └── global.css       # @import tailwindcss + @theme con colores de marca
├── astro.config.mjs         # Config de Astro (sitemap, vite+tailwind)
├── tsconfig.json            # TypeScript strict
├── eslint.config.js         # ESLint con plugin Astro y TypeScript
├── .prettierrc              # Prettier con plugin Astro
└── CLAUDE.md                # Este archivo
```

---

## Convenciones de código

### General
- **TypeScript strict** en todos los archivos `.astro` y `.ts`
- Componentes **Astro** para todo lo estático
- **React (islas)** SOLO cuando se necesite interactividad que Astro no puede manejar con `<script>` vanilla
- Mobile-first siempre — primero estilos base, luego `md:`, `lg:`
- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, etc.
- **Nunca** usar emojis en código — solo en contenido visible si aplica al diseño

### Tailwind CSS v4
- **NO crear** `tailwind.config.js` ni `tailwind.config.mjs` — Tailwind v4 no los usa
- Los tokens de diseño se definen en `src/styles/global.css` bajo `@theme`
- Usar las clases de color de marca directamente: `bg-tecni-purple`, `text-tecni-dark`, etc.
- Configuración de Tailwind via `@tailwindcss/vite` plugin en `astro.config.mjs`

### Accesibilidad
- `alt` descriptivo en todas las imágenes (no dejar vacío salvo imágenes decorativas con `alt=""`)
- `aria-label` en botones que solo tengan iconos
- Contraste mínimo WCAG AA (4.5:1 texto normal, 3:1 texto grande)
- Navegación por teclado funcional

### Imágenes
- Logo y fotos: convertir a `.webp` para producción (mejor rendimiento)
- `loading="lazy"` en imágenes que no estén above the fold
- Imágenes above the fold: no agregar `loading="lazy"` (evitar LCP penalizado)

---

## Paleta de colores

| Nombre | Clase Tailwind | Hex | Uso |
|---|---|---|---|
| Morado TecniCopa | `tecni-purple` | `#534AB7` | Primario, CTAs, enlaces activos |
| Gris oscuro | `tecni-dark` | `#2C2C2A` | Texto principal |
| Lavanda suave | `tecni-lavender` | `#EEEDFE` | Fondos suaves, badges |
| Morado claro | `tecni-lilac` | `#CECBF6` | Bordes, acentos secundarios |
| Blanco | `white` | `#FFFFFF` | Fondos limpios |

Definidos en `src/styles/global.css`:
```css
@theme {
  --color-tecni-purple: #534AB7;
  --color-tecni-dark: #2C2C2A;
  --color-tecni-lavender: #EEEDFE;
  --color-tecni-lilac: #CECBF6;
}
```

---

## Tipografía

- **Familia**: Inter (Google Fonts)
- **Pesos cargados**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Carga**: `display=swap` con `preconnect` en el Layout
- Títulos: `font-bold` (700)
- Contenido y UI: `font-normal` (400) o `font-medium` (500)

---

## Identidad de marca

- **Nombre**: TecniCopa (siempre T y C mayúsculas — nunca "Tecnicopa" o "tecnicopa")
- **Slogan**: "Soporte integral, soluciones reales."
- **Voz**: Cercana pero profesional. Directa. Sin jerga corporativa.
  - Correcto: "¿Tu computador no enciende? Escríbenos y lo diagnosticamos gratis."
  - Incorrecto: "Implementamos soluciones tecnológicas de vanguardia para su empresa."
- **WhatsApp (CTA principal)**: `https://wa.me/573243638746?text=Hola%2C%20quiero%20agendar%20un%20servicio`
- **Instagram**: @tecnicopa — `https://instagram.com/tecnicopa`
- **Correo**: contacto@tecnicopa.com
- **Ubicación**: Copacabana, Antioquia, Colombia

---

## Servicios (Fase 1)

1. Mantenimiento preventivo y correctivo
2. Formateo e instalación de sistema operativo
3. Eliminación de virus y malware
4. Soporte remoto

---

## Diferenciadores clave

- Garantía escrita en todos los servicios
- Factura electrónica
- Seguimiento post-servicio (llamada o mensaje a los 7 días)
- Identidad visual profesional
- Contenido educativo gratuito

---

## SEO

### Reglas generales
- `lang="es"` en el `<html>` siempre
- Title format: `[Página] | TecniCopa — Soporte Técnico en Copacabana`
- Meta description única por página, entre 150-160 caracteres
- Canonical URL en todas las páginas
- Open Graph completo (og:title, og:description, og:image, og:url, og:type, og:locale=es_CO)
- Twitter card: `summary_large_image`
- Schema.org `LocalBusiness` en JSON-LD en el Layout (ya configurado)

### Schema.org LocalBusiness
```json
{
  "@type": "LocalBusiness",
  "name": "TecniCopa",
  "telephone": "+573243638746",
  "url": "https://tecnicopa.com",
  "areaServed": ["Copacabana", "Girardota", "Bello"],
  "priceRange": "$",
  "sameAs": ["https://instagram.com/tecnicopa"]
}
```

### Favicon
- Reemplazar `public/favicon.ico` y `public/favicon.svg` con versión de marca definitiva
- El SVG debería ser el isotipo morado (#534AB7) sobre fondo blanco o transparente

---

## Comandos del proyecto

```bash
npm run dev        # Servidor de desarrollo en localhost:4321
npm run build      # Build de producción (verifica errores TypeScript y Astro)
npm run preview    # Preview del build de producción
npm run check      # Verificación de tipos Astro + TypeScript
npm run lint       # Linting con ESLint
npm run format     # Formateo con Prettier
```

---

## Deploy

- **Plataforma**: Vercel (deploy automático)
- **Flujo**: push a `main` → Vercel detecta cambio → build automático → deploy
- **Dominio**: tecnicopa.com (DNS en Cloudflare apuntando a Vercel)
- **Variable de entorno**: no se requieren variables de entorno para el sitio base

Antes de hacer push a `main`, verificar:
1. `npm run build` pasa sin errores
2. `npm run check` pasa sin errores de tipos
3. El sitio se ve bien en mobile y desktop

---

## Lo que NO hacer

- NO crear `tailwind.config.js` o `tailwind.config.mjs`
- NO usar React para componentes estáticos (Astro es suficiente)
- NO agregar emojis en el código fuente (solo en contenido visible si el diseño lo requiere)
- NO modificar `Header.astro` y `Hero.astro` sin necesidad urgente
- NO hardcodear colores hex — usar siempre las clases de marca de Tailwind
- NO olvidar `alt` en imágenes ni `aria-label` en botones con solo iconos
