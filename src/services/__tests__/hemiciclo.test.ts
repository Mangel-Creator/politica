import { describe, expect, it } from '@jest/globals';

import { asientosHemiciclo } from '../hemiciclo';

describe('asientosHemiciclo', () => {
  it('coloca los 350 escaños dentro del semicírculo, de izquierda a derecha', () => {
    const a = asientosHemiciclo(350, 10);
    expect(a).toHaveLength(350);
    a.forEach(({ x, y }) => {
      expect(y).toBeGreaterThanOrEqual(-1e-9);
      expect(Math.hypot(x, y)).toBeLessThanOrEqual(1 + 1e-9);
    });
    expect(a[0].x).toBeLessThan(0);
    expect(a[349].x).toBeGreaterThan(0);
  });
});
