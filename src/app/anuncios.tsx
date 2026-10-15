import { StyleSheet, View } from 'react-native';

import { fechaDeAnuncio, sinAnuncios } from '@/components/anuncios';
import { ListaFuentes } from '@/components/enlaces';
import { MarcaPartido } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Fila, Nota } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { ANUNCIOS_DESDE, anunciosDe, revisionDe } from '@/data/anuncios';
import { Partidos } from '@/data/partidos';
import { useTheme } from '@/hooks/use-theme';
import { fechaLarga } from '@/services/fechas';

export default function PantallaAnuncios() {
  const t = useTheme();

  return (
    <Pantalla
      atras
      antetitulo="Campaña del 29N · webs de los partidos"
      titulo="Lo que anuncian"
      entradilla={`Medidas que cada partido ha publicado en su web desde el ${fechaLarga(ANUNCIOS_DESDE)}, día del anuncio de la convocatoria.`}>
      <Nota>
        No son los programas: ningún partido ha publicado aún el suyo para el 29N. Es lo que promete cada partido, no un
        hecho comprobado. Partidos en orden alfabético; se recogen solo medidas, no críticas a otros ni lemas.
      </Nota>

      {Partidos.map((p) => {
        const lista = anunciosDe(p.id);
        const revision = revisionDe(p.id);
        return (
          <View key={p.id} style={[styles.partido, { borderTopColor: t.linea }]}>
            <MarcaPartido id={p.id} tipo="subtitulo" lado={16} />
            {lista.map((a) => (
              <Bloque key={a.fuente.url} style={styles.anuncio}>
                <Etiqueta>{fechaDeAnuncio(a)}</Etiqueta>
                <Texto tipo="cuerpoFuerte">{a.titulo}</Texto>
                <View style={styles.medidas}>
                  {a.medidas.map((m) => (
                    <Texto key={m}>— {m}</Texto>
                  ))}
                </View>
                <ListaFuentes fuentes={[a.fuente]} />
              </Bloque>
            ))}
            {!lista.length && (
              <Texto tipo="pequeno" color="gris">
                {sinAnuncios(p.id)}
              </Texto>
            )}
            {revision?.nota && (
              <Texto tipo="pequeno" color="gris">
                {revision.nota}
              </Texto>
            )}
          </View>
        );
      })}

      <View>
        <Fila href="/comparar" titulo="Sus programas del 23J" subtitulo="Tema a tema, en Comparar" />
      </View>
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  partido: { borderTopWidth: Borde.grueso, paddingTop: Spacing.three, gap: Spacing.three },
  anuncio: { gap: Spacing.two },
  medidas: { gap: Spacing.two },
});
