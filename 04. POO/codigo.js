class CuentaCorriente {
  // Creo el constructor con parámetros
  constructor(nombre, numero, interes, saldo) {
    // LOS NOMBRES DE LAS VARIABLES NO PUEDEN PARECERSE A LOS GETTERS NI A LOS SETTERS YA QUE PUEDE PEGAR FALLO, lo más facil es
    // que los getters y los setters se llamen getNombreCliente por ejemplo, aunque el metodo sea get el nombre también podría
    // ser get getNombreCliente (Esto es solo en caso de que me raye un montón) y asi poder llamar a las variables por un nombre adecuado
    this.nombre = nombre;
    this.numero = numero;
    this.interes = interes;
    this.saldo = saldo;
  }

  // LO HAGO ASI PARA VERLO MÁS CLARO al final se hacen como en java, solo hay q tener en cuenta el guion bajo
  get nombreCliente() {
    return this.nombre;
  }
  set nombreCliente(nombreNuevo) {
    this.nombre = nombreNuevo;
  }

  // Número de Cuenta
  get numeroCuenta() {
    return this.numero;
  }
  set numeroCuenta(numeroNuevo) {
    this.numero = numeroNuevo;
  }

  // Tipo de Interes
  get tipoInteres() {
    return this.interes;
  }
  set tipoInteres(nuevoInteres) {
    this.interes = nuevoInteres;
  }

  // Saldo
  get saldoCliente() {
    return this.saldo;
  }
  set saldoCliente(saldoNuevo) {
    this.saldo = saldoNuevo;
  }

  // MÉTODOS DE OPERACIÓN

  // Sumar dinero
  ingreso(cantidad) {
    if (cantidad < 0) {
      return false;
    }
    // Esto sirve para actualizar el saldo, aqui se usa sin guión pq estamos llamando a los metodos get y set
    this.saldo += cantidad;
    return true;
  }
  // Quitar Dinero
  reintegro(cantidad) {
    // Aqui pasa lo mismo q en el anterior
    if (cantidad < 0 || this.saldo < cantidad) {
      return false;
    }
    // -= lee con el GET y actualiza con el SET automáticamente
    this.saldo -= cantidad;
    return true;
  }
  // Esto lo explico poco a poco
  // Creo el metodo transferencia, que recibe un objeto cuentaDestino y un importe
  transferencia(cuentaDestino, importe) {
    // Primero hacemos un reintegro en nuestra cuentaCorriente es por eso q pone this.reintegro
    if (this.reintegro(importe)) {
      // Si es true entramos aquí, entonces nuestro objeto cuentaDestino activara el metodo ingreso con el importe que recibia el metodo,
      // es por eso que es importante mandar un objeto para poder activar el metodo
      cuentaDestino.ingreso(importe);
      return true;
    }
    return false;
  }
}

// Creamos nuestro objeto cuentaCorriente
var cuentaCorriente = new CuentaCorriente();
// Le añado sus datos
cuentaCorriente.nombreCliente = "Paco";
cuentaCorriente.numeroCuenta = "ABC123";
cuentaCorriente.tipoInteres = 12.5;
cuentaCorriente.saldo = 3500.76;

// Muestro los datos por pantalla
console.log(
  `Cuenta: Nombre: ${cuentaCorriente.nombreCliente} Número Cuenta: ${cuentaCorriente.numeroCuenta} 
  Interes: ${cuentaCorriente.tipoInteres} Saldo = ${cuentaCorriente.saldo}`,
);

// Hago un ingreso positivo para comprobar si funciona
cuentaCorriente.ingreso(1000);
console.log(
  `Saldo Nuevo en la cuenta después del ingreso: ${cuentaCorriente.saldo}`,
);
// Hago un ingreso negativo
console.log(`Ingreso Negativo: ${cuentaCorriente.ingreso(-5000)}`);

// Hago un reintrego positivo
cuentaCorriente.reintegro(1000);
console.log(
  `Saldo Nuevo en la cuenta después del reintegro: ${cuentaCorriente.saldo}`,
);
// Hago un reintegro negativo y con un sueldo superior al saldo
console.log(`Reintegro superior al saldo: ${cuentaCorriente.reintegro(6000)}`);
console.log(`Reintengro Negativo: ${cuentaCorriente.reintegro(-5000)}`);

// Creo el objeto cuentaDestino, en este caso he creado el objeto directamente
var cuentaDestino = new CuentaCorriente("Gema", "DEF456", 10, 0);

