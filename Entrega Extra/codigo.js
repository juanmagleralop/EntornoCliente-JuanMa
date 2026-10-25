// EXCEPCIONES PERSONALIZADAS

// EXCEPCION PARA LOS GOLES Y LOS PARTIDOS
class ExcepcionGolesPartidos extends Error {
  constructor(message) {
    super(message);
  }
}

// EXCEPCION PARA LOS DORSALES
class ExcepcionDorsal extends Error {
  constructor(message) {
    super(message);
  }
}

// EXCEPCION PARA LOS JUGADORES REPETIDOS
class ExcepcionJugadorRepetido extends Error{
    constructor(message) {
        super(message);
    }
}

// CLASES

// CLASE JUGADOR
class Jugador {


  constructor(dorsal, nombreApellidos, estadisticas) {
    // METODO QUE COMPRUEBA EL DORSAL ANTES DE CREAR EL JUGADOR
    comprobarDorsal(dorsal);
    this.dorsal = dorsal;
    this.nombreApellidos = nombreApellidos;
    this.estadisticas = estadisticas;
  }

  // GETTERS
  get getDorsal() {
    return this.dorsal;
  }
  get getNombreApellidos() {
    return this.nombreApellidos;
  }
  get getEstadisticas() {
    return this.estadisticas;
  }

  // SETTERS
  set setDorsal(dorsal) {
    comprobarDorsal(dorsal);
    this.dorsal = dorsal;
  }
  set setNombreApellidos(nombreApellidos) {
    this.nombreApellidos = nombreApellidos;
  }
  set setEstadisticas(estadisticas) {
    // COMPROBAMOS QUE LOS GOLES NO SON NEGATIVOS Y SI LO SON LANZAMOS NUESTRA EXCEPCION
    for (let goles of estadisticas) {
      if (goles < 0) {
        throw new ExcepcionGolesPartidos("No se pueden añadir goles negativos");
      }
    }
    this.estadisticas = estadisticas;
  }

  // METODOS PROPIOS
  anadirGolesPartido(partido, goles) {
    // COMPROBAMOS ANTES DE AÑADIR SI LOS GOLES Y LOS PARTIDOS QUE NOS HA MANDADO SON NEGATIVOS LANZARIA UNA EXCEPCION
    comprobarDatosPartidos(goles, partido);
    let golesPartido = this.estadisticas[partido - 1]; // RESTAMOS MENOS 1 PQ SI EL USER QUIERE BUSCAR EL PARTIDO 7 TENDRIAMOS Q BUSCAR LA POSCION 6 DE NUESTRO ARRAYD
    // ESTO SIRVE POR SI TODAVIA NO SE HAN REGISTRADO GOLES EN NUESTRO PARTIDO
    if (golesPartido == null) {
      golesPartido = 0;
    }
    this.estadisticas[partido - 1] = golesPartido + goles;
  }

  obtenerGoles(partido) {
    let goles = this.estadisticas[partido - 1];
    if (goles == null) {
      goles = 0;
    }
    return goles;
  }
}

// CLASE EQUIPO
class Equipo {
  constructor(nombre, jugadores) {
    this.nombre = nombre;
    this.jugadores = jugadores;
  }

  get getNombre() {
    return this.nombre;
  }
  get getJugadores() {
    return this.jugadores;
  }

  set setNombre(nombre) {
    this.nombre = nombre;
  }
  set setJugadores(jugadores) {
    this.jugadores = jugadores;
  }


  anadirJugador(jugador) {
    // ESTE COMPRUEBA EL JUGADOR ANTES DE AÑADIRLO A NUESTRO EQUIPO
    comprobarJugador(this,jugador); // EL THIS FUNCIONA COMO this.equipo es decir esta mandando el equipo que esta llamando al metodo anadirJugador
    let encontrado = false;
    let jugadores = this.getJugadores;

    // ESTO COMPRUEBA SI EL DORSAL YA EXISTE DENTRO DEL EQUIPO
    for (let i of jugadores) {
      if (i.getDorsal == jugador.getDorsal) {
        encontrado = true;
        break;
      }
    }
    if (encontrado == true) {
      console.log("No se pueden añadir jugadores con el mismo dorsal");
    } else {
      this.jugadores.push(jugador);
    }
  }


  borrarJugador(jugador) {
    // COMO EL DORSAL ES UN ATRIBUTO UNICO DENTRO DEL EQUIPO LO USAMOS AQUI
    let encontrado = false;
    let jugadores = this.getJugadores;
    let posicion = 0;

    for (let i of jugadores) {
      if (i.getDorsal == jugador.getDorsal) {
        encontrado = true;
        break;
      }
      posicion++;
    }
    if (encontrado == true) {
      this.jugadores.splice(posicion, 1); // splice funciona mandando el index de q queremos borrar, y cuantos elementos tiene que eliminar desde ahi
    } else {
      console.log("No se ha encontrado al jugador");
    }
  }
}

// FUNCIONES EXCEPCIONES

// ESTA FUNCION COMRPUEBA QUE LOS GOLES Y LOS PARTIDOS NO SEAN NEGATIVOS (LO USAREMOS EN EL METODO anadirGolesPrtidos)
function comprobarDatosPartidos(goles, partidos) {
  if (goles < 0 || partidos < 0) {
    throw new ExcepcionGolesPartidos(
      "No se pueden añadir partidos/goles negativos",
    );
  }
}

// ESTA FUNCION COMRPUEBA QUE EL DORSAL NO SEA NEGATIVO (LO USAREMOS TANTO EN EL CONSTRUCTOR DE LA CLASE JUGADOR COMO EN EL METODO setDorsal)
function comprobarDorsal(dorsal) {
  if (dorsal < 0) {
    throw new ExcepcionDorsal("No se pueden añadir dorsales negativos");
  }
}

// ESTA FUNCION COMPRUEBA SI HAY DOS JUGAODRES REPETIDOS DENTRO DE UN EQUIPO PARA ELLO USO SU NOMBRE COMPELTO (LO USAREMOS EN anadirJugador)
function comprobarJugador(equipo, jugador){
    let jugadores = equipo.getJugadores;
    for(let i of jugadores){
        if(i.getNombreApellidos == jugador.getNombreApellidos){
            throw new ExcepcionJugadorRepetido("No se pueden añadir jugadores repetidos");
        }
    }
}

// EJEMPLOS
try {
    let jugador1 = new Jugador(9, "Karim Benzema", []); // YO VY A CREAR A LOS JUGADORES CON LAS ESTADITISCAS VACIAS
    let jugador2 = new Jugador(9, "CR7", []);
    let jugador3 = new Jugador(7, "Karim Benzema", []);
    // jugador1.setEstadisticas = [-1]; // ESTO MANDA GOLES EN FORMA DE ARRAYD
    // jugador1.anadirGolesPartido(1,-8);
    // let jugador2 = new Jugador(-3, "Modric");
    // jugador1.setDorsal = -5;
    let equipo1 = new Equipo("Madrid", []);
    equipo1.anadirJugador(jugador1);
    // equipo1.anadirJugador(jugador2);
    equipo1.anadirJugador(jugador3);
} catch (error) {
    console.log("ERROR: "+ error.message);
}