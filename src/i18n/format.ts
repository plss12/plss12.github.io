import { htmlLang, type Locale } from '@/i18n';

/** Formatea una fecha ISO `YYYY-MM` como «jun 2023» / «Jun 2023». */
export function formatMonth(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(htmlLang[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${iso}-01T00:00:00Z`),
  );
}

/** Año de una fecha ISO `YYYY-MM`. */
export function yearOf(iso: string): string {
  return iso.slice(0, 4);
}

/** Rango de años compacto: «2023» si coinciden, «2023–2025» si no. */
export function yearRange(start: string, end: string): string {
  const a = yearOf(start);
  const b = yearOf(end);
  return a === b ? a : `${a}–${b}`;
}
