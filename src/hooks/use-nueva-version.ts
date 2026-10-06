import { Platform } from 'react-native';

import { useCadaRato } from '@/hooks/use-cada-rato';
import { rutaWeb, VERSION_WEB } from '@/services/web';

/** Cada cuánto mira la web si se ha publicado una versión nueva. */
export const RECARGA_VERSION = 15 * 60 * 1000;

/**
 * Solo en la web publicada: si GitHub Pages ya sirve otra versión (datos o pantallas nuevas),
 * recarga la página para que nadie se quede con la antigua abierta.
 */
export function useNuevaVersion() {
  useCadaRato(() => {
    if (Platform.OS !== 'web' || !VERSION_WEB) return;
    fetch(rutaWeb('version.json'), { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((v: { version?: string } | null) => {
        if (v?.version && v.version !== VERSION_WEB) window.location.reload();
      })
      .catch(() => {});
  }, RECARGA_VERSION);
}
