import type { Eleccion, ResumenPrograma } from '../tipos';

import { ProgramaBNG } from './bng';
import { ProgramaCC } from './cc';
import { ProgramaEHBildu } from './eh-bildu';
import { ProgramaPNV } from './pnv';
import { ProgramaPP } from './pp';
import { ProgramaPSOE } from './psoe';
import { ProgramaSumar } from './sumar';
import { ProgramaUPN } from './upn';
import { ProgramaVox } from './vox';

/**
 * Resúmenes de los programas, hechos leyendo cada PDF entero. Cada medida lleva su
 * página para poder comprobarla. Son lo que dice cada partido, no hechos comprobados.
 */
export const Resumenes: ResumenPrograma[] = [
  ProgramaBNG,
  ProgramaCC,
  ProgramaEHBildu,
  ProgramaPNV,
  ProgramaPP,
  ProgramaPSOE,
  ProgramaSumar,
  ProgramaUPN,
  ProgramaVox,
];

export function resumenDe(partidoId: string, eleccion: Eleccion = '23J 2023') {
  return Resumenes.find((r) => r.partidoId === partidoId && r.eleccion === eleccion);
}
