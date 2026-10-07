// Paso 1. Descarga la página de cada día con votaciones y guarda título + enlaces JSON en indice.json
import fs from 'node:fs';
const html0 = await (await fetch('https://www.congreso.es/es/opendata/votaciones', { headers: { 'User-Agent': 'Mozilla/5.0 (politica-app)' } })).text();
const dias = JSON.parse(html0.match(/diasVotaciones = (\[[^\]]*\])/)[1]).map(String);
console.log('días', dias.length, dias[0], dias.at(-1));
const UA = { headers: { 'User-Agent': 'Mozilla/5.0 (politica-app)' } };
const indice = fs.existsSync('indice.json') ? JSON.parse(fs.readFileSync('indice.json', 'utf8')) : {};
const pend = dias.filter((d) => !indice[d]);
async function uno(d) {
  const f = `${d.slice(6)}/${d.slice(4, 6)}/${d.slice(0, 4)}`;
  const url = 'https://www.congreso.es/es/opendata/votaciones?p_p_id=votaciones&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&targetLegislatura=XV&targetDate=' + f;
  const h = await (await fetch(url, UA)).text();
  // cada votación: un bloque con título h5 (o h4) seguido de enlaces .json
  const items = [];
  const re = /<h5[^>]*>([\s\S]*?)<\/h5>|href="(\/webpublica\/opendata\/votaciones\/[^"]+\.json)"/g;
  let titulo = '';
  for (const m of h.matchAll(re)) {
    if (m[1]) titulo = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    else items.push({ titulo, json: m[2] });
  }
  indice[d] = items;
}
for (let i = 0; i < pend.length; i += 4) {
  await Promise.all(pend.slice(i, i + 4).map((d) => uno(d).catch((e) => console.log('ERR', d, e.message))));
  fs.writeFileSync('indice.json', JSON.stringify(indice));
  process.stdout.write('.');
}
console.log('\nvotaciones', Object.values(indice).flat().length);
