let form = document.getElementById("formulario");
let lenguajes = document.querySelectorAll('input[name = "lenguajes"]');
let btn = form.elements["botonEnvio"];

btn.addEventListener("click", ()=>{
    let cajaLenguaje = document.getElementById("cajaLenguajes");
    let lenguajesSeleccionados = [];

    for(let i of lenguajes){
        if(i.checked){
            lenguajesSeleccionados.push(i.value);
        }
    }

    if(lenguajesSeleccionados.length <= 0){
        cajaLenguaje.innerHTML = `<p>Seleccione un lenguaje</p>`;
    }else{
        cajaLenguaje.innerHTML = "Lenguajes Seleccionados: " + lenguajesSeleccionados.join(", ");
        
    }
})