import type { Localized } from '@/i18n';

export interface Role {
  company: string;
  title: Localized;
  location: Localized;
  /** Formato ISO `YYYY-MM`. */
  start: string;
  end: string;
  highlights: Localized[];
  /** Si es false, en la portada solo se muestra el primer logro. */
  featured?: boolean;
}

export const techExperience: Role[] = [
  {
    company: 'Minsait (Indra)',
    title: { es: 'Data Engineer', en: 'Data Engineer' },
    location: { es: 'Sevilla', en: 'Seville, Spain' },
    start: '2023-06',
    end: '2025-02',
    featured: true,
    highlights: [
      {
        es: 'Modernización de flujos de datos para un gran cliente bancario, sobre uno de los mayores entornos Oracle Big Data del mundo, como soporte de modelos de riesgo basados en IA.',
        en: 'Modernised data workflows for a top-tier banking client on one of the world’s largest Oracle Big Data environments, supporting AI-driven risk models.',
      },
      {
        es: 'Diseño y optimización de pipelines ETL con Oracle Data Integrator y Python: −50 % de tiempo de procesamiento y disponibilidad diaria garantizada para operaciones críticas.',
        en: 'Designed and optimised ETL pipelines with Oracle Data Integrator and Python, cutting processing time by 50% and guaranteeing daily availability for critical operations.',
      },
    ],
  },
  {
    company: 'Deloitte',
    title: { es: 'Software Engineer', en: 'Software Engineer' },
    location: { es: 'Sevilla', en: 'Seville, Spain' },
    start: '2023-01',
    end: '2023-06',
    highlights: [
      {
        es: 'Seguimiento y coordinación de proyectos de desarrollo para el Ministerio de Sanidad: plazos, entregables y detección temprana de riesgos.',
        en: 'Monitored and coordinated software projects for the Spanish Ministry of Health: timelines, deliverables and early risk detection.',
      },
      {
        es: 'Toma de requisitos y traducción de las necesidades del cliente en tareas para los equipos de desarrollo.',
        en: 'Gathered requirements and turned client needs into actionable tasks for development teams.',
      },
    ],
  },
];

/** Resumen de la etapa internacional, presentado en la portada como una etapa más. */
export const internationalStage = {
  title: { es: 'Etapa internacional', en: 'International stage' } satisfies Localized,
  location: { es: 'Australia y España', en: 'Australia and Spain' } satisfies Localized,
  start: '2025-03',
  end: '2026-08',
  intro: {
    es: 'Una etapa planificada para llevar mi inglés a nivel C1 y desarrollar habilidades de liderazgo, antes de volver de lleno a la IA.',
    en: 'A planned stage to take my English to C1 and build leadership skills, before returning full-time to AI.',
  } satisfies Localized,
  highlights: [
    {
      es: 'Front Office Assistant en Accor (Brisbane, Australia): atención al cliente en un entorno multicultural y exigente, íntegramente en inglés.',
      en: 'Front Office Assistant at Accor (Brisbane, Australia): customer-facing work in a fast-paced, multicultural environment, entirely in English.',
    },
    {
      es: 'Monitor de inmersión lingüística en InterWay (España): gestión de grupos y actividades diarias en inglés, con foco en liderazgo y resolución de problemas.',
      en: 'English immersion counselor at InterWay (Spain): leading groups and daily activities in English, with a focus on leadership and problem-solving.',
    },
  ] satisfies Localized[],
};
