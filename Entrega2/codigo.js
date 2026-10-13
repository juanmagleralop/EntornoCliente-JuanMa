// Clase Producto
class Producto {
    constructor(unidades, producto) {
        this.unidades = unidades;
        this.producto = producto;
    }

    get getUnidades() {
        return this.unidades;
    }

    get getProducto() {
        return this.producto;
    }

    set setUnidades(unidades) {
        this.unidades = unidades;
    }

    set setProducto(producto) {
        this.producto = producto;
    }

    toString() {
        return `Producto: ${this.producto}, unidades: ${this.unidades}.`;
    }
}

// FUNCION PARA CREAR LA COOKIE
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    // Guardamos codificado para evitar errores con espacios o símbolos
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

// FUNCION PARA LEER LA COOKIE (CORREGIDA)
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // Decodificamos únicamente el valor extraído de la cookie
            return decodeURIComponent(c.substring(name.length, c.length));
        }
    }
    return "";
}

function cargarCarrito() {
    let cookie = getCookie("carrito");
    if (cookie == "") {
        return [];
    }

    return JSON.parse(cookie).map(p => new Producto(p.unidades, p.producto));
}

function mostrarCarrito() {
    let datos = cargarCarrito();
    let total = 0;
    console.log("--- Carrito Guardado en Cookies ---");

    if (datos.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        datos.forEach(element => {
            console.log(element.toString());
            total += Number(element.unidades);
        });
        console.log("Total de productos: ", total);
    }
}

var producto = document.getElementById("producto");
var unidades = document.getElementById("unidades");
var btn_comprar = document.getElementById("btn-comprar");
var btn_carrito = document.getElementById("btn-carrito");
var datos = cargarCarrito();

// Función añadir producto (Solo en index.html)
if (btn_comprar) {
    btn_comprar.addEventListener('click', function (event) {
        event.preventDefault();

        // Validamos que haya datos válidos
        if (producto.value.trim() !== "" && Number(unidades.value) > 0) {
            datos.push(new Producto(Number(unidades.value), producto.value));
            setCookie("carrito", JSON.stringify(datos), 7);

            console.log("Añadido con éxito: ", unidades.value + " unidades de " + producto.value);
            
            unidades.value = "";
            producto.value = "";
        } else {
            alert("Rellena los campos correctamente.");
        }
    });
}

// Función ir al carrito
if (btn_carrito) {
    btn_carrito.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = "carrito.html";
    });
}

// Si estamos en la página del carrito (donde no existe btn_comprar), mostramos los datos en consola
if (!btn_comprar) {
    mostrarCarrito();
}