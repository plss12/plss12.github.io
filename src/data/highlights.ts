import type { Localized } from '@/i18n';

export interface Highlight {
  /** La cifra o el logro, en grande. */
  value: Localized;
  /** El contexto que lo hace creíble, en una frase. */
  context: Localized;
}

/** Las tres pruebas que acompañan a la cabecera. */
export const highlights: Highlight[] = [
  {
    value: { es: 'Top 10 mundial', en: 'Global top 10' },
    context: {
      es: 'en la competición ConnectX de Kaggle, con un AlphaZero implementado desde cero.',
      en: 'in Kaggle’s ConnectX competition, with an AlphaZero built from scratch.',
    },
  },
  {
    value: { es: 'Matrícula de Honor', en: 'Highest honours' },
    context: {
      es: 'en el Trabajo Fin de Máster y en el Trabajo Fin de Grado.',
      en: 'for both my Master’s and Bachelor’s theses.',
    },
  },
  {
    value: { es: '−50 % de tiempo', en: '−50% runtime' },
    context: {
      es: 'de ejecución en los procesos diarios de los modelos de riesgo de un banco de primer nivel.',
      en: 'on the daily processes behind a top-tier bank’s risk models.',
    },
  },
];
