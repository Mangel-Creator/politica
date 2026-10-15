import { describe, expect, it } from '@jest/globals';

import { Ejercicios, Glosario, Lecciones, Unidades, urlArticulo, type Ejercicio } from '../aprende';
import { buscarHecho } from '../hechos';

const textosDe = (e: Ejercicio): string[] => {
  switch (e.tipo) {
    case 'elige':
      return [e.enunciado, ...e.opciones];
    case 'vf':
      return [e.afirmacion];
    case 'completa':
      return [e.frase, ...e.opciones];
    case 'ordena':
      return [e.enunciado, ...e.pasos];
    case 'empareja':
      return [e.enunciado, ...e.pares.flat()];
  }
};

describe('aprende: temario', () => {
  it('hay varias unidades y cada lección tiene ideas y al menos 3 retos', () => {
    expect(Unidades.length).toBeGreaterThanOrEqual(5);
    Lecciones.forEach((l) => {
      expect(l.tarjetas.length).toBeGreaterThan(0);
      expect(l.ejercicios.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('los identificadores de lecciones y ejercicios no se repiten', () => {
    const lecciones = Lecciones.map((l) => l.id);
    expect(new Set(lecciones).size).toBe(lecciones.length);
    const ejercicios = Ejercicios.map((e) => e.id);
    expect(new Set(ejercicios).size).toBe(ejercicios.length);
  });

  it('se usan los cinco tipos de ejercicio', () => {
    expect(new Set(Ejercicios.map((e) => e.tipo))).toEqual(new Set(['elige', 'vf', 'completa', 'ordena', 'empareja']));
  });

  it('cada ejercicio tiene una respuesta posible y sin ambigüedades', () => {
    Ejercicios.forEach((e) => {
      if (e.tipo === 'elige' || e.tipo === 'completa') {
        expect(e.opciones[e.correcta]).toBeDefined();
        expect(new Set(e.opciones).size).toBe(e.opciones.length);
      }
      if (e.tipo === 'completa') expect(e.frase.split('___')).toHaveLength(2);
      if (e.tipo === 'ordena') {
        expect(e.pasos.length).toBeGreaterThanOrEqual(3);
        expect(new Set(e.pasos).size).toBe(e.pasos.length);
      }
      if (e.tipo === 'empareja') {
        expect(e.pares.length).toBeGreaterThanOrEqual(3);
        // Cada lado sin repetidos: si no, habría dos parejas válidas.
        expect(new Set(e.pares.map((p) => p[0])).size).toBe(e.pares.length);
        expect(new Set(e.pares.map((p) => p[1])).size).toBe(e.pares.length);
      }
      expect(e.explicacion.length).toBeGreaterThan(0);
    });
  });

  it('cada idea y cada ejercicio llevan fuente oficial con enlace https', () => {
    const fuentes = [...Lecciones.flatMap((l) => l.tarjetas.map((t) => t.fuente)), ...Ejercicios.map((e) => e.fuente)];
    fuentes.forEach((f) => {
      expect(f.url).toMatch(/^https:\/\//);
      expect(f.titulo.length).toBeGreaterThan(0);
      expect(f.oficial).toBe(true);
    });
  });

  it('cada artículo enlazado de la LOREG o del Reglamento lleva su ancla', () => {
    const urls = [
      ...Lecciones.flatMap((l) => l.tarjetas.map((t) => t.fuente.url)),
      ...Ejercicios.map((e) => e.fuente.url),
      ...Glosario.map((g) => urlArticulo(g.articulo)),
    ].filter((u) => u.includes('BOE-A-1985-11672') || u.includes('BOE-A-1982-5196'));
    urls.forEach((u) => expect(u).toContain('#'));
  });

  it('los casos enlazados existen en «Promesas y hechos»', () => {
    Lecciones.flatMap((l) => l.hechos ?? []).forEach((id) => expect(buscarHecho(id)).toBeDefined());
  });

  it('textos en español con comillas españolas y sin huecos sin rellenar', () => {
    Ejercicios.flatMap(textosDe).forEach((t) => {
      expect(t).not.toMatch(/["“”]/);
      expect(t).not.toMatch(/undefined|NaN/);
    });
    Lecciones.flatMap((l) => l.tarjetas).forEach((t) => {
      expect(t.texto).not.toMatch(/["“”]/);
      expect(t.texto).not.toMatch(/undefined|NaN/);
    });
  });

  it('el glosario no repite términos', () => {
    const terminos = Glosario.map((g) => g.termino);
    expect(new Set(terminos).size).toBe(terminos.length);
  });
});
