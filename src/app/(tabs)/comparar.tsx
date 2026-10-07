import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { MarcaPartido, Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Chip, Etiqueta, Ir, Nota, Pagina, Pulsable, Segmentos } from '@/components/piezas';
import { ListaPropuestas } from '@/components/propuestas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { buscarPartido, Partidos } from '@/data/partidos';
import { Precedentes } from '@/data/precedentes';
import { resumenDe } from '@/data/programas';
import { buscarTema, Temas } from '@/data/temas';
import type { Partido, Propuesta, ResumenPrograma, TemaId } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';

type Modo = 'tema' | 'cara';

const conResumen = Partidos.filter((p) => resumenDe(p.id));
const sinResumen = Partidos.filter((p) => !resumenDe(p.id));

/** Por qué un partido no tiene programa del 23J en la app, con el dato de `partidos.ts`. */
function motivoSinPrograma(p: Partido) {
  return (
    p.programasNoLocalizados?.find((x) => x.eleccion === '23J 2023')?.motivo ??
    p.nota2023 ??
    'Sin programa del 23J en la app.'
  );
}

export default function Comparar() {
  const params = useLocalSearchParams<{ tema?: string }>();
  const [modo, setModo] = useState<Modo>('tema');

  return (
    <Pantalla
      antetitulo="Programas del 23J · el del 29N cuando se publique"
      titulo="Comparar"
      entradilla="Qué plantea cada partido sobre lo mismo, con la página del programa para comprobarlo.">
      <Segmentos<Modo>
        opciones={[
          { id: 'tema', texto: 'Por tema' },
          { id: 'cara', texto: 'Cara a cara' },
        ]}
        valor={modo}
        onCambio={setModo}
      />
      {modo === 'tema' ? (
        <PorTema key={params.tema} inicial={(buscarTema(params.tema ?? '')?.id ?? 'vivienda') as TemaId} />
      ) : (
        <CaraACara />
      )}
    </Pantalla>
  );
}

function SelectorTema({ valor, onCambio }: { valor: TemaId; onCambio: (t: TemaId) => void }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carril}>
      {Temas.map((t) => (
        <Chip key={t.id} texto={`${t.glifo}  ${t.nombre}`} activo={t.id === valor} onPress={() => onCambio(t.id)} />
      ))}
    </ScrollView>
  );
}

/** Botón que abre y cierra la lista de medidas de un tema. */
function Desplegable({ n, abierto, onPress }: { n: number; abierto: boolean; onPress: () => void }) {
  return (
    <Pulsable onPress={onPress} accessibilityRole="button" accessibilityState={{ expanded: abierto }}>
      <Texto tipo="pequenoFuerte" style={styles.subrayado}>
        {abierto ? 'Ocultar medidas ▴' : `Ver ${n === 1 ? 'su medida' : `sus ${n} medidas`} ▾`}
      </Texto>
    </Pulsable>
  );
}

/** «Qué plantea» de un partido en un tema, o el aviso de que no lo hay. */
function Enfoque({ enfoque, n, pequeno }: { enfoque?: Propuesta; n: number; pequeno?: boolean }) {
  if (!n)
    return (
      <Texto tipo="pequeno" color="gris">
        Sin medidas sobre este tema en su programa del 23J.
      </Texto>
    );
  if (!enfoque)
    return (
      <Texto tipo="pequeno" color="gris">
        Sin resumen de su planteamiento en este tema: mira sus medidas.
      </Texto>
    );
  return (
    <View style={styles.enfoque}>
      <Texto tipo={pequeno ? 'pequeno' : 'cuerpo'}>{enfoque.texto}</Texto>
      <Pagina n={enfoque.pagina} />
    </View>
  );
}

