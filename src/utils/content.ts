export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface Reason {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  service: string;
}

export const NAV_LINKS: NavLink[] = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#por-que', label: '¿Por qué nosotros?' },
  { href: '#precios', label: 'Precios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export const services: Service[] = [
  {
    title: 'Mantenimiento preventivo y correctivo',
    description:
      'Limpieza interna profunda, cambio de pasta térmica y revisión completa del hardware. Tu equipo corre más rápido y dura más años.',
    icon: '🔧',
  },
  {
    title: 'Formateo e instalación de sistema operativo',
    description:
      'Instalamos Windows, Linux o macOS desde cero con todos los drivers, actualizaciones y programas esenciales ya listos.',
    icon: '💿',
  },
  {
    title: 'Eliminación de virus y malware',
    description:
      '¿Tu PC está lento, muestra ventanas raras o se apaga solo? Lo analizamos, eliminamos las amenazas y lo dejamos seguro.',
    icon: '🛡️',
  },
  {
    title: 'Soporte remoto',
    description:
      'Resolvemos problemas de software sin movernos de donde estás. Rápido, seguro y sin desplazamientos.',
    icon: '🖥️',
  },
];

export const plans: Plan[] = [
  {
    name: 'Diagnóstico',
    price: 'Gratis',
    description:
      'Revisamos tu equipo, identificamos el problema y te decimos exactamente qué tiene y cuánto cuesta arreglarlo.',
    features: [
      'Revisión completa de hardware y software',
      'Informe claro y sin tecnicismos',
      'Sin compromiso de reparación',
      'Atención a domicilio en Copacabana',
    ],
    cta: 'Solicitar diagnóstico gratis',
    highlighted: false,
  },
  {
    name: 'Mantenimiento',
    price: 'Desde $30.000',
    description:
      'Limpieza completa, pasta térmica nueva y optimización del sistema. El servicio más pedido por nuestros clientes.',
    features: [
      'Limpieza interna profunda',
      'Cambio de pasta térmica',
      'Optimización del sistema operativo',
      'Garantía escrita incluida',
      'Factura electrónica',
      'Seguimiento a los 7 días',
    ],
    cta: 'Agendar mantenimiento',
    highlighted: true,
  },
  {
    name: 'Formateo completo',
    price: 'Desde $40.000',
    description:
      'Instalación limpia del sistema operativo con drivers, actualizaciones y programas esenciales. Como nuevo.',
    features: [
      'Windows, Linux o macOS',
      'Drivers e instalación completa',
      'Programas esenciales incluidos',
      'Garantía escrita incluida',
      'Factura electrónica',
    ],
    cta: 'Agendar formateo',
    highlighted: false,
  },
];

export const reasons: Reason[] = [
  {
    title: 'Garantía escrita en cada servicio',
    description:
      'Si el problema vuelve dentro del plazo acordado, lo resolvemos sin costo adicional. Cero letra pequeña.',
  },
  {
    title: 'Factura electrónica siempre',
    description:
      'Operamos de forma 100% formal. Cada servicio tiene su factura electrónica ante la DIAN. Transparencia total.',
  },
  {
    title: 'Seguimiento a los 7 días',
    description:
      'Después de cada servicio te contactamos para asegurarnos de que todo sigue funcionando. No desaparecemos una vez cobrado.',
  },
  {
    title: 'Somos de acá, conocemos el municipio',
    description:
      'Vivimos y trabajamos en Copacabana. Llegamos rápido, sin cobros extra de desplazamiento desde Medellín.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'María T.',
    location: 'Copacabana',
    text: 'Mi computador tardaba 15 minutos en encender. Lo revisaron en casa, hicieron la limpieza y quedó como nuevo. Me dieron la garantía por escrito y todo. 10 de 10.',
    service: 'Mantenimiento preventivo',
  },
  {
    name: 'Carlos R.',
    location: 'Copacabana',
    text: 'Tenía el equipo lleno de virus y casi no funcionaba. Lo formatearon, instalaron Windows y dejaron todo listo con mis programas. Encima emiten factura electrónica, eso me genera mucha confianza.',
    service: 'Formateo + eliminación de virus',
  },
  {
    name: 'Luisa M.',
    location: 'Girardota',
    text: 'Necesitaba soporte urgente para una presentación y me atendieron por remoto en menos de una hora. Resolvieron el problema sin que yo tuviera que llevar el equipo a ningún lado. Excelente.',
    service: 'Soporte remoto',
  },
];
