import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/enlaces';
import { Muestra } from '@/components/marca-partido';
import { PromesaYVoto } from '@/components/promesa-voto';
import { ListaPropuestas } from '@/components/propuestas';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Ir, Nota, Pagina, Pulsable, Seccion, Segmentos } from '@/components/piezas';
import { Sentidos } from '@/components/sentido';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Hechos } from '@/data/hechos';
import { historiaDe, type Hito } from '@/data/historias';
import { buscarPartido, FuentesEscanos2023, Partidos } from '@/data/partidos';
import { Precedentes } from '@/data/precedentes';
import { resumenDe } from '@/data/programas';
import { Temas } from '@/data/temas';
import type { Partido, ResumenPrograma } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';
import { fechaCorta } from '@/services/fechas';

type Vista = 'programa' | 'votos' | 'historia' | 'datos';

/** Para la web estática: una página por cada partido (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Partidos.map((x) => ({ id: x.id }));
}

export default function FichaPartido() {
  const { id, vista: vistaInicial } = useLocalSearchParams<{ id: string; vista?: Vista }>();
  const [vista, setVista] = useState<Vista>(vistaInicial ?? 'programa');
  const p = buscarPartido(id);
  if (!p)
    return (
      <Pantalla atras titulo="Partido no encontrado">
        {null}
      </Pantalla>
    );
  const historia = historiaDe(p.id);

  return (
    <Pantalla atras antetitulo={p.nombre}>
      <View style={styles.cabecera}>
        <View style={styles.siglas}>
          <Muestra color={p.color} lado={30} />
          <Texto tipo="display" accessibilityRole="header" style={styles.flex}>
            {p.siglas}
          </Texto>
        </View>
        <View style={styles.cifras}>
          <Cifra
            valor={p.escanos2023 === null ? '—' : String(p.escanos2023)}
            etiqueta={p.escanos2023 === null ? 'en Sumar 23J' : 'escaños 23J'}
          />
          <Cifra valor={historia?.fundacion ?? '—'} etiqueta="fundación" />
          <Cifra valor={String(p.programas[0]?.paginas ?? '—')} etiqueta="págs. programa" />
        </View>
      </View>

      <Fila
        href={{ pathname: '/miembros/[id]', params: { id: p.id } }}
        titulo="Miembros"
        subtitulo="Quién lo dirige, qué ha estudiado y el Gobierno que propone"
      />

      <Segmentos<Vista>
        opciones={[
          { id: 'programa', texto: 'Programa' },
          { id: 'votos', texto: 'Votos' },
          { id: 'historia', texto: 'Historia' },
          { id: 'datos', texto: 'Datos' },
        ]}
        valor={vista}
        onCambio={setVista}
      />

      {vista === 'programa' && <VistaPrograma p={p} resumen={resumenDe(p.id)} />}
      {vista === 'votos' && <VistaVotos p={p} />}
      {vista === 'historia' &&
        (historia ? <VistaHistoria h={historia} id={p.id} /> : <Nota>Sin historia todavía.</Nota>)}
      {vista === 'datos' && <VistaDatos p={p} />}
    </Pantalla>
  );
}

function Cifra({ valor, etiqueta }: { valor: string; etiqueta: string }) {
  const t = useTheme();
  return (
    <View style={[styles.cifra, { borderColor: t.linea }]}>
      <Texto tipo="dato" numberOfLines={1} adjustsFontSizeToFit>
        {valor}
      </Texto>
      <Etiqueta>{etiqueta}</Etiqueta>
    </View>
  );
}

function VistaPrograma({ p, resumen }: { p: Partido; resumen?: ResumenPrograma }) {
  const t = useTheme();
  const [abiertos, setAbiertos] = useState<string[]>([]);
  const posturas = Precedentes.flatMap((pr) =>
    pr.posturas.filter((x) => x.partidoId === p.id).map((x) => ({ ...x, pr })),
  );
  const pdf = p.programas.find((x) => x.eleccion === resumen?.eleccion) ?? p.programas[0];

  if (!resumen) {
    return (
      <View style={styles.vista}>
        {(p.programasNoLocalizados ?? []).map((n) => (
          <Bloque key={n.eleccion} discontinuo>
            <Etiqueta>Programa {n.eleccion}: no localizado</Etiqueta>
            <Texto tipo="pequeno">{n.motivo}</Texto>
          </Bloque>
        ))}
        {p.nota2023 && <Nota>{p.nota2023}</Nota>}
        <Nota>El programa del 29N se añadirá en cuanto el partido lo publique.</Nota>
      </View>
    );
  }

  const temas = Temas.filter((tm) => resumen.temas[tm.id]?.length);
  const alternar = (id: string) => setAbiertos((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]));

  return (
    <View style={styles.vista}>
      <Nota>
        Programa del {resumen.eleccion}: el del 29N se añadirá cuando se publique. Es lo que promete el partido, no un
        hecho comprobado; cada punto lleva su página del PDF para leerlo entero.
        {resumen.nota ? `\n\n${resumen.nota}` : ''}
      </Nota>

      <Fila
        href={{ pathname: '/programa/[id]', params: { id: p.id } }}
        titulo="Programa en detalle"
        subtitulo="Todos los temas abiertos, con lo que plantea en cada uno"
      />

      <Seccion titulo="Lo que más destaca">
        {resumen.ideasClave.map((idea, i) => (
          <View key={idea.texto} style={[styles.idea, { borderBottomColor: t.lineaSuave }]}>
            <Texto tipo="dato" style={styles.ideaNumero}>
              {String(i + 1).padStart(2, '0')}
            </Texto>
            <View style={styles.flex}>
              <Texto tipo="cuerpoFuerte">{idea.texto}</Texto>
              <Pagina n={idea.pagina} />
            </View>
          </View>
        ))}
      </Seccion>

      <Seccion titulo={`Por temas · ${temas.length}`}>
        <View>
          {temas.map((tm) => {
            const abierto = abiertos.includes(tm.id);
            const lista = resumen.temas[tm.id]!;
            return (
              <View key={tm.id} style={[styles.tema, { borderBottomColor: t.linea }]}>
                <Pulsable
                  onPress={() => alternar(tm.id)}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: abierto }}
                  style={styles.temaCabeza}>
                  <Texto tipo="subtitulo" style={styles.glifo}>
                    {tm.glifo}
                  </Texto>
                  <Texto tipo="cuerpoFuerte" style={styles.flex}>
                    {tm.nombre}
                  </Texto>
                  <Texto tipo="etiqueta" color="gris">
                    {lista.length}
                  </Texto>
                  <Texto tipo="subtitulo">{abierto ? '−' : '+'}</Texto>
                </Pulsable>
                {abierto && (
                  <View style={styles.propuestas}>
                    <ListaPropuestas propuestas={lista} sangria={28 + Spacing.three} />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </Seccion>

      {posturas.length > 0 && (
        <Seccion titulo="¿Se probó ya?">
          {posturas.map((x) => (
            <Ir
              key={x.pr.id}
              href={{ pathname: '/precedente/[id]', params: { id: x.pr.id } }}
              style={[styles.postura, { borderColor: t.linea }]}>
              <Texto tipo="subtitulo">{Sentidos[x.sentido].simbolo}</Texto>
              <View style={styles.flex}>
                <Etiqueta>{Sentidos[x.sentido].texto}</Etiqueta>
                <Texto tipo="cuerpoFuerte">{x.pr.titulo}</Texto>
              </View>
              <Texto tipo="subtitulo">→</Texto>
            </Ir>
          ))}
        </Seccion>
      )}

      {pdf && (
        <Seccion titulo="Documento completo">
          <Enlace href={pdf.urlOficial} fuerte>
            {`PDF oficial · ${pdf.paginas} páginas`}
          </Enlace>
          {pdf.urlArchivo && <Enlace href={pdf.urlArchivo}>Copia en Internet Archive</Enlace>}
        </Seccion>
      )}
    </View>
  );
}

function Cronologia({ hitos }: { hitos: Hito[] }) {
  const t = useTheme();
  return (
    <View>
      {hitos.map((h, i) => (
        <View key={`${h.anio}-${i}`} style={styles.hito}>
          <View style={styles.hitoAnio}>
            <Texto tipo="pequenoFuerte">{h.anio}</Texto>
          </View>
          <View style={styles.hitoLinea}>
            <View style={[styles.hitoPunto, { backgroundColor: t.tinta }]} />
            {i < hitos.length - 1 && <View style={[styles.hitoTrazo, { backgroundColor: t.tinta }]} />}
          </View>
          <Texto style={[styles.flex, styles.hitoTexto]}>{h.texto}</Texto>
        </View>
      ))}
    </View>
  );
}

function VistaVotos({ p }: { p: Partido }) {
  const conPromesa = Hechos.filter((h) => h.promesas.some((x) => x.partidoId === p.id));
  const resto = Hechos.filter((h) => !conPromesa.includes(h));
  return (
    <View style={styles.vista}>
      <Texto color="gris">
        {p.programas.length
          ? `Lo que ${p.siglas} llevaba en su programa del 23J y lo que votó en el Pleno del Congreso.`
          : `${p.siglas} no tiene programa del 23J en la app: aquí están sus votos en el Pleno del Congreso.`}{' '}
        Los números son cada votación, en orden; dentro de cada tema se explica qué significaba votar sí.
      </Texto>
      {conPromesa.length > 0 && (
        <Seccion titulo={`Con promesa en su programa · ${conPromesa.length}`}>
          {conPromesa.map((h) => (
            <PromesaYVoto key={h.id} hecho={h} partidoId={p.id} conTitulo />
          ))}
        </Seccion>
      )}
      <Seccion titulo={`Otros temas que votó · ${resto.length}`}>
        {resto.map((h) => (
          <PromesaYVoto key={h.id} hecho={h} partidoId={p.id} conTitulo />
        ))}
      </Seccion>
    </View>
  );
}

function VistaHistoria({ h, id }: { h: NonNullable<ReturnType<typeof historiaDe>>; id: string }) {
  return (
    <View style={styles.vista}>
      <Fila
        href={{ pathname: '/historia/[id]', params: { id } }}
        titulo="Historia completa"
        subtitulo="Por etapas, con líderes, escaños desde 1977 y casos judiciales"
      />
      <View style={styles.fundacion}>
        <Texto tipo="gigante">{h.fundacion}</Texto>
        <Texto>{h.origen}</Texto>
      </View>

      <Bloque>
        <Etiqueta>Ideología · según la ficha de Wikipedia</Etiqueta>
        <Texto tipo="cuerpoFuerte">{h.ideologia}</Texto>
        <Etiqueta>Posición · según la misma ficha</Etiqueta>
        <Texto tipo="cuerpoFuerte">{h.posicion}</Texto>
      </Bloque>

      <Seccion titulo="Quién lo dirige">
        <Texto>{h.liderazgo}</Texto>
      </Seccion>

      <Seccion titulo="Momentos clave">
        <Cronologia hitos={h.hitos} />
      </Seccion>

      {h.judicial && (
        <Seccion titulo="Casos judiciales">
          <Cronologia hitos={h.judicial} />
          <Texto tipo="pequeno" color="gris">
            Con sentencia firme o relevancia histórica, y con su desenlace completo (recursos, indultos o anulaciones).
          </Texto>
        </Seccion>
      )}

      <Seccion titulo="Fuentes">
        <ListaFuentes fuentes={h.fuentes} />
      </Seccion>
    </View>
  );
}

function VistaDatos({ p }: { p: Partido }) {
  return (
    <View style={styles.vista}>
      <Seccion titulo="Elecciones del 23J 2023">
        <Texto>
          {p.escanos2023 === null
            ? 'Sin candidatura propia.'
            : `${p.escanos2023} de 350 escaños en el Congreso${
                p.votos2023 ? `, con ${p.votos2023.toLocaleString('es-ES')} votos` : ''
              }.`}
          {p.nota2023 ? ` ${p.nota2023}` : ''}
        </Texto>
        <ListaFuentes fuentes={FuentesEscanos2023} />
      </Seccion>

      <Seccion titulo="Programas guardados">
        {p.programas.map((x) => (
          <Bloque key={x.sha256}>
            <Etiqueta>
              {x.eleccion} · {x.tipo}
            </Etiqueta>
            <Texto tipo="pequeno">
              {x.paginas} páginas · fechado el {fechaCorta(x.fechaDocumento)}
            </Texto>
            <Enlace href={x.urlOficial}>PDF en la web del partido</Enlace>
            {x.urlArchivo && <Enlace href={x.urlArchivo}>Copia en Internet Archive</Enlace>}
            <Etiqueta>Huella SHA-256</Etiqueta>
            <Texto tipo="pequeno" color="gris" selectable style={styles.huella}>
              {x.sha256}
            </Texto>
          </Bloque>
        ))}
        {(p.programasNoLocalizados ?? []).map((n) => (
          <Bloque key={n.eleccion} discontinuo>
            <Etiqueta>{n.eleccion} · no localizado</Etiqueta>
            <Texto tipo="pequeno">{n.motivo}</Texto>
          </Bloque>
        ))}
        <Texto tipo="pequeno" color="gris">
          La huella permite comprobar que el PDF es exactamente el que publicó el partido: si cambiara una sola letra,
          cambiaría la huella.
        </Texto>
      </Seccion>

      <Seccion titulo="Web oficial">
        <Enlace href={p.web}>{p.web.replace(/^https?:\/\//, '').replace(/\/$/, '')}</Enlace>
      </Seccion>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cabecera: { gap: Spacing.three },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  cifras: { flexDirection: 'row', gap: Spacing.two },
  cifra: { flex: 1, borderWidth: Borde.grueso, padding: Spacing.two + Spacing.one, gap: Spacing.half },
  vista: { gap: Spacing.five },
  idea: { flexDirection: 'row', gap: Spacing.three, paddingBottom: Spacing.three, borderBottomWidth: Borde.fino },
  ideaNumero: { width: 44 },
  tema: { borderBottomWidth: Borde.grueso },
  temaCabeza: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, paddingVertical: Spacing.three },
  glifo: { width: 28, textAlign: 'center' },
  propuestas: { paddingBottom: Spacing.three },
  postura: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
  fundacion: { gap: Spacing.two },
  hito: { flexDirection: 'row', gap: Spacing.two },
  hitoAnio: { width: 48, paddingTop: 2 },
  hitoLinea: { width: 14, alignItems: 'center' },
  hitoPunto: { width: 12, height: 12, marginTop: 5 },
  hitoTrazo: { width: 2.5, flex: 1 },
  hitoTexto: { paddingBottom: Spacing.four },
  huella: { fontFamily: 'monospace' },
});
