// Descarga los titulares de los medios y los une con los ya publicados (última semana).
// Lo ejecuta GitHub Actions cada hora para la web: los navegadores no pueden leer los RSS
// directamente (CORS). Uso: node scripts/noticias/descargar.mjs SALIDA.json [URL_PUBLICADA]
import { writeFileSync } from 'node:fs';

import { descargarTitulares, fusionar } from '../../src/services/noticias.ts';

const [salida, publicada] = process.argv.slice(2);
const SEMANA = 7 * 24 * 3600 * 1000;
const cabeceras = { 'User-Agent': 'Mozilla/5.0 (politica-app)' };

let anteriores = [];
if (publicada) {
  try {
    const r = await fetch(publicada, { headers: cabeceras });
    if (r.ok) anteriores = (await r.json()).titulares ?? [];
  } catch {
    // Primera publicación o web caída: se empieza de cero.
  }
}

const { titulares, fallidos } = await descargarTitulares(undefined, (url) =>
  fetch(url, { headers: cabeceras, signal: AbortSignal.timeout(20000) }),
);
const todos = fusionar(anteriores, titulares, Date.now() - SEMANA);
writeFileSync(salida, JSON.stringify({ actualizado: Date.now(), fallidos, titulares: todos }));
console.log(`${titulares.length} nuevos, ${todos.length} en la semana, fallidos: ${fallidos.join(', ') || 'ninguno'}`);
