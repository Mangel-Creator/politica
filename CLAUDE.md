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
   color de acento: el color de cada partido (`Partido.color`) solo va en gráficos y
   siempre junto a sus siglas (`MarcaPartido`, `Muestra`). Nada de ordenar por ideología
   (el hemiciclo es alfabético). La app no recomienda voto.
6. **Quién dice qué**: en "¿Funcionó?" (`src/data/precedentes.ts`) cada caso lleva varias
   fuentes de distinto tipo y, si existen, de signo contrario; la app nunca da veredicto.
   En noticias, solo titular y enlace, medios en orden alfabético, sin etiquetas ideológicas,
   y no se enseña nada si se leen menos de `MINIMO_MEDIOS` medios.
7. **Promesas y hechos** (`src/data/hechos.ts`): promesa con página del PDF al lado del voto
   oficial de cada partido (`src/data/votaciones.ts`, generado con `scripts/congreso`, ver su
   README). Nunca la etiqueta "incumplió": solo promesa, voto y qué significaba votar sí.
   El desenlace (ley, decreto) se contrasta en el BOE.
8. Casos judiciales con su desenlace completo (recursos, indultos, anulaciones).
9. Si dos fuentes no coinciden, manda la oficial; si no hay oficial, no se publica el dato
   y se avisa al usuario.

## Estado (06/10/2026)

- Diseño "papeleta" (`src/constants/theme.ts`): tinta sobre papel, bordes gruesos, esquinas
  rectas, tipografía Archivo. Piezas comunes en `src/components/` (`Texto`, `piezas.tsx`,
  `Pantalla`, `Hemiciclo`…). Para enlazar a otra pantalla usa `Ir`, no `Link asChild`
  con estilos en lista (falla en la web).
- Barra de abajo (`src/app/(tabs)`): Hoy, Partidos, Comparar, Hechos (promesas y votos +
  ¿Funcionó?), Aprende. Lo secundario va en pantallas de la pila: `partido/[id]`, `hecho/[id]`,
  `precedente/[id]`,
  `leccion/[id]`, `test`, `simulador`, `glosario`, `calendario`, `votar`,
  `fuentes`, `noticias`.
- Datos: programas resumidos del 23J (`src/data/programas`), historias, precedentes,
  lecciones y test (comprobados contra el texto del BOE), calendario.
- Servicios con tests: D'Hondt (`dhondt.ts`), hemiciclo, noticias (RSS + agrupado).
- Pendiente:
  - Contrastar el calendario con el decreto del BOE (previsto el 06/10/2026).
  - Contrastar los escaños de 2023 con Infoelectoral (ahora solo vienen de Wikipedia).
  - Programas de 2023 de ERC y Junts (no localizados en fuente oficial).
  - Programas del 29N cuando se publiquen (resumirlos con el mismo método y página).
  - Icono y pantalla de carga propios (ahora son los de Expo).

## Normas de trabajo

- El usuario es principiante: explica las cosas en español sencillo y paso a paso.
- Si algo no se puede hacer como se pide, dilo antes de empezar y propón la alternativa
  más sencilla.
- Antes de dar algo por terminado: `npx tsc --noEmit`, `npx expo lint` y `npm test` sin
  errores.
- Windows + PowerShell 5.1: encadena comandos con `;`, no con `&&`.
- Web de desarrollo en el puerto **8082** (Organizy usa el 8081). En la web los navegadores
  bloquean casi todos los RSS (CORS): las noticias solo se ven en el móvil.
- Las rutas con tipos (`.expo/types/router.d.ts`) se regeneran al arrancar el servidor; si
  `tsc` se queja de una ruta nueva, reinícialo.
- En jest solo cuentan los ficheros de `__tests__` (la pantalla `src/app/test.tsx` no es un test).
