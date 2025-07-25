// ESTRUCTURAS DE CONTROL


// MÁS CONDICIONALES


// CONDICIONAL SWITCH




// SWITCH

/* El switch es una estructura de control que permite evaluar una expresión y ejecutar diferentes bloques de código según el valor de esa expresión.
Es útil cuando se tienen múltiples condiciones basadas en el mismo valor, y se quiere evitar el uso de múltiples if-else. */



// EJEMPLO 1

/* Podemos usar números como palabras clave, y el switch evalúa el valor de la variable para ejecutar el bloque de código correspondiente.
En este caso, si "miDesayuno" es igual a 3, se ejecuta el bloque de código correspondiente a ese caso.
Si no coincide con ninguno de los casos, se ejecuta el bloque de código del default */

let miDesayuno = 3;

switch (miDesayuno) {

    case 1:
        console.log("Has elegido tostada con tomate y aceite");
        break;

    case 2:
        console.log("Has elegido huevos fritos con bacon");
        break;

    case 3:
        console.log("Has elegido chocolate con copos de avena"); // Has elegido chocolate con copos de avena
        break;

    default:
        console.log("Has elegido un desayuno diferente");
        break;

}




// EJEMPLO 2

// Tambien podemos usar strings como palabra clave, en lugar de números, y funciona igual.

let miDesayuno2 = "huevos";

switch (miDesayuno2) {

    case "tostada":
        console.log("Has elegido tostada con tomate y aceite");
        break;

    case "huevos":
        console.log("Has elegido huevos fritos con bacon"); // Has elegido huevos fritos con bacon
        break;

    case "chocolate":
        console.log("Has elegido chocolate con copos de avena");
        break;

    default:
        console.log("Has elegido un desayuno diferente"); 
}





// EJEMPLO 3

/* Podemos conseguir el mismo resultado usando el "if" en lugar del "switch", en este caso, usamos el operador de igualdad (==) para comparar el valor de la variable "miDesayuno3" con los diferentes casos.
Si la condición se cumple, se ejecuta el bloque de código correspondiente. */


let miDesayuno3 = "chocolate";

if (miDesayuno3 == "tostada") {
    console.log("Has elegido tostada con tomate y aceite");


}else if (miDesayuno3 == "huevos") {
    console.log("Has elegido huevos fritos con bacon");

}else if (miDesayuno3 == "chocolate") {
    console.log("Has elegido chocolate con copos de avena"); // Has elegido chocolate con copos de avena

}else {
    console.log("Has elegido un desayuno diferente");
}

