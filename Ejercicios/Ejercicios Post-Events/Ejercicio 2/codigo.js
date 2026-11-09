let contadorVeces = 0;

let mostrar = document.getElementById("contador")
let btnAumentar = document.querySelector("#btn-pulsar");
let btnReiniciar = document.querySelector("#btn-reiniciar");
let btnRestar = document.querySelector("#btn-restar");

btnAumentar.addEventListener("click", ()=>{
    contadorVeces++;
    mostrar.value = contadorVeces;
});

btnReiniciar.addEventListener("click", ()=>{
    contadorVeces = 0;
    mostrar.value = contadorVeces;
});

btnRestar.addEventListener("click", ()=>{
    contadorVeces--;
    mostrar.value = contadorVeces;
})
