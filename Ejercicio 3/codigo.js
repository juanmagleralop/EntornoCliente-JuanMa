class Carta {
  constructor(numero = 1, palo = "c") {
    if (numero instanceof Carta) {
      // CONSTRUCTOR COPIA
      this.numero = numero.numero;
      this.palo = numero.palo;
    } else {
      // CONSTRUCTOR NORMAL O POR DEFECTO
      this.numero = numero;
      this.palo = palo;
    }
  }

  get getNumeroCarta() {
    return this.numero;
  }

  get getPaloCarta() {
    return this.palo;
  }

  set setNumeroCarta(numero) {
    if (numero < 1 || numero > 13) {
      console.log("El número debe estar entre 1 y 13");
    } else {
      this.numero = numero;
    }
  }

  set setPaloCarta(palo) {
    if (palo != "c" && palo != "p" && palo != "r" && palo != "t") {
      console.log("El palo debe ser: corazones, picas, rombos y tréboles");
    } else {
      this.palo = palo;
    }
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

// CREO LAS CARTAS APARTIR DE LA CLASE CARTA
carta1 = new Carta(1, "p");
carta2 = new Carta(3, "t");

// NUEVAS CARTAS (COPIAS)
carta3 = new Carta(carta1);
carta4 = new Carta(carta2);

// EJEMPLOS

// MUESTRO LA CARTA 1 PARA LUEGO MODIFICAR SUS VALORES Y VOLVER A MOSTRAR LOS NUEVOS VALORES
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