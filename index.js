/*Se desea implementar un sistema de ingreso de torneo competitivo para Age of Empires 2. En esa ocasión se deberan anotar los equipos.
calculando el elo promedio del equipo. Luego los organizadores del torneo dictarán si están aptos para
participar del torneo*/

console.log("Bienvenido a la liga de Corporación AoE");
alert("Bienvenido a la liga de Corporación AoE");

function pedirEloApto() {
  var eloApto = prompt("Ingrese el elo promedio para ingresar al torneo:");
  return eloApto;
}

function pedirNombre() {
  var nombre = prompt("Ingrese el nombre del jugador:");
  return nombre;
}

function pedirElo() {
  var elo = parseFloat(prompt("Ingrese la elo del jugador:"));
  return elo;
}


function calcularPromedio(elos) {
  var totalElos = 0;
  for (var i = 0; i < elos.length; i++) {
    totalElos += elos[i];
  }
  return totalElos / elos.length;
}


var jugadoresNombres = [];
var jugadoresElos = [];


var continuar = true;

while (continuar) {
  var nombre = pedirNombre();
  var elo = pedirElo();

  if (!isNaN(elo)) {
    jugadoresNombres.push(nombre);
    jugadoresElos.push(elo);
  } else {
    alert("El elo ingresado no es válido. Intente de nuevo.");
  }

  var consulta = prompt("¿Desea agregar otro jugador? (Sí/No)").toLowerCase();
  continuar = consulta === "si" || consulta === "sí";
}

var eloParaParticipar =  pedirEloApto();

var promedio = calcularPromedio(jugadoresElos);

var mensaje = "Lista de jugadores y elos:\n\n";

for (var i = 0; i < jugadoresNombres.length; i++) {
  mensaje += jugadoresNombres[i] + ": " + jugadoresElos[i] + "\n";
}

mensaje += "\nPromedio de elo: " + promedio;
alert(mensaje);


  if (promedio >= eloParaParticipar) {
    alert("El equipo está apto para jugar el torneo");
  } else{
    alert("El equipo no está apto para jugar el torneo")
  }
