# FútbolZone

## 📋 Descripción del Proyecto

FútbolZone es un portal web dedicado al mundo del fútbol, ofreciendo a los aficionados acceso a noticias actualizadas, clasificaciones de las principales ligas europeas, información de equipos destacados y un calendario de próximos partidos. El sitio está desarrollado con tecnologías web fundamentales (HTML, CSS y JavaScript) para proporcionar una experiencia de usuario fluida y atractiva.

## 🌟 Características Principales

- **Diseño Responsivo**: Adaptable a diferentes dispositivos (desktop, tablet y móvil)
- **Carrusel de Noticias**: Presentación dinámica de las últimas novedades del mundo del fútbol
- **Tablas de Clasificación**: Muestra la clasificación actualizada de las principales ligas europeas (Premier League, La Liga, Serie A)
- **Equipos Destacados**: Sección interactiva con información básica de equipos populares
- **Calendario de Partidos**: Visualización de los próximos encuentros más importantes
- **Estadísticas**: Datos generales de la temporada con animaciones de contadores
- **Navegación Intuitiva**: Menú adaptativo y navegación suave entre secciones

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del sitio
- **CSS3**: Estilos y animaciones personalizadas
- **JavaScript (ES6+)**: Interactividad y manipulación dinámica del DOM
- **API TheSportsDB**: Integración para obtener datos reales de clasificaciones
- **Google Fonts**: Tipografía Montserrat para mejorar la legibilidad
- **Intersection Observer API**: Para animaciones basadas en la visualización de elementos

## 📁 Estructura del Proyecto

```
futbolzone/
│
├── index.html          # Archivo principal del sitio
├── styles.css          # Estilos globales del sitio
├── script.js           # Funcionalidades JavaScript
│
├── img/                # Directorio de imágenes
│   ├── logos/          # Logos de equipos
│   └── ...             # Otras imágenes del sitio
│
└── noticias/           # Páginas de noticias individuales
    ├── noticia1.html
    ├── noticia2.html
    ├── noticia3.html
    ├── noticia4.html
    ├── noticia5.html
    └── noticias.css    # Estilos específicos para las páginas de noticias
```

## 🚀 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/futbolzone.git
   cd futbolzone
   ```

2. **Abrir el proyecto**:
   - Puedes abrir el archivo `index.html` directamente en tu navegador
   - O usar un servidor local como Live Server para VS Code

3. **Configuración de la API** (opcional):
   - El proyecto utiliza una clave de API gratuita para TheSportsDB
   - Si necesitas más funcionalidades, puedes registrarte en [TheSportsDB](https://www.thesportsdb.com/api.php) y actualizar la clave en `script.js`

## 📱 Características Responsivas

El sitio está optimizado para diferentes tamaños de pantalla:

- **Desktop (> 992px)**: Experiencia completa con todas las funcionalidades
- **Tablet (768px - 992px)**: Diseño adaptado con menú colapsable
- **Móvil (< 768px)**: Interfaz simplificada con elementos redimensionados y menú hamburguesa

## 🔄 Funcionalidades JavaScript

- **Menú Móvil**: Toggle para mostrar/ocultar opciones de navegación
- **Carrusel de Noticias**: Rotación automática con controles manuales
- **Navegación entre Tablas**: Sistema para alternar entre diferentes ligas
- **Animación de Estadísticas**: Contadores animados al hacer scroll
- **Efectos Hover**: Mejoras visuales en tarjetas de equipos y partidos
- **Scroll Suave**: Navegación fluida entre secciones del sitio

## 🎨 Paleta de Colores

- **Color Primario**: `#0a5c36` (Verde Oscuro)
- **Color Secundario**: `#e63946` (Rojo)
- **Color Acento**: `#ffd166` (Amarillo)
- **Color Oscuro**: `#1d3557` (Azul Oscuro)
- **Color Claro**: `#f1faee` (Blanco Hueso)
- **Color Gris**: `#8d99ae` (Gris Azulado)

## 🌐 API y Fuentes de Datos

- **TheSportsDB**: Utilizada para obtener datos actualizados de clasificaciones de ligas
- Los datos sobre equipos, partidos y estadísticas son ejemplos estáticos incluidos en el código

## 📸 Capturas de Pantalla
![image](https://github.com/user-attachments/assets/16d32239-40dd-4488-a814-b7a475cfb481)
![image](https://github.com/user-attachments/assets/2bd3018b-09a9-424a-8a9d-1df10f246c08)
![image](https://github.com/user-attachments/assets/425a4a0b-ac46-4f80-9ccb-e70de070d5e4)
![image](https://github.com/user-attachments/assets/16090be5-46a5-47e5-b9db-0369b249d606)
![image](https://github.com/user-attachments/assets/b2eb7293-efb8-456f-9bef-158bda90977d)
![image](https://github.com/user-attachments/assets/8ad6d5af-0cc4-4ae0-bd67-b7e4c76681cf)
![image](https://github.com/user-attachments/assets/03c2a3b2-aae0-4b68-af7e-84f63b7e348f)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.
