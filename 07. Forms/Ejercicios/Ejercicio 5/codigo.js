let form = document.getElementById("formulario");
let btnTodos = form.elements["seleccionar"];
let btnDesmarcar = form.elements["deseleccionar"];
let btnTodo = form.elements["haceTodo"];
let lenguajes = document.querySelectorAll('input[name = "lenguajes"]');

btnTodos.addEventListener("click", ()=>{
    for(let i of lenguajes){
        i.checked = true;
    }
});

btnDesmarcar.addEventListener("click", ()=>{
    for(let i of lenguajes){
        i.checked = false;
    }
})

function marcarTodos(){
    for(let i of lenguajes){
        i.checked = true;
    }
}

function desMarcarTodos(){
    for(let i of lenguajes){
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

