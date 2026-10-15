import { art, type Unidad } from './base';
import { diaVot, fuenteHecho, fuenteVot, no, si } from './util';

/** Ley Orgánica 3/1984: la iniciativa popular no caduca al disolverse las Cortes. */
const ilp = fuenteHecho('regularizacion', 2);

export const UnidadCongreso: Unidad = {
  id: 'congreso',
  titulo: 'Cómo funciona el Congreso',
  descripcion: 'Las claves para entender cualquier noticia del Congreso: quién propone, qué se vota y qué significa.',
  lecciones: [
    {
      id: 'nace-una-ley',
      titulo: 'Cómo nace una ley',
      gancho: 'Votar «sí» no siempre es aprobar una ley. Aquí ves por qué.',
      simbolo: '§',
      tarjetas: [
        {
          titulo: 'Quién puede proponer',
          texto:
            'El Gobierno (proyecto de ley), el Congreso y el Senado (proposición de ley), los parlamentos autonómicos y la ciudadanía con 500.000 firmas (iniciativa legislativa popular).',
          fuente: art('CE', '87'),
        },
        {
          titulo: 'Primer paso: la toma en consideración',
          texto:
            'Una proposición de ley se vota primero en el Pleno para decidir si se estudia. Votar «sí» ahí no es aprobarla: es empezar a tramitarla.',
          fuente: art('RC', '126'),
        },
        {
          titulo: 'Enmiendas',
          texto:
            'Los grupos proponen cambios. Una enmienda a la totalidad «de devolución», si gana, tumba el proyecto del Gobierno.',
          fuente: art('RC', '112'),
        },
        {
          titulo: 'Leyes orgánicas: 176 síes',
          texto:
            'Las que tocan derechos fundamentales, estatutos de autonomía o el régimen electoral necesitan mayoría absoluta en una votación final.',
          fuente: art('CE', '81'),
        },
        {
          titulo: 'Después, el Senado',
          texto:
            'Tiene dos meses para vetar o cambiar el texto. El Congreso puede levantar el veto con mayoría absoluta, o con mayoría simple pasados dos meses.',
          fuente: art('CE', '90'),
        },
      ],
      ejercicios: [
        {
          id: 'ley-1',
          tipo: 'empareja',
          enunciado: 'Une quién la propone con cómo se llama.',
          pares: [
            ['El Gobierno', 'Proyecto de ley'],
            ['Un grupo del Congreso', 'Proposición de ley'],
            ['500.000 ciudadanos', 'Iniciativa legislativa popular'],
          ],
          explicacion: 'Proyecto si viene del Gobierno; proposición si viene de las cámaras o de fuera.',
          fuente: art('CE', '87'),
        },
        {
          id: 'ley-2',
          tipo: 'vf',
          afirmacion: 'Si el Congreso toma en consideración una proposición de ley, ya es ley.',
          verdadera: false,
          explicacion: 'Solo empieza su tramitación: enmiendas, comisión, votación final y Senado.',
          fuente: art('RC', '126'),
        },
        {
          id: 'ley-3',
          tipo: 'ordena',
          enunciado: 'Ordena el camino de una proposición de ley.',
          pasos: [
            'Un grupo la presenta',
            'El Pleno la toma en consideración',
            'Se debaten enmiendas en comisión',
            'Votación en el Congreso',
            'Pasa al Senado',
          ],
          explicacion: 'Después del Senado, si hay veto o cambios, vuelve al Congreso para la última palabra.',
          fuente: art('RC', '126'),
        },
        {
          id: 'ley-4',
          tipo: 'elige',
          enunciado: `El ${diaVot('jornada-devolucion')} el Pleno votó devolver al Gobierno su proyecto de jornada de 37,5 horas. Ganó el sí: ${si('jornada-devolucion')} a ${no('jornada-devolucion')}. ¿Qué pasó con el proyecto?`,
          opciones: ['Se aprobó', 'Quedó rechazado', 'Pasó al Senado', 'Se votará después de las elecciones'],
          correcta: 1,
          explicacion: 'Si el Pleno acuerda la devolución, el proyecto queda rechazado. Aquí «sí» era tumbarlo.',
          fuente: art('RC', '112'),
        },
        {
          id: 'ley-5',
          tipo: 'completa',
          frase: 'Una ley orgánica necesita mayoría ___ del Congreso en la votación final.',
          opciones: ['absoluta', 'simple', 'de dos tercios'],
          correcta: 0,
          explicacion: '176 de 350 diputados, no solo más síes que noes.',
          fuente: art('CE', '81'),
        },
        {
          id: 'ley-6',
          tipo: 'elige',
          enunciado: `La ley de eficiencia de la Justicia era orgánica: para levantar el veto del Senado necesitaba 176 síes. ¿Cuántos tuvo el ${diaVot('okupa-eficiencia')}?`,
          opciones: ['170', '176', String(si('okupa-eficiencia')), '210'],
          correcta: 2,
          explicacion: `Salió por muy poco: ${si('okupa-eficiencia')} síes y ${no('okupa-eficiencia')} noes.`,
          fuente: fuenteVot('okupa-eficiencia'),
        },
        {
          id: 'ley-7',
          tipo: 'elige',
          enunciado: '¿Cuántas firmas necesita una iniciativa legislativa popular?',
          opciones: ['50.000', '100.000', '500.000', '1.000.000'],
          correcta: 2,
          explicacion: 'No menos de 500.000 firmas acreditadas.',
          fuente: art('CE', '87'),
        },
      ],
    },
    {
      id: 'decretos',
      titulo: 'Decretos y peticiones',
      gancho: 'El atajo del Gobierno y las peticiones que no obligan.',
      simbolo: '↯',
      tarjetas: [
        {
          titulo: 'El decreto ley',
          texto:
            'En casos de extraordinaria y urgente necesidad, el Gobierno puede aprobar normas con fuerza de ley. No puede usarlo para todo: por ejemplo, ni para derechos fundamentales ni para la ley electoral.',
          fuente: art('CE', '86'),
        },
        {
          titulo: '30 días para convalidar',
          texto: 'El Congreso tiene que votarlo en 30 días. Sí = se mantiene (se convalida). No = queda derogado.',
          fuente: art('RC', '151'),
        },
        {
          titulo: 'Todo o nada',
          texto: `Se vota entero. En enero de 2025 cayó un decreto que subía las pensiones y traía otras muchas medidas (${si('pensiones-rdl-9-2024')} síes, ${no('pensiones-rdl-9-2024')} noes). Tres semanas después salió otro con la misma subida.`,
          fuente: fuenteVot('pensiones-rdl-9-2024'),
        },
        {
          titulo: 'Proposición no de ley',
          texto:
            'Es una petición del Congreso, casi siempre al Gobierno. Aunque se apruebe, no cambia ninguna ley por sí sola.',
          fuente: art('RC', '193'),
        },
        {
          titulo: 'Al disolver, todo caduca…',
          texto:
            'Con la disolución de las Cortes caducan las leyes a medio tramitar. La excepción: las iniciativas legislativas populares, que siguen vivas.',
          fuente: art('RC', '207'),
        },
      ],
      ejercicios: [
        {
          id: 'decretos-1',
          tipo: 'vf',
          afirmacion: 'Votar «no» a un decreto ley es votar para derogarlo.',
          verdadera: true,
          explicacion: 'Los síes son a favor de convalidarlo y los noes, a favor de derogarlo.',
          fuente: art('RC', '151'),
        },
        {
          id: 'decretos-2',
          tipo: 'elige',
          enunciado: '¿Cuántos días tiene el Congreso para convalidar un decreto ley?',
          opciones: ['7', '15', '30', '90'],
          correcta: 2,
          explicacion: 'Los 30 días siguientes a su promulgación.',
          fuente: art('CE', '86'),
        },
        {
          id: 'decretos-3',
          tipo: 'vf',
          afirmacion: 'Si el Congreso aprueba una proposición no de ley, el Gobierno está obligado a cumplirla.',
          verdadera: false,
          explicacion: 'Es una propuesta de resolución: expresa lo que pide la Cámara, pero no es una ley.',
          fuente: art('RC', '193'),
        },
        {
          id: 'decretos-4',
          tipo: 'elige',
          enunciado: `El ${diaVot('pensiones-rdl-9-2024')} el decreto de las pensiones tuvo ${si('pensiones-rdl-9-2024')} síes y ${no('pensiones-rdl-9-2024')} noes. ¿Qué pasó?`,
          opciones: ['Se convalidó', 'Quedó derogado', 'Pasó al Senado', 'Se repitió la votación'],
          correcta: 1,
          explicacion: 'Ganó el no, así que el decreto quedó derogado con todas sus medidas.',
          fuente: fuenteVot('pensiones-rdl-9-2024'),
        },
        {
          id: 'decretos-5',
          tipo: 'completa',
          frase: 'Al disolverse las Cortes, las leyes que estaban a medio tramitar ___.',
          opciones: ['caducan', 'se aprueban solas', 'pasan al Senado'],
          correcta: 0,
          explicacion: 'Si las nuevas Cortes quieren retomarlas, hay que volver a presentarlas.',
          fuente: art('RC', '207'),
        },
        {
          id: 'decretos-6',
          tipo: 'vf',
          afirmacion: 'Una iniciativa legislativa popular también caduca al disolverse las Cortes.',
          verdadera: false,
          explicacion: 'Su ley dice expresamente que no decae: la retoma la nueva Cámara.',
          fuente: ilp,
        },
        {
          id: 'decretos-7',
          tipo: 'empareja',
          enunciado: 'Une cada palabra con lo que es.',
          pares: [
            ['Decreto ley', 'Lo aprueba el Gobierno y el Congreso lo convalida'],
            ['Proposición no de ley', 'Una petición, sin fuerza de ley'],
            ['Ley orgánica', 'Necesita 176 síes'],
          ],
          explicacion: 'Tres palabras que salen en casi todas las noticias del Congreso.',
          fuente: art('CE', '86'),
        },
      ],
    },
    {
      id: 'censura',
      titulo: 'Cambiar de Gobierno',
      gancho: 'Para echar a un presidente hay que proponer otro.',
      simbolo: '⇄',
      tarjetas: [
        {
          titulo: 'Moción de censura',
          texto: 'La firma al menos una décima parte de los diputados y debe incluir un candidato alternativo.',
          fuente: art('CE', '113'),
        },
        {
          titulo: 'Mayoría absoluta',
          texto: 'Para que prospere necesita mayoría absoluta. No se puede votar hasta pasados cinco días.',
          fuente: art('CE', '113'),
        },
        {
          titulo: 'Cuestión de confianza',
          texto: 'El presidente puede pedir el apoyo del Congreso; la gana con mayoría simple.',
          fuente: art('CE', '112'),
        },
      ],
      ejercicios: [
        {
          id: 'censura-1',
          tipo: 'elige',
          enunciado: 'Una moción de censura debe incluir…',
          opciones: ['Un referéndum', 'Un candidato alternativo', 'El apoyo del Senado', 'Nuevas elecciones'],
          correcta: 1,
          explicacion: 'Es constructiva: quien la presenta propone a otro presidente.',
          fuente: art('CE', '113'),
        },
        {
          id: 'censura-2',
          tipo: 'elige',
          enunciado: '¿Qué mayoría necesita una moción de censura para prosperar?',
          opciones: ['Simple', 'Absoluta', 'Tres quintos', 'Dos tercios'],
          correcta: 1,
          explicacion: 'Mayoría absoluta del Congreso: 176.',
          fuente: art('CE', '113'),
        },
        {
          id: 'censura-3',
          tipo: 'vf',
          afirmacion:
            'Si una moción de censura fracasa, sus firmantes no pueden presentar otra en el mismo periodo de sesiones.',
          verdadera: true,
          explicacion: 'Así se evita encadenar mociones una detrás de otra.',
          fuente: art('CE', '113'),
        },
        {
          id: 'censura-4',
          tipo: 'completa',
          frase: 'La cuestión de confianza se gana con mayoría ___.',
          opciones: ['simple', 'absoluta', 'de tres quintos'],
          correcta: 0,
          explicacion: 'Más síes que noes.',
          fuente: art('CE', '112'),
        },
      ],
    },
  ],
};
