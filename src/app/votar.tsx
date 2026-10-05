import { StyleSheet, View } from 'react-native';

import { Enlace, ListaFuentes } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Nota, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { Borde, Spacing } from '@/constants/theme';
import { nombreArticulo, urlArticulo } from '@/data/aprende';
import { Calendario } from '@/data/calendario';
import { Fuentes, FuentesOficiales } from '@/data/fuentes';
import { useTheme } from '@/hooks/use-theme';
import { diaSemana, fechaLarga } from '@/services/fechas';

const fecha = (id: string) => Calendario.find((f) => f.id === id)!;
const ART_96 = { norma: 'LOREG', numero: '96' } as const;
const ART_166 = { norma: 'LOREG', numero: '166' } as const;
const ART_172 = { norma: 'LOREG', numero: '172' } as const;

export default function PantallaVotar() {
  const t = useTheme();
  const solicitud = fecha('solicitud-correo');
  const deposito = fecha('deposito-correo');
  const votacion = fecha('votacion');
  const correos = FuentesOficiales.find((f) => f.url === Fuentes.correosVoto.url)!;
  const censo = FuentesOficiales.find((f) => f.nombre.includes('Censo'))!;

  return (
    <Pantalla atras antetitulo="Guía práctica" titulo="Cómo votar">
      <Seccion titulo="Dos papeletas">
        <View style={styles.papeletas}>
          <View style={[styles.papeleta, { borderColor: t.linea }]}>
            <Etiqueta>Congreso</Etiqueta>
            <Texto tipo="subtitulo">Una lista</Texto>
            <Texto tipo="pequeno">
              Lista cerrada: eliges una candidatura entera. Tachar, añadir o reordenar nombres anula el voto.
            </Texto>
          </View>
          <View style={[styles.papeleta, { borderColor: t.linea, borderStyle: 'dashed' }]}>
            <Etiqueta>Senado</Etiqueta>
            <Texto tipo="subtitulo">Nombres sueltos</Texto>
            <Texto tipo="pequeno">
              Una sola papeleta con todos los candidatos: marcas personas, de la candidatura que quieras. Hasta 3 en las
              provincias; menos en las islas, Ceuta y Melilla.
            </Texto>
          </View>
        </View>
        <Enlace href={urlArticulo(ART_166)}>{nombreArticulo(ART_166)}</Enlace>
        <Enlace href={urlArticulo(ART_172)}>{nombreArticulo(ART_172)}</Enlace>
      </Seccion>

      <Seccion titulo="Blanco y nulo no son lo mismo">
        <View style={styles.papeletas}>
          <Bloque style={styles.mitad}>
            <Texto tipo="subtitulo">En blanco</Texto>
            <Texto tipo="pequeno">
              Sobre sin papeleta (en el Senado, también la papeleta sin ninguna marca). Es válido: cuenta en el total
              sobre el que se calcula el 3 %.
            </Texto>
          </Bloque>
          <Bloque discontinuo style={styles.mitad}>
            <Texto tipo="subtitulo">Nulo</Texto>
            <Texto tipo="pequeno">
              Papeleta no oficial, tachada o con añadidos, o sobre con papeletas de candidaturas distintas. No cuenta.
            </Texto>
          </Bloque>
        </View>
        <Enlace href={urlArticulo(ART_96)}>{nombreArticulo(ART_96)}</Enlace>
      </Seccion>

      <Seccion titulo="Voto por correo">
        <View style={styles.plazos}>
          <Plazo dia={solicitud.inicio} texto="Último día para pedirlo" />
          <Plazo dia={deposito.inicio} texto="Último día para entregarlo en Correos" />
        </View>
        {!solicitud.confirmadaOficialmente && <Nota>Plazos pendientes de confirmar en el BOE.</Nota>}
        <Texto>
          Por internet necesitas certificado digital o DNI electrónico. Si la Oficina del Censo Electoral acepta tu
          solicitud, te envía la documentación a la dirección que indiques y ya no puedes votar en la mesa.
        </Texto>
        <Enlace href={correos.url} fuerte>
          {correos.nombre}
        </Enlace>
        <ListaFuentes fuentes={[...solicitud.fuentes, Fuentes.correosVoto]} />
      </Seccion>

      <Seccion titulo="En persona">
        <Bloque invertido>
          <Texto tipo="titulo" color="papel">
            {diaSemana(votacion.inicio)} {fechaLarga(votacion.inicio)}
          </Texto>
          <Texto tipo="pequeno" color="papel">
            Dónde te toca y qué documento llevar: se añadirá cuando lo publiquen los organismos oficiales para estas
            elecciones. Mientras, la referencia es la Oficina del Censo Electoral.
          </Texto>
        </Bloque>
        <Enlace href={censo.url}>{censo.nombre}</Enlace>
      </Seccion>
    </Pantalla>
  );
}

function Plazo({ dia, texto }: { dia: string; texto: string }) {
  const t = useTheme();
  return (
    <View style={[styles.plazo, { borderColor: t.linea }]}>
      <Texto tipo="display">{Number(dia.slice(8))}</Texto>
      <View style={styles.flex}>
        <Etiqueta>{fechaLarga(dia).replace(/^\d+ de /, '')}</Etiqueta>
        <Texto tipo="cuerpoFuerte">{texto}</Texto>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, gap: Spacing.one },
  papeletas: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.two },
  papeleta: {
    flexGrow: 1,
    flexBasis: 160,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
    gap: Spacing.two,
    minHeight: 150,
  },
  mitad: { flexGrow: 1, flexBasis: 160 },
  plazos: { gap: Spacing.two },
  plazo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
});
