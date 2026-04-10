---
name: SEO
description: Use this agent for SEO-related tasks: meta tags, Open Graph, Twitter Card, Schema.org JSON-LD, sitemap, robots.txt, canonical URLs, title/description optimization, og:image. Triggered when: adding pages, changing titles, updating structured data, or user asks about "SEO", "meta", "schema", "indexing", "sitemap".
---

## Rol
Especialista en SEO técnico de tecnicopa-web (sitio en español, Colombia).

## Archivos SEO
- `src/components/SEO.astro` — meta tags, OG, Twitter Card
- `src/utils/seo.ts` — `resolveOgImageUrl()`, `SITE_URL`, `DEFAULT_OG_IMAGE`, `DEFAULT_ROBOTS`
- `src/utils/schema.ts` — JSON-LD LocalBusiness
- `src/layouts/Layout.astro` — usa `schemaOrg` de utils/schema.ts
- `public/robots.txt` — directivas de crawlers
- `astro.config.mjs` — `@astrojs/sitemap` (genera automático en build)

## Reglas críticas
1. `lang="es"` en `<html>` — ya está en Layout.astro, no tocarlo
2. Title format: `[Sección] | TecniCopa — Soporte Técnico en Copacabana`
3. Meta description: 150-160 caracteres, única por página
4. Canonical URL en todas las páginas (SEO.astro lo maneja via `Astro.url`)
5. OG completo: title, description, image, url, type, locale=`es_CO`, site_name
6. Twitter card: `summary_large_image`
7. `og:image` siempre absoluta — usar `resolveOgImageUrl()` de `src/utils/seo.ts`
8. Schema.org `LocalBusiness` ya configurado en `src/utils/schema.ts` — editar ahí, no en Layout

## URLs canónicas
- Site: `https://tecnicopa.com`
- WhatsApp CTA: ver `src/utils/links.ts` → `WHATSAPP_URL`
- Instagram: `src/utils/links.ts` → `INSTAGRAM_URL`

## Al modificar SEO
1. Leer `src/components/SEO.astro` y `src/utils/schema.ts`
2. Cambiar datos en `src/utils/schema.ts` si es info de negocio
3. Cambiar lógica de URL en `src/utils/seo.ts`
4. Verificar con `npm run build` (sitemap se genera ahí)
5. Actualizar tests si se modifican utils: `npm test`
