import { useLocalSearchParams } from 'expo-router';
import { type ReactNode, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/enlaces';
import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Nota, Pulsable, Seccion, Segmentos } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { CONSULTA_MIEMBROS, miembrosDe, type Candidatura, type Miembro, type MiembrosPartido } from '@/data/miembros';
import { buscarPartido, Partidos } from '@/data/partidos';
import type { Fuente } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';
import { fechaCorta, fechaLarga } from '@/services/fechas';

type Vista = 'direccion' | 'gobierno';

/** Para la web estática: una página por partido (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Partidos.map((x) => ({ id: x.id }));
}

const ESTADO: Record<Candidatura['estado'], string> = {
  anunciada: 'Anunciada',
  propuesta: 'Propuesta, falta aprobarla',
  pendiente: 'Sin anunciar',
};

/** Las fuentes de varios sitios, sin repetir. */
function unicas(listas: Fuente[][]): Fuente[] {
  const vistas = new Set<string>();
  return listas.flat().filter((f) => (vistas.has(f.url) ? false : (vistas.add(f.url), true)));
}

export default function MiembrosPartidoPantalla() {
  const { id, vista: vistaInicial } = useLocalSearchParams<{ id: string; vista?: Vista }>();
  const [vista, setVista] = useState<Vista>(vistaInicial === 'gobierno' ? 'gobierno' : 'direccion');
  const p = buscarPartido(id);
  const m = miembrosDe(id);
  if (!p || !m)
    return (
      <Pantalla atras titulo="Partido no encontrado">
        {null}
      </Pantalla>
    );

  return (
    <Pantalla atras antetitulo={`Miembros · ${p.nombre}`}>
      <View style={styles.siglas}>
        <Muestra color={p.color} lado={30} />
        <Texto tipo="display" accessibilityRole="header" style={styles.flex}>
          {p.siglas}
        </Texto>
      </View>
      <Texto color="gris">
        Quién dirige el partido, qué ha estudiado cada persona y qué se sabe del Gobierno que propone. Solo hechos con
        fuente; si las fuentes no coinciden, se dice quién dice qué.
      </Texto>

      <Segmentos<Vista>
        opciones={[
          { id: 'direccion', texto: 'Dirección' },
          { id: 'gobierno', texto: 'Gobierno' },
        ]}
        valor={vista}
        onCambio={setVista}
      />

      {vista === 'direccion' ? <VistaDireccion m={m} /> : <VistaGobierno m={m} />}

      <View>
        <Fila href={{ pathname: '/partido/[id]', params: { id: p.id } }} titulo={`Ficha de ${p.siglas}`} />
        <Fila href={{ pathname: '/historia/[id]', params: { id: p.id } }} titulo="Su historia" />
      </View>

      <Nota>{`Consultado el ${fechaLarga(CONSULTA_MIEMBROS, true)}. Los cargos y las candidaturas pueden cambiar durante la campaña; se actualizarán con su fuente.`}</Nota>
    </Pantalla>
  );
}

function VistaDireccion({ m }: { m: MiembrosPartido }) {
  return (
    <View style={styles.vista}>
      <Bloque>
        <Etiqueta>{`Candidatura al 29N · ${ESTADO[m.candidatura.estado]}`}</Etiqueta>
        <Texto>{m.candidatura.texto}</Texto>
        <FuentesPlegables fuentes={m.candidatura.fuentes} />
      </Bloque>

      <Seccion titulo={`Dirección · ${m.miembros.length}`}>
        <View style={styles.lista}>
          {m.miembros.map((x) => (
            <FichaMiembro key={x.nombre} x={x} />
          ))}
        </View>
      </Seccion>
    </View>
  );
}

function FichaMiembro({ x }: { x: Miembro }) {
  const t = useTheme();
  const fuentes = unicas([
    ...x.cargos.map((c) => c.fuentes),
    x.nacimiento?.fuentes ?? [],
    x.fuentesEstudios,
    x.fuentes,
  ]);
  return (
    <View style={[styles.ficha, { borderColor: t.linea }]}>
      <View style={styles.fichaCabeza}>
        <Etiqueta>{x.papel}</Etiqueta>
        <Texto tipo="subtitulo">{x.nombre}</Texto>
        {x.nacimiento && (
          <Texto tipo="pequeno" color="gris">
            {`Nació en ${x.nacimiento.anio}${x.nacimiento.lugar ? ` · ${x.nacimiento.lugar}` : ''}`}
          </Texto>
        )}
      </View>

      <Apartado titulo="Cargos">
        {x.cargos.map((c) => (
          <Punto key={c.cargo} texto={c.cargo} detalle={c.desde} />
        ))}
      </Apartado>

      <Apartado titulo="Estudios">
        {x.estudios.length ? (
          x.estudios.map((e) => (
            <Punto
              key={e.titulo}
              texto={e.titulo}
              detalle={[e.centro, e.anio].filter(Boolean).join(' · ') || undefined}
              marca={e.estado}
            />
          ))
        ) : (
          <Texto tipo="pequeno" color="gris">
            No constan en las fuentes consultadas.
          </Texto>
        )}
      </Apartado>

      <Apartado titulo="Trayectoria">
        {x.trayectoria.map((p) => (
          <Texto key={p} tipo="pequeno">
            {p}
          </Texto>
        ))}
      </Apartado>

      {x.avisos && (
        <Bloque discontinuo style={styles.avisos}>
          <Etiqueta>Quién dice qué</Etiqueta>
          {x.avisos.map((a) => (
            <Texto key={a} tipo="pequeno">
              {a}
            </Texto>
          ))}
        </Bloque>
      )}

      <FuentesPlegables fuentes={fuentes} />
    </View>
  );
}

