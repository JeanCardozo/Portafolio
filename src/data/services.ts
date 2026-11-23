// One entry per service landing page (/servicios/<slug>). Each page targets one search intent.
// Claims must stay inside content/facts.md: no invented clients, numbers or certifications.
export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  forWho: string[];
  includes: string[];
  from: number;
  to: number;
  timeline: string;
  proof: { label: string; href: string }[];
  faq: { q: string; a: string }[];
  wa: string;
};

export const services: Service[] = [
  {
    slug: 'paginas-web-ibague',
    name: 'Páginas web para negocios',
    title: 'Páginas web en Ibagué con SEO local · Jean Cardozo',
    description: 'Páginas web rápidas para negocios de Ibagué y Colombia: SEO local, WhatsApp integrado y diseño propio. Desde USD 280, entrega en 5 a 8 días hábiles.',
    h1: 'Páginas web en Ibagué que aparecen en Google y llevan clientes a tu WhatsApp',
    intro: 'Tecni Center tenía 5,0 de calificación y 25 reseñas en Google, pero ningún sitio a dónde llevar a quien lo buscaba; con su web, junto a La Tertulia, llegaron más de 50 clientes nuevos en las primeras semanas. Un negocio sin sitio propio depende de redes y fichas de terceros. Diseño y programo páginas rápidas, con datos estructurados, sitemap y textos pensados para lo que tus clientes escriben en Google, y con botones de WhatsApp y llamada en cada pantalla.',
    forWho: ['Talleres, tiendas de barrio, cafeterías y consultorios con ficha en Google pero sin web.', 'Profesionales independientes que necesitan verse serios y recibir contactos.', 'Negocios que hoy pagan pauta y mandan el tráfico a un perfil de red social.'],
    includes: ['Diseño propio, adaptado a celular', 'SEO técnico: título, descripción, datos estructurados, sitemap y URL canónica', 'Botón de WhatsApp con mensaje ya escrito', 'Políticas legales básicas y aviso de cookies', 'Contenido que puedes editar o que yo cambio por ti', 'Dominio, cuentas y código a tu nombre'],
    from: 280,
    to: 1500,
    timeline: 'Simple: 5 a 8 días hábiles. Corporativo: 2 a 3 semanas.',
    proof: [{ label: 'Tecni Center, taller de TV en Ibagué', href: 'https://tecnicenter.netlify.app' }],
    faq: [
      { q: '¿Cuánto cuesta una página web en Colombia?', a: 'En el mercado colombiano una web básica va de 0,7 a 2 millones de pesos y una corporativa de 1 a 5 millones. Mis precios están en dólares: desde USD 280 para un sitio simple y desde USD 800 para uno corporativo.' },
      { q: '¿Incluye SEO?', a: 'Sí. Cada sitio sale con SEO técnico aplicado. El SEO local ampliado, con ficha de Google y textos por zona, se suma desde USD 180.' },
      { q: '¿Quién es dueño del sitio?', a: 'Tú. El dominio, las cuentas y el código quedan a tu nombre y se deja escrito en la propuesta.' },
    ],
    wa: 'Hola Jean, quiero cotizar una página web para mi negocio.',
  },
  {
    slug: 'tiendas-en-linea-colombia',
    name: 'Tiendas en línea',
    title: 'Tienda en línea en Colombia con WhatsApp · Jean Cardozo',
    description: 'Tiendas en línea para negocios colombianos: carrito, pedido por WhatsApp, domicilio con mapa y pagos locales. Desde USD 1.300, en 3 a 5 semanas.',
    h1: 'Tienda en línea para vender en Colombia con pedido por WhatsApp o pago en línea',
    intro: 'El comercio electrónico en Colombia creció 22,2% en transacciones en el primer trimestre de 2026, según la Cámara Colombiana de Comercio Electrónico. Hago tiendas con catálogo, carrito, recogida o domicilio, y un panel para que cambies productos y precios tú mismo.',
    forWho: ['Panaderías, tiendas y restaurantes con carta que cambia cada día.', 'Marcas pequeñas que venden por Instagram y quieren un catálogo propio.', 'Negocios que ya atienden pedidos por WhatsApp y los quieren ordenados.'],
    includes: ['Catálogo con categorías y fotos', 'Carrito y pedido ya escrito para WhatsApp', 'Recogida o domicilio con mapa', 'Panel de administración protegido', 'Pagos con tarjeta, PSE y Nequi (opcional)', 'SEO local y datos estructurados del negocio'],
    from: 1300,
    to: 2600,
    timeline: '3 a 5 semanas desde que tengo catálogo, fotos y anticipo.',
    proof: [{ label: 'La Tertulia Café, pedidos por WhatsApp en Ibagué', href: 'https://la-tertulia-cafe.vercel.app' }],
    faq: [
      { q: '¿Puedo cambiar los productos yo mismo?', a: 'Sí. El panel de administración permite crear, editar y ocultar productos y cambiar fotos y precios; los cambios se publican solos.' },
      { q: '¿Necesito pasarela de pagos?', a: 'No es obligatoria. Muchos negocios empiezan con pedido por WhatsApp y suman pagos en línea después, desde USD 220.' },
      { q: '¿Se puede pedir a domicilio?', a: 'Sí. El cliente elige recogida o domicilio y marca su dirección en un mapa.' },
    ],
    wa: 'Hola Jean, quiero cotizar una tienda en línea.',
  },
  {
    slug: 'asistente-whatsapp-ia',
    name: 'Asistentes de WhatsApp con IA',
    title: 'Asistente de WhatsApp con IA para negocios · Jean Cardozo',
    description: 'Asistente de WhatsApp con IA que responde, toma pedidos o citas y pasa a una persona cuando hace falta. API oficial de Meta, n8n y Supabase. Desde USD 450.',
    h1: 'Un asistente de WhatsApp con IA que responde por ti y te avisa cuando hace falta una persona',
    intro: 'El 87% de las mipymes colombianas vende por WhatsApp y solo el 25% tiene herramientas de gestión (Chately). Muchos pierden clientes que preguntan y nadie vuelve a escribirles. Conecto la API oficial de Meta con n8n y un modelo de IA que responde con la información de tu negocio, toma datos y deriva a una persona cuando el caso lo requiere.',
    forWho: ['Negocios que reciben muchas preguntas repetidas: horarios, precios, disponibilidad.', 'Clínicas, barberías y servicios con citas que se olvidan o no se confirman.', 'Comercios que quieren recordar y dar seguimiento a quien no compró.'],
    includes: ['Diagnóstico de tus conversaciones', 'Asistente con la información de tu negocio', 'Paso a una persona cuando no sabe o el cliente lo pide', 'Tope de mensajes por día para controlar el costo', 'Reporte semanal de conversaciones', 'Verificación de firma de cada mensaje y datos aislados por negocio'],
    from: 450,
    to: 1500,
    timeline: '1 a 2 semanas, más una mensualidad de USD 60 a 150 según uso.',
    proof: [],
    faq: [
      { q: '¿Qué pasa si la IA responde algo incorrecto?', a: 'El asistente solo usa la información que tú le das, tiene tope de mensajes y avisa a una persona cuando no sabe. Revisas las conversaciones en un reporte semanal.' },
      { q: '¿Necesito cambiar mi número de WhatsApp?', a: 'Se trabaja con la API oficial de Meta. Te explico en la llamada inicial las opciones para tu número actual.' },
      { q: '¿Tienen casos de clientes?', a: 'El sistema está funcionando de punta a punta, pero todavía no tiene clientes de pago. Te hago una demo en vivo antes de que decidas.' },
    ],
    wa: 'Hola Jean, quiero cotizar un asistente de WhatsApp con IA.',
  },
  {
    slug: 'software-a-la-medida',
    name: 'Software a la medida',
    title: 'Software a la medida: apps y paneles · Jean Cardozo',
    description: 'Desarrollo full-stack a la medida: apps móviles y web, paneles de administración e integraciones con React, Node y Supabase. Desde USD 3.000.',
    h1: 'Software a la medida: aplicaciones, paneles de administración e integraciones',
    intro: 'Si tu proceso vive en hojas de cálculo, mensajes y llamadas, puedo convertirlo en una aplicación con usuarios, roles y datos seguros. Trabajo de punta a punta: base de datos, API, aplicación web o móvil y despliegue.',
    forWho: ['Empresas que necesitan una herramienta interna: inventario, pedidos, reservas, reportes.', 'Emprendedores que quieren un primer producto funcionando para validar su idea.', 'Agencias y equipos que necesitan un desarrollador full-stack por proyecto o por horas.'],
    includes: ['Análisis de requerimientos y alcance por escrito', 'Aplicación web o móvil (React, Next.js, React Native)', 'API y base de datos (Node, TypeScript, PostgreSQL, Supabase)', 'Roles, permisos y aislamiento de datos por reglas en la base', 'Integraciones: WhatsApp, pagos, correo, hojas de cálculo', 'Pruebas, documentación y entrega del código'],
    from: 3000,
    to: 9000,
    timeline: '5 a 12 semanas según alcance. Para equipos: por horas, USD 20 a 30.',
    proof: [{ label: 'Fresko: plataforma multi-tenant en desarrollo', href: '/#casos' }],
    faq: [
      { q: '¿Qué tecnologías usas?', a: 'React, Next.js, Astro, React Native con Expo, Node, TypeScript, PostgreSQL y Supabase, más n8n para automatizaciones.' },
      { q: '¿Trabajas por horas o por proyecto?', a: 'Por proyecto con alcance cerrado, o por horas para agencias y equipos que necesitan refuerzo. Te doy la propuesta por escrito antes de empezar.' },
      { q: '¿Y si ya tengo algo a medias?', a: 'Reviso lo que hay, te digo con honestidad qué conviene conservar y qué rehacer, y cotizo solo lo necesario.' },
    ],
    wa: 'Hola Jean, quiero cotizar un desarrollo de software a la medida.',
  },
];
