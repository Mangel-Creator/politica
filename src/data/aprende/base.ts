import type { Fuente } from '../tipos';

/**
 * Piezas comunes de Aprende: tipos de lección y de ejercicio, y enlaces a los artículos del
 * BOE. Regla del proyecto: cada tarjeta y cada ejercicio llevan la fuente de la que salen.
 */

const C = '2026-10-15';

export const FuenteCE: Fuente = {
  titulo: 'BOE: Constitución Española (texto consolidado)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229',
  consultada: C,
  oficial: true,
};
export const FuenteLOREG: Fuente = {
  titulo: 'BOE: Ley Orgánica 5/1985 del Régimen Electoral General (LOREG)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672',
  consultada: C,
  oficial: true,
};
export const FuenteReglamento: Fuente = {
  titulo: 'BOE: Reglamento del Congreso de los Diputados (texto consolidado)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1982-5196',
  consultada: C,
  oficial: true,
};

/** Referencia a una norma: "CE 99" es el artículo 99 de la Constitución; "RC", el Reglamento del Congreso. */
export type Articulo = { norma: 'CE' | 'LOREG' | 'RC'; numero: string };

/** Anclas del BOE para la LOREG, que usa el número en letra (comprobadas el 06/10/2026 y el 15/10/2026). */
const AnclasLOREG: Record<string, string> = {
  '25': 'aveinticinco',
  '26': 'aveintiseis',
  '27': 'aveintisiete',
  '31': 'atreintayuno',
  '44': 'acuarentaycuatro',
  '51': 'acincuentayuno',
  '53': 'acincuentaytres',
  '69': 'asesentaynueve',
  '72': 'asetentaydos',
  '73': 'asetentaytres',
  '74': 'asetentaycuatro',
  '75': 'asetentaycinco',
  '84': 'aochentaycuatro',
  '85': 'aochentaycinco',
  '86': 'aochentayseis',
  '96': 'anoventayseis',
  '161': 'acientosesentayuno',
  '162': 'acientosesentaydos',
  '163': 'acientosesentaytres',
  '165': 'acientosesentaycinco',
  '166': 'acientosesentayseis',
  '172': 'acientosetentaydos',
};

export function fuenteDe(a: Articulo): Fuente {
  return a.norma === 'CE' ? FuenteCE : a.norma === 'RC' ? FuenteReglamento : FuenteLOREG;
}

/** Enlace directo al artículo dentro del texto consolidado del BOE. */
export function urlArticulo(a: Articulo) {
  if (a.norma === 'CE') return `${FuenteCE.url}#a${a.numero}`;
  if (a.norma === 'RC') return `${FuenteReglamento.url}#art${a.numero}`;
  const ancla = AnclasLOREG[a.numero];
  return ancla ? `${FuenteLOREG.url}#${ancla}` : FuenteLOREG.url;
}

const NOMBRES = { CE: 'Constitución', LOREG: 'Ley electoral (LOREG)', RC: 'Reglamento del Congreso' } as const;

export function nombreArticulo(a: Articulo) {
  return `${NOMBRES[a.norma]}, art. ${a.numero}`;
}

/** Un artículo como fuente lista para enlazar: `art('LOREG', '72')`. */
export function art(norma: Articulo['norma'], numero: string): Fuente {
  const a = { norma, numero };
  return { titulo: nombreArticulo(a), url: urlArticulo(a), consultada: C, oficial: true };
}

export type Tarjeta = { titulo: string; texto: string; fuente: Fuente };

type Comun = {
  id: string;
  /** Por qué es así, en una o dos frases. Se enseña al responder, aciertes o no. */
  explicacion: string;
  fuente: Fuente;
};

/** Pregunta con varias respuestas, una buena. */
export type Elige = Comun & { tipo: 'elige'; enunciado: string; opciones: string[]; correcta: number };
/** Una afirmación: ¿verdadera o falsa? */
export type VerdaderoFalso = Comun & { tipo: 'vf'; afirmacion: string; verdadera: boolean };
/** Frase con un hueco (`___`) que se rellena con una de las opciones. */
export type Completa = Comun & { tipo: 'completa'; frase: string; opciones: string[]; correcta: number };
/** Pasos que hay que poner en orden. `pasos` va ya en el orden bueno; la app los baraja. */
export type Ordena = Comun & { tipo: 'ordena'; enunciado: string; pasos: string[] };
/** Parejas que hay que unir. La app baraja la columna de la derecha. */
export type Empareja = Comun & { tipo: 'empareja'; enunciado: string; pares: [string, string][] };

export type Ejercicio = Elige | VerdaderoFalso | Completa | Ordena | Empareja;

export type Leccion = {
  id: string;
  titulo: string;
  /** Una frase que engancha. */
  gancho: string;
  /** Símbolo de la casilla en el camino (texto, sin color). */
  simbolo: string;
  /** Ideas en tarjetas cortas, antes de practicar. */
  tarjetas: Tarjeta[];
  ejercicios: Ejercicio[];
  /** Casos de "Promesas y hechos" de los que sale la lección, para ver el voto de cada partido. */
  hechos?: string[];
};

export type Unidad = {
  id: string;
  titulo: string;
  descripcion: string;
  lecciones: Leccion[];
};
