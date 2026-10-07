import { F, oficial, otra, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const ccValido = oficial(
  'Coalición Canaria: CC apuesta por Cristina Valido y llama a la unidad nacionalista (05/10/2026)',
  'https://coalicioncanaria.org/cc-apuesta-por-cristina-valido-y-llama-a-la-unidad-nacionalista-para-blindar-la-voz-de-canarias-en-madrid/',
);
const ccWeb = oficial(
  'Coalición Canaria: web oficial, apartado Secretaría General',
  'https://coalicioncanaria.org/organigrama/',
);
const parcanClavijo = oficial(
  'Parlamento de Canarias: biografía de Fernando Clavijo Batlle',
  'https://www.parcan.es/composicion/diputados/diputado/11009/biografia/',
);
const parcanToledo = oficial(
  'Parlamento de Canarias: biografía de David Jesús Toledo Niz',
  'https://www.parcan.es/composicion/diputados/diputado/11021/biografia/',
);
const parcanBarragan = oficial(
  'Parlamento de Canarias: biografía de José Miguel Barragán Cabrera',
  'https://www.parcan.es/composicion/diputados/diputado/11004/biografia/',
  '2026-10-07',
);
const wikiClavijo = wiki('Fernando Clavijo Batlle', 'Fernando_Clavijo_Batlle');
const wikiValido = wiki('Cristina Valido', 'Cristina_Valido');

export const MiembrosCC: MiembrosPartido = {
  partidoId: 'cc',
  candidatura: {
    estado: 'propuesta',
    texto:
      'El 5 de octubre de 2026 el Comité Ejecutivo Nacional propuso por unanimidad a Cristina Valido como cabeza de lista por Santa Cruz de Tenerife. Falta que lo apruebe el Consejo Político Nacional. En Las Palmas, el partido estudia ir en coalición.',
    fuentes: [ccValido],
  },
  miembros: [
    {
      nombre: 'Fernando Clavijo Batlle',
      papel: 'Secretario general',
      cargos: [
        { cargo: 'Secretario general de Coalición Canaria', fuentes: [ccWeb, wikiClavijo] },
        {
          cargo: 'Presidente del Gobierno de Canarias',
          desde: 'julio de 2023 (antes, de 2015 a 2019)',
          fuentes: [wikiClavijo],
        },
      ],
      nacimiento: { anio: '1971', lugar: 'San Cristóbal de La Laguna (Tenerife)', fuentes: [wikiClavijo] },
      estudios: [
        {
          titulo: 'Licenciatura en Ciencias Económicas y Empresariales',
          centro: 'Universidad de La Laguna',
          anio: '1997',
        },
      ],
      fuentesEstudios: [parcanClavijo],
      trayectoria: [
        'Fue concejal y alcalde de San Cristóbal de La Laguna antes de presidir el Gobierno de Canarias entre 2015 y 2019. Volvió a la presidencia en julio de 2023.',
        'Su partido lo proclamó en septiembre de 2026 candidato a la Presidencia de Canarias para 2027.',
      ],
      avisos: [
        'Caso Grúas: investigado por la concesión de la retirada de vehículos cuando era alcalde de La Laguna. El 9 de junio de 2020 el Tribunal Supremo archivó la causa al no ver prevaricación ni malversación, en contra del criterio del juzgado que la había enviado.',
        'Caso Reparos: investigado por contratos prorrogados pese a los reparos de la Intervención municipal de La Laguna. El Supremo archivó su parte en marzo de 2023. El denunciante, el socialista Santiago Pérez, anunció un recurso, pero en julio de 2026 contó que no llegó a presentarlo y dejó la acusación.',
      ],
      fuentes: [
        wikiClavijo,
        oficial('Coalición Canaria: noticias del partido', 'https://coalicioncanaria.org/'),
        otra(
          'La Voz de Lanzarote: el Supremo archiva la causa contra Clavijo por el caso Grúas (09/06/2020)',
          'https://www.lavozdelanzarote.com/en/news/courts/the-supreme-court-dismisses-the-case-against-fernando-clavijo-for-the-gruas-case-against-the-criteria-of-the-court_151411_102.html',
        ),
        otra(
          'Diario de Avisos: Pérez: «Que se exonere a Clavijo del caso Reparos es incomprensible» (03/2023)',
          'https://diariodeavisos.elespanol.com/2023/03/exonere-clavijo-caso-reparos-es-incomprensible/',
        ),
        otra(
          'Diario de Avisos: Santiago Pérez deja la acusación del caso Reparos (28/07/2026)',
          'https://diariodeavisos.elespanol.com/2026/07/santiago-perez-santos-cerdan-me-ordeno-no-recurrir-archivo-caso-reparos-no-acepte/',
        ),
      ],
    },
    {
      nombre: 'David Toledo Niz',
      papel: 'Secretario de Organización',
      cargos: [
        {
          cargo: 'Secretario nacional de Organización de Coalición Canaria',
          desde: '2021',
          fuentes: [parcanToledo, ccValido],
        },
        {
          cargo: 'Diputado por Lanzarote en el Parlamento de Canarias y presidente del Grupo Nacionalista Canario',
          desde: '2023',
          fuentes: [parcanToledo],
        },
      ],
      estudios: [
        { titulo: 'Grado en Ciencias Políticas y de la Administración', centro: 'Universidad de Granada' },
        { titulo: 'Experto universitario en Gestión Pública', centro: 'Universidad Tecnológica de las Islas Canarias' },
      ],
      fuentesEstudios: [parcanToledo],
      trayectoria: [
        'Fue secretario general de Jóvenes Nacionalistas de Canarias (2017-2021) y teniente de alcalde de Arrecife (2021-2023).',
      ],
      fuentes: [parcanToledo],
    },
    {
      nombre: 'Cristina Valido García',
      papel: 'Diputada en el Congreso',
      cargos: [
        {
          cargo: 'Diputada por Santa Cruz de Tenerife (Grupo Mixto), portavoz del grupo por turnos',
          desde: 'agosto de 2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias, F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1969', lugar: 'Las Palmas de Gran Canaria', fuentes: [wikiValido] },
      estudios: [
        { titulo: 'Graduada en Historia' },
        { titulo: 'Técnica especialista en Administración de Empresas' },
        { titulo: 'Experta universitaria en Desarrollo Local y en Gestión Pública' },
        { titulo: 'Estudios de Filología' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiValido],
      trayectoria: [
        'Fue concejala de La Orotava, consejera y vicepresidenta del Cabildo de Tenerife, consejera de Políticas Sociales y Empleo del Gobierno de Canarias y diputada autonómica.',
      ],
      avisos: [
        'Historia: la ficha del Congreso dice que es graduada; Wikipedia, que cursa el grado en la Universidad de La Laguna. Se da por buena la ficha oficial.',
      ],
      fuentes: [F.congresoBiografias, wikiValido],
    },
    {
      nombre: 'José Miguel Barragán Cabrera',
      papel: 'Portavoz en el Parlamento de Canarias',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Nacionalista Canario en el Parlamento de Canarias',
          desde: '2023',
          fuentes: [
            parcanBarragan,
            otra(
              'RTVC: los grupos que apoyan al Gobierno en el Debate del Estado de la Nacionalidad (11/03/2026)',
              'https://rtvc.es/debate-estado-nacionalidad-canaria-grupos-parlamentarios-segundo-dia-11-marzo-2026/',
              '2026-10-07',
            ),
          ],
        },
      ],
      estudios: [
        { titulo: 'Acceso a la universidad para mayores de 25 años' },
        { titulo: 'Administración y Contabilidad', centro: 'Essite' },
      ],
      fuentesEstudios: [parcanBarragan],
      trayectoria: [
        'Diputado autonómico entre 1996 y 2015 y de nuevo desde 2019. Ha sido viceconsejero de Presidencia y consejero de Presidencia, Justicia e Igualdad del Gobierno de Canarias, y concejal de Tuineje.',
      ],
      fuentes: [parcanBarragan],
    },
  ],
  anunciado: {
    texto:
      'Coalición Canaria no ha anunciado ningún equipo para un Gobierno de España. Su objetivo declarado es tener grupo propio en el Congreso.',
    fuentes: [ccValido],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes de CC en un futuro Gobierno.',
};
