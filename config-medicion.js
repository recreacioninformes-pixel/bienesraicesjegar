/* ==========================================================================
   MEDICIÓN DE PUBLICIDAD (Google Ads y Google Analytics)

   Mientras estos campos estén vacíos "", la página NO carga nada de Google.
   Cuando Google Ads te dé los códigos, pégalos entre las comillas:

   googleAds          Etiqueta de Google Ads. Se ve así: "AW-123456789"
   conversionCita     Conversión "Cita agendada en sitio". Se ve así: "AW-123456789/AbCdEfGhIj"
   conversionWhatsApp Conversión "Clic en WhatsApp". Se ve así: "AW-123456789/KlMnOpQrSt"
   analytics          Google Analytics 4 (opcional). Se ve así: "G-ABC123XYZ"
   conversionesMejoradas  true = manda a Google el teléfono/correo de quien agenda,
                      cifrado, para medir mejor. Ponlo en true SOLO cuando lo
                      actives también en Google Ads y tu aviso de privacidad lo diga
                      (el de /privacidad/ ya lo menciona).

   Estos códigos no son secretos: Google los muestra en la página de todos modos.
   ========================================================================== */
var MEDICION = {
  googleAds: "AW-18533987435",
  conversionCita: "AW-18533987435/UNioCLG7x60dEOvo2IVF",
  conversionWhatsApp: "",
  analytics: "",
  conversionesMejoradas: false
};
