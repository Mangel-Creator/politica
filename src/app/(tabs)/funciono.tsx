import { StyleSheet, View } from 'react-native';

import { MarcaPartido } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Ir, Nota } from '@/components/piezas';
import { Sentidos } from '@/components/sentido';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { Precedentes } from '@/data/precedentes';
import { buscarTema } from '@/data/temas';
import { useTheme } from '@/hooks/use-theme';

export default function Funciono() {
  const t = useTheme();

  return (
    <Pantalla
      antetitulo={`${Precedentes.length} ideas ya aplicadas`}
      titulo="¿Funcionó?"
      entradilla="Propuestas de hoy que ya se probaron aquí o fuera. Qué pasó, según estudios, organismos y verificadores de distinto tipo. La app no da veredicto: enseña quién dice qué.">
      <View style={styles.lista}>
        {Precedentes.map((pr, i) => {
          const tema = buscarTema(pr.temaId);
          const tipos = new Set(pr.evidencias.map((e) => e.tipo)).size;
          return (
            <Ir
              key={pr.id}
              href={{ pathname: '/precedente/[id]', params: { id: pr.id } }}
              style={[styles.tarjeta, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.cabeza}>
                <Etiqueta>
                  {tema?.glifo} {tema?.nombre}
                </Etiqueta>
                <Texto tipo="dato" color="grisClaro">
                  {String(i + 1).padStart(2, '0')}
                </Texto>
              </View>
              <Texto tipo="titulo">{pr.titulo}</Texto>
              <Texto color="gris">{pr.pregunta}</Texto>
              <View style={styles.posturas}>
                {pr.posturas.map((x) => (
                  <View key={x.partidoId} style={[styles.postura, { borderColor: t.lineaSuave }]}>
                    <Texto tipo="pequenoFuerte">{Sentidos[x.sentido].simbolo}</Texto>
                    <MarcaPartido id={x.partidoId} lado={9} />
                  </View>
                ))}
              </View>
              <View style={[styles.pie, { borderTopColor: t.lineaSuave }]}>
                <Etiqueta>
                  {pr.evidencias.length} fuentes · {tipos} tipos · {pr.casos.length}{' '}
                  {pr.casos.length === 1 ? 'caso' : 'casos'}
                </Etiqueta>
                <Texto tipo="subtitulo">→</Texto>
              </View>
            </Ir>
          );
        })}
      </View>
      <Nota>
        ▲ lo propone · ▼ lo rechaza · ◆ con matices, según el programa de cada partido en el 23J (con su página dentro
        de cada ficha).
      </Nota>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  lista: { gap: Spacing.three },
  tarjeta: { borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.two },
  cabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  posturas: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.one + Spacing.half, marginTop: Spacing.two },
  postura: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one + Spacing.half,
    borderWidth: Borde.fino,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: Borde.fino,
    paddingTop: Spacing.two,
    marginTop: Spacing.two,
  },
});
