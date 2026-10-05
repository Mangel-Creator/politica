/**
 * Repaso de noticias: titulares de las secciones de política/España de varios medios,
 * agrupados cuando cuentan lo mismo. Reglas:
 * - solo titular, medio, hora y enlace (el texto es de cada medio);
 * - sin etiquetar ideológicamente a ningún medio y en orden alfabético;
 * - la app no resume ni elige qué es importante: una noticia sube cuando la cuentan más medios.
 */

export type Medio = {
  id: string;
  nombre: string;
  rss: string;
  /** Algunos canales mezclan secciones: solo se aceptan enlaces que cumplan esto. */
  filtro?: RegExp;
};

/** Canales comprobados el 06/10/2026. Orden alfabético. */
export const Medios: Medio[] = [
  {
    id: 'abc',
    nombre: 'ABC',
    rss: 'https://www.abc.es/rss/2.0/espana/',
    // El canal de España mezcla deportes y sucesos de las ediciones locales.
    filtro: /^https:\/\/www\.abc\.es\/espana\/[^/]+-\d+-nt\.html/,
  },
  { id: 'eldiario', nombre: 'elDiario.es', rss: 'https://www.eldiario.es/rss/politica' },
  { id: 'elespanol', nombre: 'El Español', rss: 'https://www.elespanol.com/rss/espana/' },
  { id: 'elmundo', nombre: 'El Mundo', rss: 'https://e00-elmundo.uecdn.es/elmundo/rss/espana.xml' },
  {
    id: 'elpais',
    nombre: 'El País',
    rss: 'https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/section/espana/portada',
  },
  { id: 'europapress', nombre: 'Europa Press', rss: 'https://www.europapress.es/rss/rss.aspx?ch=00066' },
  { id: 'infolibre', nombre: 'infoLibre', rss: 'https://www.infolibre.es/rss/politica' },
  { id: 'lavanguardia', nombre: 'La Vanguardia', rss: 'https://www.lavanguardia.com/rss/politica.xml' },
  { id: '20minutos', nombre: '20minutos', rss: 'https://www.20minutos.es/rss/nacional/' },
];

export type Titular = {
  medio: string;
  titulo: string;
  enlace: string;
  /** Milisegundos desde 1970; `0` si el canal no trae fecha. */
  fecha: number;
};

export type Grupo = {
  titulares: Titular[];
  /** Ids de medio distintos, en orden alfabético de nombre. */
  medios: string[];
  /** La publicación más reciente del grupo. */
  fecha: number;
};

const ENTIDADES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function limpiar(texto: string) {
  return texto
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m)
    .replace(/\s+/g, ' ')
    .trim();
}

function campo(item: string, etiqueta: string) {
  const m = item.match(new RegExp(`<${etiqueta}(?:\\s[^>]*)?>([\\s\\S]*?)</${etiqueta}>`));
  return m ? limpiar(m[1]) : '';
}

/** Lee un RSS 2.0. Ignora los elementos sin título o sin enlace. */
export function leerRSS(xml: string, medio: Medio): Titular[] {
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/g) ?? [];
  return items
    .map((item) => {
      const fecha = Date.parse(campo(item, 'pubDate') || campo(item, 'dc:date'));
      return {
        medio: medio.id,
        titulo: campo(item, 'title'),
        enlace: campo(item, 'link') || campo(item, 'guid'),
        fecha: Number.isNaN(fecha) ? 0 : fecha,
      };
    })
    .filter((t) => t.titulo && /^https?:\/\//.test(t.enlace) && (!medio.filtro || medio.filtro.test(t.enlace)));
}

const VACIAS = new Set(
  (
    'que del los las una uno unos unas por con para como mas pero sus ante tras sobre entre desde hasta este esta estos ' +
    'estas ese esa eso esto ser son fue han hay tras sin muy ya the cuando donde quien porque segun contra durante ' +
    'todo todos toda todas otro otra otros otras dice afirma asegura tambien solo hoy ayer manana ahora asi nos les ' +
    'elecciones electoral campana'
  ).split(' '),
);

/** Palabras con contenido de un titular, en minúsculas y sin tildes. */
export function palabras(titulo: string) {
  return new Set(
    titulo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .split(/[^a-z0-9ñ]+/)
      .filter((p) => p.length >= 3 && !VACIAS.has(p)),
  );
}

