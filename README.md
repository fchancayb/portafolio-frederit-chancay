# Portafolio Personal

## Estudiante
Frederit F. Chancay

## Descripción
Portafolio personal desarrollado con HTML y CSS como parte de la Actividad integradora 1. Presenta información del estudiante, habilidades, proyectos y una sección de contacto.

## Tecnologías utilizadas
- HTML5
- CSS3
- JavaScript
- GitHub

## Instrucciones para visualizar el proyecto
1. Clonar o descargar este repositorio.
2. Abrir el archivo `index.html` en un navegador web.

Alternativamente, el sitio está publicado con GitHub Pages:
https://fchancayb.github.io/portafolio-frederit-chancay/

## Captura de pantalla
_Pendiente._

---

## Actividad Integradora 2

### Descripción
Continuando el portafolio desarrollado en la Actividad Integradora 1, en esta segunda entrega se incorporó JavaScript para volver el sitio más dinámico e interactivo, manteniendo la misma estructura HTML/CSS ya existente.

### Nuevas funcionalidades implementadas con JavaScript
- **Archivo externo `script.js`**: todo el código JavaScript vive en este archivo, enlazado al final de `index.html`, sin código embebido en el HTML.
- **Modal de habilidades**: al hacer clic en una habilidad se muestra un modal con su descripción (se cierra con el botón ×, clic fuera del modal o tecla `Escape`).
- **Proyectos expandibles**: botón "Ver más / Ver menos" que muestra u oculta proyectos adicionales en la sección Proyectos.
- **Modo oscuro**: botón en la barra de navegación que alterna entre modo claro y oscuro, cambiando estilos de toda la página (fondo, texto, tarjetas, formulario y modal).
- **Validación del formulario de contacto**: al enviar el formulario se valida que los campos Nombre, Correo electrónico y Mensaje no estén vacíos. Si falta algún dato se muestra un mensaje de error; si todo es correcto se muestra un mensaje de confirmación y el formulario se limpia.
- **Persistencia con `localStorage`**: la preferencia de modo claro/oscuro se guarda en `localStorage` y se recupera automáticamente al recargar o volver a abrir la página, aplicando el tema guardado.

### Tecnologías utilizadas (actualizadas)
- HTML5
- CSS3
- JavaScript (DOM, eventos, `localStorage`)
- GitHub

### Instrucciones para ejecutar el proyecto
1. Clonar o descargar este repositorio.
2. Abrir el archivo `index.html` en un navegador web (no requiere instalación ni dependencias).
3. Probar la interactividad: hacer clic en una habilidad, expandir proyectos, alternar el modo oscuro y enviar el formulario de contacto.

Alternativamente, el sitio está publicado con GitHub Pages:
https://fchancayb.github.io/portafolio-frederit-chancay/

### Captura de pantalla
![Portafolio funcionando](Portafolio%20funcionando.png)
