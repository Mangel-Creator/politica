import { StyleSheet, View } from 'react-native';

import { ListaFuentes } from '@/components/lista-fuentes';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Seccion, Tarjeta } from '@/components/tarjeta';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { Calendario, DIA_ELECCIONES } from '@/data/calendario';
import type { FechaElectoral } from '@/data/tipos';
import { diaSemana, diasEntre, fechaLarga, hoyISO, rango } from '@/services/fechas';

export default function PantallaInicio() {
  const hoy = hoyISO();
  const faltan = diasEntre(hoy, DIA_ELECCIONES);

  return (
    <Pantalla
      titulo="Elecciones generales"
      entradilla={`${capitalizar(diaSemana(DIA_ELECCIONES))}, ${fechaLarga(DIA_ELECCIONES, true)}`}>
      <Tarjeta style={styles.cuentaAtras}>
        <ThemedText type="title">{faltan > 0 ? faltan : faltan === 0 ? 'Hoy' : '—'}</ThemedText>
        <ThemedText type="smallBold" themeColor="textSecondary">
          {faltan > 1
            ? 'días para votar'
            : faltan === 1
              ? 'día para votar: mañana'
              : faltan === 0
                ? 'se vota'
                : 'Las elecciones ya se celebraron'}
        </ThemedText>
      </Tarjeta>

      <Tarjeta>
        <ThemedText type="smallBold">Cómo funciona esta app</ThemedText>
        <ThemedText type="small">
          No recomienda a quién votar. Cada dato enlaza a su fuente, para que puedas comprobarlo.
          Los programas son los documentos originales que publicó cada partido, sin resumir ni
          retocar.
        </ThemedText>
      </Tarjeta>

      <Seccion titulo="Calendario electoral">
        <ThemedText type="small" themeColor="textSecondary">
          Hasta que se publique el decreto en el BOE, las fechas salen de medios de comunicación y
          se marcan como pendientes de confirmar.
        </ThemedText>
        {Calendario.map((f) => (
          <FilaFecha key={f.id} fecha={f} hoy={hoy} />
        ))}
      </Seccion>
    </Pantalla>
  );
}

function FilaFecha({ fecha, hoy }: { fecha: FechaElectoral; hoy: string }) {
  const terminada = diasEntre(hoy, fecha.fin ?? fecha.inicio) < 0;
  const cuando = fecha.esLimite ? `Hasta el ${fechaLarga(fecha.inicio)}` : rango(fecha.inicio, fecha.fin);

  return (
    <Tarjeta style={terminada && styles.pasada}>
      <ThemedText type="smallBold" themeColor="textSecondary">
        {cuando}
      </ThemedText>
      <ThemedText type="heading">{fecha.titulo}</ThemedText>
      {fecha.detalle && <ThemedText type="small">{fecha.detalle}</ThemedText>}
      <View style={styles.etiquetas}>
        {terminada && <Etiqueta texto="Ya pasó" />}
        <Etiqueta
          texto={fecha.confirmadaOficialmente ? 'Fuente oficial' : 'Pendiente de confirmar en el BOE'}
          aviso={!fecha.confirmadaOficialmente}
        />
      </View>
      <ListaFuentes fuentes={fecha.fuentes} />
    </Tarjeta>
  );
}

function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const styles = StyleSheet.create({
  cuentaAtras: {
    alignItems: 'center',
    paddingVertical: Spacing.four,
  },
  etiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  pasada: {
    opacity: 0.6,
  },
});
