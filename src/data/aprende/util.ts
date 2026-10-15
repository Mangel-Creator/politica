import { Calendario, DespuesDeVotar } from '../calendario';
import { buscarHecho, votacion } from '../hechos';
import { Partidos } from '../partidos';
import type { Fuente } from '../tipos';
import { VotosAprende } from './votos';

/**
 * Las cifras y fechas de las lecciones salen de los datos ya contrastados de la app
 * (votaciones del Congreso, casos de "Promesas y hechos", calendario), no se copian a mano:
 * si un dato cambia allí, la lección cambia con él.
 */

const C = '2026-10-15';

/** "2025-09-10" → "10/09/2025" */
export const dma = (iso: string) => iso.split('-').reverse().join('/');

/** Votación oficial del Pleno (de votaciones.ts o de votos.ts). Falla al cargar si el id no existe. */
export function vot(id: string) {
  const v = votacion(id) ?? VotosAprende[id];
  if (!v) throw new Error(`Aprende: no existe la votación ${id}`);
  return v;
}

export const si = (id: string) => vot(id).totales.si;
export const no = (id: string) => vot(id).totales.no;
export const diaVot = (id: string) => dma(vot(id).fecha);

/** Enlace a los datos abiertos de una votación. */
export function fuenteVot(id: string): Fuente {
  return {
    titulo: `Congreso: votación del ${diaVot(id)}${VotosAprende[id]?.llamamiento ? ', por llamamiento' : ''} (datos abiertos)`,
    url: vot(id).url,
    consultada: C,
    oficial: true,
  };
}

/** Una de las fuentes del desenlace de un caso de "Promesas y hechos". */
export function fuenteHecho(hechoId: string, n = 0): Fuente {
  const f = buscarHecho(hechoId)?.desenlace.fuentes[n];
  if (!f) throw new Error(`Aprende: no existe la fuente ${n} del caso ${hechoId}`);
  return f;
}

/** Lo que prometía un partido en un caso, con su página. */
export function promesa(hechoId: string, partidoId: string) {
  const p = buscarHecho(hechoId)?.promesas.find((x) => x.partidoId === partidoId);
  if (!p) throw new Error(`Aprende: ${partidoId} no tiene promesa en ${hechoId}`);
  return p;
}

export function siglas(partidoId: string) {
  const p = Partidos.find((x) => x.id === partidoId);
  if (!p) throw new Error(`Aprende: no existe el partido ${partidoId}`);
  return p.siglas;
}

/** PDF oficial del programa del 23J de un partido. */
export function fuentePrograma(partidoId: string): Fuente {
  const p = Partidos.find((x) => x.id === partidoId);
  const pdf = p?.programas.find((x) => x.eleccion === '23J 2023');
  if (!p || !pdf) throw new Error(`Aprende: ${partidoId} no tiene programa del 23J`);
  return { titulo: `Programa electoral de ${p.siglas} (23J 2023)`, url: pdf.urlOficial, consultada: C, oficial: true };
}

/** Fecha del calendario electoral del 29N. */
export function plazo(id: string) {
  const f = [...Calendario, ...DespuesDeVotar].find((x) => x.id === id);
  if (!f) throw new Error(`Aprende: no existe el plazo ${id}`);
  return f;
}
