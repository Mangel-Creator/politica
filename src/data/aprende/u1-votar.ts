import { fechaLarga, rango } from '@/services/fechas';

import { Fuentes } from '../fuentes';
import { art, type Unidad } from './base';
import { plazo } from './util';

const pedirCorreo = plazo('solicitud-correo');
const llegaCorreo = plazo('envio-correo');
const entregarCorreo = plazo('deposito-correo');
const mesas = plazo('mesas');
const ceraEnvio = plazo('cera-envio');
const ceraUrna = plazo('cera-urna');
const temporales = plazo('temporales');
const braille = plazo('braille');
const escrutinio = plazo('escrutinio');
const JEC = Fuentes.jecCalendario29N;

export const UnidadVotar: Unidad = {
  id: 'votar',
  titulo: 'Votar el 29N',
  descripcion: 'Lo justo para votar bien: papeletas, voto por correo, el día de las elecciones y casos especiales.',
  lecciones: [
    {
      id: 'papeletas',
      titulo: 'Dos papeletas',
      gancho: 'El 29N votas dos cosas a la vez, y cada una tiene sus reglas.',
      simbolo: '▭',
      tarjetas: [
        {
          titulo: 'Congreso y Senado',
          texto:
            'El 29 de noviembre se eligen las dos cámaras de las Cortes: el Congreso y el Senado. Cada una con su papeleta y su sobre.',
          fuente: Fuentes.boeConvocatoria,
        },
        {
          titulo: 'Congreso: una lista cerrada',
          texto:
            'Eliges la papeleta de una candidatura entera y la metes en el sobre. Si tachas, añades nombres o cambias el orden, el voto es nulo.',
          fuente: art('LOREG', '96'),
        },
        {
          titulo: 'Senado: marcas nombres',
          texto:
            'Una sola papeleta con todos los candidatos. Marcas con una cruz hasta 3 en tu provincia (2 en Gran Canaria, Mallorca, Tenerife, Ceuta y Melilla; 1 en las demás islas). Puedes mezclar partidos.',
          fuente: art('LOREG', '166'),
        },
        {
          titulo: 'Blanco y nulo no son lo mismo',
          texto:
            'En blanco: sobre vacío (o papeleta del Senado sin marcar). Cuenta como voto válido. Nulo: papeleta alterada o no oficial, papeleta sin sobre o dos papeletas de partidos distintos. No cuenta.',
          fuente: art('LOREG', '96'),
        },
      ],
      ejercicios: [
        {
          id: 'papeletas-1',
          tipo: 'elige',
          enunciado: '¿Qué se vota el 29N?',
          opciones: ['Solo el Congreso', 'El Congreso y el Senado', 'El Congreso y tu comunidad', 'Al presidente'],
          correcta: 1,
          explicacion:
            'Se eligen las dos cámaras. Al presidente del Gobierno no se le vota: lo elige después el Congreso.',
          fuente: Fuentes.boeConvocatoria,
        },
        {
          id: 'papeletas-2',
          tipo: 'vf',
          afirmacion: 'En la papeleta del Congreso puedes tachar a un candidato y el voto sigue valiendo.',
          verdadera: false,
          explicacion: 'Tachar, añadir o cambiar el orden de los nombres anula el voto.',
          fuente: art('LOREG', '96'),
        },
        {
          id: 'papeletas-3',
          tipo: 'elige',
          enunciado: 'Vives en Madrid. ¿A cuántos candidatos al Senado puedes marcar como máximo?',
          opciones: ['1', '2', '3', '4'],
          correcta: 2,
          explicacion: 'En las provincias se marcan hasta 3. Si marcas más, el voto al Senado es nulo.',
          fuente: art('LOREG', '166'),
        },
        {
          id: 'papeletas-4',
          tipo: 'vf',
          afirmacion: 'En la papeleta del Senado puedes marcar candidatos de partidos distintos.',
          verdadera: true,
          explicacion: 'Votas a personas, no a una lista: puedes elegir de la candidatura que quieras.',
          fuente: art('LOREG', '166'),
        },
        {
          id: 'papeletas-5',
          tipo: 'empareja',
          enunciado: 'Une cada sobre con lo que pasa con el voto.',
          pares: [
            ['Sobre vacío', 'Voto en blanco'],
            ['Dos papeletas del mismo partido', 'Un voto para ese partido'],
            ['Dos papeletas de partidos distintos', 'Voto nulo'],
          ],
          explicacion: 'Dos papeletas iguales cuentan como una; de partidos distintos, anulan el voto.',
          fuente: art('LOREG', '96'),
        },
        {
          id: 'papeletas-6',
          tipo: 'completa',
          frase: 'El voto en blanco cuenta como voto ___.',
          opciones: ['válido', 'nulo', 'repetido'],
          correcta: 0,
          explicacion: 'Es válido: suma en el total sobre el que se calcula el 3 % que necesita cada lista.',
          fuente: art('LOREG', '96'),
        },
      ],
    },
    {
      id: 'correo',
      titulo: 'Voto por correo',
      gancho: '¿No estarás ese día? Puedes votar desde casa, pero hay que pedirlo a tiempo.',
      simbolo: '⊠',
      tarjetas: [
        {
          titulo: 'Para quien no puede ir',
          texto:
            'Si el día de las elecciones no estarás o no puedes ir a tu mesa, puedes votar por correo. Hay que pedirlo antes.',
          fuente: art('LOREG', '72'),
        },
        {
          titulo: `Pídelo hasta el ${fechaLarga(pedirCorreo.inicio)}`,
          texto:
            'En cualquier oficina de Correos, en persona y con el DNI, el pasaporte o el carnet de conducir originales. O por internet, con certificado digital o DNI electrónico.',
          fuente: Fuentes.correosNota29N,
        },
        {
          titulo: `Te llega desde el ${fechaLarga(llegaCorreo.inicio)}`,
          texto: 'Por correo certificado, a la dirección que indiques. Tienes que firmar el recibo en persona.',
          fuente: art('LOREG', '73'),
        },
        {
          titulo: `Envíalo hasta el ${fechaLarga(entregarCorreo.inicio)}`,
          texto:
            'La papeleta va en el sobre de votación. Ese sobre y el certificado, dentro del sobre dirigido a la mesa. Se manda por correo certificado y no necesita sello.',
          fuente: art('LOREG', '73'),
        },
        {
          titulo: 'Ya no vas a la mesa',
          texto: 'Una vez pedido el voto por correo, ese día no puedes votar en persona.',
          fuente: art('LOREG', '73'),
        },
      ],
      ejercicios: [
        {
          id: 'correo-1',
          tipo: 'ordena',
          enunciado: 'Pon en orden el voto por correo.',
          pasos: [
            'Pedirlo en Correos o por internet',
            'Recibir la documentación en casa',
            'Meter la papeleta en el sobre de votación',
            'Enviarlo por correo certificado',
          ],
          explicacion: 'Primero se pide, luego llega a casa, se prepara y se devuelve por correo certificado.',
          fuente: art('LOREG', '73'),
        },
        {
          id: 'correo-2',
          tipo: 'elige',
          enunciado: '¿Hasta qué día se puede pedir el voto por correo para el 29N?',
          opciones: ['9 de noviembre', fechaLarga(pedirCorreo.inicio), '25 de noviembre', '28 de noviembre'],
          correcta: 1,
          explicacion: 'Hasta el décimo día antes de la votación, ese día incluido.',
          fuente: Fuentes.correosNota29N,
        },
        {
          id: 'correo-3',
          tipo: 'vf',
          afirmacion: 'Para pedirlo en la oficina de Correos vale una fotocopia del DNI.',
          verdadera: false,
          explicacion: 'Hay que enseñar el documento original. La ley lo dice expresamente: fotocopias, no.',
          fuente: art('LOREG', '72'),
        },
        {
          id: 'correo-4',
          tipo: 'vf',
          afirmacion: 'Si pides el voto por correo, el 29N todavía puedes ir a votar a tu mesa.',
          verdadera: false,
          explicacion: 'Al pedirlo se anota en el censo para que ese día no votes en persona.',
          fuente: art('LOREG', '73'),
        },
        {
          id: 'correo-5',
          tipo: 'completa',
          frase: 'El sobre para la mesa se manda por correo certificado y ___ sello.',
          opciones: ['no necesita', 'necesita un', 'necesita dos'],
          correcta: 0,
          explicacion: 'Es gratis: el sobre no necesita franqueo.',
          fuente: art('LOREG', '73'),
        },
        {
          id: 'correo-6',
          tipo: 'vf',
          afirmacion:
            'Si una enfermedad te impide ir a Correos, otra persona puede pedirlo por ti con autorización ante notario y certificado médico oficial.',
          verdadera: true,
          explicacion: 'Es la única forma de que lo pida otra persona, y solo puede representar a un elector.',
          fuente: art('LOREG', '72'),
        },
      ],
    },
    {
      id: 'dia-votacion',
      titulo: 'El día de votar',
      gancho: 'Qué llevar, a qué hora ir y qué pasa dentro del colegio.',
      simbolo: '☐',
      tarjetas: [
        {
          titulo: 'De 9:00 a 20:00',
          texto: 'La votación empieza a las nueve y sigue sin parar hasta las ocho de la tarde.',
          fuente: art('LOREG', '84'),
        },
        {
          titulo: 'Lleva tu documento',
          texto: 'DNI, pasaporte o carnet de conducir: cualquiera de los tres, con tu foto.',
          fuente: art('LOREG', '85'),
        },
        {
          titulo: 'Solo en tu mesa',
          texto:
            'Cada persona vota en la mesa que le corresponde. Dónde está te lo dice la Oficina del Censo Electoral.',
          fuente: art('LOREG', '86'),
        },
        {
          titulo: 'Tú metes el sobre',
          texto:
            'Si quieres, pasas por la cabina. Dices tu nombre a la mesa y das los sobres cerrados al presidente. Cuando dice «Vota», te los devuelve y tú los metes en la urna.',
          fuente: art('LOREG', '86'),
        },
      ],
      ejercicios: [
        {
          id: 'dia-1',
          tipo: 'elige',
          enunciado: '¿A qué hora se cierra la votación?',
          opciones: ['18:00', '20:00', '21:00', '22:00'],
          correcta: 1,
          explicacion: 'De 9:00 a 20:00, sin interrupción.',
          fuente: art('LOREG', '84'),
        },
        {
          id: 'dia-2',
          tipo: 'vf',
          afirmacion: 'Con el carnet de conducir puedes votar.',
          verdadera: true,
          explicacion: 'Valen el DNI, el pasaporte o el carnet de conducir, siempre que lleven tu foto.',
          fuente: art('LOREG', '85'),
        },
        {
          id: 'dia-3',
          tipo: 'ordena',
          enunciado: 'Ordena lo que haces en el colegio electoral.',
          pasos: [
            'Coger las papeletas y meterlas en los sobres',
            'Decir tu nombre y apellidos a la mesa',
            'Dar los sobres cerrados al presidente',
            'Meter tú los sobres en la urna',
          ],
          explicacion: 'El presidente dice tu nombre y «Vota», te devuelve los sobres y tú los metes en la urna.',
          fuente: art('LOREG', '86'),
        },
        {
          id: 'dia-4',
          tipo: 'vf',
          afirmacion: 'Puedes votar en cualquier mesa de tu ciudad.',
          verdadera: false,
          explicacion: 'Solo en la sección y la mesa que te corresponden.',
          fuente: art('LOREG', '86'),
        },
        {
          id: 'dia-5',
          tipo: 'vf',
          afirmacion: 'Es obligatorio pasar por la cabina.',
          verdadera: false,
          explicacion: 'Es voluntario: la ley dice que pasas por ella «si así lo deseasen».',
          fuente: art('LOREG', '86'),
        },
        {
          id: 'dia-6',
          tipo: 'completa',
          frase: 'El voto es ___.',
          opciones: ['secreto', 'público', 'por turnos'],
          correcta: 0,
          explicacion: 'Nadie puede obligarte a enseñar tu voto: por eso existen la cabina y el sobre cerrado.',
          fuente: art('LOREG', '86'),
        },
      ],
    },
    {
      id: 'mesa',
      titulo: 'Si te toca ser de mesa',
      gancho: 'Te pueden tocar por sorteo. Esto es lo que tienes que saber.',
      simbolo: '3',
      tarjetas: [
        {
          titulo: 'Tres personas',
          texto: 'Cada mesa la forman un presidente y dos vocales. Dirigen la votación y el recuento.',
          fuente: art('LOREG', '25'),
        },
        {
          titulo: `Sorteo: ${rango(mesas.inicio, mesas.fin).toLowerCase()}`,
          texto:
            'El ayuntamiento sortea entre los votantes de esa mesa que sepan leer y escribir y tengan menos de 70 años. Para presidir hace falta el Bachiller o la FP de segundo grado (o, si no hay, el Graduado Escolar).',
          fuente: art('LOREG', '26'),
        },
        {
          titulo: 'Es obligatorio',
          texto:
            'Te lo notifican en tres días. Si tienes una causa justificada, tienes siete días para alegarla ante la Junta Electoral de Zona. Desde los 65 años puedes renunciar.',
          fuente: art('LOREG', '27'),
        },
        {
          titulo: 'Hay suplentes',
          texto: 'Se sortean también dos suplentes para cada puesto, por si alguien no puede ir.',
          fuente: art('LOREG', '26'),
        },
      ],
      ejercicios: [
        {
          id: 'mesa-1',
          tipo: 'elige',
          enunciado: '¿Cuántas personas forman una mesa electoral?',
          opciones: ['Dos', 'Tres', 'Cinco', 'Siete'],
          correcta: 1,
          explicacion: 'Un presidente y dos vocales.',
          fuente: art('LOREG', '25'),
        },
        {
          id: 'mesa-2',
          tipo: 'vf',
          afirmacion: 'Si sales en el sorteo, ser de mesa es voluntario.',
          verdadera: false,
          explicacion: 'Es obligatorio. Solo te libra una causa justificada que acepte la Junta Electoral de Zona.',
          fuente: art('LOREG', '27'),
        },
        {
          id: 'mesa-3',
          tipo: 'elige',
          enunciado: '¿Cuántos días tienes para alegar una excusa?',
          opciones: ['3', '7', '15', '30'],
          correcta: 1,
          explicacion: 'Siete días desde que te lo notifican. La Junta responde en cinco.',
          fuente: art('LOREG', '27'),
        },
        {
          id: 'mesa-4',
          tipo: 'completa',
          frase: 'Desde los ___ años puedes renunciar a ser de mesa.',
          opciones: ['18', '65', '70'],
          correcta: 1,
          explicacion:
            'Entre los 65 y los 70 puedes renunciar en siete días. A partir de 70 ya no entras en el sorteo.',
          fuente: art('LOREG', '26'),
        },
        {
          id: 'mesa-5',
          tipo: 'vf',
          afirmacion: 'Un candidato a estas elecciones puede ser presidente de mesa.',
          verdadera: false,
          explicacion: 'Quien se presenta como candidato no puede formar parte de una mesa.',
          fuente: art('LOREG', '27'),
        },
        {
          id: 'mesa-6',
          tipo: 'elige',
          enunciado: '¿Cuándo es el sorteo de las mesas para el 29N?',
          opciones: ['Del 6 al 12 de octubre', rango(mesas.inicio, mesas.fin), 'El 28 de noviembre', 'El mismo día 29'],
          correcta: 1,
          explicacion: 'Entre los días 25 y 29 después de la convocatoria.',
          fuente: JEC,
        },
      ],
    },
    {
      id: 'extranjero',
      titulo: 'Fuera de España y braille',
      gancho: 'Vivir fuera, estar de viaje o necesitar braille no te quita el voto.',
      simbolo: 'CERA',
      tarjetas: [
        {
          titulo: 'Si vives fuera (CERA)',
          texto: `Si estás inscrito como residente en el extranjero, la documentación te llega sin pedirla: ${rango(ceraEnvio.inicio, ceraEnvio.fin).toLowerCase()}.`,
          fuente: art('LOREG', '75'),
        },
        {
          titulo: 'En el consulado o por correo',
          texto: `${rango(ceraUrna.inicio, ceraUrna.fin)} puedes votar en persona en tu consulado o embajada. Si prefieres mandarlo por correo al consulado, tienes hasta el 24 de noviembre.`,
          fuente: art('LOREG', '75'),
        },
        {
          titulo: 'Si solo estás de viaje',
          texto: `Vives en España pero estarás fuera durante las elecciones: hay que pedir el voto hasta el ${fechaLarga(temporales.inicio)}.`,
          fuente: JEC,
        },
        {
          titulo: 'Voto en braille',
          texto: `Las personas ciegas pueden pedir la documentación en braille hasta el ${fechaLarga(braille.inicio)}.`,
          fuente: JEC,
        },
      ],
      ejercicios: [
        {
          id: 'extranjero-1',
          tipo: 'vf',
          afirmacion: 'Si vives en el extranjero y estás en el CERA, tienes que pedir la documentación para votar.',
          verdadera: false,
          explicacion: 'Se manda de oficio, sin pedirla, a la dirección con la que estás inscrito.',
          fuente: art('LOREG', '75'),
        },
        {
          id: 'extranjero-2',
          tipo: 'elige',
          enunciado: '¿Hasta qué día se puede votar en urna en los consulados?',
          opciones: ['24 de noviembre', fechaLarga(ceraUrna.fin!), '29 de noviembre', '2 de noviembre'],
          correcta: 1,
          explicacion: 'Del octavo al tercer día antes de la votación, ambos incluidos.',
          fuente: art('LOREG', '75'),
        },
        {
          id: 'extranjero-3',
          tipo: 'empareja',
          enunciado: 'Une cada situación con su plazo.',
          pares: [
            ['Vives fuera y votas en el consulado', rango(ceraUrna.inicio, ceraUrna.fin)],
            ['Estás de viaje durante las elecciones', `Pedirlo hasta el ${fechaLarga(temporales.inicio)}`],
            ['Necesitas el voto en braille', `Pedirlo hasta el ${fechaLarga(braille.inicio)}`],
          ],
          explicacion: 'Son plazos distintos: apúntate el tuyo.',
          fuente: JEC,
        },
        {
          id: 'extranjero-4',
          tipo: 'vf',
          afirmacion: 'Si vives en España pero estarás de viaje en el extranjero, también puedes votar.',
          verdadera: true,
          explicacion: 'La ley prevé el voto de quien está fuera de forma temporal; el Gobierno regula cómo.',
          fuente: art('LOREG', '74'),
        },
        {
          id: 'extranjero-5',
          tipo: 'completa',
          frase: 'Los votos de los residentes en el extranjero se suman en el ___.',
          opciones: ['escrutinio general', 'recuento de la noche electoral', 'Senado'],
          correcta: 0,
          explicacion: `Por eso el resultado de la noche electoral puede cambiar un poco. El escrutinio general empieza el ${fechaLarga(escrutinio.inicio)}.`,
          fuente: art('LOREG', '75'),
        },
      ],
    },
  ],
};
