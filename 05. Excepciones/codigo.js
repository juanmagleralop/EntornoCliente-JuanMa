try {
    console.log(45%2);
} catch (err) {
    console.log(err.message())
}

class ExcepcionErrores extends Error{
    constructor(message){
        super(message);
    }
}

function moduloEnteros(a,b){
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new ExcepcionErrores("ERROR: Para calcular el módulo se necesitan dos números enteros")
    }else{
        return a%b;
    }
}

try {
    console.log(moduloEnteros(45,2));
    console.log(moduloEnteros(Math.PI,2));
} catch (error) {
    console.log(error.message);
}