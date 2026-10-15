import { type ReactNode, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Avance, TarjetaEjercicio } from './ejercicio';
import { Bloque, Etiqueta } from './piezas';
import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import type { Ejercicio } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';
import { actual, empezar, responder, resultado, terminada, type Ronda } from '@/services/practica';

export type FinRonda = ReturnType<typeof resultado>;

/** Una ronda de ejercicios: los fallados vuelven a salir al final, una vez. */
export function Practica({
  ejercicios,
  onPaso,
  onFin,
}: {
  ejercicios: Ejercicio[];
  /** Avisa en cada cambio de ejercicio (para volver arriba de la pantalla). */
  onPaso?: (pos: number) => void;
  onFin: (r: FinRonda) => void;
}) {
  const [ronda, setRonda] = useState<Ronda>(() => empezar(ejercicios.map((e) => e.id)));
  const id = actual(ronda);
  const ej = ejercicios.find((e) => e.id === id);
  if (!ej) return null;
  const repetido = ronda.pos >= ejercicios.length;

  return (
    <View style={styles.practica}>
      <View style={styles.barra}>
        <Avance hechos={ronda.pos} total={ronda.cola.length} />
        <Texto tipo="pequenoFuerte" style={styles.cuenta}>
          {ronda.pos + 1}/{ronda.cola.length}
        </Texto>
      </View>
      {repetido && <Etiqueta>Repaso: esta la fallaste antes</Etiqueta>}
      <TarjetaEjercicio
        key={ronda.pos}
        ej={ej}
        onContinuar={(bien) => {
          const nueva = responder(ronda, bien);
          if (terminada(nueva)) onFin(resultado(nueva));
          else {
            setRonda(nueva);
            onPaso?.(nueva.pos);
          }
        }}
      />
    </View>
  );
}

/** Pantalla final: puntos, aciertos y racha, con los botones que se le pasen. */
export function Resultado({
  puntos,
  aciertos,
  total,
  racha,
  children,
}: {
  puntos: number;
  aciertos: number;
  total: number;
  racha: number;
  children?: ReactNode;
}) {
  const t = useTheme();
  const perfecta = aciertos === total;
  return (
    <View style={styles.resultado}>
      <View style={styles.cifra}>
        <Texto tipo="gigante">+{puntos}</Texto>
        <Texto tipo="subtitulo">puntos</Texto>
      </View>
      <Texto tipo="titulo">
        {perfecta ? 'Todo a la primera.' : aciertos >= total / 2 ? 'Bien hecho.' : 'Lo importante es repasar.'}
      </Texto>
      <View style={styles.datos}>
        <Bloque style={styles.dato}>
          <Etiqueta>A la primera</Etiqueta>
          <Texto tipo="dato">
            {aciertos}/{total}
          </Texto>
        </Bloque>
        <Bloque invertido style={styles.dato}>
          <Etiqueta color="papel">Racha</Etiqueta>
          <Texto tipo="dato" color="papel">
            {racha} {racha === 1 ? 'día' : 'días'}
          </Texto>
        </Bloque>
      </View>
      {!perfecta && (
        <Texto tipo="pequeno" color="gris" style={[styles.nota, { borderLeftColor: t.linea }]}>
          Los que fallaste se guardan en «Repaso» para que vuelvan a salir.
        </Texto>
      )}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  practica: { gap: Spacing.three },
  barra: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  cuenta: { minWidth: 44, textAlign: 'right', fontVariant: ['tabular-nums'] },
  resultado: { gap: Spacing.four },
  cifra: { gap: Spacing.one },
  datos: { flexDirection: 'row', gap: Spacing.two },
  dato: { flex: 1 },
  nota: { borderLeftWidth: Borde.grueso, paddingLeft: Spacing.three },
});
