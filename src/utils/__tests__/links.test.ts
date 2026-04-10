import { describe, it, expect } from 'vitest';
import { WHATSAPP_URL, INSTAGRAM_URL, EMAIL, PHONE } from '../links';

describe('WHATSAPP_URL', () => {
  it('points to wa.me', () => {
    expect(WHATSAPP_URL).toMatch(/^https:\/\/wa\.me\//);
  });

  it('contains the correct phone number', () => {
    expect(WHATSAPP_URL).toContain('573243638746');
  });

  it('includes a pre-filled message', () => {
    expect(WHATSAPP_URL).toContain('text=');
  });
});

describe('INSTAGRAM_URL', () => {
  it('points to the tecnicopa Instagram profile', () => {
    expect(INSTAGRAM_URL).toBe('https://instagram.com/tecnicopa');
  });
});

describe('EMAIL', () => {
  it('is the correct contact address', () => {
    expect(EMAIL).toBe('contacto@tecnicopa.com');
  });
});

describe('PHONE', () => {
  it('is in E.164 format', () => {
    expect(PHONE).toMatch(/^\+\d+$/);
  });

  it('is the correct phone number', () => {
    expect(PHONE).toBe('+573243638746');
  });
});
