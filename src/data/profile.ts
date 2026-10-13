import type { Localized } from '@/i18n';

export const profile = {
  name: 'Pedro Luis Soto Santos',
  shortName: 'Pedro Luis Soto',
  role: { es: 'Ingeniero de IA', en: 'AI Engineer' } satisfies Localized,
  /** Titular de la cabecera: resume el hilo conductor del perfil (agentes que aprenden a decidir). */
  headline: {
    es: 'Enseño a las máquinas a decidir.',
    en: 'I teach machines to make decisions.',
  } satisfies Localized,
  intro: {
    es: 'Soy Pedro, ingeniero de IA especializado en Python. Trabajo con machine learning y aprendizaje por refuerzo para crear agentes que aprenden de su entorno y toman buenas decisiones.',
    en: 'I’m Pedro, an AI engineer focused on Python. I work with machine learning and reinforcement learning to build agents that learn from their environment and make good decisions.',
  } satisfies Localized,
  summary: {
    es: 'Ingeniero de software con máster en Inteligencia Artificial y más de dos años de experiencia en datos y desarrollo en entornos empresariales. Me especializo en agentes y aprendizaje por refuerzo, con experiencia en llevar datos a producción para modelos de IA.',
    en: 'Software engineer with a Master’s in Artificial Intelligence and over two years of experience in enterprise data and software. I specialise in agents and reinforcement learning, with hands-on experience delivering production data for AI models.',
  } satisfies Localized,
  location: {
    es: 'España. Abierto a trabajar en cualquier país de Europa.',
    en: 'Spain. Open to working anywhere in Europe.',
  } satisfies Localized,
  workMode: {
    es: 'Híbrido o presencial',
    en: 'Hybrid or on-site',
  } satisfies Localized,
  languages: [
    {
      name: { es: 'Español', en: 'Spanish' },
      level: { es: 'Nativo', en: 'Native' },
    },
    {
      name: { es: 'Inglés', en: 'English' },
      level: {
        es: 'C1 (Cambridge). He vivido y trabajado en Australia.',
        en: 'C1 (Cambridge). I’ve lived and worked in Australia.',
      },
    },
  ] satisfies { name: Localized; level: Localized }[],
  links: {
    email: 'pepoluis712@gmail.com',
    github: 'https://github.com/plss12',
    linkedin: 'https://www.linkedin.com/in/plss12/',
    repo: 'https://github.com/plss12/plss12.github.io',
  },
} as const;