// Muestro por pantalla los datos de la cuentaDestino
console.log(
  `Cuenta Destino Antes Ingreso: Nombre: ${cuentaDestino.nombreCliente} Número Cuenta: ${cuentaDestino.numeroCuenta} 
  Interes: ${cuentaDestino.tipoInteres} Saldo = ${cuentaDestino.saldo}`,
);

// Pruebo a hacer una transferencia con todos correctos
cuentaCorriente.transferencia(cuentaDestino, 1000);

// Muestro los datos de la cuentaDestino depsues de la transferencia
console.log(
  `Cuenta Destino Después Ingreso: Nombre: ${cuentaDestino.nombreCliente} Número Cuenta: ${cuentaDestino.numeroCuenta} 
  Interes: ${cuentaDestino.tipoInteres} Saldo = ${cuentaDestino.saldo}`,
);

// Muestro el saldo de la cuentaCorriente depsues de la transferencia
console.log(
  `Saldo Nuevo en la cuenta correinte después del reintegro: ${cuentaCorriente.saldo}`,
);

// Compruebo si falla al poner un importe mayor que el saldo
console.log(cuentaCorriente.transferencia(cuentaDestino, 8000));

// EJERCICIO 2
var cuenta1 = new CuentaCorriente("Cuenta1", "1111", 10, 1000);
var cuenta2 = new CuentaCorriente("Cuenta2", "2222", 10, 2000);
var cuenta3 = new CuentaCorriente("Cuenta3", "3333", 10, 3000);
var banco = [cuenta1, cuenta2, cuenta3];
var saldoMaximo = 0;
// Creo un objeto nulo donde luego meto los valores de la cuenta con más saldo
var cuentaSaldoMaximo = null;
var saldoTotal = 0;
var totalCuentas = 0;
for (const i of banco) {
  if (i.saldo > saldoMaximo) {
    saldoMaximo = i.saldo;
    cuentaSaldoMaximo = i;
  }
  saldoTotal += i.saldo;
  totalCuentas += 1;
}

console.log(
  `Cuenta con más dinero: ${cuentaSaldoMaximo.nombreCliente} ${cuentaSaldoMaximo.numeroCuenta} 
  ${cuentaSaldoMaximo.interes} ${cuentaSaldoMaximo.saldo}`,
);
console.log(
  `El saldo total de las cuentas es: ${saldoTotal} repartido en ${totalCuentas} cuentas`,
);
var mediaBanco = saldoTotal / totalCuentas;
console.log(`La media de saldo en el banco es: ${mediaBanco}`);

/*
OTRA FORMA DE HACERLO
var ordenado = [...banco].sort((a, b) => b.saldo - a.saldo);
console.log(ordenado[0]);  

OTRA MÁS
bancon.sort(a,b) => b.saldo - a.saldo;
console.log(banco[0])
*/

// EXPLICACIONES

// SE PUEDEN CREAR FUNCIONES ANONIMAS
/*
const rectangulo = class {

  constructor (altura,largo){
    this.altura = altura;
    this.largo = largo;
  }
}
  PARA LOS ATRIBUTOS PRIVADOS
  SE AÑADE UNA ALMOHADILLA DELANTE AL ATRIBUTO, ADEMAS HAY QUE AÑADIRLO ANTES
  EJEMPLO:
  class Rectangulo{
    #altura;
    constructor(altura){
      this.#altura;
    }
  }

  HERENCIA
  class Animal {
      hacerSonido() {
          console.log("El animal hace un sonido");
      }
  }

  class Perro extends Animal {
      hacerSonido() {
          console.log("¡Guau, guau!");
      }
  }

  const animal = new Animal();
  const perro = new Perro();

  animal.hacerSonido(); // El animal hace un sonido
  perro.hacerSonido();  // ¡Guau, guau!

  USO DE SUPER PARA HERENCIAS
  class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse() {
        console.log(`Soy un animal y me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
    }

    // Override: sobrescribimos el método del padre
    presentarse() {
        console.log(`Soy un perro, me llamo ${this.nombre} y soy un ${this.raza}`);
    }
}

const perro1 = new Perro("Toby", "Labrador");

perro1.presentarse();
*/

class Persona{
  constructor(dni, nombre, apellidos){
    this.dni = dni;
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  verNombreCompleto(){
    return `${this.dni} - ${this.nombre} - ${this.apellidos}`;
  }
}

class Alumno extends Persona{
  constructor(dni,nombre,apellidos, numAlumno){
    super(dni,nombre,apellidos);
    this.numAlumno = numAlumno;
  }

  mostrarAlumno(){
    return this.verNombreCompleto() + " - " + this.numAlumno;
  }
}

a1 = new Alumno("32424A", "Juan", "Aguilera", 2);
console.log(a1.mostrarAlumno());
