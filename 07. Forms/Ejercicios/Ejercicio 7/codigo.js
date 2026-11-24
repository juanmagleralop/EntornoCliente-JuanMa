let form = document.getElementById("formulario");

let ciudad = form.elements["ciudad"];
let btn = document.getElementById("botonMostrar");
let resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {

    if (ciudad.value === "") {
        resultado.innerHTML = "Debes seleccionar una ciudad";
    } else {
        let nombre = ciudad.options[ciudad.selectedIndex].text; // Ciudad es el select, 
        // options son las distintas opciones que es un array con todas las opciones, 
        // dentro seleccionamos el Id de la ciudad seleccionada y el text devuelve Granada, Malaga etc
        let codigo = ciudad.value;
        let indice = ciudad.selectedIndex;

        resultado.innerHTML = `
            Ciudad seleccionada: ${nombre}<br>
            Código: ${codigo}<br>
            Índice: ${indice}
        `;
    }

});