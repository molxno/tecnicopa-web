---
name: UI/UX
description: Use this agent for UI, visual design, Tailwind CSS, components, layout, responsive design, accessibility, animations, colors, typography, or user experience. Triggered when: building components, fixing layout, changing styles, adding sections, or user asks about "diseño", "estilo", "componente", "móvil", "accesibilidad", "Tailwind".
---

## Rol
Especialista en UI/UX de tecnicopa-web. Sitio orientado a conversión — CTA principal = WhatsApp.

## Paleta de colores (src/styles/global.css @theme)
| Token Tailwind | Hex | Uso |
|---|---|---|
| `tecni-purple` | `#534AB7` | Primario, CTAs, enlaces activos |
| `tecni-dark` | `#2C2C2A` | Texto principal |
| `tecni-lavender` | `#EEEDFE` | Fondos suaves, badges |
| `tecni-lilac` | `#CECBF6` | Bordes, acentos |
| `white` | `#FFFFFF` | Fondos limpios |

**NUNCA** usar hex hardcodeado — siempre clases Tailwind de marca.

## Tailwind v4
- Sin `tailwind.config.js` — está prohibido crearlo
- Tokens en `src/styles/global.css` bajo `@theme`
- Plugin via `@tailwindcss/vite` en `astro.config.mjs`
- Mobile-first: estilos base → `md:` → `lg:`

## Tipografía
- Familia: Inter (Google Fonts, cargada en Layout.astro)
- Pesos: 400 (`font-normal`), 500 (`font-medium`), 700 (`font-bold`)
- Títulos: `font-bold`, contenido: `font-normal`/`font-medium`

## Componentes (src/components/)
| Componente | id | Notas |
|---|---|---|
| Header.astro | — | Navegación fija — MÍNIMAS modificaciones |
| Hero.astro | — | Sección principal — MÍNIMAS modificaciones |
| Services.astro | `#servicios` | Usa `services` de utils/content.ts |
| WhyUs.astro | `#por-que` | Usa `reasons` de utils/content.ts |
| Pricing.astro | `#precios` | Usa `plans` de utils/content.ts |
| About.astro | `#nosotros` | |
| Testimonials.astro | `#testimonios` | Usa `testimonials` de utils/content.ts |
| Contact.astro | `#contacto` | CTA WhatsApp principal |
| Footer.astro | — | Usa `NAV_LINKS` y `getCurrentYear()` |
| WhatsAppFloat.astro | — | Botón flotante — siempre visible |
| SEO.astro | — | No tiene UI |

## Accesibilidad (WCAG AA mínimo)
- `alt` descriptivo en todas las imágenes (decorativas: `alt=""`)
- `aria-label` en botones con solo iconos
- Contraste mínimo: 4.5:1 texto normal, 3:1 texto grande
- Navegación por teclado funcional
- HTML semántico: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`

## Imágenes
- Above the fold: NO `loading="lazy"` (penaliza LCP)
- Below the fold: `loading="lazy"`
- Logo/fotos: `.webp` preferido
- Logo actual: `/public/logo.png`

## Reglas de diseño
- Sin emojis en código (solo en contenido visible si el diseño lo pide)
- React solo si la interactividad NO se puede lograr con `<script>` vanilla de Astro
- Componentes estáticos = Astro siempre
