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

/**
 * Etapa planificada para alcanzar un inglés avanzado. En la portada se resume en una línea
 * (ver `internationalSummary`); el detalle se mantiene para el CV.
 */
export const internationalExperience: Role[] = [
  {
    company: 'InterWay',
    title: { es: 'Monitor de inmersión en inglés', en: 'English Immersion Camp Counselor' },
    location: { es: 'España', en: 'Spain' },
    start: '2026-02',
    end: '2026-08',
    highlights: [
      {
        es: 'Gestión de grupos y actividades diarias íntegramente en inglés, en un entorno muy dinámico.',
        en: 'Led groups and daily activities entirely in English in a fast-moving environment.',
      },
    ],
  },
  {
    company: 'Accor',
    title: { es: 'Front Office Assistant', en: 'Front Office Assistant' },
    location: { es: 'Brisbane, Australia', en: 'Brisbane, Australia' },
    start: '2025-03',
    end: '2025-10',
    highlights: [
      {
        es: 'Año de inmersión lingüística en un entorno multicultural y de atención al cliente.',
        en: 'Immersive gap year in a multicultural, customer-facing environment.',
      },
    ],
  },
];

export const internationalSummary = {
  period: { start: '2025-03', end: '2026-08' },
  text: {
    es: 'Etapa internacional planificada para llevar mi inglés a nivel C1: vivir y trabajar en Brisbane (Australia) en atención al cliente con Accor y, después, monitor de inmersión lingüística con InterWay.',
    en: 'A planned international stage to take my English to C1: living and working in Brisbane, Australia, in a customer-facing role with Accor, then as an English immersion counselor with InterWay.',
  } satisfies Localized,
};
