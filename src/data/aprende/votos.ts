/**
 * Votaciones del Pleno que usan las lecciones de amnistía y Presupuestos y que no están en
 * src/data/votaciones.ts. Totales copiados el 15/10/2026 de los datos abiertos del Congreso:
 * - con `json`: el fichero oficial de la votación;
 * - las votaciones públicas por llamamiento no tienen fichero: el total sale de la página
 *   oficial de ese día, que es la `url`.
 * Si se añaden a votaciones.ts con scripts/congreso, hay que quitarlas de aquí.
 */

export type VotoPleno = {
  fecha: string;
  /** Lo que se votó, como lo publica el Congreso. */
  expediente: string;
  totales: { si: number; no: number; abstencion: number };
  url: string;
  llamamiento?: boolean;
};

const DIA = (ddmmaaaa: string) =>
  `https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=${ddmmaaaa}`;
const JSON_ = (ruta: string) => `https://www.congreso.es/webpublica/opendata/votaciones/Leg15/${ruta}`;

const AMNISTIA =
  'Proposición de Ley Orgánica de amnistía para la normalización institucional, política y social en Cataluña';
const SENDA = (periodo: string) =>
  `Objetivos de estabilidad presupuestaria y de deuda pública para ${periodo} y límite de gasto no financiero del Estado`;

export const VotosAprende: Record<string, VotoPleno> = {
  'amnistia-toma': {
    fecha: '2023-12-12',
    expediente: `${AMNISTIA}: toma en consideración (pública por llamamiento)`,
    totales: { si: 178, no: 172, abstencion: 0 },
    url: DIA('12/12/2023'),
    llamamiento: true,
  },
  'amnistia-conjunto-1': {
    fecha: '2024-01-30',
    expediente: `${AMNISTIA}: votación de conjunto por su carácter orgánico (pública por llamamiento)`,
    totales: { si: 171, no: 179, abstencion: 0 },
    url: DIA('30/01/2024'),
    llamamiento: true,
  },
  'amnistia-conjunto-2': {
    fecha: '2024-03-14',
    expediente: `${AMNISTIA}: votación de conjunto del nuevo dictamen (pública por llamamiento)`,
    totales: { si: 178, no: 172, abstencion: 0 },
    url: DIA('14/03/2024'),
    llamamiento: true,
  },
  'amnistia-veto': {
    fecha: '2024-05-30',
    expediente: `${AMNISTIA}: veto del Senado (pública por llamamiento)`,
    totales: { si: 177, no: 172, abstencion: 0 },
    url: DIA('30/05/2024'),
    llamamiento: true,
  },
  'senda-2024': {
    fecha: '2024-02-29',
    expediente: SENDA('2024-2026'),
    totales: { si: 176, no: 171, abstencion: 0 },
    url: JSON_('Sesion026/20240229/Votacion016/VOT_20240229115057.json'),
  },
  'senda-2025': {
    fecha: '2024-07-23',
    expediente: SENDA('2025-2027'),
    totales: { si: 171, no: 178, abstencion: 0 },
    url: JSON_('Sesion056/20240723/Votacion077/VOT_20240723221749.json'),
  },
  'senda-2026-1': {
    fecha: '2025-11-27',
    expediente: SENDA('2026-2028'),
    totales: { si: 164, no: 178, abstencion: 5 },
    url: JSON_('Sesion151/20251127/Votacion018/VOT_20251127124111.json'),
  },
  'senda-2026-2': {
    fecha: '2025-12-11',
    expediente: SENDA('2026-2028'),
    totales: { si: 166, no: 177, abstencion: 5 },
    url: JSON_('Sesion154/20251211/Votacion029/VOT_20251211175116.json'),
  },
  'senda-2027-1': {
    fecha: '2026-07-14',
    expediente: SENDA('2027-2029'),
    totales: { si: 167, no: 178, abstencion: 5 },
    url: JSON_('Sesion192/20260714/Votacion050/VOT_20260714202054.json'),
  },
  'senda-2027-2': {
    fecha: '2026-07-23',
    expediente: SENDA('2027-2029'),
    totales: { si: 166, no: 176, abstencion: 5 },
    url: JSON_('Sesion193/20260723/Votacion020/VOT_20260723212002.json'),
  },
  'ley-presupuestaria-pp': {
    fecha: '2026-02-10',
    expediente:
      'Proposición de Ley del Grupo Parlamentario Popular en el Congreso, para garantizar el cumplimiento de la Ley 47/2003, de 26 de noviembre, General Presupuestaria: toma en consideración',
    totales: { si: 172, no: 162, abstencion: 13 },
    url: JSON_('Sesion157/20260210/Votacion002/VOT_20260210205704.json'),
  },
};
