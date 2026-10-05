/**
 * Sistema visual "papeleta": tinta sobre papel, bordes gruesos, esquinas rectas, cifras
 * enormes y etiquetas en mayúsculas. Sin color de acento: el único color de la app es el de
 * los partidos, y solo para identificarlos en gráficos, siempre acompañado de sus siglas.
 */

import '@/global.css';

import { Platform, type TextStyle } from 'react-native';

export const Colors = {
  light: {
    tinta: '#0E0E10',
    papel: '#FFFFFF',
    gris: '#5E5E66',
    grisClaro: '#9A9AA3',
    linea: '#0E0E10',
    lineaSuave: '#E3E3E0',
    fondoSuave: '#F3F3F1',
    // Alias que usan los componentes heredados de la plantilla.
    text: '#0E0E10',
    background: '#FFFFFF',
    backgroundElement: '#F3F3F1',
    backgroundSelected: '#E3E3E0',
    textSecondary: '#5E5E66',
  },
  dark: {
    tinta: '#F4F4F2',
    papel: '#0B0B0C',
    gris: '#A6A6AE',
    grisClaro: '#6E6E76',
    linea: '#F4F4F2',
    lineaSuave: '#2A2A2E',
    fondoSuave: '#18181B',
    text: '#F4F4F2',
    background: '#0B0B0C',
    backgroundElement: '#18181B',
    backgroundSelected: '#2A2A2E',
    textSecondary: '#A6A6AE',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
export type Paleta = (typeof Colors)['light'] | (typeof Colors)['dark'];

/** Familias cargadas con @expo-google-fonts/archivo (ver src/app/_layout.tsx). */
export const Familias = {
  regular: 'Archivo_400Regular',
  medio: 'Archivo_500Medium',
  seminegrita: 'Archivo_600SemiBold',
  negrita: 'Archivo_700Bold',
  extra: 'Archivo_800ExtraBold',
  black: 'Archivo_900Black',
} as const;

const numeros: TextStyle = { fontVariant: ['tabular-nums'] };

/** Escala tipográfica. Los nombres describen el uso, no el tamaño. */
export const Tipos = {
  gigante: { fontFamily: Familias.black, fontSize: 88, lineHeight: 84, letterSpacing: -4, ...numeros },
  display: { fontFamily: Familias.black, fontSize: 42, lineHeight: 44, letterSpacing: -0.9 },
  titulo: { fontFamily: Familias.black, fontSize: 30, lineHeight: 33, letterSpacing: -0.4 },
  subtitulo: { fontFamily: Familias.extra, fontSize: 21, lineHeight: 25, letterSpacing: -0.3 },
  cuerpo: { fontFamily: Familias.regular, fontSize: 16, lineHeight: 23 },
  cuerpoFuerte: { fontFamily: Familias.seminegrita, fontSize: 16, lineHeight: 23 },
  pequeno: { fontFamily: Familias.regular, fontSize: 14, lineHeight: 20 },
  pequenoFuerte: { fontFamily: Familias.negrita, fontSize: 14, lineHeight: 20 },
  etiqueta: {
    fontFamily: Familias.negrita,
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
  },
  dato: { fontFamily: Familias.black, fontSize: 28, lineHeight: 30, letterSpacing: -0.6, ...numeros },
} satisfies Record<string, TextStyle>;

export type TipoTexto = keyof typeof Tipos;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

/** Grosor de los bordes "de papeleta". */
export const Borde = { fino: 1, grueso: 2.5 } as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 760;

export const Fonts = Platform.select({
  ios: { sans: 'system-ui', serif: 'ui-serif', rounded: 'ui-rounded', mono: 'ui-monospace' },
  default: { sans: 'normal', serif: 'serif', rounded: 'normal', mono: 'monospace' },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});
