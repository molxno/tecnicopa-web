export const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TecniCopa',
  description: 'Soporte técnico de computadores a domicilio en Copacabana, Antioquia',
  url: 'https://tecnicopa.com',
  telephone: '+573243638746',
  email: 'contacto@tecnicopa.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Copacabana',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  areaServed: [
    { '@type': 'City', name: 'Copacabana' },
    { '@type': 'City', name: 'Girardota' },
    { '@type': 'City', name: 'Bello' },
  ],
  priceRange: '$',
  serviceType: 'Computer Repair',
  image: 'https://tecnicopa.com/logo.png',
  sameAs: ['https://instagram.com/tecnicopa'],
  founder: {
    '@type': 'Person',
    name: 'Santiago Molano',
  },
};
