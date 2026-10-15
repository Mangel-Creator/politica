import type { Ejercicio, Leccion, Unidad } from './base';
import { UnidadVotar } from './u1-votar';
import { UnidadEscanos } from './u2-escanos';
import { UnidadCongreso } from './u3-congreso';
import { UnidadTemas } from './u4-temas';
import { UnidadInstituciones } from './u5-instituciones';

export * from './base';
export * from './glosario';

/** El camino de Aprende, en el orden en que se recomienda hacerlo. Todo comprobado en el BOE. */
export const Unidades: Unidad[] = [UnidadVotar, UnidadEscanos, UnidadCongreso, UnidadTemas, UnidadInstituciones];

export const Lecciones: Leccion[] = Unidades.flatMap((u) => u.lecciones);

export const Ejercicios: Ejercicio[] = Lecciones.flatMap((l) => l.ejercicios);

export function buscarLeccion(id: string) {
  return Lecciones.find((l) => l.id === id);
}

export function unidadDe(leccionId: string) {
  return Unidades.find((u) => u.lecciones.some((l) => l.id === leccionId));
}

/** Lección a la que pertenece un ejercicio. */
export function leccionDeEjercicio(ejercicioId: string) {
  return Lecciones.find((l) => l.ejercicios.some((e) => e.id === ejercicioId));
}
