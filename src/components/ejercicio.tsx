import * as Haptics from 'expo-haptics';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Enlace } from './enlaces';
import { Bloque, Etiqueta, Pulsable } from './piezas';
import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import type { Ejercicio, Empareja, Ordena } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';
import { barajar, desordenar } from '@/services/practica';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];

type Estado = 'pensando' | 'bien' | 'mal';

function vibrar(bien: boolean) {
  if (process.env.EXPO_OS === 'web') return;
  Haptics.notificationAsync(
    bien ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error,
  ).catch(() => {});
}

/** La respuesta buena, en texto, para enseñarla si se falla. */
function solucion(ej: Ejercicio) {
  switch (ej.tipo) {
    case 'elige':
    case 'completa':
      return ej.opciones[ej.correcta];
    case 'vf':
      return ej.verdadera ? 'Verdadero' : 'Falso';
    case 'ordena':
      return ej.pasos.map((p, i) => `${i + 1}. ${p}`).join('\n');
    case 'empareja':
      return ej.pares.map(([a, b]) => `${a} → ${b}`).join('\n');
  }
}

function titular(ej: Ejercicio) {
  switch (ej.tipo) {
    case 'elige':
      return { rotulo: 'Elige la respuesta', texto: ej.enunciado };
    case 'vf':
      return { rotulo: '¿Verdadero o falso?', texto: ej.afirmacion };
    case 'completa':
      return { rotulo: 'Completa la frase', texto: '' };
    case 'ordena':
      return { rotulo: 'Ponlo en orden', texto: ej.enunciado };
    case 'empareja':
      return { rotulo: 'Une las parejas', texto: ej.enunciado };
  }
}

/**
 * Un ejercicio completo: pregunta, respuesta, «Comprobar» y la explicación con su fuente.
 * Quien lo usa le pone `key` para empezar de cero en cada ejercicio.
 */
export function TarjetaEjercicio({ ej, onContinuar }: { ej: Ejercicio; onContinuar: (bien: boolean) => void }) {
  const t = useTheme();
  const [estado, setEstado] = useState<Estado>('pensando');
  const [eleccion, setEleccion] = useState<number | null>(null);
  const [orden, setOrden] = useState<number[]>([]);
  const respondido = estado !== 'pensando';
  const cabeza = titular(ej);

  const resolver = (bien: boolean) => {
    vibrar(bien);
    setEstado(bien ? 'bien' : 'mal');
  };

  const listo =
    ej.tipo === 'ordena' ? orden.length === ej.pasos.length : ej.tipo === 'empareja' ? false : eleccion !== null;

  const comprobar = () => {
    if (ej.tipo === 'elige' || ej.tipo === 'completa') resolver(eleccion === ej.correcta);
    else if (ej.tipo === 'vf') resolver((eleccion === 0) === ej.verdadera);
    else if (ej.tipo === 'ordena') resolver(orden.every((n, i) => n === i));
  };

  return (
    <View style={styles.ejercicio}>
      <View style={styles.cabeza}>
        <Etiqueta>{cabeza.rotulo}</Etiqueta>
        {ej.tipo === 'completa' ? (
          <Frase frase={ej.frase} hueco={eleccion === null ? null : ej.opciones[eleccion]} />
        ) : (
          <Texto tipo="titulo">{cabeza.texto}</Texto>
        )}
      </View>

      {(ej.tipo === 'elige' || ej.tipo === 'completa') && (
        <Opciones
          opciones={ej.opciones}
          correcta={ej.correcta}
          eleccion={eleccion}
          respondido={respondido}
          onElegir={setEleccion}
          letras
        />
      )}
      {ej.tipo === 'vf' && (
        <Opciones
          opciones={['Verdadero', 'Falso']}
          correcta={ej.verdadera ? 0 : 1}
          eleccion={eleccion}
          respondido={respondido}
          onElegir={setEleccion}
          fila
        />
      )}
      {ej.tipo === 'ordena' && <Ordenar ej={ej} orden={orden} onCambio={setOrden} respondido={respondido} />}
      {ej.tipo === 'empareja' && <Emparejar ej={ej} respondido={respondido} onTerminar={(bien) => resolver(bien)} />}

      {!respondido && ej.tipo !== 'empareja' && (
        <Pulsable
          onPress={comprobar}
          disabled={!listo}
          accessibilityRole="button"
          accessibilityState={{ disabled: !listo }}
          style={[
            styles.boton,
            { backgroundColor: listo ? t.tinta : t.papel, borderColor: listo ? t.tinta : t.lineaSuave },
          ]}>
          <Texto tipo="subtitulo" color={listo ? 'papel' : 'grisClaro'}>
            Comprobar
          </Texto>
        </Pulsable>
      )}

      {respondido && (
        <>
          <Bloque invertido={estado === 'bien'} discontinuo={estado === 'mal'} accessibilityLiveRegion="polite">
            <Texto tipo="subtitulo" color={estado === 'bien' ? 'papel' : 'tinta'}>
              {estado === 'bien' ? '¡Bien!' : 'Casi. La respuesta era:'}
            </Texto>
            {estado === 'mal' && <Texto tipo="cuerpoFuerte">{solucion(ej)}</Texto>}
            <Texto color={estado === 'bien' ? 'papel' : 'tinta'}>{ej.explicacion}</Texto>
          </Bloque>
          <Enlace href={ej.fuente.url}>{ej.fuente.titulo}</Enlace>
          <Pulsable
            onPress={() => onContinuar(estado === 'bien')}
            accessibilityRole="button"
            style={[styles.boton, { backgroundColor: t.tinta, borderColor: t.tinta }]}>
            <Texto tipo="subtitulo" color="papel">
              Continuar →
            </Texto>
          </Pulsable>
        </>
      )}
    </View>
  );
}

