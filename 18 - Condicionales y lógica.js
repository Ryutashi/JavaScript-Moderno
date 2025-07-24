// ESTRUCTURAS DE CONTROL

// CONDICIONALES Y LÓGICA




// EJEMPLO 1

/* Invertir la condición con el operador NOT (!) */

let buenTiempo = false;

if (!buenTiempo) {
    console.log("Es un buen día para salir"); // Es un buen día para salir
}




// EJEMPLO 2

/* Con && (AND) se evalúan dos condiciones o más, y todas deben ser verdaderas o deben cumplirse para que el bloque de código se ejecute. */

let year = 2028;

if (year >= 2000 && year <= 2030) {
    // En este caso se ejecuta el primer bloque, ya que ambas condiciones son verdaderas, por lo tanto, "2028" es mayor o igual a "2000" y menor o igual a "2030"
    console.log("Estamos en la era moderna"); // Estamos la era moderna

}else if (year > 2030) {
    console.log("Estamos en la era postmoderna");

}else {
    console.log("Estamos en la era antigua");
}




// EJEMPLO 3

/* Con || (OR) se evalúan dos condiciones o más, y al menos una de ellas debe ser verdadera para que el bloque de código se ejecute.*/

if (year == 2007 || year == 2017 || year == 2027 || year == 2037) {
    console.log("El año acaba en 7");

}else {
    // En este caso es falso y se ejecuta el segundo bloque, por que el año es "2028" y no termina en 7.
    console.log("Año desconocido!!"); // Año desconocido!!
}
