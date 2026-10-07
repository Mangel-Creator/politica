import type { Fuente } from './tipos';

const C = '2026-10-06';
export const FuenteCE: Fuente = {
  titulo: 'BOE: Constitución Española (texto consolidado)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229',
  consultada: C,
  oficial: true,
};
export const FuenteLOREG: Fuente = {
  titulo: 'BOE: Ley Orgánica 5/1985 del Régimen Electoral General (LOREG)',
  url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-11672',
  consultada: C,
  oficial: true,
};

/** Referencia a una norma: "CE 99" es el artículo 99 de la Constitución. */
export type Articulo = { norma: 'CE' | 'LOREG'; numero: string };

export type Leccion = {
  id: string;
  titulo: string;
  /** Una frase que engancha. */
  gancho: string;
  /** Ideas en tarjetas cortas, para leer deslizando. */
  tarjetas: { titulo: string; texto: string; articulo: Articulo }[];
  /** Número grande para la portada de la lección. */
  cifra: { valor: string; etiqueta: string };
};

/** Todo comprobado en el texto del BOE el 06/10/2026. */
export const Lecciones: Leccion[] = [
  {
    id: 'que-votamos',
    titulo: '¿Qué votamos el 29N?',
    gancho: 'Dos papeletas, dos cámaras y reglas muy distintas.',
    cifra: { valor: '350', etiqueta: 'diputados en el Congreso' },
    tarjetas: [
      {
        titulo: 'Congreso: 350 escaños',
        texto:
          'Se eligen por provincias. Cada provincia tiene al menos 2 diputados; Ceuta y Melilla, 1 cada una. Los 248 restantes se reparten según población.',
        articulo: { norma: 'LOREG', numero: '162' },
      },
      {
        titulo: 'Papeleta cerrada',
        texto:
          'Para el Congreso votas una lista entera. Si tachas, añades o cambias el orden de los nombres, el voto es nulo.',
        articulo: { norma: 'LOREG', numero: '96' },
      },
      {
        titulo: 'Senado: 4 por provincia',
        texto:
          'En cada provincia se eligen 4 senadores; en Gran Canaria, Mallorca y Tenerife, 3; en cada una de las demás islas, 1; en Ceuta y Melilla, 2. Además, cada comunidad autónoma designa un senador y otro más por cada millón de habitantes.',
        articulo: { norma: 'LOREG', numero: '165' },
      },
      {
        titulo: 'Senado: eliges personas',
        texto:
          'En la papeleta del Senado marcas nombres, aunque sean de partidos distintos: hasta 3 en una provincia, 2 en Gran Canaria, Mallorca, Tenerife, Ceuta y Melilla, y 1 en las demás islas. Si marcas más, el voto es nulo.',
        articulo: { norma: 'LOREG', numero: '166' },
      },
      {
        titulo: 'Cuatro años',
        texto: 'El Congreso y el Senado se eligen por cuatro años, salvo que se disuelvan antes, como ahora.',
        articulo: { norma: 'CE', numero: '68' },
      },
    ],
  },
  {
    id: 'dhondt',
    titulo: 'Cómo los votos se convierten en escaños',
    gancho: 'No basta con ser votado: importa dónde y cuánto.',
    cifra: { valor: '3 %', etiqueta: 'mínimo de votos en la provincia' },
    tarjetas: [
      {
        titulo: 'El umbral del 3 %',
        texto: 'Una lista que no llega al 3 % de los votos válidos de su provincia no entra en el reparto.',
        articulo: { norma: 'LOREG', numero: '163' },
      },
      {
        titulo: 'La regla D’Hondt',
        texto:
          'Los votos de cada lista se dividen entre 1, 2, 3… hasta el número de escaños. Los cocientes más altos se llevan los escaños.',
        articulo: { norma: 'LOREG', numero: '163' },
      },
      {
        titulo: 'El ejemplo de la ley',
        texto:
          'Con 480.000 votos y 8 escaños, la lista A (168.000) saca 4, B (104.000) 2, C y D 1 cada una, y E y F ninguno.',
        articulo: { norma: 'LOREG', numero: '163' },
      },
      {
        titulo: 'Ceuta y Melilla',
        texto: 'Eligen un solo diputado cada una: no hay reparto, gana el candidato más votado.',
        articulo: { norma: 'LOREG', numero: '163' },
      },
      {
        titulo: 'Blanco no es nulo',
        texto: 'El voto en blanco cuenta como válido: sube el total sobre el que se calcula el 3 %. El nulo no cuenta.',
        articulo: { norma: 'LOREG', numero: '96' },
      },
      {
        titulo: 'Proporcional, por provincia',
        texto: 'La Constitución pide representación proporcional en cada circunscripción, que es la provincia.',
        articulo: { norma: 'CE', numero: '68' },
      },
    ],
  },
  {
    id: 'investidura',
    titulo: 'Del voto al Gobierno: la investidura',
    gancho: 'No votas al presidente: lo elige el Congreso.',
    cifra: { valor: '176', etiqueta: 'votos para la mayoría absoluta' },
    tarjetas: [
      {
        titulo: 'El Rey propone',
        texto:
          'Tras las elecciones, el Rey consulta a los grupos y propone un candidato a través de la presidencia del Congreso.',
        articulo: { norma: 'CE', numero: '99' },
      },
      {
        titulo: 'Primera votación',
        texto: 'El candidato necesita la mayoría absoluta: la mitad más uno de los diputados, 176 de 350.',
        articulo: { norma: 'CE', numero: '99' },
      },
      {
        titulo: 'Segunda votación',
        texto: 'Si no la logra, 48 horas después basta con mayoría simple: más síes que noes.',
        articulo: { norma: 'CE', numero: '99' },
      },
      {
        titulo: 'Dos meses de margen',
        texto:
          'Si en dos meses desde la primera votación nadie es investido, el Rey disuelve las Cortes y hay nuevas elecciones.',
        articulo: { norma: 'CE', numero: '99' },
      },
    ],
  },
  {
    id: 'censura',
    titulo: 'Cómo se puede cambiar un Gobierno',
    gancho: 'Para echar a un presidente hay que proponer otro.',
    cifra: { valor: '1/10', etiqueta: 'de los diputados para presentar una moción' },
    tarjetas: [
      {
        titulo: 'Moción de censura',
        texto: 'La firma al menos una décima parte de los diputados y debe incluir un candidato alternativo.',
        articulo: { norma: 'CE', numero: '113' },
      },
      {
        titulo: 'Mayoría absoluta',
        texto: 'Para que prospere, necesita mayoría absoluta. No se puede votar hasta pasados cinco días.',
        articulo: { norma: 'CE', numero: '113' },
      },
      {
        titulo: 'Cuestión de confianza',
        texto: 'El presidente puede pedir el apoyo del Congreso; la gana con mayoría simple.',
        articulo: { norma: 'CE', numero: '112' },
      },
    ],
  },
  {
    id: 'leyes',
    titulo: 'Quién hace las leyes',
    gancho: 'Las Cortes legislan, pero el Gobierno tiene atajos.',
    cifra: { valor: '30', etiqueta: 'días para convalidar un decreto ley' },
    tarjetas: [
      {
        titulo: 'Las Cortes',
        texto: 'Congreso y Senado aprueban las leyes y los Presupuestos y controlan al Gobierno.',
        articulo: { norma: 'CE', numero: '66' },
      },
      {
        titulo: 'Decretos ley',
        texto:
          'En casos de extraordinaria y urgente necesidad, el Gobierno dicta normas provisionales que el Congreso debe convalidar o derogar en 30 días.',
        articulo: { norma: 'CE', numero: '86' },
      },
      {
        titulo: 'Los Presupuestos',
        texto: 'Los elabora el Gobierno y los examinan, enmiendan y aprueban las Cortes cada año.',
        articulo: { norma: 'CE', numero: '134' },
      },
      {
        titulo: 'Iniciativa popular',
        texto: 'Con al menos 500.000 firmas, la ciudadanía puede presentar una proposición de ley.',
        articulo: { norma: 'CE', numero: '87' },
      },
      {
        titulo: 'Referéndum consultivo',
        texto:
          'Las decisiones políticas de especial trascendencia pueden someterse a referéndum consultivo, con autorización del Congreso.',
        articulo: { norma: 'CE', numero: '92' },
      },
    ],
  },
  {
    id: 'poderes',
    titulo: 'El Rey, los jueces y el Constitucional',
    gancho: 'Quién arbitra cuando los demás no se ponen de acuerdo.',
    cifra: { valor: '12', etiqueta: 'magistrados del Tribunal Constitucional' },
    tarjetas: [
      {
        titulo: 'Monarquía parlamentaria',
        texto:
          'Es la forma política del Estado. El Rey es el jefe del Estado y arbitra el funcionamiento de las instituciones.',
        articulo: { norma: 'CE', numero: '56' },
      },
      {
        titulo: 'CGPJ: 20 vocales',
        texto:
          'Gobierna a los jueces. Lo forman el presidente del Supremo y 20 miembros por cinco años: 12 entre jueces y 8 propuestos por Congreso y Senado (4 y 4) por tres quintos.',
        articulo: { norma: 'CE', numero: '122' },
      },
      {
        titulo: 'Tribunal Constitucional',
        texto:
          '12 miembros por nueve años: 4 propuestos por el Congreso, 4 por el Senado, 2 por el Gobierno y 2 por el CGPJ. Se renueva por tercios cada tres años.',
        articulo: { norma: 'CE', numero: '159' },
      },
    ],
  },
  {
    id: 'reforma',
    titulo: 'Cómo se cambia la Constitución',
    gancho: 'Hay dos caminos, y uno es mucho más difícil.',
    cifra: { valor: '3/5', etiqueta: 'de cada cámara para una reforma ordinaria' },
    tarjetas: [
      {
        titulo: 'Reforma ordinaria',
        texto:
          'Tres quintos de cada cámara. Si una décima parte de diputados o senadores lo pide, se vota en referéndum.',
        articulo: { norma: 'CE', numero: '167' },
      },
      {
        titulo: 'Reforma agravada',
        texto:
          'Para la reforma total o la que toque el título preliminar, los derechos fundamentales o la Corona: dos tercios, disolución de las Cortes, nueva aprobación por dos tercios y referéndum obligatorio.',
        articulo: { norma: 'CE', numero: '168' },
      },
    ],
  },
  {
    id: 'campana',
    titulo: 'Campaña y jornada de reflexión',
    gancho: 'Quince días para convencerte y uno para pensar.',
    cifra: { valor: '15', etiqueta: 'días de campaña electoral' },
    tarjetas: [
      {
        titulo: 'Cuándo empieza',
        texto: 'La campaña comienza el día 38 después de la convocatoria y dura 15 días.',
        articulo: { norma: 'LOREG', numero: '51' },
      },
      {
        titulo: 'Cuándo acaba',
        texto: 'Termina a las cero horas del día anterior a la votación: ese día es la jornada de reflexión.',
        articulo: { norma: 'LOREG', numero: '51' },
      },
    ],
  },
];

