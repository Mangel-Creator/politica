import { F, oficial, otra, wiki } from './fuentes';
import { FuentesGobierno, GobiernoSumar } from './gobierno-actual';
import type { MiembrosPartido } from './tipos';

const grupoEjecutivo = oficial(
  'Movimiento Sumar: Grupo Ejecutivo, actualizado a 31 de agosto de 2026 (PDF)',
  'https://movimientosumar.es/transparencia/wp-content/uploads/sites/6/2026/08/Grupo-Ejecutivo-MS-2026.pdf',
);
const asamblea = oficial(
  'Movimiento Sumar: Sumar con fuerza. Asamblea 2026 (11/07/2026)',
  'https://movimientosumar.es/sumar-con-fuerza-asamblea-2026-de-movimiento-sumar/',
);
const moncloaDiaz = oficial(
  'La Moncloa: biografía de Yolanda Díaz',
  'https://www.lamoncloa.gob.es/gobierno/Paginas/biografias-xv-legislatura/ministra-yolanda-diaz.aspx',
);
const ministerioRosa = oficial(
  'Ministerio de Derechos Sociales, Consumo y Agenda 2030: currículum de la secretaria de Estado',
  'https://www.dsca.gob.es/es/ministerio/organizacion-institucional/altos-cargos/curriculum_secretaria_estado',
);
const eldiarioFrente = otra(
  'elDiario.es: Los partidos de Sumar anunciarán su candidato el 17 de octubre y su nueva marca será Frente Amplio (04/10/2026)',
  'https://www.eldiario.es/politica/partidos-sumar-anunciaran-candidato-17-octubre-confirman-nueva-marca-sera-frente-amplio_1_13560979.html',
);
const infobaeQuinielas = otra(
  'Infobae: El nuevo Sumar elegirá su líder el 17 de octubre: estos son los candidatos en las quinielas (04/10/2026)',
  'https://www.infobae.com/espana/2026/10/04/el-nuevo-sumar-elegira-a-su-lider-el-17-de-octubre-ante-el-posible-adelanto-electoral-estos-son-los-candidatos-en-las-quinielas/',
);
const elespanolDiaz = otra(
  'El Español: Yolanda Díaz renuncia a liderar la nueva alianza de Sumar (25/02/2026)',
  'https://www.elespanol.com/espana/politica/20260225/yolanda-diaz-renuncia-liderar-nueva-alianza-sumar-no-candidata-elecciones-generales/1003744144958_0.html',
  '2026-10-07',
);
const wikiBarbero = wiki('Verónica Martínez Barbero', 'Verónica_Martínez_Barbero');
const wikiRosa = wiki('Rosa Martínez (política)', 'Rosa_Martínez_(política)');
const wikiUrralburu = wiki('Óscar Urralburu', 'Óscar_Urralburu');
const wikiDiaz = wiki('Yolanda Díaz', 'Yolanda_Díaz');

