function cambiarImagen() {
    var imagen = document.getElementById("imagen");
    
    // Cambiar la imagen cuando se hace clic
    if (imagen.src.includes("Bow_Lake_beim_Icefields_Parkway.jpg")) {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Opal_Pool_YNP2_filtered_noise.jpg/1280px-Opal_Pool_YNP2_filtered_noise.jpg";
    } else {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bow_Lake_beim_Icefields_Parkway.jpg/1920px-Bow_Lake_beim_Icefields_Parkway.jpg";
    }
}

// Función para cambiar el texto de bienvenida
function cambiarTexto() {
    var nombre = document.getElementById("nombreUsuario").value;
    var textoUsuario = document.getElementById("textoUsuario");
    if (nombre) {
        textoUsuario.textContent = "¡Hola, " + nombre + "!";
    } else {
        textoUsuario.textContent = "¡Hola, visitante!";
    }
}

// Movimiento del cuadrado
var cuadrado = document.getElementById("cuadrado");
var posX = 0;
var velocidad = 2; // Velocidad del movimiento en píxeles

function moverCuadrado() {
    posX += velocidad;
    cuadrado.style.left = posX + 'px';

    // Si el cuadrado llega al borde derecho de la pantalla, vuelve al inicio
    if (posX > window.innerWidth) {
        posX = -50; // Comienza desde fuera de la pantalla a la izquierda
    }

    // Llamamos la función repetidamente
    requestAnimationFrame(moverCuadrado);
}

// Iniciar el movimiento del cuadrado
moverCuadrado();