export type Pregunta = {
  id: string;
  leccionId: string;
  enunciado: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  articulo: Articulo;
};

export const Preguntas: Pregunta[] = [
  {
    id: 'p1',
    leccionId: 'que-votamos',
    enunciado: '¿Cuántos diputados tiene el Congreso?',
    opciones: ['300', '350', '400', '208'],
    correcta: 1,
    explicacion: 'La Constitución permite entre 300 y 400; la ley electoral fija 350.',
    articulo: { norma: 'LOREG', numero: '162' },
  },
  {
    id: 'p2',
    leccionId: 'que-votamos',
    enunciado: '¿Cuál es la circunscripción electoral del Congreso?',
    opciones: ['La comunidad autónoma', 'El municipio', 'La provincia', 'Todo el país'],
    correcta: 2,
    explicacion: 'La circunscripción es la provincia; Ceuta y Melilla eligen un diputado cada una.',
    articulo: { norma: 'CE', numero: '68' },
  },
  {
    id: 'p3',
    leccionId: 'que-votamos',
    enunciado: '¿Cuántos diputados tiene como mínimo cada provincia?',
    opciones: ['1', '2', '3', '4'],
    correcta: 1,
    explicacion: 'Cada provincia parte de 2 diputados; el resto se reparte por población.',
    articulo: { norma: 'LOREG', numero: '162' },
  },
  {
    id: 'p4',
    leccionId: 'que-votamos',
    enunciado: 'En una provincia peninsular, ¿a cuántos candidatos al Senado puedes votar como máximo?',
    opciones: ['1', '2', '3', '4'],
    correcta: 2,
    explicacion: 'Hasta 3 nombres; si marcas más, el voto al Senado es nulo.',
    articulo: { norma: 'LOREG', numero: '166' },
  },
  {
    id: 'p5',
    leccionId: 'que-votamos',
    enunciado: 'Si tachas un nombre en la papeleta del Congreso, tu voto…',
    opciones: ['Cuenta igual', 'Es nulo', 'Es en blanco', 'Va al siguiente de la lista'],
    correcta: 1,
    explicacion: 'Modificar, añadir o tachar nombres anula el voto.',
    articulo: { norma: 'LOREG', numero: '96' },
  },
  {
    id: 'p6',
    leccionId: 'dhondt',
    enunciado: '¿Qué porcentaje mínimo necesita una lista en su provincia para optar a escaño?',
    opciones: ['1 %', '3 %', '5 %', '10 %'],
    correcta: 1,
    explicacion: 'Se descartan las listas por debajo del 3 % de los votos válidos de la provincia.',
    articulo: { norma: 'LOREG', numero: '163' },
  },
  {
    id: 'p7',
    leccionId: 'dhondt',
    enunciado: 'El voto en blanco…',
    opciones: ['No cuenta para nada', 'Cuenta como válido', 'Se suma al partido más votado', 'Es nulo'],
    correcta: 1,
    explicacion: 'Es válido: cuenta en el total sobre el que se calcula el 3 %.',
    articulo: { norma: 'LOREG', numero: '96' },
  },
  {
    id: 'p8',
    leccionId: 'dhondt',
    enunciado: 'En la regla D’Hondt, los votos de cada lista se dividen entre…',
    opciones: ['La población', '1, 2, 3… hasta el número de escaños', 'El número de listas', '350'],
    correcta: 1,
    explicacion: 'Los cocientes más altos se quedan con los escaños.',
    articulo: { norma: 'LOREG', numero: '163' },
  },
  {
    id: 'p9',
    leccionId: 'investidura',
    enunciado: '¿Cuántos votos son mayoría absoluta en el Congreso?',
    opciones: ['175', '176', '180', '210'],
    correcta: 1,
    explicacion: 'La mitad más uno de 350 es 176.',
    articulo: { norma: 'CE', numero: '99' },
  },
  {
    id: 'p10',
    leccionId: 'investidura',
    enunciado: 'Si un candidato no logra la mayoría absoluta en la primera votación…',
    opciones: [
      'Hay elecciones',
      '48 horas después le basta la mayoría simple',
      'Decide el Senado',
      'Gobierna en funciones un año',
    ],
    correcta: 1,
    explicacion: 'En la segunda votación basta con más síes que noes.',
    articulo: { norma: 'CE', numero: '99' },
  },
  {
    id: 'p11',
    leccionId: 'investidura',
    enunciado: '¿Cuánto tiempo hay para investir a alguien antes de repetir elecciones?',
    opciones: ['15 días', '1 mes', '2 meses', '6 meses'],
    correcta: 2,
    explicacion: 'Dos meses desde la primera votación de investidura.',
    articulo: { norma: 'CE', numero: '99' },
  },
  {
    id: 'p12',
    leccionId: 'investidura',
    enunciado: '¿Quién propone al candidato a presidente?',
    opciones: ['El partido más votado', 'El Rey', 'El Senado', 'El Tribunal Constitucional'],
    correcta: 1,
    explicacion: 'El Rey, tras consultar a los grupos, a través de la presidencia del Congreso.',
    articulo: { norma: 'CE', numero: '99' },
  },
  {
    id: 'p13',
    leccionId: 'censura',
    enunciado: 'Una moción de censura debe incluir…',
    opciones: ['Un referéndum', 'Un candidato alternativo', 'El apoyo del Senado', 'Nuevas elecciones'],
    correcta: 1,
    explicacion: 'Es constructiva: quien la presenta propone a otro presidente.',
    articulo: { norma: 'CE', numero: '113' },
  },
  {
    id: 'p14',
    leccionId: 'censura',
    enunciado: '¿Qué mayoría necesita una moción de censura para prosperar?',
    opciones: ['Simple', 'Absoluta', 'Tres quintos', 'Dos tercios'],
    correcta: 1,
    explicacion: 'Mayoría absoluta del Congreso.',
    articulo: { norma: 'CE', numero: '113' },
  },
  {
    id: 'p15',
    leccionId: 'leyes',
    enunciado: '¿En cuántos días debe el Congreso convalidar un decreto ley?',
    opciones: ['7', '15', '30', '90'],
    correcta: 2,
    explicacion: 'En los 30 días siguientes a su promulgación.',
    articulo: { norma: 'CE', numero: '86' },
  },
  {
    id: 'p16',
    leccionId: 'leyes',
    enunciado: '¿Cuántas firmas hacen falta para una iniciativa legislativa popular?',
    opciones: ['50.000', '100.000', '500.000', '1.000.000'],
    correcta: 2,
    explicacion: 'No menos de 500.000 firmas acreditadas.',
    articulo: { norma: 'CE', numero: '87' },
  },
  {
    id: 'p17',
    leccionId: 'leyes',
    enunciado: '¿Quién elabora los Presupuestos Generales del Estado?',
    opciones: ['El Congreso', 'El Gobierno', 'El Banco de España', 'Las comunidades'],
    correcta: 1,
    explicacion: 'Los elabora el Gobierno y los aprueban las Cortes.',
    articulo: { norma: 'CE', numero: '134' },
  },
  {
    id: 'p18',
    leccionId: 'poderes',
    enunciado: '¿Cuántos miembros tiene el Tribunal Constitucional?',
    opciones: ['9', '12', '15', '20'],
    correcta: 1,
    explicacion: '4 propuestos por el Congreso, 4 por el Senado, 2 por el Gobierno y 2 por el CGPJ.',
    articulo: { norma: 'CE', numero: '159' },
  },
  {
    id: 'p19',
    leccionId: 'poderes',
    enunciado: '¿Cuántos vocales del CGPJ se eligen entre jueces y magistrados?',
    opciones: ['4', '8', '12', '20'],
    correcta: 2,
    explicacion: '12 de los 20; los otros 8 los proponen Congreso y Senado.',
    articulo: { norma: 'CE', numero: '122' },
  },
  {
    id: 'p20',
    leccionId: 'poderes',
    enunciado: '¿Cuál es la forma política del Estado español?',
    opciones: ['República federal', 'Monarquía parlamentaria', 'Monarquía absoluta', 'República presidencialista'],
    correcta: 1,
    explicacion: 'Así lo dice el artículo 1.3 de la Constitución.',
    articulo: { norma: 'CE', numero: '1' },
  },
  {
    id: 'p21',
    leccionId: 'reforma',
    enunciado: 'Una reforma ordinaria de la Constitución necesita…',
    opciones: ['Mayoría simple', 'Mayoría absoluta', 'Tres quintos de cada cámara', 'Unanimidad'],
    correcta: 2,
    explicacion: 'Tres quintos de Congreso y Senado.',
    articulo: { norma: 'CE', numero: '167' },
  },
  {
    id: 'p22',
    leccionId: 'campana',
    enunciado: '¿Cuántos días dura la campaña electoral?',
    opciones: ['7', '10', '15', '30'],
    correcta: 2,
    explicacion: 'Empieza el día 38 tras la convocatoria y dura 15 días.',
    articulo: { norma: 'LOREG', numero: '51' },
  },
];

