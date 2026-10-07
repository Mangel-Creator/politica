import { F, oficial, otra, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const organos = oficial('Podemos: órganos estatales', 'https://podemos.info/organos-estatales/');
const anuncioMontero = otra(
  'elDiario.es (Europa Press): Podemos anuncia que Irene Montero será su candidata a las elecciones generales (06/04/2025)',
  'https://www.eldiario.es/politica/anuncia-irene-montero-sera-candidata-elecciones-generales-mano-tendida-izquierda_1_12197370.html',
  '2026-10-07',
);
const wikiBelarra = wiki('Ione Belarra', 'Ione_Belarra');
const wikiMontero = wiki('Irene Montero', 'Irene_Montero');
const wikiFernandez = wiki('Pablo Fernández Santos', 'Pablo_Fernández_Santos');
const wikiSerna = wiki('Javier Sánchez Serna', 'Javier_Sánchez_Serna');

export const MiembrosPodemos: MiembrosPartido = {
  partidoId: 'podemos',
  candidatura: {
    estado: 'anunciada',
    texto:
      'El 6 de abril de 2025 la secretaria general, Ione Belarra, anunció que Irene Montero liderará una candidatura de Podemos a las generales, abierta a otras fuerzas de izquierda. Según elEconomista (05/10/2026), Podemos aún no ha dicho si irá solo o con otros y propone unas primarias el 14 y 15 de octubre para elegir una candidatura conjunta.',
    fuentes: [anuncioMontero, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Ione Belarra Urteaga',
      papel: 'Secretaria general',
      cargos: [
        { cargo: 'Secretaria general de Podemos', desde: 'junio de 2021', fuentes: [organos, wikiBelarra] },
        {
          cargo: 'Diputada por Madrid (Grupo Mixto), portavoz del grupo por turnos',
          desde: 'hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias, F.congresoPortavoces],
        },
      ],
      nacimiento: { anio: '1987', lugar: 'Pamplona', fuentes: [wikiBelarra] },
      estudios: [
        { titulo: 'Técnica superior en Integración Social' },
        { titulo: 'Licenciatura en Psicología', centro: 'Universidad Autónoma de Madrid' },
        { titulo: 'Máster en Psicología de la Educación' },
        { titulo: 'Doctorado en Educación, Desarrollo y Aprendizaje (segundo año)', estado: 'sin terminar' },
      ],
      fuentesEstudios: [F.congresoBiografias, wikiBelarra],
      trayectoria: [
        'Trabajó en Cruz Roja, la Comisión Española de Ayuda al Refugiado y la Universidad Autónoma de Madrid.',
        'Fue secretaria de Estado para la Agenda 2030 (2020-2021) y ministra de Derechos Sociales y Agenda 2030 (2021-2023).',
      ],
      avisos: [
        'Doctorado: la ficha del Congreso dice que cursó el «segundo año de doctorado»; no consta que lo terminara.',
      ],
      fuentes: [F.congresoBiografias, wikiBelarra],
    },
    {
      nombre: 'Irene Montero Gil',
      papel: 'Candidata y secretaria política',
      cargos: [
        { cargo: 'Secretaria política de Podemos', fuentes: [organos] },
        { cargo: 'Eurodiputada', desde: '2024', fuentes: [wikiMontero] },
      ],
      nacimiento: { anio: '1988', lugar: 'Madrid', fuentes: [wikiMontero] },
      estudios: [
        { titulo: 'Licenciatura en Psicología', centro: 'Universidad Autónoma de Madrid' },
        { titulo: 'Máster en Psicología de la Educación', centro: 'Universidad Autónoma de Madrid', anio: '2013' },
        { titulo: 'Tesis doctoral', estado: 'sin terminar' },
      ],
      fuentesEstudios: [wikiMontero],
      trayectoria: [
        'Miembro del Consejo Ciudadano Estatal de Podemos desde 2014. Fue ministra de Igualdad entre enero de 2020 y noviembre de 2023.',
      ],
      avisos: [
        'Doctorado: según Wikipedia, obtuvo un contrato predoctoral en la Autónoma, pero decidió no terminar la tesis por su dedicación a la política.',
      ],
      fuentes: [wikiMontero, organos],
    },
    {
      nombre: 'Pablo Fernández Santos',
      papel: 'Secretario de Organización y portavoz',
      cargos: [{ cargo: 'Secretario de Organización estatal y portavoz de Podemos', fuentes: [organos] }],
      nacimiento: { anio: '1976', lugar: 'León', fuentes: [wikiFernandez] },
      estudios: [{ titulo: 'Licenciatura en Derecho', centro: 'Universidad Complutense de Madrid' }],
      fuentesEstudios: [wikiFernandez],
      trayectoria: [
        'Procurador en las Cortes de Castilla y León entre 2015 y 2026 y secretario general de Podemos en Castilla y León hasta 2025.',
      ],
      fuentes: [wikiFernandez],
    },
    {
      nombre: 'Javier Sánchez Serna',
      papel: 'Diputado en el Congreso',
      cargos: [
        {
          cargo: 'Diputado por Murcia (Grupo Mixto)',
          desde: '2016, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoBiografias, wikiSerna],
        },
        { cargo: 'Coordinador autonómico de Podemos en la Región de Murcia', fuentes: [organos] },
      ],
      nacimiento: { anio: '1985', lugar: 'Murcia', fuentes: [wikiSerna] },
      estudios: [{ titulo: 'Licenciatura en Filosofía' }, { titulo: 'Máster en Sociología aplicada' }],
      fuentesEstudios: [F.congresoBiografias],
      trayectoria: ['Diputado en las legislaturas XI a XV. Miembro del Consejo Ciudadano Estatal de Podemos.'],
      fuentes: [F.congresoBiografias, wikiSerna],
    },
  ],
  anunciado: {
    texto: 'Podemos no ha anunciado ningún equipo de gobierno.',
    fuentes: [organos],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias con nombres de Podemos para un futuro Gobierno.',
};