/** Ficha de un partido en un tema. Todas iguales; cambia solo el texto. */
function FichaPartido({ p, temaId }: { p: Partido; temaId: TemaId }) {
  const t = useTheme();
  const [abierto, setAbierto] = useState(false);
  const r = resumenDe(p.id);
  const medidas = r?.temas[temaId] ?? [];

  return (
    <View style={[styles.partido, { borderTopColor: t.linea }]}>
      <Ir
        href={
          r
            ? { pathname: '/programa/[id]', params: medidas.length ? { id: p.id, tema: temaId } : { id: p.id } }
            : { pathname: '/partido/[id]', params: { id: p.id } }
        }
        style={styles.partidoCabeza}>
        <MarcaPartido id={p.id} tipo="subtitulo" lado={16} />
        <Texto tipo="etiqueta" color="gris">
          {r ? 'programa →' : 'ficha →'}
        </Texto>
      </Ir>
      {r ? (
        <>
          <Enfoque enfoque={r.enfoques?.[temaId]} n={medidas.length} />
          {medidas.length > 0 && (
            <Desplegable n={medidas.length} abierto={abierto} onPress={() => setAbierto(!abierto)} />
          )}
          {abierto && <ListaPropuestas propuestas={medidas} />}
        </>
      ) : (
        <Texto tipo="pequeno" color="gris">
          {`Sin programa del 23J. ${motivoSinPrograma(p)}`}
        </Texto>
      )}
    </View>
  );
}

function PorTema({ inicial }: { inicial: TemaId }) {
  const [temaId, setTemaId] = useState<TemaId>(inicial);
  const tema = buscarTema(temaId)!;
  const precedentes = Precedentes.filter((p) => p.temaId === temaId);

  return (
    <View style={styles.vista}>
      <SelectorTema valor={temaId} onCambio={setTemaId} />

      <View style={styles.pregunta}>
        <Texto tipo="gigante" style={styles.glifoGrande}>
          {tema.glifo}
        </Texto>
        <View style={styles.flex}>
          <Texto tipo="titulo">{tema.nombre}</Texto>
          <Texto color="gris">{tema.pregunta}</Texto>
        </View>
      </View>

      <Nota>
        Partidos en orden alfabético. De cada uno, qué plantea sobre el tema según su programa del 23J; toca «Ver sus
        medidas» para la lista completa o «programa» para el documento entero. Es lo que promete cada partido, no un
        hecho comprobado.
      </Nota>

      {Partidos.map((p) => (
        <FichaPartido key={`${p.id}-${temaId}`} p={p} temaId={temaId} />
      ))}

      {precedentes.map((pr) => (
        <Ir key={pr.id} href={{ pathname: '/precedente/[id]', params: { id: pr.id } }}>
          <Bloque invertido>
            <Etiqueta color="papel">¿Funcionó cuando se hizo?</Etiqueta>
            <Texto tipo="subtitulo" color="papel">
              {pr.titulo} →
            </Texto>
          </Bloque>
        </Ir>
      ))}
    </View>
  );
}

function SelectorPartido({
  valor,
  otro,
  onCambio,
  rotulo,
}: {
  valor: string;
  otro: string;
  onCambio: (id: string) => void;
  rotulo: string;
}) {
  return (
    <View style={styles.selector}>
      <Etiqueta>{rotulo}</Etiqueta>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carril}>
        {conResumen
          .filter((p) => p.id !== otro)
          .map((p) => (
            <Chip
              key={p.id}
              texto={p.siglas}
              activo={p.id === valor}
              onPress={() => onCambio(p.id)}
              antes={<Muestra color={p.color} />}
            />
          ))}
      </ScrollView>
    </View>
  );
}

/** Un tema en Cara a cara: lo que plantea cada uno y, si se pide, sus medidas. */
function TemaCaraACara({ temaId, ra, rb }: { temaId: TemaId; ra: ResumenPrograma; rb: ResumenPrograma }) {
  const t = useTheme();
  const tm = buscarTema(temaId)!;
  const [abierto, setAbierto] = useState(false);
  const total = (ra.temas[temaId]?.length ?? 0) + (rb.temas[temaId]?.length ?? 0);

  return (
    <View style={styles.tema}>
      <View style={[styles.temaCabeza, { borderBottomColor: t.linea }]}>
        <Texto tipo="subtitulo">{tm.glifo}</Texto>
        <Texto tipo="subtitulo">{tm.nombre}</Texto>
      </View>
      <View style={styles.columnas}>
        {[ra, rb].map((r, i) => {
          const medidas = r.temas[temaId] ?? [];
          return (
            <View
              key={r.partidoId}
              style={[
                styles.columna,
                i === 1 && { borderLeftColor: t.lineaSuave, borderLeftWidth: Borde.fino, paddingLeft: Spacing.three },
              ]}>
              <Etiqueta>{`${buscarPartido(r.partidoId)!.siglas} · ${medidas.length} ${medidas.length === 1 ? 'medida' : 'medidas'}`}</Etiqueta>
              <Enfoque enfoque={r.enfoques?.[temaId]} n={medidas.length} pequeno />
              {abierto &&
                medidas.map((x) => (
                  <View key={x.texto} style={styles.medida}>
                    <Texto tipo="pequeno">— {x.texto}</Texto>
                    <Pagina n={x.pagina} />
                  </View>
                ))}
            </View>
          );
        })}
      </View>
      {total > 0 && (
        <Pulsable
          onPress={() => setAbierto(!abierto)}
          accessibilityRole="button"
          accessibilityState={{ expanded: abierto }}>
          <Texto tipo="pequenoFuerte" style={styles.subrayado}>
            {abierto ? 'Ocultar medidas ▴' : 'Ver las medidas ▾'}
          </Texto>
        </Pulsable>
      )}
    </View>
  );
}

