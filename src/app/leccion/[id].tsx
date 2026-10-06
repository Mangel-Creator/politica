import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Ir } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Spacing } from '@/constants/theme';
import { Lecciones, nombreArticulo, Preguntas, urlArticulo } from '@/data/aprende';

/** Para la web estática: una página por cada leccion (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Lecciones.map((x) => ({ id: x.id }));
}

export default function FichaLeccion() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const i = Lecciones.findIndex((l) => l.id === id);
  const l = Lecciones[i];
  if (!l)
    return (
      <Pantalla atras titulo="Lección no encontrada">
        {null}
      </Pantalla>
    );
  const siguiente = Lecciones[i + 1];
  const preguntas = Preguntas.filter((p) => p.leccionId === l.id).length;

  return (
    <Pantalla
      atras
      antetitulo={`Lección ${String(i + 1).padStart(2, '0')} de ${Lecciones.length}`}
      titulo={l.titulo}
      entradilla={l.gancho}>
      <View style={styles.cifra}>
        <Texto tipo="gigante">{l.cifra.valor}</Texto>
        <Texto tipo="subtitulo">{l.cifra.etiqueta}</Texto>
      </View>

      <View style={styles.tarjetas}>
        {l.tarjetas.map((tj, n) => (
          <Bloque key={tj.titulo}>
            <View style={styles.cabeza}>
              <Texto tipo="dato">{n + 1}</Texto>
              <Texto tipo="subtitulo" style={styles.flex}>
                {tj.titulo}
              </Texto>
            </View>
            <Texto>{tj.texto}</Texto>
            <Enlace href={urlArticulo(tj.articulo)}>{nombreArticulo(tj.articulo)}</Enlace>
          </Bloque>
        ))}
      </View>

      {preguntas > 0 && (
        <Ir href={{ pathname: '/test', params: { leccion: l.id } }}>
          <Bloque invertido>
            <Etiqueta color="papel">{preguntas} preguntas</Etiqueta>
            <Texto tipo="subtitulo" color="papel">
              Comprueba lo que has aprendido →
            </Texto>
          </Bloque>
        </Ir>
      )}

      {siguiente && (
        <Fila
          href={{ pathname: '/leccion/[id]', params: { id: siguiente.id } }}
          titulo={siguiente.titulo}
          subtitulo="Siguiente lección"
        />
      )}
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cifra: { gap: Spacing.one },
  tarjetas: { gap: Spacing.two },
  cabeza: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
});