/** Frase con el hueco: «___» hasta que se elige una opción. */
function Frase({ frase, hueco }: { frase: string; hueco: string | null }) {
  const [antes, despues = ''] = frase.split('___');
  return (
    <Texto tipo="titulo">
      {antes}
      <Texto tipo="titulo" style={styles.hueco}>
        {hueco ?? '______'}
      </Texto>
      {despues}
    </Texto>
  );
}

function Opciones({
  opciones,
  correcta,
  eleccion,
  respondido,
  onElegir,
  letras,
  fila,
}: {
  opciones: string[];
  correcta: number;
  eleccion: number | null;
  respondido: boolean;
  onElegir: (i: number) => void;
  letras?: boolean;
  fila?: boolean;
}) {
  const t = useTheme();
  return (
    <View style={[styles.opciones, fila && styles.fila]}>
      {opciones.map((o, i) => {
        const esCorrecta = i === correcta;
        const marcada = i === eleccion;
        // Antes de comprobar se invierte la elegida; después, la buena.
        const invertir = respondido ? esCorrecta : marcada;
        const tachada = respondido && marcada && !esCorrecta;
        const simbolo = respondido && esCorrecta ? '✓' : tachada ? '✗' : letras ? LETRAS[i] : null;
        return (
          <Pulsable
            key={i}
            onPress={() => onElegir(i)}
            disabled={respondido}
            accessibilityRole="button"
            accessibilityState={{ selected: marcada, disabled: respondido }}
            style={[
              styles.opcion,
              fila && styles.opcionFila,
              {
                borderColor: respondido && !esCorrecta && !marcada ? t.lineaSuave : t.linea,
                borderStyle: tachada ? 'dashed' : 'solid',
                backgroundColor: invertir ? t.tinta : t.papel,
              },
            ]}>
            {simbolo && (
              <View style={[styles.letra, { borderColor: invertir ? t.papel : t.linea }]}>
                <Texto tipo="pequenoFuerte" color={invertir ? 'papel' : 'tinta'}>
                  {simbolo}
                </Texto>
              </View>
            )}
            <Texto
              tipo="cuerpoFuerte"
              color={invertir ? 'papel' : respondido && !marcada ? 'gris' : 'tinta'}
              style={[styles.flex, fila && !simbolo && styles.centro]}>
              {o}
            </Texto>
          </Pulsable>
        );
      })}
    </View>
  );
}

/** Ordenar: se tocan los pasos en el orden bueno; tocar uno ya puesto lo quita. */
function Ordenar({
  ej,
  orden,
  onCambio,
  respondido,
}: {
  ej: Ordena;
  orden: number[];
  onCambio: (o: number[]) => void;
  respondido: boolean;
}) {
  const t = useTheme();
  // Índices de los pasos en el orden en que se enseñan (barajados una vez).
  const banco = useMemo(() => desordenar(ej.pasos.map((_, i) => i)), [ej]);
  const pendientes = banco.filter((i) => !orden.includes(i));

  return (
    <View style={styles.opciones}>
      <View style={[styles.orden, { borderColor: t.linea }]}>
        {orden.length === 0 && (
          <Texto tipo="pequeno" color="gris">
            Toca los pasos de abajo en el orden correcto.
          </Texto>
        )}
        {orden.map((i, n) => {
          const mal = respondido && i !== n;
          return (
            <Pulsable
              key={i}
              disabled={respondido}
              onPress={() => onCambio(orden.filter((x) => x !== i))}
              accessibilityRole="button"
              accessibilityLabel={`Paso ${n + 1}: ${ej.pasos[i]}. Toca para quitarlo.`}
              style={[
                styles.paso,
                { borderColor: t.linea, borderStyle: mal ? 'dashed' : 'solid', backgroundColor: t.papel },
              ]}>
              <Texto tipo="dato">{n + 1}</Texto>
              <Texto tipo="cuerpoFuerte" style={styles.flex}>
                {ej.pasos[i]}
              </Texto>
              {respondido && <Texto tipo="subtitulo">{mal ? '✗' : '✓'}</Texto>}
            </Pulsable>
          );
        })}
      </View>
      {pendientes.map((i) => (
        <Pulsable
          key={i}
          disabled={respondido}
          onPress={() => onCambio([...orden, i])}
          accessibilityRole="button"
          style={[styles.opcion, { borderColor: t.linea, backgroundColor: t.papel }]}>
          <Texto tipo="cuerpoFuerte" style={styles.flex}>
            {ej.pasos[i]}
          </Texto>
          <Texto tipo="subtitulo">+</Texto>
        </Pulsable>
      ))}
    </View>
  );
}

