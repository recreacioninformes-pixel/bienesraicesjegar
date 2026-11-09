#!/usr/bin/env node
/* ==========================================================================
   GENERADOR DE SEO PARA BUSCADORES E INTELIGENCIAS ARTIFICIALES
   No necesitas tocar este archivo. Se corre solo (GitHub Actions) cada vez
   que cambias propiedades.js o una página.

   Qué hace:
   1. Escribe la lista de propiedades en el HTML de cada página, para que
      Google, ChatGPT, Perplexity, Claude, etc. la puedan leer aunque no
      ejecuten JavaScript. (La página la sigue dibujando igual que siempre.)
   2. Agrega datos estructurados (schema.org): preguntas frecuentes,
      migas de pan y la lista de espacios con precio y dirección.
   3. Genera /llms.txt (resumen del negocio para las IAs).
   4. Actualiza la fecha del sitemap.xml.
   ========================================================================== */
'use strict';
var fs = require('fs');
var path = require('path');
var vm = require('vm');

var RAIZ = path.resolve(__dirname, '..');
var SITIO = 'https://grupojegar.com';
var HOY = new Date(Date.now() - 6 * 3600 * 1000).toISOString().slice(0, 10);

function leer(f) { return fs.readFileSync(path.join(RAIZ, f), 'utf8'); }
function escribir(f, t) {
  var ruta = path.join(RAIZ, f);
  if (fs.existsSync(ruta) && fs.readFileSync(ruta, 'utf8') === t) return false;
  fs.writeFileSync(ruta, t); return true;
}
function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function textoPlano(html) {
  return String(html)
    .replace(/<li[^>]*>/gi, '\n- ').replace(/<\/(p|ul|li)>/gi, '\n').replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
}
function numero(s) {
  var m = String(s || '').match(/\$\s?([\d,]+(?:\.\d+)?)/);
  return m ? Number(m[1].replace(/,/g, '')) : null;
}

/* ---- Cargar propiedades.js tal cual lo usa la página ---- */
var ctx = { window: {}, Date: Date };
vm.createContext(ctx);
vm.runInContext(leer('propiedades.js') + '\n;this.__P = PROPIEDADES; this.__F = (typeof PORTAFOLIO !== "undefined") ? PORTAFOLIO : [];', ctx);
var PROPS = (ctx.__P || []).filter(function (p) {
  if (!p || !p.nombre) return false;
  return true;
});

/* Páginas por tipo: misma regla que assets/sitio.js (vaEnPagina) */
function configPagina(html) {
  var m = html.match(/<script>\s*window\.JEGAR_PAGINA\s*=\s*([\s\S]*?);\s*<\/script>/);
  if (!m) return null;
  try { return vm.runInNewContext('(' + m[1] + ')', {}); } catch (e) { return null; }
}
function vaEnPagina(p, PAGINA) {
  if (!PAGINA || !PAGINA.clave) return true;
  if (p.paginas && p.paginas.length) return p.paginas.indexOf(PAGINA.clave) > -1;
  return PAGINA.incluye ? !!PAGINA.incluye(p) : true;
}

/* ---- HTML estático de las propiedades (lo reemplaza sitio.js al cargar) ---- */
function htmlPropiedad(p) {
  var h = '<article class="prop prop-estatica">';
  h += '<h3>' + esc(p.nombre) + '</h3>';
  var linea = [p.tipo, p.precio].filter(Boolean).map(esc).join(' · ');
  if (linea) h += '<p>' + linea + '</p>';
  if (p.direccion) h += '<p>' + esc(p.direccion) + '</p>';
  if (p.descripcion) h += '<p>' + esc(p.descripcion) + '</p>';
  if (p.incluye && p.incluye.length) {
    h += '<p>Incluye:</p><ul>' + p.incluye.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
  }
  var us = (p.locales || []).filter(function (u) { return u && u.nombre; });
  if (us.length) {
    h += '<p>' + esc(p.titulo_unidades || 'Espacios disponibles') + ':</p><ul>' +
      us.map(function (u) { return '<li>' + esc(u.nombre) + (u.detalle ? ': ' + esc(u.detalle) : '') + '</li>'; }).join('') + '</ul>';
  }
  return h + '</article>';
}

