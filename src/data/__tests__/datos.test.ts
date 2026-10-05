import { describe, expect, it } from '@jest/globals';

import { Calendario, DIA_ELECCIONES } from '../calendario';
import { FuentesOficiales } from '../fuentes';
import { Partidos } from '../partidos';
import { Resumenes } from '../programas';
import { Temas } from '../temas';
import { Precedentes } from '../precedentes';
import { Historias } from '../historias';
import { Lecciones, Preguntas, urlArticulo } from '../aprende';

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

describe('resúmenes de programas', () => {
  it('cada medida cita una página que existe en el PDF de ese partido', () => {
    for (const r of Resumenes) {
      const partido = Partidos.find((p) => p.id === r.partidoId);
      expect(partido).toBeDefined();
      const pdf = partido!.programas.find((p) => p.eleccion === r.eleccion);
      expect(pdf).toBeDefined();
      const todas = [...r.ideasClave, ...Object.values(r.temas).flat()];
      for (const m of todas) {
        expect(m!.pagina).toBeGreaterThanOrEqual(1);
        expect(m!.pagina).toBeLessThanOrEqual(pdf!.paginas);
        expect(m!.texto.length).toBeGreaterThan(10);
        expect(m!.texto.length).toBeLessThan(170);
      }
    }
  });

  it('solo usan temas definidos', () => {
    const ids = new Set(Temas.map((t) => t.id));
    for (const r of Resumenes) for (const t of Object.keys(r.temas)) expect(ids.has(t as never)).toBe(true);
  });

  it('cada resumen tiene entre 3 y 5 ideas clave', () => {
    for (const r of Resumenes) {
      expect(r.ideasClave.length).toBeGreaterThanOrEqual(3);
      expect(r.ideasClave.length).toBeLessThanOrEqual(5);
    }
  });
});

describe('precedentes', () => {
  it('cada postura cita una página real del programa de ese partido', () => {
    for (const pr of Precedentes) {
      for (const po of pr.posturas) {
        const pdf = Partidos.find((p) => p.id === po.partidoId)?.programas.find((x) => x.eleccion === '23J 2023');
        expect(pdf).toBeDefined();
        expect(po.pagina).toBeLessThanOrEqual(pdf!.paginas);
      }
    }
  });

  it('cada precedente tiene al menos dos fuentes distintas y un caso', () => {
    for (const pr of Precedentes) {
      expect(new Set(pr.evidencias.map((e) => e.fuente.url)).size).toBeGreaterThanOrEqual(2);
      expect(pr.casos.length).toBeGreaterThan(0);
    }
  });
});

describe('historias', () => {
  it('hay una por partido y todas tienen fuente', () => {
    for (const p of Partidos) expect(Historias.find((h) => h.partidoId === p.id)).toBeDefined();
    for (const h of Historias) expect(h.fuentes.length).toBeGreaterThan(0);
  });
});

describe('aprende', () => {
  it('cada artículo citado de la LOREG tiene ancla en el BOE', () => {
    const citados = [
      ...Lecciones.flatMap((l) => l.tarjetas.map((t) => t.articulo)),
      ...Preguntas.map((p) => p.articulo),
    ];
    citados.forEach((a) => expect(urlArticulo(a)).toContain('#'));
  });

  it('cada pregunta tiene su respuesta entre las opciones y una lección que existe', () => {
    Preguntas.forEach((p) => {
      expect(p.opciones[p.correcta]).toBeDefined();
      expect(Lecciones.some((l) => l.id === p.leccionId)).toBe(true);
    });
  });
});
