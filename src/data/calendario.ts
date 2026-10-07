import { articuloLOREG, Fuentes } from './fuentes';
import type { FechaElectoral } from './tipos';

/** Día de la votación (hora de la península). */
export const DIA_ELECCIONES = '2026-11-29';

/**
 * Calendario electoral del 29N, contrastado el 06/10/2026.
 *
 * El decreto de convocatoria (BOE de 06/10/2026) fija la votación, la campaña y la
 * constitución de las Cortes. Los demás plazos los fija la LOREG contando días desde la
 * convocatoria (día 0 = 06/10/2026, cuando el decreto entra en vigor) y la Junta Electoral
 * Central los publica ya convertidos en fechas en su calendario oficial: cada fecha de aquí
 * coincide con él. El voto por correo, además, con la nota oficial de Correos. Si algo no
 * cuadra, manda el BOE.
 *
 * Van en orden de inicio. Solo entran los plazos que afectan a los votantes; los trámites
 * internos de partidos y juntas están en el calendario de la Junta Electoral Central.
 */
const BOE = Fuentes.boeConvocatoria;
const JEC = Fuentes.jecCalendario29N;

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
    id: 'censo',
    inicio: '2026-10-12',
    fin: '2026-10-19',
    titulo: 'Consulta del censo electoral',
    detalle:
      'Ocho días para comprobar en el ayuntamiento (o en el consulado) que estás en el censo y reclamar si tus datos están mal o no apareces. Las correcciones se publican el 23 de octubre.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(39, 'atreintaynueve')],
  },
  {
    id: 'coaliciones',
    inicio: '2026-10-16',
    esLimite: true,
    titulo: 'Último día para comunicar coaliciones',
    detalle: 'Los partidos que se presenten juntos deben comunicarlo en los diez días siguientes a la convocatoria.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(44, 'acuarentaycuatro')],
  },
  {
    id: 'candidaturas',
    inicio: '2026-10-21',
    fin: '2026-10-26',
    titulo: 'Presentación de candidaturas',
    detalle:
      'Entre el día 15 y el 20 después de la convocatoria. Las presentadas se publican en el BOE el día 22 (28 de octubre).',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(45, 'acuarentaycinco'), articuloLOREG(47, 'acuarentaysiete')],
  },
  {
    id: 'cera-envio',
    inicio: '2026-10-24',
    fin: '2026-10-30',
    titulo: 'Envío de la documentación a los residentes en el extranjero',
    detalle:
      'La Oficina del Censo Electoral la manda por correo certificado a los españoles inscritos como residentes en el extranjero (CERA). Las papeletas oficiales salen aparte, del 4 al 8 de noviembre, o más tarde donde se recurra la proclamación de candidaturas.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(75, 'asetentaycinco')],
  },
  {
    id: 'temporales',
    inicio: '2026-10-31',
    esLimite: true,
    titulo: 'Último día para pedir el voto si estás de forma temporal en el extranjero',
    detalle:
      'Para quien vive en España pero estará fuera del país durante el proceso electoral. El plazo empezó el 6 de octubre.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(74, 'asetentaycuatro')],
  },
  {
    id: 'mesas',
    inicio: '2026-10-31',
    fin: '2026-11-04',
    titulo: 'Sorteo de los miembros de las mesas electorales',
    detalle:
      'Los ayuntamientos sortean entre los electores de cada mesa menores de 70 años quién la preside y quiénes son vocales y suplentes. El cargo es obligatorio. Se notifica en los tres días siguientes, y quien tenga una causa justificada tiene siete días para alegarla ante la Junta Electoral de Zona.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(26, 'aveintiseis'), articuloLOREG(27, 'aveintisiete')],
  },
  {
    id: 'braille',
    inicio: '2026-11-02',
    esLimite: true,
    titulo: 'Último día para pedir la documentación del voto en braille',
    detalle: 'El plazo empezó el 6 de octubre.',
    confirmadaOficialmente: true,
    fuentes: [JEC],
  },
  {
    id: 'proclamacion',
    inicio: '2026-11-02',
    titulo: 'Proclamación de candidaturas',
    detalle:
      'Las Juntas Electorales proclaman las listas el día 27 y se publican en el BOE al día siguiente (3 de noviembre).',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(47, 'acuarentaysiete')],
  },
  {
    id: 'envio-correo',
    inicio: '2026-11-09',
    titulo: 'Empieza el envío de la documentación del voto por correo',
    detalle:
      'Correos la lleva a quien la pidió, a partir del día 34 tras la convocatoria y hasta el 22 de noviembre. Al recibirla hay que acreditar la identidad y firmar el acuse de recibo en persona.',
    confirmadaOficialmente: true,
    fuentes: [JEC, Fuentes.correosNota29N, articuloLOREG(73, 'asetentaytres')],
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
    fuentes: [JEC, Fuentes.correosNota29N, articuloLOREG(72, 'asetentaydos')],
  },
  {
    id: 'cera-urna',
    inicio: '2026-11-21',
    fin: '2026-11-26',
    titulo: 'Voto en urna en los consulados',
    detalle:
      'Los españoles inscritos como residentes en el extranjero pueden votar en persona en su consulado o embajada. Quien prefiera mandarlo por correo al consulado tiene hasta el 24 de noviembre.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(75, 'asetentaycinco')],
  },
  {
    id: 'encuestas',
    inicio: '2026-11-24',
    fin: '2026-11-28',
    titulo: 'No se pueden publicar encuestas',
    detalle:
      'Durante los cinco días anteriores a la votación ningún medio puede publicar, difundir ni reproducir sondeos electorales.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(69, 'asesentaynueve')],
  },
  {
    id: 'deposito-correo',
    inicio: '2026-11-25',
    esLimite: true,
    titulo: 'Último día para entregar el voto por correo desde España',
    detalle:
      'La ley dice «antes del tercer día previo» a la votación; la Junta Electoral Central y Correos fijan el final del plazo el 25 de noviembre.',
    confirmadaOficialmente: true,
    fuentes: [JEC, Fuentes.correosNota29N, articuloLOREG(73, 'asetentaytres')],
  },
  {
    id: 'reflexion',
    inicio: '2026-11-28',
    titulo: 'Jornada de reflexión',
    detalle: 'La campaña ya ha terminado: no se puede hacer propaganda ni actos de campaña.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(53, 'acincuentaytres')],
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

/** Lo que viene después de votar. */
export const DespuesDeVotar: FechaElectoral[] = [
  {
    id: 'escrutinio',
    inicio: '2026-12-04',
    fin: '2026-12-07',
    titulo: 'Escrutinio general',
    detalle:
      'El recuento oficial de las Juntas Electorales Provinciales empieza el quinto día después de votar. En él se suman los votos de los residentes en el extranjero. Después se proclaman los diputados y senadores elegidos.',
    confirmadaOficialmente: true,
    fuentes: [JEC, articuloLOREG(103, 'acientotres'), articuloLOREG(75, 'asetentaycinco')],
  },
  {
    id: 'constitucion',
    inicio: '2026-12-23',
    titulo: 'Se constituyen el Congreso y el Senado',
    detalle: 'Sesiones constitutivas a las 10:00. Después vendrá la investidura.',
    confirmadaOficialmente: true,
    fuentes: [BOE],
  },
];
