let lenguajes = document.getElementById("lenguajes");
let btn = document.getElementById("boton");
let cajaLenguajes = document.getElementById("cajaLenguajes");

btn.addEventListener("click", ()=>{
    let lenguajesMostrar = [];
    let valuesLenguajes = [];
    let contador = 0;
    for(let i of lenguajes){
        if(i.selected){
            lenguajesMostrar.push(i.text);
            valuesLenguajes.push(i.value);
            contador++;
        }
    }
    if(lenguajesMostrar.length > 0){
        cajaLenguajes.innerHTML = "Has seleccionado  " + contador + " lenguajes: " + lenguajesMostrar.join(", ");
        cajaLenguajes.innerHTML += "<p>Los valores son: " + valuesLenguajes.join(", ")+ "</p>";
    }else{
        cajaLenguajes.innerHTML = "Seleccione algún lenguaje";
    }
    

})