import { rango } from '@/services/fechas';

import { art, type Unidad } from './base';
import { plazo } from './util';

const campana = plazo('campana');
const encuestas = plazo('encuestas');

export const UnidadInstituciones: Unidad = {
  id: 'instituciones',
  titulo: 'Las instituciones',
  descripcion: 'Quién arbitra, cómo se cambia la Constitución y las reglas de la campaña.',
  lecciones: [
    {
      id: 'poderes',
      titulo: 'El Rey, los jueces y el Constitucional',
      gancho: 'Quién arbitra cuando los demás no se ponen de acuerdo.',
      simbolo: 'TC',
      tarjetas: [
        {
          titulo: 'Monarquía parlamentaria',
          texto:
            'Es la forma política del Estado. El Rey es el jefe del Estado y arbitra el funcionamiento de las instituciones.',
          fuente: art('CE', '56'),
        },
        {
          titulo: 'CGPJ: 20 vocales',
          texto:
            'Gobierna a los jueces. Lo forman el presidente del Supremo y 20 miembros por cinco años: 12 entre jueces y 8 propuestos por Congreso y Senado (4 y 4) por tres quintos.',
          fuente: art('CE', '122'),
        },
        {
          titulo: 'Tribunal Constitucional',
          texto:
            '12 miembros por nueve años: 4 propuestos por el Congreso, 4 por el Senado, 2 por el Gobierno y 2 por el CGPJ. Se renueva por tercios cada tres años.',
          fuente: art('CE', '159'),
        },
      ],
      ejercicios: [
        {
          id: 'poderes-1',
          tipo: 'elige',
          enunciado: '¿Cuál es la forma política del Estado español?',
          opciones: [
            'República federal',
            'Monarquía parlamentaria',
            'Monarquía absoluta',
            'República presidencialista',
          ],
          correcta: 1,
          explicacion: 'Lo dice el artículo 1.3 de la Constitución.',
          fuente: art('CE', '1'),
        },
        {
          id: 'poderes-2',
          tipo: 'elige',
          enunciado: '¿Cuántos miembros tiene el Tribunal Constitucional?',
          opciones: ['9', '12', '15', '20'],
          correcta: 1,
          explicacion: '4 propuestos por el Congreso, 4 por el Senado, 2 por el Gobierno y 2 por el CGPJ.',
          fuente: art('CE', '159'),
        },
        {
          id: 'poderes-3',
          tipo: 'empareja',
          enunciado: 'Une cada institución con sus miembros y su mandato.',
          pares: [
            ['Tribunal Constitucional', '12 magistrados, 9 años'],
            ['CGPJ', '20 vocales, 5 años'],
            ['Congreso', '350 diputados, 4 años'],
          ],
          explicacion: 'Cada uno con su mandato. El Constitucional, además, se renueva por tercios cada tres años.',
          fuente: art('CE', '159'),
        },
        {
          id: 'poderes-4',
          tipo: 'completa',
          frase: 'Los vocales del CGPJ se nombran por ___ años.',
          opciones: ['cinco', 'cuatro', 'nueve'],
          correcta: 0,
          explicacion: 'Cinco años. Los magistrados del Constitucional, nueve.',
          fuente: art('CE', '122'),
        },
      ],
    },
    {
      id: 'reforma',
      titulo: 'Cambiar la Constitución',
      gancho: 'Hay dos caminos, y uno es mucho más difícil.',
      simbolo: '3/5',
      tarjetas: [
        {
          titulo: 'Reforma ordinaria',
          texto:
            'Tres quintos de cada cámara. Si una décima parte de diputados o senadores lo pide, se vota en referéndum.',
          fuente: art('CE', '167'),
        },
        {
          titulo: 'Reforma agravada',
          texto:
            'Para la reforma total o la que toque el título preliminar, los derechos fundamentales o la Corona: dos tercios, disolución de las Cortes, nueva aprobación por dos tercios y referéndum obligatorio.',
          fuente: art('CE', '168'),
        },
      ],
      ejercicios: [
        {
          id: 'reforma-1',
          tipo: 'elige',
          enunciado: 'Una reforma ordinaria de la Constitución necesita…',
          opciones: ['Mayoría simple', 'Mayoría absoluta', 'Tres quintos de cada cámara', 'Unanimidad'],
          correcta: 2,
          explicacion: 'Tres quintos de Congreso y Senado.',
          fuente: art('CE', '167'),
        },
        {
          id: 'reforma-2',
          tipo: 'vf',
          afirmacion: 'Para reformar los derechos fundamentales hay que disolver las Cortes y hacer un referéndum.',
          verdadera: true,
          explicacion: 'Es la reforma agravada: dos tercios, elecciones, otra vez dos tercios y referéndum.',
          fuente: art('CE', '168'),
        },
        {
          id: 'reforma-3',
          tipo: 'ordena',
          enunciado: 'Ordena los pasos de la reforma agravada.',
          pasos: [
            'Aprobar la idea por dos tercios de cada cámara',
            'Disolver las Cortes',
            'Las nuevas cámaras aprueban el texto por dos tercios',
            'Referéndum',
          ],
          explicacion: 'Exige dos votaciones por dos tercios, con elecciones en medio, y un referéndum.',
          fuente: art('CE', '168'),
        },
      ],
    },
    {
      id: 'campana',
      titulo: 'Campaña y reflexión',
      gancho: 'Quince días para convencerte y uno para pensar.',
      simbolo: '15',
      tarjetas: [
        {
          titulo: 'Quince días',
          texto: `La campaña empieza el día 38 después de la convocatoria y dura 15 días. Para el 29N: ${rango(campana.inicio, campana.fin).toLowerCase()}.`,
          fuente: art('LOREG', '51'),
        },
        {
          titulo: 'Jornada de reflexión',
          texto:
            'La campaña termina a las cero horas del día anterior a la votación. Ese día no se puede hacer propaganda.',
          fuente: art('LOREG', '53'),
        },
        {
          titulo: 'Sin encuestas al final',
          texto: `Durante los cinco días anteriores a la votación no se pueden publicar encuestas: ${rango(encuestas.inicio, encuestas.fin).toLowerCase()}.`,
          fuente: art('LOREG', '69'),
        },
      ],
      ejercicios: [
        {
          id: 'campana-1',
          tipo: 'elige',
          enunciado: '¿Cuántos días dura la campaña electoral?',
          opciones: ['7', '10', '15', '30'],
          correcta: 2,
          explicacion: 'Empieza el día 38 tras la convocatoria y dura 15 días.',
          fuente: art('LOREG', '51'),
        },
        {
          id: 'campana-2',
          tipo: 'vf',
          afirmacion: 'El día antes de votar se pueden hacer mítines.',
          verdadera: false,
          explicacion: 'La campaña ya ha terminado: no se puede hacer propaganda ni actos de campaña.',
          fuente: art('LOREG', '53'),
        },
        {
          id: 'campana-3',
          tipo: 'completa',
          frase: 'En los ___ días anteriores a la votación no se pueden publicar encuestas.',
          opciones: ['cinco', 'dos', 'quince'],
          correcta: 0,
          explicacion: 'Ningún medio puede publicar, difundir ni reproducir sondeos en esos días.',
          fuente: art('LOREG', '69'),
        },
      ],
    },
  ],
};
