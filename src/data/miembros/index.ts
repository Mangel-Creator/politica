import { MiembrosBNG } from './bng';
import { MiembrosCC } from './cc';
import { MiembrosEHBildu } from './eh-bildu';
import { MiembrosERC } from './erc';
import { MiembrosJunts } from './junts';
import { MiembrosPNV } from './pnv';
import { MiembrosPodemos } from './podemos';
import { MiembrosPP } from './pp';
import { MiembrosPSOE } from './psoe';
import { MiembrosSumar } from './sumar';
import type { MiembrosPartido } from './tipos';
import { MiembrosUPN } from './upn';
import { MiembrosVox } from './vox';

export { CONSULTA_MIEMBROS } from './fuentes';
export type { Candidatura, Cargo, Estudio, Mencion, Miembro, MiembrosPartido, Ministrable } from './tipos';

/** Un bloque por partido, en el mismo orden alfabético que `Partidos`. */
export const Miembros: MiembrosPartido[] = [
  MiembrosBNG,
  MiembrosCC,
  MiembrosEHBildu,
  MiembrosERC,
  MiembrosJunts,
  MiembrosPNV,
  MiembrosPodemos,
  MiembrosPP,
  MiembrosPSOE,
  MiembrosSumar,
  MiembrosUPN,
  MiembrosVox,
];

export function miembrosDe(partidoId: string): MiembrosPartido | undefined {
  return Miembros.find((m) => m.partidoId === partidoId);
}
