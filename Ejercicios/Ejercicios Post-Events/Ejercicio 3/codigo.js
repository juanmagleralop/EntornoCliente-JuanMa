let ventana = document.querySelector("html");
let coordenadas = document.getElementById("coordenadas");
let circulo = document.getElementById("circulo");

ventana.addEventListener("mousemove", (context)=>{
    coordenadas.value = `Cordenada X: ${context.clientX} Cordenada Y: ${context.clientY}`;
    
    circulo.style.left = context.clientX + "px";
    circulo.style.top = context.clientY + "px";
});