/* ---- schema.org ---- */
function direccionSchema(d) {
  var partes = String(d || '').split(',').map(function (s) { return s.trim(); });
  return {
    '@type': 'PostalAddress',
    streetAddress: partes.slice(0, -1).join(', ') || d,
    addressLocality: 'León',
    addressRegion: 'Guanajuato',
    addressCountry: 'MX'
  };
}
function ofertaSchema(p, url) {
  var hab = /habitacional/i.test(p.categoria || '');
  var o = {
    '@type': 'Offer',
    name: p.nombre + (p.tipo ? ' · ' + p.tipo : ''),
    url: url,
    businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
    seller: { '@id': SITIO + '/#jegar' },
    itemOffered: {
      '@type': hab ? 'Accommodation' : 'Place',
      name: p.nombre,
      description: p.descripcion || p.tipo || undefined,
      address: p.direccion ? direccionSchema(p.direccion) : undefined
    }
  };
  var n = numero(p.precio);
  if (n) {
    o.priceSpecification = {
      '@type': 'UnitPriceSpecification',
      price: n, priceCurrency: 'MXN', unitText: 'MES',
      description: p.precio
    };
  }
  return o;
}
function faqSchema(html) {
  var preguntas = [];
  var re = /<details>\s*<summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g, m;
  while ((m = re.exec(html))) {
    var q = textoPlano(m[1]), a = textoPlano(m[2]);
    if (q && a) preguntas.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } });
  }
  return preguntas.length ? { '@type': 'FAQPage', mainEntity: preguntas } : null;
}
function titulo(html) { var m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/); return m ? textoPlano(m[1]) : ''; }
function canonical(html) { var m = html.match(/<link rel="canonical" href="([^"]+)"/); return m ? m[1] : null; }

var MARCA_INI = '<!--SEO-IA:inicio (generado por herramientas/generar-seo.js, no editar)-->';
var MARCA_FIN = '<!--SEO-IA:fin-->';
function quitarBloques(html) {
  var re = new RegExp(MARCA_INI.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '[\\s\\S]*?' + MARCA_FIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\n?', 'g');
  return html.replace(re, '');
}

/* ---- Procesar cada página ---- */
var paginas = [
  { f: 'index.html', nombre: 'Inicio' },
  { f: 'consultorios/index.html' }, { f: 'oficinas/index.html' }, { f: 'habitaciones/index.html' },
  { f: 'suites/index.html' }, { f: 'lofts/index.html' }, { f: 'enjambre/index.html' },
  { f: 'the-network-society/index.html' }
];
var cambios = [];
var resumenPaginas = [];

paginas.forEach(function (pg) {
  if (!fs.existsSync(path.join(RAIZ, pg.f))) return;
  var html = quitarBloques(leer(pg.f));
  var url = canonical(html) || (SITIO + '/' + pg.f.replace(/index\.html$/, ''));
  var PAGINA = configPagina(html);
  var lista = PROPS.filter(function (p) { return vaEnPagina(p, PAGINA); });

  /* 1. Lista estática dentro de #lista-propiedades */
  html = html.replace(/(<div class="prop-list" id="lista-propiedades">)([\s\S]*?)(<\/div>)/, function (_, a, b, c) {
    return a + MARCA_INI + lista.map(htmlPropiedad).join('') + MARCA_FIN + c;
  });

  /* 2. Datos estructurados */
  var grafo = [];
  if (pg.f !== 'index.html') {
    grafo.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITIO + '/' },
        { '@type': 'ListItem', position: 2, name: titulo(html) || pg.f, item: url }
      ]
    });
  }
  var faq = faqSchema(html);
  if (faq) { faq.url = url; grafo.push(faq); }
  if (lista.length && /id="lista-propiedades"/.test(html)) {
    grafo.push({
      '@type': 'ItemList',
      name: titulo(html) || 'Espacios disponibles',
      url: url,
      numberOfItems: lista.length,
      itemListElement: lista.map(function (p, i) { return { '@type': 'ListItem', position: i + 1, item: ofertaSchema(p, url) }; })
    });
  }
  if (grafo.length) {
    var json = JSON.stringify({ '@context': 'https://schema.org', '@graph': grafo }, null, 1).replace(/<\//g, '<\\/');
    html = html.replace('</head>', MARCA_INI + '\n<script type="application/ld+json">\n' + json + '\n</script>\n' + MARCA_FIN + '\n</head>');
  }

  if (escribir(pg.f, html)) cambios.push(pg.f);
  resumenPaginas.push({ url: url, titulo: (html.match(/<title>([^<]*)/) || [])[1] || url, desc: (html.match(/name="description" content="([^"]*)/) || [])[1] || '' });
});