/** Cada definición lleva el artículo del que sale. */
export type TerminoGlosario = { termino: string; definicion: string; articulo: Articulo };

const LOREG = (numero: string): Articulo => ({ norma: 'LOREG', numero });
const CE = (numero: string): Articulo => ({ norma: 'CE', numero });

export const Glosario: TerminoGlosario[] = [
  {
    termino: 'Escaño',
    definicion: 'Asiento en el Congreso o el Senado; por extensión, cada puesto de diputado o senador.',
    articulo: LOREG('163'),
  },
  {
    termino: 'Circunscripción',
    definicion:
      'Territorio donde se reparten los escaños. Para el Congreso, la provincia, y Ceuta y Melilla. Para el Senado, igual, salvo en Baleares y Canarias, donde cada isla es una circunscripción.',
    articulo: LOREG('161'),
  },
  {
    termino: 'Mayoría absoluta',
    definicion: 'Más de la mitad de los miembros de la cámara: 176 de 350 diputados.',
    articulo: CE('99'),
  },
  {
    termino: 'Mayoría simple',
    definicion: 'Más votos a favor que en contra, sin contar abstenciones.',
    articulo: CE('99'),
  },
  {
    termino: 'Investidura',
    definicion: 'Votación en la que el Congreso da su confianza a un candidato para ser presidente del Gobierno.',
    articulo: CE('99'),
  },
  {
    termino: 'Moción de censura',
    definicion: 'Votación para sustituir al presidente por otro candidato.',
    articulo: CE('113'),
  },
  {
    termino: 'Decreto ley',
    definicion: 'Norma con fuerza de ley que dicta el Gobierno por urgencia y que el Congreso debe convalidar.',
    articulo: CE('86'),
  },
  {
    termino: 'Legislatura',
    definicion: 'Periodo entre dos elecciones generales; como máximo, cuatro años.',
    articulo: CE('68'),
  },
  {
    termino: 'Coalición',
    definicion:
      'Unión de partidos para presentarse juntos a unas elecciones; deben comunicarlo en los diez días siguientes a la convocatoria. También se llama así al Gobierno formado por varios partidos.',
    articulo: LOREG('44'),
  },
  {
    termino: 'Gobierno en funciones',
    definicion: 'El Gobierno que sigue gestionando tras unas elecciones hasta que toma posesión el nuevo.',
    articulo: CE('101'),
  },
  {
    termino: 'Voto en blanco',
    definicion: 'Sobre sin papeleta (o papeleta del Senado sin marcar). Es un voto válido.',
    articulo: LOREG('96'),
  },
  {
    termino: 'Voto nulo',
    definicion:
      'Papeleta o sobre no oficial, papeleta sin sobre, sobre con papeletas de listas distintas o papeleta alterada. No es válido: no entra en el cálculo del 3 % ni en el reparto.',
    articulo: LOREG('96'),
  },
  {
    termino: 'Umbral del 3 %',
    definicion:
      'Mínimo de votos válidos (blancos incluidos) que necesita una lista en su provincia para entrar en el reparto de escaños del Congreso.',
    articulo: LOREG('163'),
  },
  {
    termino: 'Regla D’Hondt',
    definicion:
      'Forma de repartir los escaños: los votos de cada lista se dividen entre 1, 2, 3… y los cocientes más altos se llevan los escaños. La ley lo describe sin darle ese nombre.',
    articulo: LOREG('163'),
  },
  {
    termino: 'Lista cerrada',
    definicion:
      'En el Congreso se vota una lista entera y los escaños van a sus candidatos por el orden en que aparecen. Si cambias la papeleta, el voto es nulo.',
    articulo: LOREG('163'),
  },
  {
    termino: 'Senador autonómico',
    definicion:
      'El que no se elige en las urnas: lo designa el parlamento de cada comunidad, uno por comunidad y otro más por cada millón de habitantes.',
    articulo: CE('69'),
  },
  {
    termino: 'Censo electoral',
    definicion:
      'Lista de quienes pueden votar. Hay que estar inscrito para votar. Tiene dos partes: residentes en España y residentes en el extranjero.',
    articulo: LOREG('31'),
  },
  {
    termino: 'CERA',
    definicion:
      'Censo de españoles residentes en el extranjero. Reciben en casa, sin pedirla, la documentación para votar por correo o en el consulado.',
    articulo: LOREG('75'),
  },
  {
    termino: 'Voto por correo',
    definicion:
      'Para quien no podrá ir a votar: se pide en Correos, se recibe la documentación en casa y se devuelve por correo certificado antes del día marcado.',
    articulo: LOREG('72'),
  },
  {
    termino: 'Mesa electoral',
    definicion:
      'Un presidente y dos vocales, elegidos por sorteo entre los votantes de esa mesa, que dirigen la votación y el recuento. El cargo es obligatorio.',
    articulo: LOREG('26'),
  },
  {
    termino: 'Jornada de reflexión',
    definicion:
      'Nombre popular del día anterior a la votación: la campaña ya ha terminado y no se puede hacer propaganda.',
    articulo: LOREG('53'),
  },
];

