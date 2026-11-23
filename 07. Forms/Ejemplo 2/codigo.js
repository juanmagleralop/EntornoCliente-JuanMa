let form = document.getElementById("formulario");
let btn = form.elements["botonEnviar"];

btn.addEventListener("click", () => {
  let cajaErrores = document.getElementById("errores");
  let hayErrores = false;
  let dni = document.getElementById("dni");
  let nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  let edad = document.getElementById("edad");
  let fecha = document.getElementById("fecha");
  let empleo = document.querySelector('input[name="empleo"]:checked');
  let departamentos = document.querySelectorAll(".departamentos");

  cajaErrores.innerHTML = "";
  if (!comprobarDni(dni.value)) {
    cajaErrores.innerHTML += "<p>El DNI no es correcto</p>";
    hayErrores = true;
  } 
  if (!comprobarNombre(nombre.value, apellidos.value)) {
    cajaErrores.innerHTML += "<p>El nombre/apellidos no es correcto</p>";
    hayErrores = true;
  } 
  if (!comprobarEdad(edad.value)) {
    cajaErrores.innerHTML += "<p>La edad no es válida</p>";
    hayErrores = true;
  } 
  if (!comprobarEmpleo(empleo)) {
    cajaErrores.innerHTML += "<p>Seleccione algún empleo</p>";
    hayErrores = true;
  } 
  if (!comprobarDepartamento(departamentos)) {
    cajaErrores.innerHTML += "<p>Seleccione algún departamento</p>";
    hayErrores = true;
  } 
  
  if(!hayErrores){
    form.onsubmit();
  }
});

//REGLAS DE VALIDACIÓN
// 1. DNI Correcto
// 2. Algún valor > 3 para nombre y apellidos sin contar blancos
// 3. Edad entre 18 y 65
// 4. Fecha de nacimiento correcta en formado dd/mm/aaaa
// 5. Que se haya marcado alguna opción en tipo de empleado y departamento

function comprobarDni(dni) {
  let patron = /^[0-9]{8}[a-zA-Z]$/;

  return patron.test(dni); // El método .test() sirve para comprobar si una cadena de texto cumple con la condicion
}

function comprobarNombre(nombre, apellidos) {
  let nombreTrim = nombre.trim();
  let apellidosTrim = apellidos.trim();

  if (nombreTrim.length < 3 || apellidosTrim.length < 3) {
    return false;
  }

  return true;
}

function comprobarEdad(edad) {
  if (edad < 18 || edad > 65) {
    return false;
  }
  return true;
}

function comprobarFecha(fecha) {
  let patron = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/;

  return patron.test(fecha);
}

function comprobarEmpleo(empleo) {
  return empleo !== null;
}

function comprobarDepartamento(departamentos) {
  for (let i of departamentos) {
    if (i.checked) {
      return true;
    }
  }
  return false;
}
