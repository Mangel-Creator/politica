import type { Articulo } from './base';

/** Cada definición lleva el artículo del que sale. */
export type TerminoGlosario = { termino: string; definicion: string; articulo: Articulo };

const LOREG = (numero: string): Articulo => ({ norma: 'LOREG', numero });
const CE = (numero: string): Articulo => ({ norma: 'CE', numero });
const RC = (numero: string): Articulo => ({ norma: 'RC', numero });

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
  {
    termino: 'Proyecto de ley',
    definicion: 'Ley que propone el Gobierno al Congreso.',
    articulo: CE('87'),
  },
  {
    termino: 'Proposición de ley',
    definicion:
      'Ley que proponen los grupos o los diputados, el Senado, un parlamento autonómico o la ciudadanía con 500.000 firmas.',
    articulo: CE('87'),
  },
  {
    termino: 'Toma en consideración',
    definicion:
      'Primera votación de una proposición de ley: decide si el Congreso empieza a estudiarla. Aprobarla no es aprobar la ley.',
    articulo: RC('126'),
  },
  {
    termino: 'Enmienda a la totalidad',
    definicion:
      'Propuesta de un grupo para devolver un proyecto de ley al Gobierno o para cambiarlo por un texto entero alternativo. Si gana la devolución, el proyecto queda rechazado.',
    articulo: RC('110'),
  },
  {
    termino: 'Ley orgánica',
    definicion:
      'La que regula derechos fundamentales, estatutos de autonomía, el régimen electoral y otras materias que fija la Constitución. Necesita mayoría absoluta del Congreso.',
    articulo: CE('81'),
  },
  {
    termino: 'Convalidar',
    definicion:
      'Lo que hace el Congreso con un decreto ley para que siga en vigor. Si vota que no, el decreto queda derogado.',
    articulo: RC('151'),
  },
  {
    termino: 'Proposición no de ley',
    definicion: 'Petición que aprueba el Congreso, casi siempre al Gobierno. No cambia ninguna ley por sí sola.',
    articulo: RC('193'),
  },
  {
    termino: 'Iniciativa legislativa popular',
    definicion: 'Proposición de ley que presentan los ciudadanos con al menos 500.000 firmas.',
    articulo: CE('87'),
  },
  {
    termino: 'Veto del Senado',
    definicion:
      'Rechazo del Senado a una ley que ya aprobó el Congreso. El Congreso puede levantarlo con mayoría absoluta, o con mayoría simple pasados dos meses.',
    articulo: CE('90'),
  },
  {
    termino: 'Presupuestos prorrogados',
    definicion:
      'Si el 1 de enero no hay Presupuestos nuevos aprobados, siguen valiendo los del año anterior hasta que se aprueben otros.',
    articulo: CE('134'),
  },
];
