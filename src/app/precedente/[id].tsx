import { useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { MarcaPartido } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Ir, Nota, Pagina, Seccion } from '@/components/piezas';
import { Sentidos } from '@/components/sentido';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Partidos } from '@/data/partidos';
import { buscarPrecedente, type Evidencia, type Postura, Precedentes } from '@/data/precedentes';
import { buscarTema } from '@/data/temas';
import { useTheme } from '@/hooks/use-theme';
import { fechaCorta } from '@/services/fechas';

const ORDEN: Postura['sentido'][] = ['impulsa', 'frena', 'matiza'];
const ordenPartido = (id: string) => Partidos.findIndex((p) => p.id === id);

/** Para la web estática: una página por cada precedente (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Precedentes.map((x) => ({ id: x.id }));
}

export default function FichaPrecedente() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const pr = buscarPrecedente(id);
  if (!pr)
    return (
      <Pantalla atras titulo="No encontrado">
        {null}
      </Pantalla>
    );
  const tema = buscarTema(pr.temaId);

  const porTipo = pr.evidencias.reduce<Record<string, Evidencia[]>>((acc, e) => {
    (acc[e.tipo] ??= []).push(e);
    return acc;
  }, {});

  return (
    <Pantalla atras antetitulo={`¿Funcionó? · ${tema?.nombre ?? ''}`} titulo={pr.titulo}>
      <Bloque invertido>
        <Etiqueta color="papel">La pregunta</Etiqueta>
        <Texto tipo="subtitulo" color="papel">
          {pr.pregunta}
        </Texto>
      </Bloque>

      <Seccion titulo="Qué propone cada partido · 23J">
        {ORDEN.map((s) => {
          // Dentro de cada grupo, el orden de la app: alfabético por siglas.
          const lista = pr.posturas
            .filter((x) => x.sentido === s)
            .sort((a, b) => ordenPartido(a.partidoId) - ordenPartido(b.partidoId));
          if (!lista.length) return null;
          return (
            <View key={s} style={styles.grupoPostura}>
              <View style={styles.sentido}>
                <Texto tipo="titulo">{Sentidos[s].simbolo}</Texto>
                <Texto tipo="subtitulo">{Sentidos[s].texto}</Texto>
              </View>
              {lista.map((x) => (
                <Ir
                  key={x.partidoId}
                  href={{ pathname: '/partido/[id]', params: { id: x.partidoId } }}
                  style={[styles.postura, { borderLeftColor: t.linea }]}>
                  <MarcaPartido id={x.partidoId} />
                  <Texto>{x.texto}</Texto>
                  <Pagina n={x.pagina} />
                </Ir>
              ))}
            </View>
          );
        })}
      </Seccion>

      <Seccion titulo="Dónde se aplicó">
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carril}>
          {pr.casos.map((c) => (
            <Bloque key={`${c.lugar}-${c.cuando}`} style={styles.caso}>
              <Texto tipo="dato">{c.cuando}</Texto>
              <Texto tipo="subtitulo">{c.lugar}</Texto>
              <Texto tipo="pequeno">{c.que}</Texto>
            </Bloque>
          ))}
        </ScrollView>
      </Seccion>

      <Seccion titulo={`Qué dicen las fuentes · ${pr.evidencias.length}`}>
        {Object.entries(porTipo).map(([tipo, lista]) => (
          <View key={tipo} style={styles.tipo}>
            <View style={[styles.tipoCabeza, { backgroundColor: t.fondoSuave }]}>
              <Etiqueta color="tinta">{tipo}</Etiqueta>
            </View>
            {lista.map((e) => (
              <View key={`${e.quien}-${e.fuente.url}`} style={[styles.evidencia, { borderBottomColor: t.lineaSuave }]}>
                <Texto tipo="cuerpoFuerte">{e.quien}</Texto>
                <Texto>{e.dice}</Texto>
                <Enlace href={e.fuente.url}>{e.fuente.titulo}</Enlace>
                <Texto tipo="etiqueta" color="grisClaro">
                  Consultada el {fechaCorta(e.fuente.consultada)}
                </Texto>
              </View>
            ))}
          </View>
        ))}
      </Seccion>

      <View style={styles.balance}>
        <Bloque style={styles.flex}>
          <Etiqueta>En qué coinciden</Etiqueta>
          <Texto>{pr.coinciden}</Texto>
        </Bloque>
        <Bloque discontinuo style={styles.flex}>
          <Etiqueta>En qué discrepan</Etiqueta>
          <Texto>{pr.discrepan}</Texto>
        </Bloque>
      </View>

      <Nota>
        Cada fuente se resume sin adjetivos y con enlace al original. El contexto de un caso (otro país, otra época)
        puede no repetirse: léelas y saca tus conclusiones.
      </Nota>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flexGrow: 1, flexBasis: 260 },
  grupoPostura: { gap: Spacing.three },
  sentido: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  postura: { borderLeftWidth: Borde.grueso, paddingLeft: Spacing.three, gap: Spacing.one },
  carril: { gap: Spacing.two, paddingRight: Spacing.three },
  caso: { width: 250 },
  tipo: { gap: Spacing.three },
  tipoCabeza: { alignSelf: 'flex-start', paddingHorizontal: Spacing.two, paddingVertical: Spacing.one },
  evidencia: { gap: Spacing.one + Spacing.half, paddingBottom: Spacing.three, borderBottomWidth: Borde.fino },
  balance: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
});
