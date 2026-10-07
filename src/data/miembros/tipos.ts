import type { Fuente } from '../tipos';

/**
 * Miembros de la dirección de cada partido y lo que se sabe del Gobierno que proponen.
 * Reglas: cada dato con su fuente; primero lo oficial (Congreso, La Moncloa, la web del
 * partido, parlamentos); si dos fuentes no coinciden se dice quién dice qué y manda la
 * oficial. Sin adjetivos ni valoraciones.
 */

/** Un cargo, con desde cuándo lo ocupa si consta. */
export type Cargo = {
  cargo: string;
  /** Texto libre: «julio de 2025», «desde 2016»… */
  desde?: string;
  fuentes: Fuente[];
};

/** Un título o unos estudios tal como figuran en la fuente. */
export type Estudio = {
  titulo: string;
  centro?: string;
  anio?: string;
  /** Si la fuente dice que no los terminó o que los está cursando. */
  estado?: 'sin terminar' | 'en curso';
};

export type Miembro = {
  nombre: string;
  /** Su papel en pocas palabras, para la cabecera: «Presidente», «Portavoz en el Congreso». */
  papel: string;
  cargos: Cargo[];
  nacimiento?: { anio: string; lugar?: string; fuentes: Fuente[] };
  /** Vacío si ninguna fuente consultada recoge sus estudios. */
  estudios: Estudio[];
  fuentesEstudios: Fuente[];
  /** Dos o tres frases con hechos y fechas. */
  trayectoria: string[];
  /**
   * Fuentes que no coinciden o títulos discutidos: quién dice qué y cómo acabó. También los
   * casos judiciales, con su desenlace completo.
   */
  avisos?: string[];
  fuentes: Fuente[];
};

/** Quién encabeza la candidatura del partido el 29N. */
export type Candidatura = {
  /** `anunciada`: lo ha dicho el partido; `pendiente`: aún no hay nombre oficial. */
  estado: 'anunciada' | 'propuesta' | 'pendiente';
  texto: string;
  fuentes: Fuente[];
};

/** Una noticia que cita a alguien como posible ministro. */
export type Mencion = {
  medio: string;
  /** AAAA-MM-DD de publicación. */
  fecha: string;
  titulo: string;
  url: string;
  consultada: string;
  /** Lo que dice esa noticia de esa persona, resumido. */
  dice: string;
};

/** Persona que la prensa sitúa en un futuro Gobierno. Siempre especulación, nunca anuncio. */
export type Ministrable = {
  nombre: string;
  /** Quién es hoy, para situarlo. */
  perfil: string;
  /** Menciones en orden alfabético de medio. */
  menciones: Mencion[];
};

export type MiembroDelGobierno = { nombre: string; cargo: string; partido?: string };

export type MiembrosPartido = {
  partidoId: string;
  candidatura: Candidatura;
  miembros: Miembro[];
  /** Solo para los partidos que están en el Gobierno. */
  gobiernoActual?: { texto: string; miembros: MiembroDelGobierno[]; fuentes: Fuente[] };
  /** Lo que el partido ha anunciado oficialmente sobre su equipo de gobierno. */
  anunciado: { texto: string; fuentes: Fuente[] };
  /** Ministrables según la prensa. */
  prensa: Ministrable[];
  /** Qué se buscó y qué no se encontró en prensa. */
  notaPrensa?: string;
};
