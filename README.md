# Acuatica-May-WEB

Este es el repositorio del proyecto **Acuatica-May-WEB**. Es una aplicación web frontend construida con HTML, CSS, JavaScript y empaquetada mediante Webpack.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `/css/` - Hojas de estilo del proyecto (ej. `style.css`).
- `/js/` - Lógica de la aplicación y scripts (`app.js`, `/vendor/`).
- `/img/` - Recursos de imágenes y logotipos (`logo.jpeg`, iconos).
- `index.html` - Página principal de la aplicación web.
- `404.html` - Página de error para rutas no encontradas.
- `package.json` - Archivo de configuración de npm que contiene las dependencias y scripts del proyecto.
- `webpack.*.js` - Archivos de configuración de Webpack para diferentes entornos (común, desarrollo, producción).
- `site.webmanifest` & `robots.txt` - Archivos de metadatos web para configuración de bots y PWA.

## Tecnologías Utilizadas

- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **Node.js & npm** (Gestor de paquetes)
- **Webpack** (Empaquetador de módulos)

## Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en un entorno local:

1. **Clonar el repositorio** (o descargar los archivos fuente):
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Acuatica-May-WEB
   ```

2. **Instalar las dependencias** (Asegúrate de tener [Node.js](https://nodejs.org/) instalado):
   ```bash
   npm install
   ```

3. **Ejecutar en entorno de desarrollo**:
   (Este comando dependerá de los scripts configurados en tu `package.json`, generalmente utiliza la configuración `webpack.config.dev.js`):
   ```bash
   npm run dev
   # o
   npm start
   ```

4. **Construir para producción**:
   (Generará los archivos optimizados usando `webpack.config.prod.js`):
   ```bash
   npm run build
   ```

## Licencia

Para más detalles sobre los términos de uso y distribución, consulta el archivo `LICENSE.txt` incluido en este repositorio.
