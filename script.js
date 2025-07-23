
// Espera a que todo el contenido de la página se cargue.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Selecciona el botón y el menú usando sus IDs.
    const botonDepartamentos = document.getElementById('btn-departamentos');
    const menuDepartamentos = document.getElementById('menu-departamentos');

    // 2. Añade un "escuchador" para el evento 'clic' en el botón.
    botonDepartamentos.addEventListener('click', function(event) {
        // Previene que el enlace '#' recargue la página.
        event.preventDefault(); 
        
        // 3. Añade o quita la clase 'show' al menú.
        // .toggle() es un atajo que hace exactamente eso.
        menuDepartamentos.classList.toggle('show');
    });

    // Opcional: Cierra el menú si se hace clic en cualquier otro lugar de la página.
    window.addEventListener('click', function(event) {
        // Si el clic NO fue en el botón de departamentos...
        if (!botonDepartamentos.contains(event.target)) {
            // ...entonces quita la clase 'show' para ocultar el menú.
            menuDepartamentos.classList.remove('show');
        }
    });
});