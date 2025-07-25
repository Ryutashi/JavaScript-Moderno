// ESTRUCTURAS DE CONTROL


// BUCLE FOR

/* Nos permite ejecutar o repetir varias veces un bloque de código de manera automática.
Al igual que el condicional "if" que se ejecuta una sola vez, el bucle "for" se ejecuta múltiples veces según la condición establecida.

ejemplo: 

for (inicializacion; condicion; incremento) {
    bloque de código a repetir
    
} */



let limite = 177;


/* Creamos la variable "contador" que se inicializa en 1, luego le asignamos la condición de que si "contador" es menor o igual a la variable "límite", se incremente en 1 hasta llegar al límite de 177, 
esto lo conseguimos con el operador de incremento (++) asignandolo a la variable contador al final.

Si no se asigna la variable de control, que en este caso es "contador" con el operador de incremento (++), el bucle se ejecutará indefinidamente, lo que podría causar un bucle infinito */

for (let contador = 1; contador <= limite; contador++) {
    console.log(contador); // Imprime los números del 1 al 177 secuencialmente

}

