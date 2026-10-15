import { useCallback, useState } from 'react';
import { type LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { Texto } from './texto';

import { Tipos, type TipoTexto } from '@/constants/theme';

/**
 * Un mismo tamaño de letra para un grupo de textos que tienen que caber en una línea
 * (siglas en fichas, títulos de casillas). Se mide el más largo y, si no cabe en la
 * casilla más estrecha, se reduce la letra de todos por igual: nadie sale más pequeño
 * que los demás. `adjustsFontSizeToFit` no sirve: no funciona en la web y en el móvil
 * reduce cada texto por su cuenta.
 *
 * Uso: pon `medidor` dentro de la vista que contiene las casillas, `alMedir(clave)` en
 * el `onLayout` de cada texto y `estilo` en su `style`.
 */
export function useLetraComun(textos: string[], tipo: TipoTexto) {
  const [natural, setNatural] = useState<Record<string, number>>({});
  const [anchos, setAnchos] = useState<Record<string, number>>({});

  const alMedir = useCallback(
    (clave: string) => (e: LayoutChangeEvent) => {
      const w = e.nativeEvent.layout.width;
      setAnchos((a) => (a[clave] === w ? a : { ...a, [clave]: w }));
    },
    [],
  );

  const largo = Math.max(0, ...Object.values(natural));
  const hueco = Math.min(...Object.values(anchos));
  const base = Tipos[tipo];
  const escala = largo && Number.isFinite(hueco) ? Math.min(1, hueco / largo) : 1;
  const estilo =
    escala < 1
      ? { fontSize: Math.floor(base.fontSize * escala), lineHeight: Math.ceil(base.lineHeight * escala) }
      : undefined;

  const medidor = (
    <View style={styles.oculto} pointerEvents="none" aria-hidden importantForAccessibility="no-hide-descendants">
      <View style={styles.lienzo}>
        {textos.map((x) => (
          <Texto
            key={x}
            tipo={tipo}
            numberOfLines={1}
            onLayout={(e) => {
              const w = Math.ceil(e.nativeEvent.layout.width);
              setNatural((n) => (n[x] === w ? n : { ...n, [x]: w }));
            }}>
            {x}
          </Texto>
        ))}
      </View>
    </View>
  );

  return { estilo, alMedir, medidor };
}

const styles = StyleSheet.create({
  // Fuera de la vista y sin ocupar sitio; el lienzo ancho deja que cada texto mida lo que mide.
  oculto: { position: 'absolute', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden', opacity: 0 },
  lienzo: { width: 2000, alignItems: 'flex-start' },
});
