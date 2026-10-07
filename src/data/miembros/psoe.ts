import { F, oficial, otra, wiki } from './fuentes';
import { FuentesGobierno, GobiernoPSOE } from './gobierno-actual';
import type { MiembrosPartido } from './tipos';

const moncloaSanchez = oficial(
  'La Moncloa: biografía del presidente del Gobierno',
  'https://www.lamoncloa.gob.es/presidente/biografia/Paginas/index.aspx',
);
const efeCandidato = otra(
  'Infobae (EFE): Sánchez anima a la cúpula del PSOE a salir a ganar las elecciones del 29 de noviembre (05/10/2026)',
  'https://www.infobae.com/espana/agencias/2026/10/05/sanchez-anima-a-la-cupula-del-psoe-a-salir-a-ganar-las-elecciones-del-29-de-noviembre/',
);
const objectiveMinguez = otra(
  'The Objective: Montse Mínguez, nueva portavoz del PSOE (04/07/2025)',
  'https://theobjective.com/espana/politica/2025-07-04/montse-minguez-portavoz-psoe/',
);
const araTorro = otra(
  'Ara: Rebeca Torró será la nueva secretaria de organización, y Montse Mínguez, portavoz (07/2025)',
  'https://es.ara.cat/politica/valenciana-rebeca-torro-nueva-secretaria-organizacion-psoe_1_5432578.html',
);
const valenciaPlazaTorro = otra(
  'Valencia Plaza: Rebeca Torró, Rafael Tabares, Concha Andrés y Laura Soto, nuevos secretarios autonómicos',
  'https://valenciaplaza.com/torro-tabares-concha-andres-y-soto-nuevos-secretarios-autonomicos-del-consell',
  '2026-10-07',
);
const tesis1 = otra(
  'The Objective: Sánchez anuncia medidas legales contra las acusaciones de plagio de su tesis (13/09/2018)',
  'https://theobjective.com/espana/2018-09-13/sanchez-plagio-tesis/',
);
const tesis2 = otra(
  'The Objective: Pedro Sánchez hace pública su tesis después de someterla a dos programas antiplagio (14/09/2018)',
  'https://theobjective.com/espana/2018-09-14/la-tesis-de-pedro-sanchez-supera-dos-programas-antiplagio/',
);
const wikiSanchez = wiki('Pedro Sánchez', 'Pedro_Sánchez');
const wikiTorro = wiki('Rebeca Torró', 'Rebeca_Torró');
const wikiLopez = wiki('Patxi López', 'Patxi_López');
const wikiMinguez = wiki('Montse Mínguez', 'Montse_Mínguez');

