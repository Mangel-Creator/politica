import { type ReactNode } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Bloque con fondo suave para agrupar contenido. */
export function Tarjeta({ style, ...rest }: ViewProps) {
  const theme = useTheme();
  return (
    <View
      style={[styles.tarjeta, { backgroundColor: theme.backgroundElement, borderColor: theme.border }, style]}
      {...rest}
    />
  );
}

/** Título de sección con contenido debajo. */
export function Seccion({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View style={styles.seccion}>
      <ThemedText type="heading" accessibilityRole="header">
        {titulo}
      </ThemedText>
      {children}
    </View>
  );
}

/** Píldora pequeña. `aviso` para lo que el usuario debe tomar con cautela. */
export function Etiqueta({ texto, aviso = false }: { texto: string; aviso?: boolean }) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.etiqueta,
        { backgroundColor: aviso ? theme.aviso : theme.backgroundSelected },
      ]}>
      <ThemedText type="smallBold" style={{ color: aviso ? theme.avisoTexto : theme.text }}>
        {texto}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    borderRadius: Spacing.three,
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  seccion: {
    gap: Spacing.three,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    borderRadius: Spacing.five,
    paddingHorizontal: Spacing.two + Spacing.half,
    paddingVertical: Spacing.half,
  },
});
