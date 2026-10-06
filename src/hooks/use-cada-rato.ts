import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

/**
 * Llama a `accion` cada `cada` milisegundos mientras la app está abierta y en primer plano,
 * y también al volver a ella si ha pasado ese tiempo desde la última vez. Con la app en
 * segundo plano (o la pestaña oculta en la web) no hace nada.
 */
export function useCadaRato(accion: () => void, cada: number) {
  const accionActual = useRef(accion);
  useEffect(() => {
    accionActual.current = accion;
  }, [accion]);

  useEffect(() => {
    let ultima = Date.now();
    const lanzar = () => {
      ultima = Date.now();
      accionActual.current();
    };
    const reloj = setInterval(() => {
      if (AppState.currentState === 'active') lanzar();
    }, cada);
    const sub = AppState.addEventListener('change', (estado) => {
      if (estado === 'active' && Date.now() - ultima >= cada) lanzar();
    });
    return () => {
      clearInterval(reloj);
      sub.remove();
    };
  }, [cada]);
}
