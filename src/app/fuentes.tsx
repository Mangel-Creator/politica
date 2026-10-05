import { StyleSheet, View } from 'react-native';

import { Enlace } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { FuentesOficiales } from '@/data/fuentes';
import { Medios } from '@/services/noticias';
import { useTheme } from '@/hooks/use-theme';

const REGLAS = [
  ['Ningún dato sin fuente', 'Cada fecha, cifra o documento enlaza a su origen, con el día en que se consultó.'],
  [
    'Primero lo oficial',
    'BOE, Junta Electoral Central, Ministerio del Interior, Congreso y las webs de los partidos. Si un dato solo viene de un medio, se marca con borde a rayas.',
  ],
  [
    'Quién dice qué',
    'Cuando hay debate, se citan fuentes de distinto tipo (organismos, universidades, centros de análisis, verificadores, medios) y se dice de quién es cada conclusión. La app no da veredictos.',
  ],
  [
    'Programas intactos',
    'Los PDF son los originales. El resumen quita el relleno, no las medidas, y cada punto lleva su página para comprobarlo.',
  ],
  [
    'Mismo trato',
    'Orden alfabético y el mismo diseño para todos. El color de cada partido solo aparece en gráficos y siempre con sus siglas. La app no recomienda voto.',
  ],
  [
    'Noticias sin filtro',
    'Titulares de varios medios, sin etiquetarlos ideológicamente. Una noticia sube cuando la cuentan más medios, no porque la app la elija.',
  ],
] as const;

export default function PantallaFuentes() {
  const t = useTheme();

  return (
    <Pantalla
      atras
      antetitulo="Método"
      titulo="Fuentes y reglas"
      entradilla="De dónde sale cada dato y cómo comprobarlo tú.">
      <View>
        {REGLAS.map(([titulo, texto], i) => (
          <View key={titulo} style={[styles.regla, { borderTopColor: t.linea }]}>
            <Texto tipo="dato" style={styles.numero}>
              {i + 1}
            </Texto>
            <View style={styles.flex}>
              <Texto tipo="subtitulo">{titulo}</Texto>
              <Texto>{texto}</Texto>
            </View>
          </View>
        ))}
      </View>

      <Seccion titulo="Organismos oficiales">
        {FuentesOficiales.map((f) => (
          <View key={f.url} style={styles.organismo}>
            <Texto tipo="cuerpoFuerte">{f.nombre}</Texto>
            <Texto tipo="pequeno" color="gris">
              {f.para}
            </Texto>
            <Enlace href={f.url}>Abrir web</Enlace>
          </View>
        ))}
      </Seccion>

      <Seccion titulo={`Medios del repaso de noticias · ${Medios.length}`}>
        <Texto tipo="pequeno" color="gris">
          Secciones de política o España de cada uno, en orden alfabético.
        </Texto>
        <View style={styles.medios}>
          {Medios.map((m) => (
            <View key={m.id} style={[styles.medio, { borderColor: t.lineaSuave }]}>
              <Texto tipo="pequenoFuerte">{m.nombre}</Texto>
            </View>
          ))}
        </View>
      </Seccion>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: Spacing.one },
  regla: { flexDirection: 'row', gap: Spacing.three, borderTopWidth: Borde.grueso, paddingVertical: Spacing.three },
  numero: { width: 32 },
  organismo: { gap: Spacing.half },
  medios: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  medio: { borderWidth: Borde.fino, paddingHorizontal: Spacing.two, paddingVertical: Spacing.one },
});
