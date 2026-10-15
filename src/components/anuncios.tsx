import { StyleSheet, View } from 'react-native';

import { MarcaPartido } from './marca-partido';
import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import { type Anuncio, anunciosDe, revisionDe } from '@/data/anuncios';
import type { Partido } from '@/data/tipos';
import { useTheme } from '@/hooks/use-theme';
import { fechaLarga } from '@/services/fechas';

/** «13 de octubre», o cuándo se leyó si la página no lleva fecha. */
export function fechaDeAnuncio(a: Anuncio) {
  return a.sinFecha ? `Sin fecha en su web · leída el ${fechaLarga(a.fecha)}` : fechaLarga(a.fecha);
}

/** Qué se sabe de un partido cuando no tiene anuncios recogidos. */
export function sinAnuncios(partidoId: string) {
  const r = revisionDe(partidoId);
  if (!r) return 'Su web aún no se ha revisado.';
  if (r.bloqueada) return 'No se ha podido leer su web.';
  return `Sin medidas para el 29N en su web, revisada hasta el ${fechaLarga(r.hasta)}.`;
}

/** Una fila por partido: su anuncio más reciente o por qué no hay. Todas iguales. */
export function FilaAnuncio({ p }: { p: Partido }) {
  const t = useTheme();
  const [ultimo, ...resto] = anunciosDe(p.id);
  return (
    <View style={[styles.fila, { borderBottomColor: t.lineaSuave }]}>
      <View style={styles.marca}>
        <MarcaPartido id={p.id} />
      </View>
      <View style={styles.texto}>
        {ultimo ? (
          <>
            <Texto tipo="pequenoFuerte">{ultimo.titulo}</Texto>
            <Texto tipo="etiqueta" color="gris">
              {fechaDeAnuncio(ultimo)}
              {resto.length ? ` · y ${resto.length} más` : ''}
            </Texto>
          </>
        ) : (
          <Texto tipo="pequeno" color="gris">
            {sinAnuncios(p.id)}
          </Texto>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    gap: Spacing.three,
    paddingVertical: Spacing.two,
    borderBottomWidth: Borde.fino,
  },
  marca: { width: 84, paddingTop: 2 },
  texto: { flex: 1, gap: Spacing.half },
});
