import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

import { descargarTitulares, fusionar, type Titular } from '@/services/noticias';

const CLAVE = 'noticias:titulares:v1';
const SEMANA = 7 * 24 * 3600 * 1000;

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

/** Una sola descarga cada 5 minutos aunque varias pantallas pidan noticias. */
let ultima: { cuando: number; promesa: ReturnType<typeof descargarTitulares> } | null = null;
function descargar(forzar: boolean) {
  if (!forzar && ultima && Date.now() - ultima.cuando < 5 * 60 * 1000) return ultima.promesa;
  ultima = { cuando: Date.now(), promesa: descargarTitulares() };
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
 * menudo.
 */
export function useNoticias() {
  const [estado, setEstado] = useState<Estado>(() => ({
    titulares: [],
    fallidos: [],
    cargando: true,
    actualizado: null,
    referencia: Date.now(),
  }));
  const [peticion, setPeticion] = useState(0);

  useEffect(() => {
    let vivo = true;
    (async () => {
      const guardados = await leerGuardados();
      if (vivo && guardados.length) setEstado((e) => ({ ...e, titulares: guardados, referencia: Date.now() }));

      const { titulares: nuevos, fallidos } = await descargar(peticion > 0);
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

  const recargar = () => {
    setEstado((e) => ({ ...e, cargando: true }));
    setPeticion((n) => n + 1);
  };

  return { ...estado, recargar };
}
