import { StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Spacing } from '@/constants/theme';
import { CONSULTA_HISTORIAS, type Lider } from '@/data/historia-detallada';
import { useTheme } from '@/hooks/use-theme';

const HOY = Number(CONSULTA_HISTORIAS.slice(0, 4));

/** Cada líder con una barra que marca sus años en el cargo sobre una misma escala. */
export function LineaLideres({ lideres }: { lideres: Lider[] }) {
  const t = useTheme();
  const inicio = Math.min(...lideres.map((l) => Number(l.desde)));
  const tramo = Math.max(HOY - inicio, 1);
  const ordenados = [...lideres].sort((a, b) => a.desde.localeCompare(b.desde));

  return (
    <View style={styles.lista}>
      {ordenados.map((l, i) => {
        const desde = Number(l.desde);
        const hasta = l.hasta ? Number(l.hasta) : HOY;
        const izquierda = ((desde - inicio) / tramo) * 100;
        const ancho = Math.max(((hasta - desde + 1) / (tramo + 1)) * 100, 1.5);
        const anos = l.hasta ? (l.hasta === l.desde ? l.desde : `${l.desde}–${l.hasta}`) : `desde ${l.desde}`;
        return (
          <View key={`${l.nombre}-${l.cargo}-${i}`} style={styles.fila}>
            <View style={styles.cabeza}>
              <Texto tipo="cuerpoFuerte" style={styles.flex}>
                {l.nombre}
              </Texto>
              <Texto tipo="pequenoFuerte">{anos}</Texto>
            </View>
            <Texto tipo="pequeno" color="gris">
              {l.cargo}
            </Texto>
            <View style={[styles.pista, { backgroundColor: t.lineaSuave }]}>
              <View
                style={[
                  styles.tramo,
                  { left: `${izquierda}%`, width: `${Math.min(ancho, 100 - izquierda)}%`, backgroundColor: t.tinta },
                ]}
              />
            </View>
          </View>
        );
      })}
      <View style={styles.eje}>
        <Texto tipo="etiqueta" color="gris">
          {inicio}
        </Texto>
        <Texto tipo="etiqueta" color="gris">
          {HOY}
        </Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  lista: { gap: Spacing.three },
  fila: { gap: Spacing.half },
  cabeza: { flexDirection: 'row', alignItems: 'baseline', gap: Spacing.two },
  pista: { height: 8, marginTop: Spacing.one },
  tramo: { position: 'absolute', top: 0, bottom: 0 },
  eje: { flexDirection: 'row', justifyContent: 'space-between' },
});
