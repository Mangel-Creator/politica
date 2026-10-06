// Dibuja el icono, el icono adaptativo de Android, la pantalla de carga y el favicon en el
// estilo «papeleta» (src/constants/theme.ts): tinta sobre papel, bordes gruesos, esquinas
// rectas y la «X» de Archivo Black. Sin color de ningún partido.
//
// Uso (desde la raíz del proyecto; sharp y opentype.js no son dependencias de la app):
//   npm i --no-save sharp opentype.js
//   node scripts/iconos/generar.mjs
// Escribe los PNG en assets/images.
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';

const raiz = (ruta) => fileURLToPath(new URL(`../../${ruta}`, import.meta.url));
const FUENTE = raiz('node_modules/@expo-google-fonts/archivo/900Black/Archivo_900Black.ttf');
const SALIDA = process.argv[2] ?? raiz('assets/images');

// Mismos valores que Colors en src/constants/theme.ts.
const TINTA = '#0E0E10';
const PAPEL = '#FFFFFF';
const TINTA_OSCURO = '#F4F4F2';

const fuente = opentype.parse(fs.readFileSync(FUENTE).buffer);

/** Marco hueco: rectángulo exterior menos el interior (regla evenodd). */
const marco = (x, y, w, h, g) =>
  `M${x} ${y}h${w}v${h}h${-w}Z M${x + g} ${y + g}v${h - 2 * g}h${w - 2 * g}v${-(h - 2 * g)}Z`;
const caja = (x, y, w, h) => `M${x} ${y}h${w}v${h}h${-w}Z`;

/** La «X» de Archivo Black con alto `h`, centrada en (cx, cy). */
function equis(cx, cy, h) {
  const prueba = fuente.getPath('X', 0, 0, 100).getBoundingBox();
  const tam = (100 * h) / (prueba.y2 - prueba.y1);
  const b = fuente.getPath('X', 0, 0, tam).getBoundingBox();
  return fuente.getPath('X', cx - (b.x1 + b.x2) / 2, cy - (b.y1 + b.y2) / 2, tam).toPathData(2);
}

/**
 * La marca en una caja de 1000×1000: una papeleta con dos casillas (una marcada) entrando en la
 * urna. `simple` deja solo la papeleta con una «X» grande, para tamaños pequeños (favicon).
 * Cada pieza es un trazado aparte para que no se anulen donde se solapan.
 */
function marca(simple) {
  const piezas = [marco(215, 40, 570, 560, 52)]; // papeleta; la urna tapa su borde de abajo
  if (simple) {
    piezas.push(equis(500, 300, 300));
  } else {
    piezas.push(marco(290, 125, 150, 150, 30), equis(365, 200, 62));
    piezas.push(caja(480, 160, 230, 30), caja(480, 212, 160, 30));
    piezas.push(marco(290, 330, 150, 150, 30));
    piezas.push(caja(480, 365, 230, 30), caja(480, 417, 120, 30));
  }
  piezas.push(caja(110, 560, 780, 380)); // urna
  return piezas;
}

/** `escala`: parte del lado que ocupa la caja de la marca. Sin `fondo`, transparente. */
function svg({ lado, escala, tinta, fondo, simple = false }) {
  const k = (lado * escala) / 1000;
  const x = (lado - 1000 * k) / 2;
  const y = x + 10 * k; // la marca va de y=40 a y=940: se baja 10 para centrarla
  const trazos = marca(simple)
    .map((d) => `<path fill-rule="evenodd" fill="${tinta}" d="${d}"/>`)
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${lado}" height="${lado}">${
    fondo ? `<rect width="${lado}" height="${lado}" fill="${fondo}"/>` : ''
  }<g transform="translate(${x} ${y}) scale(${k})">${trazos}</g></svg>`;
}

async function png(nombre, opciones) {
  let imagen = sharp(Buffer.from(svg(opciones)));
  // Con fondo, sin canal alfa: la App Store rechaza iconos con transparencia.
  if (opciones.fondo) imagen = imagen.removeAlpha();
  await imagen.png().toFile(`${SALIDA}/${nombre}.png`);
}

fs.mkdirSync(SALIDA, { recursive: true });
// Icono general (y de iOS): sin transparencias, a sangre.
await png('icon', { lado: 1024, escala: 0.74, tinta: TINTA, fondo: PAPEL });
// Android recorta el icono adaptativo con una máscara: la marca cabe en el círculo seguro central.
await png('android-icon-foreground', { lado: 1024, escala: 0.5, tinta: TINTA });
// Android 13 colorea este a su gusto (iconos temáticos): solo cuenta la forma.
await png('android-icon-monochrome', { lado: 1024, escala: 0.5, tinta: '#000000' });
await png('splash-icon', { lado: 1024, escala: 0.9, tinta: TINTA });
await png('splash-icon-dark', { lado: 1024, escala: 0.9, tinta: TINTA_OSCURO });
await png('favicon', { lado: 48, escala: 0.9, tinta: TINTA, fondo: PAPEL, simple: true });
console.log(`Iconos escritos en ${SALIDA}`);
