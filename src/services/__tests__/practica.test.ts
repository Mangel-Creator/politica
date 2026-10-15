import { describe, expect, it } from '@jest/globals';

import { actual, desordenar, elegirRepaso, empezar, responder, resultado, terminada } from '../practica';

/** Azar fijo para que los tests den siempre lo mismo. */
function azarFijo(semilla = 1) {
  let x = semilla;
  return () => {
    x = (x * 16807) % 2147483647;
    return (x - 1) / 2147483646;
  };
}

describe('ronda de ejercicios', () => {
  it('sin fallos, termina tras el último y todo cuenta como acierto', () => {
    let r = empezar(['a', 'b']);
    expect(actual(r)).toBe('a');
    r = responder(r, true);
    r = responder(r, true);
    expect(terminada(r)).toBe(true);
    expect(resultado(r)).toEqual({ total: 2, aciertos: 2, fallados: [], acertados: ['a', 'b'] });
  });

  it('un fallo vuelve a salir al final una sola vez', () => {
    let r = empezar(['a', 'b']);
    r = responder(r, false); // falla a
    r = responder(r, true); // b
    expect(actual(r)).toBe('a');
    r = responder(r, false); // vuelve a fallar a: no se repite más
    expect(terminada(r)).toBe(true);
    expect(resultado(r)).toEqual({ total: 2, aciertos: 1, fallados: ['a'], acertados: ['b'] });
  });

  it('acertar en la repetición no cuenta como acierto a la primera', () => {
    let r = empezar(['a']);
    r = responder(r, false);
    r = responder(r, true);
    expect(terminada(r)).toBe(true);
    expect(resultado(r).aciertos).toBe(0);
  });
});

describe('desordenar', () => {
  it('nunca deja la lista en el orden bueno', () => {
    for (let s = 1; s < 50; s++) {
      const d = desordenar([1, 2, 3], azarFijo(s));
      expect(d).not.toEqual([1, 2, 3]);
      expect([...d].sort()).toEqual([1, 2, 3]);
    }
  });
});

describe('elegirRepaso', () => {
  it('pone primero los fallados que existen y no repite', () => {
    const r = elegirRepaso(['a', 'b', 'c', 'd'], ['c', 'zz'], 3, azarFijo(7));
    expect(r[0]).toBe('c');
    expect(r).toHaveLength(3);
    expect(new Set(r).size).toBe(3);
    expect(r).not.toContain('zz');
  });
});
