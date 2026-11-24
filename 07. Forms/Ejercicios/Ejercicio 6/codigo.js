const lenguajes = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "PHP",
  "C++"
];

let form = document.getElementById("formulario");
let cajaLenguajes = document.getElementById("lenguajes");

for(let i of lenguajes){
    cajaLenguajes.innerHTML += `<label for=${i}>
                                    <input type=checkbox name=lenguajes value= ${i}>${i}
                                </label>`
}

form.innerHTML += "<button type=button id=botonSeleccionar>Mostrar Lenguajes</button>"
form.innerHTML += "<button type=button id=botonTodo>Seleccionar/Desmarcar</button>";

let btn = document.getElementById("botonSeleccionar");
let btnTodo = document.getElementById("botonTodo");

btn.addEventListener("click", ()=>{
    let lenguajesSeleccionados = document.querySelectorAll('input[name ="lenguajes"]:checked');
    let div = document.getElementById("cajaLenguajes");
    div.innerHTML = "Lenguajes: ";
    for(let i of lenguajesSeleccionados){
        div.innerHTML += i.value + ", ";
    }
});

let lenguajes2 = document.querySelectorAll('input[name = "lenguajes"]');

function marcarTodos(){
    for(let i of lenguajes2){
        i.checked = true;
    }
}

function desMarcarTodos(){
    for(let i of lenguajes2){
        i.checked = false;
    }
}

let clicks = 0;

btnTodo.addEventListener("click", ()=>{
    if(clicks % 2 === 0){
        marcarTodos();
    }else{
        desMarcarTodos();
    }
    clicks++;
})