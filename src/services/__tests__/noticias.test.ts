import { describe, expect, it } from '@jest/globals';

import { agrupar, esDirecto, fusionar, leerRSS, Medios, palabras, type Titular } from '../noticias';

const medio = { id: 'm', nombre: 'Medio', rss: 'https://m.es/rss' };

const xml = `<?xml version="1.0"?><rss><channel><title>Canal</title>
<item><title><![CDATA[Sánchez &amp; Feijóo: &#8220;debate&#8221;]]></title><link>https://m.es/a</link>
<pubDate>Mon, 05 Oct 2026 08:14:18 GMT</pubDate></item>
<item><title>Sin enlace</title></item>
<item><title>Con guid</title><guid isPermaLink="true">https://m.es/b</guid><dc:date>2026-10-05T10:00:00+02:00</dc:date></item>
</channel></rss>`;

describe('leerRSS', () => {
  it('lee título, enlace y fecha, con CDATA y entidades', () => {
    const t = leerRSS(xml, medio);
    expect(t).toHaveLength(2);
    expect(t[0]).toEqual({
      medio: 'm',
      titulo: 'Sánchez & Feijóo: “debate”',
      enlace: 'https://m.es/a',
      fecha: Date.UTC(2026, 9, 5, 8, 14, 18),
    });
    expect(t[1].enlace).toBe('https://m.es/b');
    expect(t[1].fecha).toBe(Date.UTC(2026, 9, 5, 8));
  });

  it('aplica el filtro de enlaces de ABC', () => {
    const abc = Medios.find((m) => m.id === 'abc')!;
    const canal = `<rss><item><title>Fútbol</title><link>https://www.abc.es/deportes/cordoba/x-20261005-nt.html</link></item>
<item><title>Política</title><link>https://www.abc.es/espana/sanchez-decretos-20261005-nt.html</link></item></rss>`;
    expect(leerRSS(canal, abc).map((t) => t.titulo)).toEqual(['Política']);
  });

  it('deja fuera las columnas de opinión de El País', () => {
    const elpais = Medios.find((m) => m.id === 'elpais')!;
    const canal = `<rss><item><title>Columna</title><link>https://elpais.com/opinion/2026-10-04/columna.html</link></item>
<item><title>Noticia</title><link>https://elpais.com/espana/elecciones-generales/2026-10-06/noticia.html</link></item></rss>`;
    expect(leerRSS(canal, elpais).map((t) => t.titulo)).toEqual(['Noticia']);
  });
});

describe('palabras', () => {
  it('quita tildes, mayúsculas y palabras vacías', () => {
    expect([...palabras('El Gobierno aprueba la Ley de Vivienda')]).toEqual(['gobierno', 'aprueba', 'ley', 'vivienda']);
  });
});

