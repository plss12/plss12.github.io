# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Web personal de portfolio + CV para búsqueda activa de empleo como AI Engineer (Python). El autor es ingeniero informático con máster en IA: la web debe transmitir nivel técnico alto, tanto en diseño como en calidad de implementación.

## Contenido y posicionamiento

- `docs/perfil.md` es el brief editorial: posicionamiento, capacidades por orden, proyectos, resultados reales y lista de datos que no se publican.
- `src/data/*.ts` es lo que la web renderiza (textos ES/EN tipados). Si cambia un dato, actualizar ambos sitios.
- Hilo conductor: **agentes que aprenden a decidir** (RL, multiagente, búsqueda + redes neuronales). El TFM es el proyecto protagonista; el TFG, el segundo.
- **Nada se afirma sin prueba.** Toda cifra o logro debe salir de `contexto/`, de los repos o de los datos del TFM. No inventar duraciones, compromisos ni proyectos (p. ej. RAG solo aparece como herramienta hasta que exista un proyecto).
- Tono cercano y sencillo, en primera persona, sin caer en lo informal. Cifras concretas antes que adjetivos.
- **Nombre del autor:** siempre completo, «Pedro Luis Soto Santos» (`profile.name`), o solo «Pedro» en la versión corta. Nunca formas intermedias como «Pedro Luis» o «Pedro Luis Soto».

## Diseño

- Referencias: Apple y Nike. Un único elemento llamativo (la cabecera oscura con la foto y el titular condensado); todo lo demás, sobrio.
- **Tokens** en `src/styles/global.css`: paleta monocroma (`--bg`, `--surface`, `--ink`, `--muted`, `--line`), `--stage*` para las secciones siempre oscuras y `--series-1..3` (validados para daltonismo con la skill `dataviz`) **solo para datos**. Modo oscuro automático por `prefers-color-scheme`.
- **Tipografía:** una familia, Instrument Sans variable (`wdth` 75–100, `wght` 400–700), autoalojada con la Fonts API. Utilidades: `text-display`, `text-title`, `text-subtitle`, `text-lead`; layout con `container-page` y `section-space`; enlaces `link` y botones `btn`.
- Evitar: mayúsculas en etiquetas, antetítulos, numeración decorativa, metadatos unidos con «·», flechas «→», tarjetas idénticas con sombra, animaciones al cargar o al hacer scroll.
- Visuales en `src/components/visuals/`: SVG estáticos y accesibles (`<title>`/`<desc>`, tabla de datos en la gráfica). `LunarMap` + `LunarLegend` en la portada (modo `informed`); `LunarComparison` y `TrainingChart` solo en el caso de estudio del TFM; `BenchmarkChart` (barras divergentes victorias/empates/derrotas desde `src/data/metrics/pyplai-mcp-benchmark.csv`, copia de `benchmarks/results.csv` del repo pyplAI-MCP) en el de pyplAI-MCP. Sin JavaScript en el navegador.

## Objetivos de calidad

- Diseño propio e intencional (skill `frontend-design`), revisado con `web-design-guidelines` antes de dar una sección por terminada.
- Lighthouse cercano a 100 (skills `web-quality-audit`, `performance`, `core-web-vitals`, `accessibility`, `seo`, `best-practices`). Estado actual en producción: 98–100 en rendimiento y 100 en accesibilidad, buenas prácticas y SEO; CLS 0; 0 KB de JS.
- Revisar visualmente con `npm run screenshots -- <url-base> <carpeta> <rutas...>` (390, 820 y 1440 px, claro y oscuro).

## Contexto personal

La carpeta `contexto/` (ignorada por git) contiene el material original: los CV en PDF (`CV Pedro Soto - ES.pdf` y `- EN.pdf`), `TFG.pdf`, `TFM.pdf`, `notas.md` y `Fotos/`. Ya está resumida en `docs/perfil.md`; solo hay que volver a ella para ampliar detalles. Solo se publican los dos CV (con teléfono, decisión de Pedro); el resto de PDF, no. El email es público. GitHub del autor: `plss12`.

## Comandos

- `npm run dev`: servidor de desarrollo en http://localhost:4321.
- `npm run build`: `astro check` (tipos), build estático en `dist/`, generación de las imágenes Open Graph de los casos de estudio (`scripts/og-images.mjs`), que sirve `dist/` con `scripts/serve-dist.mjs` y requiere Chromium de Playwright: `npx playwright install chromium`.
- `npm run preview`: sirve el build.
- `npm run check`: solo comprobación de tipos.
- `npm run screenshots`: capturas de revisión con Playwright.

