import { F, fuenteDe, oficial, Quinielas, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const estructura = oficial('Partido Popular: estructura (Comité de Dirección)', 'https://www.pp.es/estructura/');
const declaracion = oficial(
  'Partido Popular: Feijóo celebra que «por fin» podremos elegir (05/10/2026)',
  'https://www.pp.es/actualidad/articulos/feijoo-celebra-que-por-fin-podremos-elegir-esto-va-de-que-espana-le-gane-a-sanchez-y-a-lo-que-representa/',
);
const wikiFeijoo = wiki('Alberto Núñez Feijóo', 'Alberto_Núñez_Feijóo');
const wikiTellado = wiki('Miguel Tellado', 'Miguel_Tellado');
const wikiSemper = wiki('Borja Sémper', 'Borja_Sémper');
const wikiMunoz = wiki('Ester Muñoz', 'Ester_Muñoz');
const { democrata, elPlural, mundiario } = Quinielas;

export const MiembrosPP: MiembrosPartido = {
  partidoId: 'pp',
  candidatura: {
    estado: 'anunciada',
    texto:
      'Alberto Núñez Feijóo vuelve a ser el candidato del PP a la Presidencia del Gobierno. En su declaración del 5 de octubre de 2026 pidió la confianza de los votantes como aspirante; elEconomista confirma que encabeza la lista.',
    fuentes: [declaracion, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Alberto Núñez Feijóo',
      papel: 'Presidente y candidato',
      cargos: [
        { cargo: 'Presidente del Partido Popular', desde: 'abril de 2022', fuentes: [estructura, wikiFeijoo] },
        {
          cargo: 'Diputado por Madrid',
          desde: '2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias],
        },
      ],
      nacimiento: { anio: '1961', lugar: 'provincia de Ourense', fuentes: [wikiFeijoo] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad de Santiago de Compostela', anio: '1979-1984' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiFeijoo],
      trayectoria: [
        'Funcionario de la Xunta de Galicia desde 1985. Entre 1996 y 2003 ocupó altos cargos en la Administración del Estado.',
        'Fue miembro del Gobierno gallego (2003-2005) y presidente de la Xunta de Galicia desde 2009 hasta 2022, cuando pasó a presidir el PP. Fue el candidato del partido en 2023.',
      ],
      avisos: [
        'Lugar de nacimiento: la ficha de Wikipedia pone Os Peares (Ourense); el texto del mismo artículo dice que nació en la provincia de Ourense y pasó la infancia en la zona. Ninguna fuente oficial consultada lo precisa.',
      ],
      fuentes: [F.congresoBiografias, wikiFeijoo],
    },
    {
      nombre: 'Miguel Tellado Filgueira',
      papel: 'Secretario general',
      cargos: [
        { cargo: 'Secretario general del Partido Popular', desde: 'julio de 2025', fuentes: [estructura, wikiTellado] },
        {
          cargo: 'Diputado por A Coruña',
          desde: '2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias],
        },
      ],
      nacimiento: { anio: '1974', lugar: 'Ferrol (A Coruña)', fuentes: [wikiTellado] },
      estudios: [{ titulo: 'Licenciatura en Ciencias Políticas', centro: 'Universidad de Santiago de Compostela' }],
      fuentesEstudios: [F.congresoBiografias],
      trayectoria: [
        'Secretario general del PP de Galicia (2016-2022) y diputado autonómico (2012-2022). Fue vicesecretario de Organización del PP desde 2022.',
        'Portavoz del Grupo Popular en el Congreso de diciembre de 2023 a julio de 2025.',
      ],
      fuentes: [F.congresoBiografias, F.congresoPortavoces, wikiTellado],
    },
    {
      nombre: 'Borja Sémper Pascual',
      papel: 'Portavoz del partido',
      cargos: [
        { cargo: 'Portavoz y vicesecretario general del Partido Popular', fuentes: [estructura] },
        {
          cargo: 'Diputado por Madrid',
          desde: '2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias],
        },
      ],
      nacimiento: { anio: '1976', lugar: 'Irún (Gipuzkoa)', fuentes: [wikiSemper] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad del País Vasco' },
        { titulo: 'Posgrado en Gestión Pública', centro: 'IESE (Universidad de Navarra)' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiSemper],
      trayectoria: [
        'Concejal en Irún y San Sebastián y parlamentario vasco hasta 2020. Presidió el PP de Gipuzkoa entre 2009 y 2020. Escritor y colaborador en radio.',
      ],
      fuentes: [F.congresoBiografias, wikiSemper],
    },
    {
      nombre: 'Ester Muñoz de la Iglesia',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Popular en el Congreso',
          desde: '07/07/2025, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Diputada por León', desde: '2023', fuentes: [F.congresoBiografias] },
      ],
      nacimiento: { anio: '1985', lugar: 'León', fuentes: [wikiMunoz] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad de León', anio: '2009' },
        { titulo: 'Máster en Derecho Internacional Privado', centro: 'Universidad de Murcia', anio: '2010' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiMunoz],
      trayectoria: [
        'Abogada. Fue senadora por León (2016-2019) y delegada territorial de la Junta de Castilla y León en León (2021-2023).',
      ],
      fuentes: [F.congresoBiografias, wikiMunoz],
    },
  ],
  anunciado: {
    texto:
      'El PP no ha hecho público ningún nombre para un futuro Gobierno. En su declaración del 5 de octubre Feijóo prometió un Gobierno «con autoridad para gobernar» sin citar a nadie. El Plural recoge que no ha revelado quién ocuparía los principales ministerios.',
    fuentes: [declaracion, fuenteDe(elPlural)],
  },
  prensa: [
    {
      nombre: 'Juan Bravo',
      perfil: 'Responsable de Hacienda, Vivienda e Infraestructuras en la dirección del PP',
      menciones: [
        democrata('Lo cita entre los nombres que circulan en el PP, según lo publicado por El País.'),
        elPlural('Podría asumir responsabilidades económicas y las cuentas públicas.'),
        mundiario('Se le menciona para Hacienda.'),
      ],
    },
    {
      nombre: 'Ildefonso Castro',
      perfil: 'Vicesecretario de Internacional del PP; fue secretario de Estado de Exteriores',
      menciones: [
        democrata('Lo cita entre los nombres que circulan en el PP, según lo publicado por El País.'),
        elPlural('Uno de los nombres disponibles para Exteriores, aunque con reservas internas.'),
        mundiario('Su perfil para Exteriores genera debate en el partido.'),
      ],
    },
    {
      nombre: 'Francisco Conde',
      perfil: 'Diputado por Lugo; fue vicepresidente económico de la Xunta con Feijóo',
      menciones: [
        democrata('Lo cita para el área económica, según lo publicado por El País.'),
        elPlural('Se baraja para una hipotética vicepresidencia económica.'),
        mundiario('Entre los posibles aspirantes a una responsabilidad económica de primer nivel.'),
      ],
    },
    {
      nombre: 'José Luis Costa Pillado',
      perfil: 'Vocal del Consejo General del Poder Judicial',
      menciones: [
        elPlural('Se le menciona para Justicia.'),
        mundiario('Entre las opciones para Justicia; lo presenta como especulación, no como decisión.'),
      ],
    },
    {
      nombre: 'Cuca Gamarra',
      perfil: 'Vicesecretaria de Regeneración Institucional del PP',
      menciones: [
        democrata('La cita entre los nombres que circulan en el PP, según lo publicado por El País.'),
        elPlural('Aparece en las quinielas para Defensa y para la Presidencia del Congreso.'),
        mundiario('Su nombre aparece para Defensa, y también para presidir el Congreso.'),
      ],
    },
    {
      nombre: 'Pablo García-Berdoy',
      perfil: 'Diplomático; fue representante permanente de España ante la UE (2016-2021)',
      menciones: [
        democrata('Lo cita entre los nombres que circulan en el PP, según lo publicado por El País.'),
        elPlural('El nombre con más consenso para Exteriores.'),
        mundiario('Uno de los nombres con más apoyos para Exteriores.'),
      ],
    },
    {
      nombre: 'Pablo Hernández de Cos',
      perfil: 'Director general del Banco de Pagos Internacionales; fue gobernador del Banco de España',
      menciones: [
        democrata('Lo cita para el área económica, según lo publicado por El País.'),
        elPlural('Se baraja para una hipotética vicepresidencia económica.'),
        mundiario('Destaca entre los perfiles del área económica.'),
      ],
    },
    {
      nombre: 'Alberto Nadal',
      perfil: 'Responsable de Economía y Desarrollo Sostenible en la dirección del PP; economista del Estado',
      menciones: [
        democrata('Lo cita entre los nombres que circulan en el PP, según lo publicado por El País.'),
        elPlural('Se le relaciona con Economía, Industria o Comercio.'),
        mundiario('Podría asumir funciones de Hacienda, Industria o Comercio.'),
      ],
    },
  ],
  notaPrensa:
    'Son quinielas que los propios medios atribuyen a fuentes del PP. Demócrata advierte de que una lista así «no demuestra que exista un equipo cerrado».',
};
