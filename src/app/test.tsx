import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Pulsable } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Lecciones, nombreArticulo, Preguntas, urlArticulo, type Pregunta } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';

const LETRAS = ['A', 'B', 'C', 'D', 'E'];
const POR_RONDA = 10;

function barajar<T>(lista: T[]) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function ronda(leccion?: string): Pregunta[] {
  const base = leccion ? Preguntas.filter((p) => p.leccionId === leccion) : Preguntas;
  return barajar(base).slice(0, POR_RONDA);
}

export default function Test() {
  const t = useTheme();
  const { leccion } = useLocalSearchParams<{ leccion?: string }>();
  const [preguntas, setPreguntas] = useState(() => ronda(leccion));
  const [n, setN] = useState(0);
  const [elegida, setElegida] = useState<number | null>(null);
  const [aciertos, setAciertos] = useState(0);
  const titulo = Lecciones.find((l) => l.id === leccion)?.titulo;

  const reiniciar = () => {
    setPreguntas(ronda(leccion));
    setN(0);
    setElegida(null);
    setAciertos(0);
  };

  if (n >= preguntas.length) {
    return (
      <Pantalla atras antetitulo="Resultado">
        <View style={styles.resultado}>
          <Texto tipo="gigante">
            {aciertos}/{preguntas.length}
          </Texto>
          <Texto tipo="titulo">
            {aciertos === preguntas.length
              ? 'Todas bien.'
              : aciertos >= preguntas.length / 2
                ? 'Más de la mitad.'
                : 'Para repasar.'}
          </Texto>
        </View>
        <Pulsable onPress={reiniciar} accessibilityRole="button" style={[styles.boton, { backgroundColor: t.tinta }]}>
          <Texto tipo="subtitulo" color="papel">
            Otra ronda
          </Texto>
        </Pulsable>
      </Pantalla>
    );
  }

  const p = preguntas[n];
  const respondida = elegida !== null;

  const elegir = (i: number) => {
    if (respondida) return;
    setElegida(i);
    if (i === p.correcta) setAciertos((a) => a + 1);
  };

  return (
    <Pantalla atras antetitulo={titulo ? `Test · ${titulo}` : 'Test'}>
      <View style={styles.progreso}>
        {preguntas.map((x, i) => (
          <View
            key={x.id}
            style={[
              styles.paso,
              { borderColor: t.linea, backgroundColor: i < n || (i === n && respondida) ? t.tinta : t.papel },
            ]}
          />
        ))}
      </View>

      <View style={styles.enunciado}>
        <Etiqueta>
          Pregunta {n + 1} de {preguntas.length} · {aciertos} {aciertos === 1 ? 'acierto' : 'aciertos'}
        </Etiqueta>
        <Texto tipo="titulo">{p.enunciado}</Texto>
      </View>

      <View style={styles.opciones}>
        {p.opciones.map((o, i) => {
          const esCorrecta = i === p.correcta;
          const marcada = i === elegida;
          const invertir = respondida && esCorrecta;
          return (
            <Pulsable
              key={o}
              onPress={() => elegir(i)}
              disabled={respondida}
              accessibilityRole="button"
              accessibilityState={{ selected: marcada, disabled: respondida }}
              style={[
                styles.opcion,
                {
                  borderColor: respondida && !esCorrecta && !marcada ? t.lineaSuave : t.linea,
                  borderStyle: respondida && marcada && !esCorrecta ? 'dashed' : 'solid',
                  backgroundColor: invertir ? t.tinta : t.papel,
                },
              ]}>
              <View style={[styles.letra, { borderColor: invertir ? t.papel : t.linea }]}>
                <Texto tipo="pequenoFuerte" color={invertir ? 'papel' : 'tinta'}>
                  {respondida && esCorrecta ? '✓' : respondida && marcada ? '✗' : LETRAS[i]}
                </Texto>
              </View>
              <Texto
                tipo="cuerpoFuerte"
                color={invertir ? 'papel' : respondida && !marcada ? 'gris' : 'tinta'}
                style={styles.flex}>
                {o}
              </Texto>
            </Pulsable>
          );
        })}
      </View>

      {respondida && (
        <>
          <Bloque>
            <Etiqueta>{elegida === p.correcta ? 'Correcto' : `Era la ${LETRAS[p.correcta]}`}</Etiqueta>
            <Texto>{p.explicacion}</Texto>
            <Enlace href={urlArticulo(p.articulo)}>{nombreArticulo(p.articulo)}</Enlace>
          </Bloque>
          <Pulsable
            onPress={() => {
              setN(n + 1);
              setElegida(null);
            }}
            accessibilityRole="button"
            style={[styles.boton, { backgroundColor: t.tinta }]}>
            <Texto tipo="subtitulo" color="papel">
              {n + 1 < preguntas.length ? 'Siguiente →' : 'Ver resultado →'}
            </Texto>
          </Pulsable>
        </>
      )}
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  progreso: { flexDirection: 'row', gap: Spacing.one },
  paso: { flex: 1, height: 12, borderWidth: Borde.fino + 0.5 },
  enunciado: { gap: Spacing.two },
  opciones: { gap: Spacing.two },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
  letra: { width: 32, height: 32, borderWidth: Borde.grueso, alignItems: 'center', justifyContent: 'center' },
  boton: { padding: Spacing.three, alignItems: 'center' },
  resultado: { gap: Spacing.two },
});
