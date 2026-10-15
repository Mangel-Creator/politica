/**
 * Motor de una ronda de ejercicios, como en las apps de idiomas: se responden en orden y
 * cada uno que se falla vuelve a salir una vez al final. Cuenta como acierto solo lo que se
 * acierta a la primera.
 */

export type Ronda = {
  /** Ejercicios por hacer, en orden; los fallados se añaden al final. */
  cola: string[];
  /** Posición del ejercicio actual en la cola. */
  pos: number;
  /** Fallados al menos una vez. */
  fallados: string[];
};

export function empezar(ids: string[]): Ronda {
  return { cola: [...ids], pos: 0, fallados: [] };
}

export function actual(r: Ronda): string | undefined {
  return r.cola[r.pos];
}

export function terminada(r: Ronda) {
  return r.pos >= r.cola.length;
}

/** Registra la respuesta al ejercicio actual y pasa al siguiente. */
export function responder(r: Ronda, bien: boolean): Ronda {
  const id = r.cola[r.pos];
  if (id === undefined) return r;
  if (bien) return { ...r, pos: r.pos + 1 };
  const primeraVez = !r.fallados.includes(id);
  return {
    cola: primeraVez ? [...r.cola, id] : r.cola,
    pos: r.pos + 1,
    fallados: primeraVez ? [...r.fallados, id] : r.fallados,
  };
}

/** Ejercicios distintos de la ronda y cuántos se acertaron a la primera. */
export function resultado(r: Ronda) {
  const distintos = [...new Set(r.cola)];
  return {
    total: distintos.length,
    aciertos: distintos.length - r.fallados.length,
    fallados: r.fallados,
    acertados: distintos.filter((id) => !r.fallados.includes(id)),
  };
}

/** Copia barajada (Fisher-Yates). `azar` se puede fijar en los tests. */
export function barajar<T>(lista: T[], azar: () => number = Math.random) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(azar() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

/** Barajada pero nunca en el orden bueno, para que ordenar no salga hecho. */
export function desordenar<T>(lista: T[], azar: () => number = Math.random) {
  if (lista.length < 2) return [...lista];
  for (let intento = 0; intento < 10; intento++) {
    const b = barajar(lista, azar);
    if (b.some((x, i) => x !== lista[i])) return b;
  }
  return [...lista.slice(1), lista[0]];
}

/** Para un repaso: hasta `n` ejercicios, primero los fallados y luego al azar. */
export function elegirRepaso(todos: string[], fallos: string[], n: number, azar: () => number = Math.random) {
  const validos = new Set(todos);
  const pendientes = barajar(
    fallos.filter((id) => validos.has(id)),
    azar,
  );
  const resto = barajar(
    todos.filter((id) => !pendientes.includes(id)),
    azar,
  );
  return [...pendientes, ...resto].slice(0, n);
}
