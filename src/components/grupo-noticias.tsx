import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ExternalLink } from './external-link';
import { Pulsable } from './piezas';
import { Texto } from './texto';

import { Borde, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { haceCuanto } from '@/services/fechas';
import { nombreMedio, type Grupo } from '@/services/noticias';

/**
 * Una noticia y cuántos medios la cuentan. Al abrirla se ve el titular de cada medio
 * tal cual, con su enlace: así se comparan los enfoques sin que la app elija uno.
 */
export function GrupoNoticias({ grupo }: { grupo: Grupo }) {
  const t = useTheme();
  const [abierto, setAbierto] = useState(false);
  const [principal] = grupo.titulares;
  const varios = grupo.medios.length > 1;

  return (
    <View style={[styles.grupo, { borderColor: t.linea }]}>
      <Pulsable
        onPress={() => setAbierto(!abierto)}
        accessibilityRole="button"
        accessibilityState={{ expanded: abierto }}
        style={styles.cabeza}>
        <View style={[styles.contador, { backgroundColor: varios ? t.tinta : t.papel, borderColor: t.linea }]}>
          <Texto tipo="dato" color={varios ? 'papel' : 'tinta'}>
            {grupo.medios.length}
          </Texto>
          <Texto tipo="etiqueta" color={varios ? 'papel' : 'gris'} style={styles.contadorTexto}>
            {grupo.medios.length === 1 ? 'medio' : 'medios'}
          </Texto>
        </View>
        <View style={styles.cuerpo}>
          <Texto tipo="etiqueta" color="gris">
            {nombreMedio(principal.medio)} · {haceCuanto(principal.fecha)}
          </Texto>
          <Texto tipo="cuerpoFuerte">{principal.titulo}</Texto>
          {varios && (
            <Texto tipo="pequeno" color="gris" numberOfLines={abierto ? undefined : 1}>
              También:{' '}
              {grupo.medios
                .filter((m) => m !== principal.medio)
                .map(nombreMedio)
                .join(', ')}
            </Texto>
          )}
        </View>
        <Texto tipo="subtitulo">{abierto ? '−' : '+'}</Texto>
      </Pulsable>
      {abierto && (
        <View style={[styles.lista, { borderTopColor: t.lineaSuave }]}>
          {[...grupo.titulares]
            .sort((a, b) => nombreMedio(a.medio).localeCompare(nombreMedio(b.medio), 'es') || b.fecha - a.fecha)
            .map((x) => (
              <ExternalLink key={x.enlace} href={x.enlace as `https://${string}`} accessibilityRole="link">
                <View style={styles.titular}>
                  <Texto tipo="etiqueta">
                    {nombreMedio(x.medio)} · {haceCuanto(x.fecha)}
                  </Texto>
                  <Texto tipo="pequeno" style={styles.enlace}>
                    {x.titulo} ↗
                  </Texto>
                </View>
              </ExternalLink>
            ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  grupo: { borderWidth: Borde.grueso },
  cabeza: { flexDirection: 'row', gap: Spacing.three, padding: Spacing.three, alignItems: 'flex-start' },
  contador: { width: 56, paddingVertical: Spacing.two, alignItems: 'center', borderWidth: Borde.grueso },
  contadorTexto: { fontSize: 9, letterSpacing: 0.8 },
  cuerpo: { flex: 1, gap: Spacing.one },
  lista: { borderTopWidth: Borde.fino, padding: Spacing.three, gap: Spacing.three },
  titular: { gap: Spacing.half },
  enlace: { textDecorationLine: 'underline' },
});