describe('agrupar', () => {
  const t = (medio: string, titulo: string, fecha = 1): Titular => ({
    medio,
    titulo,
    enlace: `https://${medio}/${titulo}`,
    fecha,
  });

  it('junta la misma noticia contada por varios medios y la pone primero', () => {
    const grupos = agrupar([
      t('a', 'El Rey firma desde Helsinki el decreto de disolución de las Cortes'),
      t('b', 'Huelga general convocada por los sindicatos'),
      t('c', 'El Rey firma por vía telemática en Helsinki el decreto de disolución'),
      t('d', 'Nueva ley de pesca en el Cantábrico'),
    ]);
    expect(grupos[0].medios).toEqual(['a', 'c']);
    expect(grupos).toHaveLength(3);
  });

  it('no junta las páginas en directo aunque se parezcan', () => {
    const grupos = agrupar([
      t('a', 'Última hora sobre el adelanto electoral y los decretos de vivienda, en directo'),
      t('b', 'Elecciones generales 2026, en directo: decretos de vivienda y última hora del 29N'),
      t('c', 'Los decretos de vivienda del adelanto electoral, minuto a minuto'),
    ]);
    expect(grupos).toHaveLength(3);
    expect(esDirecto('Aval del Constitucional a la amnistía, en directo')).toBe(true);
    expect(esDirecto('El Gobierno aprueba los decretos de vivienda')).toBe(false);
  });

  // Titulares reales del 06/10/2026. Con el umbral anterior (0,18) se mezclaban los de
  // «calendario» y los de Junts, que son noticias distintas.
  it('separa noticias distintas y junta las iguales con titulares reales', () => {
    const reales = [
      t('abc', 'Llarena levanta la orden de detención de Puigdemont tras conocer el fallo del TC'),
      t(
        '20minutos',
        'El juez Llarena levanta la orden de detención de Puigdemont tras conocer el fallo del Constitucional',
      ),
      t('elpais', 'El Supremo levanta la orden de detención a Puigdemont, pero no le aplica todavía la amnistía'),
      t(
        '20minutos',
        'Guía de las elecciones generales del 29 de noviembre: desde los últimos sondeos hasta las fechas clave del calendario',
      ),
      t('infolibre', 'Elecciones, campaña y huelga: el apretado calendario de noviembre'),
      t(
        'infolibre',
        'Puigdemont, a un paso de la amnistía justo cuando Junts da la puntilla al Gobierno que la hizo posible',
      ),
      t('lavanguardia', 'Junts se encomienda a Nogueras para el 29-N... y al posible retorno de Puigdemont'),
      t(
        'elmundo',
        'El partido de Mónica García exige liderar la lista por Madrid ante las presiones del sector de Ada Colau',
      ),
      t(
        'elpais',
        'El partido de Mónica García exige liderar la lista por Madrid a las generales ante las opciones de Colau',
      ),
      t('lavanguardia', 'UGT y CC.OO. convocan huelga general antes de la campaña electoral'),
      t('infolibre', 'Los sindicatos UGT y CCOO acuerdan apoyar la huelga general por la crisis de la vivienda'),
      t('elmundo', 'Stubb reconoce a Felipe VI que la seguridad en el sur de España es igual de importante'),
      t('lavanguardia', 'Stubb iguala ante el Rey la seguridad del sur de España a la de otras fronteras europeas'),
    ];
    const juntos = agrupar(reales)
      .filter((g) => g.medios.length > 1)
      .map((g) => g.medios.join(','));
    expect(juntos).toEqual(
      expect.arrayContaining([
        '20minutos,abc,elpais',
        'elmundo,elpais',
        'infolibre,lavanguardia',
        'elmundo,lavanguardia',
      ]),
    );
    const mezcla = (a: string, b: string) =>
      agrupar(reales).some(
        (g) => g.titulares.some((x) => x.titulo.startsWith(a)) && g.titulares.some((x) => x.titulo.startsWith(b)),
      );
    expect(mezcla('Guía de las elecciones', 'Elecciones, campaña y huelga')).toBe(false);
    expect(mezcla('Puigdemont, a un paso', 'Junts se encomienda')).toBe(false);
    expect(mezcla('Puigdemont, a un paso', 'Llarena levanta')).toBe(false);
  });
});

describe('fusionar', () => {
  it('no repite enlaces y descarta lo anterior a la fecha', () => {
    const a = { medio: 'x', titulo: 'A', enlace: 'https://x/a', fecha: 10 };
    const viejo = { medio: 'x', titulo: 'V', enlace: 'https://x/v', fecha: 1 };
    expect(fusionar([a, viejo], [{ ...a, titulo: 'A2' }], 5)).toEqual([{ ...a, titulo: 'A2' }]);
  });

  it('quita de lo guardado lo que ya no pasa el filtro del medio', () => {
    const columna = { medio: 'elpais', titulo: 'C', enlace: 'https://elpais.com/opinion/2026-10-04/c.html', fecha: 10 };
    const noticia = { medio: 'elpais', titulo: 'N', enlace: 'https://elpais.com/espana/2026-10-06/n.html', fecha: 10 };
    expect(fusionar([columna, noticia], [], 5)).toEqual([noticia]);
  });
});
