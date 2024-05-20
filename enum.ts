enum DiaSemana {
  Domingo,
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
}

let diaActual: DiaSemana = DiaSemana.Miercoles;

console.log(`El día actual es: ${DiaSemana[diaActual]}`);
