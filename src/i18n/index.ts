export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

/** Valor traducido a todos los idiomas de la web. */
export type Localized<T = string> = Record<Locale, T>;

export const htmlLang: Localized = { es: 'es-ES', en: 'en' };
export const ogLocale: Localized = { es: 'es_ES', en: 'en_US' };

export function otherLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

const prefix = (locale: Locale) => (locale === defaultLocale ? '' : `/${locale}`);

/** Rutas de la web en cada idioma (el idioma por defecto va sin prefijo). */
export const routes = {
  home: (locale: Locale) => `${prefix(locale)}/`,
  caseStudy: (locale: Locale, slug: string) =>
    `${prefix(locale)}/${locale === 'es' ? 'proyectos' : 'projects'}/${slug}/`,
  cv: (locale: Locale) => `${prefix(locale)}/cv/`,
  cvPdf: (locale: Locale) => `/cv/pedro-luis-soto-santos-cv-${locale}.pdf`,
};

/** Identificadores de las secciones de la portada (anclas legibles en cada idioma). */
export const sectionIds = {
  projects: { es: 'proyectos', en: 'projects' },
  capabilities: { es: 'capacidades', en: 'capabilities' },
  experience: { es: 'experiencia', en: 'experience' },
  education: { es: 'formacion', en: 'education' },
  contact: { es: 'contacto', en: 'contact' },
} satisfies Record<string, Localized>;

export type SectionKey = keyof typeof sectionIds;

export function sectionHref(locale: Locale, section: SectionKey): string {
  return `${routes.home(locale)}#${sectionIds[section][locale]}`;
}

export const ui = {
  'meta.title': {
    es: 'Pedro Luis Soto Santos, ingeniero de IA',
    en: 'Pedro Luis Soto Santos, AI Engineer',
  },
  'meta.description': {
    es: 'Ingeniero de IA especializado en Python. Diseño agentes que aprenden por refuerzo: sistemas multiagente, simulación, planificación y búsqueda.',
    en: 'AI Engineer focused on Python. I build agents that learn through reinforcement: multi-agent systems, simulation, planning and search.',
  },
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  'nav.label': { es: 'Principal', en: 'Main' },
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.experience': { es: 'Experiencia', en: 'Experience' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'lang.switch': { es: 'EN', en: 'ES' },
  'lang.switchLabel': { es: 'Read in English', en: 'Leer en español' },
  'cta.cv': { es: 'CV', en: 'CV' },
  'cta.cvLabel': { es: 'Descargar CV en PDF', en: 'Download CV as PDF' },
  'cta.downloadCv': { es: 'Descargar CV', en: 'Download CV' },
  'cta.projects': { es: 'Ver proyectos', en: 'See projects' },
  'cta.contact': { es: 'Escríbeme', en: 'Get in touch' },
  'cta.caseStudy': { es: 'Leer el caso completo', en: 'Read the case study' },
  'cta.back': { es: 'Volver a la portada', en: 'Back to home' },
  'hero.photoAlt': {
    es: 'Pedro Luis Soto Santos sonriendo, con gafas redondas y camiseta negra, sobre fondo oscuro.',
    en: 'Pedro Luis Soto Santos smiling, wearing round glasses and a black T-shirt, on a dark background.',
  },
  'proofs.label': { es: 'Resultados destacados', en: 'Key results' },
  'projects.title': { es: 'Proyectos', en: 'Projects' },
  'projects.intro': {
    es: 'Agentes que aprenden, planifican y deciden. Cada proyecto, con su código.',
    en: 'Agents that learn, plan and decide. Every project comes with its code.',
  },
  'projects.more': { es: 'También en Kaggle', en: 'Also on Kaggle' },
  'capabilities.title': { es: 'Lo que mejor hago', en: 'What I do best' },
  'capabilities.evidence': { es: 'Dónde verlo', en: 'Where to see it' },
  'capabilities.also': { es: 'También trabajo con', en: 'I also work with' },
  'experience.title': { es: 'Experiencia', en: 'Experience' },
  'experience.present': { es: 'actualidad', en: 'present' },
  'education.title': { es: 'Formación', en: 'Education' },
  'education.photoAlt': {
    es: 'Pedro Luis el día de su graduación, con traje y corbata verde, sonriendo.',
    en: 'Pedro Luis on his graduation day, wearing a suit and a green tie, smiling.',
  },
  'languages.title': { es: 'Idiomas', en: 'Languages' },
  'contact.title': { es: '¿Hablamos?', en: 'Let’s talk.' },
  'contact.text': {
    es: 'Busco un puesto como ingeniero de IA, en modalidad híbrida o presencial, en España o en cualquier país de Europa.',
    en: 'I’m looking for an AI Engineer role, hybrid or on-site, in Spain or anywhere in Europe.',
  },
  'footer.built': {
    es: 'Hecho con Astro, sin JavaScript en el navegador.',
    en: 'Built with Astro, with no JavaScript in the browser.',
  },
  'footer.source': { es: 'Código de esta web', en: 'Source code' },
  'chart.reward': { es: 'Recompensa media por acción', en: 'Mean reward per action' },
  'chart.step': { es: 'Pasos de entrenamiento', en: 'Training steps' },
  'caseStudy.tableOfContents': { es: 'En esta página', en: 'On this page' },
  'caseStudy.links': { es: 'Enlaces', en: 'Links' },
  'cv.title': { es: 'Currículum', en: 'Résumé' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[key][locale];
}
