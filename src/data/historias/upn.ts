import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaUPN: HistoriaDetallada = {
  partidoId: 'upn',
  entradilla:
    'Partido regionalista navarro, fundado en 1979 para que Navarra siguiera siendo una comunidad propia y no se uniera al País Vasco. Ha ganado todas las elecciones navarras desde 1991 y gobernó la comunidad casi sin interrupción entre 1991 y 2015.',
  capitulos: [
    {
      titulo: 'Fundación',
      periodo: '1979–1990',
      parrafos: [
        'La Constitución de 1978 incluyó, por un acuerdo entre UCD, PSOE, AP y el PNV, la disposición transitoria cuarta, que abre la puerta a incorporar Navarra al País Vasco. Una parte de la UCD navarra lo consideró inadmisible y fundó UPN el 3 de enero de 1979, con Jesús Aizpún al frente y militantes de Alianza Foral Navarra.',
        'En las generales de 1979 obtiene un diputado. Desde 1982 se presenta a las generales junto a Alianza Popular. En las forales de 1983 es segunda fuerza y en 1987 consigue por primera vez la alcaldía de Pamplona. En 1989, ya con el PP, es por primera vez el más votado en Navarra.',
      ],
    },
    {
      titulo: 'El pacto con el PP',
      periodo: '1991–2008',
      parrafos: [
        'En 1991 firma con el PP el llamado «modelo bávaro»: el PP deja de presentarse en Navarra y sus militantes se integran en UPN, cuyos diputados y senadores entran en los grupos del PP y aceptan su disciplina de voto. Ese año gana las forales y Juan Cruz Alli preside Navarra.',
        'En 1995 los seguidores de Alli se escinden y crean Convergencia de Demócratas de Navarra (CDN). UPN gana, pero un Gobierno del PSN, CDN y Eusko Alkartasuna la deja fuera. Meses después, escándalos de corrupción de dirigentes socialistas llevan a dimitir al presidente Javier Otano (PSN) y en 1996 Miguel Sanz (UPN) llega a la presidencia, que mantiene hasta 2011.',
        'En las generales de 2000, en coalición con el PP, roza el 50 % de los votos en Navarra.',
      ],
    },
    {
      titulo: 'Ruptura y vuelta a las alianzas',
      periodo: '2008–2019',
      parrafos: [
        'En octubre de 2008 UPN defiende abstenerse en los Presupuestos de Zapatero de 2009 y el PP quiere votar en contra; uno de sus dos diputados se abstiene y el otro vota no. El 28 de octubre el PP rompe el pacto de 1991.',
        'Yolanda Barcina, presidenta del partido desde 2009, gana las forales de 2011 y gobierna con el PSN hasta que la coalición se rompe en 2012. Aun así, en las generales de 2011, 2015 y 2016 UPN vuelve a concurrir con el PP.',
        'En 2015 pierde el Gobierno navarro, que pasa a Uxue Barkos (Geroa Bai) con EH Bildu, Podemos e Izquierda-Ezkerra, y la alcaldía de Pamplona, que pasa a Joseba Asiron (EH Bildu).',
      ],
    },
    {
      titulo: 'Navarra Suma y en solitario',
      periodo: 'desde 2019',
      parrafos: [
        'En 2019 forma la coalición Navarra Suma con el PP y Ciudadanos y veta expresamente a Vox. Obtiene dos diputados en el Congreso.',
        'En febrero de 2022 la dirección acuerda apoyar la reforma laboral de Yolanda Díaz, pero sus dos diputados, Sergio Sayas y Carlos García Adanero, votan en contra. El partido los expulsa y ambos acaban en el PP.',
        'En 2023 concurre en solitario: es primera fuerza en Navarra con 15 escaños y el 28 %, pero María Chivite (PSN) sigue gobernando con la izquierda y el nacionalismo vasco. En las generales obtiene un diputado, que vota a favor de la investidura fallida de Feijóo.',
        'Cristina Ibarrola, alcaldesa de Pamplona hasta la moción de censura de diciembre de 2023, es elegida presidenta del partido en abril de 2024 con el 81 % de los votos.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2013',
      parrafos: [
        'Dietas de Caja Navarra: se investigaron las dietas que cobraban Barcina, el expresidente Sanz, el alcalde de Pamplona Enrique Maya y el exconsejero Álvaro Miranda en un órgano de la caja. En julio de 2013 el Supremo rechazó imputar a Barcina: distinguió entre el reproche moral o político y un delito, y concluyó que no era cohecho. En octubre la jueza de Pamplona archivó toda la causa.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Javier Gómara', cargo: 'Presidente', desde: '1979', hasta: '1985' },
    { nombre: 'Jesús Aizpún', cargo: 'Presidente', desde: '1985', hasta: '1997' },
    { nombre: 'Juan Cruz Alli', cargo: 'Presidente de Navarra', desde: '1991', hasta: '1995' },
    { nombre: 'Miguel Sanz', cargo: 'Presidente', desde: '1997', hasta: '2009' },
    { nombre: 'Miguel Sanz', cargo: 'Presidente de Navarra', desde: '1996', hasta: '2011' },
    { nombre: 'Yolanda Barcina', cargo: 'Presidenta', desde: '2009', hasta: '2015' },
    { nombre: 'Yolanda Barcina', cargo: 'Presidenta de Navarra', desde: '2011', hasta: '2015' },
    { nombre: 'Javier Esparza', cargo: 'Presidente', desde: '2015', hasta: '2024' },
    { nombre: 'Cristina Ibarrola', cargo: 'Presidenta', desde: '2024' },
  ],
  notaTrayectoria:
    'Entre 1982 y 2016 se presentó a las generales junto a AP y luego el PP, y sus escaños figuran dentro de los de esas candidaturas. Aquí solo aparecen 1979, Navarra Suma (2019) y 2023.',
  fuentes: [
    wikipedia('Unión del Pueblo Navarro', 'Unión_del_Pueblo_Navarro'),
    {
      titulo: 'Orain: El Supremo archiva la causa contra Barcina por las dietas de la CAN (24/07/2013)',
      url: 'https://orain.eus/es/politica/2013/07/24/supremo-archiva-barcina-dietas--el-supremo-no-imputara-barcina/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: La jueza archiva toda la causa de Caja Navarra (03/10/2013)',
      url: 'https://orain.eus/es/politica/2013/10/03/caso-caja-navarra--la-juez-benito-archiva-toda-causa/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: Ibarrola, respaldada por el partido para recuperar instituciones (29/04/2024)',
      url: 'https://orain.eus/es/politica/2024/04/29/ibarrola-se-siente-respaldada-por-partido-para-intentar-ganar-cuota-de-voto-y-recuperar-instituciones/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'El Salto: Los socialistas navarros presentan una moción de censura conjunta con EH Bildu (13/12/2023)',
      url: 'https://www.elsaltodiario.com/pamplona/socialistas-navarros-presentan-mocion-censura-conjunta-ehbildu-investir-joseba-asiron',
      consultada: C,
      oficial: false,
    },
    wikipedia('Partido Popular', 'Partido_Popular'),
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
