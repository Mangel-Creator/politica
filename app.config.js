// La web publicada en GitHub Pages cuelga de /politica; en desarrollo se sirve desde la raíz.
// GitHub Actions compila con RUTA_WEB=/politica (ver .github/workflows/web.yml).
module.exports = ({ config }) => ({
  ...config,
  experiments: { ...config.experiments, baseUrl: process.env.RUTA_WEB || '' },
});
