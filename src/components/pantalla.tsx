import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from './themed-text';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  /** Título grande arriba. Omítelo en pantallas que ya tienen cabecera de navegación. */
  titulo?: string;
  entradilla?: string;
  children: ReactNode;
};

/** Contenedor con scroll, márgenes y ancho máximo comunes a todas las pantallas. */
export function Pantalla({ titulo, entradilla, children }: Props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={[
        styles.contenido,
        { paddingTop: titulo ? insets.top + Spacing.four : Spacing.three },
        { paddingBottom: insets.bottom + BottomTabInset + Spacing.five },
      ]}>
      <View style={styles.columna}>
        {titulo && (
          <View style={styles.cabecera}>
            <ThemedText type="subtitle" accessibilityRole="header">
              {titulo}
            </ThemedText>
            {entradilla && <ThemedText themeColor="textSecondary">{entradilla}</ThemedText>}
          </View>
        )}
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    paddingHorizontal: Spacing.three,
    alignItems: 'center',
  },
  columna: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.four,
  },
  cabecera: {
    gap: Spacing.two,
  },
});
