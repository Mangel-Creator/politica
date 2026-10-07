import { ScrollViewStyleReset } from 'expo-router/html';
import type { PropsWithChildren } from 'react';

import { Colors } from '@/constants/theme';
import { DESCRIPCION_WEB, rutaWeb, TITULO_WEB } from '@/services/web';

/**
 * Esqueleto HTML de cada página de la web (solo web; se genera al compilar). Lleva el idioma, la
 * descripción y el manifiesto que permite instalarla en el móvil desde el navegador («Añadir a
 * pantalla de inicio»). El título lo pone <Head> en _layout.tsx. Iconos: scripts/iconos/generar.mjs.
 */

const WEB = 'https://mangel-creator.github.io';

// Fondo del papel antes de que cargue la app, para que el modo oscuro no destelle en blanco.
const fondo = `body{background-color:${Colors.light.papel}}
@media (prefers-color-scheme: dark){body{background-color:${Colors.dark.papel}}}`;

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={DESCRIPCION_WEB} />

        <link rel="manifest" href={rutaWeb('manifest.json')} />
        <link rel="apple-touch-icon" href={rutaWeb('apple-touch-icon.png')} />
        <meta name="apple-mobile-web-app-title" content="Política" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={Colors.light.papel} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={Colors.dark.papel} />

        {/* Vista previa al compartir el enlace (WhatsApp, redes, correo). */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:title" content={TITULO_WEB} />
        <meta property="og:description" content={DESCRIPCION_WEB} />
        <meta property="og:image" content={`${WEB}${rutaWeb('icono-512.png')}`} />

        <ScrollViewStyleReset />
        <style dangerouslySetInnerHTML={{ __html: fondo }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
