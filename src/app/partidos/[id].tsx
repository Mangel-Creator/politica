import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/lista-fuentes';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Seccion, Tarjeta } from '@/components/tarjeta';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { Fuentes } from '@/data/fuentes';
import { buscarPartido, FuentesEscanos2023 } from '@/data/partidos';
import type { Eleccion, Partido, Programa } from '@/data/tipos';
import { fechaCorta } from '@/services/fechas';

const ELECCIONES: Eleccion[] = ['29N 2026', '23J 2023'];

export default function PantallaPartido() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const partido = buscarPartido(id);

  if (!partido) {
    return (
      <Pantalla>
        <Stack.Screen options={{ title: 'No encontrado' }} />
        <ThemedText>No existe ningún partido con ese identificador.</ThemedText>
      </Pantalla>
    );
  }

  return (
    <Pantalla>
      <Stack.Screen options={{ title: partido.siglas }} />

      <View style={styles.cabecera}>
        <ThemedText type="subtitle">{partido.nombre}</ThemedText>
        <Enlace href={partido.web}>Web oficial</Enlace>
      </View>

      <Seccion titulo="Elecciones de 2023">
        <Tarjeta>
          <ThemedText>
            {partido.escanos2023 === null
              ? 'No se presentó con candidatura propia.'
              : `${partido.escanos2023} ${partido.escanos2023 === 1 ? 'escaño' : 'escaños'} de 350 en el Congreso.`}
          </ThemedText>
          {partido.nota2023 && <ThemedText type="small">{partido.nota2023}</ThemedText>}
          <ListaFuentes fuentes={FuentesEscanos2023} />
          <Enlace href={Fuentes.infoelectoral.url}>Comprobar en la fuente oficial (Infoelectoral)</Enlace>
        </Tarjeta>
      </Seccion>

      <Seccion titulo="Programas electorales">
        {ELECCIONES.map((eleccion) => (
          <ProgramasDe key={eleccion} partido={partido} eleccion={eleccion} />
        ))}
      </Seccion>

      <Seccion titulo="Promesas y hechos">
        <Tarjeta>
          <Etiqueta texto="Próximamente" />
          <ThemedText type="small">
            Qué prometió en 2023 y qué votó después en el Congreso, con enlace a cada votación
            oficial.
          </ThemedText>
        </Tarjeta>
      </Seccion>
    </Pantalla>
  );
}

function ProgramasDe({ partido, eleccion }: { partido: Partido; eleccion: Eleccion }) {
  const programas = partido.programas.filter((p) => p.eleccion === eleccion);
  const noLocalizado = partido.programasNoLocalizados?.find((n) => n.eleccion === eleccion);

  return (
    <View style={styles.eleccion}>
      <ThemedText type="smallBold" themeColor="textSecondary">
        {eleccion === '29N 2026' ? 'Elecciones del 29 de noviembre de 2026' : 'Elecciones del 23 de julio de 2023'}
      </ThemedText>

      {programas.map((p) => (
        <TarjetaPrograma key={p.sha256} programa={p} />
      ))}

      {programas.length === 0 && (
        <Tarjeta>
          <Etiqueta texto={noLocalizado ? 'No localizado' : 'Aún no publicado'} aviso={!!noLocalizado} />
          <ThemedText type="small">
            {noLocalizado?.motivo ??
              (eleccion === '29N 2026'
                ? 'Se añadirá en cuanto el partido lo publique en su web oficial.'
                : 'Sin programa propio para estas elecciones.')}
          </ThemedText>
        </Tarjeta>
      )}
    </View>
  );
}

function TarjetaPrograma({ programa }: { programa: Programa }) {
  return (
    <Tarjeta>
      <ThemedText type="smallBold">{programa.tipo}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {programa.paginas} páginas · documento del {fechaCorta(programa.fechaDocumento)}
      </ThemedText>
      <View style={styles.enlaces}>
        <Enlace href={programa.urlOficial}>Abrir en la web del partido</Enlace>
        {programa.urlArchivo && <Enlace href={programa.urlArchivo}>Copia archivada (Internet Archive)</Enlace>}
      </View>
      <ThemedText type="small" themeColor="textSecondary">
        Huella SHA-256 del documento original, para comprobar que no ha cambiado:
      </ThemedText>
      <ThemedText type="code" selectable>
        {programa.sha256}
      </ThemedText>
    </Tarjeta>
  );
}

const styles = StyleSheet.create({
  cabecera: {
    gap: Spacing.two,
  },
  eleccion: {
    gap: Spacing.two,
  },
  enlaces: {
    gap: Spacing.one,
  },
});
