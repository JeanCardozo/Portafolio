// Shared JSON-LD helpers. Entities are linked by @id so every page points at the same Person and ProfessionalService.
import { site } from './site';

export const ids = (base: string) => ({ person: `${base}/#jean`, org: `${base}/#org`, site: `${base}/#website` });

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (base: string, items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Inicio', path: '/' }, ...items].map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${base}${it.path}` })),
});

export const articleSchema = (base: string, a: { headline: string; description: string; path: string; published: string; modified: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.headline,
  description: a.description,
  inLanguage: 'es-CO',
  datePublished: a.published,
  dateModified: a.modified,
  mainEntityOfPage: `${base}${a.path}`,
  author: { '@id': ids(base).person },
  publisher: { '@id': ids(base).org },
  image: `${base}/og.png`,
});

export const personNode = (base: string) => ({
  '@type': 'Person',
  '@id': ids(base).person,
  name: 'Jean Cardozo Ramírez',
  alternateName: 'JeanCRG',
  jobTitle: 'Desarrollador full-stack',
  url: base,
  email: `mailto:${site.email}`,
  telephone: `+${site.phone}`,
  image: `${base}/icon-512.png`,
  address: { '@type': 'PostalAddress', addressLocality: 'Ibagué', addressRegion: 'Tolima', addressCountry: 'CO' },
  sameAs: [site.linkedin, site.github, site.youtube],
  knowsLanguage: ['es', 'en'],
  knowsAbout: ['Desarrollo web', 'SEO local', 'Tiendas en línea', 'Software a la medida', 'WhatsApp Business API', 'Automatización con n8n', 'React', 'Next.js', 'Astro', 'TypeScript', 'Supabase'],
});
