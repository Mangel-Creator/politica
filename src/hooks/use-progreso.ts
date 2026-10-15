import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useSyncExternalStore } from 'react';

import { hoyISO } from '@/services/fechas';
import { leerProgreso, PROGRESO_VACIO, registrar, type Progreso, type Sesion } from '@/services/progreso';

/**
 * Progreso de Aprende compartido por todas las pantallas. Se guarda solo en este
 * dispositivo (AsyncStorage; en la web, el almacenamiento del navegador): no hay cuentas ni
 * servidor, y nada sale del teléfono.
 */

const CLAVE = 'aprende:progreso:v1';

/** Lo que ven las pantallas. Se sustituye entero en cada cambio para que React se entere. */
let foto: { progreso: Progreso; listo: boolean } = { progreso: PROGRESO_VACIO, listo: false };
let cargando: Promise<void> | null = null;
const oyentes = new Set<() => void>();

function poner(progreso: Progreso) {
  foto = { progreso, listo: true };
  oyentes.forEach((o) => o());
}

function cargar() {
  cargando ??= AsyncStorage.getItem(CLAVE)
    .then((crudo) => leerProgreso(crudo))
    .catch(() => PROGRESO_VACIO)
    .then((p) => {
      if (!foto.listo) poner(p);
    });
  return cargando;
}

function guardar(p: Progreso) {
  poner(p);
  AsyncStorage.setItem(CLAVE, JSON.stringify(p)).catch(() => {});
}

function suscribir(o: () => void) {
  oyentes.add(o);
  return () => oyentes.delete(o);
}

const leer = () => foto;

/** Progreso actual, `listo` cuando ya se ha leído lo guardado, y las acciones. */
export function useProgreso() {
  const { progreso, listo } = useSyncExternalStore(suscribir, leer, leer);
  useEffect(() => {
    cargar();
  }, []);
  return {
    progreso,
    listo,
    hoy: hoyISO(),
    /** Apunta una lección o un repaso terminado. Espera a lo guardado para no pisarlo. */
    terminar: async (s: Sesion) => {
      await cargar();
      const nuevo = registrar(foto.progreso, s, hoyISO());
      guardar(nuevo);
      return nuevo;
    },
    borrar: () => guardar(PROGRESO_VACIO),
  };
}
