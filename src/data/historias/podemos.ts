import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaPodemos: HistoriaDetallada = {
  partidoId: 'podemos',
  entradilla:
    'Partido fundado en enero de 2014, en plena crisis económica y heredero del movimiento 15-M. Rompió el bipartidismo en 2015, gobernó en coalición con el PSOE entre 2020 y 2023 y, desde diciembre de 2023, actúa por su cuenta, separado de Sumar.',
  capitulos: [
    {
      titulo: 'Fundación',
      periodo: '2014',
      parrafos: [
        'Nace del manifiesto «Mover ficha: convertir la indignación en cambio político», publicado en enero de 2014 y firmado por una treintena de intelectuales y activistas, entre ellos Juan Carlos Monedero. El partido Izquierda Anticapitalista ayuda a organizarlo.',
        'Se presenta el 17 de enero de 2014 en el Teatro del Barrio de Madrid con Pablo Iglesias, Monedero, Teresa Rodríguez, Íñigo Errejón y Miguel Urbán. Su objetivo declarado es oponerse a los recortes sociales de la crisis.',
        'En las europeas de mayo de 2014, con listas elegidas en primarias abiertas, logra el 7,98 % y cinco escaños: cuarta fuerza. En noviembre, su asamblea constituyente elige a Iglesias secretario general.',
      ],
    },
    {
      titulo: 'El fin del bipartidismo',
      periodo: '2015–2019',
      parrafos: [
        'En las municipales de 2015 no se presenta con su nombre, sino dentro de candidaturas ciudadanas. En las generales de diciembre de 2015 obtiene 69 diputados contando sus alianzas autonómicas (En Comú, Compromís y En Marea).',
        'En 2016 se alía con Izquierda Unida en Unidos Podemos y logra 71 diputados. En junio de 2017 presenta una moción de censura contra Mariano Rajoy que fracasa; en 2018 apoya la de Pedro Sánchez, que sale adelante.',
        'En la asamblea de Vistalegre II (febrero de 2017) se impone la línea de Iglesias frente a la de Errejón, que es apartado de la portavocía. En 2019 Errejón concurre a las autonómicas de Madrid con Más Madrid y después lidera Más País, su versión estatal.',
        'Con el nombre Unidas Podemos baja a 42 diputados en abril de 2019 y a 35 en noviembre.',
      ],
    },
    {
      titulo: 'En el Gobierno',
      periodo: '2020–2023',
      parrafos: [
        'En enero de 2020 forma un Gobierno de coalición con el PSOE. Iglesias es vicepresidente segundo e Irene Montero ministra de Igualdad.',
        'En marzo de 2021 Iglesias deja el Gobierno para ser candidato en Madrid. Tras las elecciones del 4 de mayo, en las que su lista pasa de 7 a 10 escaños, abandona la política activa. En junio Ione Belarra es elegida secretaria general.',
        'En las municipales y autonómicas de mayo de 2023 pasa de 47 a 14 diputados autonómicos y sale de la Asamblea de Madrid, las Cortes Valencianas y el Parlamento de Canarias.',
      ],
    },
    {
      titulo: 'Dentro y fuera de Sumar',
      periodo: 'desde 2023',
      parrafos: [
        'En las generales de julio de 2023 se integra en la coalición Sumar, sin Irene Montero en las listas. Cinco de los 31 diputados de Sumar son de Podemos. Queda fuera del nuevo Gobierno al no aceptar que Montero dejara Igualdad.',
        'El 5 de diciembre de 2023 deja el grupo de Sumar y pasa al Grupo Mixto. En las europeas de 2024, en solitario y con Montero de cabeza de lista, logra el 3,28 % y dos escaños, por detrás de Se Acabó la Fiesta.',
        'En abril de 2025 su asamblea reelige a Belarra. El 12 de septiembre de 2026 Montero anuncia que quiere ser la candidata de Podemos a las generales del 29N. Tras la convocatoria, el partido propone unas primarias abiertas el 14 y 15 de octubre para pactar una candidatura conjunta con el Frente Amplio.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2014–2024',
      parrafos: [
        'Financiación: desde su fundación, medios y partidos lo han vinculado con una supuesta financiación de Venezuela e Irán. Según la Wikipedia, el Supremo ha considerado legal su financiación en tres ocasiones y en 2022 se habían archivado una veintena de querellas e investigaciones por falta de pruebas o de indicios.',
        'Caso Neurona: se investigó si un contrato de 363.000 euros con una consultora mexicana en la campaña de abril de 2019 era simulado. El juez lo archivó y la Audiencia de Madrid, en octubre de 2024, rechazó el recurso de Vox: concluyó que el precio era incluso inferior al de mercado.',
        'Alberto Rodríguez: en octubre de 2021 el Supremo condenó a este diputado de Unidas Podemos por dar una patada a un policía en una protesta de 2014; la pena de un mes y quince días de prisión se sustituyó por 540 euros de multa. La presidenta del Congreso le retiró el escaño. En enero de 2024 el Constitucional, por 7 votos a 4, anuló esa retirada.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Pablo Iglesias', cargo: 'Secretario general', desde: '2014', hasta: '2021' },
    { nombre: 'Ione Belarra', cargo: 'Secretaria general', desde: '2021' },
    { nombre: 'Irene Montero', cargo: 'Aspirante a candidata a las generales', desde: '2026' },
  ],
  notaTrayectoria:
    'Los escaños incluyen sus coaliciones: con Izquierda Unida desde 2016 y con En Comú, Compromís o En Marea en sus territorios. En 2023 concurrió dentro de Sumar, por eso ese año no aparece aquí.',
  fuentes: [
    wikipedia('Podemos', 'Podemos'),
    wikipedia('Íñigo Errejón', 'Íñigo_Errejón'),
    {
      titulo: 'Vozpópuli: La Justicia confirma el archivo del caso Neurona (09/10/2024)',
      url: 'https://www.vozpopuli.com/espana/justicia-confirma-archivo-caso-neurona-podemos.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Diario de Avisos: El Constitucional anula la retirada del escaño a Alberto Rodríguez (31/01/2024)',
      url: 'https://diariodeavisos.elespanol.com/2024/01/el-constitucional-anula-la-retirada-del-escano-al-exdiputado-alberto-rodriguez/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: Irene Montero hará primarias para ser candidata de Podemos (12/09/2026)',
      url: 'https://orain.eus/en/politika/2026/09/12/irene-montero-to-hold-primary-election-for-podemos/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: Los partidos aceleran la designación de sus listas (06/10/2026)',
      url: 'https://orain.eus/es/politica/2026/10/06/el-anuncio-sanchez-obliga-los-partidos-acelerar-el-proceso-designar-sus-listas-electorales-asi-apuran-los-plazos/',
      consultada: C,
      oficial: false,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
