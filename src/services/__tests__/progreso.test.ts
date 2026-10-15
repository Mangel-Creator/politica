import { describe, expect, it } from '@jest/globals';

import { leerProgreso, PROGRESO_VACIO, PUNTOS, puntosDe, racha, registrar, siguienteLeccion } from '../progreso';

describe('racha', () => {
  it('cuenta los días seguidos hasta hoy', () => {
    expect(racha(['2026-10-13', '2026-10-14', '2026-10-15'], '2026-10-15')).toBe(3);
  });

  it('sigue viva si el último día fue ayer', () => {
    expect(racha(['2026-10-13', '2026-10-14'], '2026-10-15')).toBe(2);
  });

  it('se pierde si pasó un día entero sin actividad', () => {
    expect(racha(['2026-10-12', '2026-10-13'], '2026-10-15')).toBe(0);
  });

  it('se corta en el primer hueco y aguanta el cambio de mes', () => {
    expect(racha(['2026-09-28', '2026-09-30', '2026-10-01', '2026-10-01'], '2026-10-01')).toBe(2);
    expect(racha([], '2026-10-15')).toBe(0);
  });
});

describe('registrar', () => {
  const sesion = { leccionId: 'papeletas', aciertos: 5, total: 6, fallados: ['p-2'], acertados: ['p-1'] };

  it('suma puntos, apunta el día y la lección, y guarda los fallos', () => {
    const p = registrar(PROGRESO_VACIO, sesion, '2026-10-15');
    expect(p.puntos).toBe(PUNTOS.leccion);
    expect(p.dias).toEqual(['2026-10-15']);
    expect(p.lecciones.papeletas).toEqual({ mejor: 5, total: 6, veces: 1, ultima: '2026-10-15' });
    expect(p.fallos).toEqual(['p-2']);
  });

  it('una lección perfecta da puntos extra; el repaso da menos', () => {
    expect(puntosDe({ ...sesion, aciertos: 6, fallados: [] })).toBe(PUNTOS.leccion + PUNTOS.perfecta);
    expect(puntosDe({ aciertos: 3, total: 10, fallados: [], acertados: [] })).toBe(PUNTOS.repaso);
  });

  it('guarda el mejor resultado y quita de los fallos lo acertado a la primera', () => {
    const uno = registrar(PROGRESO_VACIO, sesion, '2026-10-15');
    const dos = registrar(uno, { ...sesion, aciertos: 3, fallados: [], acertados: ['p-2'] }, '2026-10-15');
    expect(dos.lecciones.papeletas.mejor).toBe(5);
    expect(dos.lecciones.papeletas.veces).toBe(2);
    expect(dos.fallos).toEqual([]);
    expect(dos.dias).toEqual(['2026-10-15']);
  });

  it('no cambia el progreso de partida', () => {
    registrar(PROGRESO_VACIO, sesion, '2026-10-15');
    expect(PROGRESO_VACIO.puntos).toBe(0);
    expect(PROGRESO_VACIO.dias).toEqual([]);
  });
});

describe('siguienteLeccion', () => {
  it('es la primera del camino sin hacer', () => {
    const p = registrar(PROGRESO_VACIO, { leccionId: 'a', aciertos: 1, total: 1, fallados: [], acertados: [] }, 'x');
    expect(siguienteLeccion(['a', 'b', 'c'], p)).toBe('b');
    expect(siguienteLeccion(['a'], p)).toBeUndefined();
  });
});

describe('leerProgreso', () => {
  it('vuelve a cero si no hay nada, si está roto o es de otra versión', () => {
    expect(leerProgreso(null)).toBe(PROGRESO_VACIO);
    expect(leerProgreso('{roto')).toBe(PROGRESO_VACIO);
    expect(leerProgreso('{"version":2}')).toBe(PROGRESO_VACIO);
  });

  it('lee lo guardado y limpia lo que no encaja', () => {
    const p = leerProgreso('{"version":1,"puntos":15,"dias":["2026-10-15",3],"lecciones":{},"fallos":"x"}');
    expect(p.puntos).toBe(15);
    expect(p.dias).toEqual(['2026-10-15']);
    expect(p.fallos).toEqual([]);
  });
});
