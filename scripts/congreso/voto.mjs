// utilidades: cargar JSON de una votación (con caché)
import fs from 'node:fs';
fs.mkdirSync('votos', { recursive: true });
const UA = { headers: { 'User-Agent': 'Mozilla/5.0' } };
export async function cargar(ruta) {
  const cache = 'votos/' + ruta.split('/').slice(-4).join('_');
  if (fs.existsSync(cache)) return JSON.parse(fs.readFileSync(cache, 'utf8'));
  const d = await (await fetch('https://www.congreso.es' + ruta, UA)).json();
  fs.writeFileSync(cache, JSON.stringify(d));
  return d;
}
export const indice = fs.existsSync('indice.json') ? JSON.parse(fs.readFileSync('indice.json', 'utf8')) : {};
