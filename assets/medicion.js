/* ==========================================================================
   Medición de publicidad de grupojegar.com
   - Guarda de qué anuncio o campaña llegó la persona (gclid, UTM, fbclid)
     durante 90 días, solo en su navegador.
   - Al tocar WhatsApp agrega al mensaje un código corto "(Ref. G7K2QX)" y lo
     registra en JEGAR One, para que Sofía sepa de qué campaña viene el chat.
   - Avisa a Google Ads cuando una cita se guardó de verdad.
   Los códigos de Google se ponen en /config-medicion.js (no aquí).
   ========================================================================== */
(function () {
  'use strict';
  var CFG = window.MEDICION || {};
  var NUM_PRINCIPAL = '524773977315';
  var REGISTRAR_URL = 'https://mkbqnpqsqwvqouuyrmpo.supabase.co/functions/v1/registrar-clic';
  var CLAVE = 'jegar_atrib';
  var DIAS = 90;
  var PARAMS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

  function leer(store, k) { try { return JSON.parse(window[store].getItem(k) || 'null'); } catch (e) { return null; } }
  function guardar(store, k, v) { try { window[store].setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* 1) Al llegar con datos de campaña en la dirección, se guardan */
  var q;
  try { q = new URLSearchParams(location.search); } catch (e) { q = null; }
  var nuevo = {};
  var hayNuevo = false;
  if (q) PARAMS.forEach(function (p) { var v = q.get(p); if (v) { nuevo[p] = v.slice(0, 300); hayNuevo = true; } });
  if (hayNuevo) {
    nuevo.landing_url = (location.origin + location.pathname + location.search).slice(0, 500);
    nuevo.llegada = new Date().toISOString();
    guardar('localStorage', CLAVE, nuevo);
    try { sessionStorage.removeItem('jegar_ref'); } catch (e) {}
  }

  function atribucion() {
    var a = leer('localStorage', CLAVE);
    if (!a || !a.llegada) return {};
    if (Date.now() - new Date(a.llegada).getTime() > DIAS * 864e5) return {};
    var out = {};
    PARAMS.concat(['landing_url', 'llegada']).forEach(function (k) { if (a[k]) out[k] = a[k]; });
    return out;
  }
  function vieneDePublicidad(a) {
    return !!(a.gclid || a.gbraid || a.wbraid || a.fbclid || a.utm_source);
  }
  function fuente(a) {
    var s = String(a.utm_source || '').toLowerCase();
    if (a.gclid || a.gbraid || a.wbraid || /google/.test(s)) return 'G';
    if (a.fbclid || /facebook|instagram|meta|fb|ig/.test(s)) return 'M';
    return 'W';
  }

  /* 2) Etiqueta de Google (solo si hay códigos en config-medicion.js) */
  var gtagListo = false;
  var ids = [CFG.googleAds, CFG.analytics].filter(function (x) { return x && /^(AW|G)-/.test(x); });
  if (ids.length) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ids[0]);
    document.head.appendChild(s);
    window.gtag('js', new Date());
    ids.forEach(function (id) {
      window.gtag('config', id, id.indexOf('AW-') === 0 && CFG.conversionesMejoradas ? { allow_enhanced_conversions: true } : {});
    });
    gtagListo = true;
  }
  function evento(nombre, datos) { if (gtagListo) { try { window.gtag('event', nombre, datos || {}); } catch (e) {} } }

  /* 3) Clic en WhatsApp: código Ref. + registro en JEGAR One + aviso a Google */
  var ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  function nuevoRef(a) {
    var r = fuente(a);
    for (var i = 0; i < 5; i++) r += ALFABETO.charAt(Math.floor(Math.random() * ALFABETO.length));
    return r;
  }
  function refDeSesion(a) {
    var r = leer('sessionStorage', 'jegar_ref');
    if (r && typeof r === 'string') return { ref: r, nuevo: false };
    r = nuevoRef(a);
    guardar('sessionStorage', 'jegar_ref', r);
    return { ref: r, nuevo: true };
  }
  function registrarClic(ref, a, mensaje) {
    var datos = { ref: ref, pagina: location.pathname, mensaje: String(mensaje || '').slice(0, 300) };
    for (var k in a) if (Object.prototype.hasOwnProperty.call(a, k)) datos[k] = a[k];
    var cuerpo = JSON.stringify(datos);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(REGISTRAR_URL, new Blob([cuerpo], { type: 'text/plain' }))) return;
    } catch (e) {}
    try { fetch(REGISTRAR_URL, { method: 'POST', body: cuerpo, keepalive: true, mode: 'no-cors', headers: { 'Content-Type': 'text/plain' } }); } catch (e) {}
  }
  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href*="wa.me/"]') : null;
    if (!a) return;
    var esPrincipal = a.href.indexOf('wa.me/' + NUM_PRINCIPAL) > -1;
    evento('clic_whatsapp', { numero: esPrincipal ? 'inmobiliaria' : 'otro', pagina: location.pathname });
    if (!esPrincipal) return;
    if (CFG.conversionWhatsApp) evento('conversion', { send_to: CFG.conversionWhatsApp });
    var atr = atribucion();
    if (!vieneDePublicidad(atr)) return;
    var u;
    try { u = new URL(a.href); } catch (e) { return; }
    var texto = u.searchParams.get('text') || 'Hola, me interesa obtener información sobre sus propiedades en renta.';
    var r = refDeSesion(atr);
    if (texto.indexOf('(Ref. ') === -1) {
      /* encodeURIComponent (espacios como %20): WhatsApp no siempre entiende "+" como espacio */
      a.href = u.origin + u.pathname + '?text=' + encodeURIComponent(texto + ' (Ref. ' + r.ref + ')');
    }
    registrarClic(r.ref, atr, texto);
  }, true);

  window.JEGAR_MEDIR = {
    atribucion: atribucion,
    citaOk: function (d) {
      if (CFG.conversionesMejoradas && gtagListo && d) {
        var ud = {};
        var tel = String(d.telefono || '').replace(/\D/g, '');
        if (tel.length === 10) ud.phone_number = '+52' + tel;
        if (d.email) ud.email = String(d.email).trim().toLowerCase();
        if (ud.phone_number || ud.email) { try { window.gtag('set', 'user_data', ud); } catch (e) {} }
      }
      if (CFG.conversionCita) evento('conversion', { send_to: CFG.conversionCita });
      evento('generate_lead', { metodo: 'cita_web', propiedad: d && d.propiedad });
    }
  };
})();
