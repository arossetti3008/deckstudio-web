# Configuración del Google Apps Script — Formulario de Contacto

## Paso 1: Crear el Google Sheet

1. Andá a [Google Sheets](https://sheets.google.com) con tu cuenta `arossetti3008@gmail.com`
2. Creá una hoja nueva llamada **"DeckStudio - Contacto"**
3. En la **Fila 1** (encabezados), escribí:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Timestamp | Nombre | Email | Teléfono | Empresa | Mensaje |

## Paso 2: Abrir Apps Script

1. En el Google Sheet, andá a **Extensiones → Apps Script**
2. Se abre el editor de código
3. Borrá todo el contenido por defecto

## Paso 3: Pegar el siguiente código

Copiá y pegá **exactamente** este código en el editor de Apps Script:

```javascript
// ─── CONFIGURACIÓN ──────────────────────────
var NOTIFICATION_EMAIL = 'arossetti3008@gmail.com';
var SHEET_NAME = 'Hoja 1'; // Nombre de la hoja (pestaña) en tu spreadsheet

// ─── HANDLER POST ───────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    var timestamp = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

    // Agregar fila con timestamp
    sheet.appendRow([
      timestamp,
      data.nombre || '',
      data.email || '',
      data.telefono || '',
      data.empresa || '',
      data.mensaje || ''
    ]);

    // Enviar email de notificación
    var subject = 'Nuevo contacto DeckStudio: ' + data.nombre;
    var body = 'Nuevo mensaje desde el formulario de contacto!\n\n'
      + 'Nombre:    ' + data.nombre + '\n'
      + 'Email:     ' + data.email + '\n'
      + 'Telefono:  ' + (data.telefono || 'No especificado') + '\n'
      + 'Empresa:   ' + (data.empresa || 'No especificada') + '\n\n'
      + 'Mensaje:\n' + data.mensaje + '\n\n'
      + 'Enviado desde: deckstudio.com.ar\n'
      + 'Fecha: ' + timestamp;

    MailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ─── HANDLER GET (para testear que funciona) ─
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'DeckStudio Contact API activa' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Paso 4: Deploy como Web App

1. Hacé clic en **Implementar → Nueva implementación**
2. En "Tipo", seleccioná **Aplicación web**
3. Configurá:
   - **Descripción**: `Formulario de contacto DeckStudio`
   - **Ejecutar como**: `Yo (arossetti3008@gmail.com)`
   - **Quién tiene acceso**: `Cualquier persona`
4. Hacé clic en **Implementar**
5. Si pide permisos, autorizá el acceso (revisá tu cuenta, etc.)
6. **Copiá la URL** que te da (tiene este formato):
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

## Paso 5: Configurar el Frontend

1. Abrí el archivo `.env` en la carpeta `Frontend/`
2. Pegá la URL del paso anterior:
   ```
   VITE_FORM_ENDPOINT=https://script.google.com/macros/s/AKfycb.../exec
   ```
3. Reiniciá el server de desarrollo (`npm run dev`)

## Paso 6: Probar

1. Abrí la web en http://localhost:5173
2. Scrolleá hasta la sección "Contacto"
3. Completá el formulario con datos de prueba
4. Verificá que:
   - ✅ Los datos aparecen en el Google Sheet
   - ✅ Te llega un email de notificación
   - ✅ El formulario muestra el mensaje de éxito

## Troubleshooting

**"El formulario no está configurado aún"**
→ Verificá que `VITE_FORM_ENDPOINT` tenga la URL correcta en `.env`

**Error de CORS**
→ Asegurate de que el deployment sea como "Cualquier persona" (Anyone)

**No llega el email**
→ Revisá la pestaña spam. Google puede bloquear el primer email. Autorizá desde Apps Script.

**Si necesitás actualizar el script**
→ En Apps Script, hacé clic en **Implementar → Gestionar implementaciones → editar → Nueva versión** y volvé a implementar.
