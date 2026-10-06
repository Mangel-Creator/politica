import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaERC: HistoriaDetallada = {
  partidoId: 'erc',
  entradilla:
    'Partido republicano e independentista catalán, fundado en 1931. Gobernó la Generalitat durante la Segunda República, pasó la dictadura en la clandestinidad y en el exilio, y ha vuelto a gobernar Cataluña en coalición y en solitario.',
  capitulos: [
    {
      titulo: 'Fundación y Segunda República',
      periodo: '1931–1939',
      parrafos: [
        'Nace en Barcelona, en la conferencia del 17 al 20 de marzo de 1931, de la unión del Partit Republicà Català (Lluís Companys), Estat Català (Francesc Macià) y el grupo L’Opinió. Gana las elecciones de ese año y Macià proclama la República Catalana dentro de una federación ibérica. La negociación con el Gobierno provisional desemboca en el Estatuto de Autonomía de 1932.',
        'En octubre de 1934 Companys, presidente de la Generalitat, proclama el Estado Catalán; el Gobierno declara el estado de guerra, Companys es encarcelado y la autonomía queda suspendida. En 1936 ERC forma parte del Frente Popular, que gana las elecciones, y Companys vuelve a presidir la Generalitat durante la Guerra Civil.',
      ],
    },
    {
      titulo: 'Represión y exilio',
      periodo: '1939–1975',
      parrafos: [
        'Tras la guerra, según el artículo de referencia, la mitad de sus 70.000 militantes se exilia y una cuarta parte es encarcelada, ejecutada o muere en la contienda. En 1940 la Gestapo detiene a Companys en Francia y lo entrega a las autoridades españolas; es fusilado en Montjuïc el 15 de octubre.',
        'Josep Tarradellas dirige el partido en el exilio y en 1959 es elegido presidente de la Generalitat en el exilio. En 1964 ERC coorganiza la primera manifestación antifranquista de la Diada en Barcelona.',
      ],
    },
    {
      titulo: 'Transición',
      periodo: '1976–1989',
      parrafos: [
        'Es el último partido catalán en ser legalizado. En 1977 se presenta como Esquerra de Catalunya-Front Electoral Democràtic y Heribert Barrera obtiene un escaño. Pide el «no» a la Constitución de 1978, porque no reconoce la república ni la autodeterminación, y el «sí» al Estatuto de 1979.',
        'En 1980 logra 14 diputados en Cataluña y sus votos son clave para investir a Jordi Pujol (CiU). Después llega una larga crisis: en 1984 baja a cinco escaños y entre 1986 y 1993 se queda fuera del Congreso.',
      ],
    },
    {
      titulo: 'Independentismo como objetivo',
      periodo: '1989–2003',
      parrafos: [
        'En 1989, con Àngel Colom de secretario general, aprueba la independencia de los Países Catalanes como objetivo. A principios de los noventa media en la disolución del grupo armado Terra Lliure y ofrece integrar a quienes dejen la violencia.',
        'Vuelve al Congreso en 1993 con Pilar Rahola. En 1996 Colom y Rahola se marchan y fundan el Partit per la Independència; Josep-Lluís Carod-Rovira pasa a ser secretario general y orienta el partido hacia la izquierda catalana.',
      ],
    },
    {
      titulo: 'Los tripartitos',
      periodo: '2003–2010',
      parrafos: [
        'En 2003 obtiene 23 escaños en Cataluña y pacta con el PSC e ICV el gobierno de Pasqual Maragall. En enero de 2004 se conoce que Carod-Rovira, como conseller en cap, se reunió en secreto con dirigentes de ETA en Perpiñán, y es apartado del cargo.',
        'En las generales de 2004 sube de uno a ocho diputados y apoya la investidura de Zapatero. En 2006 pide el «no» al nuevo Estatuto por considerarlo recortado; Maragall cesa a sus consejeros y el texto se aprueba en referéndum con el 73,9 %.',
        'Repite gobierno con José Montilla (2006–2010). En las generales de 2008 cae a tres diputados y en las catalanas de 2010 pasa de 21 a 10 escaños.',
      ],
    },
    {
      titulo: 'El procés',
      periodo: '2011–2021',
      parrafos: [
        'Oriol Junqueras es elegido presidente en 2011. Desde 2016 es vicepresidente del Govern de Carles Puigdemont, que convoca el referéndum del 1 de octubre de 2017, suspendido por el Tribunal Constitucional; el 27 de octubre el Parlament declara la independencia y el Senado aplica el artículo 155.',
        'Junqueras ingresa en prisión preventiva en noviembre de 2017. En octubre de 2019 el Supremo lo condena a 13 años por sedición y malversación. En junio de 2021, días después de escribir que apostaba por un referéndum pactado y no por la vía unilateral, es indultado junto al resto de presos del procés.',
        'En las generales de abril de 2019 alcanza 15 diputados, su máximo en el Congreso.',
      ],
    },
    {
      titulo: 'De la presidencia catalana a la oposición',
      periodo: 'desde 2021',
      parrafos: [
        'Pere Aragonès preside la Generalitat desde mayo de 2021, al principio con Junts, que abandona el Govern en octubre de 2022. En 2023 ERC pacta con el PSOE la investidura de Pedro Sánchez, que incluye la ley de amnistía, el traspaso de Rodalies y condonar 15.000 millones de deuda de la Generalitat.',
        'En las catalanas de mayo de 2024 baja de 33 a 20 escaños; Aragonès deja la primera línea política y en agosto ERC apoya la investidura del socialista Salvador Illa. Junqueras vuelve a ser elegido presidente del partido en diciembre de 2024, con Elisenda Alamany de secretaria general.',
        'El Tribunal Constitucional avaló la ley de amnistía en junio de 2025. El Supremo no la aplicó a la malversación de Junqueras. El 6 de octubre de 2026 el Constitucional fijó, en el recurso de la exconsellera de ERC Dolors Bassa, que esa interpretación del Supremo no se ajusta a la ley; los recursos de otros dirigentes seguían pendientes.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Francesc Macià', cargo: 'Presidente', desde: '1932', hasta: '1933' },
    { nombre: 'Lluís Companys', cargo: 'Presidente', desde: '1936', hasta: '1940' },
    { nombre: 'Heribert Barrera', cargo: 'Secretario general', desde: '1976', hasta: '1987' },
    { nombre: 'Àngel Colom', cargo: 'Secretario general', desde: '1989', hasta: '1996' },
    { nombre: 'Josep-Lluís Carod-Rovira', cargo: 'Secretario general y presidente', desde: '1996', hasta: '2008' },
    { nombre: 'Joan Puigcercós', cargo: 'Presidente', desde: '2008', hasta: '2011' },
    { nombre: 'Oriol Junqueras', cargo: 'Presidente', desde: '2011' },
    { nombre: 'Marta Rovira', cargo: 'Secretaria general', desde: '2011', hasta: '2024' },
    { nombre: 'Elisenda Alamany', cargo: 'Secretaria general', desde: '2024' },
  ],
  notaTrayectoria:
    'En 1977, sin legalizar, se presentó como Esquerra de Catalunya-Front Electoral Democràtic; las siglas de cada año reflejan sus coaliciones (Catalunya Sí, Sobiranistes).',
  fuentes: [
    wikipedia('Esquerra Republicana de Catalunya', 'Esquerra_Republicana_de_Catalunya'),
    wikipedia('Oriol Junqueras', 'Oriol_Junqueras'),
    wikipedia('Pere Aragonès', 'Pere_Aragonès'),
    wikipedia('Salvador Illa', 'Salvador_Illa'),
    wikipedia('Ley de amnistía de España de 2024', 'Ley_de_amnistía_de_España_de_2024'),
    {
      titulo: 'Infobae: el aval del Constitucional a la amnistía de la malversación (06/10/2026)',
      url: 'https://www.infobae.com/espana/2026/10/06/puigdemont-podra-volver-a-espana-antes-de-las-elecciones-el-aval-del-constitucional-a-la-amnistia-despeja-el-camino-para-que-el-juez-levante-su-orden-de-detencion/',
      consultada: C,
      oficial: false,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
