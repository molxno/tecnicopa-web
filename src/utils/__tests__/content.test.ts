import { describe, it, expect } from 'vitest';
import { NAV_LINKS, services, plans, reasons, testimonials } from '../content';

describe('NAV_LINKS', () => {
  it('has 5 navigation links', () => {
    expect(NAV_LINKS).toHaveLength(5);
  });

  it('every link has a hash href and a non-empty label', () => {
    for (const link of NAV_LINKS) {
      expect(link.href).toMatch(/^#/);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });

  it('includes all required section anchors', () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    expect(hrefs).toContain('#servicios');
    expect(hrefs).toContain('#por-que');
    expect(hrefs).toContain('#precios');
    expect(hrefs).toContain('#nosotros');
    expect(hrefs).toContain('#contacto');
  });
});

describe('services', () => {
  it('has 4 services', () => {
    expect(services).toHaveLength(4);
  });

  it('every service has a non-empty title, description and icon', () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(0);
      expect(service.description.length).toBeGreaterThan(0);
      expect(service.icon.length).toBeGreaterThan(0);
    }
  });
});

describe('plans', () => {
  it('has 3 pricing plans', () => {
    expect(plans).toHaveLength(3);
  });

  it('exactly one plan is highlighted', () => {
    const highlighted = plans.filter((p) => p.highlighted);
    expect(highlighted).toHaveLength(1);
  });

  it('every plan has required fields and at least one feature', () => {
    for (const plan of plans) {
      expect(plan.name.length).toBeGreaterThan(0);
      expect(plan.price.length).toBeGreaterThan(0);
      expect(plan.description.length).toBeGreaterThan(0);
      expect(plan.cta.length).toBeGreaterThan(0);
      expect(typeof plan.highlighted).toBe('boolean');
      expect(plan.features.length).toBeGreaterThan(0);
    }
  });

  it('first plan is the free Diagnóstico', () => {
    expect(plans[0].price).toBe('Gratis');
    expect(plans[0].highlighted).toBe(false);
  });

  it('highlighted plan is Mantenimiento', () => {
    const highlighted = plans.find((p) => p.highlighted);
    expect(highlighted?.name).toBe('Mantenimiento');
  });
});

describe('reasons', () => {
  it('has 4 reasons', () => {
    expect(reasons).toHaveLength(4);
  });

  it('every reason has a non-empty title and description', () => {
    for (const reason of reasons) {
      expect(reason.title.length).toBeGreaterThan(0);
      expect(reason.description.length).toBeGreaterThan(0);
    }
  });
});

describe('testimonials', () => {
  it('has 3 testimonials', () => {
    expect(testimonials).toHaveLength(3);
  });

  it('every testimonial has name, location, text and service', () => {
    for (const t of testimonials) {
      expect(t.name.length).toBeGreaterThan(0);
      expect(t.location.length).toBeGreaterThan(0);
      expect(t.text.length).toBeGreaterThan(0);
      expect(t.service.length).toBeGreaterThan(0);
    }
  });

  it('includes testimonials from Copacabana and Girardota', () => {
    const locations = testimonials.map((t) => t.location);
    expect(locations).toContain('Copacabana');
    expect(locations).toContain('Girardota');
  });
});
