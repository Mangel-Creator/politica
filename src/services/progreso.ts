import { diasEntre } from './fechas';

/**
 * Progreso de Aprende, guardado solo en el dispositivo: puntos, racha de días, mejor
 * resultado de cada lección y ejercicios fallados pendientes de repaso. Funciones puras: la
 * lectura y escritura en el almacenamiento están en src/hooks/use-progreso.ts.
 */

export type ProgresoLeccion = { mejor: number; total: number; veces: number; ultima: string };

export type Progreso = {
  version: 1;
  puntos: number;
  /** Días (AAAA-MM-DD) en que se terminó al menos una lección o un repaso. */
  dias: string[];
  lecciones: Record<string, ProgresoLeccion>;
  /** Ejercicios fallados que todavía no se han acertado a la primera en un repaso. */
  fallos: string[];
};

export const PROGRESO_VACIO: Progreso = { version: 1, puntos: 0, dias: [], lecciones: {}, fallos: [] };

export const PUNTOS = { leccion: 10, perfecta: 5, repaso: 5 } as const;

/** Días que se guardan para la racha: de sobra para cualquier racha real. */
const MAX_DIAS = 400;

/** Días seguidos con actividad. Sigue viva si el último día fue hoy o ayer. */
export function racha(dias: string[], hoy: string) {
  const unicos = [...new Set(dias)].sort();
  let ultimo = unicos.at(-1);
  if (!ultimo || diasEntre(ultimo, hoy) > 1) return 0;
  let n = 1;
  for (let i = unicos.length - 2; i >= 0; i--) {
    if (diasEntre(unicos[i], ultimo) !== 1) break;
    n++;
    ultimo = unicos[i];
  }
  return n;
}

export function hechoHoy(p: Progreso, hoy: string) {
  return p.dias.includes(hoy);
}

export type Sesion = {
  /** Lección terminada; sin ella es un repaso. */
  leccionId?: string;
  /** Ejercicios acertados a la primera. */
  aciertos: number;
  total: number;
  /** Ejercicios que se fallaron al menos una vez. */
  fallados: string[];
  /** Ejercicios acertados a la primera: salen de la lista de repaso. */
  acertados: string[];
};

/** Puntos que da una sesión: lección + extra si no hubo fallos; el repaso da menos. */
export function puntosDe(s: Sesion) {
  const perfecta = s.total > 0 && s.aciertos === s.total;
  return (s.leccionId ? PUNTOS.leccion : PUNTOS.repaso) + (perfecta ? PUNTOS.perfecta : 0);
}

export function registrar(p: Progreso, s: Sesion, hoy: string): Progreso {
  const dias = [...new Set([...p.dias, hoy])].sort().slice(-MAX_DIAS);
  const lecciones = { ...p.lecciones };
  if (s.leccionId) {
    const antes = lecciones[s.leccionId];
    lecciones[s.leccionId] = {
      mejor: Math.max(antes?.mejor ?? 0, s.aciertos),
      total: s.total,
      veces: (antes?.veces ?? 0) + 1,
      ultima: hoy,
    };
  }
  const fuera = new Set(s.acertados);
  const fallos = [...new Set([...p.fallos, ...s.fallados])].filter((id) => !fuera.has(id));
  return { ...p, puntos: p.puntos + puntosDe(s), dias, lecciones, fallos };
}

/** Primera lección del camino que aún no se ha terminado. */
export function siguienteLeccion(orden: string[], p: Progreso) {
  return orden.find((id) => !p.lecciones[id]);
}

/** Lee lo guardado. Si falta o está roto, empieza de cero en vez de fallar. */
export function leerProgreso(crudo: string | null): Progreso {
  if (!crudo) return PROGRESO_VACIO;
  try {
    const p = JSON.parse(crudo) as Partial<Progreso>;
    if (p?.version !== 1) return PROGRESO_VACIO;
    return {
      version: 1,
      puntos: typeof p.puntos === 'number' ? p.puntos : 0,
      dias: Array.isArray(p.dias) ? p.dias.filter((d) => typeof d === 'string') : [],
      lecciones: p.lecciones && typeof p.lecciones === 'object' ? p.lecciones : {},
      fallos: Array.isArray(p.fallos) ? p.fallos.filter((d) => typeof d === 'string') : [],
    };
  } catch {
    return PROGRESO_VACIO;
  }
}
