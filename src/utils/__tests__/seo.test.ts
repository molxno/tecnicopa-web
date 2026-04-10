import { describe, it, expect } from 'vitest';
import { resolveOgImageUrl, SITE_URL, DEFAULT_OG_IMAGE, DEFAULT_ROBOTS } from '../seo';

describe('resolveOgImageUrl', () => {
  it('prepends siteURL for a relative path', () => {
    expect(resolveOgImageUrl('/logo.png')).toBe('https://tecnicopa.com/logo.png');
  });

  it('returns https:// absolute URLs unchanged', () => {
    expect(resolveOgImageUrl('https://example.com/img.png')).toBe(
      'https://example.com/img.png',
    );
  });

  it('returns http:// absolute URLs unchanged', () => {
    expect(resolveOgImageUrl('http://example.com/img.png')).toBe(
      'http://example.com/img.png',
    );
  });

  it('uses a custom siteURL when provided', () => {
    expect(resolveOgImageUrl('/img.png', 'https://custom.com')).toBe(
      'https://custom.com/img.png',
    );
  });
});

describe('constants', () => {
  it('SITE_URL is the tecnicopa.com domain', () => {
    expect(SITE_URL).toBe('https://tecnicopa.com');
  });

  it('DEFAULT_OG_IMAGE is /logo.png', () => {
    expect(DEFAULT_OG_IMAGE).toBe('/logo.png');
  });

  it('DEFAULT_ROBOTS allows indexing', () => {
    expect(DEFAULT_ROBOTS).toBe('index, follow');
  });
});
