import type { ReactNode } from 'react';
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
const ART_72 = { norma: 'LOREG', numero: '72' } as const;
const ART_73 = { norma: 'LOREG', numero: '73' } as const;
const ART_84 = { norma: 'LOREG', numero: '84' } as const;
const ART_85 = { norma: 'LOREG', numero: '85' } as const;
const ART_86 = { norma: 'LOREG', numero: '86' } as const;
const ART_96 = { norma: 'LOREG', numero: '96' } as const;
const ART_166 = { norma: 'LOREG', numero: '166' } as const;
const ART_172 = { norma: 'LOREG', numero: '172' } as const;

export default function PantallaVotar() {
  const t = useTheme();
  const solicitud = fecha('solicitud-correo');
  const envio = fecha('envio-correo');
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
              Papeleta no oficial, tachada o con añadidos, papeleta sin sobre o sobre con papeletas de candidaturas
              distintas. No cuenta.
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
        <View style={styles.pasos}>
          <Paso n={1} titulo="Pídelo">
            En cualquier oficina de Correos, en persona y con el DNI, el pasaporte o el carnet de conducir originales
            (fotocopias no). O por internet, con certificado digital o DNI electrónico. Si una enfermedad te impide ir,
            puede pedirlo otra persona con autorización ante notario y certificado médico oficial.
          </Paso>
          <Paso n={2} titulo="Recíbelo">
            Desde el {fechaLarga(envio.inicio)}, por correo certificado, en la dirección que indiques. Tienes que firmar
            el recibo en persona.
          </Paso>
          <Paso n={3} titulo="Envíalo">
            Mete la papeleta en el sobre de votación y ciérralo. Ese sobre y el certificado van dentro del sobre
            dirigido a la mesa, que se manda por correo certificado desde Correos. No necesita sello.
          </Paso>
        </View>
        <Texto>Una vez pedido el voto por correo, ya no puedes votar en persona en la mesa.</Texto>
        <Enlace href={correos.url} fuerte>
          {correos.nombre}
        </Enlace>
        <Enlace href={urlArticulo(ART_72)}>{nombreArticulo(ART_72)}</Enlace>
        <Enlace href={urlArticulo(ART_73)}>{nombreArticulo(ART_73)}</Enlace>
        <ListaFuentes fuentes={[...solicitud.fuentes, Fuentes.correosVoto]} />
      </Seccion>

      <Seccion titulo="En persona">
        <Bloque invertido>
          <Texto tipo="titulo" color="papel">
            {diaSemana(votacion.inicio)} {fechaLarga(votacion.inicio)}
          </Texto>
          <Texto tipo="subtitulo" color="papel">
            De 9:00 a 20:00
          </Texto>
        </Bloque>
        <View style={styles.pasos}>
          <Paso n={1} titulo="Lleva tu documento">
            DNI, pasaporte o carnet de conducir: cualquiera de los tres, con tu foto.
          </Paso>
          <Paso n={2} titulo="Ve a tu mesa">
            Solo puedes votar en la mesa que te corresponde. Dónde está te lo dice la Oficina del Censo Electoral.
          </Paso>
          <Paso n={3} titulo="Vota">
            Si quieres, pasa por la cabina para elegir y meter las papeletas en los sobres sin que nadie te vea. Di tu
            nombre y apellidos a la mesa y da los sobres cerrados al presidente. Cuando diga «Vota», te los devuelve y
            tú mismo los metes en la urna.
          </Paso>
        </View>
        <Enlace href={censo.url}>{censo.nombre}</Enlace>
        <Enlace href={urlArticulo(ART_84)}>{nombreArticulo(ART_84)}</Enlace>
        <Enlace href={urlArticulo(ART_85)}>{nombreArticulo(ART_85)}</Enlace>
        <Enlace href={urlArticulo(ART_86)}>{nombreArticulo(ART_86)}</Enlace>
      </Seccion>
    </Pantalla>
  );
}

function Paso({ n, titulo, children }: { n: number; titulo: string; children: ReactNode }) {
  const t = useTheme();
  return (
    <View style={[styles.paso, { borderBottomColor: t.lineaSuave }]}>
      <Texto tipo="dato">{n}</Texto>
      <View style={styles.flex}>
        <Texto tipo="cuerpoFuerte">{titulo}</Texto>
        <Texto tipo="pequeno">{children}</Texto>
      </View>
    </View>
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
  pasos: { gap: Spacing.two },
  paso: { flexDirection: 'row', gap: Spacing.three, paddingBottom: Spacing.two, borderBottomWidth: Borde.fino },
  plazo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    borderWidth: Borde.grueso,
    padding: Spacing.three,
  },
});
