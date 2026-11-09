// Añade un 0 delante si el número es menor que 10 (5 -> "05")
function cero(n) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

function Tiempo(anio, mes, dia, hora, minuto, segundo) {
  // Si todo vale 0, usamos la fecha y hora actual
  if (
    anio == 0 &&
    mes == 0 &&
    dia == 0 &&
    hora == 0 &&
    minuto == 0 &&
    segundo == 0
  ) {
    const ahora = new Date();
    anio = ahora.getFullYear();
    mes = ahora.getMonth() + 1;
    dia = ahora.getDate();
    hora = ahora.getHours();
    minuto = ahora.getMinutes();
    segundo = ahora.getSeconds();
  }

  this.anio = anio;
  this.mes = mes;
  this.dia = dia;
  this.hora = hora;
  this.minuto = minuto;
  this.segundo = segundo;

  // Getters
  this.getAnio = function () {
    return this.anio;
  };
  this.getMes = function () {
    return this.mes;
  };
  this.getDia = function () {
    return this.dia;
  };
  this.getHora = function () {
    return this.hora;
  };
  this.getMinuto = function () {
    return this.minuto;
  };
  this.getSegundo = function () {
    return this.segundo;
  };
  this.getFechaCompleta = function () {
    return cero(this.dia) + "/" + cero(this.mes) + "/" + this.anio;
  };
  this.getHoraCompleta = function () {
    return cero(this.hora) + ":" + cero(this.minuto) + ":" + cero(this.segundo);
  };

  // Setters
  this.setAnio = function (anio) {
    this.anio = anio;
  };
  this.setMes = function (mes) {
    this.mes = mes;
  };
  this.setDia = function (dia) {
    this.dia = dia;
  };
  this.setHora = function (hora) {
    this.hora = hora;
  };
  this.setMinuto = function (minuto) {
    this.minuto = minuto;
  };
  this.setSegundo = function (segundo) {
    this.segundo = segundo;
  };

  // Convierte este Tiempo en un Date de JavaScript
  this.aDate = function () {
    return new Date(
      this.anio,
      this.mes - 1,
      this.dia,
      this.hora,
      this.minuto,
      this.segundo,
    );
  };

  this.esBisiesto = function () {
    return (this.anio % 4 == 0 && this.anio % 100 != 0) || this.anio % 400 == 0;
  };

  this.esMayor = function (otro) {
    return this.aDate() > otro.aDate();
  };
  this.esMenor = function (otro) {
    return this.aDate() < otro.aDate();
  };
  this.esIgual = function (otro) {
    return this.aDate().getTime() == otro.aDate().getTime();
  };

  this.sumaHora = function (otro) {
    const d = this.aDate();
    d.setHours(
      d.getHours() + otro.hora,
      d.getMinutes() + otro.minuto,
      d.getSeconds() + otro.segundo,
    );
    this.anio = d.getFullYear();
    this.mes = d.getMonth() + 1;
    this.dia = d.getDate();
    this.hora = d.getHours();
    this.minuto = d.getMinutes();
    this.segundo = d.getSeconds();
  };
}

// ---------------- EJEMPLOS ----------------
/*
const t1 = new Tiempo(2024, 2, 29, 23, 30, 45);
const t2 = new Tiempo(2025, 12, 31, 8, 15, 0);
const hoy = new Tiempo(0, 0, 0, 0, 0, 0);

console.log("t1:", t1.getFechaCompleta(), t1.getHoraCompleta());
console.log("t2:", t2.getFechaCompleta(), t2.getHoraCompleta());
console.log("hoy:", hoy.getFechaCompleta(), hoy.getHoraCompleta());

console.log("Año de t1:", t1.getAnio());
t1.setAnio(2023);
console.log("Año de t1 tras setAnio(2023):", t1.getAnio());
t1.setAnio(2024);

console.log("¿2024 es bisiesto?", t1.esBisiesto());
console.log("¿t1 > t2?", t1.esMayor(t2));
console.log("¿t1 < t2?", t1.esMenor(t2));
console.log("¿t1 == t2?", t1.esIgual(t2));

t1.sumaHora(new Tiempo(2000, 1, 1, 2, 0, 0)); // suma 2 horas
console.log("t1 + 2 horas:", t1.getFechaCompleta(), t1.getHoraCompleta());
*/
const t1 = new Tiempo(2029, 2, 28, 23, 59, 59);
const t2 = new Tiempo(0,0,0,0,0,1);
t1.sumaHora(t2);
console.log(t1);
