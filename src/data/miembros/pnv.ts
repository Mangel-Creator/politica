import { F, oficial, otra, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const ebb = oficial(
  'EAJ-PNV: Euzkadi Buru Batzar (ejecutiva nacional)',
  'https://www.eaj-pnv.eus/es/euskadi-buru-batzarra/',
);
const estebanConvocatoria = oficial(
  'EAJ-PNV: Aitor Esteban, tras la convocatoria electoral (05/10/2026)',
  'https://www.eaj-pnv.eus/es/noticias/58542/aitor-esteban-tras-la-convocatoria-electoral-madri/',
);
const deiaIpinazar = otra(
  'Deia: Maitane Ipiñazar, nueva secretaria del Euzkadi Buru Batzar (01/04/2025)',
  'https://www.deia.eus/politica/2025/04/01/maitane-ipinazar-nueva-secretaria-euzkadi-9469706.html',
  '2026-10-07',
);
const euskadiIpinazar = oficial(
  'Euskadi.eus: guía de entidades, Maitane Ipiñazar Miranda, parlamentaria',
  'https://www.euskadi.eus/maitane-ipinazar-miranda/r61-vedorok/es/',
);
const wikiEsteban = wiki('Aitor Esteban', 'Aitor_Esteban');
const wikiVaquero = wiki('Maribel Vaquero', 'Maribel_Vaquero');
const wikiLegarda = wiki('Mikel Legarda', 'Mikel_Legarda', '2026-10-07');

export const MiembrosPNV: MiembrosPartido = {
  partidoId: 'pnv',
  candidatura: {
    estado: 'pendiente',
    texto:
      'El 5 de octubre de 2026 el presidente del partido anunció que acelerará la elección de sus candidaturas, sin dar nombres. Según elEconomista, podría encabezarlas la portavoz en el Congreso, Maribel Vaquero.',
    fuentes: [estebanConvocatoria, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Aitor Esteban Bravo',
      papel: 'Presidente del EBB',
      cargos: [
        {
          cargo: 'Presidente del Euzkadi Buru Batzar (ejecutiva nacional del PNV)',
          desde: 'marzo de 2025',
          fuentes: [ebb, wikiEsteban],
        },
      ],
      nacimiento: { anio: '1962', lugar: 'Bilbao', fuentes: [wikiEsteban] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad de Deusto', anio: '1985' },
        { titulo: 'Doctorado en Derecho', centro: 'Universidad de Deusto', anio: '1996' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiEsteban],
      trayectoria: [
        'Profesor de Derecho Constitucional y Administrativo en la Universidad de Deusto desde 1987. Presidió las Juntas Generales de Bizkaia (1995-2003).',
        'Diputado en el Congreso desde 2004 y portavoz del Grupo Vasco desde 2012 hasta que dejó el escaño en abril de 2025 para presidir el partido.',
      ],
      fuentes: [wikiEsteban, F.congresoBiografias],
    },
    {
      nombre: 'Maitane Ipiñazar Miranda',
      papel: 'Secretaria del EBB',
      cargos: [
        { cargo: 'Secretaria del Euzkadi Buru Batzar', desde: 'marzo de 2025', fuentes: [deiaIpinazar, ebb] },
        { cargo: 'Parlamentaria vasca', fuentes: [euskadiIpinazar] },
      ],
      estudios: [],
      fuentesEstudios: [euskadiIpinazar, deiaIpinazar],
      trayectoria: [
        'Como secretaria del EBB se encarga de seguir los acuerdos de la ejecutiva, el plan anual del partido, los nuevos estatutos y el registro de afiliados, según Deia.',
      ],
      fuentes: [deiaIpinazar, euskadiIpinazar],
    },
    {
      nombre: 'Maribel Vaquero Montero',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario Vasco (EAJ-PNV) en el Congreso',
          desde: '01/04/2025, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces, deiaIpinazar],
        },
        { cargo: 'Diputada por Gipuzkoa', desde: '2023', fuentes: [F.congresoBiografias] },
      ],
      nacimiento: { anio: '1970', lugar: 'Urnieta (Gipuzkoa)', fuentes: [wikiVaquero] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad del País Vasco' },
        { titulo: 'Posgrado en Administración pública' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiVaquero],
      trayectoria: [
        'Concejala de Urnieta (1995-2019), parlamentaria vasca (2007-2015), directora de Derechos Humanos y Convivencia de la Diputación de Gipuzkoa (2015-2019) y senadora (2019-2023).',
      ],
      fuentes: [F.congresoBiografias, wikiVaquero],
    },
    {
      nombre: 'Mikel Legarda Uriarte',
      papel: 'Portavoz adjunto en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz adjunto del Grupo Parlamentario Vasco en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Diputado por Araba/Álava', fuentes: [F.congresoBiografias] },
      ],
      nacimiento: { anio: '1956', lugar: 'Bilbao', fuentes: [wikiLegarda] },
      estudios: [{ titulo: 'Licenciatura en Derecho', centro: 'Universidad de Deusto' }],
      fuentesEstudios: [F.congresoBiografias],
      trayectoria: [
        'Funcionario de carrera y letrado de los Servicios Jurídicos del Gobierno Vasco, donde fue director de Desarrollo Autonómico y viceconsejero de Seguridad.',
      ],
      fuentes: [F.congresoBiografias, wikiLegarda],
    },
  ],
  anunciado: {
    texto:
      'El PNV no ha anunciado ningún equipo para un Gobierno de España. Su presidente dijo el 5 de octubre que los suyos irán a Madrid a defender los intereses vascos, «no para defender bloques».',
    fuentes: [estebanConvocatoria],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes del PNV en un futuro Gobierno.',
};
