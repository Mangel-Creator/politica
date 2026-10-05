/**
 * Colores de la app en modo claro y oscuro.
 *
 * Paleta neutra a propósito: tinta y papel, sin azules, rojos, verdes, morados
 * ni naranjas, que en España se asocian a partidos concretos. La app no debe
 * sugerir preferencia por nadie ni siquiera con el color.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#16181D',
    background: '#FAFAF7',
    backgroundElement: '#F0EFEA',
    backgroundSelected: '#E3E1DA',
    textSecondary: '#5C6068',
    border: '#D9D6CE',
    aviso: '#F6EFD9',
    avisoTexto: '#5E4A12',
  },
  dark: {
    text: '#F2F1EC',
    background: '#111214',
    backgroundElement: '#1C1D21',
    backgroundSelected: '#2A2C31',
    textSecondary: '#A4A7AE',
    border: '#33353B',
    aviso: '#2E2716',
    avisoTexto: '#E9D9A6',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