function Apartado({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <View style={styles.apartado}>
      <Etiqueta>{titulo}</Etiqueta>
      {children}
    </View>
  );
}

/** Una línea con cuadradito: el dato, y debajo el detalle en gris. */
function Punto({ texto, detalle, marca }: { texto: string; detalle?: string; marca?: string }) {
  const t = useTheme();
  return (
    <View style={styles.punto}>
      <View style={[styles.cuadro, { backgroundColor: t.tinta }]} />
      <View style={styles.flex}>
        <Texto tipo="pequenoFuerte">
          {texto}
          {marca ? <Texto tipo="pequeno" color="gris">{` · ${marca}`}</Texto> : null}
        </Texto>
        {detalle && (
          <Texto tipo="pequeno" color="gris">
            {detalle}
          </Texto>
        )}
      </View>
    </View>
  );
}

/** Las fuentes se pliegan para que las fichas no se hagan eternas en el móvil. */
function FuentesPlegables({ fuentes }: { fuentes: Fuente[] }) {
  const [abiertas, setAbiertas] = useState(false);
  return (
    <View style={styles.apartado}>
      <Pulsable
        onPress={() => setAbiertas((a) => !a)}
        accessibilityRole="button"
        accessibilityState={{ expanded: abiertas }}
        style={styles.plegable}>
        <Texto tipo="etiqueta">{`Fuentes · ${fuentes.length}`}</Texto>
        <Texto tipo="pequenoFuerte">{abiertas ? '−' : '+'}</Texto>
      </Pulsable>
      {abiertas && <ListaFuentes fuentes={fuentes} />}
    </View>
  );
}

function VistaGobierno({ m }: { m: MiembrosPartido }) {
  const t = useTheme();
  return (
    <View style={styles.vista}>
      <Seccion titulo="1 · Gobierno actual">
        {m.gobiernoActual ? (
          <>
            <Texto>{m.gobiernoActual.texto}</Texto>
            <View>
              {m.gobiernoActual.miembros.map((g) => (
                <View key={g.nombre} style={[styles.ministro, { borderBottomColor: t.lineaSuave }]}>
                  <Texto tipo="pequenoFuerte">{g.nombre}</Texto>
                  <Texto tipo="pequeno" color="gris">
                    {g.partido ? `${g.cargo} · ${g.partido}` : g.cargo}
                  </Texto>
                </View>
              ))}
            </View>
            <FuentesPlegables fuentes={m.gobiernoActual.fuentes} />
          </>
        ) : (
          <Texto color="gris">Este partido no forma parte del Gobierno.</Texto>
        )}
      </Seccion>

      <Seccion titulo="2 · Lo que ha anunciado el partido">
        <Bloque>
          <Texto>{m.anunciado.texto}</Texto>
          <FuentesPlegables fuentes={m.anunciado.fuentes} />
        </Bloque>
      </Seccion>

      <Seccion titulo="3 · Ministrables según la prensa">
        <Bloque invertido>
          <Texto tipo="pequenoFuerte" color="papel">
            Especulación de prensa, no anuncio del partido.
          </Texto>
          <Texto tipo="pequeno" color="papel">
            Son nombres que publican los medios. Nadie los ha confirmado y pueden no cumplirse.
          </Texto>
        </Bloque>
        {m.prensa.map((x) => (
          <View key={x.nombre} style={[styles.ministrable, { borderColor: t.linea }]}>
            <Texto tipo="cuerpoFuerte">{x.nombre}</Texto>
            <Texto tipo="pequeno" color="gris">
              {x.perfil}
            </Texto>
            <View style={styles.menciones}>
              {x.menciones.map((n) => (
                <View key={n.medio} style={styles.mencion}>
                  <Etiqueta>{`${n.medio} · ${fechaCorta(n.fecha)}`}</Etiqueta>
                  <Texto tipo="pequeno">{n.dice}</Texto>
                  <Enlace href={n.url}>{n.titulo}</Enlace>
                </View>
              ))}
            </View>
          </View>
        ))}
        {m.notaPrensa && <Nota>{m.notaPrensa}</Nota>}
      </Seccion>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  vista: { gap: Spacing.five },
  lista: { gap: Spacing.four },
  ficha: { borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.three },
  fichaCabeza: { gap: Spacing.half },
  apartado: { gap: Spacing.two },
  punto: { flexDirection: 'row', gap: Spacing.two },
  cuadro: { width: 8, height: 8, marginTop: 7 },
  avisos: { gap: Spacing.two },
  plegable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.one,
  },
  ministro: { paddingVertical: Spacing.two, borderBottomWidth: Borde.fino, gap: Spacing.half },
  ministrable: { borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.one },
  menciones: { gap: Spacing.three, marginTop: Spacing.two },
  mencion: { gap: Spacing.half },
});
