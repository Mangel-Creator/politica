import { Fuentes } from './fuentes';
import type { FechaElectoral } from './tipos';

/** Día de la votación (hora de la península). */
export const DIA_ELECCIONES = '2026-11-29';

/**
 * Calendario electoral del 29N.
 *
 * El 05/10/2026 solo hay anuncio del Gobierno y medios. Cuando salga el decreto en el
 * BOE (previsto el 06/10/2026), contrasta cada fecha, añade la fuente oficial y pon
 * `confirmadaOficialmente: true`. Si un medio y el BOE no coinciden, manda el BOE.
 */
export const Calendario: FechaElectoral[] = [
  {
    id: 'anuncio',
    inicio: '2026-10-05',
    titulo: 'Anuncio de la convocatoria',
    detalle: 'El presidente del Gobierno anuncia la disolución de las Cortes y elecciones generales.',
    confirmadaOficialmente: true,
    fuentes: [Fuentes.moncloaConvocatoria],
  },
  {
    id: 'boe',
    inicio: '2026-10-06',
    titulo: 'Publicación del decreto en el BOE',
    detalle: 'Empieza oficialmente el proceso electoral.',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario, Fuentes.copeCalendario],
  },
  {
    id: 'coaliciones',
    inicio: '2026-10-06',
    fin: '2026-10-16',
    titulo: 'Comunicación de coaliciones',
    detalle: 'Los partidos que quieran presentarse juntos deben comunicarlo.',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario],
  },
  {
    id: 'candidaturas',
    inicio: '2026-10-21',
    fin: '2026-10-26',
    titulo: 'Presentación de candidaturas',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario],
  },
  {
    id: 'proclamacion',
    inicio: '2026-11-02',
    titulo: 'Proclamación de candidaturas',
    detalle: 'Se publican las listas que pueden presentarse a las elecciones.',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.copeCalendario],
  },
  {
    id: 'campana',
    inicio: '2026-11-13',
    fin: '2026-11-27',
    titulo: 'Campaña electoral',
    detalle: 'Desde las 00:00 del viernes 13 hasta las 23:59 del viernes 27 de noviembre.',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario, Fuentes.copeCalendario],
  },
  {
    id: 'solicitud-correo',
    inicio: '2026-11-19',
    esLimite: true,
    titulo: 'Último día para pedir el voto por correo',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario],
  },
  {
    id: 'deposito-correo',
    inicio: '2026-11-25',
    esLimite: true,
    titulo: 'Último día para entregar el voto por correo desde España',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario],
  },
  {
    id: 'reflexion',
    inicio: '2026-11-28',
    titulo: 'Jornada de reflexión',
    detalle: 'No se pueden hacer actos de campaña.',
    confirmadaOficialmente: false,
    fuentes: [Fuentes.rtvcCalendario, Fuentes.copeCalendario],
  },
  {
    id: 'votacion',
    inicio: DIA_ELECCIONES,
    titulo: 'Elecciones generales',
    detalle: 'Se vota al Congreso y al Senado.',
    confirmadaOficialmente: true,
    fuentes: [Fuentes.moncloaConvocatoria, Fuentes.rtvcCalendario, Fuentes.copeCalendario],
  },
];
