import { F, oficial, otra, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const cen = oficial('Vox: Comité Ejecutivo Nacional', 'https://www.voxespana.es/espana/comite-ejecutivo-nacional-cen');
const vicesecretarias = oficial(
  'Vox: Vicesecretarías Nacionales',
  'https://www.voxespana.es/vicesecretarias-nacionales',
);
const euronews = otra(
  'Euronews: Vox recuerda sus condiciones para formar gobierno con el PP (05/10/2026)',
  'https://es.euronews.com/2026/10/05/vox-pp-condiciones-gobernar-espana-remigracion-desregularizacion-prioridad-nacional',
);
const wikiAbascal = wiki('Santiago Abascal', 'Santiago_Abascal');
const wikiGarriga = wiki('Ignacio Garriga', 'Ignacio_Garriga');
const wikiMillan = wiki('Pepa Millán', 'Pepa_Millán');
const wikiRuiz = wiki('María Ruiz Solás', 'María_Ruiz_Solás');

export const MiembrosVox: MiembrosPartido = {
  partidoId: 'vox',
  candidatura: {
    estado: 'anunciada',
    texto: 'Santiago Abascal será el candidato de Vox por cuarta vez, según elEconomista.',
    fuentes: [F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Santiago Abascal Conde',
      papel: 'Presidente y candidato',
      cargos: [
        { cargo: 'Presidente de Vox', desde: 'septiembre de 2014', fuentes: [cen, wikiAbascal] },
        { cargo: 'Diputado por Madrid', desde: 'hasta la disolución del 06/10/2026', fuentes: [F.congresoBiografias] },
        { cargo: 'Presidente del partido europeo Patriotas.eu', desde: 'noviembre de 2024', fuentes: [wikiAbascal] },
      ],
      nacimiento: { anio: '1976', lugar: 'Bilbao', fuentes: [wikiAbascal] },
      estudios: [{ titulo: 'Licenciatura en Sociología', centro: 'Universidad de Deusto' }],
      fuentesEstudios: [F.congresoBiografias, wikiAbascal],
      trayectoria: [
        'Militó en el PP, con el que fue concejal de Llodio (1999-2007) y miembro de las Juntas Generales de Álava. Preside Vox desde 2014 y ha sido su candidato en las generales desde 2019.',
      ],
      fuentes: [wikiAbascal, F.congresoBiografias],
    },
    {
      nombre: 'Ignacio Garriga Vaz de Concicao',
      papel: 'Secretario general',
      cargos: [
        { cargo: 'Vicepresidente y secretario general de Vox', desde: 'octubre de 2022', fuentes: [cen, wikiGarriga] },
      ],
      nacimiento: { anio: '1987', lugar: 'Sant Cugat del Vallès (Barcelona)', fuentes: [wikiGarriga] },
      estudios: [{ titulo: 'Licenciatura en Odontología' }],
      fuentesEstudios: [wikiGarriga],
      trayectoria: [
        'Odontólogo en la práctica privada hasta 2019 y profesor en la Universitat Internacional de Catalunya. Militó en el PP desde 2005 y fue diputado de Vox en el Congreso por Barcelona en las legislaturas XIII y XIV.',
      ],
      fuentes: [wikiGarriga],
    },
    {
      nombre: 'Pepa Millán (María José Rodríguez de Millán Parro)',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Vox en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Vocal del Comité Ejecutivo Nacional de Vox', fuentes: [cen] },
      ],
      nacimiento: { anio: '1995', lugar: 'Cabra (Córdoba)', fuentes: [wikiMillan] },
      estudios: [
        { titulo: 'Grado en Derecho', centro: 'Universidad de Sevilla', anio: '2018' },
        { titulo: 'Preparación de las oposiciones a Registradores de la Propiedad' },
        {
          titulo: 'Doble máster de Acceso a la Abogacía y Derecho de la Contratación',
          centro: 'Universidad Pablo de Olavide',
        },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiMillan],
      trayectoria: [
        'Fue asesora del grupo de Vox en el Parlamento de Andalucía (2020-2022) y senadora por designación autonómica (2022-2023). Es diputada por Madrid desde 2023.',
      ],
      avisos: [
        'Máster: la ficha del Congreso (2023) dice que lo estaba «cursando»; Wikipedia, que lo completó en la Universidad Pablo de Olavide en 2020. Se da por buena la ficha oficial: no consta que lo haya terminado.',
      ],
      fuentes: [F.congresoBiografias, wikiMillan],
    },
    {
      nombre: 'María Ruiz Solás',
      papel: 'Organización territorial',
      cargos: [
        {
          cargo: 'Vicesecretaria de Organización Territorial y Relaciones Institucionales de Vox',
          fuentes: [vicesecretarias],
        },
        {
          cargo: 'Portavoz adjunta del Grupo Parlamentario Vox en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1970', lugar: 'Madrid', fuentes: [wikiRuiz] },
      estudios: [
        { titulo: 'Licenciatura en Periodismo', centro: 'CEU San Pablo, adscrito a la Universidad Complutense' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiRuiz],
      trayectoria: [
        'Periodista y empresaria. Fue concejala de Villaviciosa de Odón y es diputada desde 2019, en las legislaturas XIII, XIV y XV.',
      ],
      fuentes: [F.congresoBiografias, wikiRuiz],
    },
  ],
  anunciado: {
    texto:
      'Vox no ha dado nombres para un Gobierno. El 5 de octubre Abascal puso como condiciones para gobernar con el PP la «prioridad nacional», la desregulación y la «remigración», según Euronews.',
    fuentes: [euronews],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias con nombres de Vox para ministerios concretos.',
};