/**
 * Similitud entre dos titulares: palabras en común sobre palabras en total, pesando cada
 * palabra por lo rara que es ese día ("Sánchez" o "elecciones" casi no cuentan).
 */
function similitud(a: Set<string>, b: Set<string>, peso: (p: string) => number) {
  let comun = 0;
  let total = 0;
  new Set([...a, ...b]).forEach((p) => {
    const w = peso(p);
    total += w;
    if (a.has(p) && b.has(p)) comun += w;
  });
  return total > 0 ? comun / total : 0;
}

/** Umbral de similitud media con el grupo, ajustado a mano con los titulares del 05/10/2026. */
export const UMBRAL_GRUPO = 0.18;

/** Agrupa titulares parecidos. Los grupos con más medios van primero; a igualdad, el más reciente. */
export function agrupar(titulares: Titular[], nombreDe: (id: string) => string = (id) => id): Grupo[] {
  const ordenados = [...titulares].sort((a, b) => b.fecha - a.fecha);
  const claves = ordenados.map((t) => palabras(t.titulo));
  const apariciones = new Map<string, number>();
  claves.forEach((c) => c.forEach((p) => apariciones.set(p, (apariciones.get(p) ?? 0) + 1)));
  const peso = (p: string) => Math.log((claves.length + 1) / ((apariciones.get(p) ?? 0) + 0.5));

  const grupos: { titulares: Titular[]; claves: Set<string>[] }[] = [];
  ordenados.forEach((t, i) => {
    let mejor: (typeof grupos)[number] | undefined;
    let maxima = 0;
    for (const g of grupos) {
      const media = g.claves.reduce((s, c) => s + similitud(c, claves[i], peso), 0) / g.claves.length;
      if (media > maxima) {
        maxima = media;
        mejor = g;
      }
    }
    if (mejor && maxima >= UMBRAL_GRUPO) {
      if (!mejor.titulares.some((x) => x.enlace === t.enlace)) {
        mejor.titulares.push(t);
        mejor.claves.push(claves[i]);
      }
    } else {
      grupos.push({ titulares: [t], claves: [claves[i]] });
    }
  });

  return grupos
    .map((g) => ({
      titulares: g.titulares,
      medios: [...new Set(g.titulares.map((t) => t.medio))].sort((a, b) =>
        nombreDe(a).localeCompare(nombreDe(b), 'es'),
      ),
      fecha: Math.max(...g.titulares.map((t) => t.fecha)),
    }))
    .sort((a, b) => b.medios.length - a.medios.length || b.fecha - a.fecha);
}

/** Descarga todos los canales a la vez. Un canal caído no tumba a los demás. */
export async function descargarTitulares(medios: Medio[] = Medios, descargar: typeof fetch = fetch) {
  const resultados = await Promise.allSettled(
    medios.map(async (m) => {
      const r = await descargar(m.rss);
      if (!r.ok) throw new Error(`${m.nombre}: ${r.status}`);
      return leerRSS(await r.text(), m);
    }),
  );
  const titulares: Titular[] = [];
  const fallidos: string[] = [];
  resultados.forEach((r, i) => {
    if (r.status === 'fulfilled') titulares.push(...r.value);
    else fallidos.push(medios[i].id);
  });
  return { titulares, fallidos };
}

/** Une titulares nuevos con los guardados, sin repetir enlaces y sin los anteriores a `desde`. */
export function fusionar(guardados: Titular[], nuevos: Titular[], desde: number) {
  const porEnlace = new Map<string, Titular>();
  [...guardados, ...nuevos].forEach((t) => porEnlace.set(t.enlace, t));
  return [...porEnlace.values()].filter((t) => t.fecha >= desde);
}

/**
 * Con menos medios que esto, el repaso enseñaría la mirada de unos pocos: no se muestra.
 */
export const MINIMO_MEDIOS = 4;

/** Medios distintos entre unos titulares. */
export function mediosDistintos(titulares: Titular[]) {
  return new Set(titulares.map((t) => t.medio)).size;
}

export function nombreMedio(id: string) {
  return Medios.find((m) => m.id === id)?.nombre ?? id;
}
