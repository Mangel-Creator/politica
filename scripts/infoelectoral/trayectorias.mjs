// Genera src/data/trayectorias.ts: escaños de cada partido de la app en todas las generales,
// con las candidaturas oficiales tal como figuran en los ficheros de Infoelectoral.
// Uso: node historico.mjs && node trayectorias.mjs
import fs from 'node:fs';

const h = JSON.parse(fs.readFileSync('historico.json', 'utf8'));

// Siglas oficiales de cada candidatura que cuenta para cada partido. "antecesora": partido o
// coalición anterior de la que procede (se dibuja aparte y se explica en la historia).
const MAPA = {
  bng: { propia: ['BNG', 'B.N.G.'] },
  cc: { propia: ['CC', 'CC-PNC', 'CC-NC-PNC', 'CCa-PNC', 'CCa-PNC-NC', 'CCa'], antecesora: ['AIC'] },
  'eh-bildu': { propia: ['EH Bildu'], antecesora: ['AMAIUR'] },
  erc: { propia: ['EC-FED', 'ERFN', 'ERC', 'ESQUERRA', 'ERC-CATSI', 'ERC-CATSÍ', 'ERC-SOBIRAN', 'ERC-SOBIRANISTES'] },
  junts: { propia: ['JxCAT-JUNTS', 'JxCAT - JUNTS'], antecesora: ['PDPC', 'CIU', 'CiU', 'DL', 'CDC'] },
  pnv: { propia: ['PNV', 'EAJ-PNV'] },
  podemos: {
    propia: ['PODEMOS', 'EN COMÚ', 'PODEMOS-COM', 'PODEMOS-En', 'PODEMOS-IU-EQUO', 'ECP', 'PODEMOS-EN MAREA-ANOVA-EU', 'PODEMOS-IU-', 'ECP-GUANYEM', 'PODEMOS-EU-', 'PODEMOS-IU', 'PODEMOS-EU'],
  },
  pp: { propia: ['PP', 'P.P.'], antecesora: ['AP', 'CD', 'AP-PDP', 'AP-PDP-PL'] },
  psoe: { propia: ['PSOE', 'PSOE-PROGR.', 'P.S.O.E.'] },
  sumar: { propia: ['SUMAR'] },
  upn: { propia: ['UPN', 'NA+', 'U.P.N.'] },
  vox: { propia: ['VOX'] },
};

const usadas = new Set();
let ts = `// Generado con scripts/infoelectoral/trayectorias.mjs a partir de los ficheros oficiales de
// totales de Infoelectoral (Ministerio del Interior). No editar a mano.
import type { Trayectoria } from './historia-detallada';

export const Trayectorias: Record<string, Trayectoria> = {\n`;
for (const [partido, m] of Object.entries(MAPA)) {
  ts += `  '${partido}': [\n`;
  for (const [fecha, filas] of Object.entries(h)) {
    for (const tipo of ['propia', 'antecesora']) {
      const c = filas.filter((x) => (m[tipo] ?? []).includes(x.siglas));
      if (!c.length) continue;
      c.forEach((x) => {
        const k = fecha + x.codigo;
        if (usadas.has(k)) throw new Error(`candidatura repetida: ${fecha} ${x.siglas}`);
        usadas.add(k);
      });
      const lista = c.map((x) => `{ siglas: ${JSON.stringify(x.siglas)}, nombre: ${JSON.stringify(x.nombre)}, escanos: ${x.escanos}, votos: ${x.votos} }`).join(', ');
      ts += `    { eleccion: '${fecha.slice(0, 4)}-${fecha.slice(4)}', tipo: '${tipo}', candidaturas: [${lista}] },\n`;
    }
  }
  ts += '  ],\n';
}
ts += '};\n';
fs.writeFileSync(new URL('../../src/data/trayectorias.ts', import.meta.url), ts);
for (const [p, m] of Object.entries(MAPA)) {
  const todas = [...(m.propia ?? []), ...(m.antecesora ?? [])];
  const vistas = new Set(Object.values(h).flat().map((x) => x.siglas));
  const nunca = todas.filter((s) => !vistas.has(s));
  if (nunca.length) console.log('Siglas sin coincidencia en', p, nunca);
}
console.log('ok');
