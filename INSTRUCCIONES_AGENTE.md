# Instrucciones para el Agente de Desarrollo (Development Agent)

Hola Agente. Estás configurando una nueva instancia de este proyecto (Dashboard + Landing Page + Sincronización de Master Plan 360) para otro cliente. La base de datos de Supabase, las tablas y el usuario administrador ya han sido creados y configurados por el desarrollador principal.

Tu tarea como agente es inicializar la aplicación local y verificar el correcto funcionamiento. Realiza los siguientes pasos:

---

## 1. Instalar Dependencias del Backend
Navega al directorio del backend e instala las dependencias de Node.js:
1. Abre una terminal.
2. Ejecuta:
   ```bash
   cd admin/backend
   npm install
   ```

---

## 2. Configurar Variables de Entorno (`.env`)
Asegúrate de que exista un archivo `.env` en la raíz del proyecto. Este archivo debe contener las credenciales de la nueva base de datos de Supabase configuradas previamente por el usuario:
```env
SUPABASE_URL=https://<NUEVO-PROYECTO-ID>.supabase.co
SUPABASE_KEY=<SERVICE-ROLE-O-API-KEY-DE-SUPABASE>
SECRET_KEY=clave_secreta_para_validar_de_32_caracteres
```

---

## 3. Adaptar Rutas y Estructura del XML (`modifyXML.js`)
Antes de iniciar el servidor, debes verificar que el parser del backend apunte correctamente al nuevo archivo `pano.xml` y reconozca sus estados. Abre `admin/backend/helpers/modifyXML.js` y revisa lo siguiente:

1. **Ruta del XML (`xmlFilePath`)**:
   Por defecto, el backend busca el archivo en:
   `const xmlFilePath = path.join(__dirname, '../../../masterplan/pano.xml');`
   Si has cambiado de directorio la carpeta `masterplan`, actualiza esta ruta para que apunte al archivo correcto.

2. **Detección del Nodo Principal (`getMainPanorama`)**:
   El código busca automáticamente el panorama inicial usando la función `getMainPanorama()`. Ésta comprueba qué nodo contiene hotspots con estilos de lote:
   ```javascript
   const lotSkinIds = ['ht_disponible', 'ht_reservado', 'ht_nodisponible', 'ht_promocion'];
   ```
   *   Asegúrate de revisar el nuevo `pano.xml` en un editor de texto. Si el nuevo tour 360 utiliza nombres de estados (skinids) diferentes para los lotes (por ejemplo, `ht_vendido` en vez de `ht_nodisponible`), actualiza el array `lotSkinIds` con los nombres exactos definidos en tu nuevo XML para que el sistema reconozca y extraiga los lotes correctamente.

---

## 4. Primer Inicio y Sincronización Automática de Lotes
1. Inicia el servidor de desarrollo local en `admin/backend/`:
   ```bash
   npm run dev
   ```
2. Al iniciar, el servidor detectará que la tabla `lots` en Supabase está vacía. Leerá automáticamente el archivo `masterplan/pano.xml`, extraerá todos los hotspots del nuevo plano y los **migrará automáticamente** a la tabla de Supabase.
3. Verifica que la consola indique:
   `Successfully migrated X lots from pano.xml to Supabase.`

---

## 5. Verificar Despliegue en Vercel
La aplicación utiliza una **arquitectura stateless** para ser compatible con Vercel. 
*   Verifica que el archivo `vercel.json` se encuentre en la raíz del proyecto para enrutar todas las peticiones estáticas y del API hacia el servidor Express.
*   En producción (Vercel), el archivo `pano.xml` se sirve dinámicamente mediante la ruta `GET /masterplan/pano.xml`.
