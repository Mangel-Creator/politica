import * as Haptics from 'expo-haptics';
import { Link, type Href } from 'expo-router';
import { type ReactNode } from 'react';
import { Pressable, type PressableProps, StyleSheet, View, type ViewProps } from 'react-native';

import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Vibración corta al tocar, solo en el móvil. */
export function toque() {
  if (process.env.EXPO_OS !== 'web') Haptics.selectionAsync().catch(() => {});
}

/** Pressable que se aclara al pulsar y vibra un poco. */
export function Pulsable({ onPress, style, ...rest }: Omit<PressableProps, 'style'> & { style?: ViewProps['style'] }) {
  return (
    <Pressable
      {...rest}
      onPress={(e) => {
        toque();
        onPress?.(e);
      }}
      style={({ pressed }) => [style, pressed && styles.pulsado]}
    />
  );
}

/**
 * Enlace interno con aspecto libre. Link pasa sus props al hijo y no admite estilos en
 * lista, así que aquí se aplanan.
 */
export function Ir({
  href,
  style,
  ...rest
}: Omit<PressableProps, 'style'> & { href: Href; style?: ViewProps['style'] }) {
  return (
    <Link href={href} asChild>
      <Pulsable accessibilityRole="link" {...rest} style={StyleSheet.flatten(style)} />
    </Link>
  );
}

type BloqueProps = ViewProps & {
  /** Fondo de tinta y texto de papel. Quien lo use pone `color="papel"` en sus textos. */
  invertido?: boolean;
  /** Borde a rayas: dato pendiente o aviso. */
  discontinuo?: boolean;
  /** Borde fino y gris, para lo secundario. */
  suave?: boolean;
};

/** Caja con borde grueso de papeleta. */
export function Bloque({ invertido, discontinuo, suave, style, ...rest }: BloqueProps) {
  const t = useTheme();
  return (
    <View
      style={[
        styles.bloque,
        {
          borderColor: suave ? t.lineaSuave : t.linea,
          borderWidth: suave ? Borde.fino : Borde.grueso,
          borderStyle: discontinuo ? 'dashed' : 'solid',
          backgroundColor: invertido ? t.tinta : t.papel,
        },
        style,
      ]}
      {...rest}
    />
  );
}

/** Rótulo pequeño en mayúsculas. */
export function Etiqueta({ children, color = 'gris' }: { children: ReactNode; color?: 'gris' | 'tinta' | 'papel' }) {
  return (
    <Texto tipo="etiqueta" color={color}>
      {children}
    </Texto>
  );
}

/** Sección con raya gruesa encima y rótulo. */
export function Seccion({ titulo, extra, children }: { titulo: string; extra?: ReactNode; children: ReactNode }) {
  const t = useTheme();
  return (
    <View style={styles.seccion}>
      <View style={[styles.seccionCabeza, { borderTopColor: t.linea }]}>
        <Texto tipo="etiqueta" accessibilityRole="header">
          {titulo}
        </Texto>
        {extra}
      </View>
      {children}
    </View>
  );
}

/** Aviso con borde a rayas. */
export function Nota({ children }: { children: ReactNode }) {
  return (
    <Bloque discontinuo style={styles.nota}>
      <Texto tipo="pequeno" color="gris">
        {children}
      </Texto>
    </Bloque>
  );
}

type ChipProps = { texto: string; activo?: boolean; onPress: () => void; antes?: ReactNode };

/** Botón de filtro. Activo = invertido. */
export function Chip({ texto, activo, onPress, antes }: ChipProps) {
  const t = useTheme();
  return (
    <Pulsable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: !!activo }}
      style={[styles.chip, { borderColor: t.linea, backgroundColor: activo ? t.tinta : t.papel }]}>
      {antes}
      <Texto tipo="pequenoFuerte" color={activo ? 'papel' : 'tinta'}>
        {texto}
      </Texto>
    </Pulsable>
  );
}

