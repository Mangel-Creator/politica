import { F, oficial, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const organizacion = oficial('UPN: organización (cargos unipersonales)', 'https://www.upn.org/organizacion/');
const adelanto = oficial(
  'UPN: Ibarrola celebra el adelanto electoral (05/10/2026)',
  'https://www.upn.org/ibarrola-celebra-el-adelanto-electoral-y-afirma-que-upn-lo-afronta-con-la-misma-ilusion-que-cientos-de-miles-de-navarros-y-espanoles/',
);
const wikiIbarrola = wiki('Cristina Ibarrola', 'Cristina_Ibarrola');
const wikiToquero = wiki('Alejandro Toquero', 'Alejandro_Toquero');
const wikiCatalan = wiki('Alberto Catalán', 'Alberto_Catalán');

export const MiembrosUPN: MiembrosPartido = {
  partidoId: 'upn',
  candidatura: {
    estado: 'pendiente',
    texto:
      'UPN no ha anunciado su cabeza de lista al Congreso. En su primera reacción al adelanto electoral, el 5 de octubre de 2026, no dio nombres.',
    fuentes: [adelanto],
  },
  miembros: [
    {
      nombre: 'Cristina Ibarrola Guillén',
      papel: 'Presidenta',
      cargos: [
        { cargo: 'Presidenta de Unión del Pueblo Navarro', desde: '2024', fuentes: [organizacion, wikiIbarrola] },
        { cargo: 'Candidata de UPN a la Presidencia del Gobierno de Navarra', fuentes: [adelanto] },
      ],
      nacimiento: { anio: '1969', lugar: 'Pamplona', fuentes: [wikiIbarrola] },
      estudios: [
        { titulo: 'Licenciatura en Medicina y Cirugía', centro: 'Universidad de Navarra' },
        { titulo: 'Especialidad en Medicina Familiar y Comunitaria' },
        { titulo: 'Máster en Gestión Sanitaria', centro: 'IESE', anio: '2008' },
        {
          titulo: 'Posgrado en Evaluación de Tecnologías Sanitarias',
          centro: 'Universidad Pompeu Fabra',
          anio: '2016',
        },
        {
          titulo: 'Máster en Gestión y Planificación Sanitaria',
          centro: 'Universidad Europea de Madrid',
          anio: '2018',
        },
      ],
      fuentesEstudios: [wikiIbarrola],
      trayectoria: [
        'Médica de urgencias y de atención primaria. En 2011 fue nombrada directora general de Salud del Gobierno de Navarra y en 2019 fue elegida parlamentaria foral.',
        'Fue alcaldesa de Pamplona de junio a diciembre de 2023.',
      ],
      fuentes: [wikiIbarrola],
    },
    {
      nombre: 'Cristina Sota',
      papel: 'Secretaria general',
      cargos: [{ cargo: 'Secretaria general de Unión del Pueblo Navarro', fuentes: [organizacion] }],
      estudios: [],
      fuentesEstudios: [organizacion],
      trayectoria: ['No se ha encontrado información biográfica con fuente más allá de su cargo en el partido.'],
      fuentes: [organizacion],
    },
    {
      nombre: 'Alejandro Toquero Gil',
      papel: 'Vicepresidente',
      cargos: [
        { cargo: 'Vicepresidente de Unión del Pueblo Navarro', fuentes: [organizacion] },
        { cargo: 'Alcalde de Tudela', desde: '2019', fuentes: [wikiToquero] },
      ],
      nacimiento: { anio: '1979', lugar: 'Tudela (Navarra)', fuentes: [wikiToquero] },
      estudios: [{ titulo: 'Licenciatura en Ciencias de la Información', centro: 'Universidad de Salamanca' }],
      fuentesEstudios: [wikiToquero],
      trayectoria: [
        'Periodista. Trabajó en marketing y comunicación en empresas privadas y fue responsable de comunicación de la Consejería de Sanidad del Gobierno de Aragón (2011-2015). Se afilió a UPN en 2015.',
      ],
      fuentes: [wikiToquero],
    },
    {
      nombre: 'Alberto Catalán Higueras',
      papel: 'Diputado en el Congreso',
      cargos: [
        {
          cargo: 'Diputado por Navarra (Grupo Mixto), portavoz del grupo por turnos',
          desde: '2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias, F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1962', lugar: 'Corella (Navarra)', fuentes: [wikiCatalan] },
      estudios: [{ titulo: 'Licenciatura en Farmacia', centro: 'Universidad de Navarra' }],
      fuentesEstudios: [F.congresoBiografias, wikiCatalan],
      trayectoria: [
        'Afiliado a UPN desde 1987. Elegido parlamentario foral en 1991, fue consejero y portavoz del Gobierno de Navarra, presidente del Parlamento de Navarra y senador.',
      ],
      fuentes: [F.congresoBiografias, wikiCatalan],
    },
  ],
  anunciado: {
    texto: 'UPN no ha anunciado ningún equipo para un Gobierno de España.',
    fuentes: [adelanto],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes de UPN en un futuro Gobierno.',
};
