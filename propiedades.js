/* ==========================================================================
   PROPIEDADES DE INMOBILIARIA JEGAR
   La lista PROPIEDADES es la sección "Disponibilidad" (espacios en renta).
   La lista PORTAFOLIO, al final, es la sección "Propiedades".
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
   6. Para poner una etiqueta destacada (por ejemplo "Low cost"), agrega
      etiqueta: "Texto de la etiqueta",
   7. Para una lista con palomitas de lo que incluye, agrega
      incluye: ["Baño propio", "Cocineta"],
   8. Si una propiedad no lleva locales, borra la parte de locales y usa
      descripcion: "texto corto" para describir el espacio.

   REGLAS
   - Respeta siempre las comillas "" y las comas al final de cada línea.
   - No uses comillas dobles dentro de un texto.
   - Para quitar una propiedad, borra su bloque completo.
   ========================================================================== */

/* AVISO "ESTAMOS ACTUALIZANDO" en Propiedades y Disponibilidad.
   true = se muestra el aviso. Cuando la página esté completa, cámbialo a false. */
var AVISO_ACTUALIZANDO = true;

var PROPIEDADES = [
  {
    nombre: "Urban Center",
    categoria: "Comercial",
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
    categoria: "Comercial",
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
    categoria: "Comercial",
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
    categoria: "Habitacional",
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
  },
  {
    nombre: "Casa Azul",
    categoria: "Comercial",
    etiqueta: "Low cost · Ideal para emprendedores",
    tipo: "",
    precio: "Desde $3,000 mensuales",
    direccion: "Cesáreo Boillot 313, Col. Panorama, León",
    descripcion: "Espacios de 10 m², pensados para emprendedores que van comenzando.",
    fachada: [
      "img/casa-azul-fachada.jpg",
      "img/casa-azul-patio.jpg",
      "img/casa-azul-sala.jpg",
      "img/casa-azul-pasillo.jpg",
      "img/casa-azul-consultorio-2a.jpg",
      "img/casa-azul-consultorio-2b.jpg"
    ]
  },
  {
    nombre: "Sananda Centro Holístico",
    categoria: "Comercial",
    etiqueta: "Low cost · Ideal para emprendedores",
    tipo: "",
    precio: "Desde $3,000 mensuales",
    direccion: "Juan Bautista La Salle 603, Col. Panorama, León",
    titulo_unidades: "Espacio disponible",
    locales: [
      {
        nombre: "Espacio disponible",
        detalle: "8 m² · $3,000 mensuales",
        fotos: [
          "img/sananda-espacio-1.jpg",
          "img/sananda-espacio-2.jpg"
        ]
      }
    ],
    fachada: [
      "img/sananda-fachada.jpg",
      "img/sananda-patio.jpg",
      "img/sananda-recepcion.jpg",
      "img/sananda-sala.jpg"
    ]
  },
  {
    nombre: "Ayurveda Consultorios",
    categoria: "Comercial",
    tipo: "Consultorios",
    precio: "Desde $5,000 mensuales",
    direccion: "Puerto de Palos 122, Col. Arbide, León",
    titulo_unidades: "Consultorio disponible",
    locales: [
      { nombre: "Consultorio", detalle: "Desde $5,000 mensuales", foto: "img/ayurveda-consultorio.jpg" }
    ],
    fachada: [
      "img/ayurveda-fachada.jpg",
      "img/ayurveda-recepcion.jpg"
    ]
  },
  {
    nombre: "Casa Kelly",
    categoria: "Comercial",
    tipo: "Consultorio u oficina",
    precio: "$6,500 mensuales",
    direccion: "San Javier 214, Col. La Martinica, León",
    descripcion: "Espacio de 16 m² para consultorio u oficina.",
    fachada: [
      "img/casa-kelly-fachada-2.jpg",
      "img/casa-kelly-espacio-1.jpg",
      "img/casa-kelly-comedor.jpg",
      "img/casa-kelly-patio-cocina.jpg",
      "img/casa-kelly-recepcion.jpg"
    ]
  },
  {
    nombre: "Esquina Arbide",
    categoria: "Comercial",
    tipo: "Consultorios y oficinas",
    precio: "Desde $3,000 mensuales",
    direccion: "Veracruz 703, Col. Arbide, León",
    titulo_unidades: "Espacios disponibles",
    locales: [
      {
        nombre: "Espacio 6",
        detalle: "10 m² · $3,000 mensuales",
        fotos: [
          "img/esquina-arbide-espacio-6-1.jpg",
          "img/esquina-arbide-espacio-6-2.jpg"
        ]
      },
      {
        nombre: "Espacio 7",
        detalle: "16 m² · $3,500 mensuales",
        fotos: [
          "img/esquina-arbide-espacio-7-1.jpg"
        ]
      },
      {
        nombre: "Espacio 3",
        detalle: "30 m² · Planta baja · $4,500 mensuales",
        fotos: [
          "img/esquina-arbide-espacio-3-1.jpg",
          "img/esquina-arbide-espacio-3-2.jpg"
        ]
      }
    ],
    fachada: [
      "img/esquina-arbide-fachada.jpg"
    ]
  },
  {
    nombre: "Loft Arts",
    categoria: "Habitacional",
    tipo: "Mini lofts amueblados",
    precio: "Desde $5,500 mensuales",
    direccion: "Juan Bautista La Salle 509, Col. Panorama, León",
    descripcion: "Mini lofts amueblados con servicios incluidos.",
    incluye: [
      "Amueblados",
      "Baño propio",
      "Cocineta",
      "Limpieza dos veces por semana",
      "Área de lavado"
    ],
    titulo_unidades: "Lofts disponibles",
    locales: [
      {
        nombre: "Loft 3B",
        detalle: "Amueblado · $5,500 mensuales",
        fotos: [
          "img/lofts-arts-3b-1.jpg",
          "img/lofts-arts-3b-2.jpg"
        ]
      },
      {
        nombre: "Loft 9",
        detalle: "2 recámaras · Amueblado · $7,000 mensuales",
        fotos: [
          "img/lofts-arts-9-1.jpg",
          "img/lofts-arts-9-2.jpg",
          "img/lofts-arts-9-3.jpg",
          "img/lofts-arts-9-4.jpg",
          "img/lofts-arts-9-5.jpg",
          "img/lofts-arts-9-6.jpg"
        ]
      },
      {
        nombre: "Loft 10",
        detalle: "Amueblado · $5,500 mensuales",
        fotos: [
          "img/lofts-arts-10-1.jpg",
          "img/lofts-arts-10-2.jpg",
          "img/lofts-arts-10-3.jpg",
          "img/lofts-arts-10-4.jpg"
        ]
      }
    ],
    fachada: ["img/lofts-arts-fachada.jpg"]
  },
  {
    nombre: "Casa México 205",
    categoria: "Habitacional",
    tipo: "Habitaciones",
    etiqueta: "Promoción sin depósito · Válida hasta el 31 de octubre",
    precio: "Desde $3,500 mensuales",
    direccion: "Av. México 205, Col. La Moderna, León",
    descripcion: "Ubicada enfrente del IMSS T1. Contamos con habitaciones con baño propio y con baño compartido. Agenda una cita para conocer más detalles.",
    fachada: [
      "img/casa-mexico-205-fachada.jpg",
      "img/casa-mexico-205-1.jpg",
      "img/casa-mexico-205-2.jpg",
      "img/casa-mexico-205-3.jpg",
      "img/casa-mexico-205-4.jpg"
    ]
  },
  {
    nombre: "Downtown León",
    categoria: "Habitacional",
    tipo: "Habitaciones",
    precio: "Desde $3,000 mensuales",
    direccion: "Justo Sierra 509, Zona Centro, León",
    descripcion: "En el corazón de la Zona Centro. Todas las habitaciones cuentan con baño propio. Depósito de solo $500. Agenda una cita para conocer más detalles: lunes a viernes de 9:00 a 16:00 h y sábados de 9:00 a 14:00 h.",
    fachada: [
      "img/downtown-leon-fachada.jpg",
      "img/downtown-leon-1.jpg",
      "img/downtown-leon-2.jpg",
      "img/downtown-leon-3.jpg",
      "img/downtown-leon-4.jpg",
      "img/downtown-leon-5.jpg",
      "img/downtown-leon-6.jpg",
      "img/downtown-leon-7.jpg",
      "img/downtown-leon-8.jpg"
    ]
  }
];