/* ---- llms.txt ---- */
function bloqueLlms(p) {
  var t = '### ' + p.nombre + '\n';
  if (p.tipo) t += '- Tipo: ' + p.tipo + ' (' + (p.categoria || '') + ')\n';
  if (p.precio) t += '- Precio: ' + p.precio + ' MXN\n';
  if (p.direccion) t += '- Dirección: ' + p.direccion + ', Guanajuato, México\n';
  if (p.descripcion) t += '- ' + p.descripcion + '\n';
  if (p.incluye && p.incluye.length) t += '- Incluye: ' + p.incluye.join('; ') + '\n';
  var us = (p.locales || []).filter(function (u) { return u && u.nombre; });
  if (us.length) t += '- ' + (p.titulo_unidades || 'Espacios disponibles') + ':\n' + us.map(function (u) { return '  - ' + u.nombre + (u.detalle ? ': ' + u.detalle : ''); }).join('\n') + '\n';
  return t;
}
var comerciales = PROPS.filter(function (p) { return /comercial/i.test(p.categoria || ''); });
var habitacionales = PROPS.filter(function (p) { return /habitacional/i.test(p.categoria || ''); });
var faqInicio = faqSchema(leer('index.html'));

var llms = '# Inmobiliaria JEGAR\n\n' +
  '> Inmobiliaria en León, Guanajuato, México, que renta espacios comerciales (consultorios, oficinas privadas, oficinas todo incluido, locales) y habitacionales (habitaciones, suites amuebladas y mini lofts) con servicios incluidos. Más de 500 espacios habitacionales y más de 350 espacios comerciales. Atención personalizada y citas por WhatsApp o en línea.\n\n' +
  '- Sitio: ' + SITIO + '/\n' +
  '- WhatsApp y teléfono: +52 477 397 7315 (https://wa.me/524773977315)\n' +
  '- Correo: contacto@grupojegar.com\n' +
  '- Oficina: Juan Bautista La Salle 104, Col. Panorama, León, Guanajuato\n' +
  '- Horario: lunes a viernes de 9:30 a 17:00 h; sábados de 10:00 a 13:00 h\n' +
  '- Agendar visita: ' + SITIO + '/agendar/\n' +
  '- Redes: https://www.facebook.com/jegarbienesraices · https://www.instagram.com/bienesraicesjegar/ · https://www.tiktok.com/@inmobiliaria.jegar\n' +
  '- Eventos (terrazas y Granja Ventura): https://planeteventsleon.com/\n\n' +
  '## Páginas\n\n' +
  resumenPaginas.map(function (r) { return '- [' + r.titulo + '](' + r.url + '): ' + r.desc; }).join('\n') + '\n\n' +
  '## Espacios comerciales disponibles en renta\n\n' + comerciales.map(bloqueLlms).join('\n') + '\n' +
  '## Espacios habitacionales disponibles en renta\n\n' + habitacionales.map(bloqueLlms).join('\n') + '\n' +
  (faqInicio ? '## Preguntas frecuentes\n\n' + faqInicio.mainEntity.map(function (q) { return '**' + q.name + '**\n' + q.acceptedAnswer.text; }).join('\n\n') + '\n\n' : '') +
  'Precios en pesos mexicanos (MXN), por mes, sujetos a disponibilidad. Última actualización: ' + HOY + '.\n';
if (escribir('llms.txt', llms)) cambios.push('llms.txt');

/* ---- sitemap.xml: fecha de última modificación ---- */
var sm = leer('sitemap.xml').replace(/<lastmod>[^<]*<\/lastmod>/g, '').replace(/<\/loc>/g, '</loc><lastmod>' + HOY + '</lastmod>');
if (escribir('sitemap.xml', sm)) cambios.push('sitemap.xml');

console.log(cambios.length ? 'Actualizado: ' + cambios.join(', ') : 'Sin cambios');
