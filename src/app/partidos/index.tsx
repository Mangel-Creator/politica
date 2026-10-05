import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/lista-fuentes';
import { Pantalla } from '@/components/pantalla';
import { Tarjeta } from '@/components/tarjeta';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { Fuentes } from '@/data/fuentes';
import { FuentesEscanos2023, Partidos } from '@/data/partidos';
import type { Partido } from '@/data/tipos';

export default function PantallaPartidos() {
  return (
    <Pantalla>
      <ThemedText type="small" themeColor="textSecondary">
        Partidos con escaños en el Congreso tras las elecciones de 2023, en orden alfabético. Las
        candidaturas que se presentan el 29 de noviembre serán oficiales cuando se proclamen
        (previsto el 2 de noviembre).
      </ThemedText>

      <View style={styles.lista}>
        {Partidos.map((p) => (
          <FilaPartido key={p.id} partido={p} />
        ))}
      </View>

      <View style={styles.fuentes}>
        <ThemedText type="smallBold">Escaños de 2023</ThemedText>
        <ListaFuentes fuentes={FuentesEscanos2023} />
        <Enlace href={Fuentes.infoelectoral.url}>Comprobar en la fuente oficial (Infoelectoral)</Enlace>
      </View>
    </Pantalla>
  );
}

function FilaPartido({ partido }: { partido: Partido }) {
  const escanos =
    partido.escanos2023 === null
      ? partido.nota2023 ?? 'Sin candidatura propia en 2023'
      : `${partido.escanos2023} ${partido.escanos2023 === 1 ? 'escaño' : 'escaños'} en 2023`;

  return (
    <Link href={{ pathname: '/partidos/[id]', params: { id: partido.id } }} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${partido.nombre}. ${escanos}`}
        style={({ pressed }) => pressed && styles.pulsado}>
        <Tarjeta style={styles.fila}>
          <View style={styles.textos}>
            <ThemedText type="smallBold">{partido.siglas}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {partido.nombre}
            </ThemedText>
            <ThemedText type="small">{escanos}</ThemedText>
          </View>
          <ThemedText themeColor="textSecondary">›</ThemedText>
        </Tarjeta>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  lista: {
    gap: Spacing.two,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  textos: {
    flex: 1,
    gap: Spacing.half,
  },
  pulsado: {
    opacity: 0.7,
  },
  fuentes: {
    gap: Spacing.two,
  },
});
