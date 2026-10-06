import { StyleSheet, View } from 'react-native';

import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Ir, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { GENERALES_HISTORICAS } from '@/data/historia-detallada';
import { historiaDe } from '@/data/historias';
import { historiaDetalladaDe } from '@/data/historias/index';
import { Partidos } from '@/data/partidos';
import { Trayectorias } from '@/data/trayectorias';
import { useTheme } from '@/hooks/use-theme';

export default function PantallaHistorias() {
  const t = useTheme();

  return (
    <Pantalla
      atras
      antetitulo="Historia · 12 partidos"
      titulo="De dónde viene cada partido"
      entradilla="Su recorrido por etapas, quién lo ha dirigido, sus escaños en todas las generales desde 1977 y los casos judiciales con su desenlace. Mismo formato para todos.">
      <View style={styles.lista}>
        {Partidos.map((p) => {
          const h = historiaDetalladaDe(p.id);
          const fundacion = historiaDe(p.id)?.fundacion;
          const tramos = new Map(
            (Trayectorias[p.id] ?? []).map((x) => [
              x.eleccion,
              { tipo: x.tipo, n: x.candidaturas.reduce((s, c) => s + c.escanos, 0) },
            ]),
          );
          const maximo = Math.max(...[...tramos.values()].map((x) => x.n), 1);
          return (
            <Ir
              key={p.id}
              href={{ pathname: '/historia/[id]', params: { id: p.id } }}
              accessibilityLabel={`Historia de ${p.siglas}`}
              style={[styles.fila, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.izquierda}>
                <View style={styles.siglas}>
                  <Muestra color={p.color} lado={14} />
                  <Texto tipo="subtitulo" numberOfLines={1} style={styles.flex}>
                    {p.siglas}
                  </Texto>
                </View>
                <Etiqueta>
                  {fundacion ? `Desde ${fundacion}` : ''}
                  {h ? ` · ${h.capitulos.length} etapas` : ''}
                </Etiqueta>
              </View>
              <View style={styles.mini} importantForAccessibility="no-hide-descendants">
                {GENERALES_HISTORICAS.map((e) => {
                  const d = tramos.get(e);
                  return (
                    <View
                      key={e}
                      style={[
                        styles.miniBarra,
                        d
                          ? {
                              height: Math.max((d.n / maximo) * 32, 2),
                              backgroundColor: d.tipo === 'antecesora' ? t.papel : p.color,
                              borderColor: p.color,
                              borderWidth: d.tipo === 'antecesora' ? 1 : 0,
                            }
                          : { height: 1, backgroundColor: t.lineaSuave },
                      ]}
                    />
                  );
                })}
              </View>
              <Texto tipo="subtitulo">→</Texto>
            </Ir>
          );
        })}
      </View>
      <Nota>
        Las barras son sus escaños en las 16 generales de 1977 a 2023, según el Ministerio del Interior. Huecas: el
        partido del que procede. Cada partido, a su propia escala.
      </Nota>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  lista: { gap: Spacing.two },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
  izquierda: { flex: 1, gap: Spacing.one },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  mini: { flexDirection: 'row', alignItems: 'flex-end', gap: 1.5, height: 32, width: 88 },
  miniBarra: { flex: 1 },
});
