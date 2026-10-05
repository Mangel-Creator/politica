import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { GrupoNoticias } from '@/components/grupo-noticias';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Nota, Pulsable, Segmentos } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { useNoticias } from '@/hooks/use-noticias';
import { useTheme } from '@/hooks/use-theme';
import { haceCuanto } from '@/services/fechas';
import { agrupar, Medios, mediosDistintos, MINIMO_MEDIOS, nombreMedio } from '@/services/noticias';

type Periodo = 'dia' | 'semana';
const HORA = 3600 * 1000;
const PERIODOS: Record<Periodo, number> = { dia: 24 * HORA, semana: 7 * 24 * HORA };

export default function Noticias() {
  const t = useTheme();
  const [periodo, setPeriodo] = useState<Periodo>('dia');
  const [verTodo, setVerTodo] = useState(false);
  const n = useNoticias();
  const titulares = n.titulares.filter((x) => x.fecha >= n.referencia - PERIODOS[periodo]);
  const grupos = agrupar(titulares, nombreMedio);
  const compartidas = grupos.filter((g) => g.medios.length > 1);
  const leidos = mediosDistintos(titulares);
  const suficientes = leidos >= MINIMO_MEDIOS;
  const visibles = !suficientes ? [] : verTodo ? grupos : compartidas.length ? compartidas : grupos.slice(0, 15);

  return (
    <Pantalla
      atras
      antetitulo="Repaso de noticias"
      titulo={periodo === 'dia' ? 'Últimas 24 horas' : 'Últimos 7 días'}
      entradilla="Titulares de varios medios, agrupados cuando cuentan lo mismo. Abre cada noticia para comparar cómo la titula cada uno.">
      <Segmentos<Periodo>
        opciones={[
          { id: 'dia', texto: 'Día' },
          { id: 'semana', texto: 'Semana' },
        ]}
        valor={periodo}
        onCambio={setPeriodo}
      />

      <View style={[styles.resumen, { borderColor: t.linea }]}>
        <Cifra valor={titulares.length} etiqueta="titulares" />
        <Cifra valor={compartidas.length} etiqueta="noticias en 2+ medios" borde />
        <Cifra valor={leidos} etiqueta={`de ${Medios.length} medios`} borde />
      </View>

      <View style={styles.estado}>
        <Etiqueta>
          {n.cargando ? 'Actualizando…' : n.actualizado ? `Actualizado ${haceCuanto(n.actualizado)}` : 'Sin conexión'}
        </Etiqueta>
        <Pulsable onPress={n.recargar} accessibilityRole="button" disabled={n.cargando}>
          <Texto tipo="pequenoFuerte" style={styles.subrayado}>
            Recargar
          </Texto>
        </Pulsable>
      </View>

      {!suficientes && !n.cargando && (
        <Nota>
          {process.env.EXPO_OS === 'web'
            ? 'En la versión web, el navegador no deja leer los titulares de la mayoría de periódicos, y enseñar solo los de uno o dos no sería equilibrado. En la app del móvil sí aparecen.'
            : `Solo se han podido leer ${leidos} medios: hacen falta al menos ${MINIMO_MEDIOS} para un repaso equilibrado.`}
        </Nota>
      )}
      {suficientes && n.fallidos.length > 0 && !n.cargando && (
        <Nota>No se pudo leer: {n.fallidos.map(nombreMedio).join(', ')}.</Nota>
      )}
      {periodo === 'semana' && (
        <Nota>
          Cada medio publica en su canal solo lo más reciente. La semana se completa con lo que la app guarda cada vez
          que la abres.
        </Nota>
      )}

      <View style={styles.lista}>
        {visibles.map((g) => (
          <GrupoNoticias key={g.titulares[0].enlace} grupo={g} />
        ))}
      </View>

      {!verTodo && grupos.length > visibles.length && (
        <Pulsable
          onPress={() => setVerTodo(true)}
          accessibilityRole="button"
          style={[styles.boton, { borderColor: t.linea }]}>
          <Texto tipo="pequenoFuerte">
            Ver también las que publica un solo medio ({grupos.length - visibles.length})
          </Texto>
        </Pulsable>
      )}

      <Texto tipo="pequeno" color="gris">
        Solo se muestra el titular y el enlace: el texto es de cada medio. El agrupado es automático y puede
        equivocarse; el orden depende de cuántos medios cuentan cada noticia, no de la app.
      </Texto>
    </Pantalla>
  );
}

function Cifra({ valor, etiqueta, borde }: { valor: number; etiqueta: string; borde?: boolean }) {
  const t = useTheme();
  return (
    <View style={[styles.cifra, borde && { borderLeftWidth: Borde.grueso, borderLeftColor: t.linea }]}>
      <Texto tipo="dato">{valor}</Texto>
      <Texto tipo="etiqueta" color="gris">
        {etiqueta}
      </Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  resumen: { flexDirection: 'row', borderWidth: Borde.grueso },
  cifra: { flex: 1, padding: Spacing.three, gap: Spacing.half },
  estado: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: -Spacing.three },
  subrayado: { textDecorationLine: 'underline' },
  lista: { gap: Spacing.two },
  boton: { borderWidth: Borde.grueso, padding: Spacing.three, alignItems: 'center' },
});
