import { StyleSheet, View } from 'react-native';

import { MarcaPartido } from './marca-partido';
import { Etiqueta, Ir, Pagina } from './piezas';
import { Texto } from './texto';
import { textoVoto } from './votacion';

import { Borde, Spacing } from '@/constants/theme';
import { votacion, votoDe, type Hecho, type VotoPartido } from '@/data/hechos';
import { buscarPartido } from '@/data/partidos';
import { useTheme } from '@/hooks/use-theme';

/** La promesa de un partido y, debajo, cómo votó en cada paso. */
export function PromesaYVoto({
  hecho,
  partidoId,
  conTitulo,
}: {
  hecho: Hecho;
  partidoId: string;
  conTitulo?: boolean;
}) {
  const t = useTheme();
  const promesa = hecho.promesas.find((p) => p.partidoId === partidoId);

  return (
    <View style={[styles.promesa, { borderLeftColor: t.linea }]}>
      {conTitulo ? (
        <Ir href={{ pathname: '/hecho/[id]', params: { id: hecho.id } }} style={styles.cabeza}>
          <Texto tipo="subtitulo" style={styles.flex}>
            {hecho.titulo}
          </Texto>
          <Texto tipo="subtitulo">→</Texto>
        </Ir>
      ) : (
        <View style={styles.cabeza}>
          <MarcaPartido id={partidoId} tipo="cuerpoFuerte" />
          {promesa && (
            <View style={[styles.postura, { borderColor: t.lineaSuave }]}>
              <Etiqueta>{promesa.postura === 'a-favor' ? 'A favor' : 'En contra'}</Etiqueta>
            </View>
          )}
        </View>
      )}
      {promesa ? (
        <View style={styles.texto}>
          {conTitulo && (
            <Etiqueta>{promesa.postura === 'a-favor' ? 'Su programa, a favor' : 'Su programa, en contra'}</Etiqueta>
          )}
          <Texto>«{promesa.texto}»</Texto>
          <Pagina n={promesa.pagina} />
        </View>
      ) : (
        <Texto tipo="pequeno" color="gris">
          {buscarPartido(partidoId)?.programas.length
            ? 'Sin promesa sobre esto en su programa del 23J.'
            : 'Sin programa del 23J en la app: solo su voto.'}
        </Texto>
      )}
      <View style={styles.votos}>
        {hecho.pasos.map((p, i) => {
          const voto = votoDe(votacion(p.votacion)!, partidoId);
          const lectura = leerVoto(voto, p.siEsAFavor);
          return (
            <View key={p.votacion} style={[styles.voto, { borderColor: t.lineaSuave }]}>
              <Texto tipo="etiqueta" color="gris">
                {i + 1}
              </Texto>
              <View>
                <Texto tipo="pequenoFuerte">{textoVoto(voto)}</Texto>
                {lectura && (
                  <Texto tipo="etiqueta" color="gris" style={styles.lectura}>
                    {lectura}
                  </Texto>
                )}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

/**
 * "a favor" o "en contra" de la medida del título, cuando el partido votó en bloque y se
 * sabe qué significaba el sí. Sin esa certeza, no se interpreta.
 */
function leerVoto(voto: VotoPartido | undefined, siEsAFavor: boolean | undefined) {
  if (!voto || siEsAFavor === undefined) return null;
  const presentes = [voto.si, voto.no, voto.abstencion].filter((n) => n > 0).length;
  if (presentes !== 1) return null;
  if (voto.abstencion) return null;
  return voto.si > 0 === siEsAFavor ? '= a favor' : '= en contra';
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  lectura: { fontSize: 9, letterSpacing: 0.6 },
  promesa: { borderLeftWidth: Borde.grueso, paddingLeft: Spacing.three, gap: Spacing.two },
  cabeza: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: Spacing.two },
  postura: { borderWidth: Borde.fino, paddingHorizontal: Spacing.two, paddingVertical: Spacing.half },
  texto: { gap: Spacing.one },
  votos: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.one },
  voto: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderWidth: Borde.fino,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
});
