import type { Postura } from '@/data/precedentes';

/** Cómo se dibuja la postura de un partido ante una idea. Sin colores: forma y palabra. */
export const Sentidos: Record<Postura['sentido'], { simbolo: string; texto: string }> = {
  impulsa: { simbolo: '▲', texto: 'Lo propone' },
  frena: { simbolo: '▼', texto: 'Lo rechaza' },
  matiza: { simbolo: '◆', texto: 'Con matices' },
};
