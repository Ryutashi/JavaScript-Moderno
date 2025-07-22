// BLOQUE 1

/* 

EJERCICIO 1

Calcula cuantas horas le llevaría llegar a la luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384.400 kilometros.

La velocidad de la nave es de 1225 kilometros por hora.


*/ 

let distancia = 384400; // Distancia a la luna en kilómetros

let velocidadNave = 1225; // Velocidad de la nave en kilómetros por hora

let horas = distancia / velocidadNave; // Tiempo en horas para llegar a la luna

console.log("Horas para llegar a la luna: " + horas + " horas"); // Horas para llegar a la luna: 313.7959183673469 horas



// Si queremos redondear el resultado a un número entero, podemos usar Math.round()
horas = Math.round(horas); // Redondear a número entero

console.log("Horas para llegar a la luna (redondeado): " + horas + " horas"); // Horas para llegar a la luna: (redondeado): 314 horas
