export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Valor traducido a todos los idiomas de la web. */
export type Localized<T = string> = Record<Locale, T>;

export const htmlLang: Localized = { es: 'es-ES', en: 'en' };

/** Ruta de la portada en cada idioma (el idioma por defecto va sin prefijo). */
export function homePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export const ui = {
  'meta.title': {
    es: 'Pedro Luis Soto Santos · Ingeniero de IA',
    en: 'Pedro Luis Soto Santos · AI Engineer',
  },
  'meta.description': {
    es: 'Ingeniero de IA especializado en Python, con máster en Inteligencia Artificial y experiencia en ingeniería de datos y aprendizaje por refuerzo.',
    en: 'AI Engineer focused on Python, with a Master’s in Artificial Intelligence and experience in data engineering and reinforcement learning.',
  },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.education': { es: 'Formación', en: 'Education' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'lang.switch': { es: 'English', en: 'Español' },
  'lang.switchLabel': { es: 'Ver la web en inglés', en: 'View the site in Spanish' },
  'section.international': { es: 'Experiencia internacional', en: 'International experience' },
  'project.code': { es: 'Código', en: 'Code' },
  'skip': { es: 'Saltar al contenido', en: 'Skip to content' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[key][locale];
}
