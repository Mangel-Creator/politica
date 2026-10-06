# Votaciones del Congreso

Herramientas para `src/data/votaciones.ts` (pestaña Hechos). Leen los datos abiertos
oficiales: https://www.congreso.es/es/opendata/votaciones

Ejecutar desde esta carpeta, con Node 24:

1. `node indice.mjs` descarga la lista de días con votaciones y sus enlaces (`indice.json`).
2. `node todo.mjs` descarga cada votación (carpeta `votos/`) y crea `todas.json`.
3. `node buscar-votos.mjs "texto"` busca votaciones por su texto oficial.
4. `node ver.mjs AAAAMMDD NUM` enseña el voto de cada partido en una votación.
5. Añade la votación a `elegidas.json` y ejecuta `node generar-votaciones.mjs`.

Reglas:
- Busca siempre sobre `todas.json` (texto oficial de cada votación). Los títulos de la página
  de cada día no siempre corresponden a cada votación.
- Los diputados del Grupo Mixto se asignan por nombre en `partidos-voto.mjs` (BNG, CC, UPN,
  Podemos). Los demás del Mixto salen como "otros". Si alguien cambia de grupo, revísalo.
- Las votaciones por llamamiento (investiduras, reformas constitucionales) no tienen JSON:
  solo el total. Van a mano en `VotacionesManuales` de `src/data/hechos.ts`.
- `npm test` comprueba que el voto por partido suma los totales oficiales.
