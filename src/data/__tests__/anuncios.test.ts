import { describe, expect, it } from '@jest/globals';

import { ANUNCIOS_DESDE, Anuncios, Revisiones } from '../anuncios';
import { Partidos } from '../partidos';

const FECHA = /^\d{4}-\d{2}-\d{2}$/;
const ids = Partidos.map((p) => p.id);

describe('anuncios de campaña', () => {
  it('son de un partido de la app, con fecha desde la convocatoria', () => {
    for (const a of Anuncios) {
      expect(ids).toContain(a.partidoId);
      expect(a.fecha).toMatch(FECHA);
      expect(a.fecha >= ANUNCIOS_DESDE).toBe(true);
    }
  });

  it('salen de la web oficial del partido, con fecha de consulta', () => {
    for (const a of Anuncios) {
      expect(a.fuente.oficial).toBe(true);
      expect(a.fuente.url).toMatch(/^https:\/\//);
      expect(a.fuente.consultada).toMatch(FECHA);
      expect(a.fuente.consultada >= a.fecha).toBe(true);
    }
  });

  it('sin fecha en la página, llevan el día en que se leyeron', () => {
    for (const a of Anuncios.filter((x) => x.sinFecha)) expect(a.fecha).toBe(a.fuente.consultada);
  });

  it('tienen al menos una medida y no repiten fuente', () => {
    for (const a of Anuncios) expect(a.medidas.length).toBeGreaterThan(0);
    const urls = Anuncios.map((a) => a.fuente.url);
    expect(new Set(urls).size).toBe(urls.length);
  });

  it('usan comillas españolas', () => {
    for (const a of Anuncios) {
      for (const texto of [a.titulo, ...a.medidas]) expect(texto).not.toMatch(/["“”]/);
    }
  });

  it('cada partido tiene su revisión, una sola vez', () => {
    expect(Revisiones.map((r) => r.partidoId).sort()).toEqual([...ids].sort());
    for (const r of Revisiones) expect(r.hasta).toMatch(FECHA);
  });

  it('una web bloqueada explica por qué', () => {
    for (const r of Revisiones.filter((x) => x.bloqueada)) expect(r.nota).toBeTruthy();
  });
});
