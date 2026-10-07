import Constants from 'expo-constants';

/**
 * Ruta de un fichero publicado junto a la web (GitHub Pages la sirve en un subdirectorio,
 * `experiments.baseUrl` de app.json).
 */
export function rutaWeb(fichero: string) {
  const base = (Constants.expoConfig?.experiments?.baseUrl ?? '').replace(/\/$/, '');
  return `${base}/${fichero}`;
}

/** Versión con la que se compiló la web (el commit, lo pone GitHub Actions). Vacía en desarrollo. */
export const VERSION_WEB = process.env.EXPO_PUBLIC_VERSION ?? '';

/** Título y descripción de la web (pestaña del navegador, buscadores y vista previa al compartir). */
export const TITULO_WEB = 'Política · Elecciones generales del 29N';
export const DESCRIPCION_WEB =
  'Partidos, programas, promesas y votos, y cómo votar en las elecciones generales del ' +
  '29 de noviembre de 2026. Con las fuentes oficiales.';
