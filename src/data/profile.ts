import type { Localized } from '@/i18n';

export const profile = {
  name: 'Pedro Luis Soto Santos',
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
