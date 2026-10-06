import type { Fuente } from './tipos';

/** Un artículo de la LOREG en el texto consolidado del BOE (las anclas usan el número en letra). */
export function articuloLOREG(numero: number, ancla: string): Fuente {
  return {
    titulo: `BOE: Ley Orgánica del Régimen Electoral General, artículo ${numero}`,
    url: `https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672#${ancla}`,
    consultada: '2026-10-06',
    oficial: true,
  };
}

/** Fuentes usadas en más de un sitio de la app. */
export const Fuentes = {
  boeConvocatoria: {
    titulo:
      'BOE: Real Decreto 806/2026, de 5 de octubre, de disolución del Congreso y del Senado y de convocatoria de elecciones',
    url: 'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2026-20742',
    consultada: '2026-10-06',
    oficial: true,
  },
  correosNota29N: {
    titulo: 'Correos: Ya se puede solicitar el voto por correo para las Elecciones Generales del 29 de noviembre',
    url: 'https://www.correos.com/sala-prensa/ya-se-puede-solicitar-el-voto-por-correo-para-las-elecciones-generales-del-29-de-noviembre/',
    consultada: '2026-10-06',
    oficial: true,
  },
  moncloaConvocatoria: {
    titulo: 'La Moncloa: Pedro Sánchez anuncia la convocatoria de elecciones generales para el 29 de noviembre',
    url: 'https://www.lamoncloa.gob.es/presidente/actividades/Paginas/2026/051026-sanchez-convocatoria-elecciones.aspx',
    consultada: '2026-10-05',
    oficial: true,
  },
  /** Fichero oficial de totales del Congreso del 23J (formato del Ministerio, leído el 06/10/2026). */
  infoelectoral23J: {
    titulo:
      'Ministerio del Interior (Infoelectoral): resultados oficiales del Congreso del 23J 2023, fichero de totales',
    url: 'https://infoelectoral.interior.gob.es/estaticos/docxl/apliextr/02202307_TOTA.zip',
    consultada: '2026-10-06',
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