var PORTAFOLIO = [
  {
    nombre: "Market Square",
    etiqueta: "Nuevo",
    categoria: "Comercial",
    direccion: "",
    foto: ""
  },
  {
    nombre: "Loft Arts",
    categoria: "Habitacional",
    direccion: "Juan Bautista La Salle 509, Col. Panorama, León",
    foto: "img/lofts-arts-fachada.jpg"
  },
  {
    nombre: "Sananda Centro Holístico",
    categoria: "Comercial",
    direccion: "Juan Bautista La Salle 603, Col. Panorama, León",
    foto: "img/sananda-fachada.jpg"
  },
  {
    nombre: "Panorama 321",
    categoria: "Habitacional",
    direccion: "Av. Panorama 321, Col. Panorama, León",
    foto: "img/avenida-panorama-fachada.jpg"
  },
  {
    nombre: "Boillot 129",
    categoria: "Habitacional",
    direccion: "Cesáreo Boillot 129, Col. Panorama, León",
    foto: ""
  },
  {
    nombre: "Arquitectos 208",
    categoria: "Comercial",
    direccion: "Arquitectos 208, Col. Panorama, León",
    foto: ""
  },
  {
    nombre: "Casa Azul",
    categoria: "Comercial",
    direccion: "Cesáreo Boillot 313, Col. Panorama, León",
    foto: "img/casa-azul-fachada.jpg"
  },
  {
    nombre: "Inmensamente Wellness Center",
    categoria: "Comercial",
    direccion: "Cesáreo Boillot 302, Col. Panorama, León",
    foto: "img/inmensamente-fachada.jpg"
  },
  {
    nombre: "La Salle 207",
    categoria: "Habitacional",
    direccion: "Juan Bautista La Salle 207, Col. Panorama, León",
    foto: "img/salle-207-fachada.jpg"
  },
  {
    nombre: "Casa Nativa",
    categoria: "Comercial",
    direccion: "Valle del Mezquital 202, Col. Valle del Campestre, León",
    foto: "img/casa-nativa-fachada.jpg"
  },
  {
    nombre: "Punto Roca",
    categoria: "Comercial",
    direccion: "De la Roca 204, Col. Jardines del Moral, León",
    foto: ""
  },
  {
    nombre: "Casa Kelly",
    categoria: "Comercial",
    direccion: "San Javier 214, Col. La Martinica, León",
    foto: "img/casa-kelly-fachada-2.jpg"
  },
  {
    nombre: "Esquina Andrade",
    categoria: "Comercial",
    direccion: "Madrid 401, Col. Andrade, León",
    foto: ""
  },
  {
    nombre: "Lofts Arbide",
    categoria: "Habitacional",
    direccion: "Coahuila 705, Col. Arbide, León",
    foto: "img/lofts-arbide-fachada.jpg"
  },
  {
    nombre: "Esquina Arbide",
    categoria: "Comercial",
    direccion: "Veracruz 703, Col. Arbide, León",
    foto: "img/esquina-arbide-fachada.jpg"
  },
  {
    nombre: "Suecia 112",
    categoria: "Habitacional",
    direccion: "Suecia 112, Col. Paraísos, León",
    foto: ""
  },
  {
    nombre: "Paraísos 115",
    categoria: "Habitacional",
    direccion: "Dr. Rodolfo González Hurtado 115, Col. Paraísos, León",
    foto: ""
  },
  {
    nombre: "Catemaco 509",
    categoria: "Habitacional",
    direccion: "Lago de Catemaco 509, Col. Lomas de la Trinidad, León",
    foto: ""
  },
  {
    nombre: "Atelier Monteleón",
    categoria: "Comercial",
    direccion: "5 de Febrero 309, Zona Centro, León",
    foto: "img/atelier-monteleon-1.jpg"
  },
  {
    nombre: "Downtown León",
    categoria: "Habitacional",
    direccion: "Justo Sierra 509, Zona Centro, León",
    foto: "img/downtown-leon-fachada.jpg"
  },
  {
    nombre: "Casa México 205",
    categoria: "Habitacional",
    direccion: "Av. México 205, Col. La Moderna, León",
    foto: "img/casa-mexico-205-fachada.jpg"
  },
  {
    nombre: "Cañada Wellness Center",
    categoria: "Comercial",
    direccion: "Calle Cañada 408, Col. Jardines del Moral, León",
    foto: "img/canada-fachada.jpg"
  },
  {
    nombre: "Punto Panorama",
    categoria: "Comercial",
    direccion: "Blvd. Insurgentes 1904, Col. Panorama, León",
    foto: ""
  },
  {
    nombre: "Urban Center",
    categoria: "Comercial",
    direccion: "Blvd. Algeciras 1402, Col. Arbide, León",
    foto: "img/urban-center-fachada.jpg"
  },
  {
    nombre: "Casa Magnolia",
    categoria: "Habitacional",
    direccion: "Pedro Moreno 243A, Zona Centro, León",
    foto: "img/casa-magnolia-fachada.jpg"
  },
  {
    nombre: "Pulse Business Center",
    categoria: "Comercial",
    direccion: "Av. San Sebastián 530, Col. La Martinica, León",
    foto: "img/pulse-business-center-fachada.jpg"
  },
  {
    nombre: "Casa Dos Once",
    categoria: "Comercial",
    direccion: "Calzada de los Héroes 211, Zona Centro, León",
    foto: ""
  },
  {
    nombre: "Ayurveda Consultorios",
    categoria: "Comercial",
    direccion: "Puerto de Palos 122, Col. Arbide, León",
    foto: "img/ayurveda-fachada.jpg"
  }
];


