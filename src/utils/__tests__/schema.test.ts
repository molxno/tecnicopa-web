import { describe, it, expect } from 'vitest';
import { schemaOrg } from '../schema';

describe('schemaOrg', () => {
  it('has the schema.org @context', () => {
    expect(schemaOrg['@context']).toBe('https://schema.org');
  });

  it('is a LocalBusiness', () => {
    expect(schemaOrg['@type']).toBe('LocalBusiness');
  });

  it('has the correct business name', () => {
    expect(schemaOrg.name).toBe('TecniCopa');
  });

  it('has the correct URL', () => {
    expect(schemaOrg.url).toBe('https://tecnicopa.com');
  });

  it('has the correct telephone', () => {
    expect(schemaOrg.telephone).toBe('+573243638746');
  });

  it('has the correct email', () => {
    expect(schemaOrg.email).toBe('contacto@tecnicopa.com');
  });

  it('has a PostalAddress in Copacabana, Antioquia, CO', () => {
    expect(schemaOrg.address['@type']).toBe('PostalAddress');
    expect(schemaOrg.address.addressLocality).toBe('Copacabana');
    expect(schemaOrg.address.addressRegion).toBe('Antioquia');
    expect(schemaOrg.address.addressCountry).toBe('CO');
  });

  it('lists 3 served cities', () => {
    expect(schemaOrg.areaServed).toHaveLength(3);
  });

  it('areaServed includes Copacabana, Girardota and Bello', () => {
    const names = schemaOrg.areaServed.map((c) => c.name);
    expect(names).toContain('Copacabana');
    expect(names).toContain('Girardota');
    expect(names).toContain('Bello');
  });

  it('has $ priceRange', () => {
    expect(schemaOrg.priceRange).toBe('$');
  });

  it('has the logo image URL', () => {
    expect(schemaOrg.image).toBe('https://tecnicopa.com/logo.png');
  });

  it('lists Instagram in sameAs', () => {
    expect(schemaOrg.sameAs).toContain('https://instagram.com/tecnicopa');
  });

  it('has a Person founder', () => {
    expect(schemaOrg.founder['@type']).toBe('Person');
    expect(schemaOrg.founder.name).toBe('Santiago Molano');
  });
});
