let form = document.getElementById("formulario");

let btn = form.elements["botonEnvio"];
let niveles = document.querySelectorAll('input[name = "nivel"]');

btn.addEventListener("click", ()=>{
    let cajaNivel = document.getElementById("cajaNivel") ;
    let nivel = "";
    for(let i of niveles){
        if(i.checked){
            nivel = i.value;
        }
    }
    if(nivel === ""){
        cajaNivel.innerHTML = `<p>Debes seleccionar una opción</p>`;
    }else{
        cajaNivel.innerHTML = `<p>Tu nivel es: ${nivel}</p>`;
    }
});

for (let i of niveles) {
    i.addEventListener("change", () => {
        let nivel = "";
        for (let i of niveles) {
            if (i.checked) {
                nivel = i.value;
            }
        }
        cajaNivel.innerHTML = `<p>Tu nivel es: ${nivel}</p>`;
    });
}