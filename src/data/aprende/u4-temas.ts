import type { Fuente } from '../tipos';
import { art, type Unidad } from './base';
import { diaVot, fuenteHecho, fuentePrograma, fuenteVot, no, promesa, si, siglas } from './util';

/**
 * Temas de actualidad que pasaron por el Pleno en la XV legislatura (2023-2026), sacados de
 * "Promesas y hechos" (src/data/hechos.ts). Regla de neutralidad: se cuenta qué se propuso,
 * quién lo llevaba en su programa, qué se votó y cómo acabó; nunca quién tenía razón. Lo que
 * votó cada partido se ve en la ficha del caso (`hechos`).
 */

/** "PP → «Paquete anti-okupación…»" para unir partido y promesa, con el texto del programa. */
const par = (hechoId: string, partidoId: string): [string, string] => [
  siglas(partidoId),
  promesa(hechoId, partidoId).texto,
];

const C = '2026-10-15';
const oficial = (titulo: string, url: string): Fuente => ({ titulo, url, consultada: C, oficial: true });

/** Ley Orgánica 1/2024 de amnistía en el BOE, con ancla al artículo (a1, a2, a9…). */
const leyAmnistia = (ancla: string) =>
  oficial(
    'BOE: Ley Orgánica 1/2024, de 10 de junio, de amnistía para la normalización institucional, política y social en Cataluña',
    `https://www.boe.es/buscar/act.php?id=BOE-A-2024-11776#${ancla}`,
  );
const STC_137 = oficial(
  'BOE: Sentencia del Tribunal Constitucional 137/2025, de 26 de junio, sobre la Ley Orgánica 1/2024',
  'https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-15939',
);
const TJUE_523 = oficial(
  'EUR-Lex: Sentencia del Tribunal de Justicia de la UE de 16 de julio de 2026, asunto C-523/24',
  'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:62024CJ0523',
);
const LEY_ESTABILIDAD = oficial(
  'BOE: Ley Orgánica 2/2012, de Estabilidad Presupuestaria y Sostenibilidad Financiera, artículo 15',
  'https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730#a15',
);
const HACIENDA_PRORROGA = oficial(
  'Ministerio de Hacienda: Prórroga del Presupuesto para 2026',
  'https://www.sepg.pap.hacienda.gob.es/sitios/sepg/es-ES/Presupuestos/PGE/PGE2025Prorroga/Paginas/PGE2025Prorroga.aspx',
);
/** Todas las votaciones del Pleno de la XV legislatura: ninguna es sobre un proyecto de Presupuestos. */
const CONGRESO_VOTACIONES = oficial(
  'Congreso de los Diputados: datos abiertos de votaciones del Pleno (XV legislatura)',
  'https://www.congreso.es/es/opendata/votaciones',
);

