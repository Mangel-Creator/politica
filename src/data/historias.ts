import type { Fuente } from './tipos';

export type Hito = { anio: string; texto: string };

export type Historia = {
  partidoId: string;
  fundacion: string;
  /** De dónde viene, en una o dos frases. */
  origen: string;
  /** Campos "Ideología" y "Posición" de la ficha de Wikipedia, sin retocar. */
  ideologia: string;
  posicion: string;
  liderazgo: string;
  hitos: Hito[];
  /** Casos judiciales con sentencia firme o relevancia histórica, con su desenlace completo. */
  judicial?: Hito[];
  fuentes: Fuente[];
};

const CONSULTA = '2026-10-06';
const medio = (titulo: string, url: string): Fuente => ({ titulo, url, consultada: CONSULTA, oficial: false });
const wiki = (titulo: string, ruta: string): Fuente => ({
  titulo: `Wikipedia: ${titulo}`,
  url: `https://es.wikipedia.org/wiki/${ruta}`,
  consultada: CONSULTA,
  oficial: false,
});

/**
 * Historia de cada partido. Mismo formato y misma fuente principal (Wikipedia) para
 * todos; los hechos delicados se contrastan con una segunda fuente. La ideología es la
 * que figura en la ficha de Wikipedia, no una valoración de la app.
 */
