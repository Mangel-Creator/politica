// Dibuja el icono, el icono adaptativo de Android, la pantalla de carga, el favicon y los iconos
// de la web instalable (public/) en el
// estilo «papeleta» (src/constants/theme.ts): tinta sobre papel, bordes gruesos, esquinas
// rectas y la «X» de Archivo Black. Sin color de ningún partido.
//
// Uso (desde la raíz del proyecto; sharp y opentype.js no son dependencias de la app):
//   npm i --no-save sharp opentype.js
//   node scripts/iconos/generar.mjs
// Escribe los PNG en assets/images (app) y en public/ (web).
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import sharp from 'sharp';

const raiz = (ruta) => fileURLToPath(new URL(`../../${ruta}`, import.meta.url));
const FUENTE = raiz('node_modules/@expo-google-fonts/archivo/900Black/Archivo_900Black.ttf');
const APP = raiz('assets/images');
const WEB = raiz('public');

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

async function png(carpeta, nombre, opciones) {
  let imagen = sharp(Buffer.from(svg(opciones)));
  // Con fondo, sin canal alfa: la App Store rechaza iconos con transparencia.
  if (opciones.fondo) imagen = imagen.removeAlpha();
  await imagen.png().toFile(`${carpeta}/${nombre}.png`);
}

for (const carpeta of [APP, WEB]) fs.mkdirSync(carpeta, { recursive: true });
// Icono general (y de iOS): sin transparencias, a sangre.
await png(APP, 'icon', { lado: 1024, escala: 0.74, tinta: TINTA, fondo: PAPEL });
// Android recorta el icono adaptativo con una máscara: la marca cabe en el círculo seguro central.
await png(APP, 'android-icon-foreground', { lado: 1024, escala: 0.5, tinta: TINTA });
// Android 13 colorea este a su gusto (iconos temáticos): solo cuenta la forma.
await png(APP, 'android-icon-monochrome', { lado: 1024, escala: 0.5, tinta: '#000000' });
await png(APP, 'splash-icon', { lado: 1024, escala: 0.9, tinta: TINTA });
await png(APP, 'splash-icon-dark', { lado: 1024, escala: 0.9, tinta: TINTA_OSCURO });
await png(APP, 'favicon', { lado: 48, escala: 0.9, tinta: TINTA, fondo: PAPEL, simple: true });

// Web instalable (public/manifest.json). La «maskable» deja margen porque el móvil la recorta.
await png(WEB, 'icono-192', { lado: 192, escala: 0.74, tinta: TINTA, fondo: PAPEL });
await png(WEB, 'icono-512', { lado: 512, escala: 0.74, tinta: TINTA, fondo: PAPEL });
await png(WEB, 'icono-maskable-512', { lado: 512, escala: 0.6, tinta: TINTA, fondo: PAPEL });
// iPhone y iPad al añadir a la pantalla de inicio.
await png(WEB, 'apple-touch-icon', { lado: 180, escala: 0.74, tinta: TINTA, fondo: PAPEL });
console.log('Iconos escritos en assets/images y public/');
