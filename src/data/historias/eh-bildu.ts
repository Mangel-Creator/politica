import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaEHBildu: HistoriaDetallada = {
  partidoId: 'eh-bildu',
  entradilla:
    'Coalición independentista vasca nacida en 2012 y refundada como organización permanente en 2017. La forman Sortu, Eusko Alkartasuna y Alternatiba. Se presenta en el País Vasco y Navarra y su objetivo declarado es una Euskal Herria independiente.',
  capitulos: [
    {
      titulo: 'Origen',
      periodo: '2011–2012',
      parrafos: [
        'La crean Eusko Alkartasuna, Aralar, Alternatiba y el sector de la izquierda abertzale cercano a Sortu. Sus precedentes inmediatos son Bildu (municipales de 2011) y Amaiur, que en las generales de 2011 logró siete diputados.',
        'Según la Wikipedia, la unión fue posible cuando la izquierda abertzale abandonó la estrategia «político-militar» por una solo política. Se presenta en San Sebastián el 10 de junio de 2012. Sortu, legalizado ese año por el Tribunal Constitucional, se incorpora más tarde.',
      ],
    },
    {
      titulo: 'Segunda fuerza vasca',
      periodo: '2012–2016',
      parrafos: [
        'En las elecciones vascas de 2012 obtiene 21 escaños (25 %), segunda fuerza tras el PNV. En 2014 consigue un eurodiputado con la coalición Los Pueblos Deciden, junto al BNG y otros.',
        'En 2015 Joseba Asiron se convierte en el primer alcalde abertzale de Pamplona, y en Navarra apoya la investidura de Uxue Barkos (Geroa Bai). En las generales de 2015 y 2016 obtiene dos diputados, por debajo de los siete de Amaiur en 2011.',
        'En 2016 la Junta Electoral, con el aval del Constitucional, impide que Arnaldo Otegi sea candidato a lehendakari por estar inhabilitado por la condena del caso Bateragune.',
      ],
    },
    {
      titulo: 'Partido y crecimiento',
      periodo: '2017–2023',
      parrafos: [
        'El 17 de junio de 2017 se refunda como organización permanente, abierta a afiliados independientes, con Otegi como coordinador general. Aralar se disuelve. Un sector crítico de Eusko Alkartasuna denuncia que Sortu tiene un peso excesivo.',
        'Sube a cuatro diputados en abril de 2019 y a cinco en noviembre. En 2023 logra seis y apoya la investidura de Pedro Sánchez.',
        'En diciembre de 2023 una moción de censura de EH Bildu, el PSN, Geroa Bai y Contigo-Zurekin devuelve la alcaldía de Pamplona a Asiron: es la primera vez que votos socialistas hacen alcalde a alguien de EH Bildu.',
        'En las elecciones vascas de abril de 2024 empata a 27 escaños con el PNV, que es el más votado y sigue gobernando.',
      ],
    },
    {
      titulo: 'ETA y las víctimas',
      periodo: '2011–2023',
      parrafos: [
        'Es la cuestión más discutida en torno al partido. Su coordinador, Otegi, militó en ETA en su juventud, igual que algunos afiliados de Sortu. Algunos medios conservadores lo califican de heredero de ETA y asociaciones como Covite critican la presencia de sus dirigentes en homenajes a exmiembros de la banda. Integra también a partidos de corte pacifista, como Eusko Alkartasuna y Alternatiba; Sortu fue legalizado por el Constitucional, y Otegi ha reiterado el compromiso del partido contra la violencia de ETA.',
        'El 18 de octubre de 2021, en el décimo aniversario del fin de ETA, Otegi y el secretario general de Sortu dijeron a las víctimas: «Sentimos su dolor y desde ese sentimiento sincero afirmamos que el mismo nunca debió haberse producido». Covite, la AVT y Dignidad y Justicia lo consideraron insuficiente y pidieron, entre otras cosas, el fin de los homenajes a presos de ETA.',
        'En las municipales de 2023, Covite denunció que sus listas incluían a 44 condenados por pertenencia o colaboración con ETA. Siete, condenados en causas con víctimas mortales, anunciaron que renunciarían si salían elegidos. La Fiscalía rechazó la petición de Vox, Isabel Díaz Ayuso y Dignidad y Justicia de ilegalizar el partido.',
      ],
    },
    {
      titulo: 'Caso Bateragune',
      periodo: '2011–2025',
      parrafos: [
        'Otegi y otros cuatro dirigentes fueron condenados por pertenencia a ETA por intentar reconstruir Batasuna. En 2012 el Supremo fijó penas de entre seis y seis años y medio, que cumplieron.',
        'En 2018 el Tribunal Europeo de Derechos Humanos concluyó que no tuvieron un juez imparcial. En 2020 el Supremo anuló la condena y ordenó repetir el juicio. En enero de 2024 el Constitucional, por 7 votos a 4, anuló esa decisión e impidió repetirlo porque ya habían cumplido las penas; la condena de 2012 siguió en vigor.',
        'En octubre de 2025 el Tribunal Europeo inadmitió por unanimidad la nueva demanda de los cinco, que pedían anular la condena, y esta se mantiene.',
      ],
    },
  ],
  lideres: [{ nombre: 'Arnaldo Otegi', cargo: 'Coordinador general', desde: '2017' }],
  notaTrayectoria:
    'En 2011 se muestra Amaiur, la coalición con los mismos integrantes que precedió a EH Bildu en las generales.',
  fuentes: [
    wikipedia('Euskal Herria Bildu', 'Euskal_Herria_Bildu'),
    {
      titulo: 'Público: Las víctimas de ETA piden a Otegi que dé un paso más (18/10/2021)',
      url: 'https://www.publico.es/politica/victimas-eta-piden-otegi-paso.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Onda Vasca: El Constitucional ampara a Otegi y rechaza repetir el juicio del caso Bateragune',
      url: 'https://www.ondavasca.com/el-constitucional-ampara-a-otegi-y-rechaza-repetir-el-juicio-contra-el-por-el-caso-bateragune/amp/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Orain: El TEDH rechaza la demanda de los cinco condenados en el caso Bateragune (23/10/2025)',
      url: 'https://orain.eus/es/politica/2025/10/23/el-tedh-rechaza-la-demanda-los-cinco-condenados-en-el-caso-bateragune-la-anulacion-su-condena-pertenencia/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'El Salto: Los socialistas navarros presentan una moción de censura conjunta con EH Bildu (13/12/2023)',
      url: 'https://www.elsaltodiario.com/pamplona/socialistas-navarros-presentan-mocion-censura-conjunta-ehbildu-investir-joseba-asiron',
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
