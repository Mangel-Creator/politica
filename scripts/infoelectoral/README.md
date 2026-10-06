# Resultados oficiales (Infoelectoral)

`node totales.mjs 202307` descarga el fichero oficial de totales del Congreso del 23J y
saca escaños y votos por candidatura, comprobando que el total nacional coincide con la
suma de las provincias. Para el 29N será `node totales.mjs 202611` cuando el Ministerio lo
publique (el escrutinio definitivo tarda semanas; el provisional de la noche electoral no
sale en este formato).

Contrastado el 06/10/2026: los escaños del 23J de `src/data/partidos.ts` coinciden con este
fichero.

## Escaños históricos (1977–2023)

`node historico.mjs` descarga los ficheros de totales de las 16 generales y escribe
`historico.json` con las candidaturas nacionales que obtuvieron escaño (cada elección suma
350). `node trayectorias.mjs` asigna esas candidaturas a cada partido de la app (o a su
antecesor: AP antes del PP, CiU antes de Junts…) y genera `src/data/trayectorias.ts`. Si
una candidatura se asignara a dos partidos, el script se detiene.
