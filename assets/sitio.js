/* ==========================================================================
   Script compartido de grupojegar.com (portada y páginas por tipo de espacio).
   La portada y las páginas /consultorios/, /habitaciones/, etc. usan este mismo
   archivo. Cada página nueva define window.JEGAR_PAGINA para decir qué
   propiedades de propiedades.js muestra. Si una parte de la página no existe
   (por ejemplo, el formulario de la portada), esa parte simplemente se salta.
   ========================================================================== */
(function () {
  'use strict';
  var PAGINA = window.JEGAR_PAGINA || null;
  var MEDIR = window.JEGAR_MEDIR || { atribucion: function () { return {}; }, citaOk: function () {}, clicCita: function () {} };
  /* Las rutas de fotos en propiedades.js son "img/...". Desde /consultorios/ esa
     ruta no existiría, así que se vuelven absolutas: "/img/...". */
  function ruta(r) { return (r && !/^(https?:)?\//.test(r)) ? '/' + r : r; }
  function $(id) { return document.getElementById(id); }
  var NUM = '524773977315';
  var BASE = 'Hola, me interesa obtener información sobre sus propiedades en renta.';
  function wa(msg) { return 'https://wa.me/' + NUM + '?text=' + encodeURIComponent(msg); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function icon(id, size) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size); svg.setAttribute('height', size); svg.setAttribute('aria-hidden', 'true');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#' + id);
    svg.appendChild(use);
    return svg;
  }

  /* Íconos y formulario "Agendar cita": viven aquí para no repetirlos en cada página */
  if (!$('i-wa')) {
    var sprite = document.createElement('div');
    sprite.innerHTML = '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">' +
      '<symbol id="i-wa" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5A8.5 8.5 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.4-2-1-.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-1-2z"/></g></symbol>' +
      '<symbol id="i-pin" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></g></symbol>' +
      '<symbol id="i-clock" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g></symbol></svg>';
    document.body.insertBefore(sprite.firstChild, document.body.firstChild);
  }
  if (!$('cita-dlg')) {
    var cajaCita = document.createElement('div');
    cajaCita.innerHTML =
      '<dialog class="cita-dlg" id="cita-dlg" aria-labelledby="cita-titulo">' +
      '<form class="cita-in" id="cita-form" novalidate>' +
        '<div class="cita-top"><div><h3 id="cita-titulo">Agenda tu cita</h3><p id="cita-sub"></p></div>' +
        '<button type="button" class="cita-x" data-cerrar aria-label="Cerrar">&times;</button></div>' +
        '<div class="cita-campo" id="cita-campo-prop" hidden><label for="cita-prop">Propiedad que te interesa</label><select class="field" id="cita-prop"></select></div>' +
        '<div class="cita-campo" id="cita-campo-unidad" hidden><label for="cita-unidad">Espacio que te interesa</label><select class="field" id="cita-unidad"></select></div>' +
        '<div class="cita-campo"><label for="cita-nombre">Nombre completo</label><input class="field" id="cita-nombre" type="text" autocomplete="name" required maxlength="120"></div>' +
        '<div class="cita-campo"><label for="cita-tel">Teléfono / WhatsApp</label><input class="field" id="cita-tel" type="tel" inputmode="tel" autocomplete="tel" placeholder="10 dígitos" required maxlength="20"></div>' +
        '<div class="cita-campo"><label for="cita-email">Correo <span class="opc">(opcional)</span></label><input class="field" id="cita-email" type="email" autocomplete="email" maxlength="120"></div>' +
        '<div class="cita-campo"><span class="cita-lbl" id="cita-lbl-fecha">Día de la cita</span><div class="cita-pills" id="cita-dias" role="group" aria-labelledby="cita-lbl-fecha"></div></div>' +
        '<div class="cita-campo"><span class="cita-lbl" id="cita-lbl-hora">Hora</span><div class="cita-pills" id="cita-horas" role="group" aria-labelledby="cita-lbl-hora"></div>' +
        '<p class="cita-nota">Horario de citas: lunes a viernes de 9:30 a 17:00 y sábados de 10:00 a 13:00.</p></div>' +
        '<div class="cita-campo"><label for="cita-com">Comentarios <span class="opc">(opcional)</span></label><textarea class="field" id="cita-com" maxlength="500" placeholder="Ej. Busco para dos personas, con estacionamiento..."></textarea></div>' +
        '<div class="cita-trampa" aria-hidden="true"><label for="cita-web">No llenar</label><input id="cita-web" type="text" tabindex="-1" autocomplete="off"></div>' +
        '<label class="cita-acepto"><input type="checkbox" id="cita-acepto"><span>Acepto el <a href="/privacidad/" target="_blank" rel="noopener">aviso de privacidad</a> y que JEGAR me contacte para esta cita.</span></label>' +
        '<p class="cita-err" id="cita-err" role="alert" hidden></p>' +
        '<button class="btn btn-dark" type="submit" id="cita-enviar">Confirmar cita</button>' +
      '</form>' +
      '<div class="cita-in cita-ok" id="cita-ok" hidden>' +
        '<svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l3 3 5-6"/></svg>' +
        '<h3>¡Tu cita quedó registrada!</h3><p id="cita-ok-txt"></p>' +
        '<p class="cita-nota">Un asesor de JEGAR te contactará para confirmarla.</p>' +
        '<button type="button" class="btn btn-dark" data-cerrar>Listo</button>' +
      '</div></dialog>';
    document.body.appendChild(cajaCita.firstChild);
  }


  /* Enlaces de WhatsApp con mensaje propio (data-wa-msg) */
  var waMsg = document.querySelectorAll('[data-wa-msg]');
  for (var w = 0; w < waMsg.length; w++) waMsg[w].href = wa(waMsg[w].getAttribute('data-wa-msg'));

  /* Enlaces de WhatsApp con el mensaje base */
  var baseLinks = document.querySelectorAll('[data-wa="base"]');
  for (var i = 0; i < baseLinks.length; i++) baseLinks[i].href = wa(BASE);

  /* Formulario: filtra al cliente y arma el mensaje */
  var TIPOS = ['Habitacional', 'Comercial', 'Convenio empresarial'];
  var ZONAS = ['Panorama', 'Jardines del Moral', 'Centro', 'Arbide', 'San Jerónimo', 'Martinica', 'La Moderna', 'Valle del Campestre', 'Otra zona'];
  var estado = { tipo: '', zona: '' };
  var inPres = document.getElementById('presupuesto');
  var inNombre = document.getElementById('nombre');
  var btnEnviar = document.getElementById('enviar-wa');

  function mensajeFormulario() {
    var l = [BASE];
    if (estado.tipo) l.push('Tipo de espacio: ' + estado.tipo);
    if (estado.zona) l.push('Zona: ' + estado.zona);
    var p = inPres.value.trim();
    if (p) l.push('Presupuesto mensual: ' + (/^[\d.,\s]+$/.test(p) ? '$' + p + ' MXN' : p));
    var n = inNombre.value.trim();
    if (n) l.push('Mi nombre es ' + n + '.');
    return l.join('\n');
  }
  function actualizar() { btnEnviar.href = wa(mensajeFormulario()); }

  function pills(contenedorId, opciones, clave) {
    var cont = document.getElementById(contenedorId);
    var botones = [];
    opciones.forEach(function (op) {
      var b = el('button', 'pill', op);
      b.type = 'button';
      b.setAttribute('aria-pressed', 'false');
      b.addEventListener('click', function () {
        estado[clave] = estado[clave] === op ? '' : op;
        botones.forEach(function (x) { x.setAttribute('aria-pressed', x.textContent === estado[clave] ? 'true' : 'false'); });
        actualizar();
      });
      botones.push(b);
      cont.appendChild(b);
    });
  }
  if (btnEnviar && inPres && inNombre) {
    pills('pills-tipo', TIPOS, 'tipo');
    pills('pills-zona', ZONAS, 'zona');
    inPres.addEventListener('input', actualizar);
    inNombre.addEventListener('input', actualizar);
    actualizar();
  }

  /* Propiedades: se leen de propiedades.js */
  function marcador(clase, texto) {
    var d = el('div', 'ph ' + clase);
    if (clase === 'big') {
      var im = el('img'); im.src = '/img/logo-mark-white.png'; im.alt = ''; im.width = 72; im.height = 72;
      d.appendChild(im);
    }
    d.appendChild(el('span', '', texto));
    return d;
  }
  function foto(r, alt, clase, textoMarcador, imgClase) {
    if (r) { var im = el('img'); im.src = ruta(r); im.alt = alt; im.loading = 'lazy'; return im; }
    return marcador(clase, textoMarcador);
  }

  /* Botón "Agenda tu cita": abre el formulario que manda la cita a JEGAR One */
  var CITA_URL = 'https://mkbqnpqsqwvqouuyrmpo.supabase.co/functions/v1/cita-web';
  var CITA_HORARIO = { 1: [570, 1020], 2: [570, 1020], 3: [570, 1020], 4: [570, 1020], 5: [570, 1020], 6: [600, 780] };
  var CITA_DIAS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  var CITA_DIAS_L = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var CITA_MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var dlg = document.getElementById('cita-dlg');
  var citaForm = document.getElementById('cita-form');
  var citaOk = document.getElementById('cita-ok');
  var citaErr = document.getElementById('cita-err');
  var citaEnviar = document.getElementById('cita-enviar');
  var citaSel = { propiedad: '', fecha: '', hora: '' };

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  /* "Ahora" en hora de León (UTC-6 todo el año) */
  function ahoraLeon() { var d = new Date(Date.now() - 6 * 3600 * 1000); return d; }
  function minutosAhora() { var a = ahoraLeon(); return a.getUTCHours() * 60 + a.getUTCMinutes(); }
  function slotsDe(dia, esHoy) {
    var r = CITA_HORARIO[dia]; if (!r) return [];
    var lim = esHoy ? minutosAhora() + 60 : -1, out = [];
    for (var m = r[0]; m < r[1]; m += 30) if (m >= lim) out.push(pad(Math.floor(m / 60)) + ':' + pad(m % 60));
    return out;
  }
  /* Horas libres: JEGAR One dice en qué horarios todavía hay un asesor libre.
     Si no se puede consultar, se muestran todas (el servidor igual revisa al guardar). */
  var citaPeticion = 0;
  function pintarHoras(dia, esHoy, fecha) {
    var box = document.getElementById('cita-horas'); box.innerHTML = '';
    citaSel.hora = '';
    if (dia === null) { box.appendChild(el('p', 'cita-nota', 'Primero elige un día.')); return; }
    var todas = slotsDe(dia, esHoy), yo = ++citaPeticion;
    box.appendChild(el('p', 'cita-nota', 'Buscando horarios libres...'));
    function pintar(lista) {
      if (yo !== citaPeticion) return;
      box.innerHTML = '';
      if (!lista.length) { box.appendChild(el('p', 'cita-nota', 'Ya no hay horarios libres este día. Elige otro día.')); return; }
      lista.forEach(function (h) {
        var b = el('button', 'pill', h); b.type = 'button'; b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', function () {
          citaSel.hora = h;
          Array.prototype.forEach.call(box.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        });
        box.appendChild(b);
      });
    }
    fetch(CITA_URL + '?fecha=' + encodeURIComponent(fecha) + '&propiedad=' + encodeURIComponent(citaInteres()))
      .then(function (r) { if (!r.ok) throw new Error(); return r.json(); })
      .then(function (j) {
        var libres = (j && j.horas) || [];
        pintar(todas.filter(function (h) { return libres.indexOf(h) > -1; }));
      })
      .catch(function () { pintar(todas); });
  }
  /* Propiedad (y espacio) tal como llega a JEGAR One, para saber qué asesor la atiende */
  function citaInteres() {
    var u = document.getElementById('cita-unidad').value;
    return u ? citaSel.propiedad + ' - ' + u : citaSel.propiedad;
  }
  var citaDiaActual = null;
  document.getElementById('cita-unidad').addEventListener('change', function () {
    if (citaDiaActual) pintarHoras(citaDiaActual.dia, citaDiaActual.esHoy, citaDiaActual.fecha);
  });
  function pintarDias() {
    var box = document.getElementById('cita-dias'); box.innerHTML = '';
    citaSel.fecha = ''; citaDiaActual = null;
    var hoy = ahoraLeon(), n = 0;
    for (var i = 0; i < 21 && n < 12; i++) {
      var d = new Date(Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate() + i));
      var dia = d.getUTCDay();
      if (!slotsDe(dia, i === 0).length) continue;
      n++;
      (function (d, dia, esHoy) {
        var iso = d.getUTCFullYear() + '-' + pad(d.getUTCMonth() + 1) + '-' + pad(d.getUTCDate());
        var b = el('button', 'pill'); b.type = 'button'; b.setAttribute('aria-pressed', 'false');
        b.appendChild(el('small', '', esHoy ? 'Hoy' : CITA_DIAS[dia]));
        b.appendChild(document.createTextNode(d.getUTCDate() + ' ' + CITA_MESES[d.getUTCMonth()]));
        b.addEventListener('click', function () {
          citaSel.fecha = iso;
          Array.prototype.forEach.call(box.children, function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
          citaDiaActual = { dia: dia, esHoy: esHoy, fecha: iso };
          pintarHoras(dia, esHoy, iso);
        });
        box.appendChild(b);
      })(d, dia, i === 0);
    }
    pintarHoras(null);
  }
  /* Sin propiedad elegida (página /agendar/): primero se elige la propiedad */
  var citaOpciones = [];
  $('cita-prop').addEventListener('change', function () {
    var p = citaOpciones[+this.value];
    if (p) llenarCita(p, true);
  });
  function abrirCita(p, opciones) {
    var campoP = $('cita-campo-prop'), selP = $('cita-prop');
    if (!p) {
      citaOpciones = (opciones || []).filter(function (x) { return x && x.nombre; });
      selP.innerHTML = '';
      selP.appendChild(new Option('Elige una propiedad', ''));
      citaOpciones.forEach(function (x, i) { selP.appendChild(new Option(x.nombre + (x.tipo ? ' — ' + x.tipo : ''), String(i))); });
      campoP.hidden = false;
      llenarCita({ nombre: '' }, false);
      $('cita-sub').textContent = 'Elige la propiedad, el día y la hora.';
    } else {
      campoP.hidden = true;
      llenarCita(p, false);
    }
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function llenarCita(p, soloPropiedad) {
    citaSel.propiedad = p.nombre || '';
    if (p.nombre) $('cita-sub').textContent = p.nombre + (p.direccion ? ' · ' + p.direccion : '');
    var campoU = document.getElementById('cita-campo-unidad'), selU = document.getElementById('cita-unidad');
    selU.innerHTML = '';
    var us = (p.locales || []).filter(function (u) { return u && u.nombre; });
    if (us.length > 1) {
      selU.appendChild(new Option('Cualquiera / no estoy seguro', ''));
      us.forEach(function (u) { selU.appendChild(new Option(u.nombre + (u.detalle ? ' — ' + u.detalle : ''), u.nombre)); });
      campoU.hidden = false;
    } else if (us.length === 1) {
      selU.appendChild(new Option(us[0].nombre, us[0].nombre));
      campoU.hidden = true;
    } else { campoU.hidden = true; }
    if (soloPropiedad) {
      /* Cambió la propiedad: las horas libres dependen de ella */
      if (citaDiaActual) pintarHoras(citaDiaActual.dia, citaDiaActual.esHoy, citaDiaActual.fecha);
      return;
    }
    citaErr.hidden = true;
    citaForm.hidden = false; citaOk.hidden = true;
    citaEnviar.disabled = false; citaEnviar.textContent = 'Confirmar cita';
    pintarDias();
  }
  function cerrarCita() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  Array.prototype.forEach.call(dlg.querySelectorAll('[data-cerrar]'), function (b) { b.addEventListener('click', cerrarCita); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) cerrarCita(); });
  function errorCita(t) { citaErr.textContent = t; citaErr.hidden = false; citaErr.scrollIntoView({ block: 'nearest' }); }
  citaForm.addEventListener('submit', function (e) {
    e.preventDefault();
    citaErr.hidden = true;
    var nombre = document.getElementById('cita-nombre').value.trim();
    var tel = document.getElementById('cita-tel').value.replace(/\D/g, '');
    var email = document.getElementById('cita-email').value.trim();
    if (nombre.length < 2) return errorCita('Escribe tu nombre.');
    if (tel.length < 10) return errorCita('Escribe tu teléfono a 10 dígitos.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return errorCita('Revisa tu correo.');
    if (!citaSel.fecha) return errorCita('Elige el día de tu cita.');
    if (!citaSel.hora) return errorCita('Elige la hora de tu cita.');
    if (!citaSel.propiedad) return errorCita('Elige la propiedad que quieres visitar.');
    if (!$('cita-acepto').checked) return errorCita('Para agendar, acepta el aviso de privacidad.');
    citaEnviar.disabled = true; citaEnviar.textContent = 'Enviando...';
    /* De dónde llegó la persona (anuncio, campaña), para medir qué publicidad trae citas */
    var atrib = MEDIR.atribucion();
    var cuerpo = {
      nombre: nombre, telefono: tel, email: email,
      propiedad: citaSel.propiedad, unidad: document.getElementById('cita-unidad').value,
      fecha: citaSel.fecha, hora: citaSel.hora,
      comentarios: document.getElementById('cita-com').value.trim(),
      website: document.getElementById('cita-web').value,
      acepta_privacidad: true,
      pagina: location.pathname
    };
    for (var k in atrib) if (Object.prototype.hasOwnProperty.call(atrib, k)) cuerpo[k] = atrib[k];
    fetch(CITA_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cuerpo)
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (res.j.ocupado && citaDiaActual) pintarHoras(citaDiaActual.dia, citaDiaActual.esHoy, citaDiaActual.fecha);
        if (!res.ok || !res.j.ok) throw new Error(res.j.error || 'No pudimos registrar tu cita.');
        /* Solo aquí (cita guardada de verdad) se avisa a Google Ads */
        try { MEDIR.citaOk({ telefono: tel, email: email, propiedad: citaSel.propiedad }); } catch (e2) {}
        var f = citaSel.fecha.split('-'), d = new Date(Date.UTC(+f[0], +f[1] - 1, +f[2]));
        document.getElementById('cita-ok-txt').textContent = citaSel.propiedad + ': ' + CITA_DIAS_L[d.getUTCDay()] + ' ' + (+f[2]) + ' ' + CITA_MESES[+f[1] - 1] + ' a las ' + citaSel.hora + ' h.';
        citaForm.hidden = true; citaOk.hidden = false; dlg.scrollTop = 0;
        citaForm.reset();
      })
      .catch(function (err) {
        citaEnviar.disabled = false; citaEnviar.textContent = 'Confirmar cita';
        errorCita((err && err.message && err.message !== 'Failed to fetch') ? err.message : 'No pudimos registrar tu cita. Intenta de nuevo o escríbenos por WhatsApp.');
      });
  });

  function btnCita(p, clase) {
    var b = el('button', clase); b.type = 'button';
    b.addEventListener('click', function () { abrirCita(p); });
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '20'); svg.setAttribute('height', '20'); svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); svg.setAttribute('stroke-width', '1.7');
    svg.setAttribute('stroke-linecap', 'round'); svg.setAttribute('stroke-linejoin', 'round'); svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9 15l2 2 4-4"/>';
    b.appendChild(svg);
    b.appendChild(document.createTextNode('Agendar cita'));
    return b;
  }

  /* Botón "Cómo llegar": abre Google Maps con la dirección */
  function linkMapa(direccion, clase) {
    var a = el('a', 'mapa-link ' + (clase || ''));
    var q = /guanajuato/i.test(direccion) ? direccion : direccion + ', Guanajuato, México';
    a.href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
    a.target = '_blank'; a.rel = 'noopener';
    a.appendChild(icon('i-pin', 18));
    a.appendChild(document.createTextNode('Cómo llegar'));
    return a;
  }

  /* Categorías (Habitacional / Comercial): etiqueta y filtros */
  function catsDe(p) {
    var c = String(p.categoria || '').toLowerCase();
    var r = [];
    if (c.indexOf('habitacional') > -1) r.push('Habitacional');
    if (c.indexOf('comercial') > -1) r.push('Comercial');
    return r;
  }
  function etiquetasCat(p) {
    var box = el('div', 'cat-tags');
    catsDe(p).forEach(function (c) { box.appendChild(el('span', 'cat-tag cat-' + c.toLowerCase(), c)); });
    return box;
  }
  function filtros(listaEl, items) {
    var hayHab = items.some(function (x) { return x.cats.indexOf('Habitacional') > -1; });
    var hayCom = items.some(function (x) { return x.cats.indexOf('Comercial') > -1; });
    if (!hayHab || !hayCom) return;
    var barra = el('div', 'filtros');
    barra.setAttribute('role', 'group');
    barra.setAttribute('aria-label', 'Filtrar por tipo');
    var ops = [['Todas', ''], ['Habitacionales', 'Habitacional'], ['Comerciales', 'Comercial']];
    var botones = [];
    ops.forEach(function (op) {
      var b = el('button', 'filtro', op[0]);
      b.type = 'button';
      b.setAttribute('aria-pressed', op[1] === '' ? 'true' : 'false');
      b.setAttribute('data-cat', op[1]);
      b.addEventListener('click', function () {
        botones.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        items.forEach(function (x) { x.el.hidden = op[1] !== '' && x.cats.indexOf(op[1]) === -1; });
      });
      botones.push(b);
      barra.appendChild(b);
    });
    listaEl.parentNode.insertBefore(barra, listaEl);
  }

  /* Portafolio: solo foto y dirección */
  var pfLista = document.getElementById('lista-portafolio');
  var pfDatos = (pfLista && typeof PORTAFOLIO !== 'undefined' && PORTAFOLIO) ? PORTAFOLIO : [];
  if (pfLista && !pfDatos.length) { document.getElementById('propiedades').hidden = true; }
  var pfItems = [];
  pfDatos.forEach(function (p) {
    var c = el('article', 'pf');
    var media = el('div', 'pf-media');
    if (p.foto) {
      media.appendChild(foto(p.foto, 'Fachada de ' + p.nombre, 'small', ''));
    } else {
      var ph = el('div', 'ph small pf-pronto');
      var lg = el('img'); lg.src = '/img/logo-mark-black.png'; lg.alt = ''; lg.width = 56; lg.height = 56;
      ph.appendChild(lg); ph.appendChild(el('span', '', 'Foto próximamente'));
      media.appendChild(ph);
    }
    if (p.etiqueta) {
      var et = el('div', 'cat-tags');
      et.appendChild(el('span', 'cat-tag cat-nuevo', p.etiqueta));
      media.appendChild(et);
    } else {
      media.appendChild(etiquetasCat(p));
    }
    c.appendChild(media);
    pfItems.push({ el: c, cats: catsDe(p) });
    c.appendChild(el('h3', '', p.nombre || ''));
    if (p.direccion) {
      var d = el('div', 'prop-dir');
      d.appendChild(icon('i-pin', 20));
      d.appendChild(el('p', '', p.direccion));
      c.appendChild(d);
      c.appendChild(linkMapa(p.direccion));
    }
    pfLista.appendChild(c);
  });
  if (pfLista) filtros(pfLista, pfItems);

  /* Galería única: foto grande con flechas + miniaturas (máx. 6) */
  function galeria(fotos, alt, marcadorTxt) {
    fotos = fotos.map(ruta);
    var box = el('div', 'prop-photo');
    if (!fotos.length) { box.appendChild(marcador('big', marcadorTxt)); return { el: box, ir: function () {} }; }
    var marco = el('div', 'gal-marco');
    var grande = el('img', 'gal-grande'); grande.src = fotos[0]; grande.alt = alt; grande.loading = 'lazy';
    marco.appendChild(grande);
    box.appendChild(marco);
    var actual = 0, botones = [], contador = null;
    function ir(i) {
      actual = (i + fotos.length) % fotos.length;
      grande.src = fotos[actual];
      botones.forEach(function (x, j) { x.className = j === actual ? 'on' : ''; });
      if (contador) contador.textContent = (actual + 1) + ' / ' + fotos.length;
    }
    if (fotos.length > 1) {
      var prev = el('button', 'gal-flecha gal-prev', '‹'); prev.type = 'button'; prev.setAttribute('aria-label', 'Foto anterior');
      var next = el('button', 'gal-flecha gal-next', '›'); next.type = 'button'; next.setAttribute('aria-label', 'Foto siguiente');
      prev.addEventListener('click', function () { ir(actual - 1); });
      next.addEventListener('click', function () { ir(actual + 1); });
      contador = el('span', 'gal-contador', '1 / ' + fotos.length);
      marco.appendChild(prev); marco.appendChild(next); marco.appendChild(contador);
      var tira = el('div', 'gal-thumbs');
      fotos.slice(0, 6).forEach(function (ruta, i) {
        var bt = el('button', i === 0 ? 'on' : ''); bt.type = 'button'; bt.setAttribute('aria-label', 'Ver foto ' + (i + 1));
        var t = el('img'); t.src = ruta; t.alt = ''; t.loading = 'lazy'; bt.appendChild(t);
        bt.addEventListener('click', function () { ir(i); });
        botones.push(bt);
        tira.appendChild(bt);
      });
      box.appendChild(tira);
    }
    return { el: box, ir: ir };
  }

  var lista = document.getElementById('lista-propiedades');
  var todas = (typeof PROPIEDADES !== 'undefined' && PROPIEDADES) ? PROPIEDADES : [];
  /* En una página por tipo (ej. /consultorios/) solo van las propiedades de ese tipo.
     Una propiedad puede forzar en qué páginas sale con  paginas: ["consultorios"]  */
  function vaEnPagina(p) {
    if (!PAGINA || !PAGINA.clave) return true;
    if (p.paginas && p.paginas.length) return p.paginas.indexOf(PAGINA.clave) > -1;
    return PAGINA.incluye ? PAGINA.incluye(p) : true;
  }
  var datos = todas.filter(vaEnPagina);
  if (lista && !datos.length) { document.getElementById('disponibilidad').hidden = true; }
  if (!lista) datos = [];
  /* Zona: se toma de la dirección ("Col. Arbide" o "Zona Centro") */
  function zonaDe(p) {
    var d = String(p.direccion || '');
    if (/zona centro/i.test(d)) return 'Zona Centro';
    var m = /Col\.\s*([^,]+)/i.exec(d);
    return m ? m[1].trim() : '';
  }
  function slug(t) { return String(t).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/^(la|el|los|las|zona)\s+/, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  /* Precio más bajo que aparece en el texto ("Desde $3,000 mensuales" -> 3000) */
  function precioDe(p) {
    var nums = [];
    [p.precio].concat((p.locales || []).map(function (u) { return u && u.detalle; })).forEach(function (t) {
      String(t || '').replace(/\$\s?([\d,]+)/g, function (_, n) { nums.push(+n.replace(/,/g, '')); });
    });
    return nums.length ? Math.min.apply(null, nums) : 0;
  }
  /* Etiqueta con fecha de fin (etiqueta_vence: "2026-10-31"): se oculta sola al día siguiente */
  function etiquetaVigente(p) {
    if (!p.etiqueta) return '';
    if (!p.etiqueta_vence) return p.etiqueta;
    var hoy = new Date(Date.now() - 6 * 3600 * 1000).toISOString().slice(0, 10);
    return hoy <= p.etiqueta_vence ? p.etiqueta : '';
  }
  var dispItems = [];
  datos.forEach(function (p) {
    var art = el('article', 'prop');
    art.id = 'prop-' + slug(p.nombre || '');
    dispItems.push({ el: art, cats: catsDe(p), zona: zonaDe(p), precio: precioDe(p) });

    /* Todas las fotos en una sola galería: primero la propiedad, luego cada espacio */
    var fotos = [];
    function sumar(r) { if (r && fotos.indexOf(r) === -1) fotos.push(r); }
    (Array.isArray(p.fachada) ? p.fachada : [p.fachada]).forEach(sumar);
    var unidades = (p.locales || []).map(function (u) {
      var fs = (u.fotos && u.fotos.length) ? u.fotos : (u.foto ? [u.foto] : []);
      var inicio = -1;
      fs.forEach(function (r) { if (!r) return; sumar(r); if (inicio === -1) inicio = fotos.indexOf(r); });
      return { u: u, inicio: inicio };
    });
    var gal = galeria(fotos, 'Foto de ' + p.nombre, '[FOTO DE ' + String(p.nombre || '').toUpperCase() + ']');
    art.appendChild(gal.el);

    var der = el('div', 'prop-info');
    var cab = el('div');
    if (catsDe(p).length) cab.appendChild(etiquetasCat(p));
    var etq = etiquetaVigente(p);
    if (etq) cab.appendChild(el('span', 'prop-badge', etq));
    if (p.tipo) cab.appendChild(el('span', 'prop-tipo', p.tipo));
    cab.appendChild(el('h3', '', p.nombre || ''));
    if (p.precio) cab.appendChild(el('p', 'prop-precio', p.precio));
    der.appendChild(cab);

    if (p.direccion) {
      var dir = el('div', 'prop-dir');
      dir.appendChild(icon('i-pin', 22));
      dir.appendChild(el('p', '', p.direccion));
      der.appendChild(dir);
      der.appendChild(linkMapa(p.direccion));
    }

    if (p.descripcion) der.appendChild(el('p', 'prop-desc', p.descripcion));
    if (p.incluye && p.incluye.length) {
      var inc = el('div', 'prop-inc');
      inc.appendChild(el('h4', 'units-title', 'Incluye'));
      var ul = el('ul');
      p.incluye.forEach(function (t) { ul.appendChild(el('li', '', t)); });
      inc.appendChild(ul);
      der.appendChild(inc);
    }

    /* Espacios disponibles: lista compacta; "Ver fotos" mueve la galería */
    if (unidades.length) {
      var bloque = el('div', 'unidades');
      bloque.appendChild(el('h4', 'units-title', p.titulo_unidades || 'Espacios disponibles'));
      unidades.forEach(function (x) {
        var fila = el('div', 'unidad');
        var txt = el('div', 'unidad-txt');
        txt.appendChild(el('b', '', x.u.nombre || ''));
        if (x.u.detalle) txt.appendChild(el('span', '', x.u.detalle));
        fila.appendChild(txt);
        if (x.inicio > -1 && fotos.length > 1) {
          var vf = el('button', 'unidad-ver', 'Ver fotos'); vf.type = 'button';
          vf.addEventListener('click', function () { gal.ir(x.inicio); gal.el.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
          fila.appendChild(vf);
        }
        bloque.appendChild(fila);
      });
      der.appendChild(bloque);
    }

    var a = el('a', 'btn btn-wa');
    a.href = wa('Hola, me interesa obtener información sobre ' + (p.tipo ? p.tipo.toLowerCase() + ' de ' : '') + p.nombre + '.');
    a.target = '_blank'; a.rel = 'noopener';
    a.appendChild(icon('i-wa', 22));
    a.appendChild(document.createTextNode('Preguntar por ' + p.nombre));
    var acciones = el('div', 'prop-acciones');
    acciones.appendChild(a);
    acciones.appendChild(btnCita(p, 'btn btn-light'));
    der.appendChild(acciones);

    art.appendChild(der);
    lista.appendChild(art);
  });
  if (lista && !PAGINA) filtros(lista, dispItems);
  if (lista && PAGINA) filtrosPagina(lista, dispItems);

  /* Filtros de las páginas por tipo: zona y presupuesto. Los links con #zona
     (ej. /consultorios/#arbide) abren la página ya filtrada. */
  function filtrosPagina(listaEl, items) {
    var zonas = [];
    items.forEach(function (x) { if (x.zona && zonas.indexOf(x.zona) === -1) zonas.push(x.zona); });
    var estadoF = { zona: '', max: 0 };
    var vacio = el('p', 'sin-resultados', 'No hay espacios con ese filtro. Escríbenos por WhatsApp y te decimos qué hay disponible hoy.');
    vacio.hidden = true;
    function aplicar() {
      var visibles = 0;
      items.forEach(function (x) {
        var ok = (!estadoF.zona || x.zona === estadoF.zona) && (!estadoF.max || !x.precio || x.precio <= estadoF.max);
        x.el.hidden = !ok; if (ok) visibles++;
      });
      vacio.hidden = visibles > 0;
    }
    var barra = el('div', 'filtros filtros-pagina');
    if (zonas.length > 1) {
      var gz = el('div', 'filtro-grupo'); gz.setAttribute('role', 'group'); gz.setAttribute('aria-label', 'Filtrar por zona');
      var bz = [];
      [''].concat(zonas).forEach(function (z) {
        var b = el('button', 'filtro', z || 'Todas las zonas'); b.type = 'button';
        b.setAttribute('aria-pressed', z ? 'false' : 'true'); b.setAttribute('data-zona', slug(z));
        b.addEventListener('click', function () {
          estadoF.zona = z;
          bz.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
          aplicar();
        });
        bz.push(b); gz.appendChild(b);
      });
      barra.appendChild(gz);
    }
    var precios = items.map(function (x) { return x.precio; }).filter(Boolean);
    if (precios.length > 1) {
      var lbl = el('label', 'filtro-precio');
      lbl.appendChild(el('span', '', 'Presupuesto'));
      var sel = el('select', 'field');
      sel.appendChild(new Option('Cualquiera', '0'));
      (PAGINA.topes || [3000, 4000, 5000, 7000, 10000]).forEach(function (t) {
        if (t >= Math.min.apply(null, precios)) sel.appendChild(new Option('Hasta $' + t.toLocaleString('es-MX'), String(t)));
      });
      sel.addEventListener('change', function () { estadoF.max = +sel.value; aplicar(); });
      lbl.appendChild(sel);
      barra.appendChild(lbl);
    }
    if (barra.children.length) listaEl.parentNode.insertBefore(barra, listaEl);
    listaEl.parentNode.insertBefore(vacio, listaEl.nextSibling);
    var h = slug(decodeURIComponent((location.hash || '').replace('#', '')));
    if (h) {
      var bzona = barra.querySelector('[data-zona="' + h + '"]');
      if (bzona) { bzona.click(); setTimeout(function () { listaEl.scrollIntoView({ block: 'start' }); }, 60); }
    }
  }

  /* Página /agendar/ y botones "Agendar visita" sin propiedad: abren el formulario con lista */
  /* (Casa Magnolia y otras de renta por noche no se agendan aquí) */
  var opcionesAgenda = (datos.length ? datos : todas).filter(function (p) { return !/noche/i.test(p.precio || ''); });
  var abrirSinProp = document.querySelectorAll('[data-agendar]');
  for (var ag = 0; ag < abrirSinProp.length; ag++) {
    abrirSinProp[ag].addEventListener('click', function (ev) { ev.preventDefault(); abrirCita(null, opcionesAgenda); });
  }
  if (PAGINA && PAGINA.abrirAgenda) abrirCita(null, opcionesAgenda);

  /* Links directos: grupojegar.com/#disponibilidad-comercial o -habitacional */
  (function () {
    var h = (location.hash || '').toLowerCase();
    var cat = /comercial/.test(h) ? 'Comercial' : (/habitacional/.test(h) ? 'Habitacional' : '');
    if (!cat || h.indexOf('disponibilidad') === -1) return;
    var bf = document.querySelector('#disponibilidad .filtro[data-cat="' + cat + '"]');
    if (bf) bf.click();
    setTimeout(function () { document.getElementById('disponibilidad').scrollIntoView(); }, 50);
  })();

  /* Botones de Servicios: llevan a Disponibilidad ya filtrada */
  var irFiltro = document.querySelectorAll('[data-ir-filtro]');
  for (var q = 0; q < irFiltro.length; q++) {
    irFiltro[q].addEventListener('click', function (ev) {
      var cat = this.getAttribute('data-ir-filtro');
      var bf = document.querySelector('#disponibilidad .filtro[data-cat="' + cat + '"]');
      if (bf) bf.click();
      var hay = dispItems.some(function (x) { return x.cats.indexOf(cat) > -1; });
      if (!hay) return;
      ev.preventDefault();
      document.getElementById('disponibilidad').scrollIntoView({ behavior: 'smooth' });
    });
  }

/* Terrazas: se leen de TERRAZAS en propiedades.js (WhatsApp de eventos aparte) */
var NUM_EVENTOS = '524772858643';
var tzLista = document.getElementById('lista-terrazas');
var tzDatos = (tzLista && typeof TERRAZAS !== 'undefined' && TERRAZAS) ? TERRAZAS : [];
if (tzLista && !tzDatos.length) {
document.getElementById('terrazas').hidden = true;
var btnTz = document.getElementById('btn-terrazas'); if (btnTz) btnTz.hidden = true;
var navTz = document.getElementById('nav-terrazas'); if (navTz) navTz.hidden = true;
}
tzDatos.forEach(function (t) {
var art = el('article', 'tz');
var top = el('div', 'tz-top');

var gal = el('div', 'tz-gal');
var fotos = (t.fotos || []).filter(Boolean).map(ruta);
if (fotos.length) {
var grande = el('img'); grande.src = fotos[0]; grande.alt = 'Foto de ' + t.nombre; grande.loading = 'lazy';
gal.appendChild(grande);
if (fotos.length > 1) {
var tira = el('div', 'gal-thumbs');
fotos.forEach(function (ruta, i) {
var b = el('button', i === 0 ? 'on' : ''); b.type = 'button'; b.setAttribute('aria-label', 'Ver foto ' + (i + 1));
var im = el('img'); im.src = ruta; im.alt = ''; im.loading = 'lazy'; b.appendChild(im);
b.addEventListener('click', function () {
grande.src = ruta;
Array.prototype.forEach.call(tira.children, function (x) { x.className = ''; });
b.className = 'on';
});
tira.appendChild(b);
});
gal.appendChild(tira);
}
} else {
gal.appendChild(marcador('big', '[FOTO DE ' + String(t.nombre || '').toUpperCase() + ']'));
}
top.appendChild(gal);

var info = el('div', 'tz-info');
var cab = el('div');
if (t.tipo) cab.appendChild(el('span', 'tz-tipo', t.tipo));
cab.appendChild(el('h3', '', t.nombre || ''));
if (t.capacidad) cab.appendChild(el('span', 'tz-cap', t.capacidad));
info.appendChild(cab);
if (t.descripcion) info.appendChild(el('p', 'tz-desc', t.descripcion));

if (t.ideal_para && t.ideal_para.length) {
var ip = el('div');
ip.appendChild(el('h4', 'tz-sub', 'Ideal para'));
var ch = el('ul', 'chips');
t.ideal_para.forEach(function (x) { ch.appendChild(el('li', '', x)); });
ip.appendChild(ch);
info.appendChild(ip);
}

if (t.precios && t.precios.length) {
var pr = el('div');
pr.appendChild(el('h4', 'tz-sub', 'Costos'));
var g = el('div', 'tz-precios');
t.precios.forEach(function (x) {
var c = el('div', 'tz-precio');
c.appendChild(el('span', '', x.dias || ''));
c.appendChild(el('b', '', x.precio || ''));
g.appendChild(c);
});
pr.appendChild(g);
info.appendChild(pr);
}

if (t.incluye && t.incluye.length) {
var inc = el('div', 'tz-inc');
inc.appendChild(el('h4', 'tz-sub', 'Todas las tarifas incluyen'));
var ul = el('ul');
t.incluye.forEach(function (x) { ul.appendChild(el('li', '', x)); });
inc.appendChild(ul);
info.appendChild(inc);
}

if (t.direccion) {
var dir = el('div', 'prop-dir');
dir.appendChild(icon('i-pin', 22));
dir.appendChild(el('p', '', t.direccion));
info.appendChild(dir);
info.appendChild(linkMapa(t.direccion));
}

var a = el('a', 'btn btn-wa');
a.href = 'https://wa.me/' + NUM_EVENTOS + '?text=' + encodeURIComponent('Hola, quiero cotizar un evento en ' + t.nombre + '.');
a.target = '_blank'; a.rel = 'noopener';
a.appendChild(icon('i-wa', 22));
a.appendChild(document.createTextNode('Cotizar mi evento'));
info.appendChild(a);
top.appendChild(info);
art.appendChild(top);

if (t.banquetes && t.banquetes.length) {
var ban = el('div', 'tz-ban');
ban.appendChild(el('h4', 'tz-sub', t.titulo_banquetes || 'Banquetes'));
if (t.nota_banquetes) ban.appendChild(el('p', '', t.nota_banquetes));
var ms = el('div', 'tz-menus');
t.banquetes.forEach(function (m) {
var c = el('div', 'tz-menu');
c.appendChild(el('h4', '', m.nombre || ''));
var pp = el('p', 'pp');
pp.appendChild(document.createTextNode('Desde '));
pp.appendChild(el('b', '', m.precio || ''));
pp.appendChild(document.createTextNode(' por persona'));
c.appendChild(pp);
if (m.incluye && m.incluye.length) {
var u = el('ul');
m.incluye.forEach(function (x) { u.appendChild(el('li', '', x)); });
c.appendChild(u);
}
ms.appendChild(c);
});
ban.appendChild(ms);
art.appendChild(ban);
}

tzLista.appendChild(art);
});
})();
