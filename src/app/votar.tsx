import { StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/lista-fuentes';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Seccion, Tarjeta } from '@/components/tarjeta';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { Calendario } from '@/data/calendario';
import { Fuentes, FuentesOficiales } from '@/data/fuentes';
import { fechaLarga } from '@/services/fechas';

const fecha = (id: string) => Calendario.find((f) => f.id === id)!;

export default function PantallaVotar() {
  const solicitud = fecha('solicitud-correo');
  const deposito = fecha('deposito-correo');
  const votacion = fecha('votacion');
  const correos = FuentesOficiales.find((f) => f.url === Fuentes.correosVoto.url)!;
  const censo = FuentesOficiales.find((f) => f.nombre.includes('Censo'))!;

  return (
    <Pantalla titulo="Cómo votar" entradilla="Lo esencial para votar en persona o por correo.">
      <Seccion titulo="Voto por correo">
        <Tarjeta>
          <View style={styles.fechas}>
            <FilaPlazo texto="Pedirlo" cuando={`Hasta el ${fechaLarga(solicitud.inicio)}`} />
            <FilaPlazo texto="Entregarlo en Correos" cuando={`Hasta el ${fechaLarga(deposito.inicio)}`} />
          </View>
          <Etiqueta texto="Plazos pendientes de confirmar en el BOE" aviso />
          <ListaFuentes fuentes={solicitud.fuentes} />
        </Tarjeta>

        <Tarjeta>
          <ThemedText type="smallBold">Pedirlo por internet</ThemedText>
          <ThemedText type="small">
            Necesitas certificado digital o DNI electrónico, y tener instalado AutoFirma en el
            ordenador.
          </ThemedText>
          <ThemedText type="small">
            Si la Oficina del Censo Electoral acepta tu solicitud, te enviará la documentación a la
            dirección que indiques y ya no podrás votar en la mesa electoral el día de la votación.
          </ThemedText>
          <Enlace href={correos.url}>{correos.nombre}</Enlace>
          <ListaFuentes fuentes={[Fuentes.correosVoto]} />
        </Tarjeta>
      </Seccion>

      <Seccion titulo="Votar en persona">
        <Tarjeta>
          <ThemedText type="smallBold">{fechaLarga(votacion.inicio, true)}</ThemedText>
          <ThemedText type="small">
            Dónde te toca votar, horarios y qué documento llevar: lo añadiremos cuando lo
            publiquen los organismos oficiales para estas elecciones. Mientras tanto, la
            referencia es la Oficina del Censo Electoral.
          </ThemedText>
          <Enlace href={censo.url}>{censo.nombre}</Enlace>
        </Tarjeta>
      </Seccion>
    </Pantalla>
  );
}

function FilaPlazo({ texto, cuando }: { texto: string; cuando: string }) {
  return (
    <View style={styles.plazo}>
      <ThemedText type="small">{texto}</ThemedText>
      <ThemedText type="smallBold">{cuando}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  fechas: {
    gap: Spacing.two,
  },
  plazo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
});
