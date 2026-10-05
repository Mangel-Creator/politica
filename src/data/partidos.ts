import { Fuentes } from './fuentes';
import type { Partido } from './tipos';

/**
 * Fuentes de los escaños del 23J. Pendiente: contrastarlos con Infoelectoral (resultados
 * oficiales del Ministerio del Interior) y añadirla aquí cuando se haya hecho.
 */
export const FuentesEscanos2023 = [Fuentes.wikipedia23J];

const wayback = (marca: string, url: string) => `https://web.archive.org/web/${marca}/${url}`;

/**
 * Partidos con representación en el Congreso tras el 23J 2023, más Podemos, que entonces
 * fue dentro de Sumar. Orden alfabético por siglas: ningún orden por tamaño ni por
 * ideología.
 *
 * Los programas salen de `Programas electorales/REGISTRO.md` (carpeta del proyecto en
 * OneDrive). Si cambias uno aquí, cámbialo también allí: el SHA-256 identifica el
 * archivo exacto.
 */
export const Partidos: Partido[] = [
  {
    id: 'bng',
    siglas: 'BNG',
    nombre: 'Bloque Nacionalista Galego',
    color: '#76B3DD',
    web: 'https://www.bng.gal/',
    escanos2023: 1,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo (en gallego)',
        paginas: 68,
        fechaDocumento: '2023-06-23',
        urlOficial: 'https://www.bng.gal/media/bnggaliza/files/2023/07/05/23_bng_xerais_programa.pdf',
        urlArchivo: wayback(
          '20230713120301',
          'https://www.bng.gal/media/bnggaliza/files/2023/07/05/23_bng_xerais_programa.pdf',
        ),
        sha256: 'b8994deec0bbc45cdcbef5d7c5395cabf30b0509706303c3d8e76058c48eebfd',
      },
    ],
  },
  {
    id: 'cc',
    siglas: 'CC',
    nombre: 'Coalición Canaria',
    color: '#F2C200',
    web: 'https://coalicioncanaria.org/',
    escanos2023: 1,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Manifiesto (no publicó un programa extenso)',
        paginas: 14,
        fechaDocumento: '2023-07-20',
        urlOficial:
          'https://coalicioncanaria.org/wp-content/uploads/cc-pdf/programas-electorales/00_COALICION%20POR%20CANARIAS.pdf',
        urlArchivo: wayback(
          '20230930233746',
          'https://coalicioncanaria.org/wp-content/uploads/cc-pdf/programas-electorales/00_COALICION%20POR%20CANARIAS.pdf',
        ),
        sha256: 'cc33ca907f700b3201560b77d82793f844afcfa812709ef0f33c82379814e749',
      },
    ],
  },
  {
    id: 'eh-bildu',
    siglas: 'EH Bildu',
    nombre: 'Euskal Herria Bildu',
    color: '#9CBF28',
    web: 'https://ehbildu.eus/',
    escanos2023: 6,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Documento de compromisos (no publicó un programa extenso)',
        paginas: 16,
        fechaDocumento: '2023-07-06',
        urlOficial: 'https://ehbildu.eus/dokumentuak/23J-COMPROMISO-DE-EUSKAL-HERRIA-BILDU.pdf',
        urlArchivo: wayback(
          '20230726063554',
          'https://ehbildu.eus/dokumentuak/23J-COMPROMISO-DE-EUSKAL-HERRIA-BILDU.pdf',
        ),
        sha256: '6634c0786c1e771c61c1a65e549dfde0d4581d09e19949466e931c96a9642465',
      },
    ],
  },
  {
    id: 'erc',
    siglas: 'ERC',
    nombre: 'Esquerra Republicana de Catalunya',
    color: '#FFAA2B',
    web: 'https://www.esquerra.cat/',
    escanos2023: 7,
    programas: [],
    programasNoLocalizados: [
      { eleccion: '23J 2023', motivo: 'No se ha encontrado el PDF en la web del partido ni en el Internet Archive.' },
    ],
  },
  {
    id: 'junts',
    siglas: 'Junts',
    nombre: 'Junts per Catalunya',
    color: '#00A3A0',
    web: 'https://junts.cat/',
    escanos2023: 7,
    programas: [],
    programasNoLocalizados: [
      {
        eleccion: '23J 2023',
        motivo: 'El enlace oficial ya no funciona y las copias archivadas están incompletas.',
      },
    ],
  },
  {
    id: 'pnv',
    siglas: 'PNV',
    nombre: 'Partido Nacionalista Vasco (EAJ-PNV)',
    color: '#1E7B3C',
    web: 'https://www.eaj-pnv.eus/',
    escanos2023: 5,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo ("Con voz propia")',
        paginas: 52,
        fechaDocumento: '2023-07-07',
        urlOficial: 'https://eaj-pnv.eus/es/adjuntos-documentos/20945/pdf/con-voz-propia-programa-electoral-23-j',
        urlArchivo: wayback(
          '20230715101857',
          'https://eaj-pnv.eus/es/adjuntos-documentos/20945/pdf/con-voz-propia-programa-electoral-23-j',
        ),
        sha256: '46fec3a017cdc5c4e506fa5e228b97690071d5a03dfd3d8128392aa20f57d132',
      },
    ],
  },
  {
    id: 'podemos',
    siglas: 'Podemos',
    nombre: 'Podemos',
    color: '#6B2D69',
    web: 'https://podemos.info/',
    escanos2023: null,
    nota2023: 'En 2023 se presentó dentro de la coalición Sumar.',
    programas: [],
  },
  {
    id: 'pp',
    siglas: 'PP',
    nombre: 'Partido Popular',
    color: '#1D84CE',
    web: 'https://www.pp.es/',
    escanos2023: 137,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo (365 medidas)',
        paginas: 112,
        fechaDocumento: '2023-07-05',
        urlOficial: 'https://www.pp.es/storage/2023/07/programa_electoral_pp_23j_feijoo_2023.pdf',
        urlArchivo: wayback(
          '20250619072430',
          'https://www.pp.es/storage/2023/07/programa_electoral_pp_23j_feijoo_2023.pdf',
        ),
        sha256: 'c93baafc88bdcb33adcd7e8be9dc309b09056362183ad7b7767f3d5134313108',
      },
    ],
  },
  {
    id: 'psoe',
    siglas: 'PSOE',
    nombre: 'Partido Socialista Obrero Español',
    color: '#E2231A',
    web: 'https://www.psoe.es/',
    escanos2023: 121,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo',
        paginas: 272,
        fechaDocumento: '2023-07-07',
        urlOficial: 'https://www.psoe.es/media-content/2023/07/PROGRAMA_ELECTORAL-GENERALES-2023.pdf',
        urlArchivo: wayback(
          '20230709064011',
          'https://www.psoe.es/media-content/2023/07/PROGRAMA_ELECTORAL-GENERALES-2023.pdf',
        ),
        sha256: '02d4972a848250fec9b8b2cffc5aaa78733acb0ac010e79ce1787161f91a42f2',
      },
    ],
  },
  {
    id: 'sumar',
    siglas: 'Sumar',
    nombre: 'Sumar',
    color: '#E0195C',
    web: 'https://movimientosumar.es/',
    escanos2023: 31,
    nota2023: 'Coalición de varios partidos, entre ellos Podemos.',
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo ("Un programa para ti")',
        paginas: 182,
        fechaDocumento: '2023-07-10',
        urlOficial: 'https://movimientosumar.es/wp-content/uploads/2023/07/Un-Programa-para-ti.pdf',
        urlArchivo: wayback(
          '20230712065723',
          'https://movimientosumar.es/wp-content/uploads/2023/07/Un-Programa-para-ti.pdf',
        ),
        sha256: 'd5ccdac0d20f1b93a5f703f180d086041bd988835072dd5cb5d1378bf0195820',
      },
    ],
  },
  {
    id: 'upn',
    siglas: 'UPN',
    nombre: 'Unión del Pueblo Navarro',
    color: '#20407A',
    web: 'https://www.upn.org/',
    escanos2023: 1,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa breve',
        paginas: 6,
        fechaDocumento: '2023-07-04',
        urlOficial: 'https://www.upn.org/wp-content/uploads/2023/07/Programa-Generales-23J_V2-1.pdf',
        urlArchivo: wayback(
          '20230727191605',
          'https://www.upn.org/wp-content/uploads/2023/07/Programa-Generales-23J_V2-1.pdf',
        ),
        sha256: '6bbf12c4fe8acc17d8deb2ddc68a89cbee9e07ec70472ed7463655e8a59e15d6',
      },
    ],
  },
  {
    id: 'vox',
    siglas: 'Vox',
    nombre: 'Vox',
    color: '#5BBF21',
    web: 'https://www.voxespana.es/',
    escanos2023: 33,
    programas: [
      {
        eleccion: '23J 2023',
        tipo: 'Programa completo',
        paginas: 178,
        fechaDocumento: '2023-07-13',
        urlOficial: 'https://www.voxespana.es/wp-content/uploads/2023/07/Programa-VOX-2023-con-menos-peso.pdf',
        urlArchivo: wayback(
          '20231116091643',
          'https://www.voxespana.es/wp-content/uploads/2023/07/Programa-VOX-2023-con-menos-peso.pdf',
        ),
        sha256: 'a63a7230318668bb141ade1b8957b86827e11c06ac57b2148e36011cfe8021db',
      },
    ],
  },
];

export function buscarPartido(id: string): Partido | undefined {
  return Partidos.find((p) => p.id === id);
}
