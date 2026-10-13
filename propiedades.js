/* ==========================================================================
   PROPIEDADES DE INMOBILIARIA JEGAR
   Este es el ÚNICO archivo que necesitas editar para agregar, cambiar o
   quitar propiedades de la página.

   CÓMO AGREGAR UNA PROPIEDAD
   1. Copia un bloque completo, desde la llave { hasta la llave } con su coma.
   2. Pégalo justo debajo del último bloque.
   3. Cambia los textos que están entre comillas "".

   CÓMO PONER UNA FOTO
   1. Sube la foto a la carpeta "img" del repositorio.
   2. Escribe aquí su ruta, por ejemplo:  "img/urban-center-fachada.jpg"
   3. Si dejas las comillas vacías "", se muestra un espacio marcado [FOTO].
   4. Un local puede llevar varias fotos con  fotos: ["img/a.jpg", "img/b.jpg"]
      La primera es la principal y las demás salen como miniaturas.
   5. La foto de la propiedad (fachada) también acepta varias:
      fachada: ["img/a.jpg", "img/b.jpg"]
   6. Si una propiedad no lleva locales, borra la parte de locales y usa
      descripcion: "texto corto" para describir el espacio.

   REGLAS
   - Respeta siempre las comillas "" y las comas al final de cada línea.
   - No uses comillas dobles dentro de un texto.
   - Para quitar una propiedad, borra su bloque completo.
   ========================================================================== */

var PROPIEDADES = [
  {
    nombre: "Urban Center",
    tipo: "Locales comerciales",
    precio: "$15,000 mensuales",
    direccion: "Blvd. Algeciras 1402, Col. Arbide, León",
    fachada: "img/urban-center-fachada.jpg",
    locales: [
      {
        nombre: "Local disponible",
        detalle: "50 m² · $15,000 mensuales",
        fotos: [
          "img/urban-center-local-1-exterior.jpg",
          "img/urban-center-local-1-interior-1.jpg",
          "img/urban-center-local-1-interior-2.jpg"
        ]
      }
    ]
  },
  {
    nombre: "Cañada Wellness Center",
    tipo: "Consultorios",
    precio: "Desde $6,000 mensuales",
    direccion: "Calle Cañada 408, Col. Jardines del Moral, León",
    fachada: "img/canada-fachada.jpg",
    titulo_unidades: "Consultorios disponibles",
    locales: [
      {
        nombre: "Consultorio",
        detalle: "20 m² · $6,000 mensuales",
        fotos: [
          "img/canada-consultorio-1.jpg",
          "img/canada-consultorio-2.jpg"
        ]
      }
    ]
  },
  {
    nombre: "Atelier Monteleón",
    tipo: "Oficinas, consultorios y talleres creativos",
    precio: "Desde $3,500 mensuales",
    direccion: "5 de Febrero 309, Zona Centro, León",
    descripcion: "Espacios de 12 m² con baño propio.",
    fachada: [
      "img/atelier-monteleon-1.jpg",
      "img/atelier-monteleon-2.jpg",
      "img/atelier-monteleon-3.jpg",
      "img/atelier-monteleon-4.jpg",
      "img/atelier-monteleon-5.jpg",
      "img/atelier-monteleon-6.jpg",
      "img/atelier-monteleon-7.jpg"
    ]
  },
  {
    nombre: "Casa Magnolia",
    tipo: "Suites de estancia corta y larga",
    precio: "$850 por noche",
    direccion: "Pedro Moreno 243A, Zona Centro, León",
    descripcion: "Cotizaciones personalizadas para estancias semanales y mensuales.",
    fachada: [
      "img/casa-magnolia-fachada.jpg",
      "img/casa-magnolia-1.jpg",
      "img/casa-magnolia-2.jpg",
      "img/casa-magnolia-3.jpg",
      "img/casa-magnolia-4.jpg",
      "img/casa-magnolia-5.jpg",
      "img/casa-magnolia-6.jpg"
    ]
  }
];
