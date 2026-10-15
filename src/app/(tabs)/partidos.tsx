import type { Href } from 'expo-router';
import { type LayoutChangeEvent, StyleSheet, type TextStyle, View } from 'react-native';

import { useLetraComun } from '@/components/letra-comun';
import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Ir, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Partidos } from '@/data/partidos';
import { resumenDe } from '@/data/programas';
import { useTheme } from '@/hooks/use-theme';

const apartados = [
  {
    href: '/historia',
    etiqueta: 'Desde 1879',
    titulo: 'Historia',
    texto: 'Etapas, líderes, escaños desde 1977 y casos judiciales de cada partido.',
  },
  {
    href: '/programas',
    etiqueta: 'Tema a tema',
    titulo: 'Programas',
    texto: 'Qué plantea cada uno y todas sus medidas, con la página del PDF.',
  },
] as const;

export default function PantallaPartidos() {
  const t = useTheme();
  // Mismo tamaño de siglas en todas las fichas, aunque alguna sea más larga.
  const siglas = useLetraComun(
    Partidos.map((p) => p.siglas),
    'titulo',
  );
  const titulos = useLetraComun(
    apartados.map((a) => a.titulo),
    'titulo',
  );

  return (
    <Pantalla
      antetitulo="12 partidos · orden alfabético"
      titulo="Partidos"
      entradilla="Las candidaturas que lograron escaño el 23J y Podemos, que se presentó dentro de Sumar. Mismo formato para todos.">
      <View style={styles.apartados}>
        {titulos.medidor}
        {apartados.map((a) => (
          <Apartado key={a.href} {...a} estilo={titulos.estilo} alMedir={titulos.alMedir(a.href)} />
        ))}
      </View>

      <View style={styles.rejilla}>
        {siglas.medidor}
        {Partidos.map((p) => {
          const programa = p.programas.find((x) => x.eleccion === '29N 2026') ? '29N' : resumenDe(p.id) ? '23J' : null;
          return (
            <Ir
              key={p.id}
              href={{ pathname: '/partido/[id]', params: { id: p.id } }}
              style={[styles.ficha, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.cabeza}>
                <Muestra color={p.color} lado={14} />
                <Texto tipo="etiqueta" color="gris">
                  {programa ? `Programa ${programa}` : 'Sin programa'}
                </Texto>
              </View>
              <Texto tipo="titulo" numberOfLines={1} style={siglas.estilo} onLayout={siglas.alMedir(p.id)}>
                {p.siglas}
              </Texto>
              <Texto tipo="pequeno" color="gris" numberOfLines={2} style={styles.nombre}>
                {p.nombre}
              </Texto>
              <View style={styles.pie}>
                <Texto tipo="dato">{p.escanos2023 ?? '—'}</Texto>
                <Etiqueta>{p.escanos2023 === null ? 'en Sumar' : 'escaños'}</Etiqueta>
              </View>
              <View style={[styles.barra, { backgroundColor: t.lineaSuave }]}>
                <View
                  style={{ width: `${((p.escanos2023 ?? 0) / 350) * 100}%`, backgroundColor: p.color, height: '100%' }}
                />
              </View>
            </Ir>
          );
        })}
      </View>
      <Nota>
        Escaños del 23 de julio de 2023, sobre 350. El color sirve para reconocer a cada partido en los gráficos; va
        siempre junto a sus siglas.
      </Nota>
    </Pantalla>
  );
}

/** Entrada grande a una sección, en negativo para que destaque sobre las fichas. */
function Apartado({
  href,
  etiqueta,
  titulo,
  texto,
  estilo,
  alMedir,
}: {
  href: Href;
  etiqueta: string;
  titulo: string;
  texto: string;
  estilo?: TextStyle;
  alMedir: (e: LayoutChangeEvent) => void;
}) {
  const t = useTheme();
  return (
    <Ir href={href} style={[styles.apartado, { backgroundColor: t.tinta, borderColor: t.linea }]}>
      <View style={styles.apartadoCabeza}>
        <Etiqueta color="papel">{etiqueta}</Etiqueta>
        <Texto tipo="titulo" color="papel">
          →
        </Texto>
      </View>
      <Texto tipo="titulo" color="papel" numberOfLines={1} style={estilo} onLayout={alMedir}>
        {titulo}
      </Texto>
      <Texto tipo="pequeno" color="papel">
        {texto}
      </Texto>
    </Ir>
  );
}

const styles = StyleSheet.create({
  apartados: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  apartado: { flexGrow: 1, flexBasis: 150, borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.two },
  apartadoCabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rejilla: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  ficha: { flexGrow: 1, flexBasis: 150, borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.one },
  cabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.two },
  nombre: { minHeight: 40 },
  pie: { flexDirection: 'row', alignItems: 'baseline', gap: Spacing.two, marginTop: Spacing.two },
  barra: { height: 6, marginTop: Spacing.one },
});
