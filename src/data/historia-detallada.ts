import type { Fuente } from './tipos';

/** Una candidatura en unas generales, tal como figura en el fichero oficial de Infoelectoral. */
export type CandidaturaHistorica = { siglas: string; nombre: string; escanos: number; votos: number };

/**
 * Escaños en unas generales. `antecesora`: partido o coalición anterior de la que procede el
 * partido (AP antes del PP, CiU antes de Junts…); se dibuja aparte y se explica en el texto.
 */
export type TramoTrayectoria = {
  /** AAAA-MM de la elección. */
  eleccion: string;
  tipo: 'propia' | 'antecesora';
  candidaturas: CandidaturaHistorica[];
};

export type Trayectoria = TramoTrayectoria[];

export type Capitulo = {
  titulo: string;
  /** "1982–1989", "desde 2016"… */
  periodo: string;
  parrafos: string[];
};

export type Lider = { nombre: string; cargo: string; desde: string; hasta?: string };

/**
 * Historia detallada de un partido. Reglas: hechos con fecha, sin adjetivos que valoren; los
 * resultados electorales, de Infoelectoral; lo delicado, con una segunda fuente.
 */
export type HistoriaDetallada = {
  partidoId: string;
  /** Dos o tres frases para situarse. */
  entradilla: string;
  capitulos: Capitulo[];
  lideres: Lider[];
  /** Aclaración sobre qué candidaturas cuentan en el gráfico de escaños. */
  notaTrayectoria?: string;
  fuentes: Fuente[];
};

export const CONSULTA_HISTORIAS = '2026-10-06';

export const wikipedia = (titulo: string, ruta: string): Fuente => ({
  titulo: `Wikipedia: ${titulo}`,
  url: `https://es.wikipedia.org/wiki/${ruta}`,
  consultada: CONSULTA_HISTORIAS,
  oficial: false,
});

export const infoelectoralHistorico: Fuente = {
  titulo: 'Ministerio del Interior (Infoelectoral): resultados oficiales del Congreso, 1977–2023',
  url: 'https://infoelectoral.interior.gob.es/es/elecciones-celebradas/area-de-descargas/',
  consultada: CONSULTA_HISTORIAS,
  oficial: true,
};

/** Investidura de 2023 (179 votos y quién los dio) y ruptura de Junts en 2025. */
export const wikiTercerGobierno = wikipedia('Tercer Gobierno de Pedro Sánchez', 'Tercer_Gobierno_de_Pedro_Sánchez');

/** Las 16 generales celebradas desde 1977, en el formato AAAA-MM de `TramoTrayectoria.eleccion`. */
export const GENERALES_HISTORICAS = [
  '1977-06',
  '1979-03',
  '1982-10',
  '1986-06',
  '1989-10',
  '1993-06',
  '1996-03',
  '2000-03',
  '2004-03',
  '2008-03',
  '2011-11',
  '2015-12',
  '2016-06',
  '2019-04',
  '2019-11',
  '2023-07',
];

const MESES_CORTOS = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'];

/** "1982", o "abr. 2019" cuando ese año hubo dos generales. */
export function nombreEleccion(eleccion: string) {
  const anio = eleccion.slice(0, 4);
  const repetido = GENERALES_HISTORICAS.filter((e) => e.startsWith(anio)).length > 1;
  return repetido ? `${MESES_CORTOS[Number(eleccion.slice(5, 7)) - 1]} ${anio}` : anio;
}
