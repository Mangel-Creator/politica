@AGENTS.md

# Política

App para informarse de las elecciones generales de España del **29 de noviembre de 2026**
(convocadas el 05/10/2026): qué partidos hay, qué dicen sus programas, qué prometieron y
qué han hecho, y cómo votar. En español de España.

## Dónde está cada cosa

- **Código**: `C:\proyectos\politica` (fuera de OneDrive, para que la sincronización no
  bloquee `node_modules`).
- **Programas electorales en PDF**: `C:\Users\usuario\OneDrive\PERSONAL\Politician\Programas electorales\`.
  Su `REGISTRO.md` es la fuente de verdad: URL oficial, copia del Internet Archive, páginas,
  fecha interna y SHA-256 de cada PDF. `src/data/partidos.ts` copia esos datos; si cambias
  uno, cambia el otro.
- Una tarea programada (`programas-29n-revision-diaria`, cada día a las 9:00) busca los
  programas del 29N en las webs oficiales, los verifica y los añade al registro. Cuando
  añada uno, pásalo también a `src/data/partidos.ts`.

## Reglas del contenido (lo más importante)

1. **Ningún dato sin fuente.** Cada fecha, cifra o documento lleva su `Fuente` (título, URL,
   fecha de consulta y si es oficial). Si no hay fuente, el dato no entra.
2. **Primero lo oficial**: BOE, Junta Electoral Central, Ministerio del Interior
   (Infoelectoral), Congreso, INE y las webs de los propios partidos. Lo que solo venga de
   medios se marca como pendiente de confirmar (`confirmadaOficialmente: false`).
3. **Fuente consultada = fuente leída.** No pongas como fuente una web de la que solo se ha
   comprobado que carga. Comprueba también que los enlaces no sean errores 404 disfrazados
   (algunas webs responden 200 con una página de error).
4. **Programas intocables**: se guardan los PDF originales, byte a byte, y se identifican
   por su SHA-256. Nada de resúmenes presentados como si fueran el programa.
5. **Neutralidad**: partidos en orden alfabético por siglas, todos con el mismo diseño. Sin
   colores de partido en la interfaz (paleta neutra en `src/constants/theme.ts`). La app no
   recomienda voto. "Qué no cumplen" solo con hechos verificables (votaciones del Congreso,
   BOE) enlazados.
6. Si dos fuentes no coinciden, manda la oficial; si no hay oficial, no se publica el dato
   y se avisa al usuario.

## Estado (05/10/2026)

- Hecho: pestañas Inicio (cuenta atrás y calendario), Partidos (lista y ficha con
  programas de 2023), Votar (voto por correo) y Fuentes. Tests de integridad de datos.
- Pendiente:
  - Contrastar el calendario con el decreto del BOE (previsto el 06/10/2026).
  - Contrastar los escaños de 2023 con Infoelectoral (ahora solo vienen de Wikipedia).
  - Programas de 2023 de ERC y Junts (no localizados en fuente oficial).
  - Programas del 29N cuando se publiquen.
  - Comparador por temas, "Promesas y hechos" (votaciones del Congreso), test de afinidad.
  - Icono y pantalla de carga propios (ahora son los de Expo).

## Normas de trabajo

- El usuario es principiante: explica las cosas en español sencillo y paso a paso.
- Si algo no se puede hacer como se pide, dilo antes de empezar y propón la alternativa
  más sencilla.
- Antes de dar algo por terminado: `npx tsc --noEmit`, `npx expo lint` y `npm test` sin
  errores.
- Windows + PowerShell 5.1: encadena comandos con `;`, no con `&&`.
- Web de desarrollo en el puerto **8082** (Organizy usa el 8081).
