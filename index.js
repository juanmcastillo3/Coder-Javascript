/*Se desea implementar un sistema de ingreso de torneo competitivo para Age of Empires 2. Se ingresará la cantidad de equipos y se
solicitará el nombre y elo promedio del equipo para ver si el equipo está apto para participar en el torneo.*/

console.log("Bienvenido a la liga de Corporación AoE");

let cantEquipos = 0;

pedirCantEquipos();

let eloMínimoParaParticipar = prompt(
  "Indique el elo promedio mínimo para participar"
);

hacerSorteo();

function hacerSorteo() {
  for (let index = 1; index <= cantEquipos; index++) {
    let nombreelegido = prompt("Ingrese el nombre del equipo " + index);
    let eloEquipo = prompt("Ingrese el elo del equipo " + index);

    if (eloMínimoParaParticipar >= eloEquipo) {
      alert("El equipo puede participar");
    } else {
      alert("El equipo no puede participar");
    }
    console.log(
      "El equipo " + nombreelegido + " tiene un elo promedio de: " + eloEquipo
    );
  }
}

function pedirCantEquipos() {
  cantEquipos = prompt(
    "Ingrese la cantidad de equipos que van a participar del torneo:"
  );
}
