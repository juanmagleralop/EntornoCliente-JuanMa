// Función para guardar una cookie (dura 1 día)
function setCookie(nombre, valor, dias) {
    var d = new Date();
    d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = nombre + "=" + encodeURIComponent(valor) + ";" + expires + ";path=/";
}

// Función para leer una cookie por su nombre
function getCookie(nombre) {
    var nameEQ = nombre + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}

// Función para añadir un producto al carrito
function comprarProducto() {
    var cantidad = document.getElementById("cantidad").value;
    var descripcion = document.getElementById("descripcion").value;

    // Validar que los campos no estén vacíos y que la cantidad sea válida
    if (cantidad === "" || descripcion === "" || parseInt(cantidad) <= 0) {
        alert("Por favor, introduce una cantidad válida y una descripción.");
        return;
    }

    // Obtener el carrito actual de la cookie (si no existe, creamos un array vacío)
    var carritoStr = getCookie("miCarrito");
    var carrito = [];
    
    if (carritoStr !== null) {
        carrito = JSON.parse(carritoStr);
    }

    // Añadir el nuevo producto al array
    carrito.push({
        cantidad: parseInt(cantidad),
        descripcion: descripcion
    });

    // Guardar el carrito actualizado en la cookie (convertido a texto JSON)
    setCookie("miCarrito", JSON.stringify(carrito), 1);

    console.log("¡Producto añadido con éxito!");
    
    // Limpiar los campos del formulario
    document.getElementById("cantidad").value = "";
    document.getElementById("descripcion").value = "";
}

// Función para ver el contenido del carrito por consola
function verCarrito() {
    var carritoStr = getCookie("miCarrito");

    if (carritoStr === null || carritoStr === "[]") {
        console.log("El carrito está vacío.");
        return;
    }

    var carrito = JSON.parse(carritoStr);
    var totalProductos = 0;

    console.log("=== CONTENIDO DEL CARRITO DE COMPRA ===");
    
    for (var i = 0; i < carrito.length; i++) {
        console.log("- " + carrito[i].cantidad + " unidades de: " + carrito[i].descripcion);
        totalProductos += carrito[i].cantidad; // Sumamos las cantidades para el total
    }

    console.log("---------------------------------------");
    console.log("TOTAL de productos en el carrito: " + totalProductos);
    console.log("=======================================");
}