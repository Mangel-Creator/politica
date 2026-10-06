import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import { useCadaRato } from '@/hooks/use-cada-rato';
import { descargarTitulares, fusionar, Medios, type Titular } from '@/services/noticias';
import { rutaWeb } from '@/services/web';

const CLAVE = 'noticias:titulares:v1';
const SEMANA = 7 * 24 * 3600 * 1000;
/** Cada cuánto se vuelven a pedir las noticias con la app abierta. */
export const RECARGA_NOTICIAS = 15 * 60 * 1000;

type Estado = {
  titulares: Titular[];
  /** Medios cuyo canal no se pudo leer en la última descarga. */
  fallidos: string[];
  cargando: boolean;
  /** Momento de la última descarga correcta (ms). */
  actualizado: number | null;
  /** Hora con la que se calculan los periodos ("últimas 24 h"), fijada al recibir los datos. */
  referencia: number;
};

/**
 * En la web los navegadores no dejan leer los RSS de otros dominios (CORS). GitHub Actions los
 * descarga cada hora y publica `noticias.json` junto a la web; la app lee ese fichero.
 */
async function descargarPublicadas(): ReturnType<typeof descargarTitulares> {
  try {
    const r = await fetch(rutaWeb('noticias.json'), { cache: 'no-store' });
    if (!r.ok) throw new Error(String(r.status));
    const datos = (await r.json()) as { titulares: Titular[]; fallidos: string[] };
    return { titulares: datos.titulares, fallidos: datos.fallidos };
  } catch {
    return { titulares: [], fallidos: Medios.map((m) => m.id) };
  }
}

/** Una sola descarga cada 5 minutos aunque varias pantallas pidan noticias. */
let ultima: { cuando: number; promesa: ReturnType<typeof descargarTitulares> } | null = null;
function descargar(forzar: boolean) {
  if (!forzar && ultima && Date.now() - ultima.cuando < 5 * 60 * 1000) return ultima.promesa;
  ultima = { cuando: Date.now(), promesa: Platform.OS === 'web' ? descargarPublicadas() : descargarTitulares() };
  return ultima.promesa;
}

async function leerGuardados(): Promise<Titular[]> {
  try {
    const crudo = await AsyncStorage.getItem(CLAVE);
    return crudo ? (JSON.parse(crudo) as Titular[]) : [];
  } catch {
    return [];
  }
}

/**
 * Titulares de los últimos 7 días. Los canales RSS solo traen lo más reciente, así que la
 * app guarda en el móvil lo que va descargando: la vista semanal se completa abriéndola a
 * menudo. Con la app abierta se recargan solos cada `RECARGA_NOTICIAS`.
 */
export function useNoticias() {
  const [estado, setEstado] = useState<Estado>(() => ({
    titulares: [],
    fallidos: [],
    cargando: true,
    actualizado: null,
    referencia: Date.now(),
  }));
  const [peticion, setPeticion] = useState({ n: 0, forzar: false });

  useEffect(() => {
    let vivo = true;
    (async () => {
      const guardados = await leerGuardados();
      if (vivo && guardados.length) setEstado((e) => ({ ...e, titulares: guardados, referencia: Date.now() }));

      const { titulares: nuevos, fallidos } = await descargar(peticion.forzar);
      const todos = fusionar(guardados, nuevos, Date.now() - SEMANA);
      if (nuevos.length) AsyncStorage.setItem(CLAVE, JSON.stringify(todos)).catch(() => {});
      if (vivo) {
        setEstado((e) => ({
          titulares: todos,
          fallidos,
          cargando: false,
          actualizado: nuevos.length ? Date.now() : e.actualizado,
          referencia: Date.now(),
        }));
      }
    })();
    return () => {
      vivo = false;
    };
  }, [peticion]);

  // Sin forzar: si otra pantalla acaba de descargar, se aprovecha esa descarga.
  useCadaRato(() => setPeticion((p) => ({ n: p.n + 1, forzar: false })), RECARGA_NOTICIAS);

  const recargar = () => {
    setEstado((e) => ({ ...e, cargando: true }));
    setPeticion((p) => ({ n: p.n + 1, forzar: true }));
  };

  return { ...estado, recargar };
}
