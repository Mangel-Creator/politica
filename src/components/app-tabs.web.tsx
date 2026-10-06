import { TabList, TabSlot, TabTrigger, Tabs, type TabListProps, type TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Borde, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const PESTANAS = [
  { name: 'index', href: '/', texto: 'Hoy', simbolo: '◉' },
  { name: 'partidos', href: '/partidos', texto: 'Partidos', simbolo: '▦' },
  { name: 'comparar', href: '/comparar', texto: 'Comparar', simbolo: '⇆' },
  { name: 'hechos', href: '/hechos', texto: 'Hechos', simbolo: '✓' },
  { name: 'aprende', href: '/aprende', texto: 'Aprende', simbolo: '✎' },
] as const;

/** En la web, la misma barra de abajo, dibujada como una fila de casillas. */
export default function AppTabs() {
  return (
    <Tabs style={styles.raiz}>
      <TabSlot style={styles.raiz} />
      <TabList asChild>
        <Barra>
          {PESTANAS.map((p) => (
            <TabTrigger key={p.name} name={p.name} href={p.href} asChild>
              <Boton simbolo={p.simbolo}>{p.texto}</Boton>
            </TabTrigger>
          ))}
        </Barra>
      </TabList>
    </Tabs>
  );
}

function Barra(props: TabListProps) {
  const t = useTheme();
  return (
    <View {...props} style={[styles.barra, { backgroundColor: t.papel, borderTopColor: t.linea }]}>
      <View style={styles.fila}>{props.children}</View>
    </View>
  );
}

function Boton({ children, isFocused, simbolo, ...props }: TabTriggerSlotProps & { simbolo: string }) {
  const t = useTheme();
  return (
    <Pressable {...props} style={[styles.boton, { backgroundColor: isFocused ? t.tinta : t.papel }]}>
      <Texto tipo="subtitulo" color={isFocused ? 'papel' : 'tinta'}>
        {simbolo}
      </Texto>
      <Texto tipo="etiqueta" color={isFocused ? 'papel' : 'gris'} numberOfLines={1} style={styles.textoBoton}>
        {children}
      </Texto>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  raiz: { flex: 1 },
  barra: { borderTopWidth: Borde.grueso, alignItems: 'center' },
  fila: { flexDirection: 'row', width: '100%', maxWidth: MaxContentWidth },
  boton: {
    flex: 1,
    alignItems: 'center',
    gap: Spacing.half,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.two + Spacing.one,
  },
  textoBoton: { fontSize: 10, letterSpacing: 0.6 },
});
