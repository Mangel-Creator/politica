import { StyleSheet, View } from 'react-native';

import { ListaFuentes } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Calendario, DespuesDeVotar } from '@/data/calendario';
import { useTheme } from '@/hooks/use-theme';
import { dias, diasEntre, hoyISO, rango } from '@/services/fechas';

const FECHAS = [...Calendario, ...DespuesDeVotar];
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

export default function PantallaCalendario() {
  const t = useTheme();
  const hoy = hoyISO();

  return (
    <Pantalla atras antetitulo="Proceso electoral del 29N" titulo="Calendario">
      <Nota>
        {FECHAS.every((f) => f.confirmadaOficialmente)
          ? 'Fechas contrastadas el 06/10/2026 con el decreto de convocatoria del BOE, la ley electoral (LOREG), el calendario oficial de la Junta Electoral Central y la nota de Correos.'
          : 'Las fechas con borde a rayas vienen de medios y se contrastarán con fuentes oficiales. Si no coinciden, manda el BOE.'}
      </Nota>
      <View>
        {FECHAS.map((f, i) => {
          const pasada = (f.fin ?? f.inicio) < hoy;
          const enCurso = f.inicio <= hoy && (f.fin ?? f.inicio) >= hoy;
          const ultima = i === FECHAS.length - 1;
          return (
            <View key={f.id} style={styles.fila}>
              <View style={styles.dia}>
                <Texto tipo="dato" color={pasada ? 'grisClaro' : 'tinta'}>
                  {Number(f.inicio.slice(8))}
                </Texto>
                <Etiqueta>{MESES[Number(f.inicio.slice(5, 7)) - 1]}</Etiqueta>
              </View>
              <View style={styles.eje}>
                <View
                  style={[
                    styles.punto,
                    { borderColor: t.linea, backgroundColor: pasada || enCurso ? t.tinta : t.papel },
                    ultima && styles.puntoFinal,
                  ]}
                />
                {!ultima && <View style={[styles.trazo, { backgroundColor: pasada ? t.tinta : t.lineaSuave }]} />}
              </View>
              <View
                style={[
                  styles.caja,
                  {
                    borderColor: pasada ? t.lineaSuave : t.linea,
                    borderStyle: f.confirmadaOficialmente ? 'solid' : 'dashed',
                  },
                ]}>
                <Etiqueta>
                  {enCurso
                    ? f.fin
                      ? 'En curso · '
                      : 'Hoy · '
                    : pasada
                      ? 'Pasado · '
                      : `En ${dias(diasEntre(hoy, f.inicio))} · `}
                  {f.confirmadaOficialmente ? 'confirmada' : 'pendiente del BOE'}
                </Etiqueta>
                <Texto tipo="subtitulo" color={pasada ? 'gris' : 'tinta'}>
                  {f.titulo}
                </Texto>
                <Texto tipo="pequenoFuerte">{rango(f.inicio, f.fin)}</Texto>
                {f.detalle && (
                  <Texto tipo="pequeno" color="gris">
                    {f.detalle}
                  </Texto>
                )}
                <ListaFuentes fuentes={f.fuentes} />
              </View>
            </View>
          );
        })}
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  fila: { flexDirection: 'row', gap: Spacing.two },
  dia: { width: 44, alignItems: 'center', paddingTop: Spacing.two },
  eje: { width: 18, alignItems: 'center' },
  punto: { width: 16, height: 16, borderWidth: Borde.grueso, marginTop: Spacing.three },
  puntoFinal: { width: 18, height: 18 },
  trazo: { width: Borde.grueso, flex: 1 },
  caja: {
    flex: 1,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
    gap: Spacing.one + Spacing.half,
    marginBottom: Spacing.three,
  },
});
