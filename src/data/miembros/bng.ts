import { F, oficial, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const executiva = oficial('BNG: Executiva Nacional', 'https://www.bng.gal/estaticas/executiva-nacional.html');

export const MiembrosBNG: MiembrosPartido = {
  partidoId: 'bng',
  candidatura: {
    estado: 'pendiente',
    texto:
      'El BNG no ha anunciado todavía quién encabezará sus listas. Según elEconomista, lo previsible es que sea Néstor Rego, diputado en la legislatura que acaba.',
    fuentes: [executiva, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Ana Pontón Mondelo',
      papel: 'Portavoz nacional',
      cargos: [
        {
          cargo: 'Portavoz nacional del BNG',
          desde: 'febrero de 2016',
          fuentes: [executiva, wiki('Ana Pontón', 'Ana_Pontón')],
        },
        { cargo: 'Diputada en el Parlamento de Galicia', desde: '2004', fuentes: [wiki('Ana Pontón', 'Ana_Pontón')] },
      ],
      nacimiento: { anio: '1977', lugar: 'Sarria (Lugo)', fuentes: [wiki('Ana Pontón', 'Ana_Pontón')] },
      estudios: [
        {
          titulo: 'Licenciatura en Ciencias Políticas y de la Administración',
          centro: 'Universidad de Santiago de Compostela',
        },
      ],
      fuentesEstudios: [wiki('Ana Pontón', 'Ana_Pontón')],
      trayectoria: [
        'Empezó a militar a los 16 años en Galiza Nova, las juventudes del BNG. Entró en el Parlamento de Galicia en 2004.',
        'En la XV Asamblea Nacional, el 28 de febrero de 2016, fue elegida portavoz nacional: es la primera mujer al frente del partido.',
      ],
      fuentes: [wiki('Ana Pontón', 'Ana_Pontón')],
    },
    {
      nombre: 'Goretti Sanmartín Rei',
      papel: 'Coordinadora de la Executiva',
      cargos: [
        { cargo: 'Coordinadora de la Executiva Nacional del BNG', fuentes: [executiva] },
        {
          cargo: 'Alcaldesa de Santiago de Compostela',
          desde: '17 de junio de 2023',
          fuentes: [wiki('Goretti Sanmartín', 'Goretti_Sanmartín')],
        },
      ],
      nacimiento: {
        anio: '1964',
        lugar: 'A Estrada (Pontevedra)',
        fuentes: [wiki('Goretti Sanmartín', 'Goretti_Sanmartín')],
      },
      estudios: [
        { titulo: 'Licenciatura en Filología Gallego-Portuguesa' },
        { titulo: 'Doctorado en Filología Gallego-Portuguesa' },
      ],
      fuentesEstudios: [wiki('Goretti Sanmartín', 'Goretti_Sanmartín')],
      trayectoria: [
        'Catedrática de Filología Gallega en la Universidad de A Coruña y miembro correspondiente de la Real Academia Galega desde 2012.',
        'Fue vicepresidenta de la Diputación de A Coruña (2015-2019) y es alcaldesa de Santiago desde 2023, con el apoyo del PSdeG y Compostela Aberta.',
      ],
      fuentes: [wiki('Goretti Sanmartín', 'Goretti_Sanmartín')],
    },
    {
      nombre: 'Lucía López Sobrado',
      papel: 'Organización',
      cargos: [{ cargo: 'Coordinadora del área de Organización de la Executiva Nacional', fuentes: [executiva] }],
      estudios: [],
      fuentesEstudios: [executiva],
      trayectoria: [
        'La web del BNG la sitúa en Arzúa y al frente del área de Organización. No se ha encontrado más información con fuente.',
      ],
      fuentes: [executiva],
    },
    {
      nombre: 'Néstor Rego Candamil',
      papel: 'Diputado en el Congreso',
      cargos: [
        {
          cargo: 'Diputado por A Coruña (Grupo Mixto), portavoz del grupo por turnos',
          desde: '2019, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias, F.congresoPortavoces],
        },
        { cargo: 'Coordinador del área institucional de la Executiva Nacional', fuentes: [executiva] },
        {
          cargo: 'Secretario general de la Unión do Povo Galego (UPG)',
          desde: 'junio de 2012',
          fuentes: [wiki('Néstor Rego', 'Néstor_Rego')],
        },
      ],
      nacimiento: { anio: '1962', lugar: 'O Vicedo (Lugo)', fuentes: [wiki('Néstor Rego', 'Néstor_Rego')] },
      estudios: [{ titulo: 'Licenciatura en Geografía e Historia' }],
      fuentesEstudios: [F.congresoBiografias],
      trayectoria: [
        'Profesor de Lengua y Literatura gallegas en institutos de A Estrada y Santiago. Concejal en Santiago desde 1995 y teniente de alcalde entre 2003 y 2008.',
        'Es diputado desde noviembre de 2019, único del BNG en el Congreso hasta la disolución de 2026.',
      ],
      fuentes: [wiki('Néstor Rego', 'Néstor_Rego'), F.congresoBiografias],
    },
  ],
  anunciado: {
    texto: 'El BNG no ha anunciado ningún equipo para un Gobierno de España.',
    fuentes: [executiva],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes del BNG en un futuro Gobierno.',
};
