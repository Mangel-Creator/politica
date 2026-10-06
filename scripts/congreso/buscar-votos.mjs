import fs from 'node:fs';
const t = JSON.parse(fs.readFileSync('todas.json', 'utf8'));
const re = new RegExp(process.argv[2], 'i');
for (const v of t.filter((x) => re.test((x.exp || '') + ' ' + (x.sub || ''))).sort((a, b) => a.d.localeCompare(b.d) || a.n - b.n))
  console.log(`${v.d} #${v.n} [${v.tipo.slice(0, 40)}] ${v.sub ? '{' + v.sub.slice(0, 70) + '} ' : ''}${v.exp.slice(0, 120)} | ${v.t.afavor}-${v.t.enContra}-${v.t.abstenciones}`);
