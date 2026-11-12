class Baraja {
  constructor(tipoBaraja = "francesa") {
    this.tipoBaraja = tipoBaraja;
    this.cartas = [];
    let palos;
    let numeros;

    if (tipoBaraja.toLowerCase() === "española") {
      palos = ["o", "c", "e", "b"];
      numeros = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];
    } else if (tipoBaraja.toLowerCase() === "francesa") {
      palos = ["c", "r", "p", "t"];
      numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      throw new Error("Tipo de baraja incorrecto");
    }

    for (let palo of palos) {
      for (let numero of numeros) {
        this.cartas.push(new Carta(numero, palo));
      }
    }
  }

  robar() {
    let cartaRobada = null;
    for (let carta of this.cartas) {
      if (carta.isRobada === false) {
        cartaRobada = new Carta(carta);
        carta.setRobada = true;
        break;
      }
    }
    return cartaRobada;
  }

  numCartas() {
    let cartasMazo = 0;

    for (let carta of this.cartas) {
      if (carta.isRobada === false) {
        cartasMazo++;
      }
    }
    return cartasMazo;
  }

  barajar() {
    let posicion1 = Math.random(0, this.cartas.length);
    let posicion2 = Math.random(0, this.cartas.length);

    let cartaEliminada = this.cartas[posicion1];

    this.cartas[posicion1] = this.cartas[posicion2];
    this.cartas[posicion2] = cartaEliminada;
  }

  cortar() {
    let corte = Math.random(0, this.cartas.length);

    let bloque1 = [];
    let bloque2 = [];

    // Se podria usar este método array.slice(inicio, fin); esto permite extraer una parte de un array y devolverla en un nuevo array, sin modificar el array original
    /*
      let bloque1 = this.cartas.slice(0, corte);
      let bloque2 = this.cartas.slice(corte);
    */

    for (let i = 0; i < corte; i++) {
      bloque1.push(this.cartas[i]);
    }

    for (let i = bloque1.length; i < this.cartas.length; i++) {
      bloque2.push(this.cartas[i]);
    }

    let mazoBarajado = bloque2.concat(bloque1);
    this.cartas = mazoBarajado;
  }
}

class Carta {
  constructor(numero = 1, palo = "c", robada) {
    if (numero instanceof Carta) {
      // CONSTRUCTOR COPIA
      comprobarCarta(numero.numero, numero.palo);
      this.numero = numero.numero;
      this.palo = numero.palo;
      this.robada = numero.robada;
    } else {
      // CONSTRUCTOR NORMAL O POR DEFECTO
      comprobarCarta(numero, palo);
      this.numero = numero;
      this.palo = palo;
      this.robada = robada ?? false;
    }
  }

  get getNumeroCarta() {
    return this.numero;
  }

  get getPaloCarta() {
    return this.palo;
  }

  get isRobada() {
    return this.robada;
  }

  set setNumeroCarta(numero) {
    this.numero = numero;
  }

  set setPaloCarta(palo) {
    this.palo = palo;
  }

  set setRobada(robada) {
    this.robada = robada;
  }

  mostrarCarta() {
    const cartaEspecial = {
      1: "AS",
      11: "Jack",
      12: "Reina",
      13: "Rey",
    };

    const nombre = cartaEspecial[this.numero] ?? this.numero;

    switch (this.palo.toLowerCase()) {
      case "c":
        console.log("La carta es el " + nombre + " de corazones");
        break;
      case "p":
        console.log("La carta es el " + nombre + " de picas");
        break;
      case "r":
        console.log("La carta es el " + nombre + " de rombos");
        break;
      case "t":
        console.log("La carta es el " + nombre + " de tréboles");
        break;
      default:
        console.log("Palo equivocado");
    }
  }

  comparar(carta) {
    const ordenPalos = {
      t: 4,
      r: 3,
      p: 2,
      c: 1,
    };

    let resultado;

    if (this.numero > carta.numero) {
      resultado = 1;
    } else if (this.numero < carta.numero) {
      resultado = -1;
    } else {
      const paloActual = ordenPalos[this.palo.toLowerCase()];
      const paloRecibido = ordenPalos[carta.palo.toLowerCase()];

      if (paloActual > paloRecibido) {
        resultado = 1;
      } else if (paloActual < paloRecibido) {
        resultado = -1;
      } else {
        resultado = 0;
      }
    }

    if (resultado === 1) {
      console.log("Gana la carta actual");
    } else if (resultado === -1) {
      console.log("Gana la carta recibida");
    } else {
      console.log("Hay un empate entre las cartas");
    }

    return resultado;
  }
}
class ExcepcionesCarta extends Error {
  constructor(message) {
    super(message);
  }
}

function comprobarCarta(numero, palo) {
  const palos = ["t", "r", "p", "c"];
  if (numero < 1 || numero > 13) {
    throw new ExcepcionesCarta(
      "El número de la carta debe estar entre el 1 y el 13",
    );
  }
  if (!palos.includes(palo)) {
    throw new ExcepcionesCarta("El palo debe ser t, r, p o c");
  }
}

/*
try {
  // CREO LAS CARTAS A PARTIR DE LA CLASE CARTA
  carta1 = new Carta(1, "p");
  carta2 = new Carta(3, "t");

  // NUEVAS CARTAS (COPIAS)
  carta3 = new Carta(carta1);
  carta4 = new Carta(carta2);

  // MUESTRO LA CARTA 1 Y MODIFICO SUS VALORES
  carta1.mostrarCarta();
  carta1.setNumeroCarta = 6;
  carta1.setPaloCarta = "t";
  carta1.mostrarCarta();

  // MUESTRO LA CARTA 2
  carta2.mostrarCarta();

  // MUESTRO LAS COPIAS
  carta3.mostrarCarta();
  carta4.mostrarCarta();

  // COMPARO CARTAS (CARTA ACTUAL GANA)
  console.log("Resultado Comparación: ");
  carta1.comparar(carta2);

  // EMPATE ENTRE CARTAS
  carta1.setNumeroCarta = 3;
  carta1.comparar(carta2);

  // PIERDE LA ACTUAL
  carta1.setPaloCarta = "p";
  carta1.comparar(carta2);

  // PROBAR EXCEPCIÓN
  carta3 = new Carta(-4, "p");
  carta3.mostrarCarta();
} catch (error) {
  console.log("ERROR: " + error.message);
}

*/

let cartasRobadas = document.getElementById("cartasRobadas");
let botonCrear = document.getElementById("crear");
let baraja = new Baraja();

botonCrear.addEventListener("click", () => {
  let nuevaBaraja = new Baraja();
  baraja = nuevaBaraja;
  cartasRobadas.innerHTML = "";
});

let botonBarajar = document.getElementById("barajar");

botonBarajar.addEventListener("click", () => {
  baraja.barajar();
});

let botonCortar = document.getElementById("cortar");

botonCortar.addEventListener("click", () => {
  baraja.cortar();
});

let botonRobar = document.getElementById("robar");

botonRobar.addEventListener("click", () => {
  let cartaRobada = baraja.robar();

  if (cartaRobada !== null) {
    let imagen = document.createElement("img");
    imagen.src =  "cartas/" + cartaRobada.getPaloCarta + "" + cartaRobada.getNumeroCarta + ".jpg";
    imagen.width = 100;
    cartasRobadas.appendChild(imagen);
  } else {
    alert("No quedan cartas en la baraja");
  }
});
