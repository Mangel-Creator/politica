/**
 * Reparto de escaños de una circunscripción según el artículo 163 de la LOREG:
 * 1) fuera las candidaturas que no llegan al 3 % de los votos válidos (los votos en
 *    blanco cuentan como válidos);
 * 2) se dividen los votos de cada una entre 1, 2, 3… hasta el número de escaños;
 * 3) los escaños van a los cocientes más altos. En un empate gana la candidatura con más
 *    votos en total; si también empatan en votos, la ley manda sortear (aquí se queda la
 *    primera de la lista y se avisa).
 */

export type Candidatura = { id: string; votos: number };

export type Cociente = { id: string; divisor: number; valor: number; elegido: boolean };

export type ResultadoDhondt = {
  escanos: Record<string, number>;
  cocientes: Cociente[];
  /** Candidaturas que no llegan al umbral. */
  excluidas: string[];
  umbral: number;
  /** `true` si el último escaño se decidió entre dos cocientes y votos idénticos (sorteo). */
  sorteo: boolean;
};

export function dhondt(
  candidaturas: Candidatura[],
  escanos: number,
  { blancos = 0, porcentajeUmbral = 3 } = {},
): ResultadoDhondt {
  const validos = candidaturas.reduce((s, c) => s + c.votos, 0) + blancos;
  const umbral = (validos * porcentajeUmbral) / 100;
  const entran = candidaturas.filter((c) => c.votos > 0 && c.votos >= umbral);
  const excluidas = candidaturas.filter((c) => !entran.includes(c)).map((c) => c.id);

  const cocientes: Cociente[] = entran.flatMap((c) =>
    Array.from({ length: escanos }, (_, i) => ({ id: c.id, divisor: i + 1, valor: c.votos / (i + 1), elegido: false })),
  );
  const votosDe = (id: string) => entran.find((c) => c.id === id)!.votos;
  const orden = [...cocientes].sort((a, b) => b.valor - a.valor || votosDe(b.id) - votosDe(a.id));

  const resultado: Record<string, number> = Object.fromEntries(candidaturas.map((c) => [c.id, 0]));
  orden.slice(0, escanos).forEach((q) => {
    q.elegido = true;
    resultado[q.id] += 1;
  });

  const ultimo = orden[escanos - 1];
  const siguiente = orden[escanos];
  const sorteo =
    !!ultimo && !!siguiente && ultimo.valor === siguiente.valor && votosDe(ultimo.id) === votosDe(siguiente.id);

  return { escanos: resultado, cocientes, excluidas, umbral, sorteo };
}
