import { F, oficial, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const fitxa = (ruta: string, nombre: string) =>
  oficial(`Esquerra Republicana: fitxa de ${nombre}`, `https://www.esquerra.cat/qui-som/${ruta}/`);
const quiSom = oficial('Esquerra Republicana: Qui som (Executiva Nacional)', 'https://www.esquerra.cat/qui-som/');
const fJunqueras = fitxa('oriol-junqueras', 'Oriol Junqueras');
const fAlamany = fitxa('elisenda-alamany', 'Elisenda Alamany');
const fRufian = fitxa('gabriel-rufian', 'Gabriel Rufián');
const fMorales = fitxa('pau-morales', 'Pau Morales');
const wikiJunqueras = wiki('Oriol Junqueras', 'Oriol_Junqueras');
const wikiAlamany = wiki('Elisenda Alamany', 'Elisenda_Alamany');
const wikiRufian = wiki('Gabriel Rufián', 'Gabriel_Rufián');

export const MiembrosERC: MiembrosPartido = {
  partidoId: 'erc',
  candidatura: {
    estado: 'pendiente',
    texto:
      'ERC no ha proclamado aún a su cabeza de lista. Según elEconomista, el candidato propuesto es otra vez Gabriel Rufián, que no lo ha confirmado; el partido ha abierto sus primarias y el plazo para ratificarlo acaba el 17 de octubre.',
    fuentes: [quiSom, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Oriol Junqueras Vies',
      papel: 'Presidente',
      cargos: [
        {
          cargo: 'Presidente de Esquerra Republicana',
          desde: '2011; reelegido el 14 de diciembre de 2024',
          fuentes: [quiSom, fJunqueras, wikiJunqueras],
        },
      ],
      nacimiento: { anio: '1969', lugar: 'Barcelona', fuentes: [fJunqueras, wikiJunqueras] },
      estudios: [
        { titulo: 'Licenciatura en Historia Moderna y Contemporánea' },
        { titulo: 'Doctorado en Historia del Pensamiento Económico', centro: 'Universidad de Barcelona' },
      ],
      fuentesEstudios: [fJunqueras, wikiJunqueras],
      trayectoria: [
        'Historiador y profesor en la Universidad Autónoma de Barcelona. Fue eurodiputado (2009-2011) y alcalde de Sant Vicenç dels Horts (2011-2015).',
        'Entre 2016 y 2017 fue vicepresidente del Govern y consejero de Economía y Hacienda, con Carles Puigdemont de presidente.',
      ],
      avisos: [
        'Centro: la web de ERC sitúa sus estudios en la Universidad de Barcelona; Wikipedia dice que los empezó allí, los continuó en la Autónoma de Barcelona y se doctoró en 2002. Las dos coinciden en los títulos.',
        'Procés: en prisión preventiva desde noviembre de 2017, el Supremo lo condenó en octubre de 2019 a 13 años por sedición y malversación. Fue indultado en junio de 2021. La ley de amnistía (2024) la avaló el Constitucional en 2025, pero el Supremo no la aplicó a la malversación. El 6 de octubre de 2026 el Constitucional dio la razón a la exconsellera Dolors Bassa en ese punto; falta que el Supremo declare amnistiada la malversación de Junqueras.',
      ],
      fuentes: [
        fJunqueras,
        wikiJunqueras,
        wiki('Ley de amnistía de España de 2024', 'Ley_de_amnistía_de_España_de_2024'),
        F.deiaAmnistia,
      ],
    },
    {
      nombre: 'Elisenda Alamany Gutiérrez',
      papel: 'Secretaria general',
      cargos: [
        {
          cargo: 'Secretaria general de Esquerra Republicana',
          desde: 'diciembre de 2024',
          fuentes: [quiSom, fAlamany],
        },
      ],
      nacimiento: { anio: '1983', lugar: 'Barcelona', fuentes: [fAlamany, wikiAlamany] },
      estudios: [
        { titulo: 'Licenciatura en Filología Catalana', centro: 'Universidad Autónoma de Barcelona' },
        { titulo: 'Especialización en gestión de la diversidad lingüística y cultural', centro: 'UOC', anio: '2012' },
        { titulo: 'Máster en Dirección Pública', centro: 'ESADE' },
      ],
      fuentesEstudios: [fAlamany],
      trayectoria: [
        'Profesora de secundaria y de catalán. Fue concejala en Castellar del Vallès (2007-2015) y diputada en el Parlament (2017-2019), elegida en las listas de Catalunya en Comú-Podem.',
        'Concejala en el Ayuntamiento de Barcelona desde 2019, preside el grupo municipal de ERC desde diciembre de 2023.',
      ],
      fuentes: [fAlamany, wikiAlamany],
    },
    {
      nombre: 'Gabriel Rufián Romero',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Republicano en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces, fRufian],
        },
        { cargo: 'Diputado por Barcelona', desde: 'las elecciones de 2015', fuentes: [fRufian, F.congresoBiografias] },
      ],
      nacimiento: { anio: '1982', lugar: 'Santa Coloma de Gramenet (Barcelona)', fuentes: [fRufian, wikiRufian] },
      estudios: [
        { titulo: 'Diplomatura en Relaciones Laborales', centro: 'Universidad Pompeu Fabra' },
        { titulo: 'Máster en Dirección de Recursos Humanos', centro: 'Universidad Pompeu Fabra' },
      ],
      fuentesEstudios: [F.congresoBiografias, fRufian],
      trayectoria: [
        'Trabajó más de diez años en recursos humanos. Desde 2014 participó en la entidad independentista Súmate y en la ANC.',
        'Encabezó la lista de ERC al Congreso en 2015 y ha sido diputado desde entonces.',
      ],
      fuentes: [fRufian, wikiRufian],
    },
    {
      nombre: 'Pau Morales Romero',
      papel: 'Organización',
      cargos: [
        {
          cargo: 'Vicesecretario general de Organización, Finanzas y Lucha Antirrepresiva',
          desde: 'secretario de Organización desde noviembre de 2022',
          fuentes: [quiSom, fMorales],
        },
      ],
      nacimiento: { anio: '1994', lugar: 'Vilassar de Dalt (Barcelona)', fuentes: [fMorales] },
      estudios: [{ titulo: 'Grado en Historia', centro: 'Universidad de Barcelona' }],
      fuentesEstudios: [fMorales],
      trayectoria: [
        'Fue portavoz nacional de las juventudes de ERC (2016-2020) y fue elegido concejal en Vilassar de Dalt en 2015.',
      ],
      fuentes: [fMorales],
    },
  ],
  anunciado: {
    texto: 'ERC no ha anunciado ningún equipo para un Gobierno de España.',
    fuentes: [quiSom],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes de ERC en un futuro Gobierno.',
};
