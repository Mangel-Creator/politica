import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Pantalla } from '@/components/pantalla';
import { Acceso, Bloque, Etiqueta, Ir, Pulsable, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Glosario, Lecciones, Unidades, type Leccion } from '@/data/aprende';
import { useProgreso } from '@/hooks/use-progreso';
import { useTheme } from '@/hooks/use-theme';
import { hechoHoy, racha, siguienteLeccion, type ProgresoLeccion } from '@/services/progreso';

/** Desplazamiento de cada casilla del camino, en zigzag como en las apps de idiomas. */
const ZIGZAG = ['0%', '14%', '28%', '14%'] as const;

export default function Aprende() {
  const t = useTheme();
  const { progreso, hoy, borrar } = useProgreso();
  const orden = Lecciones.map((l) => l.id);
  const proximaId = siguienteLeccion(orden, progreso);
  const proxima = Lecciones.find((l) => l.id === proximaId);
  const hechas = Object.keys(progreso.lecciones).filter((id) => orden.includes(id)).length;
  const dias = racha(progreso.dias, hoy);
  const hoyHecho = hechoHoy(progreso, hoy);

  return (
    <Pantalla
      antetitulo="Política sin jerga, un minuto al día"
      titulo="Aprende"
      entradilla="Lecciones cortas con retos. Cada dato enlaza a su fuente oficial: el BOE, el Congreso o el programa de cada partido.">
      <View style={styles.marcador}>
        <Dato etiqueta="Racha" valor={`${dias}`} unidad={dias === 1 ? 'día' : 'días'} invertido={hoyHecho} />
        <Dato etiqueta="Puntos" valor={`${progreso.puntos}`} />
        <Dato etiqueta="Lecciones" valor={`${hechas}`} unidad={`de ${Lecciones.length}`} />
      </View>
      <Texto tipo="pequeno" color="gris">
        {hoyHecho
          ? 'Meta de hoy cumplida. Vuelve mañana para no perder la racha.'
          : 'Meta de hoy: una lección o un repaso. Así sube tu racha.'}
      </Texto>

      {proxima ? (
        <Ir
          href={{ pathname: '/leccion/[id]', params: { id: proxima.id } }}
          style={[styles.continuar, { backgroundColor: t.tinta }]}>
          <Etiqueta color="papel">{hechas ? 'Sigue por aquí' : 'Empieza por aquí'}</Etiqueta>
          <Texto tipo="titulo" color="papel">
            {proxima.titulo}
          </Texto>
          <Texto tipo="pequeno" color="papel">
            {proxima.gancho}
          </Texto>
          <Texto tipo="subtitulo" color="papel">
            {hechas ? 'Continuar →' : 'Empezar →'}
          </Texto>
        </Ir>
      ) : (
        <Bloque invertido>
          <Texto tipo="titulo" color="papel">
            Camino completo.
          </Texto>
          <Texto color="papel">Has hecho todas las lecciones. Los repasos mantienen la racha.</Texto>
        </Bloque>
      )}

      {progreso.fallos.length > 0 && (
        <Ir href="/test" style={[styles.repaso, { borderColor: t.linea }]}>
          <View style={styles.flex}>
            <Etiqueta>Repaso</Etiqueta>
            <Texto tipo="cuerpoFuerte">
              Tienes {progreso.fallos.length} {progreso.fallos.length === 1 ? 'reto fallado' : 'retos fallados'} para
              repasar
            </Texto>
          </View>
          <Texto tipo="subtitulo">→</Texto>
        </Ir>
      )}

      {Unidades.map((u, n) => (
        <Seccion key={u.id} titulo={`Unidad ${n + 1} · ${u.titulo}`}>
          <Texto color="gris">{u.descripcion}</Texto>
          <View style={styles.camino}>
            {u.lecciones.map((l, i) => (
              <Casilla
                key={l.id}
                leccion={l}
                desplazamiento={ZIGZAG[i % ZIGZAG.length]}
                hecha={progreso.lecciones[l.id]}
                siguiente={l.id === proximaId}
              />
            ))}
          </View>
        </Seccion>
      ))}

      <Seccion titulo="Herramientas">
        <View style={styles.rejilla}>
          <Acceso href="/test" etiqueta="Diez retos" titulo="Repaso" simbolo="↻" />
          <Acceso href="/votar" etiqueta="Guía práctica" titulo="Cómo votar" simbolo="✓" />
          <Acceso href="/simulador" etiqueta="Simulador" titulo="Reparte escaños con D’Hondt" simbolo="÷" />
          <Acceso href="/glosario" etiqueta={`${Glosario.length} términos`} titulo="Glosario" simbolo="Aa" />
        </View>
      </Seccion>

      <EmpezarDeCero onBorrar={borrar} hayAlgo={progreso.puntos > 0 || progreso.dias.length > 0} />
    </Pantalla>
  );
}

