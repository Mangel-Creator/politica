export type Asiento = { x: number; y: number };

/**
 * Posiciones de `total` asientos en un semicírculo de radio 1 (y hacia arriba), en filas
 * de radio 0,4 a 1 y ordenados de izquierda a derecha por ángulo. Cada fila recibe
 * asientos en proporción a su longitud, para que el hueco entre puntos sea parecido.
 */
export function asientosHemiciclo(total: number, filas: number): Asiento[] {
  const radios = Array.from({ length: filas }, (_, i) => (filas === 1 ? 1 : 0.4 + (0.6 * i) / (filas - 1)));
  const suma = radios.reduce((a, b) => a + b, 0);
  let quedan = total;
  const porFila = radios.map((r, i) => {
    const n = i === filas - 1 ? quedan : Math.round((total * r) / suma);
    quedan -= n;
    return n;
  });

  const puntos: (Asiento & { angulo: number })[] = [];
  porFila.forEach((n, fila) => {
    for (let j = 0; j < n; j++) {
      const angulo = Math.PI * (1 - (n === 1 ? 0.5 : j / (n - 1)));
      puntos.push({ x: radios[fila] * Math.cos(angulo), y: radios[fila] * Math.sin(angulo), angulo });
    }
  });
  return puntos.sort((a, b) => b.angulo - a.angulo || a.x - b.x).map(({ x, y }) => ({ x, y }));
}