export const Historias: Historia[] = [
  {
    partidoId: 'bng',
    fundacion: '1982',
    origen: 'Nace en A Coruña en 1982 como frente que agrupa a la UPG, la AN-PG y otros grupos nacionalistas gallegos.',
    ideologia: 'Nacionalismo gallego de izquierda, soberanismo, feminismo, antiatlantismo',
    posicion: 'Izquierda',
    liderazgo: 'Ana Pontón, portavoz nacional desde 2016',
    hitos: [
      { anio: '1997', texto: 'Segunda fuerza en Galicia por primera vez (18 escaños).' },
      { anio: '2005–2009', texto: 'Gobierna la Xunta en coalición con el PSdeG; Anxo Quintana, vicepresidente.' },
      { anio: '2012', texto: 'Sufre varias escisiones y cae a su peor momento.' },
      { anio: '2019', texto: 'Vuelve al Congreso con un diputado (Néstor Rego).' },
      { anio: '2024', texto: 'Récord en las autonómicas: 25 escaños y 31,3 % de los votos.' },
    ],
    fuentes: [wiki('Bloque Nacionalista Galego', 'Bloque_Nacionalista_Galego')],
  },
  {
    partidoId: 'cc',
    fundacion: '1993',
    origen:
      'Se forma en 1993 uniendo a AIC, INC, Asamblea Majorera, PNC y Centro Canario Independiente tras una moción de censura al Gobierno canario del PSOE.',
    ideologia: 'Nacionalismo canario, liberalismo progresista',
    posicion: 'Centro a centroderecha',
    liderazgo: 'Fernando Clavijo, secretario general y presidente de Canarias',
    hitos: [
      {
        anio: '1993–2019',
        texto:
          'Preside el Gobierno de Canarias sin interrupción: Hermoso, Román Rodríguez, Adán Martín, Paulino Rivero y Clavijo.',
      },
      { anio: '2005', texto: 'Se escinde Nueva Canarias, liderada por Román Rodríguez.' },
      { anio: '2019', texto: 'Pierde la presidencia canaria.' },
      { anio: '2023', texto: 'La recupera con Clavijo, en coalición con el PP; un diputado en el Congreso.' },
    ],
    fuentes: [wiki('Coalición Canaria', 'Coalición_Canaria')],
  },
  {
    partidoId: 'eh-bildu',
    fundacion: '2012',
    origen:
      'Coalición presentada en 2012 que une a Sortu (izquierda abertzale), Eusko Alkartasuna, Aralar y Alternatiba; en 2017 se convierte en partido.',
    ideologia: 'Nacionalismo vasco, izquierda abertzale, independentismo vasco, soberanismo, socialismo',
    posicion: 'Izquierda a extrema izquierda',
    liderazgo: 'Arnaldo Otegi, coordinador general desde 2017',
    hitos: [
      { anio: '2011', texto: 'Precedentes: Bildu (municipales) y Amaiur (generales).' },
      { anio: '2012', texto: 'Presentación de EH Bildu; el Tribunal Constitucional había legalizado Sortu.' },
      { anio: '2017', texto: 'Se refunda como partido; Aralar se disuelve y se integra.' },
      {
        anio: '2023',
        texto:
          'Polémica por incluir en las municipales a 44 candidatos condenados por pertenencia o colaboración con ETA; siete renunciaron.',
      },
    ],
    fuentes: [wiki('Euskal Herria Bildu', 'Euskal_Herria_Bildu')],
  },
  {
    partidoId: 'erc',
    fundacion: '1931',
    origen: 'Fundada en Barcelona el 19 de marzo de 1931 por la unión de tres grupos, con Francesc Macià al frente.',
    ideologia: 'Socialdemocracia, independentismo catalán, nacionalismo de izquierda, republicanismo',
    posicion: 'Centroizquierda a izquierda',
    liderazgo: 'Oriol Junqueras (presidente) y Elisenda Alamany (secretaria general)',
    hitos: [
      { anio: '1931–1939', texto: 'Gobierna la Generalitat con Macià y Companys durante la República.' },
      { anio: '1940', texto: 'Lluís Companys es fusilado en Montjuïc; el partido pasa al exilio.' },
      { anio: '2003–2010', texto: 'Gobierna en el tripartito con PSC e ICV.' },
      { anio: '2017', texto: 'Participa en el referéndum del 1 de octubre y el "procés".' },
    ],
    judicial: [
      { anio: '2019', texto: 'El Supremo condena a Junqueras a 13 años por sedición y malversación.' },
      { anio: '2021', texto: 'El Gobierno indulta a los condenados del "procés".' },
    ],
    fuentes: [
      wiki('Esquerra Republicana de Catalunya', 'Esquerra_Republicana_de_Catalunya'),
      {
        titulo: 'Orain: el Consejo de Ministros aprueba los indultos a los presos del "procés"',
        url: 'https://orain.eus/es/politica/2021/06/22/el-consejo-de-ministros-aprueba-indultos-a-presos-del-proces/',
        consultada: CONSULTA,
        oficial: false,
      },
    ],
  },
  {
    partidoId: 'junts',
    fundacion: '2020',
    origen:
      'Viene de Convergència (CiU) y del PDeCAT. En 2017 fue la candidatura de Carles Puigdemont; en 2020 se convierte en partido.',
    ideologia: 'Independentismo catalán, centroderecha, socioliberalismo',
    posicion: 'Centroderecha',
    liderazgo: 'Carles Puigdemont (presidente) y Jordi Turull (secretario general)',
    hitos: [
      { anio: '2015', texto: 'Se rompe Convergència i Unió (CiU).' },
      { anio: '2017', texto: 'La lista "Junts per Catalunya" de Puigdemont concurre a las autonómicas.' },
      { anio: '2020', texto: 'Puigdemont y su entorno lo convierten en partido.' },
      { anio: '2022', texto: 'Sale del Govern catalán.' },
      { anio: '2023', texto: 'Acuerdo con el PSOE para investir a Pedro Sánchez, que incluye la ley de amnistía.' },
    ],
    judicial: [
      {
        anio: '2019',
        texto:
          'Jordi Turull, hoy secretario general, condenado por el Supremo a 12 años por sedición y malversación; indultado en 2021.',
      },
    ],
    fuentes: [
      wiki('Junts per Catalunya (partido político)', 'Junts_per_Catalunya_(partido_político)'),
      {
        titulo: 'El Independiente: Sentencia del procés',
        url: 'https://www.elindependiente.com/?p=860502',
        consultada: CONSULTA,
        oficial: false,
      },
    ],
  },
  {
    partidoId: 'pnv',
    fundacion: '1895',
    origen: 'Fundado por Sabino Arana en Bilbao el 31 de julio de 1895.',
    ideologia: 'Nacionalismo vasco, socialdemocracia, democracia cristiana, liberalismo',
    posicion: 'Centroderecha a centroizquierda',
    liderazgo: 'Aitor Esteban, presidente desde 2025',
    hitos: [
      { anio: '1936', texto: 'José Antonio Aguirre, primer lehendakari, con el primer Estatuto vasco.' },
      { anio: '1979', texto: 'Se aprueba el Estatuto de Gernika.' },
      { anio: '1980–2009', texto: 'Preside sin interrupción el Gobierno Vasco.' },
      { anio: '1986', texto: 'Se escinde Eusko Alkartasuna, con Carlos Garaikoetxea.' },
      { anio: '2012', texto: 'Vuelve a la presidencia vasca tras el Gobierno de Patxi López (PSE).' },
    ],
    fuentes: [wiki('Partido Nacionalista Vasco', 'Partido_Nacionalista_Vasco')],
  },
  {
    partidoId: 'podemos',
    fundacion: '2014',
    origen:
      'Presentado el 17 de enero de 2014 en Madrid por Pablo Iglesias, Juan Carlos Monedero, Íñigo Errejón y Teresa Rodríguez, entre otros.',
    ideologia: 'Socialismo democrático, progresismo, feminismo, republicanismo, federalismo',
    posicion: 'Izquierda a extrema izquierda',
    liderazgo: 'Ione Belarra, secretaria general desde 2021',
    hitos: [
      { anio: '2014', texto: 'Entra en el Parlamento Europeo con 5 escaños.' },
      { anio: '2015', texto: '69 diputados en sus primeras generales (con sus aliados).' },
      { anio: '2016', texto: '71 diputados como Unidos Podemos, con Izquierda Unida.' },
      { anio: '2020–2023', texto: 'Forma parte del Gobierno de coalición con el PSOE.' },
      { anio: '2023', texto: 'Concurre dentro de Sumar y en diciembre deja su grupo para irse al Mixto.' },
    ],
    fuentes: [wiki('Podemos', 'Podemos')],
  },
  {
    partidoId: 'pp',
    fundacion: '1989',
    origen: 'Refundación en 1989 de Alianza Popular, creada en 1976 por Manuel Fraga.',
    ideologia: 'Conservadurismo, conservadurismo liberal, democracia cristiana, europeísmo, nacionalismo español',
    posicion: 'Centroderecha a derecha',
    liderazgo: 'Alberto Núñez Feijóo, presidente desde 2022',
    hitos: [
      { anio: '1996–2004', texto: 'Gobierna con José María Aznar.' },
      { anio: '2000', texto: 'Mejor resultado: 183 escaños (mayoría absoluta).' },
      { anio: '2011–2018', texto: 'Gobierna con Mariano Rajoy.' },
      { anio: '2018', texto: 'Rajoy cae en la primera moción de censura que prosperó en democracia.' },
      { anio: '2023', texto: 'Gana las generales con 137 escaños pero no logra la investidura.' },
    ],
    judicial: [
      {
        anio: '2018',
        texto:
          'La Audiencia Nacional condena al PP como "partícipe a título lucrativo" del caso Gürtel (245.492,80 €).',
      },
      {
        anio: '2020',
        texto:
          'El Supremo confirma esa condena y el pago, pero corrige los párrafos que daban por acreditada una "caja B" del partido: no se le había acusado de eso.',
      },
    ],
    fuentes: [
      wiki('Partido Popular', 'Partido_Popular'),
      wiki('Caso Gürtel', 'Caso_Gürtel'),
      medio(
        'Público: El Supremo confirma la condena al PP por la Gürtel (14/10/2020)',
        'https://www.publico.es/politica/supremo-confirma-condena-al-pp-guertel.html',
      ),
      medio(
        'Libertad Digital: El Supremo ve contradictoria la condena al PP (14/10/2020)',
        'https://www.libertaddigital.com/espana/2020-10-14/el-supremo-penas-gurtel-condena-pp-contradictoria-6669927/',
      ),
    ],
  },
  {
    partidoId: 'psoe',
    fundacion: '1879',
    origen: 'Fundado en Madrid el 2 de mayo de 1879 por Pablo Iglesias Posse.',
    ideologia: 'Socialdemocracia, socioliberalismo, progresismo, economía mixta',
    posicion: 'Centroizquierda',
    liderazgo: 'Pedro Sánchez, secretario general desde 2017',
    hitos: [
      { anio: '1939–1977', texto: 'En la clandestinidad y el exilio durante el franquismo.' },
      { anio: '1974', texto: 'Congreso de Suresnes: Felipe González toma el mando.' },
      { anio: '1982', texto: 'Mejor resultado de la democracia: 202 escaños.' },
      { anio: '1982–1996', texto: 'Gobierna con Felipe González.' },
      { anio: '2004–2011', texto: 'Gobierna con José Luis Rodríguez Zapatero.' },
      { anio: '2018', texto: 'Pedro Sánchez llega al Gobierno por moción de censura.' },
    ],
    judicial: [
      { anio: '1997', texto: 'Caso Filesa: el Supremo condena la financiación ilegal del partido.' },
      {
        anio: '1998',
        texto:
          'Caso Marey (GAL): el Supremo condena al exministro del Interior José Barrionuevo y a Rafael Vera a 10 años.',
      },
      {
        anio: '2022–2024',
        texto:
          'Caso ERE: el Supremo confirma condenas a los expresidentes andaluces Chaves y Griñán; en 2024 el Constitucional anula parte de ellas.',
      },
    ],
    fuentes: [
      wiki('Partido Socialista Obrero Español', 'Partido_Socialista_Obrero_Español'),
      wiki('Grupos Antiterroristas de Liberación', 'Grupos_Antiterroristas_de_Liberación'),
      {
        titulo: 'Maldita.es: qué dicen las sentencias del Constitucional sobre el caso ERE',
        url: 'https://maldita.es/malditateexplica/20240722/sentencias-constitucional-caso-ere-andalucia-penas/',
        consultada: CONSULTA,
        oficial: false,
      },
    ],
  },
  {
    partidoId: 'sumar',
    fundacion: '2023',
    origen:
      'Plataforma impulsada por Yolanda Díaz en 2022; se inscribe como partido en 2023 y encabeza una coalición de 20 formaciones.',
    ideologia: 'Laborismo, ecosocialismo, socialdemocracia, feminismo, federalismo, plurinacionalismo',
    posicion: 'Centroizquierda a izquierda',
    liderazgo: 'Verónica Martínez Barbero y Rosa Martínez, coordinadoras desde julio de 2026',
    hitos: [
      { anio: '2022', texto: 'Yolanda Díaz lanza el "proceso de escucha".' },
      { anio: '2023', texto: 'Coalición de 20 partidos: 31 diputados el 23J (10 de Movimiento Sumar).' },
      { anio: '2023', texto: 'Entra en el Gobierno de coalición con el PSOE.' },
      { anio: '2024', texto: 'Yolanda Díaz deja la coordinación tras las europeas.' },
    ],
    fuentes: [wiki('Movimiento Sumar', 'Movimiento_Sumar')],
  },
  {
    partidoId: 'upn',
    fundacion: '1979',
    origen: 'Fundado en 1979 por Jesús Aizpún y otros miembros de la UCD navarra.',
    ideologia: 'Navarrismo, conservadurismo liberal, democracia cristiana, foralismo',
    posicion: 'Centroderecha',
    liderazgo: 'Cristina Ibarrola, presidenta desde 2024',
    hitos: [
      { anio: '1991–2008', texto: 'Pacto con el PP: el PP no se presenta en Navarra.' },
      { anio: '1991–2015', texto: 'Preside casi siempre el Gobierno de Navarra (Alli, Sanz, Barcina).' },
      { anio: '2019', texto: 'Coalición Navarra Suma con PP y Ciudadanos.' },
      { anio: '2023', texto: 'Primera fuerza en el Parlamento navarro (15 escaños) y un diputado en el Congreso.' },
    ],
    fuentes: [wiki('Unión del Pueblo Navarro', 'Unión_del_Pueblo_Navarro')],
  },
  {
    partidoId: 'vox',
    fundacion: '2013',
    origen:
      'Inscrito el 17 de diciembre de 2013 por antiguos miembros del PP, entre ellos Santiago Abascal, Alejo Vidal-Quadras y José Antonio Ortega Lara.',
    ideologia:
      'Ultraconservadurismo, nacionalismo español, populismo de derecha, euroescepticismo, centralismo, antiinmigración',
    posicion: 'Derecha a extrema derecha',
    liderazgo: 'Santiago Abascal, presidente desde 2014',
    hitos: [
      { anio: '2014–2015', texto: 'Sin escaños en sus primeras europeas y generales.' },
      { anio: '2018', texto: 'Entra en el Parlamento andaluz con 12 escaños.' },
      { anio: '2019', texto: '24 diputados en abril y 52 en noviembre.' },
      {
        anio: '2022–2024',
        texto: 'Gobierna con el PP en varias comunidades (Castilla y León, Aragón, Valenciana, Extremadura…).',
      },
      { anio: '2023', texto: '33 diputados en las generales.' },
    ],
    fuentes: [wiki('Vox (partido político)', 'Vox_(partido_político)')],
  },
];

export function historiaDe(partidoId: string) {
  return Historias.find((h) => h.partidoId === partidoId);
}
