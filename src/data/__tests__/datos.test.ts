import { describe, expect, it } from '@jest/globals';

import { Calendario, DIA_ELECCIONES } from '../calendario';
import { FuentesOficiales } from '../fuentes';
import { Partidos } from '../partidos';
import { Resumenes } from '../programas';
import { Temas } from '../temas';
import { Precedentes } from '../precedentes';
import { Historias } from '../historias';
import { HistoriasDetalladas } from '../historias/index';
import { Trayectorias } from '../trayectorias';
import { GENERALES_HISTORICAS } from '../historia-detallada';
import { Glosario, Lecciones, Preguntas, urlArticulo } from '../aprende';
import { Circunscripciones } from '../circunscripciones';
import { Hechos, votacion } from '../hechos';
import { Votaciones } from '../votaciones';

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
      const todas = [...r.ideasClave, ...Object.values(r.temas).flat(), ...Object.values(r.enfoques ?? {})];
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

  it('cada enfoque es de un tema con medidas', () => {
    for (const r of Resumenes)
      for (const t of Object.keys(r.enfoques ?? {}))
        expect(r.temas[t as keyof typeof r.temas]?.length).toBeGreaterThan(0);
  });

  it('no repiten medida dentro de un mismo tema', () => {
    for (const r of Resumenes)
      for (const lista of Object.values(r.temas)) {
        const textos = lista!.map((m) => m.texto);
        expect(new Set(textos).size).toBe(textos.length);
      }
  });

  it('cada resumen tiene entre 3 y 5 ideas clave', () => {
    for (const r of Resumenes) {
      expect(r.ideasClave.length).toBeGreaterThanOrEqual(3);
      expect(r.ideasClave.length).toBeLessThanOrEqual(5);
    }
  });

  it('sin dobles espacios ni comillas rectas en el texto', () => {
    for (const r of Resumenes) {
      const todas = [...r.ideasClave, ...Object.values(r.temas).flat(), ...Object.values(r.enfoques ?? {})];
      for (const t of [r.nota ?? '', ...todas.map((m) => m!.texto)]) {
        expect(t).not.toMatch(/  /);
        expect(t).not.toMatch(/"/);
      }
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

describe('historias detalladas', () => {
  it('hay una por partido, en el mismo orden', () => {
    expect(HistoriasDetalladas.map((h) => h.partidoId)).toEqual(Partidos.map((p) => p.id));
  });

  it('todas tienen capítulos, líderes y fuentes válidas, con Infoelectoral entre ellas', () => {
    for (const h of HistoriasDetalladas) {
      expect(h.capitulos.length).toBeGreaterThan(2);
      expect(h.lideres.length).toBeGreaterThan(0);
      for (const c of h.capitulos) expect(c.parrafos.length).toBeGreaterThan(0);
      for (const f of h.fuentes) {
        expect(f.url).toMatch(/^https:\/\//);
        expect(f.consultada).toMatch(FECHA);
      }
      expect(h.fuentes.some((f) => f.url.includes('infoelectoral.interior.gob.es'))).toBe(true);
      const urls = h.fuentes.map((f) => f.url);
      expect(new Set(urls).size).toBe(urls.length);
    }
  });

  it('los líderes tienen años válidos y ordenados', () => {
    for (const h of HistoriasDetalladas) {
      for (const l of h.lideres) {
        expect(l.desde).toMatch(/^\d{4}$/);
        if (l.hasta) expect(l.hasta >= l.desde).toBe(true);
      }
    }
  });

  it('sin dobles espacios ni comillas rectas en el texto', () => {
    for (const h of HistoriasDetalladas) {
      const texto = [h.entradilla, h.notaTrayectoria ?? '', ...h.capitulos.flatMap((c) => [c.titulo, ...c.parrafos])];
      for (const t of texto) {
        expect(t).not.toMatch(/  /);
        expect(t).not.toMatch(/"/);
      }
    }
  });
});

describe('trayectorias', () => {
  it('cada partido tiene trayectoria y ninguna elección pasa de 350 escaños', () => {
    for (const p of Partidos) expect(Trayectorias[p.id]?.length).toBeGreaterThan(0);
    const porEleccion = new Map<string, number>();
    for (const t of Object.values(Trayectorias))
      for (const tramo of t) {
        expect(GENERALES_HISTORICAS).toContain(tramo.eleccion);
        const n = tramo.candidaturas.reduce((s, c) => s + c.escanos, 0);
        expect(n).toBeGreaterThan(0);
        porEleccion.set(tramo.eleccion, (porEleccion.get(tramo.eleccion) ?? 0) + n);
      }
    for (const n of porEleccion.values()) expect(n).toBeLessThanOrEqual(350);
  });

  it('ninguna candidatura se asigna a dos partidos', () => {
    const vistas = new Set<string>();
    for (const t of Object.values(Trayectorias))
      for (const tramo of t)
        for (const c of tramo.candidaturas) {
          const clave = tramo.eleccion + '|' + c.siglas + '|' + c.nombre;
          expect(vistas.has(clave)).toBe(false);
          vistas.add(clave);
        }
  });

  it('una elección no aparece dos veces en el mismo partido', () => {
    for (const t of Object.values(Trayectorias)) {
      const elecciones = t.map((x) => x.eleccion);
      expect(new Set(elecciones).size).toBe(elecciones.length);
    }
  });

  it('los escaños de 2023 coinciden con los de la ficha del partido', () => {
    for (const p of Partidos) {
      const tramo = Trayectorias[p.id]?.find((x) => x.eleccion === '2023-07');
      const n = tramo ? tramo.candidaturas.reduce((s, c) => s + c.escanos, 0) : 0;
      if (p.id === 'podemos') expect(n).toBe(0);
      else expect(n).toBe(p.escanos2023);
    }
  });
});

describe('aprende', () => {
  it('cada artículo citado de la LOREG tiene ancla en el BOE', () => {
    const citados = [
      ...Lecciones.flatMap((l) => l.tarjetas.map((t) => t.articulo)),
      ...Preguntas.map((p) => p.articulo),
      ...Glosario.map((g) => g.articulo),
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

describe('promesas y hechos', () => {
  const pdfDe = (partidoId: string) =>
    Partidos.find((p) => p.id === partidoId)?.programas.find((x) => x.eleccion === '23J 2023');

  it('los votos por partido suman los totales oficiales', () => {
    Object.values(Votaciones).forEach((v) => {
      const suma = (k: 'si' | 'no' | 'abstencion' | 'noVota') => v.porPartido.reduce((s, p) => s + p[k], 0);
      expect(suma('si')).toBe(v.totales.si);
      expect(suma('no')).toBe(v.totales.no);
      expect(suma('abstencion')).toBe(v.totales.abstencion);
      expect(suma('noVota')).toBe(v.totales.noVota);
      expect(v.url).toMatch(/^https:\/\/www\.congreso\.es\/webpublica\/opendata\/votaciones\//);
    });
  });

  it('cada paso apunta a una votación y su resultado cuadra con las cifras', () => {
    Hechos.forEach((h) => {
      h.pasos.forEach((p) => {
        const v = votacion(p.votacion);
        expect(v).toBeDefined();
        const gana = v!.totales.si > v!.totales.no && (!p.mayoria || v!.totales.si >= p.mayoria.necesaria);
        expect(p.resultado).toBe(gana ? 'aprobada' : 'rechazada');
      });
      const fechas = h.pasos.map((p) => votacion(p.votacion)!.fecha);
      expect([...fechas].sort()).toEqual(fechas);
      expect(h.desenlace.fuentes.length).toBeGreaterThan(0);
    });
  });

  it('cada promesa cita una página que existe en el PDF de su partido', () => {
    Hechos.forEach((h) =>
      h.promesas.forEach((p) => {
        const pdf = pdfDe(p.partidoId);
        expect(pdf).toBeDefined();
        expect(p.pagina).toBeGreaterThan(0);
        expect(p.pagina).toBeLessThanOrEqual(pdf!.paginas);
      }),
    );
  });
});

describe('circunscripciones del 29N', () => {
  it('reparten 350 diputados entre 52 circunscripciones, como manda la LOREG', () => {
    expect(Circunscripciones).toHaveLength(52);
    expect(Circunscripciones.reduce((s, c) => s + c.diputados, 0)).toBe(350);
    Circunscripciones.forEach((c) =>
      expect(c.diputados).toBeGreaterThanOrEqual(['Ceuta', 'Melilla'].includes(c.nombre) ? 1 : 2),
    );
  });
});
