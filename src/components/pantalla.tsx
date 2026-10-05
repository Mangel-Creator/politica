import { router } from 'expo-router';
import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Pulsable } from './piezas';
import { Texto } from './texto';

import { Borde, BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Props = {
  /** Rótulo pequeño encima del título. */
  antetitulo?: string;
  titulo?: string;
  entradilla?: string;
  /** Botón de volver (pantallas de detalle). */
  atras?: boolean;
  children: ReactNode;
};

/** Contenedor común: scroll, márgenes, ancho máximo y cabecera de papeleta. */
export function Pantalla({ antetitulo, titulo, entradilla, atras, children }: Props) {
  const t = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ backgroundColor: t.papel }}
      contentContainerStyle={[
        styles.contenido,
        { paddingTop: insets.top + Spacing.three, paddingBottom: insets.bottom + BottomTabInset + Spacing.six },
      ]}>
      <View style={styles.columna}>
        {atras && <Volver />}
        {(antetitulo || titulo) && (
          <View style={styles.cabecera}>
            {antetitulo && (
              <Texto tipo="etiqueta" color="gris">
                {antetitulo}
              </Texto>
            )}
            {titulo && (
              <Texto tipo="display" accessibilityRole="header">
                {titulo}
              </Texto>
            )}
            {entradilla && <Texto color="gris">{entradilla}</Texto>}
          </View>
        )}
        {children}
      </View>
    </ScrollView>
  );
}

function Volver() {
  const t = useTheme();
  return (
    <Pulsable
      accessibilityRole="button"
      accessibilityLabel="Volver"
      onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}
      style={[styles.volver, { borderColor: t.linea }]}>
      <Texto tipo="subtitulo">←</Texto>
    </Pulsable>
  );
}

const styles = StyleSheet.create({
  contenido: { paddingHorizontal: Spacing.three, alignItems: 'center' },
  columna: { width: '100%', maxWidth: MaxContentWidth, gap: Spacing.five },
  cabecera: { gap: Spacing.two },
  volver: {
    width: 48,
    height: 48,
    borderWidth: Borde.grueso,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -Spacing.three,
  },
});
