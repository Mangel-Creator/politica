import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Nota, Pagina, Pulsable, Seccion } from '@/components/piezas';
import { ListaPropuestas } from '@/components/propuestas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { buscarPartido } from '@/data/partidos';
import { resumenDe } from '@/data/programas';
import { Temas } from '@/data/temas';
import type { TemaId } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';
import { fechaCorta } from '@/services/fechas';

export default function ProgramaDetallado() {
  const t = useTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [filtro, setFiltro] = useState<TemaId | null>(null);
  const p = buscarPartido(id);
  const r = p ? resumenDe(p.id) : undefined;
  if (!p || !r)
    return (
      <Pantalla atras titulo="Programa no disponible">
        {null}
      </Pantalla>
    );

  const pdf = p.programas.find((x) => x.eleccion === r.eleccion);
  const conMedidas = Temas.filter((tm) => r.temas[tm.id]?.length);
  const sinMedidas = Temas.filter((tm) => !r.temas[tm.id]?.length);
  const visibles = filtro ? conMedidas.filter((tm) => tm.id === filtro) : conMedidas;
  const total = conMedidas.reduce((s, tm) => s + r.temas[tm.id]!.length, 0);
  const maximo = Math.max(...conMedidas.map((tm) => r.temas[tm.id]!.length));

  return (
    <Pantalla atras antetitulo={`Programa ${r.eleccion} · ${p.nombre}`}>
      <View style={styles.cabecera}>
        <View style={styles.siglas}>
          <Muestra color={p.color} lado={30} />
          <Texto tipo="display" accessibilityRole="header" style={styles.flex}>
            {p.siglas}
          </Texto>
        </View>
        <View style={styles.cifras}>
          <Texto tipo="gigante">{total}</Texto>
          <View style={styles.flex}>
            <Etiqueta>medidas en {conMedidas.length} temas</Etiqueta>
            {pdf && (
              <Texto tipo="pequeno" color="gris">
                {`${pdf.tipo}, ${pdf.paginas} páginas, fechado el ${fechaCorta(pdf.fechaDocumento)}.`}
              </Texto>
            )}
          </View>
        </View>
      </View>

      <Nota>
        Es lo que promete el partido, no un hecho comprobado. Cada punto lleva la página del PDF oficial para leerlo
        entero.{r.nota ? `\n\n${r.nota}` : ''}
      </Nota>

      <Seccion titulo="Lo que más destaca">
        {r.ideasClave.map((idea, i) => (
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

      <Seccion
        titulo="Mapa del programa"
        extra={
          filtro ? (
            <Pulsable onPress={() => setFiltro(null)} accessibilityRole="button">
              <Texto tipo="etiqueta" style={styles.subrayado}>
                Ver todos
              </Texto>
            </Pulsable>
          ) : undefined
        }>
        <Texto tipo="pequeno" color="gris">
          Cuántas medidas dedica a cada tema. Toca uno para ver solo ese.
        </Texto>
        <View style={styles.mapa}>
          {conMedidas.map((tm) => {
            const n = r.temas[tm.id]!.length;
            const activo = filtro === tm.id;
            return (
              <Pulsable
                key={tm.id}
                onPress={() => setFiltro(activo ? null : tm.id)}
                accessibilityRole="button"
                accessibilityState={{ selected: activo }}
                accessibilityLabel={`${tm.nombre}: ${n} medidas`}
                style={[styles.celda, { borderColor: t.linea, backgroundColor: activo ? t.tinta : t.papel }]}>
                <View style={styles.celdaCabeza}>
                  <Texto tipo="subtitulo" color={activo ? 'papel' : 'tinta'}>
                    {tm.glifo}
                  </Texto>
                  <Texto tipo="dato" color={activo ? 'papel' : 'tinta'}>
                    {n}
                  </Texto>
                </View>
                <Texto tipo="etiqueta" color={activo ? 'papel' : 'gris'} numberOfLines={2}>
                  {tm.nombre}
                </Texto>
                <View style={[styles.celdaPista, { backgroundColor: activo ? t.gris : t.lineaSuave }]}>
                  <View
                    style={{
                      width: `${(n / maximo) * 100}%`,
                      height: '100%',
                      backgroundColor: activo ? t.papel : t.tinta,
                    }}
                  />
                </View>
              </Pulsable>
            );
          })}
        </View>
        {sinMedidas.length > 0 && (
          <Texto tipo="pequeno" color="gris">
            {`Sin medidas concretas en: ${sinMedidas.map((tm) => tm.nombre.toLowerCase()).join(', ')}.`}
          </Texto>
        )}
      </Seccion>

      {visibles.map((tm) => {
        const enfoque = r.enfoques?.[tm.id];
        const lista = r.temas[tm.id]!;
        return (
          <Seccion key={tm.id} titulo={`${tm.glifo}  ${tm.nombre} · ${lista.length}`}>
            <Texto tipo="pequeno" color="gris">
              {tm.pregunta}
            </Texto>
            {enfoque && (
              <Bloque>
                <Etiqueta>Qué plantea</Etiqueta>
                <Texto tipo="cuerpoFuerte">{enfoque.texto}</Texto>
                <Pagina n={enfoque.pagina} />
              </Bloque>
            )}
            <ListaPropuestas propuestas={lista} />
          </Seccion>
        );
      })}

      {pdf && (
        <Seccion titulo="Documento completo">
          <Enlace href={pdf.urlOficial} fuerte>
            {`PDF oficial · ${pdf.paginas} páginas`}
          </Enlace>
          {pdf.urlArchivo && <Enlace href={pdf.urlArchivo}>Copia en Internet Archive</Enlace>}
        </Seccion>
      )}

      <View>
        <Fila href={{ pathname: '/historia/[id]', params: { id: p.id } }} titulo={`Historia de ${p.siglas}`} />
        <Fila href={{ pathname: '/partido/[id]', params: { id: p.id } }} titulo={`Ficha de ${p.siglas}`} />
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cabecera: { gap: Spacing.three },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  cifras: { flexDirection: 'row', alignItems: 'flex-end', gap: Spacing.three },
  idea: { flexDirection: 'row', gap: Spacing.three, paddingBottom: Spacing.three, borderBottomWidth: Borde.fino },
  ideaNumero: { width: 44 },
  subrayado: { textDecorationLine: 'underline' },
  mapa: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  celda: { flexGrow: 1, flexBasis: 140, borderWidth: Borde.grueso, padding: Spacing.two, gap: Spacing.one },
  celdaCabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  celdaPista: { height: 4 },
});
