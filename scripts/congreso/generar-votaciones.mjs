// Genera src/data/votaciones.ts a partir de los JSON oficiales del Congreso.
// Uso: node generar-votaciones.mjs  (lee la lista ELEGIDAS de abajo)
import fs from 'node:fs';
import { cargar } from './voto.mjs';
import { recuento } from './partidos-voto.mjs';
const ELEGIDAS = JSON.parse(fs.readFileSync('elegidas.json', 'utf8'));
const ORDEN = ['bng', 'cc', 'eh-bildu', 'erc', 'junts', 'pnv', 'podemos', 'pp', 'psoe', 'sumar', 'upn', 'vox', 'otros'];
let ts = `// Generado con los datos abiertos del Congreso (congreso.es/opendata/votaciones).
// No editar a mano: cada cifra sale del JSON oficial enlazado en \`url\`.
import type { VotacionDatos } from './hechos';

export const Votaciones: Record<string, VotacionDatos> = {\n`;
for (const e of ELEGIDAS) {
  const d = await cargar(e.json);
  const r = recuento(d);
  const inf = d.informacion;
  const [dd, mm, aa] = inf.fecha.split('/');
  const fecha = `${aa}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
  const partidos = ORDEN.filter((p) => r[p]).map((p) => {
    const x = r[p];
    return `      { partidoId: '${p}', si: ${x.si}, no: ${x.no}, abstencion: ${x.abstencion}, noVota: ${x.noVota} },`;
  });
  const otros = r.otros ? r.otros.nombres.map((n) => n.replace(/\(.*\)/, '')) : [];
  ts += `  '${e.id}': {
    fecha: '${fecha}',
    sesion: ${inf.sesion},
    numero: ${inf.numeroVotacion},
    tipo: ${JSON.stringify(inf.titulo.trim())},
    expediente: ${JSON.stringify((inf.textoExpediente || '').replace(/\s+/g, ' ').trim())},
    totales: { si: ${d.totales.afavor}, no: ${d.totales.enContra}, abstencion: ${d.totales.abstenciones}, noVota: ${d.totales.noVotan} },
    porPartido: [\n${partidos.join('\n')}\n    ],${otros.length ? `\n    otros: ${JSON.stringify(otros)},` : ''}
    url: 'https://www.congreso.es${e.json}',
  },\n`;
}
ts += '};\n';
fs.writeFileSync(new URL('../../src/data/votaciones.ts', import.meta.url), ts);
console.log('ok', ELEGIDAS.length);
