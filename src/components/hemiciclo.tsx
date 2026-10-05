import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import { Muestra } from './marca-partido';
import { Chip } from './piezas';
import { Texto } from './texto';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { asientosHemiciclo } from '@/services/hemiciclo';

export type GrupoHemiciclo = { id: string; siglas: string; color: string; escanos: number };

const FILAS = 10;
const RADIO_PUNTO = 0.026;

/**
 * Hemiciclo de puntos. Los grupos van en el orden recibido (alfabético en la app), no de
 * izquierda a derecha ideológica. Tocar un partido resalta sus escaños.
 */
export function Hemiciclo({ grupos }: { grupos: GrupoHemiciclo[] }) {
  const t = useTheme();
  const [elegido, setElegido] = useState<string | null>(null);
  const total = grupos.reduce((s, g) => s + g.escanos, 0);
  const mayoria = Math.floor(total / 2) + 1;
  const asientos = asientosHemiciclo(total, FILAS);
  const colorDe = grupos.flatMap((g) => Array.from({ length: g.escanos }, () => g));
  const activo = grupos.find((g) => g.id === elegido);

  return (
    <View style={styles.contenedor}>
      <View>
        <Svg viewBox="-1.04 -1.04 2.08 1.1" style={styles.svg} accessibilityLabel={`Hemiciclo de ${total} escaños`}>
          <Line
            x1={0}
            y1={0.04}
            x2={0}
            y2={-1.03}
            stroke={t.lineaSuave}
            strokeWidth={0.006}
            strokeDasharray="0.02 0.02"
          />
          {asientos.map((a, i) => {
            const g = colorDe[i];
            return (
              <Circle
                key={i}
                cx={a.x}
                cy={-a.y}
                r={RADIO_PUNTO}
                fill={g.color}
                opacity={elegido && g.id !== elegido ? 0.12 : 1}
              />
            );
          })}
        </Svg>
        <View style={styles.centro} pointerEvents="none">
          <Texto tipo="dato">{activo ? activo.escanos : total}</Texto>
          <Texto tipo="etiqueta" color="gris">
            {activo
              ? `${activo.siglas} · ${activo.escanos >= mayoria ? 'mayoría' : `faltan ${mayoria - activo.escanos}`}`
              : `mayoría: ${mayoria}`}
          </Texto>
        </View>
      </View>
      <View style={styles.leyenda}>
        {grupos.map((g) => (
          <Chip
            key={g.id}
            texto={`${g.siglas} ${g.escanos}`}
            activo={g.id === elegido}
            onPress={() => setElegido(g.id === elegido ? null : g.id)}
            antes={<Muestra color={g.color} />}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { gap: Spacing.three },
  svg: { width: '100%', aspectRatio: 2.08 / 1.1 },
  centro: { position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center' },
  leyenda: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
});
