
// Espera a que todo el contenido de la página se cargue.
document.addEventListener('DOMContentLoaded', function() {

    /* =============================================
       FUNCIONALIDAD DEL MENÚ DE CATEGORÍAS
       ============================================= */

    // 1. Selecciona el botón y el menú por sus IDs correctos.
    const botonCategorias = document.getElementById('btn-categorias');
    const menuCategorias = document.getElementById('menu-categorias');

    // Se asegura de que el código solo se ejecute si el menú existe en la página.
    if (botonCategorias && menuCategorias) {
        
        // 2. Añade el evento 'click' al botón.
        botonCategorias.addEventListener('click', function(event) {
            // Previene que el enlace '#' recargue la página.
            event.preventDefault(); 
            
            // 3. Añade o quita la clase 'show' para mostrar/ocultar el menú.
            menuCategorias.classList.toggle('show');
        });

        // 4. Cierra el menú si se hace clic en cualquier otro lugar de la página.
        window.addEventListener('click', function(event) {
            // Si el clic NO fue en el área del botón...
            if (!botonCategorias.contains(event.target)) {
                // ...entonces quita la clase 'show' para ocultar el menú.
                menuCategorias.classList.remove('show');
            }
        });
    }


    /* =============================================
       FUNCIONALIDAD DEL BOTÓN DE SUSCRIPCIÓN
       ============================================= */
    const subscribeBtn = document.getElementById('subscribe-button');
    const subscribeMsg = document.getElementById('subscribe-message');

    if (subscribeBtn && subscribeMsg) {
        subscribeBtn.addEventListener('click', function() {
            // Cambiamos el texto del párrafo.
            subscribeMsg.textContent = '¡Gracias por suscribirte! 🎉';
            // Cambiamos el color para más feedback visual.
            subscribeMsg.style.color = '#33FF57';
        });
    }

});