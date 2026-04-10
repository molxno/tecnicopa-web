import { describe, it, expect } from 'vitest';
import { getCurrentYear } from '../date';

describe('getCurrentYear', () => {
  it('returns a number', () => {
    expect(typeof getCurrentYear()).toBe('number');
  });

  it('matches the native Date year', () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });

  it('is a plausible calendar year', () => {
    const year = getCurrentYear();
    expect(year).toBeGreaterThanOrEqual(2024);
    expect(year).toBeLessThanOrEqual(2100);
  });
});
