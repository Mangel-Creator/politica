import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { MarcaPartido, Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Chip, Etiqueta, Ir, Nota, Pagina, Segmentos } from '@/components/piezas';
import { ListaPropuestas } from '@/components/propuestas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { buscarPartido, Partidos } from '@/data/partidos';
import { Precedentes } from '@/data/precedentes';
import { resumenDe } from '@/data/programas';
import { buscarTema, Temas } from '@/data/temas';
import type { TemaId } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';

type Modo = 'tema' | 'cara';

const conResumen = Partidos.filter((p) => resumenDe(p.id));
const sinResumen = Partidos.filter((p) => !resumenDe(p.id));

export default function Comparar() {
  const params = useLocalSearchParams<{ tema?: string }>();
  const [modo, setModo] = useState<Modo>('tema');

  return (
    <Pantalla
      antetitulo="Programas del 23J · el del 29N cuando se publique"
      titulo="Comparar"
      entradilla="Qué propone cada partido sobre lo mismo, con la página del programa para comprobarlo.">
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

function PorTema({ inicial }: { inicial: TemaId }) {
  const t = useTheme();
  const [temaId, setTemaId] = useState<TemaId>(inicial);
  const tema = buscarTema(temaId)!;
  const con = conResumen.filter((p) => resumenDe(p.id)!.temas[temaId]?.length);
  const sin = conResumen.filter((p) => !con.includes(p));
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

      {con.map((p) => (
        <View key={p.id} style={[styles.partido, { borderTopColor: t.linea }]}>
          <Ir href={{ pathname: '/partido/[id]', params: { id: p.id } }} style={styles.partidoCabeza}>
            <MarcaPartido id={p.id} tipo="subtitulo" lado={16} />
            <Texto tipo="etiqueta" color="gris">
              ficha →
            </Texto>
          </Ir>
          <ListaPropuestas propuestas={resumenDe(p.id)!.temas[temaId]!} />
        </View>
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

      <Nota>
        {sin.length
          ? `Sin medidas sobre ${tema.nombre.toLowerCase()} en el resumen de su programa del 23J: ${sin.map((p) => p.siglas).join(', ')}. `
          : ''}
        Sin programa del 23J localizado: {sinResumen.map((p) => p.siglas).join(', ')}.
      </Nota>
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
        <View key={tm.id} style={styles.tema}>
          <View style={[styles.temaCabeza, { borderBottomColor: t.linea }]}>
            <Texto tipo="subtitulo">{tm.glifo}</Texto>
            <Texto tipo="subtitulo">{tm.nombre}</Texto>
          </View>
          <View style={styles.columnas}>
            {[ra, rb].map((r, i) => (
              <View
                key={r.partidoId}
                style={[
                  styles.columna,
                  i === 1 && { borderLeftColor: t.lineaSuave, borderLeftWidth: Borde.fino, paddingLeft: Spacing.three },
                ]}>
                <Etiqueta>{buscarPartido(r.partidoId)!.siglas}</Etiqueta>
                {r.temas[tm.id]?.length ? (
                  r.temas[tm.id]!.map((x) => (
                    <View key={x.texto} style={styles.medida}>
                      <Texto tipo="pequeno">{x.texto}</Texto>
                      <Pagina n={x.pagina} />
                    </View>
                  ))
                ) : (
                  <Texto tipo="pequeno" color="grisClaro">
                    Sin medidas sobre esto en el resumen de su programa.
                  </Texto>
                )}
              </View>
            ))}
          </View>
        </View>
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
