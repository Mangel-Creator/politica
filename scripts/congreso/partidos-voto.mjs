import { cargar, indice } from './voto.mjs';
const GRUPO = { GP: 'pp', GVOX: 'vox', GS: 'psoe', GSUMAR: 'sumar', GR: 'erc', GJxCAT: 'junts', 'GEH Bildu': 'eh-bildu', 'GV (EAJ-PNV)': 'pnv' };
const NOMBRE = {
  'Rego Candamil, Néstor': 'bng', 'Valido García, Cristina': 'cc', 'Catalán Higueras, Alberto': 'upn',
  'Belarra Urteaga, Ione': 'podemos', 'Sánchez Serna, Javier': 'podemos', 'Velarde Gómez, Martina': 'podemos',
  'Santana Perera, Noemí': 'podemos', 'Verstrynge Revuelta, Lilith': 'podemos',
  // Sin grupo en sus dos primeras votaciones; en todas las demás, Grupo Socialista.
  'Conesa Coma, Ignasi': 'psoe',
};
export function partidoDe(v) { return NOMBRE[v.diputado] ?? GRUPO[v.grupo] ?? 'otros'; }
export function recuento(d) {
  const r = {};
  for (const v of d.votaciones) {
    const p = partidoDe(v);
    r[p] ??= { si: 0, no: 0, abstencion: 0, noVota: 0, nombres: [] };
    const k = v.voto === 'Sí' ? 'si' : v.voto === 'No' ? 'no' : v.voto === 'Abstención' ? 'abstencion' : 'noVota';
    r[p][k]++;
    if (p === 'otros') r[p].nombres.push(v.diputado + '(' + v.grupo + ')');
  }
  return r;
}
export async function mostrar(fecha, re) {
  const its = indice[fecha].filter((x) => new RegExp(re, 'i').test(x.titulo));
  for (const it of its) {
    const d = await cargar(it.json);
    const t = d.totales;
    console.log(`\n${fecha} #${d.informacion.numeroVotacion} ${(d.informacion.textoExpediente || it.titulo).replace(/\s+/g, ' ').slice(0, 200)}`);
    console.log(`  ${d.informacion.titulo} | sí ${t.afavor} no ${t.enContra} abs ${t.abstenciones} noVotan ${t.noVotan} asentimiento ${t.asentimiento}`);
    const r = recuento(d);
    console.log('  ' + Object.entries(r).map(([p, x]) => `${p}:${x.si}/${x.no}/${x.abstencion}/${x.noVota}${x.nombres.length ? ' ' + x.nombres.join(',') : ''}`).join('  '));
    console.log('  https://www.congreso.es' + it.json);
  }
}
if (process.argv[2]) await mostrar(process.argv[2], process.argv[3] ?? '.');
