import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Casos de estudio: un archivo MDX por idioma en `src/content/case-studies/{es,en}/<slug>.mdx`.
 * El slug coincide con el de `src/data/projects.ts`, de donde sale la cabecera de la página.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['es', 'en']),
    project: z.string(),
  }),
});

export const collections = { caseStudies };
