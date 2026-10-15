import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Pulsable } from '@/components/piezas';
import { type FinRonda, Practica, Resultado } from '@/components/practica';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Ejercicios, Lecciones, type Ejercicio } from '@/data/aprende';
import { useProgreso } from '@/hooks/use-progreso';
import { useTheme } from '@/hooks/use-theme';
import { elegirRepaso } from '@/services/practica';
import { puntosDe, racha, type Progreso } from '@/services/progreso';

const POR_RONDA = 10;

/** Ejercicios del repaso: lo fallado primero y luego de lecciones ya hechas (o de todas si no hay). */
function prepararRonda(p: Progreso): Ejercicio[] {
  const hechas = Lecciones.filter((l) => p.lecciones[l.id]);
  const base = (hechas.length ? hechas : Lecciones).flatMap((l) => l.ejercicios.map((e) => e.id));
  const ids = elegirRepaso(base, p.fallos, POR_RONDA);
  return ids.map((id) => Ejercicios.find((e) => e.id === id)!);
}

export default function Repaso() {
  const t = useTheme();
  const { progreso, listo, terminar, hoy } = useProgreso();
  const [ronda, setRonda] = useState<Ejercicio[] | null>(null);
  const [fin, setFin] = useState<FinRonda | null>(null);
  const [paso, setPaso] = useState(0);
  const [vuelta, setVuelta] = useState(0);
  const pendientes = progreso.fallos.length;

  const empezar = () => {
    setRonda(prepararRonda(progreso));
    setFin(null);
    setVuelta((v) => v + 1);
    setPaso((p) => p + 1);
  };

  return (
    <Pantalla
      atras
      volverArribaCon={paso}
      antetitulo="Repaso"
      titulo={!ronda ? 'Repasa lo aprendido' : undefined}
      entradilla={
        !ronda ? 'Diez retos mezclados: primero los que fallaste y luego de las lecciones que ya hiciste.' : undefined
      }>
      {!ronda && (
        <>
          <View style={styles.datos}>
            <Bloque invertido={pendientes > 0} style={styles.dato}>
              <Etiqueta color={pendientes > 0 ? 'papel' : 'gris'}>Para repasar</Etiqueta>
              <Texto tipo="dato" color={pendientes > 0 ? 'papel' : 'tinta'}>
                {pendientes} {pendientes === 1 ? 'fallo' : 'fallos'}
              </Texto>
            </Bloque>
            <Bloque style={styles.dato}>
              <Etiqueta>Lecciones hechas</Etiqueta>
              <Texto tipo="dato">
                {Object.keys(progreso.lecciones).length}/{Lecciones.length}
              </Texto>
            </Bloque>
          </View>
          {listo && Object.keys(progreso.lecciones).length === 0 && (
            <Texto color="gris">Aún no has hecho ninguna lección: el repaso saldrá de todo el temario.</Texto>
          )}
          <Pulsable
            onPress={empezar}
            disabled={!listo}
            accessibilityRole="button"
            style={[styles.boton, { backgroundColor: t.tinta, borderColor: t.tinta }]}>
            <Texto tipo="subtitulo" color="papel">
              Empezar repaso →
            </Texto>
          </Pulsable>
        </>
      )}

      {ronda && !fin && (
        <Practica
          key={vuelta}
          ejercicios={ronda}
          onPaso={() => setPaso((p) => p + 1)}
          onFin={(r) => {
            terminar(r);
            setFin(r);
            setPaso((p) => p + 1);
          }}
        />
      )}

      {ronda && fin && (
        <Resultado puntos={puntosDe(fin)} aciertos={fin.aciertos} total={fin.total} racha={racha(progreso.dias, hoy)}>
          <Pulsable
            onPress={empezar}
            accessibilityRole="button"
            style={[styles.boton, { backgroundColor: t.tinta, borderColor: t.tinta }]}>
            <Texto tipo="subtitulo" color="papel">
              Otra ronda
            </Texto>
          </Pulsable>
          <Pulsable
            onPress={() => router.navigate('/aprende')}
            accessibilityRole="button"
            style={[styles.boton, { borderColor: t.linea }]}>
            <Texto tipo="subtitulo">Volver al camino</Texto>
          </Pulsable>
        </Resultado>
      )}
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  datos: { flexDirection: 'row', gap: Spacing.two },
  dato: { flex: 1 },
  boton: { padding: Spacing.three, alignItems: 'center', borderWidth: Borde.grueso },
});
