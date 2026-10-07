import { describe, expect, it } from '@jest/globals';

import { dias, diaSemana, diasEntre, fechaCorta, fechaLarga, haceCuanto, hoyISO, proximaFecha, rango } from '../fechas';

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

describe('haceCuanto', () => {
  it('redondea a minutos, horas o días', () => {
    const ahora = Date.UTC(2026, 9, 6, 12);
    expect(haceCuanto(ahora - 5 * 60_000, ahora)).toBe('hace 5 min');
    expect(haceCuanto(ahora - 3 * 3600_000, ahora)).toBe('hace 3 h');
    expect(haceCuanto(ahora - 26 * 3600_000, ahora)).toBe('hace 1 día');
  });

  it('pone «día» en singular', () => {
    expect(dias(1)).toBe('1 día');
    expect(dias(2)).toBe('2 días');
  });
});

describe('proximaFecha', () => {
  const fechas = [
    { id: 'pasada', inicio: '2026-10-06' },
    { id: 'mesas', inicio: '2026-10-31', fin: '2026-11-04' },
    { id: 'braille', inicio: '2026-11-02' },
    { id: 'campana', inicio: '2026-11-13', fin: '2026-11-27' },
    { id: 'solicitud', inicio: '2026-11-19' },
  ];
  const id = (hoy: string) => proximaFecha(fechas, hoy)?.id;

  it('salta lo pasado y enseña lo que empieza antes', () => {
    expect(id('2026-10-20')).toBe('mesas');
  });

  it('un plazo en curso no tapa otro que vence mientras dura', () => {
    expect(id('2026-11-01')).toBe('braille');
    expect(id('2026-11-03')).toBe('mesas');
    expect(id('2026-11-13')).toBe('campana');
    expect(id('2026-11-14')).toBe('solicitud');
    expect(id('2026-11-20')).toBe('campana');
  });

  it('no devuelve nada cuando todo ha pasado', () => {
    expect(id('2026-12-01')).toBeUndefined();
  });
});