export const MiembrosSumar: MiembrosPartido = {
  partidoId: 'sumar',
  candidatura: {
    estado: 'pendiente',
    texto:
      'IU, Más Madrid, Comuns y Movimiento Sumar se presentarán como Frente Amplio y anunciarán su candidato o candidata el 17 de octubre de 2026. Según la prensa, suenan Mónica García, Ernest Urtasun y Ada Colau; Pablo Bustinduy ha descartado serlo cada vez que se le ha preguntado.',
    fuentes: [eldiarioFrente, infobaeQuinielas],
  },
  miembros: [
    {
      nombre: 'Verónica Martínez Barbero',
      papel: 'Coordinadora general y portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Coordinadora general de Movimiento Sumar, con Rosa Martínez',
          desde: 'julio de 2026',
          fuentes: [asamblea, grupoEjecutivo],
        },
        {
          cargo: 'Portavoz del Grupo Parlamentario Plurinacional Sumar en el Congreso',
          desde: '13/11/2024, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1980', lugar: 'Gijón', fuentes: [wikiBarbero] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad de Oviedo' },
        { titulo: 'Grado en Administración de Empresas', centro: 'UDIMA' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiBarbero],
      trayectoria: [
        'Inspectora de Trabajo y Seguridad Social (en excedencia). Presidió el Consello Galego de Relacións Laborais (2017-2020) y fue directora general de Trabajo en el Ministerio de Trabajo (2020-2023).',
        'Diputada por Pontevedra desde 2023.',
      ],
      avisos: [
        'Estudios: la ficha del Congreso dice que se graduó en Administración de Empresas por la UDIMA; Wikipedia, que se licenció en Derecho y en Administración y Dirección de Empresas por la Universidad de Oviedo. Se da por buena la ficha oficial.',
      ],
      fuentes: [F.congresoBiografias, wikiBarbero],
    },
    {
      nombre: 'Rosa Martínez Rodríguez',
      papel: 'Coordinadora general',
      cargos: [
        {
          cargo: 'Coordinadora general de Movimiento Sumar, con Verónica Martínez Barbero',
          desde: 'julio de 2026',
          fuentes: [asamblea, grupoEjecutivo],
        },
        { cargo: 'Secretaria de Estado de Derechos Sociales', desde: '2023', fuentes: [ministerioRosa, wikiRosa] },
      ],
      nacimiento: { anio: '1975', lugar: 'León', fuentes: [wikiRosa] },
      estudios: [
        { titulo: 'Licenciatura en Ciencias Políticas', centro: 'Universidad Complutense de Madrid' },
        { titulo: 'Posgrado en Historia' },
      ],
      fuentesEstudios: [ministerioRosa],
      trayectoria: [
        'Fue diputada por Bizkaia en las legislaturas XI y XII como miembro de Equo, en coalición con Podemos.',
      ],
      fuentes: [ministerioRosa, wikiRosa],
    },
    {
      nombre: 'Óscar Urralburu Arza',
      papel: 'Secretario de Organización',
      cargos: [{ cargo: 'Secretario de Organización de Movimiento Sumar', fuentes: [grupoEjecutivo] }],
      nacimiento: { anio: '1971', lugar: 'Pamplona', fuentes: [wikiUrralburu] },
      estudios: [
        { titulo: 'Licenciatura en Bellas Artes', centro: 'Universidad de Castilla-La Mancha' },
        { titulo: 'Doctorado en Bellas Artes', centro: 'Universidad de Murcia' },
      ],
      fuentesEstudios: [wikiUrralburu],
      trayectoria: [
        'Profesor de secundaria y universitario. Fue diputado en la Asamblea Regional de Murcia por Podemos.',
      ],
      fuentes: [wikiUrralburu],
    },
    {
      nombre: 'Yolanda Díaz Pérez',
      papel: 'Vicepresidenta segunda del Gobierno',
      cargos: [
        {
          cargo: 'Vicepresidenta segunda y ministra de Trabajo y Economía Social',
          desde: 'julio de 2021 (ministra desde 2020)',
          fuentes: [moncloaDiaz],
        },
      ],
      nacimiento: { anio: '1971', lugar: 'Fene (A Coruña)', fuentes: [moncloaDiaz] },
      estudios: [
        { titulo: 'Licenciatura en Derecho', centro: 'Universidad de Santiago de Compostela' },
        {
          titulo:
            'Cursos superiores y de posgrado en Relaciones Laborales, Derecho Urbanístico y Ordenación Territorial y Recursos Humanos',
        },
      ],
      fuentesEstudios: [moncloaDiaz],
      trayectoria: [
        'Abogada laboralista. Concejala en Ferrol (2003-2011), diputada en el Parlamento de Galicia (2012-2016) y en el Congreso desde 2016.',
        'Impulsó Sumar en 2022 y fue su candidata en 2023. El 25 de febrero de 2026 anunció que no volverá a ser candidata a las generales.',
      ],
      fuentes: [moncloaDiaz, wikiDiaz, elespanolDiaz],
    },
  ],
  gobiernoActual: {
    texto:
      'Sumar gobierna en coalición con el PSOE desde noviembre de 2023. Estos son los miembros del Gobierno propuestos por Sumar.',
    miembros: GobiernoSumar,
    fuentes: FuentesGobierno,
  },
  anunciado: {
    texto:
      'No ha anunciado qué equipo llevaría a un Gobierno después del 29N. El Frente Amplio presentará su hoja de ruta y su candidatura el 17 de octubre.',
    fuentes: [eldiarioFrente],
  },
  prensa: [],
  notaPrensa:
    'La prensa especula con quién encabezará el Frente Amplio (ver arriba), pero no se han encontrado noticias con nombres para ministerios.',
};
