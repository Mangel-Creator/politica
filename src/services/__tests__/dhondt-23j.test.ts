import { describe, expect, it } from '@jest/globals';

import { dhondt } from '../dhondt';
import provincias from './congreso-202307.json';

// Votos oficiales del 23J por circunscripción (Infoelectoral, fichero 02202307_TOTA.zip),
// sacados con scripts/infoelectoral/provincias.mjs.
describe('dhondt con los resultados oficiales del 23J', () => {
  it('están las 52 circunscripciones y suman 350 escaños', () => {
    expect(provincias).toHaveLength(52);
    expect(provincias.reduce((s, p) => s + p.escanos, 0)).toBe(350);
  });

  it.each(provincias.map((p) => [p.nombre, p] as const))('%s: da los mismos escaños que el escrutinio', (_, p) => {
    const r = dhondt(p.candidaturas, p.escanos, { blancos: p.blancos });
    const oficial = Object.fromEntries(p.candidaturas.map((c) => [c.id, c.electos]));
    expect(r.escanos).toEqual(oficial);
    expect(r.sorteo).toBe(false);
  });
});