/** Selector de opciones excluyentes en una fila de casillas. */
export function Segmentos<T extends string>({
  opciones,
  valor,
  onCambio,
}: {
  opciones: { id: T; texto: string }[];
  valor: T;
  onCambio: (id: T) => void;
}) {
  const t = useTheme();
  return (
    <View style={[styles.segmentos, { borderColor: t.linea }]} accessibilityRole="tablist">
      {opciones.map((o, i) => {
        const activo = o.id === valor;
        return (
          <Pulsable
            key={o.id}
            onPress={() => onCambio(o.id)}
            accessibilityRole="tab"
            accessibilityState={{ selected: activo }}
            style={[
              styles.segmento,
              {
                backgroundColor: activo ? t.tinta : t.papel,
                borderLeftColor: t.linea,
                borderLeftWidth: i ? Borde.grueso : 0,
              },
            ]}>
            <Texto tipo="etiqueta" color={activo ? 'papel' : 'tinta'} numberOfLines={1} style={styles.segmentoTexto}>
              {o.texto}
            </Texto>
          </Pulsable>
        );
      })}
    </View>
  );
}

/** Fila que lleva a otra pantalla: título, subtítulo y flecha. */
export function Fila({
  href,
  titulo,
  subtitulo,
  antes,
}: {
  href: Href;
  titulo: string;
  subtitulo?: string;
  antes?: ReactNode;
}) {
  const t = useTheme();
  return (
    <Ir href={href} style={[styles.fila, { borderBottomColor: t.linea }]}>
      {antes}
      <View style={styles.filaTexto}>
        <Texto tipo="cuerpoFuerte">{titulo}</Texto>
        {subtitulo && (
          <Texto tipo="pequeno" color="gris">
            {subtitulo}
          </Texto>
        )}
      </View>
      <Texto tipo="subtitulo">→</Texto>
    </Ir>
  );
}

/** Casilla grande para accesos: rótulo arriba, título abajo. */
export function Acceso({
  href,
  etiqueta,
  titulo,
  simbolo,
}: {
  href: Href;
  etiqueta: string;
  titulo: string;
  simbolo: string;
}) {
  const t = useTheme();
  return (
    <Ir href={href} style={[styles.acceso, { borderColor: t.linea, backgroundColor: t.papel }]}>
      <View style={styles.accesoCabeza}>
        <Etiqueta>{etiqueta}</Etiqueta>
        <Texto tipo="subtitulo">{simbolo}</Texto>
      </View>
      <Texto tipo="subtitulo">{titulo}</Texto>
    </Ir>
  );
}

/** Página del PDF, en una casilla pequeña. */
export function Pagina({ n }: { n: number }) {
  const t = useTheme();
  return (
    <View style={[styles.pagina, { borderColor: t.lineaSuave }]}>
      <Texto tipo="etiqueta" color="gris">
        pág. {n}
      </Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  pulsado: { opacity: 0.6 },
  bloque: { padding: Spacing.three, gap: Spacing.two },
  seccion: { gap: Spacing.three },
  seccionCabeza: {
    borderTopWidth: Borde.grueso,
    paddingTop: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  nota: { paddingVertical: Spacing.two + Spacing.one },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderWidth: Borde.grueso,
    paddingHorizontal: Spacing.three - Spacing.one,
    paddingVertical: Spacing.two,
  },
  segmentos: { flexDirection: 'row', borderWidth: Borde.grueso },
  segmentoTexto: { letterSpacing: 0.6 },
  segmento: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.two + Spacing.one,
    paddingHorizontal: Spacing.one,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    borderBottomWidth: Borde.grueso,
  },
  filaTexto: { flex: 1, gap: Spacing.half },
  acceso: {
    flexGrow: 1,
    flexBasis: 150,
    minHeight: 112,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  accesoCabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  pagina: {
    borderWidth: Borde.fino,
    paddingHorizontal: Spacing.one + Spacing.half,
    paddingVertical: Spacing.half,
    alignSelf: 'flex-start',
  },
});
