import { useSyncExternalStore } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

const sinSuscripcion = () => () => {};

/**
 * En la web, el HTML se genera de antemano en modo claro. Hasta que la página se
 * hidrata en el navegador se devuelve 'light', para que no haya diferencias entre el
 * HTML generado y el primer render.
 */
export function useColorScheme() {
  const hidratado = useSyncExternalStore(
    sinSuscripcion,
    () => true,
    () => false,
  );
  const colorScheme = useRNColorScheme();

  return hidratado ? colorScheme : 'light';
}
