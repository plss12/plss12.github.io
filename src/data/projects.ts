import type { Localized } from '@/i18n';

export interface ProjectLink {
  label: Localized;
  href: string;
}

export interface ProjectFact {
  value: Localized;
  label: Localized;
}

/** Pieza visual que acompaña al proyecto en la portada. */
export type ProjectVisual = 'lunar-simulator' | 'mcts-diagram' | 'connect4-board';

export interface Project {
  /** Identificador estable; si tiene caso de estudio, es también su slug. */
  slug: string;
  name: string;
  /** Contexto académico o de competición. */
  context: Localized;
  /** Frase de resultado, en el tono de un titular. */
  tagline: Localized;
  summary: Localized;
  facts: ProjectFact[];
  stack: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
  caseStudy: boolean;
}

const github = { es: 'Código en GitHub', en: 'Code on GitHub' } satisfies Localized;

/** El TFM: proyecto protagonista de la portada. */
export const featuredProject: Project = {
  slug: 'lunar-rover-madrl',
  name: 'Lunar-Rover-MADRL',
  context: {
    es: 'Trabajo Fin de Máster. Matrícula de Honor.',
    en: 'Master’s thesis. Highest honours.',
  },
  tagline: {
    es: 'Rovers lunares que aprenden a coordinarse sin chocar.',
    en: 'Lunar rovers that learn to coordinate without colliding.',
  },
  summary: {
    es: 'Un sistema de planificación de rutas multiagente con aprendizaje por refuerzo profundo, como alternativa a la planificación centralizada. Los rovers exploran, encuentran su mina, transportan el mineral y evitan obstáculos y entre sí, cada uno con su propia visión del entorno. Diseñé el simulador e implementé desde cero DDDQL y MAPPO.',
    en: 'A multi-agent route-planning system built on deep reinforcement learning, as an alternative to centralised planning. The rovers explore, find their mine, carry the ore and avoid obstacles and each other, each one with its own view of the environment. I designed the simulator and implemented DDDQL and MAPPO from scratch.',
  },
  facts: [
    { value: { es: '8 de 8', en: '8 of 8' }, label: { es: 'escenarios de prueba resueltos', en: 'test scenarios solved' } },
    { value: { es: '0', en: '0' }, label: { es: 'colisiones entre rovers', en: 'collisions between rovers' } },
    { value: { es: '3,75 M', en: '3.75M' }, label: { es: 'pasos de entrenamiento', en: 'training steps' } },
  ],
  stack: ['Python', 'TensorFlow', 'Keras', 'Gymnasium', 'Pygame'],
  links: [{ label: github, href: 'https://github.com/plss12/Lunar-Rover-MADRL' }],
  visual: 'lunar-simulator',
  caseStudy: true,
};

/** Proyectos destacados que acompañan al TFM. */
export const projects: Project[] = [
  {
    slug: 'pyplai',
    name: 'pyplAI',
    context: {
      es: 'Trabajo Fin de Grado. Matrícula de Honor.',
      en: 'Bachelor’s thesis. Highest honours.',
    },
    tagline: {
      es: 'Algoritmos de decisión para juegos, a un pip install.',
      en: 'Decision-making algorithms for games, one pip install away.',
    },
    summary: {
      es: 'Biblioteca open source publicada en PyPI con Minimax, MCTS y dos variantes de ISMCTS para juegos de información imperfecta, en los que el agente no ve todo, como las cartas del rival.',
      en: 'An open-source library on PyPI with Minimax, MCTS and two ISMCTS variants for imperfect-information games, where the agent can’t see everything, like an opponent’s cards.',
    },
    facts: [
      { value: { es: '4', en: '4' }, label: { es: 'algoritmos de búsqueda', en: 'search algorithms' } },
      { value: { es: '8', en: '8' }, label: { es: 'juegos de ejemplo', en: 'example games' } },
    ],
    stack: ['Python', 'PyPI'],
    links: [
      { label: github, href: 'https://github.com/plss12/pyplAI' },
      { label: { es: 'Ver en PyPI', en: 'View on PyPI' }, href: 'https://pypi.org/project/pyplAI/' },
    ],
    visual: 'mcts-diagram',
    caseStudy: true,
  },
  {
    slug: 'connect-x-alphazero',
    name: 'Connect-X AlphaZero',
    context: {
      es: 'Competición ConnectX de Kaggle.',
      en: 'Kaggle ConnectX competition.',
    },
    tagline: {
      es: 'AlphaZero desde cero. Top 10 mundial.',
      en: 'AlphaZero from scratch. Global top 10.',
    },
    summary: {
      es: 'Agentes para Conecta 4 que comparan búsqueda clásica, Rainbow DQN, PPO y AlphaZero. AlphaZero, que combina una red neuronal con MCTS, gana a todos y compite con los mejores de la clasificación.',
      en: 'Connect 4 agents benchmarking classic search, Rainbow DQN, PPO and AlphaZero. AlphaZero, which pairs a neural network with MCTS, beats them all and competes with the best on the leaderboard.',
    },
    facts: [
      { value: { es: 'Top 10', en: 'Top 10' }, label: { es: 'en la clasificación global', en: 'on the global leaderboard' } },
      { value: { es: '5', en: '5' }, label: { es: 'familias de agentes comparadas', en: 'agent families benchmarked' } },
    ],
    stack: ['Python', 'PyTorch', 'Tianshou', 'pyplAI'],
    links: [{ label: github, href: 'https://github.com/plss12/Connect-X-AlphaZero' }],
    visual: 'connect4-board',
    caseStudy: false,
  },
];

export interface KaggleResult {
  name: string;
  result: Localized;
  href: string;
}

/** Resultados de ML aplicado, en una línea compacta. */
export const kaggleResults: KaggleResult[] = [
  {
    name: 'Store Sales',
    result: { es: 'top 5 % en predicción de series temporales', en: 'top 5% in time-series forecasting' },
    href: 'https://github.com/plss12/Store-Sales-TSF',
  },
  {
    name: 'Spaceship Titanic',
    result: { es: 'top 2 % con AutoML', en: 'top 2% with AutoML' },
    href: 'https://github.com/plss12/Spaceship-AutoML',
  },
];
