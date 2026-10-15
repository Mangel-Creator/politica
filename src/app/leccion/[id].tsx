import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Avance } from '@/components/ejercicio';
import { Enlace } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Pulsable } from '@/components/piezas';
import { type FinRonda, Practica, Resultado } from '@/components/practica';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { buscarLeccion, Lecciones, unidadDe } from '@/data/aprende';
import { buscarHecho } from '@/data/hechos';
import { useProgreso } from '@/hooks/use-progreso';
import { useTheme } from '@/hooks/use-theme';
import { puntosDe, racha } from '@/services/progreso';

/** Para la web estática: una página por cada lección (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Lecciones.map((x) => ({ id: x.id }));
}

type Fase = { tipo: 'portada' } | { tipo: 'tarjeta'; n: number } | { tipo: 'practica' } | { tipo: 'fin'; r: FinRonda };

export default function FichaLeccion() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { progreso, terminar, hoy } = useProgreso();
  const [fase, setFase] = useState<Fase>({ tipo: 'portada' });
  const [paso, setPaso] = useState(0);
  const l = buscarLeccion(id);
  if (!l)
    return (
      <Pantalla atras titulo="Lección no encontrada">
        {null}
      </Pantalla>
    );

  const i = Lecciones.indexOf(l);
  const unidad = unidadDe(l.id);
  const siguiente = Lecciones[i + 1];
  const previa = progreso.lecciones[l.id];
  const ir = (f: Fase) => {
    setFase(f);
    setPaso((p) => p + 1);
  };

  return (
    <Pantalla
      atras
      volverArribaCon={paso}
      antetitulo={`${unidad?.titulo ?? 'Aprende'} · lección ${unidad ? unidad.lecciones.indexOf(l) + 1 : i + 1} de ${unidad?.lecciones.length ?? Lecciones.length}`}
      titulo={fase.tipo === 'portada' ? l.titulo : undefined}
      entradilla={fase.tipo === 'portada' ? l.gancho : undefined}>
      {fase.tipo === 'portada' && (
        <>
          <View style={[styles.simbolo, { borderColor: t.linea }]}>
            <Texto tipo="display" numberOfLines={1} adjustsFontSizeToFit>
              {l.simbolo}
            </Texto>
          </View>
          <View style={styles.datos}>
            <Bloque style={styles.dato}>
              <Etiqueta>Para leer</Etiqueta>
              <Texto tipo="dato">{l.tarjetas.length} ideas</Texto>
            </Bloque>
            <Bloque style={styles.dato}>
              <Etiqueta>Para practicar</Etiqueta>
              <Texto tipo="dato">{l.ejercicios.length} retos</Texto>
            </Bloque>
          </View>
          {previa && (
            <Texto color="gris">
              Ya la hiciste: tu mejor resultado es {previa.mejor} de {previa.total} a la primera.
            </Texto>
          )}
          <Boton texto="Empezar →" onPress={() => ir({ tipo: 'tarjeta', n: 0 })} />
          {previa && <Boton texto="Ir directo a practicar" hueco onPress={() => ir({ tipo: 'practica' })} />}
        </>
      )}

      {fase.tipo === 'tarjeta' && (
        <TarjetaIdea
          n={fase.n}
          total={l.tarjetas.length}
          tarjeta={l.tarjetas[fase.n]}
          onSiguiente={() =>
            ir(fase.n + 1 < l.tarjetas.length ? { tipo: 'tarjeta', n: fase.n + 1 } : { tipo: 'practica' })
          }
        />
      )}

      {fase.tipo === 'practica' && (
        <Practica
          ejercicios={l.ejercicios}
          onPaso={() => setPaso((p) => p + 1)}
          onFin={(r) => {
            terminar({ leccionId: l.id, ...r });
            ir({ tipo: 'fin', r });
          }}
        />
      )}

      {fase.tipo === 'fin' && (
        <Resultado
          puntos={puntosDe({ leccionId: l.id, ...fase.r })}
          aciertos={fase.r.aciertos}
          total={fase.r.total}
          racha={racha(progreso.dias, hoy)}>
          {siguiente ? (
            <Boton
              texto={`Siguiente: ${siguiente.titulo} →`}
              onPress={() => router.replace({ pathname: '/leccion/[id]', params: { id: siguiente.id } })}
            />
          ) : (
            <Boton texto="Hacer un repaso →" onPress={() => router.replace('/test')} />
          )}
          <Boton texto="Volver al camino" hueco onPress={() => router.navigate('/aprende')} />
          {l.hechos?.map((h) => {
            const hecho = buscarHecho(h);
            return (
              hecho && (
                <Fila
                  key={h}
                  href={{ pathname: '/hecho/[id]', params: { id: h } }}
                  titulo={hecho.titulo}
                  subtitulo="Ver qué prometió y qué votó cada partido"
                />
              )
            );
          })}
        </Resultado>
      )}
    </Pantalla>
  );
}

function TarjetaIdea({
  n,
  total,
  tarjeta,
  onSiguiente,
}: {
  n: number;
  total: number;
  tarjeta: { titulo: string; texto: string; fuente: { titulo: string; url: string } };
  onSiguiente: () => void;
}) {
  const ultima = n + 1 === total;
  return (
    <View style={styles.tarjeta}>
      <View style={styles.barra}>
        <Avance hechos={n + 1} total={total} />
        <Texto tipo="pequenoFuerte" style={styles.cuenta}>
          {n + 1}/{total}
        </Texto>
      </View>
      <Bloque style={styles.idea}>
        <Etiqueta>Idea {n + 1}</Etiqueta>
        <Texto tipo="titulo">{tarjeta.titulo}</Texto>
        <Texto style={styles.texto}>{tarjeta.texto}</Texto>
      </Bloque>
      <Enlace href={tarjeta.fuente.url}>{tarjeta.fuente.titulo}</Enlace>
      <Boton texto={ultima ? 'A practicar →' : 'Siguiente →'} onPress={onSiguiente} />
    </View>
  );
}

function Boton({ texto, onPress, hueco }: { texto: string; onPress: () => void; hueco?: boolean }) {
  const t = useTheme();
  return (
    <Pulsable
      onPress={onPress}
      accessibilityRole="button"
      style={[styles.boton, { borderColor: t.linea, backgroundColor: hueco ? t.papel : t.tinta }]}>
      <Texto tipo="subtitulo" color={hueco ? 'tinta' : 'papel'} style={styles.centro}>
        {texto}
      </Texto>
    </Pulsable>
  );
}

const styles = StyleSheet.create({
  simbolo: {
    width: 120,
    height: 120,
    borderWidth: Borde.grueso,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.two,
  },
  datos: { flexDirection: 'row', gap: Spacing.two },
  dato: { flex: 1 },
  tarjeta: { gap: Spacing.three },
  barra: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  cuenta: { minWidth: 44, textAlign: 'right', fontVariant: ['tabular-nums'] },
  idea: { gap: Spacing.three, paddingVertical: Spacing.four, minHeight: 240 },
  texto: { fontSize: 18, lineHeight: 27 },
  boton: { padding: Spacing.three, alignItems: 'center', borderWidth: Borde.grueso },
  centro: { textAlign: 'center' },
});
