import { StyleSheet, View } from 'react-native';

import { GrupoNoticias } from '@/components/grupo-noticias';
import { Hemiciclo } from '@/components/hemiciclo';
import { Pantalla } from '@/components/pantalla';
import { Acceso, Bloque, Etiqueta, Ir, Nota, Seccion } from '@/components/piezas';
import { Recorrido } from '@/components/recorrido';
import { Texto } from '@/components/texto';
import { Spacing } from '@/constants/theme';
import { Calendario, DIA_ELECCIONES } from '@/data/calendario';
import { Partidos } from '@/data/partidos';
import { useNoticias } from '@/hooks/use-noticias';
import { agrupar, mediosDistintos, MINIMO_MEDIOS, nombreMedio } from '@/services/noticias';
import { dias, diasEntre, diaSemana, fechaLarga, hoyISO, proximaFecha, rango } from '@/services/fechas';

const DIA = 24 * 3600 * 1000;

export default function Hoy() {
  const hoy = hoyISO();
  const faltan = diasEntre(hoy, DIA_ELECCIONES);
  const proximo = proximaFecha(
    Calendario.filter((f) => f.id !== 'anuncio'),
    hoy,
  );
  const noticias = useNoticias();
  const recientes = noticias.titulares.filter((t) => t.fecha >= noticias.referencia - DIA);
  const suficientes = mediosDistintos(recientes) >= MINIMO_MEDIOS;
  // En portada, solo noticias que cuentan al menos dos medios.
  const grupos = suficientes
    ? agrupar(recientes, nombreMedio)
        .filter((g) => g.medios.length > 1)
        .slice(0, 4)
    : [];
  const congreso = Partidos.filter((p) => p.escanos2023).map((p) => ({
    id: p.id,
    siglas: p.siglas,
    color: p.color,
    escanos: p.escanos2023!,
  }));

  return (
    <Pantalla antetitulo={`${diaSemana(hoy)} ${fechaLarga(hoy)} · Elecciones generales`}>
      <View style={styles.cuenta}>
        {faltan > 0 ? (
          <>
            <Texto tipo="gigante" style={styles.numero} accessibilityRole="header">
              {faltan}
            </Texto>
            <View style={styles.cuentaTexto}>
              <Texto tipo="titulo">{faltan === 1 ? 'día' : 'días'}</Texto>
              <Texto color="gris">
                para votar el {diaSemana(DIA_ELECCIONES)} {fechaLarga(DIA_ELECCIONES)}
              </Texto>
            </View>
          </>
        ) : (
          <Texto tipo="display">{faltan === 0 ? 'Hoy se vota' : `Se votó el ${fechaLarga(DIA_ELECCIONES)}`}</Texto>
        )}
      </View>

      <View style={styles.bloqueRecorrido}>
        <Recorrido hoy={hoy} />
        {proximo && (
          <Ir href="/calendario">
            <Bloque discontinuo={!proximo.confirmadaOficialmente}>
              <View style={styles.filaProximo}>
                <Etiqueta>
                  {proximo.inicio > hoy
                    ? `Próximo · en ${dias(diasEntre(hoy, proximo.inicio))}`
                    : proximo.fin
                      ? 'En curso'
                      : 'Hoy'}
                </Etiqueta>
                <Texto tipo="subtitulo">→</Texto>
              </View>
              <Texto tipo="subtitulo">{proximo.titulo}</Texto>
              <Texto tipo="pequeno" color="gris">
                {rango(proximo.inicio, proximo.fin)}
                {proximo.confirmadaOficialmente ? '' : ' · pendiente de confirmar en el BOE'}
              </Texto>
            </Bloque>
          </Ir>
        )}
      </View>

      <Seccion titulo="Lo que cuentan los medios · 24 h">
        {grupos.map((g) => (
          <GrupoNoticias key={g.titulares[0].enlace} grupo={g} />
        ))}
        {!grupos.length && (
          <Nota>
            {noticias.cargando
              ? 'Leyendo los titulares de los medios…'
              : suficientes
                ? 'Ninguna noticia de las últimas 24 horas la cuentan dos medios o más. Las demás están en el repaso.'
                : `Solo se han podido leer ${mediosDistintos(recientes)} medios: hacen falta al menos ${MINIMO_MEDIOS} para un repaso equilibrado. Comprueba la conexión.`}
          </Nota>
        )}
        <Acceso href="/noticias" etiqueta="Repaso" titulo="Día y semana, medio a medio" simbolo="→" />
      </Seccion>

      <Seccion titulo="El Congreso que se disuelve · 23J 2023">
        <Hemiciclo grupos={congreso} />
        <Texto tipo="pequeno" color="gris">
          Orden alfabético, no ideológico. Toca un partido para ver sus escaños. Podemos se presentó dentro de Sumar.
        </Texto>
      </Seccion>

      <Seccion titulo="Para votar">
        <View style={styles.accesos}>
          <Acceso href="/votar" etiqueta="Guía" titulo="Cómo votar" simbolo="✉" />
          <Acceso href="/calendario" etiqueta="Fechas" titulo="Calendario" simbolo="▤" />
          <Acceso href="/simulador" etiqueta="Herramienta" titulo="Reparto de escaños" simbolo="÷" />
          <Acceso href="/fuentes" etiqueta="Método" titulo="Fuentes y reglas" simbolo="✓" />
        </View>
      </Seccion>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  cuenta: { flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.three, flexWrap: 'wrap' },
  numero: { marginBottom: -Spacing.two },
  cuentaTexto: { flex: 1, minWidth: 160, gap: Spacing.one },
  bloqueRecorrido: { gap: Spacing.three },
  filaProximo: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  accesos: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
});
