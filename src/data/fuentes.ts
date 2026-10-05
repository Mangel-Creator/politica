import type { Fuente } from './tipos';

/** Fuentes usadas en más de un sitio de la app. */
export const Fuentes = {
  moncloaConvocatoria: {
    titulo: 'La Moncloa: Pedro Sánchez anuncia la convocatoria de elecciones generales para el 29 de noviembre',
    url: 'https://www.lamoncloa.gob.es/presidente/actividades/Paginas/2026/051026-sanchez-convocatoria-elecciones.aspx',
    consultada: '2026-10-05',
    oficial: true,
  },
  rtvcCalendario: {
    titulo: 'RTVC: Calendario elecciones generales 2026, fechas clave hasta el 29 de noviembre',
    url: 'https://rtvc.es/calendario-elecciones-generales-2026-fechas-clave-hasta-29-de-noviembre/',
    consultada: '2026-10-05',
    oficial: false,
  },
  copeCalendario: {
    titulo: 'COPE: Del decreto de convocatoria a la jornada electoral del 29 de noviembre, todas las fechas clave',
    url: 'https://www.cope.es/actualidad/espana/noticias/decreto-convocatoria-elecciones-jornada-electoral-proximo-29-noviembre-son-todas-fechas-clave-anuncio-sanchez-20261005_3449523.html',
    consultada: '2026-10-05',
    oficial: false,
  },
  wikipedia23J: {
    titulo: 'Wikipedia: Elecciones generales de España de 2023 (tabla de resultados)',
    url: 'https://es.wikipedia.org/wiki/Elecciones_generales_de_España_de_2023',
    consultada: '2026-10-05',
    oficial: false,
  },
  /** Solo se ha comprobado que la web existe; sus datos aún no se han contrastado. */
  infoelectoral: {
    titulo: 'Ministerio del Interior: Infoelectoral (resultados oficiales)',
    url: 'https://infoelectoral.interior.gob.es/es/inicio/',
    consultada: '2026-10-05',
    oficial: true,
  },
  correosVoto: {
    titulo: 'Correos: solicitud del voto por correo por internet',
    url: 'https://epostal.correos.es/OV2PREENVWEB/jsp/mioficinavirtual/procelect/homeProcElect.faces',
    consultada: '2026-10-05',
    oficial: true,
  },
} satisfies Record<string, Fuente>;

/** Organismos a los que acudir para comprobar cualquier dato. */
export const FuentesOficiales: { nombre: string; para: string; url: string }[] = [
  {
    nombre: 'Boletín Oficial del Estado (BOE)',
    para: 'Decreto de convocatoria y candidaturas proclamadas',
    url: 'https://www.boe.es/',
  },
  {
    nombre: 'Junta Electoral Central',
    para: 'Normas, plazos y resoluciones del proceso electoral',
    url: 'https://www.juntaelectoralcentral.es/cs/jec/inicio',
  },
  {
    nombre: 'Infoelectoral (Ministerio del Interior)',
    para: 'Resultados oficiales de elecciones anteriores',
    url: 'https://infoelectoral.interior.gob.es/es/inicio/',
  },
  {
    nombre: 'Oficina del Censo Electoral (INE)',
    para: 'Censo electoral',
    url: 'https://www.ine.es/dyngs/CEL/index.htm?cid=41',
  },
  {
    nombre: 'Correos: procesos electorales',
    para: 'Pedir el voto por correo por internet',
    url: 'https://epostal.correos.es/OV2PREENVWEB/jsp/mioficinavirtual/procelect/homeProcElect.faces',
  },
  {
    nombre: 'Congreso de los Diputados',
    para: 'Votaciones, iniciativas y diputados',
    url: 'https://www.congreso.es/es/',
  },
  {
    nombre: 'Centro de Investigaciones Sociológicas (CIS)',
    para: 'Encuestas públicas',
    url: 'https://www.cis.es/',
  },
];
