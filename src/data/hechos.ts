import type { Fuente, TemaId } from './tipos';
import { Votaciones } from './votaciones';

/**
 * "Promesas y hechos": lo que cada partido llevaba en su programa del 23J y lo que votó
 * después en el Pleno del Congreso. Reglas:
 * - las promesas salen del PDF, con su página; las posturas en contra también cuentan;
 * - los votos salen de los datos abiertos del Congreso (src/data/votaciones.ts, generado);
 * - el desenlace se contrasta en el BOE cuando hay ley o decreto;
 * - la app no etiqueta a nadie de "incumplidor": pone lado a lado promesa y voto.
 */

export type VotoPartido = { partidoId: string; si: number; no: number; abstencion: number; noVota: number };

export type VotacionDatos = {
  fecha: string;
  sesion: number;
  numero: number;
  /** Tipo de votación tal como lo publica el Congreso. */
  tipo: string;
  /** Texto oficial de lo que se votó. */
  expediente: string;
  totales: { si: number; no: number; abstencion: number; noVota: number };
  /** Vacío cuando el Congreso solo publica el total (votaciones por llamamiento). */
  porPartido: VotoPartido[];
  /** Diputados del Grupo Mixto que no son de ningún partido de la app. */
  otros?: string[];
  url: string;
};

export type Paso = {
  votacion: string;
  /** Qué se votaba, en lenguaje llano. */
  que: string;
  /** Qué significaba votar sí: a veces "sí" es tumbar algo. */
  siSignifica: string;
  resultado: 'aprobada' | 'rechazada';
  /**
   * Si votar sí era apoyar la medida del título. Se omite cuando no está claro (por ejemplo,
   * enmiendas con otro contenido): entonces la app solo muestra el voto.
   */
  siEsAFavor?: boolean;
  /** Ley orgánica o reforma: hace falta más que ganar la votación. */
  mayoria?: { necesaria: number; texto: string };
};

export type Promesa = {
  partidoId: string;
  texto: string;
  pagina: number;
  /** Si el programa defiende la medida de la ficha o se opone a ella. */
  postura: 'a-favor' | 'en-contra';
};

export type EstadoHecho = 'en-vigor' | 'no-salio' | 'sin-votacion-final' | 'peticion';

export const Estados: Record<EstadoHecho, string> = {
  'en-vigor': 'Es ley',
  'no-salio': 'No salió adelante',
  'sin-votacion-final': 'Sin votación final',
  peticion: 'Solo una petición',
};

export type Hecho = {
  id: string;
  temaId: TemaId;
  titulo: string;
  pregunta: string;
  promesas: Promesa[];
  pasos: Paso[];
  desenlace: { estado: EstadoHecho; texto: string; fuentes: Fuente[] };
};

const C = '2026-10-06';
const boe = (titulo: string, id: string): Fuente => ({
  titulo: `BOE: ${titulo}`,
  url: `https://www.boe.es/buscar/doc.php?id=${id}`,
  consultada: C,
  oficial: true,
});
const congreso: Fuente = {
  titulo: 'Congreso de los Diputados: datos abiertos de votaciones del Pleno (XV legislatura)',
  url: 'https://www.congreso.es/es/opendata/votaciones',
  consultada: C,
  oficial: true,
};

/** Votación final de la reforma del artículo 49: fue por llamamiento y el Congreso solo publica el total. */
export const VotacionesManuales: Record<string, VotacionDatos> = {
  'art49-final': {
    fecha: '2024-01-18',
    sesion: 17,
    numero: 1,
    tipo: 'Tramitación directa y en lectura única de Proposición de reforma constitucional.',
    expediente:
      'Votación de conjunto de la Proposición de Reforma del artículo 49 de la Constitución Española, por tramitarse en lectura única y tratarse de una Proposición de Reforma constitucional. (Pública por llamamiento)',
    // El Congreso publica sí, no y abstenciones; no publica cuántos no votaron.
    totales: { si: 312, no: 32, abstencion: 0, noVota: 0 },
    porPartido: [],
    url: 'https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=18/01/2024',
  },
};

export function votacion(id: string): VotacionDatos | undefined {
  return Votaciones[id] ?? VotacionesManuales[id];
}

const TOMA = 'Sí = que el Congreso empiece a tramitarla. Es el primer paso, no la aprobación.';
const CONVALIDAR = 'Sí = mantener el decreto. Si gana el no, el decreto queda derogado.';

