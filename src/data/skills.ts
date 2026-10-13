import type { Localized } from '@/i18n';

export interface SkillGroup {
  label: Localized;
  items: string[];
}

/** Sin niveles ni porcentajes, por decisión de diseño. */
export const skills: SkillGroup[] = [
  {
    label: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    items: [
      'Machine Learning',
      'Deep Learning',
      'Reinforcement Learning',
      'Multi-Agent RL',
      'Computer Vision',
      'NLP',
      'LLMs',
      'RAG',
      'MCP',
    ],
  },
  {
    label: { es: 'Python', en: 'Python' },
    items: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Gymnasium', 'XGBoost', 'LightGBM'],
  },
  {
    label: { es: 'Datos', en: 'Data' },
    items: ['SQL', 'PL/SQL', 'Oracle', 'MongoDB', 'ETL (ODI)'],
  },
  {
    label: { es: 'Ingeniería', en: 'Engineering' },
    items: ['Git', 'Docker', 'Linux', 'CI/CD', 'AWS', 'Java', 'Agile / Scrum'],
  },
];
