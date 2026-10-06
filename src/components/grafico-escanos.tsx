import { StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import { GENERALES_HISTORICAS, nombreEleccion, type Trayectoria } from '@/data/historia-detallada';
import { useTheme } from '@/hooks/use-theme';

const ALTO = 150;
const MAYORIA = 176;

/**
 * Escaños en cada una de las generales desde 1977. Barra llena: el propio partido. Barra
 * hueca: el partido o la coalición de la que procede. Sin barra: no obtuvo escaño o no se
 * presentó con candidatura propia.
 */
export function GraficoEscanos({ trayectoria, color }: { trayectoria: Trayectoria; color: string }) {
  const t = useTheme();
  const porEleccion = new Map(
    trayectoria.map((x) => [x.eleccion, { tipo: x.tipo, n: x.candidaturas.reduce((s, c) => s + c.escanos, 0) }]),
  );
  const maximo = Math.max(...[...porEleccion.values()].map((x) => x.n), 1);
  const conMayoria = maximo >= MAYORIA;
  const descripcion = GENERALES_HISTORICAS.map((e) => `${nombreEleccion(e)}: ${porEleccion.get(e)?.n ?? 0}`).join(', ');

  return (
    <View accessible accessibilityLabel={`Escaños en el Congreso por elección. ${descripcion}.`}>
      <View style={[styles.lienzo, { height: ALTO + 22, borderBottomColor: t.linea }]}>
        {conMayoria && (
          <View style={[styles.mayoria, { bottom: (MAYORIA / maximo) * ALTO, borderColor: t.gris }]}>
            <Texto tipo="etiqueta" color="gris" style={[styles.mayoriaTexto, { backgroundColor: t.papel }]}>
              mayoría 176
            </Texto>
          </View>
        )}
        {GENERALES_HISTORICAS.map((e) => {
          const dato = porEleccion.get(e);
          const alto = dato ? Math.max((dato.n / maximo) * ALTO, 3) : 0;
          const hueca = dato?.tipo === 'antecesora';
          return (
            <View key={e} style={styles.columna}>
              {dato ? (
                <Texto tipo="etiqueta" color={hueca ? 'gris' : 'tinta'} numberOfLines={1} style={styles.cifra}>
                  {dato.n}
                </Texto>
              ) : null}
              <View
                style={[
                  styles.barra,
                  {
                    height: alto,
                    backgroundColor: hueca ? t.papel : color,
                    borderColor: color,
                    borderWidth: hueca ? Borde.grueso : 0,
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
      <View style={styles.ejes}>
        {GENERALES_HISTORICAS.map((e, i) => (
          <View key={e} style={styles.columna}>
            <Texto tipo="etiqueta" color="gris" numberOfLines={1} style={styles.anio}>
              {i % 2 === 0 || i === GENERALES_HISTORICAS.length - 1 ? `’${e.slice(2, 4)}` : ''}
            </Texto>
          </View>
        ))}
      </View>
      <View style={styles.leyenda}>
        <View style={styles.leyendaItem}>
          <View style={[styles.muestra, { backgroundColor: color }]} />
          <Texto tipo="pequeno" color="gris">
            El partido
          </Texto>
        </View>
        {[...porEleccion.values()].some((x) => x.tipo === 'antecesora') && (
          <View style={styles.leyendaItem}>
            <View style={[styles.muestra, { borderColor: color, borderWidth: Borde.grueso }]} />
            <Texto tipo="pequeno" color="gris">
              Su antecesor
            </Texto>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lienzo: { flexDirection: 'row', alignItems: 'flex-end', gap: 3, borderBottomWidth: Borde.grueso },
  columna: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  cifra: { fontSize: 9, letterSpacing: 0, marginBottom: 2 },
  barra: { width: '100%' },
  mayoria: { position: 'absolute', left: 0, right: 0, borderTopWidth: 1, borderStyle: 'dashed' },
  mayoriaTexto: { position: 'absolute', left: 0, top: -7, fontSize: 9, paddingRight: Spacing.one },
  ejes: { flexDirection: 'row', gap: 3, marginTop: Spacing.one },
  anio: { fontSize: 9, letterSpacing: 0 },
  leyenda: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.three, marginTop: Spacing.three },
  leyendaItem: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  muestra: { width: 14, height: 14 },
});