export const UnidadTemas: Unidad = {
  id: 'temas',
  titulo: 'Temas del Congreso',
  descripcion:
    'Lo que se ha votado estos años sobre la amnistía, los Presupuestos, el trabajo, las pensiones, la vivienda, la inmigración, los impuestos, la justicia y el territorio.',
  lecciones: [
    {
      id: 'tema-amnistia',
      titulo: 'La ley de amnistía',
      gancho: 'La ley más discutida de la legislatura, paso a paso: Congreso, Senado y tribunales.',
      simbolo: 'LO',
      tarjetas: [
        {
          titulo: 'Qué es una amnistía',
          texto:
            'Una ley que borra la responsabilidad penal, administrativa o contable por hechos ya cometidos. Esta cubre actos ligados a las consultas del 9 de noviembre de 2014 y del 1 de octubre de 2017 y al proceso independentista catalán, hechos entre el 1 de noviembre de 2011 y el 13 de noviembre de 2023.',
          fuente: leyAmnistia('a1'),
        },
        {
          titulo: 'Lo que queda fuera',
          texto:
            'No se amnistían, entre otros, el terrorismo que haya causado graves violaciones de derechos humanos, las torturas, los delitos de odio ni lo que dañe los intereses financieros de la Unión Europea. La malversación, solo si no hubo propósito de enriquecerse.',
          fuente: leyAmnistia('a2'),
        },
        {
          titulo: 'El camino en el Congreso',
          texto: `La presentó el Grupo Socialista como proposición de ley orgánica. Pasó el primer paso el ${diaVot('amnistia-toma')} (${si('amnistia-toma')} a ${no('amnistia-toma')}). El ${diaVot('amnistia-conjunto-1')} no llegó a 176 síes (${si('amnistia-conjunto-1')} a ${no('amnistia-conjunto-1')}) y volvió a la comisión. El ${diaVot('amnistia-conjunto-2')} salió: ${si('amnistia-conjunto-2')} a ${no('amnistia-conjunto-2')}.`,
          fuente: fuenteVot('amnistia-conjunto-1'),
        },
        {
          titulo: 'El veto del Senado',
          texto: `El Senado la vetó. El ${diaVot('amnistia-veto')} el Congreso levantó el veto con ${si('amnistia-veto')} síes, uno más de los 176 necesarios. Es la Ley Orgánica 1/2024, en el BOE desde el 11 de junio de 2024.`,
          fuente: fuenteVot('amnistia-veto'),
        },
        {
          titulo: 'El Constitucional',
          texto:
            'Diputados y senadores del PP la recurrieron. En la sentencia 137/2025 el Tribunal Constitucional la avaló en lo principal: declaró inconstitucional parte del artículo 1, anuló un párrafo y fijó cómo interpretar otro artículo.',
          fuente: STC_137,
        },
        {
          titulo: 'El Tribunal de Justicia de la UE',
          texto:
            'El 16 de julio de 2026 dijo que el Derecho europeo no se opone a esta amnistía, salvo en un punto: un juez no puede estar obligado a cerrar un caso en dos meses si tiene una pregunta pendiente en Luxemburgo.',
          fuente: TJUE_523,
        },
      ],
      ejercicios: [
        {
          id: 'amnistia-1',
          tipo: 'vf',
          afirmacion: 'La amnistía la aprobó el Gobierno por decreto.',
          verdadera: false,
          explicacion: 'Es una ley orgánica: la votaron las Cortes y necesitó mayoría absoluta del Congreso.',
          fuente: leyAmnistia('a1'),
        },
        {
          id: 'amnistia-2',
          tipo: 'elige',
          enunciado: `¿Qué pasó en la votación final del ${diaVot('amnistia-conjunto-1')}?`,
          opciones: [
            'Se aprobó',
            `No llegó a 176 síes (${si('amnistia-conjunto-1')}) y volvió a la comisión`,
            'La vetó el Senado',
            'La anuló el Constitucional',
          ],
          correcta: 1,
          explicacion: 'Una ley orgánica que no logra la mayoría absoluta vuelve a la comisión para un nuevo dictamen.',
          fuente: art('RC', '131'),
        },
        {
          id: 'amnistia-3',
          tipo: 'ordena',
          enunciado: 'Ordena el camino de la ley de amnistía.',
          pasos: [
            'El Congreso la toma en consideración',
            'El Congreso la aprueba por mayoría absoluta',
            'El Senado la veta y el Congreso levanta el veto',
            'Se publica en el BOE',
            'El Tribunal Constitucional resuelve el recurso',
          ],
          explicacion: 'De diciembre de 2023 a junio de 2024 en las Cortes; la sentencia llegó en junio de 2025.',
          fuente: STC_137,
        },
        {
          id: 'amnistia-4',
          tipo: 'elige',
          enunciado: '¿Cuántos síes tuvo al levantar el veto del Senado?',
          opciones: ['172', '176', String(si('amnistia-veto')), '178'],
          correcta: 2,
          explicacion: `Necesitaba mayoría absoluta, 176. Tuvo ${si('amnistia-veto')} síes y ${no('amnistia-veto')} noes.`,
          fuente: fuenteVot('amnistia-veto'),
        },
        {
          id: 'amnistia-5',
          tipo: 'vf',
          afirmacion: 'El Tribunal Constitucional declaró inconstitucional toda la ley.',
          verdadera: false,
          explicacion: 'Estimó el recurso solo en parte: un trozo del artículo 1 y un párrafo; en lo demás lo rechazó.',
          fuente: STC_137,
        },
        {
          id: 'amnistia-6',
          tipo: 'empareja',
          enunciado: 'Une cada institución con lo que hizo.',
          pares: [
            ['Tribunal Constitucional', 'La avaló en lo principal en 2025'],
            ['Tribunal de Justicia de la UE', 'Dijo en 2026 que el Derecho europeo no se opone, salvo un plazo'],
            ['Los jueces de cada caso', 'Deciden a quién se aplica'],
          ],
          explicacion:
            'La ley no se aplica sola: hace falta una resolución firme del órgano competente, que para los delitos es un juez.',
          fuente: leyAmnistia('a9'),
        },
        {
          id: 'amnistia-7',
          tipo: 'completa',
          frase: 'Cada caso concreto de amnistía lo decide ___.',
          opciones: ['un juez', 'el Gobierno', 'el Congreso'],
          correcta: 0,
          explicacion:
            'Los órganos judiciales la aplican, de oficio o a petición, después de oír a la Fiscalía y a las partes.',
          fuente: leyAmnistia('a9'),
        },
      ],
    },
    {
      id: 'tema-presupuestos',
      titulo: 'Los Presupuestos',
      gancho: 'En 2026 el Estado funciona con las cuentas de 2023. ¿Cómo es posible?',
      simbolo: '€',
      tarjetas: [
        {
          titulo: 'Qué son',
          texto:
            'Las cuentas del Estado para un año: todos sus gastos e ingresos. Los elabora el Gobierno y los examinan, enmiendan y aprueban las Cortes.',
          fuente: art('CE', '134'),
        },
        {
          titulo: 'Si no hay nuevos, siguen los viejos',
          texto:
            'El Gobierno debe presentarlos al menos tres meses antes de que acabe el año. Si el 1 de enero no hay Presupuestos nuevos, se prorrogan solos los anteriores.',
          fuente: art('CE', '134'),
        },
        {
          titulo: 'Antes, el techo de gasto',
          texto:
            'Primero, el Congreso y el Senado votan los objetivos de déficit y deuda y el límite de gasto del Estado. Si los rechazan, el Gobierno tiene un mes para mandar otros. Los Presupuestos tienen que ajustarse a esos objetivos.',
          fuente: LEY_ESTABILIDAD,
        },
        {
          titulo: 'Lo que pasó en el Congreso',
          texto: `En febrero de 2024 aprobó los objetivos para 2024-2026 (${si('senda-2024')} a ${no('senda-2024')}). Después rechazó los de 2025-2027, dos veces los de 2026-2028 y dos veces los de 2027-2029. En toda la legislatura no llegó al Pleno ningún proyecto de Presupuestos.`,
          fuente: CONGRESO_VOTACIONES,
        },
        {
          titulo: 'Cómo está',
          texto: 'En 2026 se aplican, prorrogados, los Presupuestos aprobados para 2023.',
          fuente: HACIENDA_PRORROGA,
        },
        {
          titulo: 'Una ley para obligar a presentarlos',
          texto: `Una proposición del PP para garantizar que se cumpla la Ley General Presupuestaria pasó el primer paso el ${diaVot('ley-presupuestaria-pp')} (${si('ley-presupuestaria-pp')} a ${no('ley-presupuestaria-pp')}). No llegó a votación final y caducó con la disolución de las Cortes.`,
          fuente: fuenteVot('ley-presupuestaria-pp'),
        },
      ],
      ejercicios: [
        {
          id: 'presupuestos-1',
          tipo: 'elige',
          enunciado: '¿Quién elabora los Presupuestos Generales del Estado?',
          opciones: ['El Congreso', 'El Gobierno', 'El Banco de España', 'Las comunidades'],
          correcta: 1,
          explicacion: 'Los elabora el Gobierno; las Cortes los examinan, enmiendan y aprueban.',
          fuente: art('CE', '134'),
        },
        {
          id: 'presupuestos-2',
          tipo: 'vf',
          afirmacion: 'Si no se aprueban Presupuestos nuevos, el Estado se queda sin presupuesto.',
          verdadera: false,
          explicacion: 'Se prorrogan automáticamente los del año anterior hasta que se aprueben otros.',
          fuente: art('CE', '134'),
        },
        {
          id: 'presupuestos-3',
          tipo: 'elige',
          enunciado: '¿Qué Presupuestos se aplican en 2026?',
          opciones: ['Unos nuevos para 2026', 'Los aprobados para 2023, prorrogados', 'Los de 2025', 'Ninguno'],
          correcta: 1,
          explicacion: 'Hacienda publica el presupuesto prorrogado para 2026 con la documentación de los de 2023.',
          fuente: HACIENDA_PRORROGA,
        },
        {
          id: 'presupuestos-4',
          tipo: 'ordena',
          enunciado: 'Ordena cómo se aprueban unos Presupuestos.',
          pasos: [
            'Las Cortes votan el techo de gasto',
            'El Gobierno presenta el proyecto al Congreso',
            'El Congreso lo debate, lo enmienda y lo vota',
            'Pasa al Senado',
          ],
          explicacion: 'Si el techo de gasto se rechaza, el Gobierno tiene que mandar otro antes de seguir.',
          fuente: LEY_ESTABILIDAD,
        },
        {
          id: 'presupuestos-5',
          tipo: 'completa',
          frase: 'Si las Cortes rechazan el techo de gasto, el Gobierno tiene ___ para mandar otro.',
          opciones: ['un mes', 'un año', 'una semana'],
          correcta: 0,
          explicacion: 'Lo dice la Ley de Estabilidad Presupuestaria.',
          fuente: LEY_ESTABILIDAD,
        },
        {
          id: 'presupuestos-6',
          tipo: 'elige',
          enunciado: `¿Cómo acabó la votación del techo de gasto para 2026 del ${diaVot('senda-2026-1')}?`,
          opciones: [
            `${si('senda-2026-1')} síes y ${no('senda-2026-1')} noes: rechazado`,
            `${no('senda-2026-1')} síes: aprobado`,
            'Empate',
            'No se votó',
          ],
          correcta: 0,
          explicacion: `El Gobierno mandó otro y el ${diaVot('senda-2026-2')} también se rechazó (${si('senda-2026-2')} a ${no('senda-2026-2')}).`,
          fuente: fuenteVot('senda-2026-1'),
        },
        {
          id: 'presupuestos-7',
          tipo: 'vf',
          afirmacion: 'Entre 2023 y 2026 llegó al Pleno del Congreso algún proyecto de Presupuestos.',
          verdadera: false,
          explicacion: 'No hay ninguna votación sobre un proyecto de Presupuestos en toda la legislatura.',
          fuente: CONGRESO_VOTACIONES,
        },
      ],
    },
    {
      id: 'tema-jornada',
      titulo: 'Trabajar menos horas',
      gancho: '¿Se ha bajado la jornada de 40 horas? Tres votaciones lo explican.',
      simbolo: '◷',
      hechos: ['jornada'],
      tarjetas: [
        {
          titulo: 'La idea',
          texto: `Bajar la jornada máxima de 40 horas semanales sin bajar el sueldo. En su programa del 23J lo llevaban ${siglas('bng')} (35 horas), ${siglas('eh-bildu')} (32) y ${siglas('sumar')} (37,5 y diálogo para llegar a 32).`,
          fuente: fuentePrograma('sumar'),
        },
        {
          titulo: '2024: una petición',
          texto: `El Congreso aprobó una proposición no de ley para reducirla (${si('jornada-pnl')} síes, ${no('jornada-pnl')} noes y muchas abstenciones). Era una petición al Gobierno.`,
          fuente: fuenteVot('jornada-pnl'),
        },
        {
          titulo: '2025: el proyecto de 37,5 horas',
          texto: `El Gobierno llevó su proyecto al Congreso. Junts, Vox y PP pidieron devolverlo y ganaron: ${si('jornada-devolucion')} a ${no('jornada-devolucion')}. El proyecto quedó rechazado.`,
          fuente: fuenteVot('jornada-devolucion'),
        },
        {
          titulo: 'Las 35 horas',
          texto: `Una proposición del Grupo Mixto para fijarla en 35 horas no pasó el primer paso: ${si('jornada-35h')} síes y ${no('jornada-35h')} noes.`,
          fuente: fuenteVot('jornada-35h'),
        },
        {
          titulo: 'Cómo está',
          texto: 'No hay ley nueva: sigue el máximo de 40 horas semanales.',
          fuente: fuenteHecho('jornada'),
        },
      ],
      ejercicios: [
        {
          id: 'jornada-1',
          tipo: 'vf',
          afirmacion: 'Hoy hay una ley que fija la jornada máxima en 37,5 horas.',
          verdadera: false,
          explicacion: 'El proyecto se devolvió al Gobierno en septiembre de 2025 y no salió adelante.',
          fuente: fuenteHecho('jornada'),
        },
        {
          id: 'jornada-2',
          tipo: 'vf',
          afirmacion: 'En la votación de devolución, votar «sí» era apoyar las 37,5 horas.',
          verdadera: false,
          explicacion: 'Era al revés: «sí» era devolver el proyecto, es decir, tumbarlo.',
          fuente: art('RC', '112'),
        },
        {
          id: 'jornada-3',
          tipo: 'elige',
          enunciado: '¿Por cuántos votos se devolvió el proyecto de 37,5 horas?',
          opciones: [`${si('jornada-devolucion')} a ${no('jornada-devolucion')}`, '200 a 150', '176 a 174', '310 a 33'],
          correcta: 0,
          explicacion: `Fue el ${diaVot('jornada-devolucion')}. ${si('jornada-devolucion') - no('jornada-devolucion')} votos de diferencia.`,
          fuente: fuenteVot('jornada-devolucion'),
        },
        {
          id: 'jornada-4',
          tipo: 'empareja',
          enunciado: 'Une cada partido con lo que llevaba en su programa.',
          pares: [par('jornada', 'bng'), par('jornada', 'eh-bildu'), par('jornada', 'sumar')],
          explicacion: 'Son sus programas del 23J; en la ficha del caso ves la página de cada uno.',
          fuente: fuentePrograma('bng'),
        },
        {
          id: 'jornada-5',
          tipo: 'completa',
          frase: 'La proposición no de ley de 2024 era solo una ___ al Gobierno.',
          opciones: ['petición', 'orden', 'ley'],
          correcta: 0,
          explicacion: 'Una proposición no de ley no obliga a nada.',
          fuente: art('RC', '193'),
        },
      ],
    },
    {
      id: 'tema-pensiones',
      titulo: 'Pensiones e IPC',
      gancho: 'Subieron dos veces con la inflación, pero un decreto cayó por el camino.',
      simbolo: '↗',
      hechos: ['pensiones'],
      tarjetas: [
        {
          titulo: 'La idea',
          texto: `Subir las pensiones cada año para que no pierdan poder de compra con la inflación (el IPC). En su programa del 23J lo llevaban ${siglas('bng')}, ${siglas('pnv')}, ${siglas('pp')}, ${siglas('psoe')} y ${siglas('sumar')}.`,
          fuente: fuentePrograma('psoe'),
        },
        {
          titulo: 'El decreto que cayó',
          texto: `Un decreto ley subía las pensiones un 2,8 % para 2025 junto a muchas otras medidas. El ${diaVot('pensiones-rdl-9-2024')} el Congreso no lo convalidó (${si('pensiones-rdl-9-2024')} síes, ${no('pensiones-rdl-9-2024')} noes) y quedó derogado.`,
          fuente: fuenteHecho('pensiones', 1),
        },
        {
          titulo: 'Tres semanas después',
          texto: `El Gobierno aprobó otro decreto con la misma subida del 2,8 %. Se convalidó el ${diaVot('pensiones-rdl-1-2025')} con ${si('pensiones-rdl-1-2025')} síes.`,
          fuente: fuenteHecho('pensiones', 2),
        },
        {
          titulo: '2026',
          texto: `La subida de 2026, un 2,7 %, fue en un decreto propio: ${si('pensiones-rdl-3-2026')} síes.`,
          fuente: fuenteHecho('pensiones', 3),
        },
      ],
      ejercicios: [
        {
          id: 'pensiones-1',
          tipo: 'elige',
          enunciado: '¿Cuánto subieron las pensiones en 2025?',
          opciones: ['2,0 %', '2,7 %', '2,8 %', '3,8 %'],
          correcta: 2,
          explicacion: 'Un 2,8 %, aprobado finalmente con el Real Decreto-ley 1/2025.',
          fuente: fuenteHecho('pensiones', 2),
        },
        {
          id: 'pensiones-2',
          tipo: 'vf',
          afirmacion: 'En enero de 2025 se pudo aprobar la subida de las pensiones y rechazar el resto del decreto.',
          verdadera: false,
          explicacion: 'Un decreto ley se convalida o se deroga entero, con todas sus medidas.',
          fuente: art('RC', '151'),
        },
        {
          id: 'pensiones-3',
          tipo: 'ordena',
          enunciado: 'Ordena lo que pasó con la subida de 2025.',
          pasos: [
            'El Gobierno aprueba un decreto con la subida y otras medidas',
            'El Congreso no lo convalida y queda derogado',
            'El Gobierno aprueba otro decreto con la misma subida',
            'El Congreso lo convalida',
          ],
          explicacion: 'Entre la primera y la segunda votación pasaron tres semanas.',
          fuente: fuenteHecho('pensiones'),
        },
        {
          id: 'pensiones-4',
          tipo: 'elige',
          enunciado: '¿Y cuánto subieron en 2026?',
          opciones: ['2,7 %', '2,8 %', '1,5 %', 'No subieron'],
          correcta: 0,
          explicacion: 'Un 2,7 %, con el Real Decreto-ley 3/2026.',
          fuente: fuenteHecho('pensiones', 3),
        },
        {
          id: 'pensiones-5',
          tipo: 'completa',
          frase: 'Si el Congreso no convalida un decreto ley, el decreto queda ___.',
          opciones: ['derogado', 'aprobado', 'en el Senado'],
          correcta: 0,
          explicacion: 'Deja de aplicarse. Por eso hubo que aprobar otro.',
          fuente: art('CE', '86'),
        },
      ],
    },
    {
      id: 'tema-vivienda',
      titulo: 'Okupación',
      gancho: 'Todos prometían desalojos más rápidos. ¿Qué ha cambiado de verdad?',
      simbolo: '⌂',
      hechos: ['okupacion'],
      tarjetas: [
        {
          titulo: 'La idea',
          texto: `Desalojar antes una vivienda ocupada ilegalmente. ${siglas('pp')} prometía hacerlo en 24 horas; ${siglas('psoe')}, en 48; ${siglas('upn')} y ${siglas('vox')}, cambios legales para proteger a los propietarios.`,
          fuente: fuentePrograma('pp'),
        },
        {
          titulo: 'Juicio rápido',
          texto: `La Ley Orgánica 1/2025, de eficiencia de la Justicia, manda juzgar la usurpación y el allanamiento por juicio rápido. Salió con ${si('okupa-eficiencia')} síes, uno más de los 176 necesarios.`,
          fuente: fuenteHecho('okupacion'),
        },
        {
          titulo: 'Dos proposiciones',
          texto: `Las de Junts (${si('okupa-junts')} síes) y del PP (${si('okupa-pp')} síes) contra la ocupación ilegal pasaron el primer paso, la toma en consideración.`,
          fuente: fuenteVot('okupa-pp'),
        },
        {
          titulo: 'Caducaron',
          texto: 'No llegaron a votación final y caducaron al disolverse las Cortes el 5 de octubre de 2026.',
          fuente: art('RC', '207'),
        },
      ],
      ejercicios: [
        {
          id: 'vivienda-1',
          tipo: 'vf',
          afirmacion: 'Hoy hay una ley que obliga a desalojar a los okupas en 24 horas.',
          verdadera: false,
          explicacion: 'No hay ley de desalojo en 24 o 48 horas. Lo que cambió es que se juzga por juicio rápido.',
          fuente: fuenteHecho('okupacion'),
        },
        {
          id: 'vivienda-2',
          tipo: 'elige',
          enunciado: '¿Qué cambió la Ley Orgánica 1/2025 sobre la okupación?',
          opciones: [
            'Desalojo en 24 horas',
            'Se juzga por el procedimiento de juicio rápido',
            'Más años de cárcel',
            'Nada',
          ],
          correcta: 1,
          explicacion: 'Añadió la usurpación y el allanamiento de morada a los delitos que van a juicio rápido.',
          fuente: fuenteHecho('okupacion'),
        },
        {
          id: 'vivienda-3',
          tipo: 'completa',
          frase: 'Las proposiciones de Junts y del PP ___ al disolverse las Cortes.',
          opciones: ['caducaron', 'se aprobaron', 'pasaron al Senado'],
          correcta: 0,
          explicacion: 'Lo pendiente caduca con la disolución.',
          fuente: art('RC', '207'),
        },
        {
          id: 'vivienda-4',
          tipo: 'empareja',
          enunciado: 'Une cada partido con lo que llevaba en su programa.',
          pares: [par('okupacion', 'pp'), par('okupacion', 'psoe'), par('okupacion', 'vox')],
          explicacion: 'Son sus programas del 23J; en la ficha del caso ves la página de cada uno.',
          fuente: fuentePrograma('psoe'),
        },
        {
          id: 'vivienda-5',
          tipo: 'vf',
          afirmacion: 'Votar «sí» en una toma en consideración es aprobar la ley.',
          verdadera: false,
          explicacion: 'Es solo el primer paso: que el Congreso empiece a tramitarla.',
          fuente: art('RC', '126'),
        },
      ],
    },
    {
      id: 'tema-inmigracion',
      titulo: 'Inmigración',
      gancho: 'Una regularización que llegó por decreto y un reparto de menores muy ajustado.',
      simbolo: '⇆',
      hechos: ['regularizacion', 'menores-migrantes'],
      tarjetas: [
        {
          titulo: 'Una iniciativa con firmas',
          texto: `Una iniciativa legislativa popular pedía una regularización extraordinaria. En 2024 pasó el primer paso con ${si('regularizacion-toma')} síes, pero no tuvo votación final.`,
          fuente: fuenteVot('regularizacion-toma'),
        },
        {
          titulo: 'Llegó por real decreto',
          texto:
            'El Gobierno aprobó el Real Decreto 316/2026: un permiso por «arraigo extraordinario» para quien estuviera en España antes del 1 de enero de 2026, con solicitudes hasta el 30 de junio. Un real decreto no se vota en el Congreso.',
          fuente: fuenteHecho('regularizacion'),
        },
        {
          titulo: 'Menores que llegan solos',
          texto: `Una ley para repartirlos de forma obligatoria entre comunidades no pasó el primer paso (${si('menores-ley')} síes, ${no('menores-ley')} noes). Después, un decreto ley creó un reparto obligatorio cuando una comunidad triplica su capacidad: se convalidó por ${si('menores-rdl-2-2025')} a ${no('menores-rdl-2-2025')}.`,
          fuente: fuenteVot('menores-rdl-2-2025'),
        },
        {
          titulo: 'Recurrido',
          texto:
            'Varias comunidades, entre ellas Madrid y Aragón, recurrieron el decreto de menores ante el Tribunal Constitucional. Hasta el 6 de octubre de 2026 no había sentencia.',
          fuente: fuenteHecho('menores-migrantes', 1),
        },
      ],
      ejercicios: [
        {
          id: 'inmigracion-1',
          tipo: 'vf',
          afirmacion: 'La regularización de 2026 se aprobó con una ley votada en el Congreso.',
          verdadera: false,
          explicacion: 'Fue un real decreto del Gobierno, que modifica el reglamento de extranjería.',
          fuente: fuenteHecho('regularizacion'),
        },
        {
          id: 'inmigracion-2',
          tipo: 'elige',
          enunciado: '¿Qué era la iniciativa de 2024 para regularizar?',
          opciones: [
            'Una iniciativa legislativa popular, con firmas de ciudadanos',
            'Un decreto ley del Gobierno',
            'Una moción de censura',
            'Una propuesta del Senado',
          ],
          correcta: 0,
          explicacion: 'Hacen falta al menos 500.000 firmas para llevarla al Congreso.',
          fuente: art('CE', '87'),
        },
        {
          id: 'inmigracion-3',
          tipo: 'elige',
          enunciado: '¿A quién se dirigía el arraigo extraordinario?',
          opciones: [
            'A quien estuviera en España antes del 1 de enero de 2026',
            'A quien llegue durante 2026',
            'Solo a menores',
            'Solo a quien tenga contrato',
          ],
          correcta: 0,
          explicacion: 'Las solicitudes se podían presentar hasta el 30 de junio de 2026.',
          fuente: fuenteHecho('regularizacion'),
        },
        {
          id: 'inmigracion-4',
          tipo: 'completa',
          frase: 'El reparto obligatorio de menores se activa cuando una comunidad ___ su capacidad de acogida.',
          opciones: ['triplica', 'duplica', 'llena'],
          correcta: 0,
          explicacion: 'Es el Real Decreto-ley 2/2025, convalidado en abril de 2025.',
          fuente: fuenteHecho('menores-migrantes', 2),
        },
        {
          id: 'inmigracion-5',
          tipo: 'vf',
          afirmacion: 'La iniciativa popular de regularización caducó al disolverse las Cortes.',
          verdadera: false,
          explicacion: 'Las iniciativas legislativas populares no caducan con la disolución.',
          fuente: fuenteHecho('regularizacion', 2),
        },
      ],
    },
    {
      id: 'tema-impuestos',
      titulo: 'Impuestos',
      gancho: 'El IRPF y la inflación, y el impuesto a las energéticas.',
      simbolo: '%',
      hechos: ['irpf', 'gravamen-energetico'],
      tarjetas: [
        {
          titulo: 'Deflactar el IRPF',
          texto: `Es ajustar la tarifa a la inflación, para que el impuesto no suba solo porque suben los sueldos con los precios. Lo prometían ${siglas('bng')}, ${siglas('pp')} y ${siglas('upn')}.`,
          fuente: fuentePrograma('pp'),
        },
        {
          titulo: 'Solo una petición',
          texto: `Una proposición no de ley del PP para deflactarlo se aprobó (${si('irpf-pnl')} síes, ${no('irpf-pnl')} noes). Es una petición al Gobierno: no cambia el impuesto por sí sola.`,
          fuente: fuenteVot('irpf-pnl'),
        },
        {
          titulo: 'Impuesto a las energéticas',
          texto: `Había un gravamen temporal a las grandes energéticas. El decreto que lo prorrogaba en 2025 no se convalidó (${si('gravamen-energetico')} síes, ${no('gravamen-energetico')} noes) y quedó derogado.`,
          fuente: fuenteHecho('gravamen-energetico'),
        },
      ],
      ejercicios: [
        {
          id: 'impuestos-1',
          tipo: 'elige',
          enunciado: '¿Qué es deflactar el IRPF?',
          opciones: ['Ajustar la tarifa a la inflación', 'Bajar el IVA', 'Quitar el IRPF', 'Subir las pensiones'],
          correcta: 0,
          explicacion: 'Así la subida de precios no hace pagar más impuesto por sí sola.',
          fuente: fuenteVot('irpf-pnl'),
        },
        {
          id: 'impuestos-2',
          tipo: 'vf',
          afirmacion: 'Como se aprobó la proposición no de ley del PP, el IRPF se deflactó.',
          verdadera: false,
          explicacion:
            'Una proposición no de ley es una petición: el impuesto solo cambia con una ley o un decreto ley.',
          fuente: art('RC', '193'),
        },
        {
          id: 'impuestos-3',
          tipo: 'vf',
          afirmacion: 'El gravamen temporal a las energéticas siguió aplicándose en 2025.',
          verdadera: false,
          explicacion: 'El decreto que lo prorrogaba no se convalidó en enero de 2025.',
          fuente: fuenteHecho('gravamen-energetico'),
        },
        {
          id: 'impuestos-4',
          tipo: 'elige',
          enunciado: '¿Cómo acabó la votación del decreto del gravamen energético?',
          opciones: [
            `${no('gravamen-energetico')} noes y ${si('gravamen-energetico')} síes: derogado`,
            `${no('gravamen-energetico')} síes: convalidado`,
            'Empate: se repitió',
            'No se votó',
          ],
          correcta: 0,
          explicacion: `Fue el ${diaVot('gravamen-energetico')}.`,
          fuente: fuenteVot('gravamen-energetico'),
        },
      ],
    },
    {
      id: 'tema-justicia',
      titulo: 'Jueces y Constitución',
      gancho: 'Quién elige al órgano de los jueces, y la última reforma de la Constitución.',
      simbolo: 'CE',
      hechos: ['cgpj', 'articulo-49'],
      tarjetas: [
        {
          titulo: 'El CGPJ',
          texto:
            'Gobierna a los jueces. Tiene 20 vocales: 12 entre jueces y 8 juristas propuestos por el Congreso y el Senado.',
          fuente: art('CE', '122'),
        },
        {
          titulo: 'El debate',
          texto: `${siglas('pp')} quería que los jueces eligieran a los 12 vocales judiciales, y ${siglas('vox')}, a todos; ${siglas('psoe')} y ${siglas('sumar')}, mantener la elección por las Cortes.`,
          fuente: fuentePrograma('vox'),
        },
        {
          titulo: 'El pacto de 2024',
          texto: `PP y PSOE pactaron la Ley Orgánica 3/2024 (${si('cgpj-pacto-final')} síes). Encargó al propio CGPJ estudiar los sistemas europeos y proponer una reforma. El sistema no cambió.`,
          fuente: fuenteHecho('cgpj'),
        },
        {
          titulo: 'Artículo 49',
          texto:
            'La Constitución hablaba de «disminuidos». En 2024 se reformó para hablar de personas con discapacidad. Necesitaba tres quintos: 210 de 350.',
          fuente: fuenteHecho('articulo-49'),
        },
      ],
      ejercicios: [
        {
          id: 'justicia-1',
          tipo: 'vf',
          afirmacion: 'Desde 2024, los jueces eligen a los 12 vocales judiciales del CGPJ.',
          verdadera: false,
          explicacion: 'La ley pactada en 2024 encargó un estudio y una propuesta; el sistema de elección no cambió.',
          fuente: fuenteHecho('cgpj'),
        },
        {
          id: 'justicia-2',
          tipo: 'elige',
          enunciado: '¿Qué hizo la Ley Orgánica 3/2024?',
          opciones: [
            'Encargar al CGPJ un estudio y una propuesta de reforma',
            'Que los jueces elijan a todos los vocales',
            'Suprimir el CGPJ',
            'Reducir el número de vocales',
          ],
          correcta: 0,
          explicacion: 'Le dio seis meses para estudiar los sistemas europeos y proponer una reforma.',
          fuente: fuenteHecho('cgpj'),
        },
        {
          id: 'justicia-3',
          tipo: 'elige',
          enunciado: '¿Cuántos votos necesitaba en el Congreso la reforma del artículo 49?',
          opciones: ['176', '210', '233', '350'],
          correcta: 1,
          explicacion: 'Una reforma de la Constitución necesita tres quintos de cada cámara: 210 de 350.',
          fuente: art('CE', '167'),
        },
        {
          id: 'justicia-4',
          tipo: 'elige',
          enunciado: '¿Qué palabra quitó de la Constitución la reforma del artículo 49?',
          opciones: ['Disminuidos', 'Incapaces', 'Inválidos', 'Dependientes'],
          correcta: 0,
          explicacion: 'Ahora el artículo habla de las personas con discapacidad. Está en vigor desde febrero de 2024.',
          fuente: fuenteHecho('articulo-49'),
        },
        {
          id: 'justicia-5',
          tipo: 'vf',
          afirmacion: `La proposición del PP de 2026 para que elijan los jueces se rechazó por ${no('cgpj-pp')} noes frente a ${si('cgpj-pp')} síes.`,
          verdadera: true,
          explicacion: `Fue el ${diaVot('cgpj-pp')}. La de Vox, en 2024, también se rechazó.`,
          fuente: fuenteVot('cgpj-pp'),
        },
      ],
    },
    {
      id: 'tema-ap9',
      titulo: 'La AP-9',
      gancho: 'Una ley que pidió Galicia y que necesitaba 176 síes.',
      simbolo: '⇢',
      hechos: ['ap9'],
      tarjetas: [
        {
          titulo: 'La idea',
          texto: `Que la autopista del Atlántico (AP-9), del Estado, pase a Galicia. ${siglas('bng')} lo llevaba en su programa.`,
          fuente: fuentePrograma('bng'),
        },
        {
          titulo: 'La pidió el Parlamento de Galicia',
          texto: `Los parlamentos autonómicos pueden llevar leyes al Congreso. Esta pasó el primer paso en 2024 con ${si('ap9-toma')} síes.`,
          fuente: art('CE', '87'),
        },
        {
          titulo: 'Ley orgánica',
          texto: `En la votación final logró ${si('ap9-final')} síes; necesitaba 176. Luego el Congreso rechazó los cambios que hizo el Senado.`,
          fuente: fuenteVot('ap9-final'),
        },
        {
          titulo: 'Cómo está',
          texto:
            'Es la Ley Orgánica 3/2026. Fija el marco, pero el traspaso efectivo necesita un acuerdo de la Comisión Mixta de Transferencias y un real decreto, que hasta el 6 de octubre no se había publicado.',
          fuente: fuenteHecho('ap9'),
        },
      ],
      ejercicios: [
        {
          id: 'ap9-1',
          tipo: 'elige',
          enunciado: '¿Quién presentó en el Congreso la ley de la AP-9?',
          opciones: ['El Parlamento de Galicia', 'El Gobierno', 'El Senado', 'Ciudadanos con firmas'],
          correcta: 0,
          explicacion: 'Las asambleas autonómicas pueden enviar proposiciones de ley al Congreso.',
          fuente: art('CE', '87'),
        },
        {
          id: 'ap9-2',
          tipo: 'vf',
          afirmacion: 'Con la ley publicada, la Xunta ya gestiona la AP-9.',
          verdadera: false,
          explicacion: 'Falta el acuerdo de traspaso y el real decreto que lo hace efectivo.',
          fuente: fuenteHecho('ap9'),
        },
        {
          id: 'ap9-3',
          tipo: 'elige',
          enunciado: '¿Cuántos síes tuvo la votación final?',
          opciones: ['176', String(si('ap9-final')), '210', String(si('ap9-toma'))],
          correcta: 1,
          explicacion: `${si('ap9-final')} síes y ${no('ap9-final')} noes, el ${diaVot('ap9-final')}.`,
          fuente: fuenteVot('ap9-final'),
        },
        {
          id: 'ap9-4',
          tipo: 'completa',
          frase: 'Como era una ley orgánica, necesitaba ___ síes.',
          opciones: ['176', '210', '175'],
          correcta: 0,
          explicacion: 'Mayoría absoluta del Congreso en la votación final.',
          fuente: art('CE', '81'),
        },
        {
          id: 'ap9-5',
          tipo: 'vf',
          afirmacion: 'El Congreso aceptó los cambios que hizo el Senado.',
          verdadera: false,
          explicacion: `Los rechazó: ${si('ap9-senado')} síes y ${no('ap9-senado')} noes. Quedó el texto del Congreso.`,
          fuente: fuenteVot('ap9-senado'),
        },
      ],
    },
  ],
};