/* ==========================================================================
TERRAZAS PARA EVENTOS (sección "Terrazas para eventos")
El botón de cotizar de esta sección manda WhatsApp al 477 919 3760.
Para agregar otra terraza: copia el bloque completo de Terraza Magnolia,
desde la llave { hasta la llave } con su coma, pégalo debajo y cambia los
textos. Si una terraza no tiene banquetes, borra la parte de banquetes.
========================================================================== */

var TERRAZAS = [
  {
    nombre: "Terraza Magnolia",
    tipo: "Suites, salón y terraza",
    capacidad: "Hasta 70 personas",
    direccion: "Pedro Moreno 243A, Zona Centro, León",
    descripcion: "Un espacio versátil, acogedor y rodeado de naturaleza para celebrar tus momentos más especiales.",
    ideal_para: [
      "Desayunos y brunch",
      "Cumpleaños y eventos familiares",
      "Eventos sociales",
      "Eventos empresariales"
    ],
    precios: [
      { dias: "Lunes a jueves", precio: "$4,000" },
      { dias: "Viernes y domingo", precio: "$4,500" },
      { dias: "Sábados", precio: "$5,000" }
    ],
    incluye: [
      "5 horas de evento",
      "1 hora de montaje",
      "1 hora de desmontaje",
      "Mobiliario para 70 personas",
      "Limpieza antes y después del evento",
      "Productos para baños",
      "Una persona de apoyo y supervisión"
    ],
    fotos: [
      "img/terraza-magnolia-1.jpg",
      "img/terraza-magnolia-2.jpg",
      "img/terraza-magnolia-3.jpg"
    ],
    titulo_banquetes: "Banquetes en Magnolia",
    nota_banquetes: "Cuatro opciones de comida y cena, disponibles dentro de nuestro salón para complementar tu evento.",
    banquetes: [
      { nombre: "Barra de pizzas", precio: "$170", incluye: ["3 variedades de pizza", "Pasta a elegir", "Ensalada fresca", "Aderezos y complementos", "Postre sencillo"] },
      { nombre: "Taquiza mexicana", precio: "$110", incluye: ["4 guisados a elegir", "Arroz y frijoles", "Nopales preparados", "Salsas y guacamole", "Tortillas"] },
      { nombre: "Buffet Magnolia", precio: "$220", incluye: ["Pollo al gratín o pechuga en salsa", "Pasta cremosa", "Ensalada verde", "Verduras salteadas", "Postre del día"] },
      { nombre: "Premium Magnolia", precio: "$290", incluye: ["Filete de res o salmón al grill", "Ensalada mixta", "Puré de papa", "Espárragos", "Café o postre del día"] }
    ]
  },
  {
    nombre: "Terraza Mural",
    tipo: "Celebra en un espacio con historia",
    capacidad: "Hasta 40 personas",
    direccion: "Calzada de los Héroes 211, Zona Centro, León",
    descripcion: "Un ambiente único en el corazón de la ciudad, ideal para tus eventos más especiales.",
    ideal_para: [
      "Desayunos y brunch",
      "Cumpleaños y eventos familiares",
      "Eventos sociales",
      "Eventos empresariales"
    ],
    precios: [
      { dias: "Domingo a jueves", precio: "$8,000" },
      { dias: "Viernes y sábado en la noche", precio: "$10,000" },
      { dias: "Sábado y domingo por la mañana", precio: "$7,000" }
    ],
    incluye: [
      "5 horas de evento",
      "1 hora de montaje",
      "1 hora de desmontaje",
      "Mobiliario para 40 personas",
      "Limpieza antes y después del evento",
      "Productos para baños",
      "Una persona de apoyo y supervisión"
    ],
    fotos: [
      "img/terraza-mural-1.jpg",
      "img/terraza-mural-2.jpg",
      "img/terraza-mural-3.jpg",
      "img/terraza-mural-4.jpg",
      "img/terraza-mural-5.jpg"
    ]
  }
];
