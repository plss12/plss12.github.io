import type { Localized } from '@/i18n';

export interface Evidence {
  label: Localized;
  /** Enlace directo al código o al paquete; sin enlace si no es público. */
  href?: string;
}

export interface Capability {
  title: Localized;
  description: Localized;
  evidence: Evidence[];
}

/**
 * Capacidades ordenadas por relevancia para el mercado actual de IA.
 * Cada una se respalda con un proyecto: nada se afirma sin prueba.
 */
export const capabilities: Capability[] = [
  {
    title: { es: 'Agentes y aprendizaje por refuerzo multiagente', en: 'Agents and multi-agent reinforcement learning' },
    description: {
      es: 'Diseño y entreno agentes que deciden por sí mismos y se coordinan con otros. He implementado desde cero DDDQL, MAPPO y AlphaZero, y he entrenado PPO y Rainbow DQN.',
      en: 'I design and train agents that decide on their own and coordinate with others. I’ve implemented DDDQL, MAPPO and AlphaZero from scratch, and trained PPO and Rainbow DQN.',
    },
    evidence: [
      {
        label: { es: 'DDDQL y MAPPO en GitHub', en: 'DDDQL and MAPPO on GitHub' },
        href: 'https://github.com/plss12/Lunar-Rover-MADRL/tree/main/gym_lunar_rover/algorithms',
      },
      {
        label: { es: 'AlphaZero en GitHub', en: 'AlphaZero on GitHub' },
        href: 'https://github.com/plss12/Connect-X-AlphaZero/tree/main/alphazero',
      },
    ],
  },
  {
    title: { es: 'Entornos de simulación para entrenar agentes', en: 'Simulation environments for agent training' },
    description: {
      es: 'Construyo el mundo en el que aprende el agente: estados, acciones, recompensas y escenarios aleatorios que evitan el sobreajuste.',
      en: 'I build the world the agent learns in: states, actions, rewards and randomised scenarios that prevent overfitting.',
    },
    evidence: [
      {
        label: { es: 'Simulador lunar en GitHub', en: 'Lunar simulator on GitHub' },
        href: 'https://github.com/plss12/Lunar-Rover-MADRL/tree/main/gym_lunar_rover/envs',
      },
    ],
  },
  {
    title: { es: 'Planificación y búsqueda con redes neuronales', en: 'Planning and search with neural networks' },
    description: {
      es: 'Combino búsqueda (MCTS, Minimax, ISMCTS) con redes neuronales para que el agente piense antes de actuar, como en AlphaZero.',
      en: 'I combine search (MCTS, Minimax, ISMCTS) with neural networks so agents think before they act, as in AlphaZero.',
    },
    evidence: [
      { label: { es: 'Connect-X AlphaZero en GitHub', en: 'Connect-X AlphaZero on GitHub' }, href: 'https://github.com/plss12/Connect-X-AlphaZero' },
      { label: { es: 'pyplAI en GitHub', en: 'pyplAI on GitHub' }, href: 'https://github.com/plss12/pyplAI' },
    ],
  },
  {
    title: { es: 'Software de IA publicado y documentado', en: 'Published, documented AI software' },
    description: {
      es: 'Convierto la investigación en herramientas que otros pueden usar: una biblioteca open source en PyPI con API documentada y ejemplos.',
      en: 'I turn research into tools others can use: an open-source library on PyPI with a documented API and examples.',
    },
    evidence: [{ label: { es: 'pyplAI en PyPI', en: 'pyplAI on PyPI' }, href: 'https://pypi.org/project/pyplAI/' }],
  },
  {
    title: { es: 'Datos en producción para modelos de IA', en: 'Production data for AI models' },
    description: {
      es: 'Pipelines ETL fiables a gran escala: en banca reduje un 50 % el tiempo de procesamiento de los datos que alimentan modelos de riesgo.',
      en: 'Reliable ETL pipelines at scale: in banking I cut by 50% the processing time of the data feeding risk models.',
    },
    evidence: [{ label: { es: 'Data Engineer en Minsait', en: 'Data Engineer at Minsait' } }],
  },
];

/** Herramientas y áreas complementarias, sin niveles ni repetir lo que ya se ve en capacidades y proyectos. */
export const toolkit: Localized<string[]> = {
  es: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'LLMs', 'RAG', 'MCP', 'Visión por computador', 'NLP', 'SQL', 'Docker', 'AWS', 'Git', 'Linux', 'CI/CD'],
  en: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'LLMs', 'RAG', 'MCP', 'Computer vision', 'NLP', 'SQL', 'Docker', 'AWS', 'Git', 'Linux', 'CI/CD'],
};
