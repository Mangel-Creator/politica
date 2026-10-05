# Política

App para informarse de las elecciones generales de España del 29 de noviembre de 2026:
partidos, programas electorales originales, calendario y cómo votar. Cada dato enlaza a su
fuente y la app no recomienda voto.

Hecha con Expo (SDK 57) y Expo Router.

## Arrancar

```bash
npm install
npx expo start
```

Escanea el código QR con la app Expo Go del móvil. Para la versión web:

```bash
npx expo start --web --port 8082
```

## Comprobar antes de subir cambios

```bash
npx tsc --noEmit
npx expo lint
npm test
```

Los tests revisan también los datos: que los escaños sumen 350, que cada fecha tenga fuente,
que las huellas SHA-256 de los programas tengan el formato correcto, etc.

## Datos

- `src/data/partidos.ts`: partidos y sus programas (copiados del `REGISTRO.md` de los PDF).
- `src/data/calendario.ts`: fechas del calendario electoral con sus fuentes.
- `src/data/fuentes.ts`: fuentes citadas y organismos oficiales.

Las reglas del contenido están en `CLAUDE.md`.
