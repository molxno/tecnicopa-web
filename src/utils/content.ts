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
      'Limpieza interna, cambio de pasta térmica y revisión completa para que tu equipo dure muchos años más.',
    icon: '🔧',
  },
  {
    title: 'Formateo e instalación de sistema operativo',
    description:
      'Instalamos Windows o Linux desde cero, con todos los drivers y programas esenciales listos para usar.',
    icon: '💿',
  },
  {
    title: 'Eliminación de virus y malware',
    description:
      '¿Tu equipo está lento o se comporta raro? Lo analizamos, eliminamos amenazas y lo dejamos seguro.',
    icon: '🛡️',
  },
  {
    title: 'Soporte remoto',
    description:
      'Resolvemos problemas de software sin necesidad de desplazamiento — rápido, seguro y desde la comodidad de tu casa.',
    icon: '🖥️',
  },
];

export const plans: Plan[] = [
  {
    name: 'Diagnóstico',
    price: 'Gratis',
    description:
      'Evaluamos tu equipo y te decimos exactamente qué tiene y cuánto costará arreglarlo.',
    features: [
      'Revisión de hardware y software',
      'Informe verbal del diagnóstico',
      'Sin compromiso de reparación',
    ],
    cta: 'Solicitar diagnóstico',
    highlighted: false,
  },
  {
    name: 'Mantenimiento',
    price: 'Desde $60.000',
    description:
      'Limpieza completa, pasta térmica nueva y optimización para que tu equipo vuele de nuevo.',
    features: [
      'Limpieza interna profunda',
      'Cambio de pasta térmica',
      'Optimización del sistema',
      'Garantía escrita',
      'Factura electrónica',
    ],
    cta: 'Agendar mantenimiento',
    highlighted: true,
  },
  {
    name: 'Formateo',
    price: 'Desde $80.000',
    description:
      'Instalación limpia de Windows o Linux con drivers y programas básicos incluidos.',
    features: [
      'Instalación de sistema operativo',
      'Drivers completos',
      'Programas esenciales',
      'Garantía escrita',
      'Factura electrónica',
    ],
    cta: 'Agendar formateo',
    highlighted: false,
  },
];

export const reasons: Reason[] = [
  {
    title: 'Garantía escrita',
    description:
      'Todos nuestros servicios incluyen garantía por escrito. Si el problema vuelve en el plazo acordado, lo resolvemos sin costo.',
  },
  {
    title: 'Factura electrónica',
    description:
      'Emitimos factura electrónica por cada servicio. Trabajamos formal, con transparencia y respaldo legal.',
  },
  {
    title: 'Seguimiento post-servicio',
    description:
      'A los 7 días te contactamos para asegurarnos de que todo sigue funcionando bien. Tu tranquilidad importa.',
  },
  {
    title: 'Servicio a domicilio',
    description:
      'Vamos donde estés en Copacabana y municipios cercanos. Sin filas, sin desplazamientos innecesarios.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'María T.',
    location: 'Copacabana',
    text: 'Me arreglaron el computador en casa el mismo día. Vinieron a tiempo, explicaron todo con claridad y me dieron garantía por escrito. Muy profesionales.',
    service: 'Mantenimiento',
  },
  {
    name: 'Carlos R.',
    location: 'Copacabana',
    text: 'Tenía el equipo lleno de virus y casi no prendía. Lo formatearon, instalaron Windows y quedó como nuevo. Además emiten factura, eso me da mucha confianza.',
    service: 'Formateo + antivirus',
  },
  {
    name: 'Luisa M.',
    location: 'Girardota',
    text: 'Excelente servicio. Me atendieron por soporte remoto en menos de una hora y resolvieron el problema sin necesidad de llevar el equipo. Lo recomiendo.',
    service: 'Soporte remoto',
  },
];
