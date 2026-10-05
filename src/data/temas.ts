import type { TemaId } from './tipos';

export type Tema = {
  id: TemaId;
  nombre: string;
  /** Pregunta que responde el tema, en lenguaje llano. */
  pregunta: string;
  /** Glifo corto para la interfaz (no depende de librerías de iconos). */
  glifo: string;
};

/** Orden fijo, el mismo para todos los partidos. */
export const Temas: Tema[] = [
  { id: 'vivienda', nombre: 'Vivienda', pregunta: '¿Cómo quieren abaratar comprar o alquilar?', glifo: '⌂' },
  { id: 'empleo', nombre: 'Trabajo', pregunta: 'Sueldos, jornada, contratos y autónomos', glifo: '⚒' },
  { id: 'impuestos', nombre: 'Impuestos', pregunta: '¿Quién paga más y quién menos?', glifo: '€' },
  { id: 'sanidad', nombre: 'Sanidad', pregunta: 'Listas de espera, médicos y salud mental', glifo: '✚' },
  { id: 'pensiones', nombre: 'Pensiones', pregunta: '¿Cuánto suben y cómo se pagan?', glifo: '◷' },
  { id: 'educacion', nombre: 'Educación', pregunta: 'Escuela, universidad, becas y lenguas', glifo: '✎' },
  { id: 'inmigracion', nombre: 'Inmigración', pregunta: 'Fronteras, regularización y acogida', glifo: '⇄' },
  {
    id: 'territorio',
    nombre: 'Modelo territorial',
    pregunta: 'Autonomías, financiación e independentismo',
    glifo: '▦',
  },
  { id: 'democracia', nombre: 'Instituciones', pregunta: 'Justicia, corrupción, memoria y transparencia', glifo: '⚖' },
  { id: 'seguridad', nombre: 'Seguridad', pregunta: 'Policía, delitos y terrorismo', glifo: '◈' },
  { id: 'igualdad', nombre: 'Igualdad', pregunta: 'Mujeres, LGTBI, aborto y violencia de género', glifo: '⚥' },
  { id: 'social', nombre: 'Familias y cuidados', pregunta: 'Ayudas por hijo, dependencia y pobreza', glifo: '♡' },
  { id: 'energia', nombre: 'Energía y clima', pregunta: 'Luz, renovables, nucleares y medio ambiente', glifo: '☀' },
  { id: 'economia', nombre: 'Economía', pregunta: 'Empresas, industria, bancos y precios', glifo: '↗' },
  { id: 'rural', nombre: 'Campo y agua', pregunta: 'Agricultura, pesca, despoblación y agua', glifo: '❦' },
  { id: 'exterior', nombre: 'Europa y mundo', pregunta: 'UE, defensa, OTAN y política exterior', glifo: '◍' },
];

export function buscarTema(id: string): Tema | undefined {
  return Temas.find((t) => t.id === id);
}
