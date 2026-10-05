import { StyleSheet, View } from 'react-native';

import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Ir, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Partidos } from '@/data/partidos';
import { resumenDe } from '@/data/programas';
import { useTheme } from '@/hooks/use-theme';

export default function PantallaPartidos() {
  const t = useTheme();

  return (
    <Pantalla
      antetitulo="12 partidos · orden alfabético"
      titulo="Partidos"
      entradilla="Las candidaturas que lograron escaño el 23J y Podemos, que se presentó dentro de Sumar. Programa, historia y datos de cada uno, con el mismo formato.">
      <View style={styles.rejilla}>
        {Partidos.map((p) => {
          const programa = p.programas.find((x) => x.eleccion === '29N 2026') ? '29N' : resumenDe(p.id) ? '23J' : null;
          return (
            <Ir
              key={p.id}
              href={{ pathname: '/partido/[id]', params: { id: p.id } }}
              style={[styles.ficha, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.cabeza}>
                <Muestra color={p.color} lado={14} />
                <Texto tipo="etiqueta" color="gris">
                  {programa ? `Programa ${programa}` : 'Sin resumen aún'}
                </Texto>
              </View>
              <Texto tipo="titulo" numberOfLines={1} adjustsFontSizeToFit>
                {p.siglas}
              </Texto>
              <Texto tipo="pequeno" color="gris" numberOfLines={2} style={styles.nombre}>
                {p.nombre}
              </Texto>
              <View style={styles.pie}>
                <Texto tipo="dato">{p.escanos2023 ?? '—'}</Texto>
                <Etiqueta>{p.escanos2023 === null ? 'en Sumar' : 'escaños'}</Etiqueta>
              </View>
              <View style={[styles.barra, { backgroundColor: t.lineaSuave }]}>
                <View
                  style={{ width: `${((p.escanos2023 ?? 0) / 350) * 100}%`, backgroundColor: p.color, height: '100%' }}
                />
              </View>
            </Ir>
          );
        })}
      </View>
      <Nota>
        Escaños del 23 de julio de 2023, sobre 350. El color sirve para reconocer a cada partido en los gráficos; va
        siempre junto a sus siglas.
      </Nota>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  rejilla: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  ficha: { flexGrow: 1, flexBasis: 150, borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.one },
  cabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.two },
  nombre: { minHeight: 40 },
  pie: { flexDirection: 'row', alignItems: 'baseline', gap: Spacing.two, marginTop: Spacing.two },
  barra: { height: 6, marginTop: Spacing.one },
});
