import { StyleSheet, View } from 'react-native';

import { Enlace } from './enlaces';
import { MarcaPartido } from './marca-partido';
import { Etiqueta, Nota } from './piezas';
import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import type { Paso, VotacionDatos, VotoPartido } from '@/data/hechos';
import { useTheme } from '@/hooks/use-theme';
import { fechaLarga } from '@/services/fechas';

type Opcion = 'si' | 'no' | 'abstencion';
const COLUMNAS: { id: Opcion; texto: string }[] = [
  { id: 'si', texto: 'Sí' },
  { id: 'no', texto: 'No' },
  { id: 'abstencion', texto: 'Abstención' },
];
const TOTAL_ESCANOS = 350;

/** Sí, no y abstención en una barra de 350 escaños, con la mayoría necesaria marcada. */
export function BarraVotos({ v, mayoria }: { v: VotacionDatos; mayoria?: number }) {
  const t = useTheme();
  const pct = (n: number) => `${(n / TOTAL_ESCANOS) * 100}%` as const;
  return (
    <View style={[styles.barra, { borderColor: t.linea }]}>
      <View style={{ width: pct(v.totales.si), backgroundColor: t.tinta }} />
      <View style={{ width: pct(v.totales.abstencion), backgroundColor: t.grisClaro }} />
      <View style={{ width: pct(v.totales.no), backgroundColor: t.lineaSuave }} />
      {mayoria && (
        <View style={[styles.mayoria, { left: pct(mayoria), backgroundColor: t.tinta, borderColor: t.papel }]} />
      )}
    </View>
  );
}

/** Una votación del Pleno: resultado, qué significaba el sí y quién votó qué. */
export function TableroVotacion({ paso, v, numero }: { paso: Paso; v: VotacionDatos; numero: number }) {
  const t = useTheme();
  const aprobada = paso.resultado === 'aprobada';
  const columna = (op: Opcion) =>
    v.porPartido.filter((p) => p.partidoId !== 'otros' && p[op] > 0).map((p) => ({ id: p.partidoId, n: p[op] }));
  const otros = v.porPartido.find((p) => p.partidoId === 'otros');

  return (
    <View style={[styles.tablero, { borderColor: t.linea }]}>
      <View style={[styles.cabeza, { borderBottomColor: t.linea }]}>
        <View style={[styles.numero, { backgroundColor: t.tinta }]}>
          <Texto tipo="subtitulo" color="papel">
            {numero}
          </Texto>
        </View>
        <View style={styles.flex}>
          <Etiqueta>{fechaLarga(v.fecha, true)}</Etiqueta>
          <Texto tipo="cuerpoFuerte">{paso.que}</Texto>
        </View>
      </View>

      <View style={styles.cuerpo}>
        <View style={styles.marcador}>
          <View style={[styles.resultado, { backgroundColor: aprobada ? t.tinta : t.papel, borderColor: t.linea }]}>
            <Texto tipo="etiqueta" color={aprobada ? 'papel' : 'tinta'}>
              {aprobada ? 'Aprobada' : 'Rechazada'}
            </Texto>
          </View>
          <Texto tipo="dato">
            {v.totales.si}–{v.totales.no}
          </Texto>
          {v.totales.abstencion > 0 && (
            <Texto tipo="pequeno" color="gris">
              {v.totales.abstencion} abst.
            </Texto>
          )}
        </View>
        <BarraVotos v={v} mayoria={paso.mayoria?.necesaria} />
        <Texto tipo="pequeno" color="gris">
          {paso.siSignifica}
          {paso.mayoria ? ` ${paso.mayoria.texto}` : ''}
        </Texto>

        {v.porPartido.length > 0 ? (
          <View style={styles.columnas}>
            {COLUMNAS.map((c) => {
              const lista = columna(c.id);
              return (
                <View key={c.id} style={[styles.columna, { borderTopColor: t.linea }]}>
                  <Etiqueta color="tinta">{c.texto}</Etiqueta>
                  {lista.length ? (
                    lista.map((x) => (
                      <View key={x.id} style={styles.fila}>
                        <MarcaPartido id={x.id} lado={9} />
                        <Texto tipo="pequeno" color="gris">
                          {x.n}
                        </Texto>
                      </View>
                    ))
                  ) : (
                    <Texto tipo="pequeno" color="grisClaro">
                      —
                    </Texto>
                  )}
                </View>
              );
            })}
          </View>
        ) : (
          <Nota>El Congreso solo publica el total de esta votación, sin el voto de cada grupo.</Nota>
        )}

        {otros && v.otros && (
          <Texto tipo="pequeno" color="gris">
            Otros del Grupo Mixto ({v.otros.join('; ')}): {resumen(otros)}.
          </Texto>
        )}
        <Enlace href={v.url}>Datos oficiales del Congreso</Enlace>
      </View>
    </View>
  );
}

function resumen(p: VotoPartido) {
  return [
    p.si && `${p.si} sí`,
    p.no && `${p.no} no`,
    p.abstencion && `${p.abstencion} abst.`,
    p.noVota && `${p.noVota} no vota`,
  ]
    .filter(Boolean)
    .join(', ');
}

/** "SÍ", "NO", "ABST.", "NO VOTA" o "DIVIDIDO" para un partido en una votación. */
export function textoVoto(p: VotoPartido | undefined) {
  if (!p) return 'Sin desglose';
  const presentes = [p.si && 'sí', p.no && 'no', p.abstencion && 'abst.'].filter(Boolean) as string[];
  if (!presentes.length) return 'No votó';
  if (presentes.length > 1) return `Dividido (${resumen(p)})`;
  return presentes[0] === 'abst.' ? 'Abstención' : presentes[0] === 'sí' ? 'Sí' : 'No';
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: Spacing.one },
  tablero: { borderWidth: Borde.grueso },
  cabeza: { flexDirection: 'row', gap: Spacing.three, padding: Spacing.three, borderBottomWidth: Borde.fino },
  numero: { width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  cuerpo: { padding: Spacing.three, gap: Spacing.three },
  marcador: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three, flexWrap: 'wrap' },
  resultado: { borderWidth: Borde.grueso, paddingHorizontal: Spacing.two, paddingVertical: Spacing.one },
  barra: { height: 18, borderWidth: Borde.fino, flexDirection: 'row' },
  mayoria: {
    position: 'absolute',
    top: -5,
    bottom: -5,
    width: 3,
    marginLeft: -1.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  columnas: { flexDirection: 'row', gap: Spacing.three },
  columna: { flex: 1, gap: Spacing.two, borderTopWidth: Borde.grueso, paddingTop: Spacing.two },
  fila: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.one },
});
