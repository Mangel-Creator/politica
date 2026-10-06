import { articuloLOREG, Fuentes } from './fuentes';
import type { FechaElectoral } from './tipos';

/** Día de la votación (hora de la península). */
export const DIA_ELECCIONES = '2026-11-29';

/**
 * Calendario electoral del 29N, contrastado el 06/10/2026.
 *
 * El decreto de convocatoria (BOE de 06/10/2026) fija la votación, la campaña y la
 * constitución de las Cortes. Los demás plazos los fija la LOREG contando días desde la
 * convocatoria (día 0 = 06/10/2026, cuando el decreto entra en vigor). El voto por correo,
 * además, con la nota oficial de Correos. Si algo no cuadra, manda el BOE.
 */
const BOE = Fuentes.boeConvocatoria;

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
    detalle: 'Real Decreto 806/2026. Entra en vigor el mismo día: empieza oficialmente el proceso electoral.',
    confirmadaOficialmente: true,
    fuentes: [BOE],
  },
  {
    id: 'coaliciones',
    inicio: '2026-10-16',
    esLimite: true,
    titulo: 'Último día para comunicar coaliciones',
    detalle: 'Los partidos que se presenten juntos deben comunicarlo en los diez días siguientes a la convocatoria.',
    confirmadaOficialmente: true,
    fuentes: [BOE, articuloLOREG(44, 'acuarentaycuatro')],
  },
  {
    id: 'candidaturas',
    inicio: '2026-10-21',
    fin: '2026-10-26',
    titulo: 'Presentación de candidaturas',
    detalle:
      'Entre el día 15 y el 20 después de la convocatoria. Las presentadas se publican el día 22 (28 de octubre).',
    confirmadaOficialmente: true,
    fuentes: [BOE, articuloLOREG(45, 'acuarentaycinco'), articuloLOREG(47, 'acuarentaysiete')],
  },
  {
    id: 'proclamacion',
    inicio: '2026-11-02',
    titulo: 'Proclamación de candidaturas',
    detalle: 'Las Juntas Electorales proclaman las listas el día 27 y se publican al día siguiente (3 de noviembre).',
    confirmadaOficialmente: true,
    fuentes: [BOE, articuloLOREG(47, 'acuarentaysiete')],
  },
  {
    id: 'envio-correo',
    inicio: '2026-11-09',
    titulo: 'Empieza el envío de la documentación del voto por correo',
    detalle: 'Correos la manda a quien la pidió, a partir del día 34 tras la convocatoria.',
    confirmadaOficialmente: true,
    fuentes: [Fuentes.correosNota29N, articuloLOREG(73, 'asetentaytres')],
  },
  {
    id: 'campana',
    inicio: '2026-11-13',
    fin: '2026-11-27',
    titulo: 'Campaña electoral',
    detalle: 'Quince días: desde las 00:00 del viernes 13 hasta las 24:00 del viernes 27 de noviembre.',
    confirmadaOficialmente: true,
    fuentes: [BOE],
  },
  {
    id: 'solicitud-correo',
    inicio: '2026-11-19',
    esLimite: true,
    titulo: 'Último día para pedir el voto por correo',
    detalle: 'Hasta el décimo día antes de la votación, ese día incluido.',
    confirmadaOficialmente: true,
    fuentes: [Fuentes.correosNota29N, articuloLOREG(72, 'asetentaydos')],
  },
  {
    id: 'deposito-correo',
    inicio: '2026-11-25',
    esLimite: true,
    titulo: 'Último día para entregar el voto por correo desde España',
    detalle:
      'La ley dice «antes del tercer día previo» a la votación; Correos fija el final del plazo el 25 de noviembre.',
    confirmadaOficialmente: true,
    fuentes: [Fuentes.correosNota29N, articuloLOREG(73, 'asetentaytres')],
  },
  {
    id: 'reflexion',
    inicio: '2026-11-28',
    titulo: 'Jornada de reflexión',
    detalle: 'La campaña ya ha terminado: no se puede hacer propaganda ni actos de campaña.',
    confirmadaOficialmente: true,
    fuentes: [BOE, articuloLOREG(53, 'acincuentaytres')],
  },
  {
    id: 'votacion',
    inicio: DIA_ELECCIONES,
    titulo: 'Elecciones generales',
    detalle: 'Se vota al Congreso y al Senado.',
    confirmadaOficialmente: true,
    fuentes: [BOE],
  },
];

/** Lo que fija el decreto para después de votar. */
export const DespuesDeVotar: FechaElectoral[] = [
  {
    id: 'constitucion',
    inicio: '2026-12-23',
    titulo: 'Se constituyen el Congreso y el Senado',
    detalle: 'Sesiones constitutivas a las 10:00. Después vendrá la investidura.',
    confirmadaOficialmente: true,
    fuentes: [BOE],
  },
];
