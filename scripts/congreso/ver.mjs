// node ver.mjs FECHA NUM... -> voto por partido usando todas.json
import fs from 'node:fs';
import { cargar } from './voto.mjs';
import { recuento } from './partidos-voto.mjs';
const t = JSON.parse(fs.readFileSync('todas.json', 'utf8'));
const [d, ...nums] = process.argv.slice(2);
for (const n of nums) {
  const v = t.find((x) => x.d === d && x.n === +n);
  const j = await cargar(v.json);
  const r = recuento(j);
  console.log(`${d} #${n} ${v.sub || v.tipo} | ${v.exp.slice(0, 100)} | ${v.t.afavor}-${v.t.enContra}-${v.t.abstenciones}-${v.t.noVotan}`);
  console.log('  ' + Object.entries(r).map(([p, x]) => `${p}:${x.si}/${x.no}/${x.abstencion}/${x.noVota}`).join('  ') + (r.otros ? '  otros=' + r.otros.nombres.join(',') : ''));
  console.log('  ' + v.json);
}
