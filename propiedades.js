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
   9. Si la etiqueta es una promoción con fecha de fin, agrega
      etiqueta_vence: "2026-10-31",
      y la etiqueta se quita sola al día siguiente (año-mes-día).
  10. Páginas por tipo (/consultorios/, /habitaciones/, /lofts/, /market-square/):
      cada propiedad sale sola en la que le corresponde según su "tipo".
      Para forzarla a otra(s), agrega por ejemplo:
      paginas: ["consultorios"],

   REGLAS
   - Respeta siempre las comillas "" y las comas al final de cada línea.
   - No uses comillas dobles dentro de un texto.
   - Para quitar una propiedad, borra su bloque completo.
   ========================================================================== */

var PROPIEDADES = [
  {
    nombre: "Casa Barranca del Refugio",
    categoria: "Habitacional",
    etiqueta: "Casa completa",
    tipo: "Casa en renta",
    precio: "$25,000 mensuales",
    direccion: "Col. Barranca del Refugio, León",
    descripcion: "Casa moderna y amplia de 3 niveles más roof, con vista a la barranca. Mantenimiento incluido en la renta.",
    incluye: [
      "3 recámaras",
      "6 baños (2 medios)",
      "250 m² de terreno",
      "350 m² de construcción",
      "Cocina integral con isla",
      "Vestidor en recámara principal",
      "Balcones con vista a la barranca",
      "Jardín",
      "Roof",
      "Mantenimiento incluido"
    ],
    fachada: [
      "img/barranca-refugio-fachada.jpg",
      "img/barranca-refugio-sala-1.jpg",
      "img/barranca-refugio-sala-2.jpg",
      "img/barranca-refugio-cocina.jpg",
      "img/barranca-refugio-jardin.jpg",
      "img/barranca-refugio-fachada-trasera.jpg",
      "img/barranca-refugio-recamara-1.jpg",
      "img/barranca-refugio-recamara-2.jpg",
      "img/barranca-refugio-vestidor-1.jpg",
      "img/barranca-refugio-vestidor-2.jpg",
      "img/barranca-refugio-bano.jpg",
      "img/barranca-refugio-estancia.jpg",
      "img/barranca-refugio-vista.jpg",
      "img/barranca-refugio-escaleras.jpg",
      "img/barranca-refugio-medio-bano.jpg"
    ]
  },
  {
    nombre: "Centro de Negocios San Fernando 303",
    categoria: "Comercial",
    etiqueta: "Nuevo",
    tipo: "Oficinas privadas todo incluido",
    precio: "Desde $5,000 mensuales · Precios negociables",
    direccion: "San Fernando 303, Col. La Martinica, León",
    descripcion: "16 oficinas privadas de 6 a 28 m², amuebladas y sin amueblar, con todos los servicios incluidos. Gestiona tu oficina desde la nueva App JEGAR con inteligencia artificial: tu asistente agenda citas, confirma a tus clientes por WhatsApp y reserva la sala de juntas por ti. Precios negociables, abiertos a propuestas.",
    incluye: [
      "Luz e internet",
      "Recepción para tus clientes",
      "Limpieza",
      "Cocina y comedor compartidos",
      "Baños compartidos",
      "Sala de juntas",
      "App JEGAR con IA: agenda inteligente para tus citas",
      "Recordatorios y confirmaciones automáticas por WhatsApp a tus clientes",
      "Reserva de sala de juntas desde tu celular",
      "Aviso al instante cuando llega tu cita o tu paquetería",
      "Pagos, recibos y reportes de mantenimiento desde la app"
    ],
    titulo_unidades: "Oficinas disponibles",
    locales: [
      {
        nombre: "Oficina 1",
        detalle: "7.90 m² · Planta baja · Amueblada · $6,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-1.jpg"
        ]
      },
      {
        nombre: "Oficina 2",
        detalle: "9.45 m² · Planta baja · Amueblada · $6,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-2.jpg"
        ]
      },
      {
        nombre: "Oficina 3",
        detalle: "7.65 m² · Planta baja · Ventana que abre · semiamueblada · $5,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-3.jpg"
        ]
      },
      {
        nombre: "Oficina 4",
        detalle: "8.25 m² · Planta baja · Amueblada · $6,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-4.jpg"
        ]
      },
      {
        nombre: "Oficina 5",
        detalle: "6.25 m² · Planta baja · Amueblada · $5,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-5.jpg"
        ]
      },
      {
        nombre: "Oficina 6",
        detalle: "8.40 m² · Planta baja · Amueblada · $6,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-6.jpg"
        ]
      },
      {
        nombre: "Oficina 7",
        detalle: "9.40 m² · Planta baja · Sin amueblar · $6,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-7.jpg"
        ]
      },
      {
        nombre: "Oficina 8",
        detalle: "6.80 m² · Planta baja · Amueblada · $5,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-8.jpg"
        ]
      },
      {
        nombre: "Oficina 9",
        detalle: "12.00 m² · Planta baja · Ventana que abre · amueblada · $8,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-9.jpg"
        ]
      },
      {
        nombre: "Oficina 10",
        detalle: "8.20 m² · Planta alta · Amueblada · $6,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-10.jpg"
        ]
      },
      {
        nombre: "Oficina 11",
        detalle: "21.30 m² · Planta alta · Ventanal · amueblada · $13,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-11.jpg"
        ]
      },
      {
        nombre: "Oficina 12",
        detalle: "28.50 m² · Planta alta · Ventanal · semiamueblada · $16,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-12.jpg"
        ]
      },
      {
        nombre: "Oficina 13",
        detalle: "17.30 m² · Planta alta · Ventana que abre · sin amueblar · $10,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-13.jpg"
        ]
      },
      {
        nombre: "Oficina 14",
        detalle: "20.00 m² · Planta alta · Ventana · amueblada · $12,000 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-14.jpg"
        ]
      },
      {
        nombre: "Oficina 15",
        detalle: "23.00 m² · Planta alta · Ventana a la calle · semiamueblada · $13,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-15.jpg"
        ]
      },
      {
        nombre: "Oficina 16",
        detalle: "21.00 m² · Planta alta · Ventana a la calle · sin amueblar · $12,500 mensuales",
        fotos: [
          "img/san-fernando-303-oficina-16.jpg"
        ]
      }
    ],
    fachada: [
      "img/san-fernando-303-oficina-15.jpg",
      "img/san-fernando-303-oficina-11.jpg",
      "img/san-fernando-303-oficina-13.jpg",
      "img/san-fernando-303-plano-planta-baja.jpg",
      "img/san-fernando-303-plano-planta-alta.jpg"
    ]
  },
  {
    nombre: "Market Square",
    categoria: "Comercial",
    etiqueta: "Nuevo",
    tipo: "Piso para oficinas o gimnasio",
    precio: "$45,000 mensuales",
    direccion: "Calle Dos Oriente 103, Col. San Jerónimo, León",
    descripcion: "420 m² listos para personalizar. Diseña tu oficina o gimnasio a tu medida: se permiten adecuaciones.",
    titulo_unidades: "Piso disponible",
    locales: [
      {
        nombre: "Piso 3",
        detalle: "420 m² · $45,000 mensuales",
        fotos: [
          "img/market-square-gimnasio-1.jpg",
          "img/market-square-oficinas-1.jpg",
          "img/market-square-gimnasio-2.jpg",
          "img/market-square-oficinas-2.jpg",
          "img/market-square-oficinas-3.jpg"
        ]
      }
    ],
    fachada: [
      "img/market-square-recepcion.jpg"
    ]
  },
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
    precio: "$6,500 mensuales",
    direccion: "Pedro Moreno 243A, Zona Centro, León",
    descripcion: "Suites con baño propio y servicios incluidos.",
    incluye: [
      "Aire acondicionado",
      "Limpieza",
      "Restaurante",
      "Spa"
    ],
    titulo_unidades: "Suites disponibles",
    locales: [
      {
        nombre: "Suite 1",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-1-1.jpg",
          "img/casa-magnolia-hab-1-2.jpg",
          "img/casa-magnolia-hab-1-3.jpg"
        ]
      },
      {
        nombre: "Suite 2",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-2-1.jpg",
          "img/casa-magnolia-hab-2-2.jpg",
          "img/casa-magnolia-hab-2-3.jpg",
          "img/casa-magnolia-hab-2-4.jpg"
        ]
      },
      {
        nombre: "Suite 3",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-3-1.jpg",
          "img/casa-magnolia-hab-3-2.jpg",
          "img/casa-magnolia-hab-3-3.jpg",
          "img/casa-magnolia-hab-3-4.jpg"
        ]
      },
      {
        nombre: "Suite 4",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-4-1.jpg",
          "img/casa-magnolia-hab-4-2.jpg",
          "img/casa-magnolia-hab-4-3.jpg",
          "img/casa-magnolia-hab-4-4.jpg"
        ]
      },
      {
        nombre: "Suite 5",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-5-1.jpg",
          "img/casa-magnolia-hab-5-2.jpg",
          "img/casa-magnolia-hab-5-3.jpg",
          "img/casa-magnolia-hab-5-4.jpg",
          "img/casa-magnolia-hab-5-5.jpg"
        ]
      },
      {
        nombre: "Suite 6",
        detalle: "Con balcón · Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-6-1.jpg",
          "img/casa-magnolia-hab-6-2.jpg",
          "img/casa-magnolia-hab-6-3.jpg",
          "img/casa-magnolia-hab-6-4.jpg",
          "img/casa-magnolia-hab-6-5.jpg",
          "img/casa-magnolia-hab-6-6.jpg"
        ]
      },
      {
        nombre: "Suite 7",
        detalle: "Con balcón · Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-7-1.jpg",
          "img/casa-magnolia-hab-7-2.jpg",
          "img/casa-magnolia-hab-7-3.jpg",
          "img/casa-magnolia-hab-7-4.jpg"
        ]
      },
      {
        nombre: "Suite 8",
        detalle: "Con terraza privada · Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-8-1.jpg",
          "img/casa-magnolia-hab-8-2.jpg",
          "img/casa-magnolia-hab-8-3.jpg",
          "img/casa-magnolia-hab-8-4.jpg",
          "img/casa-magnolia-hab-8-5.jpg"
        ]
      },
      {
        nombre: "Suite 9",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-9-1.jpg",
          "img/casa-magnolia-hab-9-2.jpg",
          "img/casa-magnolia-hab-9-3.jpg",
          "img/casa-magnolia-hab-9-4.jpg",
          "img/casa-magnolia-hab-9-5.jpg"
        ]
      },
      {
        nombre: "Suite 10",
        detalle: "Baño propio · $6,500 mensuales",
        fotos: [
          "img/casa-magnolia-hab-10-1.jpg",
          "img/casa-magnolia-hab-10-2.jpg",
          "img/casa-magnolia-hab-10-3.jpg",
          "img/casa-magnolia-hab-10-4.jpg"
        ]
      }
    ],
    fachada: [
      "img/casa-magnolia-general-1.jpg",
      "img/casa-magnolia-general-2.jpg",
      "img/casa-magnolia-general-3.jpg",
      "img/casa-magnolia-general-4.jpg",
      "img/casa-magnolia-general-5.jpg",
      "img/casa-magnolia-general-6.jpg"
    ]
  },
  {
    nombre: "Casa Azul",
    categoria: "Comercial",
    etiqueta: "Low cost · Ideal para emprendedores",
    tipo: "",
    precio: "Desde $3,000 mensuales",
    direccion: "Cesáreo Boillot 313, Col. Panorama, León",
    descripcion: "Espacios de 10 m², pensados para emprendedores que van comenzando. Las fotos de la propiedad muestran las áreas comunes.",
    titulo_unidades: "Espacio disponible",
    locales: [
      {
        nombre: "Consultorio 2",
        detalle: "10 m² · $3,000 mensuales",
        fotos: [
          "img/casa-azul-consultorio-2a.jpg",
          "img/casa-azul-consultorio-2b.jpg"
        ]
      }
    ],
    fachada: [
      "img/casa-azul-fachada.jpg",
      "img/casa-azul-patio.jpg",
      "img/casa-azul-sala.jpg",
      "img/casa-azul-pasillo.jpg"
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
      {
      nombre: "Consultorio",
      detalle: "Desde $5,000 mensuales",
      fotos: [
        "img/ayurveda-consultorio-1.jpg",
        "img/ayurveda-consultorio-2.jpg",
        "img/ayurveda-consultorio-3.jpg",
        "img/ayurveda-consultorio-4.jpg"
      ]
    }
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
    nombre: "Catemaco 509",
    categoria: "Habitacional",
    etiqueta: "Low cost · Sin depósito hasta el 31 de octubre",
    etiqueta_vence: "2026-10-31",
    tipo: "Habitaciones",
    precio: "Desde $2,500 mensuales",
    direccion: "Lago de Catemaco 509, Col. Lomas de la Trinidad, León",
    descripcion: "Promoción sin depósito válida hasta el 31 de octubre. Habitación con baño compartido: $2,500 mensuales. Habitación con baño propio: $2,700 mensuales. Agenda una cita para conocer las habitaciones disponibles y elegir la tuya.",
    fachada: [
      "img/catemaco-509-1.jpg",
      "img/catemaco-509-2.jpg",
      "img/catemaco-509-3.jpg",
      "img/catemaco-509-4.jpg",
      "img/catemaco-509-5.jpg",
      "img/catemaco-509-6.jpg",
      "img/catemaco-509-7.jpg",
      "img/catemaco-509-8.jpg"
    ]
  },
  {
    nombre: "Coahuila 705",
    categoria: "Comercial",
    tipo: "Oficinas",
    precio: "Desde $4,500 mensuales",
    direccion: "Coahuila 705, Col. Arbide, León",
    descripcion: "Oficinas con cocineta, baño propio y estacionamiento.",
    titulo_unidades: "Oficinas disponibles",
    locales: [
      {
        nombre: "Oficina 6",
        detalle: "Doble altura · cocineta · baño propio · estacionamiento · $10,000 mensuales",
        fotos: [
          "img/coahuila-705-oficina-6-1.jpg",
          "img/coahuila-705-oficina-6-2.jpg",
          "img/coahuila-705-oficina-6-3.jpg",
          "img/coahuila-705-oficina-6-4.jpg",
          "img/coahuila-705-oficina-6-5.jpg"
        ]
      },
      {
        nombre: "Oficina 5",
        detalle: "Cocineta · baño propio · estacionamiento · $4,500 mensuales",
        fotos: [
          "img/lofts-arbide-loft-5-1.jpg",
          "img/lofts-arbide-loft-5-2.jpg",
          "img/lofts-arbide-loft-5-3.jpg"
        ]
      },
      {
        nombre: "Oficina B",
        detalle: "Disponible a partir del 1 de noviembre · Doble altura · cocineta · baño propio · estacionamiento · $10,000 mensuales",
        fotos: [
          "img/lofts-arbide-loft-b-1.jpg",
          "img/lofts-arbide-loft-b-2.jpg",
          "img/lofts-arbide-loft-b-3.jpg",
          "img/lofts-arbide-loft-b-4.jpg"
        ]
      }
    ],
    fachada: [
      "img/coahuila-705-oficina-6-1.jpg",
      "img/lofts-arbide-fachada.jpg"
    ]
  },
  {
    nombre: "Lofts Arts",
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
        nombre: "Loft 6",
        detalle: "Amueblado · $7,000 mensuales",
        fotos: [
          "img/lofts-arts-6-1.jpg",
          "img/lofts-arts-6-2.jpg",
          "img/lofts-arts-6-3.jpg",
          "img/lofts-arts-6-4.jpg"
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
    etiqueta_vence: "2026-10-31",
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
    nombre: "Centro de Negocios San Fernando 303",
    etiqueta: "Nuevo",
    categoria: "Comercial",
    direccion: "San Fernando 303, Col. La Martinica, León",
    foto: ""
  },
  {
    nombre: "Market Square",
    etiqueta: "Nuevo",
    categoria: "Comercial",
    direccion: "Calle Dos Oriente 103, Col. San Jerónimo, León",
    foto: ""
  },
  {
    nombre: "Lofts Arts",
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
    foto: "img/boillot-129-fachada.jpg"
  },
  {
    nombre: "Arquitectos 208",
    categoria: "Comercial",
    direccion: "Arquitectos 208, Col. Panorama, León",
    foto: "img/arquitectos-208-fachada.jpg"
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
    foto: "img/punto-roca-fachada.jpg"
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
    foto: "img/esquina-andrade-fachada.jpg"
  },
  {
    nombre: "Coahuila 705",
    categoria: "Comercial",
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
    foto: "img/suecia-112-fachada.jpg"
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
    foto: "img/catemaco-509-1.jpg"
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
    foto: "img/punto-panorama-fachada.jpg"
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
    foto: "img/casa-magnolia-general-1.jpg"
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
    foto: "img/casa-dos-once-pasillo.jpg"
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
El botón de cotizar de esta sección manda WhatsApp al 477 285 8643.
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