export const Hechos: Hecho[] = [
  {
    id: 'jornada',
    temaId: 'empleo',
    titulo: 'Trabajar menos horas por el mismo sueldo',
    pregunta: '¿Se ha bajado por ley la jornada máxima de 40 horas semanales?',
    promesas: [
      { partidoId: 'bng', texto: 'Jornada de 35 horas semanales sin bajar el sueldo.', pagina: 16, postura: 'a-favor' },
      {
        partidoId: 'eh-bildu',
        texto: 'Jornada de 32 horas semanales sin bajar el sueldo.',
        pagina: 3,
        postura: 'a-favor',
      },
      {
        partidoId: 'sumar',
        texto: 'En 2024, jornada máxima de 37,5 horas por ley y diálogo social para llegar a 32.',
        pagina: 7,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'jornada-pnl',
        siEsAFavor: true,
        que: 'Proposición no de ley de Sumar para reducir la jornada máxima legal.',
        siSignifica: 'Sí = pedírselo al Gobierno. No obliga a nada.',
        resultado: 'aprobada',
      },
      {
        votacion: 'jornada-devolucion',
        siEsAFavor: false,
        que: 'Enmiendas de Junts, Vox y PP para devolver al Gobierno su proyecto de ley de 37,5 horas.',
        siSignifica: 'Sí = devolver el proyecto, es decir, tumbarlo.',
        resultado: 'aprobada',
      },
      {
        votacion: 'jornada-35h',
        siEsAFavor: true,
        que: 'Proposición de ley del Grupo Mixto para fijar la jornada en 35 horas.',
        siSignifica: TOMA,
        resultado: 'rechazada',
      },
    ],
    desenlace: {
      estado: 'no-salio',
      texto:
        'No hay ley: en septiembre de 2025 el Congreso devolvió al Gobierno el proyecto de 37,5 horas, y en octubre rechazó tramitar el de 35.',
      fuentes: [congreso],
    },
  },
  {
    id: 'articulo-49',
    temaId: 'social',
    titulo: 'Quitar «disminuidos» de la Constitución',
    pregunta: '¿Se ha reformado el artículo 49 sobre las personas con discapacidad?',
    promesas: [
      {
        partidoId: 'pp',
        texto: 'Reformar la Constitución para eliminar el término «disminuidos».',
        pagina: 60,
        postura: 'a-favor',
      },
      {
        partidoId: 'psoe',
        texto: 'Culminar la reforma del artículo 49 de la Constitución.',
        pagina: 192,
        postura: 'a-favor',
      },
      {
        partidoId: 'sumar',
        texto: 'Retomar de inmediato la reforma del artículo 49.',
        pagina: 100,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'art49-toma',
        siEsAFavor: true,
        que: 'Propuesta de reforma de PP y PSOE.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
      {
        votacion: 'art49-lectura-unica',
        siEsAFavor: true,
        que: 'Tramitarla por la vía rápida (lectura única).',
        siSignifica: 'Sí = votarla entera en el Pleno, sin pasar por comisión.',
        resultado: 'aprobada',
      },
      {
        votacion: 'art49-final',
        siEsAFavor: true,
        que: 'Votación final en el Congreso. Fue por llamamiento: el Congreso solo publica el total.',
        siSignifica: 'Sí = aprobar la reforma.',
        resultado: 'aprobada',
        mayoria: { necesaria: 210, texto: 'Una reforma de la Constitución necesita tres quintos: 210 de 350.' },
      },
    ],
    desenlace: {
      estado: 'en-vigor',
      texto:
        'En vigor. El Congreso la aprobó el 18/01/2024 y el Senado el 25/01/2024; se publicó en el BOE el 17/02/2024.',
      fuentes: [
        boe('Reforma del artículo 49 de la Constitución Española, de 15 de febrero de 2024', 'BOE-A-2024-3099'),
      ],
    },
  },
  {
    id: 'okupacion',
    temaId: 'vivienda',
    titulo: 'Desalojar antes a los okupas',
    pregunta: '¿Hay una ley para desalojar en horas una vivienda ocupada?',
    promesas: [
      {
        partidoId: 'pp',
        texto: 'Paquete «anti-okupación» con desalojos en 24 horas como máximo.',
        pagina: 82,
        postura: 'a-favor',
      },
      {
        partidoId: 'psoe',
        texto: 'Reforma legal para desalojar a los okupas ilegales en 48 horas como máximo.',
        pagina: 251,
        postura: 'a-favor',
      },
      {
        partidoId: 'upn',
        texto: 'Normas que protejan la propiedad privada y combatan la ocupación ilegal.',
        pagina: 6,
        postura: 'a-favor',
      },
      {
        partidoId: 'vox',
        texto: 'Reformar el Código Penal y las leyes de enjuiciamiento para proteger a los propietarios.',
        pagina: 40,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'okupa-junts',
        siEsAFavor: true,
        que: 'Proposición de ley de Junts contra la ocupación ilegal.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
      {
        votacion: 'okupa-pp',
        siEsAFavor: true,
        que: 'Proposición de ley del PP contra la ocupación ilegal.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
    ],
    desenlace: {
      estado: 'sin-votacion-final',
      texto:
        'Las dos superaron el primer paso. Hasta el 30/09/2026, ninguna había tenido votación final en el Pleno (según los datos abiertos de votaciones).',
      fuentes: [congreso],
    },
  },
  {
    id: 'cgpj',
    temaId: 'democracia',
    titulo: 'Que los jueces elijan el CGPJ',
    pregunta: '¿Ha cambiado cómo se elige a los vocales del Consejo General del Poder Judicial?',
    promesas: [
      {
        partidoId: 'pp',
        texto: 'Que jueces y magistrados elijan a los vocales de procedencia judicial.',
        pagina: 75,
        postura: 'a-favor',
      },
      {
        partidoId: 'psoe',
        texto: 'Renovar ya el CGPJ con el sistema actual de doble legitimación (jueces y Cortes).',
        pagina: 248,
        postura: 'en-contra',
      },
      {
        partidoId: 'vox',
        texto: 'Que todos los vocales los designen o propongan los propios jueces y magistrados.',
        pagina: 127,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'cgpj-vox',
        siEsAFavor: true,
        que: 'Proposición de ley de Vox para que elijan los jueces.',
        siSignifica: TOMA,
        resultado: 'rechazada',
      },
      {
        votacion: 'cgpj-pacto-toma',
        que: 'Proposición de ley pactada por PP y PSOE para reformar la ley del Poder Judicial.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
      {
        votacion: 'cgpj-pacto-final',
        que: 'Votación final de esa ley pactada.',
        siSignifica: 'Sí = aprobarla.',
        resultado: 'aprobada',
        mayoria: { necesaria: 176, texto: 'Una ley orgánica necesita mayoría absoluta: 176 síes.' },
      },
      {
        votacion: 'cgpj-pp',
        siEsAFavor: true,
        que: 'Proposición de ley del PP para cambiar el modelo de elección.',
        siSignifica: TOMA,
        resultado: 'rechazada',
      },
    ],
    desenlace: {
      estado: 'no-salio',
      texto:
        'El sistema no cambió por ley. La Ley Orgánica 3/2024, pactada por PP y PSOE, encargó al propio CGPJ un estudio de los sistemas europeos y una propuesta de reforma en seis meses. Las proposiciones de Vox (2024) y del PP (2026) para que elijan los jueces fueron rechazadas.',
      fuentes: [
        boe(
          'Ley Orgánica 3/2024, de reforma de la Ley Orgánica del Poder Judicial (disposición adicional única)',
          'BOE-A-2024-16127',
        ),
        congreso,
      ],
    },
  },
  {
    id: 'regularizacion',
    temaId: 'inmigracion',
    titulo: 'Regularizar a inmigrantes sin papeles',
    pregunta: '¿Se ha aprobado una regularización extraordinaria?',
    promesas: [
      {
        partidoId: 'pnv',
        texto: 'Que los migrantes con contrato de trabajo no tengan que pasar por el arraigo.',
        pagina: 34,
        postura: 'a-favor',
      },
      {
        partidoId: 'sumar',
        texto: 'Reformar la ley de extranjería con un procedimiento de regularización permanente.',
        pagina: 104,
        postura: 'a-favor',
      },
      {
        partidoId: 'vox',
        texto: 'Que quien entre ilegalmente nunca pueda regularizar su situación.',
        pagina: 101,
        postura: 'en-contra',
      },
    ],
    pasos: [
      {
        votacion: 'regularizacion-toma',
        siEsAFavor: true,
        que: 'Iniciativa legislativa popular (con firmas de ciudadanos) para una regularización extraordinaria.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
      {
        votacion: 'regularizacion-totalidad-vox',
        que: 'Texto alternativo de Vox a esa iniciativa.',
        siSignifica: 'Sí = sustituir la iniciativa por el texto de Vox.',
        resultado: 'rechazada',
      },
      {
        votacion: 'regularizacion-vox',
        siEsAFavor: false,
        que: 'Proposición de ley de Vox para restringir la regularización por arraigo.',
        siSignifica: TOMA,
        resultado: 'rechazada',
      },
    ],
    desenlace: {
      estado: 'sin-votacion-final',
      texto:
        'La iniciativa popular pasó el primer paso en abril de 2024. Hasta el 30/09/2026 no había tenido votación final en el Pleno (según los datos abiertos de votaciones).',
      fuentes: [congreso],
    },
  },
  {
    id: 'irpf',
    temaId: 'impuestos',
    titulo: 'Ajustar el IRPF a la inflación',
    pregunta: '¿Se ha corregido la tarifa del IRPF para que la inflación no suba el impuesto?',
    promesas: [
      {
        partidoId: 'bng',
        texto: 'Deflactar las tarifas del IRPF según la inflación en Galicia.',
        pagina: 39,
        postura: 'a-favor',
      },
      {
        partidoId: 'pp',
        texto: 'Corregir los efectos de la inflación en la tarifa del IRPF.',
        pagina: 23,
        postura: 'a-favor',
      },
      { partidoId: 'upn', texto: 'Deflactar la tarifa del IRPF.', pagina: 2, postura: 'a-favor' },
    ],
    pasos: [
      {
        votacion: 'irpf-pnl',
        siEsAFavor: true,
        que: 'Proposición no de ley del PP para deflactar el IRPF.',
        siSignifica: 'Sí = pedírselo al Gobierno. No obliga a nada.',
        resultado: 'aprobada',
      },
    ],
    desenlace: {
      estado: 'peticion',
      texto: 'Se aprobó como proposición no de ley: es una petición al Gobierno, no cambia el impuesto por sí sola.',
      fuentes: [congreso],
    },
  },
  {
    id: 'ap9',
    temaId: 'territorio',
    titulo: 'Traspasar la AP-9 a Galicia',
    pregunta: '¿Ha pasado la autopista del Atlántico a manos de la Xunta?',
    promesas: [
      {
        partidoId: 'bng',
        texto: 'Traspaso de la AP-9 y la AP-53 a Galicia y su nacionalización.',
        pagina: 12,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'ap9-toma',
        siEsAFavor: true,
        que: 'Proposición de ley del Parlamento de Galicia para transferir la AP-9.',
        siSignifica: TOMA,
        resultado: 'aprobada',
      },
      {
        votacion: 'ap9-final',
        siEsAFavor: true,
        que: 'Votación final en el Congreso.',
        siSignifica: 'Sí = aprobarla.',
        resultado: 'aprobada',
        mayoria: { necesaria: 176, texto: 'Una ley orgánica necesita mayoría absoluta: 176 síes.' },
      },
      {
        votacion: 'ap9-senado',
        que: 'Cambios que introdujo el Senado.',
        siSignifica: 'Sí = aceptar los cambios del Senado.',
        resultado: 'rechazada',
      },
    ],
    desenlace: {
      estado: 'en-vigor',
      texto:
        'Es ley: Ley Orgánica 3/2026, en el BOE el 31/07/2026. Fija el marco; el traspaso efectivo necesita un acuerdo de la Comisión Mixta de Transferencias aprobado por real decreto.',
      fuentes: [boe('Ley Orgánica 3/2026, de transferencia de la AP-9 a Galicia', 'BOE-A-2026-16652')],
    },
  },
  {
    id: 'gravamen-energetico',
    temaId: 'energia',
    titulo: 'Impuesto a las energéticas',
    pregunta: '¿Se ha mantenido el gravamen temporal a las grandes energéticas?',
    promesas: [
      {
        partidoId: 'eh-bildu',
        texto: 'Hacer permanentes los impuestos a la banca, las energéticas y las grandes fortunas.',
        pagina: 8,
        postura: 'a-favor',
      },
      {
        partidoId: 'psoe',
        texto: 'Evaluar la prórroga y ajustes de los gravámenes temporales a banca y energéticas.',
        pagina: 39,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'gravamen-energetico',
        siEsAFavor: true,
        que: 'Decreto ley que prorrogaba el gravamen energético durante 2025.',
        siSignifica: CONVALIDAR,
        resultado: 'rechazada',
      },
    ],
    desenlace: {
      estado: 'no-salio',
      texto: 'El Congreso no convalidó el decreto en enero de 2025, así que quedó derogado.',
      fuentes: [congreso],
    },
  },
  {
    id: 'pensiones',
    temaId: 'pensiones',
    titulo: 'Subir las pensiones con el IPC',
    pregunta: '¿Se han revalorizado las pensiones según la inflación?',
    promesas: [
      {
        partidoId: 'bng',
        texto: 'Revalorización anual de las pensiones según el IPC real.',
        pagina: 18,
        postura: 'a-favor',
      },
      {
        partidoId: 'pnv',
        texto: 'Mantener el Pacto de Toledo impidiendo que las pensiones no se actualicen con el IPC.',
        pagina: 33,
        postura: 'a-favor',
      },
      {
        partidoId: 'pp',
        texto: 'Garantizar la revalorización de las pensiones en el marco del Pacto de Toledo.',
        pagina: 19,
        postura: 'a-favor',
      },
      {
        partidoId: 'sumar',
        texto: 'Mantener la actualización automática de las pensiones con el IPC.',
        pagina: 15,
        postura: 'a-favor',
      },
    ],
    pasos: [
      {
        votacion: 'pensiones-rdl-9-2024',
        siEsAFavor: true,
        que: 'Decreto ley con la subida del 2,8 % para 2025 y muchas otras medidas (transporte, impuestos, vivienda…).',
        siSignifica: CONVALIDAR,
        resultado: 'rechazada',
      },
      {
        votacion: 'pensiones-rdl-1-2025',
        siEsAFavor: true,
        que: 'Nuevo decreto ley con la misma subida del 2,8 % y medidas de transporte, vivienda y economía.',
        siSignifica: CONVALIDAR,
        resultado: 'aprobada',
      },
      {
        votacion: 'pensiones-rdl-3-2026',
        siEsAFavor: true,
        que: 'Decreto ley de revalorización de las pensiones para 2026.',
        siSignifica: CONVALIDAR,
        resultado: 'aprobada',
      },
    ],
    desenlace: {
      estado: 'en-vigor',
      texto:
        'En vigor. El primer decreto de 2025 cayó en enero (un decreto se vota entero, con todas sus medidas); dos semanas después se convalidó otro con la subida. La de 2026 se aprobó en un decreto propio.',
      fuentes: [
        boe('Real Decreto-ley 9/2024 (revalorización del 2,8 % y otras medidas)', 'BOE-A-2024-26915'),
        boe('Acuerdo de derogación del Real Decreto-ley 9/2024', 'BOE-A-2025-1136'),
        congreso,
      ],
    },
  },
  {
    id: 'menores-migrantes',
    temaId: 'inmigracion',
    titulo: 'Repartir a los menores migrantes',
    pregunta: '¿Se obliga a todas las comunidades a acoger a menores que llegan solos?',
    promesas: [
      {
        partidoId: 'cc',
        texto: 'Cambios legales para que todas las comunidades se impliquen en la acogida de menores no acompañados.',
        pagina: 13,
        postura: 'a-favor',
      },
      {
        partidoId: 'pnv',
        texto: 'Distribución equitativa de los menores migrantes no acompañados.',
        pagina: 10,
        postura: 'a-favor',
      },
      {
        partidoId: 'vox',
        texto: 'Repatriar de inmediato a todos los menores extranjeros no acompañados con sus padres.',
        pagina: 101,
        postura: 'en-contra',
      },
    ],
    pasos: [
      {
        votacion: 'menores-ley',
        siEsAFavor: true,
        que: 'Proposición de ley de PSOE, Sumar y Coalición Canaria para un reparto obligatorio entre comunidades.',
        siSignifica: TOMA,
        resultado: 'rechazada',
      },
      {
        votacion: 'menores-rdl-2-2025',
        siEsAFavor: true,
        que: 'Decreto ley que crea un mecanismo obligatorio de reubicación cuando una comunidad triplica su capacidad.',
        siSignifica: CONVALIDAR,
        resultado: 'aprobada',
      },
    ],
    desenlace: {
      estado: 'en-vigor',
      texto:
        'La reforma de julio de 2024 no pasó el primer paso. En marzo de 2025 el Gobierno aprobó el Real Decreto-ley 2/2025, y el Congreso lo convalidó en abril.',
      fuentes: [
        {
          titulo: 'BOE: Real Decreto-ley 2/2025, sobre menores en contingencias migratorias extraordinarias',
          url: 'https://www.boe.es/eli/es/rdl/2025/03/18/2',
          consultada: C,
          oficial: true,
        },
        {
          titulo: 'RTVC: El Congreso rechaza tramitar la reforma legal para la acogida de menores migrantes',
          url: 'https://rtvc.es/el-congreso-rechaza-tramitar-la-reforma-legal-para-la-acogida-de-menores-migrantes/',
          consultada: C,
          oficial: false,
        },
      ],
    },
  },
];

export function buscarHecho(id: string) {
  return Hechos.find((h) => h.id === id);
}

/** Cómo votó un partido en una votación. `undefined` si no hay desglose. */
export function votoDe(v: VotacionDatos, partidoId: string) {
  return v.porPartido.find((p) => p.partidoId === partidoId);
}