Requiere Node >= 22.12. En Git Bash, prefijar con `MSYS_NO_PATHCONV=1` los comandos que reciben rutas como `/`.

## Arquitectura

Astro 7 (salida estática, sin JS de cliente) + Tailwind CSS 4 vía `@tailwindcss/vite` + MDX. TypeScript en modo `strictest`, con el alias `@/` → `src/`.

- **i18n:** `es` por defecto sin prefijo (`/`), `en` en `/en/`. `src/i18n/index.ts` define `Locale`, `Localized<T>`, `routes` (home, caso de estudio, PDF del CV e imagen Open Graph), `sectionIds`/`sectionHref` (anclas por idioma) y los textos de interfaz (`ui` + `useTranslations`). `src/i18n/format.ts` formatea fechas con `Intl`. Cada texto es un `Localized`: el compilador exige traducirlo todo.
- **Datos:** `src/data/` contiene `profile`, `highlights`, `projects` (TFM destacado, proyectos y Kaggle), `capabilities` (evidencia enlazada a GitHub/PyPI), `experience` (incluida la etapa internacional), `education`, `lunar-scenario` (escenario real del TFM en dos modos: `exploring`, figura 5.9, e `informed`, figura 5.10) y `metrics/*.csv` (métricas reales de entrenamiento).
- **Portada:** `Home.astro` monta `Hero`, `Proofs`, `Projects` (`FeaturedProject` + `ProjectCard`), `Capabilities`, `Experience`, `Education` y `Contact`.
- **Casos de estudio:** colección `caseStudies` (`src/content.config.ts`), un MDX por idioma en `src/content/case-studies/{es,en}/<slug>.mdx`. Rutas `/proyectos/<slug>/` y `/en/projects/<slug>/` con `CaseStudyPage.astro`; la cabecera sale de `src/data/projects.ts`.
- **CV:** PDF hechos por Pedro (optimizados para reclutadores, no se generan con los datos de la web) en `public/cv/pedro-luis-soto-santos-cv-{es,en}.pdf`, enlazados desde la cabecera y el contacto (`routes.cvPdf`). Para una versión nueva, copiar el PDF de `contexto/` encima con el mismo nombre.
- **SEO:** `BaseLayout.astro` (props `title`, `description`, `alternates`, `noindex`, `ogType`, `ogImage`, `schema`, `bare`) gestiona canonical, `hreflang`, Open Graph y JSON-LD. Sitemap con `@astrojs/sitemap`.
- **Imágenes Open Graph:** la portada usa `public/og.jpg` y `og-en.jpg` (foto + titular). Cada caso de estudio tiene la suya, `/og/<locale>/<slug>.jpg` (`routes.ogImage`). Se generan en cada build: `src/pages/og/[locale]/[slug].astro` es una plantilla de 1200 × 630 (nombre, `tagline` y `context` del proyecto y su visual: `LunarMap`, `MctsDiagram` o `PhantomAnalysis`), y `scripts/og-images.mjs` la captura en modo oscuro y borra el HTML para que no se publique. Las plantillas están excluidas del sitemap. Un caso de estudio nuevo necesita su visual en la plantilla.
- **Imágenes:** fotos en `src/assets/photos/` (procesadas desde `contexto/Fotos`); la cabecera usa dirección de arte manual con `getImage` (retrato en móvil, panorámica en escritorio) y `fetchpriority="high"`.
- **Despliegue:** cada push a `main` publica en GitHub Pages (https://plss12.github.io) con `.github/workflows/deploy.yml` (Node de `.nvmrc`, Chromium de Playwright para las imágenes Open Graph, `npm run build`, `dist/`). `site` en `astro.config.mjs` y `public/robots.txt` apuntan a ese dominio; si cambia, actualizar ambos. `src/pages/404.astro` es la única página de error que admite GitHub Pages: renderiza ES y EN y un script inline mínimo (el único JS de la web) muestra la inglesa si la ruta empieza por `/en/`.
- Astro 7 cambió APIs respecto a Astro 5: colecciones en `src/content.config.ts` con loaders, `z` desde `astro/zod` (Zod 4), fuentes con la clave `fonts` + `<Font />`, compilador en Rust que no corrige HTML inválido. Antes de usar una API, consultar la documentación actual.
- **Keep it simple:** lo que no se usa se borra (componentes, páginas, scripts, datos, props, textos de interfaz), también lo que deja de usarse tras un cambio. Nada se guarda «por si acaso»: queda en el historial de git.

## Git

- Commits en inglés, en imperativo y con un cuerpo que explique el porqué. Todos terminan con
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