/** Emparejar: se toca uno de la izquierda y luego su pareja de la derecha. */
function Emparejar({
  ej,
  respondido,
  onTerminar,
}: {
  ej: Empareja;
  respondido: boolean;
  onTerminar: (bien: boolean) => void;
}) {
  const t = useTheme();
  const derecha = useMemo(() => desordenar(ej.pares.map((_, i) => i)), [ej]);
  const izquierda = useMemo(() => barajar(ej.pares.map((_, i) => i)), [ej]);
  const [hechos, setHechos] = useState<number[]>([]);
  const [activo, setActivo] = useState<number | null>(null);
  const [fallo, setFallo] = useState<number | null>(null);
  const [errores, setErrores] = useState(0);

  const tocarDerecha = (i: number) => {
    if (activo === null) return;
    if (i === activo) {
      const nuevos = [...hechos, i];
      setHechos(nuevos);
      setActivo(null);
      setFallo(null);
      if (nuevos.length === ej.pares.length) onTerminar(errores === 0);
    } else {
      setErrores((e) => e + 1);
      setFallo(i);
      setActivo(null);
    }
  };

  const casilla = (i: number, lado: 0 | 1) => {
    const hecho = hechos.includes(i) || respondido;
    const elegido = lado === 0 && activo === i;
    const mal = lado === 1 && fallo === i;
    return (
      <Pulsable
        key={i}
        disabled={hecho}
        onPress={() => {
          if (lado === 0) {
            setActivo(i);
            setFallo(null);
          } else tocarDerecha(i);
        }}
        accessibilityRole="button"
        accessibilityState={{ selected: elegido, disabled: hecho }}
        style={[
          styles.pareja,
          {
            borderColor: hecho ? t.lineaSuave : t.linea,
            borderStyle: mal ? 'dashed' : 'solid',
            backgroundColor: elegido ? t.tinta : t.papel,
          },
        ]}>
        <Texto tipo="pequenoFuerte" color={elegido ? 'papel' : hecho ? 'grisClaro' : 'tinta'}>
          {ej.pares[i][lado]}
        </Texto>
      </Pulsable>
    );
  };

  return (
    <View style={styles.opciones}>
      <Texto tipo="pequeno" color="gris" style={styles.ayuda}>
        {activo === null ? 'Toca una casilla de la izquierda.' : 'Ahora toca su pareja a la derecha.'}
        {fallo !== null ? ' Esa no era: prueba otra vez.' : ''}
      </Texto>
      <View style={styles.columnas}>
        <View style={styles.columna}>{izquierda.map((i) => casilla(i, 0))}</View>
        <View style={styles.columna}>{derecha.map((i) => casilla(i, 1))}</View>
      </View>
    </View>
  );
}

/** Barra de avance de la lección: casillas que se rellenan. */
export function Avance({ hechos, total }: { hechos: number; total: number }) {
  const t = useTheme();
  const pct = total ? Math.min(100, (hechos / total) * 100) : 0;
  return (
    <View
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: total, now: hechos }}
      style={[styles.avance, { borderColor: t.linea }]}>
      <View style={{ width: `${pct}%`, height: '100%', backgroundColor: t.tinta }} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  centro: { textAlign: 'center' },
  ejercicio: { gap: Spacing.four },
  cabeza: { gap: Spacing.two },
  hueco: { textDecorationLine: 'underline' },
  opciones: { gap: Spacing.two },
  fila: { flexDirection: 'row' },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
    minHeight: 56,
  },
  opcionFila: { flex: 1, justifyContent: 'center' },
  letra: { width: 32, height: 32, borderWidth: Borde.grueso, alignItems: 'center', justifyContent: 'center' },
  boton: { padding: Spacing.three, alignItems: 'center', borderWidth: Borde.grueso },
  orden: { borderWidth: Borde.grueso, borderStyle: 'dashed', padding: Spacing.two, gap: Spacing.two, minHeight: 64 },
  paso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.two,
  },
  ayuda: { minHeight: 40 },
  columnas: { flexDirection: 'row', gap: Spacing.two },
  columna: { flex: 1, gap: Spacing.two },
  pareja: { borderWidth: Borde.grueso, padding: Spacing.two, minHeight: 64, justifyContent: 'center' },
  avance: { height: 14, borderWidth: Borde.grueso, flex: 1 },
});
