import { StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import { Calendario, DIA_ELECCIONES } from '@/data/calendario';
import { useTheme } from '@/hooks/use-theme';
import { diasEntre, fechaCorta } from '@/services/fechas';

const INICIO = Calendario[0].inicio;
const TOTAL = diasEntre(INICIO, DIA_ELECCIONES);
const pos = (iso: string) => `${(Math.min(Math.max(diasEntre(INICIO, iso), 0), TOTAL) / TOTAL) * 100}%` as const;

/**
 * Barra del proceso electoral, del anuncio a la votación: lo recorrido en tinta, una raya
 * por cada fecha del calendario y la campaña marcada debajo.
 */
export function Recorrido({ hoy }: { hoy: string }) {
  const t = useTheme();
  const campana = Calendario.find((f) => f.id === 'campana');

  return (
    <View style={styles.contenedor} accessibilityLabel={`Proceso electoral: día ${diasEntre(INICIO, hoy)} de ${TOTAL}`}>
      <View style={[styles.barra, { borderColor: t.linea }]}>
        <View style={[styles.lleno, { width: pos(hoy), backgroundColor: t.tinta }]} />
        {Calendario.slice(1, -1).map((f) => (
          <View key={f.id} style={[styles.marca, { left: pos(f.inicio), backgroundColor: t.gris }]} />
        ))}
      </View>
      {campana?.fin && (
        <View style={styles.pista}>
          <View
            style={[
              styles.campana,
              {
                left: pos(campana.inicio),
                width: `${(diasEntre(campana.inicio, campana.fin) / TOTAL) * 100}%`,
                borderColor: t.linea,
              },
            ]}>
            <Texto tipo="etiqueta" style={styles.campanaTexto}>
              Campaña
            </Texto>
          </View>
        </View>
      )}
      <View style={styles.extremos}>
        <Texto tipo="etiqueta" color="gris">
          {fechaCorta(INICIO).slice(0, 5)} anuncio
        </Texto>
        <Texto tipo="etiqueta">{fechaCorta(DIA_ELECCIONES).slice(0, 5)} votación</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { gap: Spacing.two },
  barra: { height: 28, borderWidth: Borde.grueso, overflow: 'hidden' },
  lleno: { position: 'absolute', left: 0, top: 0, bottom: 0 },
  marca: { position: 'absolute', top: 0, bottom: 0, width: 2, marginLeft: -1, opacity: 0.6 },
  pista: { height: 22 },
  campana: {
    position: 'absolute',
    top: 0,
    height: 22,
    borderLeftWidth: Borde.grueso,
    borderRightWidth: Borde.grueso,
    borderBottomWidth: Borde.grueso,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campanaTexto: { fontSize: 9 },
  extremos: { flexDirection: 'row', justifyContent: 'space-between' },
});
