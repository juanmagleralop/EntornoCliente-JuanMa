let form = document.getElementById("formulario");
let btn = form.elements["botonEnviar"];

btn.addEventListener("click", ()=>{
    let cajaErrores = document.getElementById("errores");
    let hayErrores = false;
    let dni = document.getElementById("dni");
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let fecha = document.getElementById("fecha");
    let empleo = document.getElementById("empleo");
    let departamentos = document.querySelectorAll(".departamentos");

    if(!comprobarDni(dni.value)){
        cajaErrores.innerHTML = "<p>El DNI no es correcto</p>";
        hayErrores = true;
    }
});

function comprobarDni(dni){
    let dniTrim = dni.trim();
    if(dniTrim.length != 9){
        return false;
    }
}