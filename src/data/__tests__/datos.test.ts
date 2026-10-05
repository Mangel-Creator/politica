import { describe, expect, it } from '@jest/globals';

import { Calendario, DIA_ELECCIONES } from '../calendario';
import { FuentesOficiales } from '../fuentes';
import { Partidos } from '../partidos';

const FECHA = /^\d{4}-\d{2}-\d{2}$/;

describe('partidos', () => {
  it('los escaños de 2023 suman los 350 del Congreso', () => {
    const total = Partidos.reduce((suma, p) => suma + (p.escanos2023 ?? 0), 0);
    expect(total).toBe(350);
  });

  it('están en orden alfabético por siglas', () => {
    const siglas = Partidos.map((p) => p.siglas);
    expect(siglas).toEqual([...siglas].sort((a, b) => a.localeCompare(b, 'es')));
  });

  it('no repiten identificador', () => {
    const ids = Partidos.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('enlazan a webs https', () => {
    for (const p of Partidos) expect(p.web).toMatch(/^https:\/\//);
  });

  it('cada programa tiene huella SHA-256, fecha y enlace https', () => {
    for (const p of Partidos) {
      for (const prog of p.programas) {
        expect(prog.sha256).toMatch(/^[0-9a-f]{64}$/);
        expect(prog.fechaDocumento).toMatch(FECHA);
        expect(prog.urlOficial).toMatch(/^https:\/\//);
        expect(prog.paginas).toBeGreaterThan(0);
      }
    }
  });

  it('los programas del 23J son anteriores al día de la votación', () => {
    for (const p of Partidos) {
      for (const prog of p.programas.filter((x) => x.eleccion === '23J 2023')) {
        expect(prog.fechaDocumento < '2023-07-23').toBe(true);
      }
    }
  });

  it('no hay dos programas con la misma huella', () => {
    const huellas = Partidos.flatMap((p) => p.programas.map((x) => x.sha256));
    expect(new Set(huellas).size).toBe(huellas.length);
  });
});

describe('calendario', () => {
  it('cada fecha tiene al menos una fuente', () => {
    for (const f of Calendario) expect(f.fuentes.length).toBeGreaterThan(0);
  });

  it('las fechas tienen formato AAAA-MM-DD y van en orden', () => {
    for (const f of Calendario) {
      expect(f.inicio).toMatch(FECHA);
      if (f.fin) {
        expect(f.fin).toMatch(FECHA);
        expect(f.fin > f.inicio).toBe(true);
      }
    }
    const inicios = Calendario.map((f) => f.inicio);
    expect(inicios).toEqual([...inicios].sort());
  });

  it('nada del calendario es posterior a la votación', () => {
    for (const f of Calendario) expect((f.fin ?? f.inicio) <= DIA_ELECCIONES).toBe(true);
  });

  it('solo marca como oficial lo que tiene alguna fuente oficial', () => {
    for (const f of Calendario.filter((x) => x.confirmadaOficialmente)) {
      expect(f.fuentes.some((x) => x.oficial)).toBe(true);
    }
  });
});

describe('fuentes oficiales', () => {
  it('todas son https y sin repetir', () => {
    const urls = FuentesOficiales.map((f) => f.url);
    for (const u of urls) expect(u).toMatch(/^https:\/\//);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
