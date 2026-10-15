import type { Fuente } from './tipos';

/**
 * Anuncios de campaña del 29N: medidas que cada partido publica en su propia web desde la
 * convocatoria. No son el programa; cuando cada partido publique el suyo, manda el programa.
 *
 * Reglas:
 * - Solo la web oficial del partido. Si no deja leerla, su copia en el Internet Archive.
 * - Página leída entera; la fecha es la de la propia página. Si la página no la lleva, se
 *   marca `sinFecha` y se pone el día en que se leyó.
 * - No entran las medidas que aprueba el Gobierno en funciones: son hechos, no anuncios.
 * - Solo medidas para la próxima legislatura: ni críticas a otros, ni lemas, ni candidaturas.
 * - En palabras neutras; entre «» los términos del propio partido.
 * - Cada revisión de las webs se apunta en `Revisiones`, también cuando no hay nada nuevo.
 */
export type Anuncio = {
  partidoId: string;
  /** Fecha de la página, AAAA-MM-DD. Con `sinFecha`, el día en que se leyó. */
  fecha: string;
  /** La página no dice cuándo se publicó. */
  sinFecha?: boolean;
  /** Resumen en pocas palabras, sin valorar. */
  titulo: string;
  medidas: string[];
  fuente: Fuente;
};

/** Hasta qué día se ha revisado la web de cada partido. */
export type Revision = {
  partidoId: string;
  /** Último día cuyas noticias se han leído, AAAA-MM-DD. */
  hasta: string;
  /** La web no se ha podido leer, ni en el Internet Archive. */
  bloqueada?: boolean;
  /** Cómo se ha leído si no ha sido directamente. */
  nota?: string;
};

/** Desde la convocatoria (Real Decreto 806/2026). */
export const ANUNCIOS_DESDE = '2026-10-05';

export const Anuncios: Anuncio[] = [
  {
    partidoId: 'pp',
    fecha: '2026-10-13',
    titulo: 'Pensiones con el IPC y plan de vivienda',
    medidas: [
      'Garantizar el sistema público de pensiones y revalorizar con el IPC las que ya se cobran.',
      'Para pagarlas, mejorar la productividad y dejar de gastar en lo que considera superfluo y evitable.',
      'Su plan para construir «más de un millón de viviendas».',
    ],
    fuente: {
      titulo:
        'PP: «Feijóo garantiza el sistema público de pensiones y su revalorización con el IPC», entrevista en esRadio',
      url: 'https://www.pp.es/actualidad/articulos/feijoo-garantiza-el-sistema-publico-de-pensiones-y-su-revalorizacion-con-el-ipc-el-desahucio-mas-importante-de-espana-es-el-de-pedro-sanchez/',
      consultada: '2026-10-15',
      oficial: true,
    },
  },
  {
    partidoId: 'psoe',
    fecha: '2026-10-15',
    sinFecha: true,
    titulo: 'Pensiones con el IPC, «cero recortes» y objetivos para 2030',
    medidas: [
      'Cuatro años más de revalorización de las pensiones conforme al IPC y «cero recortes».',
      'Objetivos para 2030: que el 80 % de la electricidad sea renovable, un paro de un solo dígito (por debajo del 10 %) y 4 puntos menos de abandono escolar, con más becas y FP.',
      'Que hombres y mujeres tengan el mismo poder.',
    ],
    fuente: {
      titulo: 'PSOE: «Pedro Sánchez: Entre las tijeras de Feijóo y las motosierras de Abascal…», mitin en Zaragoza',
      url: 'https://www.psoe.es/actualidad/noticias-actualidad/pedro-sanchez-entre-las-tijeras-de-feijoo-y-las-motosierras-de-abascal-si-llegan-al-gobierno-firmarian-el-acta-de-defuncion-del-estado-del-bienestar/',
      consultada: '2026-10-15',
      oficial: true,
    },
  },
  {
    partidoId: 'vox',
    fecha: '2026-10-11',
    titulo: '«Remigración», «desregulación» y «prioridad nacional»',
    medidas: [
      'Repatriar a quien entre en España de forma ilegal, y la «remigración» de quienes cometan delitos o vivan de ayudas sociales.',
      'Garantizar el pago de las pensiones.',
      'Quitar trabas administrativas y leyes que, según Vox, encarecen y retrasan la construcción de viviendas y el trabajo de empresas, autónomos y agricultores.',
      'Bajar impuestos y recortar el gasto que llama «político e ideológico».',
    ],
    fuente: {
      titulo:
        'Vox: «Abascal reivindica la remigración, la desregulación y la prioridad nacional como ejes de VOX para el 29N»',
      url: 'https://www.voxespana.es/abascal/abascal-reivindica-la-remigracion-la-desregulacion-y-la-prioridad-nacional-como-ejes-de-vox-para-el-29n-20261011',
      consultada: '2026-10-15',
      oficial: true,
    },
  },
];

export const Revisiones: Revision[] = [
  { partidoId: 'bng', hasta: '2026-10-15' },
  { partidoId: 'cc', hasta: '2026-10-15' },
  { partidoId: 'eh-bildu', hasta: '2026-10-15' },
  { partidoId: 'erc', hasta: '2026-10-15' },
  {
    partidoId: 'junts',
    hasta: '2026-10-10',
    nota: 'Su web no deja entrar a lectores automáticos; se ha leído la copia del Internet Archive, que llega al 10 de octubre.',
  },
  { partidoId: 'pnv', hasta: '2026-10-15' },
  { partidoId: 'podemos', hasta: '2026-10-15' },
  { partidoId: 'pp', hasta: '2026-10-15' },
  {
    partidoId: 'psoe',
    hasta: '2026-10-15',
    nota: 'Su web a veces pide una verificación contra robots y no pone fecha a sus noticias.',
  },
  { partidoId: 'sumar', hasta: '2026-10-15' },
  { partidoId: 'upn', hasta: '2026-10-15' },
  { partidoId: 'vox', hasta: '2026-10-15' },
];

/** Anuncios de un partido, del más reciente al más antiguo. */
export function anunciosDe(partidoId: string) {
  return Anuncios.filter((a) => a.partidoId === partidoId).sort((a, b) => b.fecha.localeCompare(a.fecha));
}

export function revisionDe(partidoId: string) {
  return Revisiones.find((r) => r.partidoId === partidoId);
}
