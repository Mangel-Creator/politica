import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaPNV: HistoriaDetallada = {
  partidoId: 'pnv',
  entradilla:
    'Partido nacionalista vasco fundado en 1895; entre los partidos que existen hoy en España, solo el PSOE es más antiguo. Se define democristiano y aconfesional, reivindica el derecho a decidir de los vascos y ha presidido el Gobierno Vasco desde 1980, salvo entre 2009 y 2012.',
  capitulos: [
    {
      titulo: 'Fundación',
      periodo: '1895–1930',
      parrafos: [
        'Sabino Arana lo funda en Bilbao en 1895, tras la abolición de los fueros en 1876 y en plena industrialización de Vizcaya, con el objetivo de un Estado vasco independiente que incluía Navarra y el País Vasco francés. Durante sus primeros años solo tiene presencia en Bilbao.',
        'En sus inicios se basa en la lengua, la religión y la raza, y en la doctrina social de la Iglesia. Su lema, JEL («Dios y ley vieja», en referencia a los fueros), da nombre a sus simpatizantes: jeltzales. En 1911 crea el sindicato ELA-STV, hoy desvinculado del partido.',
        'Su historia alterna un ala fiel a Arana y otra más posibilista. En 1921 se divide entre la Comunión Nacionalista Vasca, mayoritaria y moderada, y Aberri, más independentista; se reunifican en 1930.',
      ],
    },
    {
      titulo: 'República, guerra y exilio',
      periodo: '1930–1975',
      parrafos: [
        'En 1930 se escinde Acción Nacionalista Vasca (ANV), de izquierdas. Con el Estatuto de Autonomía de 1936 el jeltzale José Antonio Aguirre se convierte en el primer lehendakari. Franco suspende el Estatuto y el PNV mantiene la presidencia vasca en el exilio.',
        'En 1947 es socio fundador de la Internacional Demócrata Cristiana, firmada en su sede del exilio en París. En 1958 el grupo Ekin se separa de sus juventudes (EGI) por considerar demasiado moderada su oposición al franquismo; de esa escisión nace después ETA.',
      ],
    },
    {
      titulo: 'Vuelta y Gobierno Vasco',
      periodo: '1977–1998',
      parrafos: [
        'En 1977 se declara aconfesional. En octubre de 1978 convoca una de las primeras manifestaciones masivas contra ETA, a la que ha llamado «terrorismo» y cuyos atentados ha condenado.',
        'Carlos Garaikoetxea, presidente del partido de 1977 a 1980, es lehendakari de 1980 a 1985. Le sucede José Antonio Ardanza (1985–1999). Xabier Arzalluz preside el partido entre 1980 y 1984 y de nuevo de 1987 a 2004.',
        'En 1986 Garaikoetxea, ya exlehendakari y enfrentado con la dirección, encabeza la escisión de Eusko Alkartasuna (EA), socialdemócrata y partidaria de la autodeterminación, que hoy forma parte de EH Bildu.',
      ],
    },
    {
      titulo: 'Estella y el Plan Ibarretxe',
      periodo: '1998–2009',
      parrafos: [
        'El 12 de septiembre de 1998 firma el Pacto de Estella con Herri Batasuna, EA, Izquierda Unida y otras organizaciones, que plantea una solución política negociada «en ausencia de violencia»; el PP y el PSE no participan. Un mes antes, PNV y EA habían firmado con ETA un texto propuesto por esta. ETA declara una tregua el 16 de septiembre y la rompe en noviembre de 1999, responsabilizando al PNV y a EA.',
        'Juan José Ibarretxe es lehendakari de 1999 a 2009. Su propuesta de nuevo Estatuto, conocida como Plan Ibarretxe, planteaba un «estado libre asociado» y el derecho a decidir. El Parlamento Vasco la aprueba el 30 de diciembre de 2004 por 39 votos contra 35, con tres votos decisivos del grupo de Batasuna. El Congreso la rechaza el 1 de febrero de 2005 por 313 votos contra 29.',
        'PP y PSOE la acusaron de ser secesionista e inconstitucional; el Gobierno Vasco respondió que PP y PSE no participaron en su redacción y que ETA la había condenado.',
      ],
    },
    {
      titulo: 'Oposición y regreso',
      periodo: '2009–2024',
      parrafos: [
        'De 2009 a 2012 el lehendakari es el socialista Patxi López: es el único periodo desde 1980 sin presidencia del PNV. Iñigo Urkullu, presidente del partido desde 2008, la recupera en 2012 y la mantiene hasta 2024. Andoni Ortuzar preside el partido de 2013 a 2025.',
        'En Madrid, en mayo de 2018 apoya los Presupuestos de Mariano Rajoy (PP), que incluían inversiones en Euskadi. Días después, el 31 de mayo, anuncia su voto a favor de la moción de censura de Pedro Sánchez, que se aprueba con 180 votos; su portavoz, Aitor Esteban, lo condiciona a que se mantengan esos Presupuestos, como Sánchez había anunciado.',
        'En 2023 vota a favor de la investidura de Pedro Sánchez.',
      ],
    },
    {
      titulo: 'Gobierno con el PSE y relevo',
      periodo: 'desde 2024',
      parrafos: [
        'En las elecciones vascas de abril de 2024 empata a 27 escaños con EH Bildu, pero es el más votado. El 20 de junio Imanol Pradales es investido lehendakari con 39 votos (PNV y PSE) y gobierna en coalición con los socialistas; el PP, Vox y Sumar se abstienen.',
        'En 2025 Aitor Esteban, portavoz en el Congreso desde 2012, sustituye a Ortuzar al frente del partido.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2009–2023',
      parrafos: [
        'Caso De Miguel: tres exmiembros de la ejecutiva del PNV de Álava cobraban comisiones a empresas a cambio de adjudicaciones públicas. La denuncia la presentó en 2009 una abogada que administraba una de esas empresas y a la que, según su testimonio, se exigieron 100.000 euros. La Audiencia de Álava los condenó el 17 de diciembre de 2019.',
        'En enero de 2023 el Supremo confirmó las condenas principales: Alfredo de Miguel, ex número dos del PNV alavés, a 12 años y 4 meses (once meses menos, al absolverlo de tráfico de influencias); Koldo Ochandiano, a 7 años y 6 meses, y Aitor Tellería, a algo más de 5 años. El fiscal había dicho en el juicio que estaban «amparados por todo el establishment del PNV»; el partido denunció «cierto afán persecutorio» contra él y, tras la sentencia, Ortuzar negó que hubiera amiguismo.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Sabino Arana', cargo: 'Fundador y presidente', desde: '1895', hasta: '1903' },
    { nombre: 'Carlos Garaikoetxea', cargo: 'Presidente del partido', desde: '1977', hasta: '1980' },
    { nombre: 'Carlos Garaikoetxea', cargo: 'Lehendakari', desde: '1980', hasta: '1985' },
    { nombre: 'Xabier Arzalluz', cargo: 'Presidente del partido', desde: '1980', hasta: '1984' },
    { nombre: 'José Antonio Ardanza', cargo: 'Lehendakari', desde: '1985', hasta: '1999' },
    { nombre: 'Xabier Arzalluz', cargo: 'Presidente del partido', desde: '1987', hasta: '2004' },
    { nombre: 'Juan José Ibarretxe', cargo: 'Lehendakari', desde: '1999', hasta: '2009' },
    { nombre: 'Josu Jon Imaz', cargo: 'Presidente del partido', desde: '2004', hasta: '2008' },
    { nombre: 'Iñigo Urkullu', cargo: 'Presidente del partido', desde: '2008', hasta: '2013' },
    { nombre: 'Iñigo Urkullu', cargo: 'Lehendakari', desde: '2012', hasta: '2024' },
    { nombre: 'Andoni Ortuzar', cargo: 'Presidente del partido', desde: '2013', hasta: '2025' },
    { nombre: 'Imanol Pradales', cargo: 'Lehendakari', desde: '2024' },
    { nombre: 'Aitor Esteban', cargo: 'Presidente del partido', desde: '2025' },
  ],
  notaTrayectoria: 'Se presenta en solitario a las generales; en Navarra concurre dentro de Geroa Bai.',
  fuentes: [
    wikipedia('Partido Nacionalista Vasco', 'Partido_Nacionalista_Vasco'),
    wikipedia('Lendakari', 'Lendakari'),
    wikipedia('Pacto de Estella', 'Pacto_de_Estella'),
    wikipedia('Plan Ibarretxe', 'Plan_Ibarretxe'),
    wikipedia('Caso De Miguel', 'Caso_De_Miguel'),
    wikipedia('Moción de censura contra Mariano Rajoy de 2018', 'Moción_de_censura_contra_Mariano_Rajoy_de_2018'),
    wikipedia('Aitor Esteban', 'Aitor_Esteban'),
    {
      titulo: 'Menorca.info (Europa Press): El PNV decide apoyar la moción de censura contra Rajoy (31/05/2018)',
      url: 'https://www.menorca.info/actualidad/nacional/2018/05/31/1569828/pnv-decide-apoyar-mocion-censura-contra-mariano-rajoy.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'El Salto: Imanol Pradales ya es lehendakari (20/06/2024)',
      url: 'https://www.elsaltodiario.com/gobierno-vasco/imanol-pradales-es-lehendakari',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'El Salto: El Supremo ratifica las principales penas de los tres miembros del PNV en el caso De Miguel',
      url: 'https://www.elsaltodiario.com/pnv/supremo-ratifica-principales-penas-corrupcion-tres-miembros-caso-miguel',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: El Supremo confirma las principales penas del caso De Miguel (10/01/2023)',
      url: 'https://orain.eus/es/politica/2023/01/10/sentencia-del-caso-de-miguel-ts-confirma-principales-penas-por-corrupcion-impuestas/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Maldita: Resultados clave de las elecciones vascas del 21A (22/04/2024)',
      url: 'https://maldita.es/malditodato/20240422/resultados-claves-elecciones-pais-vasco-21a/',
      consultada: C,
      oficial: false,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
