# Página web de Inmobiliaria JEGAR: guía rápida

## Qué contiene esta carpeta

| Archivo o carpeta | Para qué sirve |
|---|---|
| `index.html` | La página completa. Normalmente no necesitas tocarla. |
| `propiedades.js` | **Las propiedades.** Aquí cambias nombres, precios, direcciones y locales. |
| `img/` | Las imágenes. Aquí subes las fotos de las propiedades. |
| `LEEME.md` | Esta guía. |

---

## 1. Publicar la página (una sola vez, gratis)

1. Entra a **github.com** y crea una cuenta gratuita. Usa un nombre de usuario sencillo, porque aparecerá en la dirección de la página.
2. Arriba a la derecha pulsa **+ → New repository**.
   - Nombre: `jegar-web` (o el que prefieras).
   - Déjalo en **Public**.
   - Pulsa **Create repository**.
3. En la pantalla siguiente pulsa **uploading an existing file**.
4. Abre esta carpeta en tu computadora, selecciona **todo su contenido** (`index.html`, `propiedades.js`, `LEEME.md` y la carpeta `img`) y arrástralo a la ventana de GitHub. Espera a que termine de subir.
5. Abajo pulsa **Commit changes**.
6. Ve a **Settings → Pages**. En *Build and deployment*, en **Branch**, elige `main` y la carpeta `/ (root)`. Pulsa **Save**.
7. Espera 1 o 2 minutos y recarga. Aparecerá la dirección de tu página:
   `https://TU-USUARIO.github.io/jegar-web/`

> Importante: el repositorio es público, así que todo lo que subas lo puede ver cualquiera. No subas contratos ni datos de inquilinos, solo fotos y textos de la página.

---

## 2. Agregar o cambiar una propiedad

1. En GitHub abre tu repositorio y pulsa el archivo **`propiedades.js`**.
2. Pulsa el **lápiz** (Edit this file), arriba a la derecha del archivo.
3. Para **cambiar** una propiedad, modifica los textos que están entre comillas `" "`.
4. Para **agregar** una propiedad nueva, copia un bloque completo (desde `{` hasta `}`), pégalo debajo del último bloque y cámbiale los textos. Los bloques van separados por una coma.
5. Pulsa **Commit changes** (botón verde) y de nuevo **Commit changes**.
6. Espera 1 o 2 minutos y recarga la página para ver el cambio.

Reglas para no romper nada:
- No borres las comillas ni las comas del final de las líneas.
- No uses comillas dobles `"` dentro de un texto.
- Si algo deja de verse, vuelve a abrir el archivo, pulsa **History** y regresa a la versión anterior.

---

## 3. Subir las fotos

1. En tu repositorio abre la carpeta **`img`**.
2. Pulsa **Add file → Upload files**, arrastra tus fotos y pulsa **Commit changes**.
   - Usa nombres cortos, en minúsculas y sin espacios, por ejemplo: `urban-center-fachada.jpg`, `urban-center-local-1.jpg`.
   - Antes de subir, reduce el peso de las fotos (idealmente menos de 500 KB cada una) para que la página cargue rápido.
3. Abre `propiedades.js` y en la propiedad escribe la ruta de la foto:

```
fachada: "img/urban-center-fachada.jpg",
```

y en cada local:

```
{ nombre: "Local 1", detalle: "35 m² · $15,000", foto: "img/urban-center-local-1.jpg" },
```

Si dejas las comillas vacías (`""`), la página muestra un espacio marcado **[FOTO]** en su lugar.

---

## 4. Otros cambios

- **Número de WhatsApp:** está en `index.html`. Busca `524773768120` y cámbialo (con 52 al inicio y sin espacios) en todos los lugares donde aparezca.
- **Textos de servicios, preguntas frecuentes u otros:** también están en `index.html`. Edítalos igual que `propiedades.js`.
- **Dirección propia con dominio** (por ejemplo `inmobiliariajegar.com`): compra el dominio y, en **Settings → Pages → Custom domain**, escribe el dominio. GitHub te indica los pasos de configuración.

Si algún cambio te da problemas, mándale a Claude el archivo y lo corrige.
