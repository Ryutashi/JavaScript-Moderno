// ESTRUCTURAS DE CONTROL



// BUCLE DO WHILE


/* El bucle "do while" es similar al bucle "while", pero la diferencia principal es que el bucle "do while" garantiza que el bloque de código se ejecute al menos una vez, 
incluso si la condición es falsa desde el principio. Esto se debe a que la condición se evalúa después de la ejecución del bloque de código.

Ejemplo:

do {
    bloque de código a repetir
} while (condición); */



// EJEMPLO 1


let numeros = 47; // inicialización fuera del do while


do {
    // Primero se ejecuta el bloque de código y luego se evalúa la condición
    console.log(`El número actual es ${numeros}`); // Imprime los números en decremento desde 47 hasta 1
    numeros--; // decremento dentro del bloque

}   while (numeros > 0); // condición al final del bloque, se ejecuta al menos una vez




// EJEMPLO 2


do {
    // Se ejecutó el bloque de código al menos una vez, aunque la condición sea falsa o no se cumpla
    console.log(`El número actual es ${numeros}`); // El número actual es 47
    numeros--; // decremento dentro del bloque

}   while (numeros > 77); // condición falsa al final del bloque, se ejecutó al menos una vez
