let ventana = document.querySelector("html");
let imagen = document.getElementById("mario");

let caminando = false; 

ventana.addEventListener("keydown", (context) => {

    let tecla = context.key.toLowerCase();
    let posicionX = parseInt(imagen.style.left || 0);
    let posicionY = parseInt(imagen.style.top || 0);

    let movimientos = ["a", "w", "s", "d"];

    // Solo cambiamos al GIF si todavía no estaba caminando
    if (movimientos.includes(tecla) && caminando === false) {
        imagen.src = "mario_caminando.gif";
        caminando = true;
    }

    if (tecla === "d") {
        imagen.style.left = (posicionX + 10) + "px";
    }

    if (tecla === "a") {
        imagen.style.left = (posicionX - 10) + "px";
    }

    if (tecla === "w") {
        imagen.style.top = (posicionY - 10) + "px";
    }

    if (tecla === "s") {
        imagen.style.top = (posicionY + 10) + "px";
    }

});

ventana.addEventListener("keyup", (context) => {
    // Si la tecla que he soltado es a, w, s o d...”. Sirve para que soltar otra tecla, como la barra espaciadora, no afecte a Mario.
    if (["a", "w", "s", "d"].includes(context.key.toLowerCase())) {
        imagen.src = "mario_parado.png";
        caminando = false;
    }

});