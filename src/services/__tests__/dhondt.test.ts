import { describe, expect, it } from '@jest/globals';

import { dhondt } from '../dhondt';

describe('dhondt', () => {
  it('reproduce el ejemplo del artículo 163 de la LOREG', () => {
    const r = dhondt(
      [
        { id: 'A', votos: 168000 },
        { id: 'B', votos: 104000 },
        { id: 'C', votos: 72000 },
        { id: 'D', votos: 64000 },
        { id: 'E', votos: 40000 },
        { id: 'F', votos: 32000 },
      ],
      8,
    );
    expect(r.escanos).toEqual({ A: 4, B: 2, C: 1, D: 1, E: 0, F: 0 });
    expect(r.excluidas).toEqual([]);
    expect(r.sorteo).toBe(false);
  });

  it('deja fuera a quien no llega al 3 % de los votos válidos, blancos incluidos', () => {
    const r = dhondt(
      [
        { id: 'A', votos: 900 },
        { id: 'B', votos: 31 },
      ],
      5,
      { blancos: 100 },
    );
    // 3 % de 1031 = 30,93: B entra con 31.
    expect(r.excluidas).toEqual([]);
    const sinBlancos = dhondt(
      [
        { id: 'A', votos: 1000 },
        { id: 'B', votos: 30 },
      ],
      5,
      { blancos: 1 },
    );
    expect(sinBlancos.excluidas).toEqual(['B']);
    expect(sinBlancos.escanos.B).toBe(0);
  });

  it('en empate de cocientes gana quien tiene más votos', () => {
    // A/2 = 50 y B/1 = 50: el segundo escaño es para A, que suma más votos.
    const r = dhondt(
      [
        { id: 'A', votos: 100 },
        { id: 'B', votos: 50 },
      ],
      2,
    );
    expect(r.escanos).toEqual({ A: 2, B: 0 });
  });

  it('avisa cuando haría falta sorteo', () => {
    const r = dhondt(
      [
        { id: 'A', votos: 100 },
        { id: 'B', votos: 100 },
      ],
      1,
    );
    expect(r.sorteo).toBe(true);
  });
});
