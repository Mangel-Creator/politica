import { StyleSheet, View } from 'react-native';

import { Pagina } from './piezas';
import { Texto } from './texto';

import { Spacing } from '@/constants/theme';
import type { Propuesta } from '@/data/tipos';

/** Medidas de un programa, cada una con su página del PDF. */
export function ListaPropuestas({ propuestas, sangria = 0 }: { propuestas: Propuesta[]; sangria?: number }) {
  return (
    <View style={[styles.lista, { paddingLeft: sangria }]}>
      {propuestas.map((x) => (
        <View key={x.texto} style={styles.propuesta}>
          <Texto>— {x.texto}</Texto>
          <Pagina n={x.pagina} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  lista: { gap: Spacing.three },
  propuesta: { gap: Spacing.one },
});