export const MiembrosPSOE: MiembrosPartido = {
  partidoId: 'psoe',
  candidatura: {
    estado: 'anunciada',
    texto:
      'Pedro Sánchez repite como candidato. El Comité Federal lo nombrará oficialmente el 17 de octubre de 2026, cuando ratifique las listas; no tiene que pasar por primarias porque los estatutos eximen a quien está en el Gobierno.',
    fuentes: [efeCandidato, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Pedro Sánchez Pérez-Castejón',
      papel: 'Secretario general y candidato',
      cargos: [
        { cargo: 'Presidente del Gobierno', desde: 'junio de 2018', fuentes: [moncloaSanchez] },
        {
          cargo: 'Secretario general del PSOE',
          desde: '2017 (antes, de 2014 a 2016)',
          fuentes: [moncloaSanchez, F.congresoBiografias],
        },
      ],
      nacimiento: { anio: '1972', lugar: 'Madrid', fuentes: [moncloaSanchez] },
      estudios: [
        {
          titulo: 'Licenciatura en Ciencias Económicas y Empresariales',
          centro: 'Real Colegio Universitario María Cristina, adscrito a la Universidad Complutense',
          anio: '1995',
        },
        { titulo: 'Máster en Economía de la Unión Europea', centro: 'Universidad Libre de Bruselas' },
        {
          titulo: 'Diploma en Estudios Avanzados en Integración Económica y Monetaria Europea',
          centro: 'Instituto Universitario Ortega y Gasset',
        },
        { titulo: 'Doctorado en Economía', centro: 'Universidad Camilo José Cela', anio: '2012' },
      ],
      fuentesEstudios: [moncloaSanchez, F.congresoBiografias],
      trayectoria: [
        'Fue asesor en el Parlamento Europeo, miembro del gabinete del Alto Representante de la ONU en Bosnia y profesor de Economía en la Universidad Camilo José Cela. Concejal en Madrid entre 2004 y 2009 y luego diputado.',
        'Llegó a la Presidencia del Gobierno en junio de 2018 con una moción de censura y fue reelegido por el Congreso en enero de 2020 y en noviembre de 2023.',
      ],
      avisos: [
        'Tesis doctoral: en septiembre de 2018 el diario ABC publicó que contenía párrafos copiados de otros autores. Sánchez lo negó y anunció acciones legales si no se rectificaba. La Universidad Camilo José Cela dijo que la evaluación fue normal. La Moncloa publicó la tesis y dos análisis antiplagio (Turnitin, 13 % de coincidencias; PlagScan, 0,96 %), que atribuyó a citas y referencias. No consta en las fuentes consultadas que ninguna universidad o tribunal haya anulado el título.',
      ],
      fuentes: [moncloaSanchez, wikiSanchez, tesis1, tesis2],
    },
    {
      nombre: 'Rebeca Torró Soler',
      papel: 'Secretaria de Organización',
      cargos: [
        { cargo: 'Secretaria de Organización del PSOE', desde: '5 de julio de 2025', fuentes: [wikiTorro, araTorro] },
      ],
      nacimiento: { anio: '1981', lugar: 'Ontinyent (Valencia)', fuentes: [wikiTorro, araTorro] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universitat de València' },
        { titulo: 'Estudios de Ciencias Políticas y de la Administración' },
      ],
      fuentesEstudios: [valenciaPlazaTorro],
      trayectoria: [
        'Concejala en Ontinyent a partir de 2007. En la Generalitat Valenciana fue directora general de Vivienda, secretaria autonómica de Economía y consejera de Territorio, Obras Públicas y Movilidad (2022-2023).',
        'Secretaria de Estado de Industria entre diciembre de 2023 y julio de 2025, cuando sustituyó a Santos Cerdán al frente de la organización del partido.',
      ],
      fuentes: [wikiTorro, araTorro],
    },
    {
      nombre: 'Patxi López Álvarez',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Socialista en el Congreso',
          desde: 'julio de 2022; en la XV legislatura, del 14/09/2023 a la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces, wikiLopez],
        },
        { cargo: 'Secretario de Política Federal del PSOE', fuentes: [wikiLopez] },
      ],
      nacimiento: { anio: '1959', lugar: 'Portugalete (Bizkaia)', fuentes: [wikiLopez] },
      estudios: [{ titulo: 'Ingeniería Industrial', centro: 'Universidad del País Vasco', estado: 'sin terminar' }],
      fuentesEstudios: [F.congresoBiografias, wikiLopez],
      trayectoria: [
        'Militante del PSOE desde 1977. Parlamentario vasco entre 1991 y 2014 y lehendakari de mayo de 2009 a diciembre de 2012. Presidió el Congreso en la XI legislatura (2016).',
      ],
      avisos: [
        'Estudios: la ficha del Congreso dice que «estudió Ingeniería Industrial»; Wikipedia precisa que empezó la carrera sin llegar a terminarla.',
      ],
      fuentes: [F.congresoBiografias, wikiLopez],
    },
    {
      nombre: 'Montse Mínguez García',
      papel: 'Portavoz del partido',
      cargos: [
        { cargo: 'Portavoz del PSOE', desde: 'julio de 2025', fuentes: [objectiveMinguez, araTorro] },
        {
          cargo: 'Portavoz adjunta del Grupo Socialista en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1976', lugar: 'Lleida', fuentes: [wikiMinguez] },
      estudios: [
        {
          titulo: 'Licenciatura en Administración y Dirección de Empresas',
          centro: 'Universitat Rovira i Virgili',
          anio: '1999',
        },
        {
          titulo: 'Máster en Contabilidad, Auditoría y Control de Gestión',
          centro: 'Universitat de Lleida',
          anio: '2013',
        },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiMinguez],
      trayectoria: [
        'Profesora asociada en la Universitat de Lleida. Concejala de Lleida desde 2003 y primera teniente de alcalde. Diputada por Lleida desde 2019; es del PSC y la primera de ese partido que hace de portavoz del PSOE.',
      ],
      fuentes: [F.congresoBiografias, wikiMinguez, araTorro],
    },
  ],
  gobiernoActual: {
    texto:
      'El PSOE gobierna en coalición con Sumar desde noviembre de 2023. Estos son los miembros del Gobierno propuestos por el PSOE; según Wikipedia, cuatro son independientes y uno es del PSC.',
    miembros: GobiernoPSOE,
    fuentes: FuentesGobierno,
  },
  anunciado: {
    texto:
      'El PSOE no ha anunciado qué equipo formaría si sigue gobernando después del 29N. Hasta entonces sigue el Gobierno actual.',
    fuentes: [efeCandidato, F.moncloaGobierno],
  },
  prensa: [],
  notaPrensa:
    'No se han encontrado noticias con nombres para un futuro Gobierno del PSOE distintos de los ministros actuales.',
};
