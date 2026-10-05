import { StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Spacing, type TipoTexto } from '@/constants/theme';
import { buscarPartido } from '@/data/partidos';

/** Cuadrado del color del partido. Nunca va solo: siempre al lado de sus siglas. */
export function Muestra({ color, lado = 12 }: { color: string; lado?: number }) {
  return <View style={{ width: lado, height: lado, backgroundColor: color }} />;
}

/** Color y siglas de un partido. */
export function MarcaPartido({
  id,
  tipo = 'pequenoFuerte',
  lado = 12,
}: {
  id: string;
  tipo?: TipoTexto;
  lado?: number;
}) {
  const p = buscarPartido(id);
  if (!p) return null;
  return (
    <View style={styles.marca}>
      <Muestra color={p.color} lado={lado} />
      <Texto tipo={tipo}>{p.siglas}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  marca: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
});
