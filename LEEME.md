# Making Enemies — sitio estático

Sitio completo, sin dependencias ni build. Subes la carpeta y funciona.

```
index.html
contact.html
style.css
site.js
img/
  wordmark.png          976x101   logo de cabecera, blanco sobre transparente
  logo-flag.png         512x272   bandera ME de portada, blanco sobre transparente
  favicon.png           512x512
  scholar-adventure.jpg 1280x720
  game-jams.jpg          992x781
  ayose.jpg              900x942
  beatriz.jpg            734x768
  antonio.jpg            900x942
```

Las fotos del equipo van pasadas a blanco y negro en el propio archivo, y
además el CSS aplica `filter:grayscale(1)` por si algún día las sustituyes
por versiones en color.

## Subir

- **Netlify / Cloudflare Pages**: arrastras la carpeta y ya está.
- **Hosting clásico (FTP)**: sube el contenido a `public_html/`.
- Luego apunta el dominio `makingenemies.es` al nuevo hosting y quita la
  redirección que ahora va a Google Sites.

## Tipografías

Se cargan desde Google Fonts en tres roles, definidos como variables al
principio de `style.css`:

- **Anton** — titulares (`--font-display`)
- **Roboto Mono** — cuerpo, nombres, email (`--font-mono`)
- **Roboto Condensed** — navegación, cargos, handles (`--font-ui`)

Para cambiarlas, edita esas tres variables y el `<link>` de Google Fonts en
las dos páginas.

## Pendientes

1. **Bandera de portada en más resolución.** El original que me pasaste mide
   687px de ancho, así que en pantallas retina se verá algo blando. Si tienes
   el vectorial, exporta un SVG y cambia `img/logo-flag.png` por
   `img/logo-flag.svg` en `index.html`. Lo mismo con el wordmark.
2. **Buscador.** La cabecera de Google Sites tenía una lupa. No la he
   replicado porque en un sitio de dos páginas no aporta nada, pero si la
   quieres se puede añadir.
