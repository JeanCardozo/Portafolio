// Verified facts only: sources are the projects' own READMEs/code and Lighthouse runs on 2026-11-23 (mobile, simulated throttling).
export type Case = {
  slug: string; name: string; business: string; url: string; repo?: string; shot: string; alt: string;
  description: string; stack: string[]; problem: string; decisions: string[]; seo: string[]; security: string[];
  pending: string[]; lighthouse: { perf: number; a11y: number; bp: number; seo: number; lcp: string };
};

export const cases: Case[] = [
  {
    slug: 'tecnicenter',
    name: 'Tecni Center',
    business: 'Taller de reparación de televisores y equipos de sonido en Ibagué, atendido por su único dueño',
    url: 'https://tecnicenter.netlify.app',
    repo: 'https://github.com/JeanCardozo/TecniCenter',
    shot: '/casos/tecnicenter-desktop.jpg',
    alt: 'Página de inicio de Tecni Center con la orden de servicio interactiva',
    description: 'Caso de estudio: sitio web de un taller de TV en Ibagué con SEO local y una orden de servicio que escribe el mensaje de WhatsApp.',
    stack: ['Astro 7', 'TypeScript', 'CSS propio', 'Tipografías autoalojadas', 'Netlify'],
    problem: 'El negocio ya aparecía en Google con una ficha de 5,0 de calificación y 25 reseñas, y recibía búsquedas como «televisor» y «samsung», pero no tenía sitio web: no había a dónde llevar a quien buscaba, ni un canal de contacto directo, ni páginas legales, ni medición.',
    decisions: [
      'Investigué primero la ficha de Google, Waze y las reseñas reales para definir el público (hogares con un TV dañado) y su miedo principal: que le cobren de más o no se lo arreglen. Las reseñas repiten «honestidad» y «garantía», así que son el centro del mensaje.',
      'Dirección de arte «la orden de servicio»: la web se parece al comprobante de un taller, con papel, tinta y los colores de una resistencia.',
      'En el inicio hay una orden de servicio interactiva: el cliente elige equipo, marca y falla, y el mensaje de WhatsApp se escribe solo. Sin JavaScript, el botón sigue abriendo WhatsApp.',
      'Botones de WhatsApp y llamada en el inicio, en el cierre y en una barra fija en el celular. Reseñas con las palabras exactas de los clientes. Sin precios, testimonios ni cifras inventadas.',
    ],
    seo: [
      'Datos estructurados del negocio (ElectronicsStore) con dirección, coordenadas y horario, y FAQPage.',
      'Sitemap, robots.txt, URL canónica e imagen para compartir.',
      'No publiqué aggregateRating propio: Google ignora las valoraciones que el negocio se da a sí mismo en datos estructurados.',
      'Analítica solo después de que la persona acepte; etiqueta de Search Console por variable de entorno.',
    ],
    security: ['Cabeceras de seguridad (CSP, HSTS, X-Frame-Options, Referrer-Policy).', 'Despliegue desde la línea de comandos del dueño del proyecto: un pull request de un tercero no publica nada.'],
    pending: ['Fotos propias del taller.', 'Revisión legal de las políticas por un abogado.'],
    lighthouse: { perf: 98, a11y: 100, bp: 100, seo: 100, lcp: '1,2 s' },
  },
  {
    slug: 'la-tertulia',
    name: 'La Tertulia Café',
    business: 'Café y panadería en Ibagué con pedidos por WhatsApp',
    url: 'https://la-tertulia-cafe.vercel.app',
    shot: '/casos/tertulia-desktop.jpg',
    alt: 'Página de inicio de La Tertulia Café',
    description: 'Caso de estudio: web de pedidos por WhatsApp para una panadería de Ibagué, con carrito, domicilio con mapa y panel de administración protegido.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'Supabase', 'Zod', 'Vercel'],
    problem: 'La carta cambia cada día y los pedidos llegaban por mensajes sueltos, sin un lugar donde el cliente armara su pedido ni donde el dueño actualizara productos y precios sin depender de nadie.',
    decisions: [
      'El cliente arma el carrito, elige recogida o domicilio y marca su dirección en un mapa; el pedido sale ya escrito hacia WhatsApp.',
      'El sitio público es estático con caché de una hora que se invalida al editar desde el panel, para que cargue rápido incluso en celulares de gama baja.',
      'El dueño edita productos, precios y fotos desde un panel protegido, sin tocar código.',
      'El mapa solo se carga si el cliente elige domicilio; es la única conexión a un tercero del sitio público.',
    ],
    seo: [
      'Datos estructurados de panadería y cafetería (Bakery, CafeOrCoffeeShop) con dirección, coordenadas y horario.',
      'Sitemap, robots.txt, URL canónica, imagen para compartir y manifiesto de aplicación instalable.',
      'Políticas de privacidad, términos y cookies, y analítica solo con consentimiento.',
    ],
    security: [
      'Lectura pública con reglas de seguridad por fila (RLS); la escritura exige sesión y una fila de administrador verificada en cada acción del servidor, además del proxy.',
      'Entradas validadas con Zod; las imágenes se validan por su firma binaria y pesan máximo 2 MB.',
      'Cabeceras CSP, HSTS, X-Frame-Options y Permissions-Policy; acceso del panel protegido con CAPTCHA (Turnstile).',
    ],
    pending: ['Dominio propio.', 'Fotos reales de todos los productos.', 'Revisión legal de las políticas por un abogado.'],
    lighthouse: { perf: 97, a11y: 100, bp: 100, seo: 100, lcp: '1,5 s' },
  },
];
