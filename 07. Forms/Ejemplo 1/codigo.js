let form = document.getElementById("formulario");

console.log(form.method)
console.log(form.action);
console.log(form.elements);
 // Esto envia el formulario: form.submit();
// Esto reinicia el formulario: form.reset(); 

let boton = form.elements["boton"];

boton.addEventListener("click", ()=>{
    let nombre = form.elements["campo1"].value; // Esto tambien vale si pones su posición en el form form.elements[0].value
    let sexo = form.elements["sexo"].value ?? "";
    
    if(sexo !== ""){
        alert("Hola " + nombre + " tu sexo es: " + sexo);
    }else{
        alert("Sexo no elegido")
    }
});

let nuevoSexo = document.getElementById("otroSexo");
let anadirSexo = document.getElementById("anadirSexo");

anadirSexo.addEventListener("click", ()=>{
    let etiquetaSexo = document.getElementById("elegirSexo");
    let sexo = nuevoSexo.value;
    etiquetaSexo.innerHTML += `${sexo} <input type="radio" name="sexo" value="${sexo}">`;
});

let actividades = document.querySelectorAll(".actividades");
let btnAct = document.getElementById("anadirActividad");

btnAct.addEventListener("click", ()=>{
    let seleccionados = [];
    for(let i of actividades){
        if(i.checked){
            seleccionados.push(i.value);
        }
    }
    if(seleccionados.length === 0){
        alert("No has seleccionado ninguna actividad");
    }else{
        alert("Actividades: " + seleccionados.join(", "))
    }
    
})