import { StyleSheet, View } from 'react-native';

import { ExternalLink } from './external-link';
import { Texto } from './texto';

import { Spacing } from '@/constants/theme';
import type { Fuente } from '@/data/tipos';
import { fechaCorta } from '@/services/fechas';

/** Enlace de texto subrayado que abre una web externa. */
export function Enlace({ href, children, fuerte }: { href: string; children: string; fuerte?: boolean }) {
  return (
    <ExternalLink href={href as `https://${string}`} accessibilityRole="link">
      <Texto tipo={fuerte ? 'pequenoFuerte' : 'pequeno'} style={styles.enlace}>
        {children} ↗
      </Texto>
    </ExternalLink>
  );
}

/** Cada fuente con su tipo, su enlace y cuándo se consultó. */
export function ListaFuentes({ fuentes }: { fuentes: Fuente[] }) {
  return (
    <View style={styles.lista}>
      {fuentes.map((f) => (
        <View key={f.url} style={styles.fuente}>
          <Texto tipo="etiqueta" color="gris">
            {f.oficial ? 'Fuente oficial' : 'Otra fuente'} · {fechaCorta(f.consultada)}
          </Texto>
          <Enlace href={f.url}>{f.titulo}</Enlace>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  enlace: { textDecorationLine: 'underline' },
  lista: { gap: Spacing.three },
  fuente: { gap: Spacing.half },
});
