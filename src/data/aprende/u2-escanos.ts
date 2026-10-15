import { Circunscripciones, FuenteCircunscripciones } from '../circunscripciones';
import { art, type Unidad } from './base';

const diputados = (nombre: string) => {
  const c = Circunscripciones.find((x) => x.nombre === nombre);
  if (!c) throw new Error(`Aprende: no existe la circunscripción ${nombre}`);
  return String(c.diputados);
};

export const UnidadEscanos: Unidad = {
  id: 'escanos',
  titulo: 'Del voto al escaño',
  descripcion: 'Cómo se convierten los votos en diputados y cómo se elige al presidente.',
  lecciones: [
    {
      id: 'que-votamos',
      titulo: 'El Congreso y el Senado',
      gancho: 'Dos cámaras, dos formas de elegir.',
      simbolo: '350',
      tarjetas: [
        {
          titulo: 'Congreso: 350 escaños',
          texto:
            'Se eligen por provincias. Cada provincia tiene al menos 2 diputados; Ceuta y Melilla, 1 cada una. Los 248 restantes se reparten según la población.',
          fuente: art('LOREG', '162'),
        },
        {
          titulo: 'Senado: 4 por provincia',
          texto:
            'En cada provincia se eligen 4 senadores; en Gran Canaria, Mallorca y Tenerife, 3; en cada una de las demás islas, 1; en Ceuta y Melilla, 2. Además, cada comunidad autónoma designa un senador y otro más por cada millón de habitantes.',
          fuente: art('LOREG', '165'),
        },
        {
          titulo: 'Cuatro años',
          texto: 'El Congreso y el Senado se eligen por cuatro años, salvo que se disuelvan antes, como ahora.',
          fuente: art('CE', '68'),
        },
      ],
      ejercicios: [
        {
          id: 'que-votamos-1',
          tipo: 'elige',
          enunciado: '¿Cuántos diputados tiene el Congreso?',
          opciones: ['300', '350', '400', '208'],
          correcta: 1,
          explicacion: 'La Constitución permite entre 300 y 400; la ley electoral fija 350.',
          fuente: art('LOREG', '162'),
        },
        {
          id: 'que-votamos-2',
          tipo: 'elige',
          enunciado: '¿Dónde se reparten los escaños del Congreso?',
          opciones: ['En cada comunidad', 'En cada municipio', 'En cada provincia', 'En todo el país'],
          correcta: 2,
          explicacion: 'La circunscripción es la provincia; Ceuta y Melilla, una cada una.',
          fuente: art('CE', '68'),
        },
        {
          id: 'que-votamos-3',
          tipo: 'vf',
          afirmacion: 'Ceuta y Melilla eligen 2 diputados cada una.',
          verdadera: false,
          explicacion: 'Eligen 1 diputado cada una. Las provincias parten de un mínimo de 2.',
          fuente: art('LOREG', '162'),
        },
        {
          id: 'que-votamos-4',
          tipo: 'empareja',
          enunciado: 'Une cada circunscripción con los diputados que elige el 29N.',
          pares: [
            ['Madrid', diputados('Madrid')],
            ['Barcelona', diputados('Barcelona')],
            ['Soria', diputados('Soria')],
            ['Ceuta', diputados('Ceuta')],
          ],
          explicacion: 'Las provincias con más población eligen más diputados. Lo fija el decreto de convocatoria.',
          fuente: FuenteCircunscripciones,
        },
        {
          id: 'que-votamos-5',
          tipo: 'completa',
          frase: 'Además de los elegidos en las urnas, cada comunidad autónoma ___ senadores.',
          opciones: ['designa', 'no tiene', 'sortea'],
          correcta: 0,
          explicacion: 'Su parlamento designa uno y otro más por cada millón de habitantes.',
          fuente: art('CE', '69'),
        },
      ],
    },
    {
      id: 'dhondt',
      titulo: 'De votos a escaños',
      gancho: 'No basta con ser votado: importa dónde y cuánto.',
      simbolo: '÷',
      tarjetas: [
        {
          titulo: 'El umbral del 3 %',
          texto: 'Una lista que no llega al 3 % de los votos válidos de su provincia no entra en el reparto.',
          fuente: art('LOREG', '163'),
        },
        {
          titulo: 'La regla D’Hondt',
          texto:
            'Los votos de cada lista se dividen entre 1, 2, 3… hasta el número de escaños. Los cocientes más altos se llevan los escaños.',
          fuente: art('LOREG', '163'),
        },
        {
          titulo: 'El ejemplo de la ley',
          texto:
            'Con 480.000 votos y 8 escaños, la lista A (168.000) saca 4, B (104.000) 2, C y D 1 cada una, y E y F ninguno.',
          fuente: art('LOREG', '163'),
        },
        {
          titulo: 'Ceuta y Melilla',
          texto: 'Eligen un solo diputado cada una: no hay reparto, gana el candidato más votado.',
          fuente: art('LOREG', '163'),
        },
      ],
      ejercicios: [
        {
          id: 'dhondt-1',
          tipo: 'elige',
          enunciado: '¿Qué porcentaje mínimo necesita una lista en su provincia para optar a escaño?',
          opciones: ['1 %', '3 %', '5 %', '10 %'],
          correcta: 1,
          explicacion: 'Se descartan las listas por debajo del 3 % de los votos válidos de la provincia.',
          fuente: art('LOREG', '163'),
        },
        {
          id: 'dhondt-2',
          tipo: 'ordena',
          enunciado: 'Ordena los pasos del reparto de escaños en una provincia.',
          pasos: [
            'Apartar las listas con menos del 3 %',
            'Dividir los votos de cada lista entre 1, 2, 3…',
            'Dar los escaños a los cocientes más altos',
            'Entran los candidatos por el orden de la lista',
          ],
          explicacion: 'Así lo describe el artículo 163, con un ejemplo de 8 escaños.',
          fuente: art('LOREG', '163'),
        },
        {
          id: 'dhondt-3',
          tipo: 'elige',
          enunciado: 'En el ejemplo de la ley (8 escaños), ¿cuántos saca la lista A con 168.000 votos?',
          opciones: ['2', '3', '4', '8'],
          correcta: 2,
          explicacion: 'Sus cocientes 168.000, 84.000, 56.000 y 42.000 están entre los 8 más altos.',
          fuente: art('LOREG', '163'),
        },
        {
          id: 'dhondt-4',
          tipo: 'vf',
          afirmacion: 'El voto en blanco no cuenta para nada.',
          verdadera: false,
          explicacion: 'Es válido: sube el total sobre el que se calcula el 3 %.',
          fuente: art('LOREG', '96'),
        },
        {
          id: 'dhondt-5',
          tipo: 'vf',
          afirmacion: 'En Ceuta y en Melilla el escaño es para el candidato más votado.',
          verdadera: true,
          explicacion: 'Con un solo escaño no hay reparto.',
          fuente: art('LOREG', '163'),
        },
      ],
    },
    {
      id: 'investidura',
      titulo: 'Del voto al Gobierno',
      gancho: 'No votas al presidente: lo elige el Congreso.',
      simbolo: '176',
      tarjetas: [
        {
          titulo: 'El Rey propone',
          texto:
            'Tras las elecciones, el Rey consulta a los grupos y propone un candidato a través de la presidencia del Congreso.',
          fuente: art('CE', '99'),
        },
        {
          titulo: 'Primera votación',
          texto: 'El candidato necesita la mayoría absoluta: la mitad más uno de los diputados, 176 de 350.',
          fuente: art('CE', '99'),
        },
        {
          titulo: 'Segunda votación',
          texto: 'Si no la logra, 48 horas después basta con mayoría simple: más síes que noes.',
          fuente: art('CE', '99'),
        },
        {
          titulo: 'Dos meses de margen',
          texto:
            'Si en dos meses desde la primera votación nadie es investido, el Rey disuelve las Cortes y hay nuevas elecciones.',
          fuente: art('CE', '99'),
        },
      ],
      ejercicios: [
        {
          id: 'investidura-1',
          tipo: 'vf',
          afirmacion: 'El 29N votas directamente al presidente del Gobierno.',
          verdadera: false,
          explicacion: 'Votas diputados y senadores. Al presidente lo inviste después el Congreso.',
          fuente: art('CE', '99'),
        },
        {
          id: 'investidura-2',
          tipo: 'elige',
          enunciado: '¿Cuántos votos son mayoría absoluta en el Congreso?',
          opciones: ['175', '176', '180', '210'],
          correcta: 1,
          explicacion: 'La mitad más uno de 350 es 176.',
          fuente: art('CE', '99'),
        },
        {
          id: 'investidura-3',
          tipo: 'ordena',
          enunciado: 'Ordena cómo se elige al presidente.',
          pasos: [
            'El Rey consulta a los grupos',
            'El Rey propone un candidato',
            'El candidato expone su programa',
            'El Congreso vota la investidura',
          ],
          explicacion: 'Todo a través de la presidencia del Congreso.',
          fuente: art('CE', '99'),
        },
        {
          id: 'investidura-4',
          tipo: 'completa',
          frase: 'En la segunda votación basta con mayoría ___.',
          opciones: ['simple', 'absoluta', 'de dos tercios'],
          correcta: 0,
          explicacion: 'Más síes que noes, 48 horas después de la primera.',
          fuente: art('CE', '99'),
        },
        {
          id: 'investidura-5',
          tipo: 'elige',
          enunciado: '¿Cuánto tiempo hay para investir a alguien antes de repetir elecciones?',
          opciones: ['15 días', '1 mes', '2 meses', '6 meses'],
          correcta: 2,
          explicacion: 'Dos meses desde la primera votación de investidura.',
          fuente: art('CE', '99'),
        },
      ],
    },
  ],
};
