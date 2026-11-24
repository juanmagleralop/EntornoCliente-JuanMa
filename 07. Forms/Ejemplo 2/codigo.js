class Empresa {
  constructor(empleados) {
    this.empleados = empleados;
  }
}

class Empleado {
  constructor(dni, nombre, apellidos, edad, fechaNacimiento, empleo, departamentos) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad; // CAMBIO: faltaba guardar la edad
    this.fechaNacimiento = fechaNacimiento;
    this.empleo = empleo;
    this.departamentos = departamentos;
  }

  toString() {
    return `DNI: ${this.dni} | Nombre: ${this.nombre} | Apellidos: ${this.apellidos} | Edad: ${this.edad} | Fecha de nacimiento: ${this.fechaNacimiento} | Empleo: ${this.empleo} | Departamentos: ${this.departamentos.join(", ")}`;
  }
}

let form = document.getElementById("formulario");
let btn = form.elements["botonEnviar"];
let empresa = new Empresa([]);

btn.addEventListener("click", (evento) => {
  evento.preventDefault(); // CAMBIO: evita que el formulario recargue la página

  let cajaErrores = document.getElementById("errores");
  let cajaEmpleados = document.getElementById("empleados");
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
  if (!comprobarFecha(fecha.value)) {
    cajaErrores.innerHTML += "<p>Fecha Errónea</p>";
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

  if (!hayErrores) {
    let departamentosSeleccionados = [];

    for (let i of departamentos) {
      if (i.checked) {
        departamentosSeleccionados.push(i.value);
      }
    }

    empresa.empleados.push(
      new Empleado(
        dni.value,
        nombre.value.trim(),
        apellidos.value.trim(),
        Number(edad.value),
        fecha.value,
        empleo.value,
        departamentosSeleccionados,
      ),
    );

    // Se vacía la caja antes de pintar, para no repetir empleados
    cajaEmpleados.innerHTML = "";
    for (let i of empresa.empleados) {
      cajaEmpleados.innerHTML += `
        <tr>
          <td>${i.dni}</td>
          <td>${i.nombre}</td>
          <td>${i.apellidos}</td>
          <td>${i.edad}</td>
          <td>${i.fechaNacimiento}</td>
          <td>${i.empleo}</td>
          <td>${i.departamentos.join(", ")}</td>
        </tr>`;
    }

    form.reset(); // Limpia el formulario para el siguiente empleado
  }
});

//REGLAS DE VALIDACIÓN
// 1. DNI Correcto
// 2. Algún valor > 3 para nombre y apellidos sin contar blancos
// 3. Edad entre 18 y 65
// 4. Fecha de nacimiento correcta en formato dd/mm/aaaa
// 5. Que se haya marcado alguna opción en tipo de empleado y departamento

function comprobarDni(dni) {
  let patron = /^[0-9]{8}[a-zA-Z]$/;

  return patron.test(dni);
}

function comprobarNombre(nombre, apellidos) {
  let nombreTrim = nombre.trim();
  let apellidosTrim = apellidos.trim();

  if (nombreTrim.length <= 3 || apellidosTrim.length <= 3) {
    return false;
  }

  return true;
}

function comprobarEdad(edad) {
  if (edad === "" || isNaN(edad)) {
    return false;
  }

  let numero = Number(edad);

  if (numero < 18 || numero > 65) {
    return false;
  }
  return true;
}

function comprobarFecha(fecha) {
  if(fecha === ""){
    return false;
  }
  return true;
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