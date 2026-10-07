import type { Fuente } from '../tipos';
import type { Mencion } from './tipos';

/** Día en que se leyeron casi todas las fuentes de este apartado. */
export const CONSULTA_MIEMBROS = '2026-10-06';

const oficial = (titulo: string, url: string, consultada = CONSULTA_MIEMBROS): Fuente => ({
  titulo,
  url,
  consultada,
  oficial: true,
});

const otra = (titulo: string, url: string, consultada = CONSULTA_MIEMBROS): Fuente => ({
  titulo,
  url,
  consultada,
  oficial: false,
});

export { oficial, otra };

/** Wikipedia en español, para contrastar fechas, lugares y estudios. */
export const wiki = (titulo: string, ruta: string, consultada = CONSULTA_MIEMBROS): Fuente =>
  otra(`Wikipedia: ${titulo}`, `https://es.wikipedia.org/wiki/${ruta}`, consultada);

/** Fuentes que se repiten en varios partidos. */
export const F = {
  congresoBiografias: oficial(
    'Congreso de los Diputados: datos abiertos de los diputados de la XV legislatura (biografía de cada ficha)',
    'https://www.congreso.es/es/opendata/diputados',
  ),
  congresoPortavoces: oficial(
    'Congreso de los Diputados: composición de la Junta de Portavoces de la XV legislatura, disuelta el 06/10/2026',
    'https://www.congreso.es/es/junta-de-portavoces',
  ),
  moncloaGobierno: oficial(
    'La Moncloa: composición del Gobierno de la XV legislatura',
    'https://www.lamoncloa.gob.es/gobierno/composiciondelgobierno/Paginas/index.aspx',
  ),
  wikiTercerGobierno: wiki('Tercer Gobierno de Pedro Sánchez', 'Tercer_Gobierno_de_Pedro_Sánchez', '2026-10-07'),
  /** Repaso de quién encabezará cada lista, publicado el día del anuncio de las elecciones. */
  eleconomistaListas: otra(
    'elEconomista: Qué partidos se presentan y quiénes encabezan las listas el 29N (05/10/2026)',
    'https://www.eleconomista.es/actualidad/noticias/14018810/10/26/que-partidos-politicos-se-presentan-y-quienes-encabezan-las-listas-de-las-elecciones-generales-2026-en-espanael-proximo-29n.html',
  ),
  /** Fallo del Constitucional sobre la malversación del procés y orden de detención de Puigdemont. */
  deiaAmnistia: otra(
    'Deia: Puigdemont ya puede regresar a España sin riesgo de ser detenido (06/10/2026)',
    'https://www.deia.eus/politica/2026/10/06/puigdemont-regresar-espana-riesgo-detenido-11625354.html',
    '2026-10-07',
  ),
};

/** Noticias de las quinielas de un posible Gobierno del PP, leídas el 06/10/2026. */
const quiniela =
  (medio: string, fecha: string, titulo: string, url: string) =>
  (dice: string): Mencion => ({
    medio,
    fecha,
    titulo,
    url,
    consultada: CONSULTA_MIEMBROS,
    dice,
  });

export const Quinielas = {
  democrata: quiniela(
    'Demócrata',
    '2026-10-04',
    'Primera quiniela del Gobierno de Feijóo: Hernández de Cos, Gamarra y Bravo son los nombres que suenan como ministros',
    'https://www.democrata.es/elecciones-generales-espana/posibles-ministros-gobierno-feijoo-gamarra-bravo/',
  ),
  elPlural: quiniela(
    'El Plural',
    '2026-10-05',
    'El PP vuelve a 2023 y empieza a hacer quinielas de cómo sería un Gobierno de Feijóo',
    'https://www.elplural.com/politica/espana/pp-vuelve-2023-empieza-hacer-quinielas-como-seria-gobierno-feijoo_800489102',
  ),
  mundiario: quiniela(
    'Mundiario',
    '2026-10-04',
    'El PP se ve cada vez más cerca del poder, pero todavía tiene piezas por encajar',
    'https://www.mundiario.com/articulo/politica/pp-ve-cada-vez-mas-cerca-poder-todavia-tiene-piezas-encajar/20261004135414444900.html',
  ),
};

/** La noticia de una quiniela como fuente normal. */
export const fuenteDe = (q: (dice: string) => Mencion): Fuente => {
  const m = q('');
  return otra(`${m.medio}: ${m.titulo}`, m.url, m.consultada);
};
