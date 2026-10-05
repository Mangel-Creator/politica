import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Nota, Pulsable, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Familias, Spacing } from '@/constants/theme';
import { nombreArticulo, urlArticulo } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';
import { dhondt } from '@/services/dhondt';

/** Ejemplo del artículo 163 de la LOREG. */
const EJEMPLO = [
  { id: 'A', votos: 168000 },
  { id: 'B', votos: 104000 },
  { id: 'C', votos: 72000 },
  { id: 'D', votos: 64000 },
  { id: 'E', votos: 40000 },
  { id: 'F', votos: 32000 },
];
const ART_163 = { norma: 'LOREG', numero: '163' } as const;
const fmt = (n: number) => Math.round(n).toLocaleString('es-ES');

export default function Simulador() {
  const t = useTheme();
  const [votos, setVotos] = useState(EJEMPLO);
  const [escanos, setEscanos] = useState(8);
  const [blancos, setBlancos] = useState(0);
  const r = dhondt(votos, escanos, { blancos });
  const validos = votos.reduce((s, c) => s + c.votos, 0) + blancos;
  const columnas = Math.min(escanos, 8);

  const cambiarVotos = (id: string, texto: string) => {
    const n = Number(texto.replace(/\D/g, '')) || 0;
    setVotos((v) => v.map((c) => (c.id === id ? { ...c, votos: n } : c)));
  };

  return (
    <Pantalla
      atras
      antetitulo="Simulador · regla D’Hondt"
      titulo="Reparto de escaños"
      entradilla="Así se reparten los diputados de una provincia. Cambia los votos o los escaños y mira qué pasa: en provincias con pocos escaños, las listas pequeñas se quedan fuera.">
      <View style={styles.controles}>
        <View style={styles.flex}>
          <Etiqueta>Escaños de la provincia</Etiqueta>
          <View style={styles.stepper}>
            <Paso texto="−" onPress={() => setEscanos(Math.max(1, escanos - 1))} />
            <View style={[styles.stepperValor, { borderColor: t.linea }]}>
              <Texto tipo="dato">{escanos}</Texto>
            </View>
            <Paso texto="+" onPress={() => setEscanos(Math.min(37, escanos + 1))} />
          </View>
        </View>
        <View style={styles.flex}>
          <Etiqueta>Votos en blanco</Etiqueta>
          <Campo valor={blancos} onCambio={(x) => setBlancos(Number(x.replace(/\D/g, '')) || 0)} />
        </View>
      </View>
      <Texto tipo="pequeno" color="gris">
        Cada provincia tiene al menos 2 escaños; Ceuta y Melilla, 1 (LOREG, art. 162). Umbral del 3 %: {fmt(r.umbral)}{' '}
        votos.
      </Texto>

      <View style={styles.listas}>
        {votos.map((c) => {
          const fuera = r.excluidas.includes(c.id);
          const pv = validos ? (c.votos / validos) * 100 : 0;
          const pe = (r.escanos[c.id] / escanos) * 100;
          return (
            <View key={c.id} style={[styles.lista, { borderBottomColor: t.lineaSuave }]}>
              <View style={styles.listaCabeza}>
                <View style={[styles.letra, { backgroundColor: t.tinta }]}>
                  <Texto tipo="subtitulo" color="papel">
                    {c.id}
                  </Texto>
                </View>
                <View style={styles.flex}>
                  <Campo valor={c.votos} onCambio={(x) => cambiarVotos(c.id, x)} />
                </View>
                <View style={styles.escanos}>
                  <Texto tipo="dato">{r.escanos[c.id]}</Texto>
                  <Etiqueta>{fuera ? '< 3 %' : 'escaños'}</Etiqueta>
                </View>
              </View>
              <Barra etiqueta={`${pv.toFixed(1).replace('.', ',')} % votos`} pct={pv} hueca />
              <Barra etiqueta={`${pe.toFixed(1).replace('.', ',')} % escaños`} pct={pe} />
            </View>
          );
        })}
      </View>

      {r.sorteo && <Nota>El último escaño empata en cociente y en votos: la ley manda sortearlo.</Nota>}

      <Seccion titulo="Las divisiones">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.filaTabla}>
              <Celda texto="÷" cabecera estrecha />
              {Array.from({ length: columnas }, (_, i) => (
                <Celda key={i} texto={String(i + 1)} cabecera />
              ))}
            </View>
            {votos.map((c) => (
              <View key={c.id} style={styles.filaTabla}>
                <Celda texto={c.id} cabecera estrecha />
                {r.cocientes
                  .filter((q) => q.id === c.id && q.divisor <= columnas)
                  .map((q) => (
                    <Celda key={q.divisor} texto={fmt(q.valor)} elegido={q.elegido} />
                  ))}
                {r.excluidas.includes(c.id) && Array.from({ length: columnas }, (_, i) => <Celda key={i} texto="—" />)}
              </View>
            ))}
          </View>
        </ScrollView>
        <Texto tipo="pequeno" color="gris">
          Los votos de cada lista se dividen entre 1, 2, 3… En negro, los {escanos} cocientes más altos: cada uno es un
          escaño.{escanos > columnas ? ` La tabla enseña las primeras ${columnas} divisiones.` : ''}
        </Texto>
      </Seccion>

      <Bloque>
        <Etiqueta>De dónde sale</Etiqueta>
        <Texto tipo="pequeno">
          El ejemplo inicial (A–F, 8 escaños) es el que trae la propia ley: A obtiene 4, B 2, C 1 y D 1.
        </Texto>
        <Enlace href={urlArticulo(ART_163)}>{nombreArticulo(ART_163)}</Enlace>
      </Bloque>
      <Pulsable
        onPress={() => {
          setVotos(EJEMPLO);
          setEscanos(8);
          setBlancos(0);
        }}
        accessibilityRole="button"
        style={[styles.reset, { borderColor: t.linea }]}>
        <Texto tipo="pequenoFuerte">Volver al ejemplo de la ley</Texto>
      </Pulsable>
    </Pantalla>
  );
}

