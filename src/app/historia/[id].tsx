import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { ListaFuentes } from '@/components/enlaces';
import { GraficoEscanos } from '@/components/grafico-escanos';
import { LineaLideres } from '@/components/linea-lideres';
import { Muestra } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Nota, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { CONSULTA_HISTORIAS, nombreEleccion, type Capitulo } from '@/data/historia-detallada';
import { historiaDe } from '@/data/historias';
import { historiaDetalladaDe } from '@/data/historias/index';
import { buscarPartido, Partidos } from '@/data/partidos';
import { resumenDe } from '@/data/programas';
import { Trayectorias } from '@/data/trayectorias';
import { useTheme } from '@/hooks/use-theme';
import { fechaLarga } from '@/services/fechas';

/** Capítulos que no son una etapa sino el repaso de casos ante los tribunales. */
const esJudicial = (c: Capitulo) => /judicial|Financiación|^Caso /i.test(c.titulo);

/** Para la web estática: una página por cada historia (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Partidos.map((x) => ({ id: x.id }));
}

export default function HistoriaPartido() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const p = buscarPartido(id);
  const h = historiaDetalladaDe(id);
  if (!p || !h)
    return (
      <Pantalla atras titulo="Historia no encontrada">
        {null}
      </Pantalla>
    );

  const breve = historiaDe(p.id);
  const etapas = h.capitulos.filter((c) => !esJudicial(c));
  const judicial = h.capitulos.filter(esJudicial);
  const trayectoria = Trayectorias[p.id] ?? [];

  return (
    <Pantalla atras antetitulo={`Historia · ${p.nombre}`}>
      <View style={styles.cabecera}>
        <View style={styles.siglas}>
          <Muestra color={p.color} lado={30} />
          <Texto tipo="display" accessibilityRole="header" style={styles.flex}>
            {p.siglas}
          </Texto>
        </View>
        {breve && (
          <View style={styles.fundacion}>
            <Etiqueta>Fundado en</Etiqueta>
            <Texto tipo="gigante">{breve.fundacion}</Texto>
          </View>
        )}
        <Texto tipo="cuerpoFuerte">{h.entradilla}</Texto>
      </View>

      {breve && (
        <Bloque>
          <Etiqueta>Ideología · según la ficha de Wikipedia</Etiqueta>
          <Texto tipo="cuerpoFuerte">{breve.ideologia}</Texto>
          <Etiqueta>Posición · según la misma ficha</Etiqueta>
          <Texto tipo="cuerpoFuerte">{breve.posicion}</Texto>
        </Bloque>
      )}

      <Seccion titulo="Escaños en el Congreso · 1977–2023">
        <GraficoEscanos trayectoria={trayectoria} color={p.color} />
        {h.notaTrayectoria && (
          <Texto tipo="pequeno" color="gris">
            {h.notaTrayectoria}
          </Texto>
        )}
        <Texto tipo="pequeno" color="gris">
          Resultados oficiales del Ministerio del Interior. Siglas de cada año:{' '}
          {trayectoria
            .map((x) => `${nombreEleccion(x.eleccion)} ${x.candidaturas.map((c) => c.siglas).join(' + ')}`)
            .join(' · ')}
          .
        </Texto>
      </Seccion>

      <Seccion titulo={`Por etapas · ${etapas.length}`}>
        <View style={styles.capitulos}>
          {etapas.map((c, i) => (
            <CapituloVista key={c.titulo} c={c} n={i + 1} />
          ))}
        </View>
      </Seccion>

      <Seccion titulo="Quién lo ha dirigido">
        <LineaLideres lideres={h.lideres} />
      </Seccion>

      {judicial.length > 0 && (
        <Seccion titulo="Ante los tribunales">
          <Texto tipo="pequeno" color="gris">
            Casos con sentencia o de especial relevancia, con su desenlace completo: recursos, indultos, anulaciones o
            si sigue pendiente.
          </Texto>
          {judicial.flatMap((c) =>
            c.parrafos.map((texto, i) => (
              <CasoJudicial
                key={texto}
                texto={texto}
                rotulo={i === 0 && /^Caso /.test(c.titulo) ? c.titulo : undefined}
              />
            )),
          )}
        </Seccion>
      )}

      <Seccion titulo="Fuentes">
        <Texto tipo="pequeno" color="gris">
          Los hechos delicados se contrastan con al menos una segunda fuente. La app no valora: cuenta qué pasó y qué
          dice cada parte.
        </Texto>
        <ListaFuentes fuentes={h.fuentes} />
      </Seccion>

      <View>
        {resumenDe(p.id) && (
          <Fila href={{ pathname: '/programa/[id]', params: { id: p.id } }} titulo="Su programa, en detalle" />
        )}
        <Fila href={{ pathname: '/partido/[id]', params: { id: p.id } }} titulo={`Ficha de ${p.siglas}`} />
      </View>

      <Nota>{`Consultado el ${fechaLarga(CONSULTA_HISTORIAS, true)}. Si algo cambia antes del 29N, se actualizará con su fuente.`}</Nota>
    </Pantalla>
  );
}

function CapituloVista({ c, n }: { c: Capitulo; n: number }) {
  const t = useTheme();
  return (
    <View style={styles.capitulo}>
      <View style={styles.capituloCabeza}>
        <Texto tipo="dato" style={styles.numero}>
          {String(n).padStart(2, '0')}
        </Texto>
        <View style={styles.flex}>
          <Etiqueta>{c.periodo}</Etiqueta>
          <Texto tipo="subtitulo">{c.titulo}</Texto>
        </View>
      </View>
      <View style={[styles.cuerpo, { borderLeftColor: t.linea }]}>
        {c.parrafos.map((x) => (
          <Texto key={x}>{x}</Texto>
        ))}
      </View>
    </View>
  );
}

/** Un párrafo de casos judiciales. Si empieza por «Nombre del caso: …», el nombre va de rótulo. */
function CasoJudicial({ texto, rotulo }: { texto: string; rotulo?: string }) {
  const separador = texto.indexOf(': ');
  const prefijo = separador > 0 && separador < 45 ? texto.slice(0, separador) : null;
  const cuerpo = prefijo ? texto.slice(separador + 2).replace(/^./, (l) => l.toUpperCase()) : texto;
  return (
    <Bloque discontinuo>
      {(prefijo ?? rotulo) && <Etiqueta color="tinta">{prefijo ?? rotulo}</Etiqueta>}
      <Texto>{cuerpo}</Texto>
    </Bloque>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  cabecera: { gap: Spacing.three },
  siglas: { flexDirection: 'row', alignItems: 'center', gap: Spacing.three },
  fundacion: { gap: Spacing.one },
  capitulos: { gap: Spacing.five },
  capitulo: { gap: Spacing.three },
  capituloCabeza: { flexDirection: 'row', gap: Spacing.three, alignItems: 'flex-start' },
  numero: { width: 44 },
  cuerpo: { gap: Spacing.three, borderLeftWidth: Borde.grueso, marginLeft: 6, paddingLeft: Spacing.three },
});