export function fuenteDe(a: Articulo): Fuente {
  return a.norma === 'CE' ? FuenteCE : FuenteLOREG;
}

/** Anclas del BOE para la LOREG, que usa el número en letra (comprobadas el 06/10/2026). */
const AnclasLOREG: Record<string, string> = {
  '26': 'aveintiseis',
  '31': 'atreintayuno',
  '44': 'acuarentaycuatro',
  '51': 'acincuentayuno',
  '53': 'acincuentaytres',
  '72': 'asetentaydos',
  '73': 'asetentaytres',
  '75': 'asetentaycinco',
  '84': 'aochentaycuatro',
  '85': 'aochentaycinco',
  '86': 'aochentayseis',
  '96': 'anoventayseis',
  '161': 'acientosesentayuno',
  '162': 'acientosesentaydos',
  '163': 'acientosesentaytres',
  '165': 'acientosesentaycinco',
  '166': 'acientosesentayseis',
  '172': 'acientosetentaydos',
};

/** Enlace directo al artículo dentro del texto consolidado del BOE. */
export function urlArticulo(a: Articulo) {
  if (a.norma === 'CE') return `${FuenteCE.url}#a${a.numero}`;
  const ancla = AnclasLOREG[a.numero];
  return ancla ? `${FuenteLOREG.url}#${ancla}` : FuenteLOREG.url;
}

export function nombreArticulo(a: Articulo) {
  return `${a.norma === 'CE' ? 'Constitución' : 'Ley electoral (LOREG)'}, art. ${a.numero}`;
}
