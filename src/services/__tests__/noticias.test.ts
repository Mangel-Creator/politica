import { describe, expect, it } from '@jest/globals';

import { agrupar, fusionar, leerRSS, Medios, palabras, type Titular } from '../noticias';

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
});

describe('fusionar', () => {
  it('no repite enlaces y descarta lo anterior a la fecha', () => {
    const a = { medio: 'x', titulo: 'A', enlace: 'https://x/a', fecha: 10 };
    const viejo = { medio: 'x', titulo: 'V', enlace: 'https://x/v', fecha: 1 };
    expect(fusionar([a, viejo], [{ ...a, titulo: 'A2' }], 5)).toEqual([{ ...a, titulo: 'A2' }]);
  });
});
