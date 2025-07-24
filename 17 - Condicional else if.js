// ESTRUCTURAS DE CONTROL

// CONDICIONAL ELSE IF 



let conCebolla = true;


/* 
Si añadimos el operador NOT (!) al principio de la variable, podemos invertir la condición, es decir, si "conCebolla" es verdadero, se invierte el valor a falso, 
y se ejecuta el bloque de código del else, y si es falso, se ejecuta el bloque de código del if.

Esto es útil para manejar condiciones opuestas de manera más clara y concisa.
*/


// EJEMPLO 1

if (!conCebolla == true) {
    // Si la condición es verdadera, se ejecuta este bloque de código
    console.log("Hamburguesa con cebolla");

}else {
    // Si la condición es falsa, se ejecuta este bloque de código, en este caso se invierte a falsa, y se ejecuta este bloque.
    console.log("Hamburguesa sin cebolla"); // Hamburguesa sin cebolla
}



//EJEMPLO 2

// También la condición podría ser así, y funciona igual que el anterior invirtiendo la condición con (!=) despues de la variable.

if (conCebolla != true) {
    // Si la condición es verdadera, se ejecuta este bloque de código
    console.log("Hamburguesa con cebolla");

}else {
    // Si la condición es falsa, se ejecuta este bloque de código, en este caso se invierte a falsa, y se ejecuta este bloque.
    console.log("Hamburguesa sin cebolla"); // Hamburguesa sin cebolla
}



// EJEMPLO 3

// Tambien tenemos esta otra manera con (===) que es una forma más explícita de comprobar si la variable es verdadera.

if (conCebolla === true) {
    // Si la condición es verdadera, se ejecuta este bloque de código, en este caso es verdadera.
    console.log("Hamburguesa con cebolla"); // Hamburguesa con cebolla
}else {
    // Si la condición es falsa, se ejecuta este bloque de código.
    console.log("Hamburguesa sin cebolla");
}



//EJEMPLO 4

// También se puede usar la condición directamente sin necesidad de compararla con true, ya que "conCebolla" ya es un valor booleano.

if (conCebolla) {
    // Si la condición es verdadera, se ejecuta este bloque de código, en este caso es verdadera.
    console.log("Hamburguesa con cebolla"); // Hamburguesa con cebolla
}else {
    // Si la condición es falsa, se ejecuta este bloque de código.
    console.log("Hamburguesa sin cebolla");
}



//EJEMPLO 5

// ELSE IF

/* Podemos hacer condiciones más complejas anidando más condiciones dentro de otras, y utilizando el "else if" */

let nombre = "Joaquin Perez";

let edad = 37;


if (edad >= 18) {
    console.log("Es mayor de edad") // Es mayor de edad

    if (edad <= 20) {
        console.log("Es un adolescente")

    }else if (edad >= 70) {
        console.log("Es un anciano")

    }else {
        console.log("Es un adulto") // Es un adulto
    }

}else {
    console.log("No es mayor de")
}
