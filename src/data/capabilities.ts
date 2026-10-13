import type { Localized } from '@/i18n';

export interface Evidence {
  label: Localized;
  /** Slug de un caso de estudio o URL externa. */
  caseStudy?: string;
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
    evidence: [{ label: { es: 'TFM: Lunar-Rover-MADRL', en: 'Master’s thesis: Lunar-Rover-MADRL' }, caseStudy: 'lunar-rover-madrl' }],
  },
  {
    title: { es: 'Entornos de simulación para entrenar agentes', en: 'Simulation environments for agent training' },
    description: {
      es: 'Construyo el mundo en el que aprende el agente: estados, acciones, recompensas y escenarios aleatorios que evitan el sobreajuste.',
      en: 'I build the world the agent learns in: states, actions, rewards and randomised scenarios that prevent overfitting.',
    },
    evidence: [{ label: { es: 'Simulador lunar con Gymnasium', en: 'Lunar simulator on Gymnasium' }, caseStudy: 'lunar-rover-madrl' }],
  },
  {
    title: { es: 'Planificación y búsqueda con redes neuronales', en: 'Planning and search with neural networks' },
    description: {
      es: 'Combino búsqueda (MCTS, Minimax, ISMCTS) con redes neuronales para que el agente piense antes de actuar, como en AlphaZero.',
      en: 'I combine search (MCTS, Minimax, ISMCTS) with neural networks so agents think before they act, as in AlphaZero.',
    },
    evidence: [
      { label: { es: 'Connect-X AlphaZero', en: 'Connect-X AlphaZero' }, href: 'https://github.com/plss12/Connect-X-AlphaZero' },
      { label: { es: 'TFG: pyplAI', en: 'Bachelor’s thesis: pyplAI' }, caseStudy: 'pyplai' },
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

/** Herramientas y áreas complementarias, sin niveles. */
export const toolkit: Localized<string[]> = {
  es: ['Python', 'PyTorch', 'TensorFlow', 'Gymnasium', 'scikit-learn', 'LLMs', 'RAG', 'MCP', 'Visión por computador', 'NLP', 'SQL', 'Docker', 'AWS', 'Git', 'Linux', 'CI/CD'],
  en: ['Python', 'PyTorch', 'TensorFlow', 'Gymnasium', 'scikit-learn', 'LLMs', 'RAG', 'MCP', 'Computer vision', 'NLP', 'SQL', 'Docker', 'AWS', 'Git', 'Linux', 'CI/CD'],
};
