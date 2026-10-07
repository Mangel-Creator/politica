import { F, oficial, otra, wiki } from './fuentes';
import type { MiembrosPartido } from './tipos';

const ejecutiva = oficial('EH Bildu: Ejecutiva de Hegoalde', 'https://ehbildu.eus/es/hegoidazkaritza');
const wikiOtegi = wiki('Arnaldo Otegi', 'Arnaldo_Otegi');
const wikiAizpurua = wiki('Mertxe Aizpurua', 'Mertxe_Aizpurua');
const wikiMatute = wiki('Oskar Matute', 'Oskar_Matute');

export const MiembrosEHBildu: MiembrosPartido = {
  partidoId: 'eh-bildu',
  candidatura: {
    estado: 'pendiente',
    texto:
      'EH Bildu no ha anunciado todavía su cabeza de lista. Según elEconomista, la favorita es la portavoz en el Congreso, Mertxe Aizpurua, y la decisión la tiene que aprobar la militancia.',
    fuentes: [ejecutiva, F.eleconomistaListas],
  },
  miembros: [
    {
      nombre: 'Arnaldo Otegi Mondragón',
      papel: 'Secretario general',
      cargos: [
        { cargo: 'Secretario general de EH Bildu (Ejecutiva de Hegoalde)', fuentes: [ejecutiva] },
        { cargo: 'Coordinador general de EH Bildu', desde: '2017', fuentes: [wikiOtegi] },
      ],
      nacimiento: { anio: '1958', lugar: 'Elgoibar (Gipuzkoa)', fuentes: [wikiOtegi] },
      estudios: [{ titulo: 'Licenciatura en Filosofía y Letras', anio: 'la cursó en prisión, antes de 1993' }],
      fuentesEstudios: [wikiOtegi],
      trayectoria: [
        'En 1977 ingresó en ETA político-militar, más tarde pasó a ETA militar y después dejó la organización. Fue condenado por el secuestro en 1979 del directivo de Michelin Luis Abaitua y estuvo en prisión hasta mayo de 1993.',
        'Fue dirigente de Herri Batasuna y Batasuna. En 2017 EH Bildu se refundó como partido con él de coordinador general; hoy la web del partido lo presenta como secretario general.',
      ],
      avisos: [
        'Cargo: Wikipedia lo llama coordinador general desde 2017; la web oficial de EH Bildu, secretario general. Se usa el nombre que da el partido.',
        'Caso Bateragune: condenado con otros cuatro dirigentes por pertenencia a ETA por intentar reconstruir Batasuna; en 2012 el Supremo fijó penas de seis a seis años y medio, que cumplieron. En 2018 el Tribunal Europeo de Derechos Humanos concluyó que no tuvieron un juez imparcial; en 2020 el Supremo anuló la condena y mandó repetir el juicio, y en 2024 el Constitucional lo impidió porque ya habían cumplido las penas. En octubre de 2025 el Tribunal Europeo inadmitió una nueva demanda de los cinco.',
      ],
      fuentes: [
        wikiOtegi,
        wiki('Caso Bateragune', 'Caso_Bateragune'),
        otra(
          'Onda Vasca: El Constitucional ampara a Otegi y rechaza repetir el juicio del caso Bateragune',
          'https://www.ondavasca.com/el-constitucional-ampara-a-otegi-y-rechaza-repetir-el-juicio-contra-el-por-el-caso-bateragune/amp/',
        ),
        otra(
          'Orain: El TEDH rechaza la demanda de los cinco condenados en el caso Bateragune (23/10/2025)',
          'https://orain.eus/es/politica/2025/10/23/el-tedh-rechaza-la-demanda-los-cinco-condenados-en-el-caso-bateragune-la-anulacion-su-condena-pertenencia/',
        ),
      ],
    },
    {
      nombre: 'Sonia Jacinto',
      papel: 'Secretaria de Organización',
      cargos: [{ cargo: 'Secretaria de Organización de la Ejecutiva de Hegoalde', fuentes: [ejecutiva] }],
      estudios: [],
      fuentesEstudios: [ejecutiva],
      trayectoria: ['No se ha encontrado información biográfica con fuente más allá de su cargo en el partido.'],
      fuentes: [ejecutiva],
    },
    {
      nombre: 'Mertxe Aizpurua Arzallus',
      papel: 'Portavoz en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz del Grupo Parlamentario EH Bildu en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Diputada por Gipuzkoa', desde: '2019', fuentes: [F.congresoBiografias, wikiAizpurua] },
      ],
      nacimiento: { anio: '1960', lugar: 'Usurbil (Gipuzkoa)', fuentes: [wikiAizpurua] },
      estudios: [{ titulo: 'Licenciatura en Ciencias de la Información' }],
      fuentesEstudios: [F.congresoBiografias],
      trayectoria: [
        'Periodista. Fue alcaldesa de Usurbil (2011-2015) y presidenta de Udalbiltza (2012-2015). Es diputada desde 2019, en las legislaturas XIII, XIV y XV.',
      ],
      fuentes: [F.congresoBiografias, wikiAizpurua],
    },
    {
      nombre: 'Oskar Matute García de Jalón',
      papel: 'Portavoz adjunto en el Congreso',
      cargos: [
        {
          cargo: 'Portavoz adjunto del Grupo Parlamentario EH Bildu en el Congreso',
          desde: '14/09/2023, hasta la disolución del 06/10/2026',
          fuentes: [F.congresoPortavoces],
        },
        { cargo: 'Diputado por Bizkaia', desde: '2016', fuentes: [wikiMatute] },
      ],
      nacimiento: { anio: '1972', lugar: 'Barakaldo (Bizkaia)', fuentes: [wikiMatute] },
      estudios: [{ titulo: 'Estudios de Empresariales', estado: 'en curso' }],
      fuentesEstudios: [F.congresoBiografias, wikiMatute],
      trayectoria: [
        'Portavoz de Alternatiba desde 2009. Fue parlamentario vasco por Ezker Batua entre 2002 y 2009 y es diputado en el Congreso desde 2016.',
      ],
      avisos: [
        'Estudios: la ficha del Congreso dice que «cursa estudios en empresariales»; Wikipedia, que es diplomado en Empresariales por la Universidad del País Vasco. Se da por buena la ficha oficial.',
      ],
      fuentes: [F.congresoBiografias, wikiMatute],
    },
  ],
  anunciado: {
    texto: 'EH Bildu no ha anunciado ningún equipo para un Gobierno de España.',
    fuentes: [ejecutiva],
  },
  prensa: [],
  notaPrensa: 'No se han encontrado noticias que sitúen a dirigentes de EH Bildu en un futuro Gobierno.',
};
