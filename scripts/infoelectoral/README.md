# Resultados oficiales (Infoelectoral)

`node totales.mjs 202307` descarga el fichero oficial de totales del Congreso del 23J y
saca escaños y votos por candidatura, comprobando que el total nacional coincide con la
suma de las provincias. Para el 29N será `node totales.mjs 202611` cuando el Ministerio lo
publique (el escrutinio definitivo tarda semanas; el provisional de la noche electoral no
sale en este formato).

Contrastado el 06/10/2026: los escaños del 23J de `src/data/partidos.ts` coinciden con este
fichero.
