import { StyleSheet, View } from 'react-native';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';
import type { Fuente } from '@/data/tipos';
import { fechaCorta } from '@/services/fechas';

/** Enlace de texto subrayado que abre una web externa. */
export function Enlace({ href, children }: { href: string; children: string }) {
  return (
    <ExternalLink href={href as `https://${string}`} accessibilityRole="link">
      <ThemedText type="small" style={styles.enlace}>
        {children}
      </ThemedText>
    </ExternalLink>
  );
}

/** "Fuente oficial" o "Medio / enciclopedia", con el enlace y la fecha de consulta. */
export function ListaFuentes({ fuentes }: { fuentes: Fuente[] }) {
  return (
    <View style={styles.lista}>
      {fuentes.map((f) => (
        <View key={f.url} style={styles.fuente}>
          <ThemedText type="small" themeColor="textSecondary">
            {f.oficial ? 'Fuente oficial' : 'Medio o enciclopedia'} · consultada el {fechaCorta(f.consultada)}
          </ThemedText>
          <Enlace href={f.url}>{f.titulo}</Enlace>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  enlace: {
    textDecorationLine: 'underline',
  },
  lista: {
    gap: Spacing.two,
  },
  fuente: {
    gap: Spacing.half,
  },
});
