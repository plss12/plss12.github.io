import type { Localized } from '@/i18n';

export const profile = {
  name: 'Pedro Luis Soto Santos',
  role: { es: 'Ingeniero de IA · Python', en: 'AI Engineer · Python' } satisfies Localized,
  location: {
    es: 'España · abierto a reubicación en Europa',
    en: 'Spain · open to relocation within Europe',
  } satisfies Localized,
  summary: {
    es: 'Ingeniero de software con máster en Inteligencia Artificial y más de dos años de experiencia en entornos empresariales de datos y desarrollo. Me interesan el aprendizaje por refuerzo, los agentes y los sistemas basados en LLMs, y busco aplicarlos en proyectos de IA en empresas tecnológicas innovadoras.',
    en: 'Software engineer with a Master’s in Artificial Intelligence and over two years of experience in enterprise data and software environments. I’m interested in reinforcement learning, agents and LLM-based systems, and I’m looking to apply them to AI projects at innovative tech companies.',
  } satisfies Localized,
  workMode: {
    es: 'Modalidad híbrida o presencial',
    en: 'Hybrid or on-site',
  } satisfies Localized,
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: { es: 'C1 · Cambridge', en: 'C1 · Cambridge' } },
  ] satisfies { name: Localized; level: Localized }[],
  links: {
    email: 'pepoluis712@gmail.com',
    github: 'https://github.com/plss12',
    linkedin: 'https://www.linkedin.com/in/plss12/',
  },
} as const;
