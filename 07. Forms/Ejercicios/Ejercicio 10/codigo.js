let form = document.getElementById("formulario");
let btn = form.elements["envio"];
let cajaErrores = document.getElementById("cajaErrores");

btn.addEventListener("click", ()=>{
    let errores = [];
    let nombre = form.elements["nombre"].value ?? "";
    let apellidos = form.elements["apellidos"].value ?? "";
    let email = form.elements["email"].value ?? "";
    let edad = form.elements["edad"].value ?? "";
    let nivel = document.querySelectorAll('input[name ="nivel"]');
    if(!validarNombre(nombre,apellidos)){
        errores.push("El nombre no es valido");
    }
    if(!validarEmail(email)){
        errores.push("El email no es válido");
    }

    if(!validarEdad(edad)){
        errores.push("La edad no es válida");
    }
    
});

function validarNombre(nombre, apellidos){
    if(nombre === "" || apellidos === ""){
        return false;
    }
    return true;
}

function validarEmail(email){
    if(!email.includes("@") || !email.includes(".")){
        return false;
    }
    return true;
}

function validarEdad(edad){
    if(edad === "" || edad < 0 || edad > 100){
        return false;
    }
    return true;
}
