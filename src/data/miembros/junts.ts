import { F, oficial, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const executiva = oficial('Junts per Catalunya: Executiva', 'https://junts.cat/qui-som/equip/executiva/');
const wikiPuigdemont = wiki('Carles Puigdemont', 'Carles_Puigdemont');
const wikiTurull = wiki('Jordi Turull', 'Jordi_Turull');
const wikiNogueras = wiki('Míriam Nogueras', 'Míriam_Nogueras');

export const MiembrosJunts: MiembrosPartido = {
  partidoId: 'junts',
  candidatura: {
    estado: 'pendiente',
    texto:
      'Junts no ha confirmado su cabeza de lista. Según elEconomista, puede ser la portavoz en el Congreso, Míriam Nogueras, pendiente de lo que pase con la situación judicial de Carles Puigdemont.',
    fuentes: [executiva, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Carles Puigdemont i Casamajó',
      papel: 'Presidente',
      cargos: [
        {
          cargo: 'Presidente de Junts per Catalunya',
          desde: 'octubre de 2024 (antes, de 2020 a 2022)',
          fuentes: [executiva, wikiPuigdemont],
        },
        { cargo: 'Presidente de la Generalitat de Catalunya', desde: '2016 a 2017', fuentes: [wikiPuigdemont] },
      ],
      nacimiento: { anio: '1962', lugar: 'Amer (Girona)', fuentes: [wikiPuigdemont] },
      estudios: [{ titulo: 'Filología Catalana', centro: 'Universidad de Girona', estado: 'sin terminar' }],
      fuentesEstudios: [wikiPuigdemont],
      trayectoria: [
        'Periodista en varios medios catalanes. Fue alcalde de Girona (2011-2016) y diputado en el Parlament por CiU y Junts pel Sí.',
        'Como presidente de la Generalitat convocó el referéndum del 1 de octubre de 2017. Fue cesado con el artículo 155 y el 29 de octubre se marchó a Bélgica. Elegido eurodiputado en 2019, lo fue hasta 2024.',
      ],
      avisos: [
        'Estudios: Wikipedia dice que empezó Filología Catalana y no la terminó porque se dedicó al periodismo; la web de Junts lo presenta como periodista.',
        'Situación judicial: estaba procesado en rebeldía por malversación. El 6 de octubre de 2026 el Constitucional declaró amnistiada la malversación en el recurso de la exconsellera Dolors Bassa y, ese mismo día, el juez del Supremo Pablo Llarena levantó la orden de detención nacional contra Puigdemont. Falta que el Supremo le aplique la amnistía.',
      ],
      fuentes: [wikiPuigdemont, executiva, F.deiaAmnistia],
    },
    {
      nombre: 'Jordi Turull i Negre',
      papel: 'Secretario general',
      cargos: [{ cargo: 'Secretario general de Junts per Catalunya', desde: '2022', fuentes: [executiva, wikiTurull] }],
      nacimiento: { anio: '1966', lugar: 'Parets del Vallès (Barcelona)', fuentes: [executiva, wikiTurull] },
      estudios: [{ titulo: 'Licenciatura en Derecho', centro: 'Universidad Autónoma de Barcelona' }],
      fuentesEstudios: [executiva, wikiTurull],
      trayectoria: [
        'Abogado; empezó a trabajar como funcionario municipal en 1990. Diputado en el Parlament entre 2004 y 2018 por CiU y Junts.',
        'En 2017 fue consejero de la Presidencia y portavoz del Govern de Carles Puigdemont.',
      ],
      avisos: [
        'Procés: el Supremo lo condenó en 2019 a 12 años de prisión por sedición y malversación. Fue indultado en 2021. Falta que el Supremo le declare amnistiada la malversación, tras el fallo del Constitucional del 6 de octubre de 2026.',
      ],
      fuentes: [executiva, wikiTurull, F.deiaAmnistia],
    },
    {
      nombre: 'Míriam Nogueras i Camero',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Junts per Catalunya en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Vicepresidenta de Junts per Catalunya', fuentes: [executiva] },
        {
          cargo: 'Diputada por Barcelona',
          desde: 'elegida por primera vez en 2015',
          fuentes: [executiva, wikiNogueras],
        },
      ],
      nacimiento: { anio: '1980', lugar: 'Dosrius (Barcelona)', fuentes: [executiva, wikiNogueras] },
      estudios: [],
      fuentesEstudios: [executiva, wikiNogueras, F.congresoBiografias],
      trayectoria: [
        'Empresaria del sector textil. Fue concejala de Cardedeu en 2015 como independiente en las listas de CDC y ese mismo año llegó al Congreso con Democràcia i Llibertat.',
        'Fue vicepresidenta del PDeCAT (2018-2020) hasta pasarse a Junts.',
      ],
      fuentes: [wikiNogueras, executiva],
    },
    {
      nombre: 'Josep Rius i Alcaraz',
      papel: 'Vicepresidente y portavoz del partido',
      cargos: [{ cargo: 'Vicepresidente y portavoz de Junts per Catalunya', fuentes: [executiva] }],
      nacimiento: { anio: '1974', fuentes: [executiva] },
      estudios: [],
      fuentesEstudios: [executiva],
      trayectoria: [
        'Abogado. Diputado en el Parlament desde marzo de 2021 y concejal de Barcelona. Fue jefe de gabinete de los presidentes Carles Puigdemont y Quim Torra y director general de Análisis y Prospectiva de la Presidencia.',
      ],
      fuentes: [executiva],
    },
    {
      nombre: 'Judith Toronjo',
      papel: 'Secretaria de Organización',
      cargos: [{ cargo: 'Secretaria de Organización de Junts per Catalunya', fuentes: [executiva] }],
      estudios: [{ titulo: 'Ciencias Políticas' }, { titulo: 'Estudios de Derecho' }],
      fuentesEstudios: [executiva],
      trayectoria: [
        'Fue secretaria general de la Joventut Nacionalista de Catalunya (JNC) y responsable de contratación en un consorcio universitario.',
      ],
      avisos: [
        'Estudios: la web de Junts dice que es «politóloga» y que «tiene estudios en derecho», sin precisar títulos ni centros.',
      ],
      fuentes: [executiva],
    },
  ],
  anunciado: {
    texto: 'Junts no ha anunciado ningún equipo para un Gobierno de España.',
    fuentes: [executiva],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes de Junts en un futuro Gobierno.',
};
