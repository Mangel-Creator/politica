import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

export const HistoriaCC: HistoriaDetallada = {
  partidoId: 'cc',
  entradilla:
    'Federación de partidos canarios nacida en 1993 para gobernar las islas. Se define nacionalista, pero no independentista: defiende la Constitución y pide más autogobierno para Canarias dentro de España.',
  capitulos: [
    {
      titulo: 'Origen: una moción de censura',
      periodo: '1993',
      parrafos: [
        'La forman Agrupaciones Independientes de Canarias (AIC), Izquierda Nacionalista Canaria, Asamblea Majorera, el Partido Nacionalista Canario y Centro Canario Independiente.',
        'El 31 de marzo de 1993 una moción de censura contra el socialista Jerónimo Saavedra da la presidencia de Canarias a Manuel Hermoso, líder de las AIC. Ese mismo año CC entra en el Congreso con cuatro diputados.',
      ],
    },
    {
      titulo: 'Gobierno continuado',
      periodo: '1993–2007',
      parrafos: [
        'Gana las autonómicas de 1995 (21 de 60 escaños) y logra su máximo en 1999 (24). Preside el Gobierno canario con Hermoso, Román Rodríguez y Adán Martín.',
        'Tiene grupo propio en el Congreso entre la V y la VIII legislatura. En 1997 se constituye como federación y en 2005 sus partidos se disuelven en uno solo; adopta la bandera de las siete estrellas verdes.',
        'En 2005 el sector crítico de Gran Canaria, con el expresidente Román Rodríguez, se escinde y funda Nueva Canarias.',
      ],
    },
    {
      titulo: 'Pactos con el PP y con el PSOE',
      periodo: '2007–2019',
      parrafos: [
        'En 2007 es tercera fuerza, pero su candidato, Paulino Rivero, es investido presidente con el apoyo del PP. En 2008 Claudina Morales se convierte en la primera mujer que preside un partido en Canarias.',
        'En las generales se presenta en coaliciones con el PNC y, en 2011 y en noviembre de 2019, también con Nueva Canarias. Mantiene uno o dos diputados en el Congreso.',
        'Fernando Clavijo preside Canarias desde 2015. En 2019 el PSOE gana las elecciones y forma gobierno con Nueva Canarias, Podemos y la Agrupación Socialista Gomera: CC pasa a la oposición tras 26 años en el Gobierno.',
      ],
    },
    {
      titulo: 'Vuelta al Gobierno canario',
      periodo: 'desde 2023',
      parrafos: [
        'En 2023 Clavijo recupera la presidencia de Canarias en coalición con el PP. En las generales obtiene un diputado (Cristina Valido).',
        'Ese año el Partido Nacionalista Canario y la Agrupación Herreña Independiente, de larga relación con CC, se separan y se presentan por su cuenta.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2019',
      parrafos: [
        'Caso Las Teresitas: el Tribunal Supremo confirmó en marzo de 2019 la condena a siete años de prisión del exalcalde de Santa Cruz de Tenerife Miguel Zerolo (CC) por prevaricación y malversación, por la compra municipal de los terrenos de la playa a un precio muy superior a su valor. El 1 de abril la Audiencia de Santa Cruz de Tenerife ordenó ejecutar la condena de inmediato.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Manuel Hermoso', cargo: 'Presidente de Canarias', desde: '1993', hasta: '1999' },
    { nombre: 'Román Rodríguez', cargo: 'Presidente de Canarias', desde: '1999', hasta: '2003' },
    { nombre: 'Adán Martín', cargo: 'Presidente de Canarias', desde: '2003', hasta: '2007' },
    { nombre: 'Paulino Rivero', cargo: 'Presidente de Canarias', desde: '2007', hasta: '2015' },
    { nombre: 'Fernando Clavijo', cargo: 'Presidente de Canarias', desde: '2015', hasta: '2019' },
    { nombre: 'Fernando Clavijo', cargo: 'Presidente de Canarias', desde: '2023' },
  ],
  notaTrayectoria:
    'Antes de 1993 se muestran las Agrupaciones Independientes de Canarias (AIC), su principal partido fundador. Las siglas de cada candidatura reflejan sus coaliciones (con el PNC o con Nueva Canarias).',
  fuentes: [
    wikipedia('Coalición Canaria', 'Coalición_Canaria'),
    {
      titulo: 'Poder Judicial: Los condenados del caso Las Teresitas, a prisión inmediata (01/04/2019)',
      url: 'https://www.poderjudicial.es/cgpj/es/Poder-Judicial/Noticias-Judiciales/Los-condenados-del-caso--Las-Teresitas---a-prision-inmediata-por-riesgo-de-fuga-',
      consultada: '2026-10-06',
      oficial: true,
    },
    wikipedia('Presidente del Gobierno de Canarias', 'Presidente_del_Gobierno_de_Canarias'),
    {
      titulo: 'RTVC: Valido (CC) y Santana (Sumar) recogen sus actas en el Congreso (02/08/2023)',
      url: 'https://rtvc.es/valido-santana-actas-congreso/',
      consultada: '2026-10-06',
      oficial: false,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
