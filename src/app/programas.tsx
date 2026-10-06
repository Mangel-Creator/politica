import { StyleSheet, View } from 'react-native';

import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Ir, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Partidos } from '@/data/partidos';
import { resumenDe } from '@/data/programas';
import { Temas } from '@/data/temas';
import { useTheme } from '@/hooks/use-theme';

export default function PantallaProgramas() {
  const t = useTheme();

  return (
    <Pantalla
      atras
      antetitulo="Programas · 23J 2023"
      titulo="Qué propone cada partido"
      entradilla="Cada programa, tema por tema: qué plantea el partido y todas sus medidas concretas, con la página del PDF oficial. Se quita el relleno, no las propuestas.">
      <Nota>
        Son los programas de las generales de 2023. Los del 29N se añadirán en cuanto cada partido publique el suyo.
      </Nota>
      <View style={styles.lista}>
        {Partidos.map((p) => {
          const r = resumenDe(p.id);
          if (!r)
            return (
              <Bloque key={p.id} discontinuo>
                <View style={styles.siglas}>
                  <Muestra color={p.color} lado={14} />
                  <Texto tipo="subtitulo">{p.siglas}</Texto>
                </View>
                <Texto tipo="pequeno" color="gris">
                  {p.programasNoLocalizados?.[0]?.motivo ?? p.nota2023 ?? 'Sin programa propio en 2023.'}
                </Texto>
              </Bloque>
            );
          const medidas = Object.values(r.temas).reduce((s, l) => s + (l?.length ?? 0), 0);
          const pdf = p.programas.find((x) => x.eleccion === r.eleccion);
          return (
            <Ir
              key={p.id}
              href={{ pathname: '/programa/[id]', params: { id: p.id } }}
              accessibilityLabel={`Programa de ${p.siglas}: ${medidas} medidas`}
              style={[styles.fila, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.cabeza}>
                <View style={[styles.siglas, styles.flex]}>
                  <Muestra color={p.color} lado={14} />
                  <Texto tipo="subtitulo" numberOfLines={1} style={styles.flex}>
                    {p.siglas}
                  </Texto>
                </View>
                <Texto tipo="subtitulo">→</Texto>
              </View>
              <View style={styles.cifras}>
                <Texto tipo="dato">{medidas}</Texto>
                <Etiqueta>medidas</Etiqueta>
                {pdf && <Etiqueta>· {pdf.paginas} págs.</Etiqueta>}
              </View>
              <View style={styles.temas} importantForAccessibility="no-hide-descendants">
                {Temas.map((tm) => {
                  const n = r.temas[tm.id]?.length ?? 0;
                  return (
                    <View
                      key={tm.id}
                      style={[
                        styles.casilla,
                        { borderColor: n ? t.linea : t.lineaSuave, backgroundColor: n ? t.tinta : t.papel },
                      ]}>
                      <Texto tipo="etiqueta" color={n ? 'papel' : 'grisClaro'} style={styles.glifo}>
                        {tm.glifo}
                      </Texto>
                    </View>
                  );
                })}
              </View>
            </Ir>
          );
        })}
      </View>
      <Texto tipo="pequeno" color="gris">
        Las casillas son los 16 temas de la app, en el mismo orden para todos; en negro, los que el programa trata.
      </Texto>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  lista: { gap: Spacing.two },
  fila: { borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.two },
  cabeza: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  cifras: { flexDirection: 'row', alignItems: 'baseline', gap: Spacing.two },
  temas: { flexDirection: 'row', flexWrap: 'wrap', gap: 3 },
  casilla: { width: 22, height: 22, borderWidth: Borde.fino, alignItems: 'center', justifyContent: 'center' },
  glifo: { fontSize: 11, letterSpacing: 0 },
});
