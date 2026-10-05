/**
 * Tipos de datos compartidos. Regla del proyecto: ningún dato sin fuente.
 */

/** De dónde sale un dato. `consultada` es la fecha en que se comprobó (AAAA-MM-DD). */
export type Fuente = {
  titulo: string;
  url: string;
  consultada: string;
  /** Organismo público o el propio partido, frente a un medio o una enciclopedia. */
  oficial: boolean;
};

/** Fecha del calendario electoral. Las fechas van en AAAA-MM-DD, hora de la península. */
export type FechaElectoral = {
  id: string;
  inicio: string;
  /** Solo si es un plazo de varios días. */
  fin?: string;
  /** Para plazos que acaban un día ("hasta el 19 de noviembre"). */
  esLimite?: boolean;
  titulo: string;
  detalle?: string;
  /** `true` cuando la fecha se ha comprobado en el BOE o en la Junta Electoral Central. */
  confirmadaOficialmente: boolean;
  fuentes: Fuente[];
};

export type Eleccion = '23J 2023' | '29N 2026';

/** Programa electoral tal como lo publicó el partido (ver Programas electorales/REGISTRO.md). */
export type Programa = {
  eleccion: Eleccion;
  /** "Programa completo", "Manifiesto"… lo que realmente es el documento. */
  tipo: string;
  paginas: number;
  /** Fecha interna del PDF (AAAA-MM-DD). */
  fechaDocumento: string;
  urlOficial: string;
  /** Copia del Internet Archive del mismo enlace oficial, por si la web del partido cambia. */
  urlArchivo?: string;
  sha256: string;
};

/** Temas comunes para resumir y comparar programas. */
export type TemaId =
  | 'vivienda'
  | 'empleo'
  | 'impuestos'
  | 'pensiones'
  | 'sanidad'
  | 'educacion'
  | 'economia'
  | 'energia'
  | 'inmigracion'
  | 'igualdad'
  | 'seguridad'
  | 'territorio'
  | 'democracia'
  | 'social'
  | 'rural'
  | 'exterior';

/** Una medida del programa, resumida, con la página del PDF donde aparece. */
export type Propuesta = {
  texto: string;
  /** Número de página del PDF (la que muestra el visor), no el número impreso. */
  pagina: number;
};

/**
 * Resumen de un programa. Regla: solo lo que dice el documento, con su página; se
 * quita el relleno (diagnósticos, autoelogios, frases genéricas) pero no las medidas.
 */
export type ResumenPrograma = {
  partidoId: string;
  eleccion: Eleccion;
  /** Las medidas que el propio documento destaca o que más lo distinguen. */
  ideasClave: Propuesta[];
  temas: Partial<Record<TemaId, Propuesta[]>>;
  /** Aviso sobre el documento (por ejemplo, si es un manifiesto breve). */
  nota?: string;
};

export type Partido = {
  id: string;
  siglas: string;
  nombre: string;
  web: string;
  /** Escaños en el Congreso el 23J 2023. `null` si no se presentó con candidatura propia. */
  escanos2023: number | null;
  nota2023?: string;
  programas: Programa[];
  /** Programas que se buscaron y no se encontraron en fuente oficial. */
  programasNoLocalizados?: { eleccion: Eleccion; motivo: string }[];
};
