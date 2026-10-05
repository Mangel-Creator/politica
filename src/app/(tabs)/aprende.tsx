import { StyleSheet, View } from 'react-native';

import { Pantalla } from '@/components/pantalla';
import { Acceso, Etiqueta, Ir, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Glosario, Lecciones, Preguntas } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';

export default function Aprende() {
  const t = useTheme();

  return (
    <Pantalla
      antetitulo="Constitución y ley electoral, sin jerga"
      titulo="Aprende"
      entradilla="Cómo funciona el país en lecciones de un minuto. Cada dato enlaza al artículo del BOE del que sale.">
      <Ir href="/test" style={[styles.test, { backgroundColor: t.tinta }]}>
        <View style={styles.flex}>
          <Etiqueta color="papel">Pon a prueba lo que sabes</Etiqueta>
          <Texto tipo="titulo" color="papel">
            Test
          </Texto>
          <Texto tipo="pequeno" color="papel">
            Preguntas al azar, con la explicación y el artículo de cada respuesta.
          </Texto>
        </View>
        <View style={styles.testCifra}>
          <Texto tipo="gigante" color="papel">
            {Preguntas.length}
          </Texto>
          <Etiqueta color="papel">preguntas</Etiqueta>
        </View>
      </Ir>

      <Seccion titulo={`Lecciones · ${Lecciones.length}`}>
        <View style={styles.rejilla}>
          {Lecciones.map((l, i) => (
            <Ir
              key={l.id}
              href={{ pathname: '/leccion/[id]', params: { id: l.id } }}
              style={[styles.leccion, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.leccionCabeza}>
                <Etiqueta>{String(i + 1).padStart(2, '0')}</Etiqueta>
                <Etiqueta>{l.tarjetas.length} tarjetas</Etiqueta>
              </View>
              <Texto tipo="display" numberOfLines={1} adjustsFontSizeToFit>
                {l.cifra.valor}
              </Texto>
              <Texto tipo="pequeno" color="gris" numberOfLines={2}>
                {l.cifra.etiqueta}
              </Texto>
              <Texto tipo="cuerpoFuerte" style={styles.leccionTitulo}>
                {l.titulo}
              </Texto>
            </Ir>
          ))}
        </View>
      </Seccion>

      <Seccion titulo="Herramientas">
        <View style={styles.rejilla}>
          <Acceso href="/simulador" etiqueta="Simulador" titulo="Reparte escaños con D’Hondt" simbolo="÷" />
          <Acceso href="/glosario" etiqueta={`${Glosario.length} términos`} titulo="Glosario" simbolo="Aa" />
        </View>
      </Seccion>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: Spacing.two },
  test: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, padding: Spacing.three },
  testCifra: { alignItems: 'center' },
  rejilla: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  leccion: { flexGrow: 1, flexBasis: 150, borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.one },
  leccionCabeza: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: Spacing.two },
  leccionTitulo: { marginTop: Spacing.two },
});
