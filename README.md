# Leadership Living — Recursos teológicos

Sitio estático de estudio: pantallas diseñadas en Astro, textos en Markdown, publicación en GitHub Pages y exportación a PDF desde el navegador.

Cada charla tiene dos vistas:

- **Recurso** (`/temas/[slug]/`): apunte corto para volver y recordar — tesis, puntos clave, sustento teológico y pasajes.
- **Guion** (`/temas/[slug]/guion/`): material para quien da la charla — widgets con tiempos, notas pastorales y tablas.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Agregar un tema

1. Copia [`src/content/temas/_plantilla.md`](src/content/temas/_plantilla.md) a un archivo nuevo **sin** guion bajo, por ejemplo `src/content/temas/la-oracion.md`.
2. Completa el encabezado (`title`, `description`, `date`, `series`, `order`, `thesis`, `remember`, `duration`, `resources`).
3. Escribe el sustento debajo, con `## Sustento` y `>` para citas bíblicas.
4. Si hay material de facilitador, lista los archivos de `src/widgets/` en `widgets` y una nota en `guionLede`.

El diseño no se toca: el apunte entra en la ficha del inicio y en la vista de lectura. El guion queda en la ruta `/guion/`.

## Exportar PDF

En la página de un tema, usa **Exportar PDF**. En el diálogo del navegador elige *Guardar como PDF*. El estilo de impresión replica la lectura (A4, sin navegación). El recurso y el guion llevan un masthead distinto para no mezclarlos.

## Publicar en GitHub Pages

1. Crea el repositorio y sube el código a la rama `main`.
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye el sitio y lo publica.

`site` y `base` se ajustan solos en CI a partir de `GITHUB_REPOSITORY` (páginas de proyecto: `https://<usuario>.github.io/Leadership_Living/`). En local la base es `/`.
