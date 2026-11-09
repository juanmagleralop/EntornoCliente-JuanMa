let caja = document.querySelector("#entrada");

// Detectar cuando escribes en la caja
caja.addEventListener("input", () => {
    let d = document.querySelector("#contenido");
    d.innerHTML = caja.value;
});

// Detectar cuando pasas el ratón por encima
caja.addEventListener("mouseover", (context) => {
    alert("Has pasado por encima. Coordenada X: "
        + context.clientX
        + " Coordenada Y: "
        + context.clientY);
});

// Seleccionar el HTML y el elemento donde mostrar coordenadas
let ventana = document.querySelector("html");
let cajilla = document.getElementById("verCordenada");

// Detectar el movimiento del ratón
ventana.addEventListener("mousemove", function(context) {
    cajilla.innerHTML = `Coordenadas: ${context.clientX}, ${context.clientY}`;
});

// Seleccionar la imagen
let imagen = document.getElementById("JuanMa");

// Detectar cuando pulsas una tecla
ventana.addEventListener("keydown", (context) => {
    let posicionX = parseInt(imagen.style.left || 0);
    let posicionY = parseInt(imagen.style.top || 0);

    if (context.key === "ArrowRight") {
        imagen.style.left = (posicionX + 10) + "px";
    }

    if (context.key === "ArrowLeft") {
        imagen.style.left = (posicionX - 10) + "px";
    }

    if (context.key === "ArrowUp") {
        imagen.style.top = (posicionY - 10) + "px";
    }

    if (context.key === "ArrowDown") {
        imagen.style.top = (posicionY + 10) + "px";
    }
});