import type { Fuente, TemaId } from './tipos';

/** Qué tipo de fuente habla. Se muestra siempre para que se vea quién dice qué. */
export type TipoFuente =
  | 'Organismo público'
  | 'Estudio académico'
  | 'Centro de análisis'
  | 'Gobierno'
  | 'Sector afectado'
  | 'Verificador'
  | 'Medio';

export type Evidencia = {
  quien: string;
  tipo: TipoFuente;
  /** Lo que concluye, resumido sin adjetivos. */
  dice: string;
  fuente: Fuente;
};

/** Cómo se sitúa cada partido según su programa del 23J (con página). */
export type Postura = {
  partidoId: string;
  sentido: 'impulsa' | 'frena' | 'matiza';
  texto: string;
  pagina: number;
};

export type Precedente = {
  id: string;
  temaId: TemaId;
  titulo: string;
  /** La pregunta que se intenta responder. */
  pregunta: string;
  posturas: Postura[];
  casos: { lugar: string; cuando: string; que: string }[];
  evidencias: Evidencia[];
  /** Lo que comparten las fuentes, aunque lean distinto el resultado. */
  coinciden: string;
  /** Dónde no se ponen de acuerdo. */
  discrepan: string;
};

const C = '2026-10-06';
const f = (titulo: string, url: string, oficial = false): Fuente => ({ titulo, url, consultada: C, oficial });

/**
 * "¿Funcionó?": ideas que hoy proponen los partidos y que ya se aplicaron. Regla: nunca un
 * veredicto de la app; varias fuentes de distinto tipo y, cuando existen, de signo contrario.
 */
