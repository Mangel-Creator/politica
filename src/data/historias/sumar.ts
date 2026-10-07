import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaSumar: HistoriaDetallada = {
  partidoId: 'sumar',
  entradilla:
    'Proyecto impulsado por Yolanda Díaz en 2022. Hay que distinguir dos cosas: la coalición Sumar, que reunió a una veintena de partidos en las generales de 2023, y Movimiento Sumar, el partido creado para formar parte de ella. Gobierna en coalición con el PSOE desde 2023.',
  capitulos: [
    {
      titulo: 'Antecedentes',
      periodo: '2021–2022',
      parrafos: [
        'En marzo de 2021, al dejar el Gobierno, Pablo Iglesias propone a Yolanda Díaz, ministra de Trabajo, como vicepresidenta segunda y futura candidata de Unidas Podemos. Díaz empieza a preparar un espacio distinto de Unidas Podemos, con fuerzas cercanas y la sociedad civil.',
        'El 13 de noviembre de 2021 protagoniza el acto «Otras políticas» con Ada Colau, Mónica Oltra, Mónica García y Fátima Hamed. La ausencia de Podemos se interpreta como un intento de desligar el proyecto de esa formación.',
        'En marzo de 2022 registra la asociación Sumar y en julio arranca un «proceso de escucha» con actos por toda España; el primero, en Matadero Madrid, reúne a más de 5.000 personas.',
      ],
    },
    {
      titulo: 'La coalición de 2023',
      periodo: '2023',
      parrafos: [
        'Díaz presenta su candidatura el 2 de abril de 2023 con el apoyo de Izquierda Unida, Verdes Equo, Compromís o Más Madrid; Podemos no se suma entonces.',
        'Tras el adelanto electoral, el 31 de mayo se inscribe el partido Movimiento Sumar y el 9 de junio la coalición Sumar, con él y otros 19 partidos, Podemos incluido. El 23 de julio logra 31 diputados: 10 son de Movimiento Sumar y 5 de Podemos.',
        'Apoya la investidura de Pedro Sánchez y entra en el Gobierno: Díaz sigue de vicepresidenta segunda y ministra de Trabajo; Mónica García (Más Madrid) es ministra de Sanidad, Ernest Urtasun de Cultura, Pablo Bustinduy de Derechos Sociales, Consumo y Agenda 2030 y Sira Rego de Juventud e Infancia. Podemos, sin ministerios, deja el grupo de Sumar el 5 de diciembre.',
      ],
    },
    {
      titulo: 'Crisis y reorganización',
      periodo: '2024–2026',
      parrafos: [
        'En marzo de 2024 Díaz es elegida coordinadora de Movimiento Sumar con el 81,6 %. Tras los malos resultados en Galicia, el País Vasco, Cataluña y las europeas (tres escaños), dimite el 10 de junio de 2024 y una gestora toma el mando. En octubre, el portavoz parlamentario Íñigo Errejón deja la política tras acusaciones de comportamientos machistas.',
        'Izquierda Unida y otros socios piden al partido que se distinga de la coalición. En marzo de 2025 Movimiento Sumar cambia de imagen, deja de actuar como paraguas y elige una dirección doble (Lara Hernández y Carlos Martín). Martín dimite en agosto de 2025; Hernández, en julio de 2026, tras conocerse expedientes internos contra ella por supuesto acoso laboral.',
        'El 11 de julio de 2026 son elegidas coordinadoras Verónica Martínez Barbero y Rosa Martínez, y Díaz sale de la dirección. El partido se define laborista y ecosocialista.',
      ],
    },
    {
      titulo: 'Rumbo al 29N',
      periodo: 'desde octubre de 2026',
      parrafos: [
        'Díaz ha anunciado que no repetirá como candidata. Movimiento Sumar, Izquierda Unida, Más Madrid y los Comuns preparan una candidatura llamada Frente Amplio, cuyos detalles anunciarán el 17 de octubre. Entre los posibles cabezas de lista se citan Pablo Bustinduy, Ada Colau, Mónica García y Ernest Urtasun.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Yolanda Díaz', cargo: 'Impulsora y candidata en 2023', desde: '2022', hasta: '2026' },
    { nombre: 'Yolanda Díaz', cargo: 'Coordinadora general', desde: '2024', hasta: '2024' },
    { nombre: 'Lara Hernández', cargo: 'Coordinadora', desde: '2025', hasta: '2026' },
    { nombre: 'Carlos Martín', cargo: 'Coordinador', desde: '2025', hasta: '2025' },
    { nombre: 'Verónica Martínez Barbero', cargo: 'Coordinadora', desde: '2026' },
    { nombre: 'Rosa Martínez', cargo: 'Coordinadora', desde: '2026' },
  ],
  notaTrayectoria:
    'Solo ha concurrido a unas generales, en 2023. Sus 31 escaños son los de toda la coalición, incluidos los 5 de Podemos.',
  fuentes: [
    wikipedia('Movimiento Sumar', 'Movimiento_Sumar'),
    wikipedia('Podemos', 'Podemos'),
    {
      titulo: 'Orain: Los partidos aceleran la designación de sus listas (06/10/2026)',
      url: 'https://orain.eus/es/politica/2026/10/06/el-anuncio-sanchez-obliga-los-partidos-acelerar-el-proceso-designar-sus-listas-electorales-asi-apuran-los-plazos/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'La Moncloa: composición del Gobierno',
      url: 'https://www.lamoncloa.gob.es/gobierno/composiciondelgobierno/Paginas/index.aspx',
      consultada: C,
      oficial: true,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
