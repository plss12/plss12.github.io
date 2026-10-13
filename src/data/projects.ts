import type { Localized } from '@/i18n';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  /** Contexto académico o de competición, si lo hay. */
  context?: Localized;
  summary: Localized;
  highlights: Localized[];
  stack: string[];
  links: ProjectLink[];
}

/** Proyectos destacados, por orden de importancia. */
export const projects: Project[] = [
  {
    name: 'Lunar-Rover-MADRL',
    context: {
      es: 'Trabajo Fin de Máster · Matrícula de Honor',
      en: 'Master’s thesis · Highest honours',
    },
    summary: {
      es: 'Planificación de rutas multiagente con aprendizaje por refuerzo profundo para rovers lunares que recogen y transportan minerales, como alternativa a la planificación centralizada.',
      en: 'Multi-agent route planning with deep reinforcement learning for lunar rovers that collect and transport minerals, as an alternative to centralised planning.',
    },
    highlights: [
      {
        es: 'Simulador lunar propio con mapas, obstáculos y número de agentes configurables y aleatorios.',
        en: 'Custom lunar simulator with configurable, randomised maps, obstacles and agent counts.',
      },
      {
        es: 'DDDQL (Double Dueling DQN) y MAPPO implementados desde cero.',
        en: 'DDDQL (Double Dueling DQN) and MAPPO implemented from scratch.',
      },
      {
        es: 'DDDQL resuelve los escenarios de prueba con rutas eficientes y cero colisiones entre agentes.',
        en: 'DDDQL solves the test scenarios with efficient routes and zero collisions between agents.',
      },
    ],
    stack: ['Python', 'TensorFlow', 'Keras', 'Gymnasium', 'Pygame'],
    links: [{ label: 'GitHub', href: 'https://github.com/plss12/Lunar-Rover-MADRL' }],
  },
  {
    name: 'Connect-X-AlphaZero',
    context: { es: 'Competición Kaggle ConnectX', en: 'Kaggle ConnectX competition' },
    summary: {
      es: 'Agentes de IA para Conecta 4 que comparan búsqueda clásica, RL model-free y AlphaZero.',
      en: 'AI agents for Connect 4 benchmarking classic search, model-free RL and AlphaZero.',
    },
    highlights: [
      {
        es: 'AlphaZero implementado desde cero: top 10 global en la clasificación de Kaggle.',
        en: 'AlphaZero built from scratch: global top 10 on the Kaggle leaderboard.',
      },
      {
        es: 'Comparativa con Rainbow DQN, PPO, MCTS y Minimax, en la que la búsqueda clásica supera al RL model-free.',
        en: 'Benchmarked against Rainbow DQN, PPO, MCTS and Minimax, where classic search beats model-free RL.',
      },
    ],
    stack: ['Python', 'PyTorch', 'Tianshou', 'pyplAI'],
    links: [{ label: 'GitHub', href: 'https://github.com/plss12/Connect-X-AlphaZero' }],
  },
  {
    name: 'pyplAI',
    context: {
      es: 'Trabajo Fin de Grado · Matrícula de Honor',
      en: 'Bachelor’s thesis · Highest honours',
    },
    summary: {
      es: 'Biblioteca open source publicada en PyPI con algoritmos de búsqueda para juegos de información perfecta e imperfecta.',
      en: 'Open-source library published on PyPI with search algorithms for perfect- and imperfect-information games.',
    },
    highlights: [
      {
        es: 'Minimax con poda alfa-beta, MCTS-UCT, SO-ISMCTS y MO-ISMCTS.',
        en: 'Minimax with alpha-beta pruning, MCTS-UCT, SO-ISMCTS and MO-ISMCTS.',
      },
      {
        es: 'Siete juegos de ejemplo y análisis estadístico comparativo entre algoritmos.',
        en: 'Seven example games and a comparative statistical analysis of the algorithms.',
      },
      {
        es: 'Algoritmo genético para la configuración inicial del Stratego, que mejora el rendimiento de SO-ISMCTS.',
        en: 'Genetic algorithm for Stratego’s initial setup that improves SO-ISMCTS performance.',
      },
    ],
    stack: ['Python', 'PyPI'],
    links: [
      { label: 'GitHub', href: 'https://github.com/plss12/pyplAI' },
      { label: 'PyPI', href: 'https://pypi.org/project/pyplAI/' },
    ],
  },
];

/** Proyectos de ML aplicado, mostrados en un bloque compacto. */
export const kaggleProjects: Project[] = [
  {
    name: 'Store-Sales-TSF',
    summary: {
      es: 'Predicción de ventas diarias con un ensemble de XGBoost y LightGBM y feature engineering de lags y medias móviles. Top 5 %.',
      en: 'Daily sales forecasting with an XGBoost + LightGBM ensemble and lag/rolling-mean feature engineering. Top 5%.',
    },
    highlights: [],
    stack: ['XGBoost', 'LightGBM', 'Pandas'],
    links: [{ label: 'GitHub', href: 'https://github.com/plss12/Store-Sales-TSF' }],
  },
  {
    name: 'Spaceship-AutoML',
    summary: {
      es: 'Pipeline de clasificación end-to-end con AutoGluon. 81 % de accuracy, top 2 %.',
      en: 'End-to-end classification pipeline with AutoGluon. 81% accuracy, top 2%.',
    },
    highlights: [],
    stack: ['AutoGluon', 'scikit-learn', 'Pandas'],
    links: [{ label: 'GitHub', href: 'https://github.com/plss12/Spaceship-AutoML' }],
  },
];
