import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaJunts: HistoriaDetallada = {
  partidoId: 'junts',
  entradilla:
    'Partido independentista catalán liderado por Carles Puigdemont. Recoge el espacio de la antigua Convergència (CDC), que gobernó Cataluña con CiU, aunque como partido funciona desde 2020.',
  capitulos: [
    {
      titulo: 'Antecedentes: Convergència i Unió',
      periodo: '1978–2016',
      parrafos: [
        'Convergència Democràtica de Catalunya (CDC) y Unió Democràtica (UDC) concurren juntas como Convergència i Unió (CiU). Jordi Pujol preside la Generalitat de 1980 a 2003, la primera vez con los votos de ERC. CiU vuelve al Govern en 2010.',
        'En junio de 2015 CiU se rompe. CDC se presenta a las catalanas de ese año dentro de Junts pel Sí, con ERC, y en julio de 2016 da paso al Partit Demòcrata Europeu Català (PDeCAT).',
      ],
    },
    {
      titulo: 'Puigdemont y el 1 de octubre',
      periodo: '2016–2017',
      parrafos: [
        'Carles Puigdemont es presidente de la Generalitat desde enero de 2016, con Oriol Junqueras (ERC) de vicepresidente. Su Govern convoca el referéndum del 1 de octubre de 2017 y el 27 de octubre el Parlament declara la independencia.',
        'El 28 de octubre Puigdemont es cesado con el artículo 155 y al día siguiente se marcha a Bélgica para eludir la acción judicial. Se dictan órdenes de detención; la euroorden se retira, pero la orden nacional sigue vigente.',
        'En diciembre de 2017 la candidatura Junts per Catalunya, una coalición de CDC y PDeCAT encabezada por Puigdemont, concurre a las elecciones catalanas.',
      ],
    },
    {
      titulo: 'Nace el partido',
      periodo: '2018–2021',
      parrafos: [
        'El PDeCAT inscribe en 2018 un partido con el nombre Junts per Catalunya para conservar la marca, pero sin actividad propia. En 2020 el entorno de Puigdemont toma su control y lo separa del PDeCAT, que lo critica por considerar suya la marca.',
        'El congreso fundacional (julio–octubre de 2020) elige a Puigdemont presidente y a Jordi Sànchez secretario general. Desde Bélgica, Puigdemont había sido elegido eurodiputado en 2019.',
        'En las catalanas de 2021, con Laura Borràs de candidata, logra 32 escaños y gobierna en coalición con ERC presidida por Pere Aragonès. Borràs pasa a presidir el Parlament.',
      ],
    },
    {
      titulo: 'Fuera del Govern y llave en Madrid',
      periodo: '2022–2024',
      parrafos: [
        'En 2022 Borràs asume la presidencia del partido y Jordi Turull la secretaría general. En octubre, tras una consulta a la militancia (55 % a favor), Junts abandona el Govern.',
        'En las generales de 2023 obtiene siete diputados. El 9 de noviembre pacta con el PSOE la investidura de Pedro Sánchez, que incluye la ley de amnistía, aprobada en 2024.',
        'En las catalanas de mayo de 2024 Puigdemont es candidato y Junts sube a 35 escaños, segunda fuerza. En octubre de 2024 Puigdemont vuelve a ser elegido presidente del partido.',
      ],
    },
    {
      titulo: 'Ruptura con el PSOE',
      periodo: 'desde 2025',
      parrafos: [
        'El 27 de octubre de 2025 Puigdemont anuncia que Junts rompe el pacto de investidura con el PSOE porque, según el partido, el Gobierno ha incumplido lo acordado sobre Cataluña. Pasa a la oposición sin presentar moción de censura.',
        'En agosto de 2026 entra como miembro de pleno derecho en el Partido Demócrata Europeo.',
        'El 6 de octubre de 2026 el Tribunal Constitucional fija que el Supremo debe aplicar la amnistía a la malversación del procés. El recurso de Puigdemont sigue pendiente y su orden de detención aún no se ha levantado.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2019–2025',
      parrafos: [
        'Jordi Turull, secretario general desde 2022, fue condenado por el Supremo en 2019 a 12 años por sedición y malversación, como exconseller del Govern de Puigdemont. Fue indultado en 2021.',
        'Laura Borràs, presidenta del partido entre 2022 y 2024, fue condenada en 2023 por el Tribunal Superior de Justicia de Cataluña a cuatro años y medio de prisión y 13 de inhabilitación por prevaricación y falsedad en contratos de la Institució de les Lletres Catalanes. El Supremo confirmó la condena y descartó aplicarle la amnistía por no estar relacionada con el procés. El propio tribunal pidió un indulto parcial, que debe decidir el Gobierno.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Carles Puigdemont', cargo: 'Presidente', desde: '2020', hasta: '2022' },
    { nombre: 'Laura Borràs', cargo: 'Presidenta', desde: '2022', hasta: '2024' },
    { nombre: 'Carles Puigdemont', cargo: 'Presidente', desde: '2024' },
    { nombre: 'Jordi Sànchez', cargo: 'Secretario general', desde: '2020', hasta: '2022' },
    { nombre: 'Jordi Turull', cargo: 'Secretario general', desde: '2022' },
  ],
  notaTrayectoria:
    'Hasta 2016 se muestran sus antecesores: el Pacte Democràtic per Catalunya (1977), CiU (1979–2011), Democràcia i Llibertat (2015) y CDC (2016). Junts concurre con su nombre desde 2019.',
  fuentes: [
    wikipedia('Junts per Catalunya (partido político)', 'Junts_per_Catalunya_(partido_político)'),
    wikipedia('Carles Puigdemont', 'Carles_Puigdemont'),
    wikipedia('Esquerra Republicana de Catalunya', 'Esquerra_Republicana_de_Catalunya'),
    wikipedia('Oriol Junqueras', 'Oriol_Junqueras'),
    wikipedia('Ley de amnistía de España de 2024', 'Ley_de_amnistía_de_España_de_2024'),
    wikiTercerGobierno,
    {
      titulo: 'Ara: La Fiscalía avala que Borràs no entre en prisión a la espera del indulto',
      url: 'https://es.ara.cat/politica/fiscalia-avala-borras-no-prision-espera-decision-indulto_1_5327987.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Infobae: el aval del Constitucional a la amnistía de la malversación (06/10/2026)',
      url: 'https://www.infobae.com/espana/2026/10/06/puigdemont-podra-volver-a-espana-antes-de-las-elecciones-el-aval-del-constitucional-a-la-amnistia-despeja-el-camino-para-que-el-juez-levante-su-orden-de-detencion/',
      consultada: C,
      oficial: false,
    },
    infoelectoralHistorico,
  ],
};
