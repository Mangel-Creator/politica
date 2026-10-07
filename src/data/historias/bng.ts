import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

export const HistoriaBNG: HistoriaDetallada = {
  partidoId: 'bng',
  entradilla:
    'Frente nacionalista gallego fundado en 1982. Agrupa partidos (el mayoritario, la UPG) y afiliados independientes, que son la mayoría de la militancia. Solo se presenta en Galicia.',
  capitulos: [
    {
      titulo: 'Antes del BNG',
      periodo: '1964–1981',
      parrafos: [
        'En los años sesenta nacen la Unión do Povo Galego (UPG, comunista) y el Partido Socialista Galego (PSG). En 1975 la UPG impulsa la Asemblea Nacional-Popular Galega (AN-PG) como plataforma de movilización y base de una futura candidatura nacionalista.',
        'En las primeras elecciones gallegas (1981), UPG y PSG concurren juntos como Bloque Nacional-Popular Galego y logran tres escaños. Sus diputados se niegan a jurar la Constitución y son expulsados del Parlamento.',
      ],
    },
    {
      titulo: 'Fundación y giro posibilista',
      periodo: '1982–1990',
      parrafos: [
        'La asamblea constituyente se celebra en A Coruña el 25 y 26 de septiembre de 1982, con la AN-PG, la UPG, el PSG y colectivos independientes. El PSG se marcha un año después.',
        'En 1985 obtiene un escaño en Galicia (Xosé Manuel Beiras). Tras una escisión de la UPG en 1986, el BNG opta por una línea más moderada. En 1987 expulsa al PCLN por apoyar a Herri Batasuna en las europeas, y en 1989 su IV Asamblea rechaza la violencia terrorista.',
        'En 1989 consigue por primera vez grupo propio en el Parlamento gallego: cinco escaños y el 8 % de los votos.',
      ],
    },
    {
      titulo: 'Crecimiento',
      periodo: '1991–2001',
      parrafos: [
        'Se incorporan el PNG-PG (1991), Esquerda Nacionalista (1992) e Inzar (1993). En las autonómicas de 1993 logra trece escaños (18,5 %); después se suma también Unidade Galega.',
        'Entra en el Congreso en 1996 con dos diputados y sube a tres en 2000. En las gallegas de 1997 es segunda fuerza por primera vez, por delante del PSdeG-PSOE, con dieciocho escaños (24,8 %). En 1999 consigue un eurodiputado, Camilo Nogueira.',
      ],
    },
    {
      titulo: 'Gobierno bipartito y retroceso',
      periodo: '2001–2012',
      parrafos: [
        'En 2001 empata a diecisiete escaños con el PSdeG. En 2003 Anxo Quintana releva a Beiras como portavoz nacional y candidato.',
        'Tras las autonómicas de 2005, en las que el PP pierde la mayoría absoluta, el BNG entra en un gobierno de coalición con el socialista Emilio Pérez Touriño: Quintana es vicepresidente y el BNG dirige además las consejerías de Cultura, Industria, Medio Rural y Vivienda. El PP recupera la mayoría absoluta en 2009 y Quintana dimite con toda la ejecutiva.',
        'Guillerme Vázquez, con una lista apoyada por la UPG, gana la asamblea extraordinaria de 2009. En 2012 se van Encontro Irmandiño (Beiras), Máis Galiza, el PNG-PG y Esquerda Nacionalista; unos se integran en Anova y otros en Compromiso por Galicia.',
      ],
    },
    {
      titulo: 'Mínimos y recuperación',
      periodo: '2012–2019',
      parrafos: [
        'En las gallegas de 2012 baja de doce a siete escaños, por detrás de Alternativa Galega de Esquerda. En 2013 Xavier Vence es elegido portavoz y la asamblea fija la independencia como objetivo del partido.',
        'En 2015 se presenta a las generales en la coalición Nós-Candidatura Galega y se queda sin escaño. En 2016 Ana Pontón, primera mujer en el cargo, es elegida portavoz nacional.',
      ],
    },
    {
      titulo: 'Vuelta al Congreso',
      periodo: 'desde 2019',
      parrafos: [
        'En noviembre de 2019 recupera un escaño en el Congreso, por A Coruña (Néstor Rego), y lo revalida en 2023. Ese año vota a favor de la investidura de Pedro Sánchez.',
        'Con Pontón de candidata mejora en cada autonómica (2016, 2020 y 2024) hasta 25 diputados, su máximo histórico. Gobierna, entre otras, las alcaldías de Santiago de Compostela y Pontevedra.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Xosé Manuel Beiras', cargo: 'Candidato a la Xunta', desde: '1985', hasta: '2001' },
    { nombre: 'Anxo Quintana', cargo: 'Portavoz nacional', desde: '2003', hasta: '2009' },
    { nombre: 'Guillerme Vázquez', cargo: 'Portavoz nacional', desde: '2009', hasta: '2013' },
    { nombre: 'Xavier Vence', cargo: 'Portavoz nacional', desde: '2013', hasta: '2016' },
    { nombre: 'Ana Pontón', cargo: 'Portavoz nacional', desde: '2016' },
  ],
  notaTrayectoria: 'En 2015 se presentó en la coalición Nós-Candidatura Galega, que no obtuvo escaño.',
  fuentes: [
    wikipedia('Bloque Nacionalista Galego', 'Bloque_Nacionalista_Galego'),
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
