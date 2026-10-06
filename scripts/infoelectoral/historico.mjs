// Escaños y votos de cada candidatura a nivel nacional en todas las generales (Congreso).
// Uso: node historico.mjs  -> escribe historico.json con { fecha: [{codigo, siglas, nombre, votos, escanos}] }
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

export const GENERALES = ['197706', '197903', '198210', '198606', '198910', '199306', '199603', '200003', '200403', '200803', '201111', '201512', '201606', '201904', '201911', '202307'];

async function preparar(fecha) {
  const carpeta = `datos-${fecha}`;
  const zip = `02${fecha}_TOTA.zip`;
  if (!fs.existsSync(carpeta)) {
    const r = await fetch(`https://infoelectoral.interior.gob.es/estaticos/docxl/apliextr/${zip}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error(`${zip}: ${r.status}`);
    fs.mkdirSync(carpeta);
    fs.writeFileSync(`${carpeta}/${zip}`, Buffer.from(await r.arrayBuffer()));
    if (process.platform === 'win32') execFileSync('C:/Windows/System32/tar.exe', ['-xf', zip], { cwd: carpeta });
    else execFileSync('unzip', ['-o', zip], { cwd: carpeta });
  }
  return carpeta;
}

export async function totales(fecha) {
  const carpeta = await preparar(fecha);
  const sufijo = `02${fecha.slice(2)}.DAT`;
  const leer = (n) => new TextDecoder('latin1').decode(fs.readFileSync(`${carpeta}/${n}${sufijo}`)).split(/\r?\n/).filter(Boolean);
  const cand = {};
  for (const l of leer('03')) cand[l.slice(8, 14)] = { siglas: l.slice(14, 64).trim(), nombre: l.slice(64, 214).trim() };
  const filas = [];
  for (const l of leer('08')) {
    if (l.slice(9, 11) !== '99' || l.slice(11, 13) !== '99') continue;
    const codigo = l.slice(14, 20);
    filas.push({ codigo, ...cand[codigo], votos: +l.slice(20, 28), escanos: +l.slice(28, 33) });
  }
  return filas.sort((a, b) => b.escanos - a.escanos || b.votos - a.votos);
}

if (process.argv[1].endsWith('historico.mjs')) {
  const out = {};
  for (const f of GENERALES) out[f] = (await totales(f)).filter((x) => x.escanos > 0);
  fs.writeFileSync('historico.json', JSON.stringify(out, null, 1));
  for (const [f, filas] of Object.entries(out))
    console.log(f, filas.reduce((s, x) => s + x.escanos, 0), filas.map((x) => `${x.siglas}:${x.escanos}`).join('  '));
}