function CaraACara() {
  const t = useTheme();
  const [a, setA] = useState(conResumen[0].id);
  const [b, setB] = useState(conResumen[1].id);
  const ra = resumenDe(a)!;
  const rb = resumenDe(b)!;
  const temas = Temas.filter((tm) => ra.temas[tm.id]?.length || rb.temas[tm.id]?.length);
  const comunes = temas.filter((tm) => ra.temas[tm.id]?.length && rb.temas[tm.id]?.length);

  return (
    <View style={styles.vista}>
      <SelectorPartido rotulo="Partido A" valor={a} otro={b} onCambio={setA} />
      <SelectorPartido rotulo="Partido B" valor={b} otro={a} onCambio={setB} />

      <Nota>
        {`Solo partidos con programa del 23J en la app. Sin él: ${sinResumen
          .map((p) => {
            const m = motivoSinPrograma(p).replace(/\.$/, '');
            return `${p.siglas} (${m[0].toLowerCase()}${m.slice(1)})`;
          })
          .join('; ')}.`}
      </Nota>

      <View style={[styles.marcador, { borderColor: t.linea }]}>
        <View style={styles.marcadorLado}>
          <MarcaPartido id={a} tipo="titulo" lado={18} />
        </View>
        <View style={[styles.marcadorCentro, { borderColor: t.linea }]}>
          <Texto tipo="dato">{comunes.length}</Texto>
          <Texto tipo="etiqueta" color="gris" style={styles.centrado}>
            temas en común
          </Texto>
        </View>
        <View style={[styles.marcadorLado, styles.derecha]}>
          <MarcaPartido id={b} tipo="titulo" lado={18} />
        </View>
      </View>

      {temas.map((tm) => (
        <TemaCaraACara key={`${a}-${b}-${tm.id}`} temaId={tm.id} ra={ra} rb={rb} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  vista: { gap: Spacing.four },
  carril: { gap: Spacing.two, paddingRight: Spacing.three },
  pregunta: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  glifoGrande: { width: 76, textAlign: 'center', fontSize: 64, lineHeight: 72, letterSpacing: 0 },
  partido: { borderTopWidth: Borde.grueso, paddingTop: Spacing.three, gap: Spacing.three },
  partidoCabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  enfoque: { gap: Spacing.one },
  subrayado: { textDecorationLine: 'underline' },
  selector: { gap: Spacing.two },
  marcador: { flexDirection: 'row', borderWidth: Borde.grueso, alignItems: 'stretch' },
  marcadorLado: { flex: 1, padding: Spacing.three, justifyContent: 'center' },
  derecha: { alignItems: 'flex-end' },
  marcadorCentro: {
    width: 88,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: Borde.grueso,
    borderRightWidth: Borde.grueso,
    padding: Spacing.two,
  },
  centrado: { textAlign: 'center' },
  tema: { gap: Spacing.three },
  temaCabeza: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'center',
    borderBottomWidth: Borde.grueso,
    paddingBottom: Spacing.two,
  },
  columnas: { flexDirection: 'row', gap: Spacing.three },
  columna: { flex: 1, gap: Spacing.three },
  medida: { gap: Spacing.one },
});
