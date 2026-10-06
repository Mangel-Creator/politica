// Paso 2. Descarga el JSON de cada votación y guarda un resumen en todas.json.
import fs from 'node:fs';
import { cargar, indice } from './voto.mjs';
const todos = Object.entries(indice).flatMap(([d, its]) => its.map((it) => ({ d, json: it.json })));
const vistos = new Set(); const lista = todos.filter((x) => !vistos.has(x.json) && vistos.add(x.json));
const out = [];
for (let i = 0; i < lista.length; i += 8) {
  const parte = await Promise.all(lista.slice(i, i + 8).map(async (x) => {
    try { const v = await cargar(x.json); const inf = v.informacion;
      return { d: x.d, n: inf.numeroVotacion, tipo: inf.titulo, exp: (inf.textoExpediente || '').replace(/\s+/g, ' ').trim(), sub: ((inf.tituloSubGrupo || '') + ' ' + (inf.textoSubGrupo || '')).replace(/\s+/g, ' ').trim(), t: v.totales, json: x.json };
    } catch (e) { return { d: x.d, json: x.json, error: e.message }; } }));
  out.push(...parte);
}
fs.writeFileSync('todas.json', JSON.stringify(out));
console.log(out.length, 'errores', out.filter((x) => x.error).length);
