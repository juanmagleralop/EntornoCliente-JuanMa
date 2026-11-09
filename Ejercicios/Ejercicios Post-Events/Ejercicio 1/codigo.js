// 1. Al pasar el ratón por encima, la caja cambiará a color azul.
let cuadrado = document.getElementById("cuadrado");

cuadrado.addEventListener("mouseover", ()=>{
    cuadrado.style.backgroundColor = "Blue";
});

cuadrado.addEventListener("mouseout", ()=>{
    cuadrado.style.backgroundColor = "White";
});

cuadrado.addEventListener("click", ()=>{
    cuadrado.style.backgroundColor = "Red";
});

cuadrado.addEventListener("dblclick", ()=>{
    cuadrado.style.backgroundColor = "Green";
});