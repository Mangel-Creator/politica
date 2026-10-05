import { StyleSheet } from 'react-native';

import { Enlace } from '@/components/lista-fuentes';
import { Pantalla } from '@/components/pantalla';
import { Seccion, Tarjeta } from '@/components/tarjeta';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { FuentesOficiales } from '@/data/fuentes';

export default function PantallaFuentes() {
  return (
    <Pantalla titulo="Fuentes" entradilla="De dónde sale cada dato y cómo comprobarlo tú.">
      <Seccion titulo="Nuestras reglas">
        <Tarjeta style={styles.reglas}>
          <Regla texto="Ningún dato sin fuente. Cada fecha, cifra o documento enlaza a su origen." />
          <Regla texto="Primero, fuentes oficiales: BOE, Junta Electoral Central, Ministerio del Interior, Congreso y webs de los partidos." />
          <Regla texto="Si un dato solo viene de un medio, se marca como pendiente de confirmar." />
          <Regla texto="Los programas son los PDF originales, sin resumir ni retocar. Su huella SHA-256 permite comprobar que no han cambiado." />
          <Regla texto="Los partidos aparecen en orden alfabético y con el mismo diseño. La app no recomienda voto." />
        </Tarjeta>
      </Seccion>

      <Seccion titulo="Organismos oficiales">
        {FuentesOficiales.map((f) => (
          <Tarjeta key={f.url}>
            <ThemedText type="smallBold">{f.nombre}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {f.para}
            </ThemedText>
            <Enlace href={f.url}>Abrir web</Enlace>
          </Tarjeta>
        ))}
      </Seccion>
    </Pantalla>
  );
}

function Regla({ texto }: { texto: string }) {
  return <ThemedText type="small">• {texto}</ThemedText>;
}

const styles = StyleSheet.create({
  reglas: {
    gap: Spacing.two,
  },
});
