// Votos, blancos y escaños oficiales del Congreso en cada circunscripción, para comprobar
// que el simulador (src/services/dhondt.ts) da exactamente el reparto oficial.
//
// Uso: node totales.mjs 202307 && node provincias.mjs 202307
// Escribe src/services/__tests__/congreso-AAAAMM.json (usa la carpeta datos-AAAAMM que
// descarga totales.mjs). Formato: FICHEROS.doc dentro del zip.
import fs from 'node:fs';

const fecha = process.argv[2];
if (!/^\d{6}$/.test(fecha ?? '')) throw new Error('Uso: node provincias.mjs AAAAMM');
const sufijo = `02${fecha.slice(2)}.DAT`;
const leer = (n) =>
  new TextDecoder('latin1')
    .decode(fs.readFileSync(`datos-${fecha}/${n}${sufijo}`))
    .split(/\r?\n/)
    .filter(Boolean);

// 03: candidaturas. Código (9-14), siglas (15-64).
const siglas = {};
for (const l of leer('03')) siglas[l.slice(8, 14)] = l.slice(14, 64).trim();

// 07: datos de cada ámbito. Provincia (12-13), distrito (14, 9 = total provincial), nombre (15-64),
// blancos (126-133), votos a candidaturas (142-149), escaños (150-155).
const provincias = {};
for (const l of leer('07')) {
  const pr = l.slice(11, 13);
  if (pr === '99' || l[13] !== '9') continue;
  provincias[pr] = {
    nombre: l.slice(14, 64).trim(),
    escanos: +l.slice(149, 155),
    blancos: +l.slice(125, 133),
    votosACandidaturas: +l.slice(141, 149),
    candidaturas: [],
  };
}

// 08: votos y electos de cada candidatura. Provincia (12-13), distrito (14), código (15-20),
// votos (21-28), electos (29-33).
for (const l of leer('08')) {
  const p = provincias[l.slice(11, 13)];
  if (!p || l[13] !== '9') continue;
  const cod = l.slice(14, 20);
  p.candidaturas.push({ id: cod, siglas: siglas[cod], votos: +l.slice(20, 28), electos: +l.slice(28, 33) });
}

for (const p of Object.values(provincias)) {
  const suma = p.candidaturas.reduce((s, c) => s + c.votos, 0);
  if (suma !== p.votosACandidaturas) throw new Error(`${p.nombre}: la suma de votos no cuadra`);
}
const salida = `../../src/services/__tests__/congreso-${fecha}.json`;
fs.writeFileSync(salida, JSON.stringify(Object.values(provincias), null, 2) + '\n');
console.log(`${Object.keys(provincias).length} circunscripciones → ${salida}`);
