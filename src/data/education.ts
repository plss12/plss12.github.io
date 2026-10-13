import type { Localized } from '@/i18n';

export interface Degree {
  title: Localized;
  school: Localized;
  /** Formato ISO `YYYY-MM`. */
  date: string;
  highlights: Localized[];
}

export const education: Degree[] = [
  {
    title: {
      es: 'Máster Universitario en Inteligencia Artificial',
      en: 'Master’s Degree in Artificial Intelligence',
    },
    school: {
      es: 'Universidad Internacional de Valencia (VIU)',
      en: 'International University of Valencia (VIU)',
    },
    date: '2024-09',
    highlights: [
      {
        es: 'Matrícula de Honor en el TFM (aprendizaje por refuerzo profundo multiagente).',
        en: 'Highest honours for the Master’s thesis (multi-agent deep reinforcement learning).',
      },
      { es: 'Optativa de computación cuántica.', en: 'Quantum computing elective.' },
    ],
  },
  {
    title: {
      es: 'Grado en Ingeniería Informática – Ingeniería del Software',
      en: 'Bachelor’s Degree in Software Engineering',
    },
    school: { es: 'Universidad de Sevilla', en: 'University of Seville' },
    date: '2023-06',
    highlights: [
      {
        es: 'Matrícula de Honor en el TFG y en la asignatura de Inteligencia Artificial.',
        en: 'Highest honours for the Bachelor’s thesis and the Artificial Intelligence course.',
      },
      {
        es: 'Alumno interno del Departamento de Ciencias de la Computación e Inteligencia Artificial.',
        en: 'Research student at the Department of Computer Science and Artificial Intelligence.',
      },
    ],
  },
];
