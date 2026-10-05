import { describe, expect, it } from '@jest/globals';

import { diaSemana, diasEntre, fechaCorta, fechaLarga, hoyISO, rango } from '../fechas';

describe('fechas', () => {
  it('cuenta los días aunque haya cambio de hora por medio (25 de octubre de 2026)', () => {
    expect(diasEntre('2026-10-05', '2026-11-29')).toBe(55);
    expect(diasEntre('2026-11-29', '2026-11-29')).toBe(0);
    expect(diasEntre('2026-11-30', '2026-11-29')).toBe(-1);
  });

  it('el 29 de noviembre de 2026 es domingo', () => {
    expect(diaSemana('2026-11-29')).toBe('domingo');
  });

  it('escribe las fechas en español', () => {
    expect(fechaLarga('2026-11-29')).toBe('29 de noviembre');
    expect(fechaLarga('2026-11-29', true)).toBe('29 de noviembre de 2026');
    expect(fechaCorta('2026-10-05')).toBe('05/10/2026');
  });

  it('escribe los plazos', () => {
    expect(rango('2026-11-13', '2026-11-27')).toBe('Del 13 al 27 de noviembre');
    expect(rango('2026-10-30', '2026-11-02')).toBe('Del 30 de octubre al 2 de noviembre');
    expect(rango('2026-11-28')).toBe('28 de noviembre');
  });

  it('da el día de hoy con ceros a la izquierda', () => {
    expect(hoyISO(new Date(2026, 0, 5, 23, 59))).toBe('2026-01-05');
  });
});
