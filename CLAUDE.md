# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Web personal de portfolio + CV para búsqueda activa de empleo como AI Engineer (Python). El autor es ingeniero informático con máster en IA: la web debe transmitir nivel técnico alto, tanto en diseño como en calidad de implementación.

## Contenido y tono

- `docs/perfil.md` es el brief editorial: identidad, experiencia, proyectos (por orden), skills, dirección de diseño y lista de datos que no se publican.
- `src/data/*.ts` es lo que la web renderiza (textos ES/EN tipados). Si cambia un dato, actualizar ambos sitios.
- Web bilingüe ES/EN con el mismo contenido.
- Tono cercano y sencillo, sin caer en lo informal. Cifras concretas antes que adjetivos.
- Estética sobria: básica pero eficaz, con pocos estímulos. El nivel técnico se demuestra con la calidad (rendimiento, accesibilidad, tipografía), no con efectos. Sin barras de nivel en skills, sin foto, sin animaciones llamativas.

## Objetivos de calidad

- Diseño propio e intencional, que no parezca una plantilla genérica (usar la skill `frontend-design`), dentro de la dirección sobria descrita arriba.
- Lighthouse cercano a 100 en rendimiento, accesibilidad, buenas prácticas y SEO (skills `web-quality-audit`, `performance`, `core-web-vitals`, `accessibility`, `seo`, `best-practices`).
- Revisar la UI con `web-design-guidelines` antes de dar una sección por terminada.

## Contexto personal

La carpeta `contexto/` (ignorada por git) contiene el material original: `CV.pdf`, `TFG.pdf`, `TFM.pdf` y `notas.md`. Ya está resumida en `docs/perfil.md`; solo hay que volver a ella para ampliar detalles. No publicar el teléfono ni los PDF originales; el email sí es público. GitHub del autor: `plss12`.

## Comandos

- `npm run dev`: servidor de desarrollo en http://localhost:4321.
- `npm run build`: ejecuta `astro check` (tipos) y build estático en `dist/`.
- `npm run preview`: sirve el build.
- `npm run check`: solo comprobación de tipos.

Requiere Node >= 22.12.

## Arquitectura

Astro 7 (salida estática y sin JS de cliente por defecto) + Tailwind CSS 4 vía `@tailwindcss/vite`. TypeScript en modo `strictest`, con el alias `@/` → `src/`.

- **i18n:** `es` es el idioma por defecto y va sin prefijo (`/`); `en` va en `/en/`. Está configurado en `astro.config.mjs`. `src/i18n/index.ts` define `Locale`, `Localized<T>` (= `Record<Locale, T>`), los textos de interfaz (`ui` + `useTranslations`) y `homePath`. Cada texto de datos es un `Localized`, así que añadir un idioma obliga a traducirlo todo (el compilador lo exige).
- **Datos:** `src/data/` contiene `profile`, `experience`, `education`, `projects` y `skills`. Las fechas van en formato ISO `YYYY-MM` y se formatean con `Intl` según el idioma.
- **Páginas:** `src/pages/index.astro` y `src/pages/en/index.astro` son wrappers finos sobre `BaseLayout` + `Home` con el `locale` correspondiente. Toda la lógica de presentación vive en los componentes.
- **SEO:** `BaseLayout.astro` gestiona title, description, canonical, `hreflang` (+ `x-default`), Open Graph y JSON-LD `Person`. El sitemap se genera con `@astrojs/sitemap` (con i18n).
- **Dominio:** `site` en `astro.config.mjs` y `public/robots.txt` apuntan provisionalmente a `https://plss12.github.io`. Cambiar ambos cuando se decida el hosting.
- Se usa Astro 7: las APIs cambiaron respecto a Astro 5. Por ejemplo, las colecciones van en `src/content.config.ts` con loaders, `z` se importa de `astro/zod` (Zod 4), las fuentes se definen con la clave top-level `fonts` + `<Font />` de `astro:assets` y el compilador de Rust no corrige el HTML inválido. Antes de usar una API, consultar la documentación actual.

## Estado

Andamiaje y datos listos; `Home.astro` solo tiene la estructura semántica, sin diseño visual. Siguiente paso: dirección de diseño (tokens, tipografía y layout) con `frontend-design`.
