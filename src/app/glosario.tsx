import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Pantalla } from '@/components/pantalla';
import { Texto } from '@/components/texto';
import { Borde, Familias, Spacing } from '@/constants/theme';
import { Glosario } from '@/data/aprende';
import { useTheme } from '@/hooks/use-theme';

const normal = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function PantallaGlosario() {
  const t = useTheme();
  const [busca, setBusca] = useState('');
  const lista = [...Glosario]
    .sort((a, b) => a.termino.localeCompare(b.termino, 'es'))
    .filter((g) => normal(g.termino + ' ' + g.definicion).includes(normal(busca.trim())));

  return (
    <Pantalla atras antetitulo={`${Glosario.length} términos`} titulo="Glosario">
      <TextInput
        value={busca}
        onChangeText={setBusca}
        placeholder="Buscar…"
        placeholderTextColor={t.grisClaro}
        style={[styles.buscador, { borderColor: t.linea, color: t.tinta }]}
      />
      <View>
        {lista.map((g) => (
          <View key={g.termino} style={[styles.termino, { borderBottomColor: t.linea }]}>
            <Texto tipo="subtitulo">{g.termino}</Texto>
            <Texto>{g.definicion}</Texto>
          </View>
        ))}
        {!lista.length && <Texto color="gris">Nada con «{busca}».</Texto>}
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  buscador: {
    borderWidth: Borde.grueso,
    height: 52,
    paddingHorizontal: Spacing.three,
    fontFamily: Familias.seminegrita,
    fontSize: 17,
  },
  termino: { gap: Spacing.one, paddingVertical: Spacing.three, borderBottomWidth: Borde.grueso },
});
