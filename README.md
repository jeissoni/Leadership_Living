# Leadership Living — Recursos teológicos

Sitio estático de estudio: pantallas diseñadas en Astro, textos en Markdown, publicación en GitHub Pages y exportación a PDF desde el navegador.

## Desarrollo

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Agregar un tema

1. Copia [`src/content/temas/_plantilla.md`](src/content/temas/_plantilla.md) a un archivo nuevo **sin** guion bajo, por ejemplo `src/content/temas/la-oracion.md`.
2. Completa el encabezado (`title`, `description`, `date`, `tags`, `duration`, `resources`).
3. Escribe el guion debajo, con `##` para secciones y `>` para citas bíblicas.

El diseño no se toca: el texto entra en la ficha del inicio y en la vista de lectura.

## Exportar PDF

En la página de un tema, usa **Exportar PDF**. En el diálogo del navegador elige *Guardar como PDF*. El estilo de impresión replica la lectura (A4, sin navegación).

## Publicar en GitHub Pages

1. Crea el repositorio y sube el código a la rama `main`.
2. En el repo: **Settings → Pages → Source → GitHub Actions**.
3. El workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) construye el sitio y lo publica.

`site` y `base` se ajustan solos en CI a partir de `GITHUB_REPOSITORY` (páginas de proyecto: `https://<usuario>.github.io/Leadership_Living/`). En local la base es `/`.