export const Precedentes: Precedente[] = [
  {
    id: 'alquiler',
    temaId: 'vivienda',
    titulo: 'Poner tope al precio del alquiler',
    pregunta: '¿Limitar por ley lo que se cobra de alquiler lo abarata sin reducir los pisos disponibles?',
    posturas: [
      {
        partidoId: 'sumar',
        sentido: 'impulsa',
        texto: 'Endurecer la Ley de Vivienda y limitar alquiler turístico y de temporada.',
        pagina: 77,
      },
      {
        partidoId: 'psoe',
        sentido: 'impulsa',
        texto: 'Desarrollar la contención de precios de la Ley de Vivienda.',
        pagina: 221,
      },
      {
        partidoId: 'eh-bildu',
        sentido: 'impulsa',
        texto: 'Prórroga automática de los alquileres con la misma renta.',
        pagina: 4,
      },
      { partidoId: 'pp', sentido: 'frena', texto: 'Derogar la Ley de Vivienda.', pagina: 34 },
      { partidoId: 'vox', sentido: 'frena', texto: 'Acabar con el control de rentas.', pagina: 42 },
      { partidoId: 'upn', sentido: 'frena', texto: 'Derogar la Ley de Vivienda.', pagina: 6 },
    ],
    casos: [
      {
        lugar: 'Cataluña',
        cuando: '2020–2022',
        que: 'Ley 11/2020: tope en zonas tensionadas durante año y medio; la anuló el Tribunal Constitucional.',
      },
      {
        lugar: 'Berlín',
        cuando: '2020–2021',
        que: '"Mietendeckel": congelación de alquileres; la anuló el Constitucional alemán al año.',
      },
      {
        lugar: 'Cataluña',
        cuando: 'desde 2024',
        que: 'Primeras zonas tensionadas con tope de la Ley estatal de Vivienda de 2023.',
      },
    ],
    evidencias: [
      {
        quien: 'García Montalvo, Monras y Raya (EsadeEcPol)',
        tipo: 'Centro de análisis',
        dice: 'La ley catalana de 2020 bajó el alquiler medio un 5 %, sobre todo en los pisos caros; los baratos subieron hacia el tope, y se firmaron un 10 % menos de contratos.',
        fuente: f(
          'EsadeEcPol: Los efectos de la limitación de precios de los alquileres en Cataluña (2023)',
          'https://www.esade.edu/ecpol/wp-content/uploads/2023/02/Esade_ControlAlq.pdf',
        ),
      },
      {
        quien: 'Hahn, Kholodilin y Waltl (DIW Berlin)',
        tipo: 'Estudio académico',
        dice: 'En Berlín bajaron los alquileres anunciados, pero cayó mucho el número de pisos ofertados y subieron los precios en Potsdam y municipios cercanos.',
        fuente: f(
          'DIW: Forward to the Past: Short-Term Effects of the Rent Freeze in Berlin (2021)',
          'https://www.diw.de/de/diw_01.c.808954.de/publikationen/diskussionspapiere/2021_1928/forward_to_the_past__short-term_effects_of_the_rent_freeze_in_berlin.html',
        ),
      },
      {
        quien: 'Generalitat de Cataluña (datos del Incasòl)',
        tipo: 'Gobierno',
        dice: 'Tras un año de zonas tensionadas, el alquiler medio bajó un 3,7 % en esos municipios y un 6,4 % en Barcelona, con 11.807 contratos nuevos ajustados al índice.',
        fuente: f(
          'Infobae: Un año del tope a los alquileres en Cataluña (2025)',
          'https://www.infobae.com/espana/2025/03/16/un-ano-del-tope-a-los-alquileres-en-cataluna-el-gobierno-destaca-una-bajada-del-37-en-los-municipios-tensionados-pero-el-sector-inmobiliario-solo-ve-una-perdida-de-oferta/',
        ),
      },
      {
        quien: 'idealista (portal inmobiliario)',
        tipo: 'Sector afectado',
        dice: 'Los contratos y la oferta de alquiler caen con fuerza en las zonas tensionadas, mientras la demanda por cada piso se dispara.',
        fuente: f(
          'idealista: Dos años de alquiler en zonas tensionadas en Cataluña (2026)',
          'https://www.idealista.com/news/inmobiliario/vivienda/2026/03/16/888113-dos-anos-de-alquiler-en-zonas-tensionadas-en-cataluna-espantada-de-la-oferta-y-una',
        ),
      },
    ],
    coinciden: 'Con tope, los precios de los contratos regulados bajan.',
    discrepan:
      'Si esa bajada compensa la caída de pisos disponibles y quién se beneficia más (los estudios de Esade y DIW apuntan a efectos no buscados).',
  },
  {
    id: 'smi',
    temaId: 'empleo',
    titulo: 'Subir mucho el salario mínimo',
    pregunta: '¿Una subida fuerte del salario mínimo mejora los sueldos sin destruir empleo?',
    posturas: [
      { partidoId: 'sumar', sentido: 'impulsa', texto: 'Subirlo cada año por encima del IPC.', pagina: 7 },
      { partidoId: 'eh-bildu', sentido: 'impulsa', texto: 'Salario mínimo de 1.200 €.', pagina: 3 },
      { partidoId: 'bng', sentido: 'impulsa', texto: 'Al 60 % del salario medio.', pagina: 16 },
      { partidoId: 'pp', sentido: 'matiza', texto: 'Actualizarlo dentro del diálogo social.', pagina: 19 },
      {
        partidoId: 'vox',
        sentido: 'matiza',
        texto: 'Subir los salarios reduciendo cargas a las empresas.',
        pagina: 22,
      },
    ],
    casos: [
      { lugar: 'España', cuando: '2019', que: 'El salario mínimo sube un 22,3 % de golpe, hasta 900 € en 14 pagas.' },
    ],
    evidencias: [
      {
        quien: 'Banco de España',
        tipo: 'Organismo público',
        dice: 'Estimó que la subida de 2019 restó entre 0,6 y 1,1 puntos al crecimiento del empleo asalariado, más entre jóvenes y mayores de 45.',
        fuente: f(
          'Banco de España, Documento Ocasional 2113 (2021)',
          'https://ideas.repec.org/p/bde/opaper/2113.html',
          true,
        ),
      },
      {
        quien: 'AIReF',
        tipo: 'Organismo público',
        dice: 'Calcula que la subida de 2019 costó entre 45.000 y 54.000 empleos, y habla de un impacto "negativo, pero moderado".',
        fuente: f(
          'El Español: la AIReF cifra los empleos perdidos por las subidas del salario mínimo (2026)',
          'https://www.elespanol.com/invertia/economia/empleo/20260530/subidas-salario-minimo-causaron-destruccion-empleos-airef/1003744266056_0.html',
        ),
      },
      {
        quien: 'Fedea',
        tipo: 'Centro de análisis',
        dice: 'En las empresas donde todos los trabajadores cobraban el mínimo, el empleo creció 4,5 puntos menos; de media, entre 0,5 y 1 punto menos.',
        fuente: f(
          'Bolsamanía: el crecimiento del empleo disminuyó por la subida del SMI de 2019, según Fedea',
          'https://www.bolsamania.com/noticias_amp/economia/economialaboral--el-crecimiento-del-empleo-disminuyo-45-puntos-por-la-subida-del-smi-de-2019-segun-fedea--19728150.html',
        ),
      },
      {
        quien: 'Universidad de Alcalá',
        tipo: 'Estudio académico',
        dice: 'No encontró más inestabilidad laboral ni pérdida de ingresos salariales en los afectados tras la subida.',
        fuente: f(
          'Onda Vasca: el incremento del salario mínimo y su impacto en el empleo, de nuevo a debate',
          'https://www.ondavasca.com/el-incremento-del-salario-minimo-y-su-impacto-en-el-empleo-de-nuevo-a-debate/',
        ),
      },
    ],
    coinciden: 'Subió el sueldo de quienes cobran el mínimo.',
    discrepan: 'Cuánto empleo dejó de crearse: desde efectos casi nulos hasta decenas de miles de puestos.',
  },
  {
    id: 'reforma-laboral',
    temaId: 'empleo',
    titulo: 'Restringir los contratos temporales (reforma laboral de 2021)',
    pregunta: '¿Limitar los contratos temporales da trabajos más estables?',
    posturas: [
      { partidoId: 'vox', sentido: 'frena', texto: 'Derogar la reforma de 2021 y hacer otra.', pagina: 24 },
      { partidoId: 'bng', sentido: 'matiza', texto: 'Derogarla para ir más allá: 45 días de despido.', pagina: 16 },
      {
        partidoId: 'eh-bildu',
        sentido: 'matiza',
        texto: 'Recuperar lo que quedó fuera: 45 días de despido.',
        pagina: 3,
      },
    ],
    casos: [
      {
        lugar: 'España',
        cuando: 'desde 2022',
        que: 'Desaparece el contrato por obra y servicio; el indefinido pasa a ser la norma.',
      },
    ],
    evidencias: [
      {
        quien: 'Banco de España',
        tipo: 'Organismo público',
        dice: 'Entre finales de 2021 y de 2022 hubo 1,6 millones más de asalariados indefinidos y 1,2 millones menos de temporales; cerca de un 25 % del aumento fueron fijos discontinuos.',
        fuente: f(
          'Banco de España, Boletín Económico 2023/T1, artículo 19',
          'https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/InformesBoletinesRevistas/BoletinEconomico/23/T1/Fich/be2301-art19.pdf',
          true,
        ),
      },
      {
        quien: 'EsadeEcPol',
        tipo: 'Centro de análisis',
        dice: 'En sus primeros meses, estimó un aumento del empleo indefinido del 2,3 % (unos 286.000) atribuible a la reforma.',
        fuente: f(
          'EsadeEcPol: ¿Está reduciendo la temporalidad la reforma laboral de 2021? (2022)',
          'https://www.esade.edu/ecpol/wp-content/uploads/2022/04/Reforma_lab_2021-1.pdf',
        ),
      },
    ],
    coinciden: 'La temporalidad registrada bajó de forma clara.',
    discrepan: 'Si los nuevos indefinidos (muchos fijos discontinuos) son de verdad más estables.',
  },
  {
    id: 'jornada',
    temaId: 'empleo',
    titulo: 'Trabajar menos horas sin bajar el sueldo',
    pregunta: '¿Reducir la jornada por ley crea empleo o mejora la vida sin dañar a las empresas?',
    posturas: [
      { partidoId: 'sumar', sentido: 'impulsa', texto: '37,5 horas por ley y camino a las 32.', pagina: 7 },
      { partidoId: 'eh-bildu', sentido: 'impulsa', texto: '32 horas semanales.', pagina: 3 },
      { partidoId: 'bng', sentido: 'impulsa', texto: '35 horas semanales.', pagina: 16 },
      { partidoId: 'psoe', sentido: 'matiza', texto: 'Semana de 4 días voluntaria e incentivada.', pagina: 143 },
      {
        partidoId: 'pp',
        sentido: 'matiza',
        texto: 'Más flexibilidad y banco de horas, sin tocar horas ni salario.',
        pagina: 53,
      },
    ],
    casos: [
      { lugar: 'Francia', cuando: '2000', que: 'Jornada legal de 39 a 35 horas, con rebajas de cotizaciones.' },
      { lugar: 'Reino Unido', cuando: '2022', que: 'Piloto voluntario de semana de 4 días en 61 empresas.' },
    ],
    evidencias: [
      {
        quien: 'Estudio sobre la reforma francesa (HEC París)',
        tipo: 'Estudio académico',
        dice: 'Las horas trabajadas por empresa bajaron un 6 % y el empleo total de las empresas no cambió.',
        fuente: f(
          'HEC: Working time reduction, employment and productivity: evidence from France’s 35-hour reform',
          'https://www.hec.edu/fr/faculte-et-recherche/evenements/working-time-reduction-employment-and-productivity-evidence-france-s-35-hour-reform-0',
        ),
      },
      {
        quien: 'Gobierno francés (recogido por Eurofound)',
        tipo: 'Gobierno',
        dice: 'Atribuyó a la reducción de jornada unos 300.000 empleos.',
        fuente: f(
          'Eurofound: Government issues assessment of 35-hour week legislation (2002)',
          'https://www.eurofound.europa.eu/en/publications/all/government-issues-assessment-35-hour-week-legislation',
          true,
        ),
      },
      {
        quien: 'Piloto de 4 días en Reino Unido',
        tipo: 'Estudio académico',
        dice: '56 de las 61 empresas siguieron con la semana de 4 días; el 71 % de la plantilla dijo tener menos agotamiento. Las empresas se apuntaron voluntariamente.',
        fuente: f(
          'IBA: UK four-day working week trial yields promising results (2023)',
          'https://ibanet.org/uk-four-day-working-week-trial-results',
        ),
      },
    ],
    coinciden: 'Quien trabaja menos horas declara más bienestar.',
    discrepan: 'Si crea empleo: el estudio francés no lo encuentra; el Gobierno francés de entonces, sí.',
  },
  {
    id: 'regularizacion',
    temaId: 'inmigracion',
    titulo: 'Regularizar a inmigrantes sin papeles',
    pregunta: '¿Dar papeles de forma extraordinaria aumenta la recaudación o provoca un "efecto llamada"?',
    posturas: [
      { partidoId: 'bng', sentido: 'impulsa', texto: 'Facilitar la regularización.', pagina: 19 },
      { partidoId: 'eh-bildu', sentido: 'impulsa', texto: 'Derogar la Ley de Extranjería.', pagina: 11 },
      { partidoId: 'pnv', sentido: 'matiza', texto: 'Que quien tenga contrato no pase por el arraigo.', pagina: 34 },
      {
        partidoId: 'vox',
        sentido: 'frena',
        texto: 'Suprimir el arraigo y expulsar a quien entre ilegalmente.',
        pagina: 103,
      },
      { partidoId: 'pp', sentido: 'frena', texto: 'Agilizar las órdenes de retorno.', pagina: 81 },
    ],
    casos: [
      {
        lugar: 'España',
        cuando: '2005',
        que: 'Regularización extraordinaria ligada a un contrato: unas 600.000 personas.',
      },
    ],
    evidencias: [
      {
        quien: 'Elias, Monràs y Vázquez-Grenno (Journal of Labor Economics)',
        tipo: 'Estudio académico',
        dice: 'Aumentó el empleo formal y la recaudación (unos 4.000 € al año por trabajador), sin bajar los salarios de los nativos ni crear efecto llamada; algunos trabajadores poco cualificados de la economía sumergida perdieron empleo.',
        fuente: f(
          'EsadeEcPol: La nueva regularización de inmigrantes en España: qué nos dice la evidencia',
          'https://www.esade.edu/ecpol/es/la-nueva-regularizacion-de-inmigrantes-en-espana-que-nos-dice-la-evidencia/',
        ),
      },
      {
        quien: 'Observatorio Social de la Fundación "la Caixa"',
        tipo: 'Centro de análisis',
        dice: 'Resume el mismo estudio: regularizar no produjo efecto llamada.',
        fuente: f(
          'Observatorio Social "la Caixa": Regularising the situation of the immigrant population does not result in a call effect',
          'https://elobservatoriosocial.fundacionlacaixa.org/en/-/regularising-the-situation-of-the-immigrant-population-does-not-result-in-a-call-ef-fect-',
        ),
      },
    ],
    coinciden: 'El caso de 2005 es el más estudiado y su principal análisis no halla efecto llamada.',
    discrepan:
      'Hay pocos estudios; los partidos que se oponen sostienen que estas medidas atraen más llegadas irregulares.',
  },
  {
    id: 'imv',
    temaId: 'social',
    titulo: 'Un ingreso mínimo estatal (IMV)',
    pregunta: '¿Llega el Ingreso Mínimo Vital a quien lo necesita y reduce la pobreza?',
    posturas: [
      {
        partidoId: 'psoe',
        sentido: 'impulsa',
        texto: 'Mejorar el acceso y llegar a un millón de menores.',
        pagina: 182,
      },
      { partidoId: 'eh-bildu', sentido: 'impulsa', texto: 'Ampliarlo y subirlo al menos un 12 %.', pagina: 7 },
      { partidoId: 'pp', sentido: 'matiza', texto: 'Ligarlo a itinerarios de inserción laboral.', pagina: 19 },
    ],
    casos: [{ lugar: 'España', cuando: 'desde 2020', que: 'Se crea el Ingreso Mínimo Vital.' }],
    evidencias: [
      {
        quien: 'AIReF',
        tipo: 'Organismo público',
        dice: 'En 2023 lo cobraba el 36 % de los hogares que podrían recibirlo; el 56 % ni lo pedía. Redujo un 30 % la brecha de pobreza y un 9,5 % la tasa de pobreza.',
        fuente: f(
          'Noticias de Navarra: la AIReF calcula que solo el 36 % de posibles beneficiarios cobra el ingreso mínimo (2024)',
          'https://www.noticiasdenavarra.com/economia/2024/07/10/airef-calcula-36-posibles-beneficiarios-8463346.html',
        ),
      },
      {
        quien: 'Ministerio de Inclusión',
        tipo: 'Gobierno',
        dice: 'Rechazó por "inviable" la recomendación de la AIReF de concederlo de forma automática.',
        fuente: f(
          'Moncloa.com: Inclusión Social desestima la recomendación de la AIReF sobre el IMV (2024)',
          'https://www.moncloa.com/2024/07/10/inclusion-social-airef-imv-2733056/',
        ),
      },
      {
        quien: 'Ministro José Luis Escrivá (2023)',
        tipo: 'Gobierno',
        dice: 'Cuestionó las conclusiones de la AIReF sobre el alcance del IMV.',
        fuente: f(
          'El Independiente: Escrivá carga contra las conclusiones de la AIReF sobre el ingreso mínimo (2023)',
          'https://www.elindependiente.com/economia/2023/06/15/escriva-carga-contra-las-conclusiones-de-la-airef-sobre-el-ingreso-minimo-solo-llega-al-35-de-los-beneficiarios/amp/',
        ),
      },
    ],
    coinciden: 'Reduce la intensidad de la pobreza de quien lo cobra.',
    discrepan: 'Por qué no llega a más de la mitad de los posibles beneficiarios y cómo arreglarlo.',
  },
  {
    id: 'tope-gas',
    temaId: 'energia',
    titulo: 'Topar el precio del gas para abaratar la luz',
    pregunta: '¿La "excepción ibérica" abarató la factura de todos?',
    posturas: [
      { partidoId: 'eh-bildu', sentido: 'impulsa', texto: 'Prorrogar el tope al gas.', pagina: 5 },
      {
        partidoId: 'pp',
        sentido: 'frena',
        texto: 'Eliminar las intervenciones excepcionales del mercado eléctrico.',
        pagina: 39,
      },
      { partidoId: 'vox', sentido: 'matiza', texto: 'Cambiar el sistema marginalista de precios.', pagina: 119 },
    ],
    casos: [
      {
        lugar: 'España y Portugal',
        cuando: 'desde junio de 2022',
        que: 'Tope al gas usado para generar electricidad, pactado con la Comisión Europea.',
      },
    ],
    evidencias: [
      {
        quien: 'Ministerio para la Transición Ecológica y OMIE',
        tipo: 'Gobierno',
        dice: 'Calcularon un ahorro de 5.106 millones para los consumidores, en torno a un 15 % de factura.',
        fuente: f(
          'El Salto: la excepción ibérica cumple un año',
          'https://www.elsaltodiario.com/electricidad/excepcion-iberica-cumple-un-ano-nos-ha-beneficiado-tope-al-gas',
        ),
      },
      {
        quien: 'Maldita.es',
        tipo: 'Verificador',
        dice: 'Tras un año: bajó el precio mayorista, la compensación que pagaban los consumidores fue mucho menor que el ahorro y se beneficiaron más los de tarifa regulada que los del mercado libre. Dejó de aplicarse al bajar el gas.',
        fuente: f(
          'Maldita.es: un año de la excepción ibérica (2023)',
          'https://maldita.es/clima/20230615/un-ano-excepcion-iberica/',
        ),
      },
      {
        quien: 'Análisis citado por Noticias de Navarra',
        tipo: 'Medio',
        dice: 'Los cerca de 20 millones de hogares del mercado libre no se beneficiaron y pagaron de media unos 20 € al mes más en el segundo semestre de 2022.',
        fuente: f(
          'Noticias de Navarra: la excepción ibérica supone una subida de 20 euros al mes en casi 20 millones de hogares (2023)',
          'https://www.noticiasdenavarra.com/economia/2023/02/12/excepcion-iberica-supone-subida-20-6435208.amp.html',
        ),
      },
    ],
    coinciden: 'Bajó el precio mayorista frente a Francia, Italia o Alemania.',
    discrepan: 'El ahorro neto según el tipo de contrato y el coste de subvencionar electricidad exportada a Francia.',
  },
  {
    id: 'nuclear',
    temaId: 'energia',
    titulo: 'Cerrar las centrales nucleares',
    pregunta: '¿Qué pasó con las emisiones y el carbón donde se cerraron todas las nucleares?',
    posturas: [
      { partidoId: 'psoe', sentido: 'impulsa', texto: 'Cierre ordenado y progresivo.', pagina: 75 },
      { partidoId: 'sumar', sentido: 'impulsa', texto: 'Mantener el calendario de cierre.', pagina: 48 },
      { partidoId: 'pp', sentido: 'frena', texto: 'Alargar su vida útil si lo aprueba el CSN.', pagina: 38 },
      { partidoId: 'vox', sentido: 'frena', texto: 'Alargar su vida y minirreactores.', pagina: 117 },
    ],
    casos: [{ lugar: 'Alemania', cuando: 'abril de 2023', que: 'Apaga sus tres últimos reactores.' }],
    evidencias: [
      {
        quien: 'Agora Energiewende y Fraunhofer',
        tipo: 'Centro de análisis',
        dice: 'En 2023 las emisiones alemanas fueron las más bajas desde los años 50 y el carbón cayó a mínimos de seis décadas, en parte por menos demanda y más importaciones.',
        fuente: f(
          'RenewEconomy: Germany’s coal power production drops to lowest level in 60 years after nuclear exit (2024)',
          'https://reneweconomy.com.au/germanys-coal-power-production-drops-to-lowest-level-in-60-years-in-2023-after-nuclear-exit/',
        ),
      },
      {
        quien: 'PwC',
        tipo: 'Sector afectado',
        dice: 'Con las nucleares abiertas, la electricidad libre de emisiones habría sido el 94 % en 2024, frente al 61 % real.',
        fuente: f(
          'PwC: Alemania y la energía nuclear, consecuencias del cierre',
          'https://www.pwc.es/es/publicaciones/energia/assets/07-alemania-energia-nuclear-consecuencias-cierre-parque-nuclear.pdf',
        ),
      },
      {
        quien: 'Öko-Institut',
        tipo: 'Centro de análisis',
        dice: 'La producción perdida se compensaría sobre todo con renovables nuevas.',
        fuente: f(
          'Bloomberg Línea: Alemania apaga sus últimas plantas nucleares (2023)',
          'https://www.bloomberglinea.com/2023/04/15/alemania-apaga-ultimas-plantas-nucleares-con-la-esperanza-de-una-economia-mas-verde/',
        ),
      },
    ],
    coinciden: 'Tras el cierre, el carbón alemán no subió sino que bajó.',
    discrepan: 'Cuántas emisiones se habrían evitado manteniendo las nucleares y cuánto pesan las importaciones.',
  },
  {
    id: 'solo-si-es-si',
    temaId: 'igualdad',
    titulo: 'Unificar abuso y agresión sexual en un solo delito',
    pregunta: '¿Qué efecto tuvo la ley del "solo sí es sí" en las condenas ya dictadas?',
    posturas: [
      { partidoId: 'pp', sentido: 'frena', texto: 'Revisar el Código Penal tras esta ley.', pagina: 72 },
      { partidoId: 'vox', sentido: 'frena', texto: 'Derogar la ley.', pagina: 174 },
      {
        partidoId: 'bng',
        sentido: 'impulsa',
        texto: 'El consentimiento como eje de los delitos sexuales.',
        pagina: 22,
      },
      { partidoId: 'pnv', sentido: 'impulsa', texto: 'Defiende el consentimiento como elemento central.', pagina: 27 },
    ],
    casos: [
      { lugar: 'España', cuando: '2022–2023', que: 'Entra en vigor en octubre de 2022 y se reforma en abril de 2023.' },
    ],
    evidencias: [
      {
        quien: 'Consejo General del Poder Judicial',
        tipo: 'Organismo público',
        dice: 'Hasta septiembre de 2023 contabilizó 1.205 rebajas de pena y 121 excarcelaciones; se rebajaron el 32 % de las condenas revisadas.',
        fuente: f(
          'Onda Vasca: el CGPJ eleva a 1.205 las rebajas de pena y a 121 las excarcelaciones',
          'https://www.ondavasca.com/el-cgpj-eleva-a-1-205-las-rebajas-de-pena-y-a-121-las-excarcelaciones-por-la-ley-del-solo-si-es-si/',
        ),
      },
      {
        quien: 'elDiario.es',
        tipo: 'Medio',
        dice: 'Recoge el desglose del CGPJ por tribunales: la mayoría de rebajas las acordaron las audiencias provinciales.',
        fuente: f(
          'elDiario.es: el Poder Judicial confirma 978 rebajas de penas y 104 excarcelaciones',
          'https://www.eldiario.es/politica/judicial-confirma-978-rebajas-penas-104-excarcelaciones-ley-si-si_1_10120257.html',
        ),
      },
    ],
    coinciden:
      'La ley llevó a rebajar condenas ya firmes al aplicarse la pena más favorable, y por eso se reformó en 2023.',
    discrepan:
      'Si el problema estaba en el diseño de la ley o en su interpretación, y si el consentimiento como eje debe mantenerse.',
  },
];

export function buscarPrecedente(id: string) {
  return Precedentes.find((p) => p.id === id);
}
