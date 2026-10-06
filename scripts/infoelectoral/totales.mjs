// Escaños y votos por candidatura en unas generales, a partir del fichero oficial de
// totales de Infoelectoral (Ministerio del Interior).
//
// Uso: node totales.mjs AAAAMM   (por ejemplo 202307 para el 23J o 202611 para el 29N)
// Descarga 02AAAAMM_TOTA.zip, lo descomprime y compara el
// total nacional con la suma de las provincias. Formato: FICHEROS.doc dentro del zip.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const fecha = process.argv[2];
if (!/^\d{6}$/.test(fecha ?? '')) throw new Error('Uso: node totales.mjs AAAAMM');
const carpeta = `datos-${fecha}`;
const zip = `02${fecha}_TOTA.zip`;
if (!fs.existsSync(carpeta)) {
  const r = await fetch(`https://infoelectoral.interior.gob.es/estaticos/docxl/apliextr/${zip}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  if (!r.ok) throw new Error(`${zip}: ${r.status}`);
  fs.mkdirSync(carpeta);
  fs.writeFileSync(`${carpeta}/${zip}`, Buffer.from(await r.arrayBuffer()));
  // En Windows, el tar del sistema abre zip (el de Git Bash no); en el resto, unzip.
  if (process.platform === 'win32') execFileSync('C:/Windows/System32/tar.exe', ['-xf', zip], { cwd: carpeta });
  else execFileSync('unzip', ['-o', zip], { cwd: carpeta });
}

const sufijo = `02${fecha.slice(2)}.DAT`;
const leer = (n) =>
  new TextDecoder('latin1')
    .decode(fs.readFileSync(`${carpeta}/${n}${sufijo}`))
    .split(/\r?\n/)
    .filter(Boolean);

// 03: candidaturas. Código (9-14), siglas (15-64), nombre (65-214), cabecera nacional (227-232).
const cand = {};
for (const l of leer('03')) cand[l.slice(8, 14)] = { siglas: l.slice(14, 64).trim(), nacional: l.slice(226, 232) };

// 08: votos y electos. Comunidad (10-11), provincia (12-13), candidatura (15-20), votos (21-28), electos (29-33).
const nacional = {};
const porProvincias = {};
for (const l of leer('08')) {
  const [ca, pr, cod, votos, electos] = [l.slice(9, 11), l.slice(11, 13), l.slice(14, 20), +l.slice(20, 28), +l.slice(28, 33)];
  if (ca === '99' && pr === '99') nacional[cod] = { votos, electos };
  else if (pr !== '99') {
    const k = cand[cod]?.nacional ?? cod;
    porProvincias[k] = (porProvincias[k] ?? 0) + electos;
  }
}

let total = 0;
for (const [cod, x] of Object.entries(nacional).sort((a, b) => b[1].electos - a[1].electos || b[1].votos - a[1].votos)) {
  if (!x.electos) continue;
  total += x.electos;
  const ok = porProvincias[cod] === x.electos ? 'ok' : `DISTINTO (provincias: ${porProvincias[cod]})`;
  console.log(`${cand[cod].siglas.padEnd(16)} ${String(x.electos).padStart(4)} escaños ${x.votos.toLocaleString('es-ES').padStart(11)} votos  ${ok}`);
}
console.log(`Total: ${total} escaños`);