function Dato({
  etiqueta,
  valor,
  unidad,
  invertido,
}: {
  etiqueta: string;
  valor: string;
  unidad?: string;
  invertido?: boolean;
}) {
  return (
    <Bloque invertido={invertido} style={styles.dato}>
      <Etiqueta color={invertido ? 'papel' : 'gris'}>{etiqueta}</Etiqueta>
      <Texto tipo="dato" color={invertido ? 'papel' : 'tinta'}>
        {valor}
      </Texto>
      {unidad && (
        <Texto tipo="pequeno" color={invertido ? 'papel' : 'gris'}>
          {unidad}
        </Texto>
      )}
    </Bloque>
  );
}

/** Casilla del camino: hecha (invertida, con ✓), la siguiente (marcada) o pendiente. */
function Casilla({
  leccion,
  desplazamiento,
  hecha,
  siguiente,
}: {
  leccion: Leccion;
  desplazamiento: string;
  hecha?: ProgresoLeccion;
  siguiente: boolean;
}) {
  const t = useTheme();
  const estado = hecha ? `Hecha: ${hecha.mejor} de ${hecha.total} a la primera` : siguiente ? 'Te toca' : 'Pendiente';
  return (
    <Ir
      href={{ pathname: '/leccion/[id]', params: { id: leccion.id } }}
      accessibilityLabel={`${leccion.titulo}. ${estado}.`}
      style={[styles.paso, { marginLeft: desplazamiento as `${number}%` }]}>
      <View
        style={[
          styles.casilla,
          {
            borderColor: hecha || siguiente ? t.linea : t.grisClaro,
            borderWidth: siguiente ? Borde.grueso * 2 : Borde.grueso,
            backgroundColor: hecha ? t.tinta : t.papel,
          },
        ]}>
        <Texto tipo="subtitulo" color={hecha ? 'papel' : siguiente ? 'tinta' : 'gris'} numberOfLines={1}>
          {hecha ? '✓' : leccion.simbolo}
        </Texto>
      </View>
      <View style={styles.pasoTexto}>
        {siguiente && <Etiqueta color="tinta">Te toca</Etiqueta>}
        <Texto tipo="cuerpoFuerte" color={hecha || siguiente ? 'tinta' : 'gris'}>
          {leccion.titulo}
        </Texto>
        {hecha && (
          <Texto tipo="pequeno" color="gris">
            {hecha.mejor}/{hecha.total} a la primera
          </Texto>
        )}
      </View>
    </Ir>
  );
}

/** Borrar el progreso guardado en el dispositivo; pide un segundo toque para confirmar. */
function EmpezarDeCero({ onBorrar, hayAlgo }: { onBorrar: () => void; hayAlgo: boolean }) {
  const [seguro, setSeguro] = useState(false);
  if (!hayAlgo) return null;
  return (
    <View style={styles.borrar}>
      <Texto tipo="pequeno" color="gris">
        Tu progreso se guarda solo en este dispositivo.
      </Texto>
      <Pulsable
        accessibilityRole="button"
        onPress={() => {
          if (seguro) {
            onBorrar();
            setSeguro(false);
          } else setSeguro(true);
        }}>
        <Texto tipo="pequenoFuerte" style={styles.subrayado}>
          {seguro ? '¿Seguro? Toca otra vez para borrar todo' : 'Empezar de cero'}
        </Texto>
      </Pulsable>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  marcador: { flexDirection: 'row', gap: Spacing.two },
  dato: { flex: 1, gap: Spacing.one, padding: Spacing.two },
  continuar: { padding: Spacing.three, gap: Spacing.two },
  repaso: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
  camino: { gap: Spacing.three },
  paso: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  casilla: { width: 64, height: 64, alignItems: 'center', justifyContent: 'center' },
  pasoTexto: { flex: 1, gap: Spacing.half },
  rejilla: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  borrar: { gap: Spacing.one },
  subrayado: { textDecorationLine: 'underline' },
});
