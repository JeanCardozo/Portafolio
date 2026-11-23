// Single source for contact data and prices. Prices are USD references; see content/pricing.md for the market basis.
export const site = {
  name: 'Jean Cardozo',
  brand: 'JeanCRG',
  phone: '573016227477',
  email: 'jean.cardozo.ramirez.23@gmail.com',
  github: 'https://github.com/JeanCardozo',
  linkedin: 'https://www.linkedin.com/in/jeancardozo/',
  youtube: 'https://www.youtube.com/@JEANCRG',
  city: 'Ibagué, Colombia',
};

// Responsible party for personal data (Decreto 1377/2013 art. 13). Confirm each field before publishing.
export const legal = {
  responsable: 'Jean Cardozo Ramírez',
  trade: 'JeanCRG',
  domicilio: 'Ibagué, Tolima, Colombia (atención virtual)',
  email: 'jean.cardozo.ramirez.23@gmail.com',
  phone: '301 622 7477',
  version: '1.0',
  updated: '27 de octubre de 2026',
};

// TRM on 2026-10-27 (dolar-colombia.com / Banco de la República). Update when quoting.
export const trm = { cop: 3158, date: '27 oct 2026' };

// days = business days [min, max]
export type Tier = { id: string; name: string; from: number; to: number; days: [number, number]; note: string };
export const tiers: Tier[] = [
  { id: 'simple', name: 'Sitio simple', from: 280, to: 600, days: [5, 8], note: 'Una página que lleva visitas a tu WhatsApp.' },
  { id: 'corporativo', name: 'Sitio corporativo', from: 800, to: 1500, days: [10, 15], note: 'Hasta 8 páginas, SEO técnico y contenido que puedes editar.' },
  { id: 'tienda', name: 'Tienda en línea', from: 1300, to: 2600, days: [15, 25], note: 'Catálogo, carrito y pedido por WhatsApp o pago en línea.' },
  { id: 'premium', name: 'Sitio sofisticado', from: 2400, to: 5500, days: [25, 40], note: 'Diseño propio, reservas y panel de administración.' },
  { id: 'medida', name: 'Software a la medida', from: 3000, to: 9000, days: [30, 60], note: 'Aplicación web o móvil, API, panel o integración hecha para tu proceso.' },
];

export const hourly = { from: 20, to: 30 };

export type Addon = { id: string; name: string; from: number; to: number; days: [number, number]; note: string };
export const addons: Addon[] = [
  { id: 'seo', name: 'SEO local para aparecer en tu ciudad', from: 180, to: 400, days: [3, 5], note: 'Ficha de Google, datos estructurados y textos pensados para búsquedas locales' },
  { id: 'agente', name: 'Asistente de WhatsApp con IA', from: 450, to: 1500, days: [5, 10], note: 'Responde, toma datos y te avisa cuando hace falta una persona' },
  { id: 'wa-api', name: 'WhatsApp API oficial lista en pocos días', from: 300, to: 600, days: [3, 5], note: 'Verificación en Meta, número conectado y panel para atender en equipo' },
  { id: 'panel', name: 'Panel de administración', from: 450, to: 1200, days: [5, 10], note: 'Cambias productos, precios y fotos sin pedirme nada' },
  { id: 'pagos', name: 'Pagos en línea', from: 220, to: 550, days: [3, 5], note: 'Tarjeta, PSE y Nequi con una pasarela local' },
];

export const care = { from: 60, to: 120, note: 'hosting, cambios pequeños y monitoreo' };
export const agentMonthly = { from: 60, to: 150 };

export const waLink = (text: string) => `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`;

// Main fixed-price offer: mid of the "simple" tier, in COP at the current TRM, rounded to 50K. Update with TRM.
export const offer = {
  name: 'Sitio web que te trae clientes por WhatsApp',
  usd: 450,
  cop: Math.round((450 * trm.cop) / 50000) * 50000,
  days: tiers[0].days[1],
  upfront: 50,
};
