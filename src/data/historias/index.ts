import type { HistoriaDetallada } from '../historia-detallada';
import { HistoriaBNG } from './bng';
import { HistoriaCC } from './cc';
import { HistoriaEHBildu } from './eh-bildu';
import { HistoriaERC } from './erc';
import { HistoriaJunts } from './junts';
import { HistoriaPNV } from './pnv';
import { HistoriaPodemos } from './podemos';
import { HistoriaPP } from './pp';
import { HistoriaPSOE } from './psoe';
import { HistoriaSumar } from './sumar';
import { HistoriaUPN } from './upn';
import { HistoriaVox } from './vox';

/** Una por partido, en el mismo orden alfabético que `Partidos`. */
export const HistoriasDetalladas: HistoriaDetallada[] = [
  HistoriaBNG,
  HistoriaCC,
  HistoriaEHBildu,
  HistoriaERC,
  HistoriaJunts,
  HistoriaPNV,
  HistoriaPodemos,
  HistoriaPP,
  HistoriaPSOE,
  HistoriaSumar,
  HistoriaUPN,
  HistoriaVox,
];

export function historiaDetalladaDe(partidoId: string): HistoriaDetallada | undefined {
  return HistoriasDetalladas.find((h) => h.partidoId === partidoId);
}