function Paso({ texto, onPress }: { texto: string; onPress: () => void }) {
  const t = useTheme();
  return (
    <Pulsable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={texto === '+' ? 'Más escaños' : 'Menos escaños'}
      style={[styles.paso, { backgroundColor: t.tinta }]}>
      <Texto tipo="subtitulo" color="papel">
        {texto}
      </Texto>
    </Pulsable>
  );
}

function Campo({ valor, onCambio }: { valor: number; onCambio: (texto: string) => void }) {
  const t = useTheme();
  return (
    <TextInput
      value={valor ? valor.toLocaleString('es-ES') : ''}
      onChangeText={onCambio}
      keyboardType="number-pad"
      placeholder="0"
      placeholderTextColor={t.grisClaro}
      style={[styles.campo, { borderColor: t.linea, color: t.tinta }]}
    />
  );
}

function Barra({ pct, etiqueta, hueca }: { pct: number; etiqueta: string; hueca?: boolean }) {
  const t = useTheme();
  return (
    <View style={styles.barraFila}>
      <View style={[styles.barra, { borderColor: hueca ? t.gris : t.linea }]}>
        <View
          style={{ width: `${Math.min(pct, 100)}%`, height: '100%', backgroundColor: hueca ? t.lineaSuave : t.tinta }}
        />
      </View>
      <Texto tipo="etiqueta" color="gris" style={styles.barraTexto}>
        {etiqueta}
      </Texto>
    </View>
  );
}

function Celda({
  texto,
  cabecera,
  estrecha,
  elegido,
}: {
  texto: string;
  cabecera?: boolean;
  estrecha?: boolean;
  elegido?: boolean;
}) {
  const t = useTheme();
  return (
    <View
      style={[
        styles.celda,
        estrecha && styles.celdaEstrecha,
        { borderColor: t.lineaSuave, backgroundColor: elegido ? t.tinta : 'transparent' },
      ]}>
      <Texto
        tipo={cabecera ? 'pequenoFuerte' : 'pequeno'}
        color={elegido ? 'papel' : cabecera ? 'tinta' : 'gris'}
        style={styles.cifra}>
        {texto}
      </Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: Spacing.two },
  controles: { flexDirection: 'row', gap: Spacing.three, flexWrap: 'wrap' },
  stepper: { flexDirection: 'row' },
  stepperValor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: Borde.grueso,
    borderBottomWidth: Borde.grueso,
  },
  paso: { width: 48, height: 52, alignItems: 'center', justifyContent: 'center' },
  campo: {
    borderWidth: Borde.grueso,
    height: 52,
    paddingHorizontal: Spacing.three,
    fontFamily: Familias.negrita,
    fontSize: 18,
  },
  listas: { gap: Spacing.three },
  lista: { gap: Spacing.two, paddingBottom: Spacing.three, borderBottomWidth: Borde.fino },
  listaCabeza: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  letra: { width: 44, height: 52, alignItems: 'center', justifyContent: 'center' },
  escanos: { width: 64, alignItems: 'center' },
  barraFila: { flexDirection: 'row', alignItems: 'center', gap: Spacing.two },
  barra: { flex: 1, height: 10, borderWidth: Borde.fino },
  barraTexto: { width: 124 },
  filaTabla: { flexDirection: 'row' },
  celda: {
    width: 84,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    borderWidth: 0.5,
    alignItems: 'flex-end',
  },
  celdaEstrecha: { width: 44, alignItems: 'center' },
  cifra: { fontVariant: ['tabular-nums'] },
  reset: { borderWidth: Borde.grueso, padding: Spacing.three, alignItems: 'center' },
});
