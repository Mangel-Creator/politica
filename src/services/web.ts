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
