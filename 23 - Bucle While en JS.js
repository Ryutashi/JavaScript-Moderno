// ESTRUCTURAS DE CONTROL



// BUCLE WHILE


/* El bucle "while" se utiliza para ejecutar un bloque de código mientras una condición se cumpla o sea verdadera.
A diferencia del bucle "for", el bucle "while" no requiere una inicialización, una condición de finalización o un incremento en su declaración inicial, 
ya que el incremento se manejan dentro del bloque de código.

 Ejemplo:

 while (condición) {
    bloque de código a repetir

} */



// EJEMPLO 1


// Creamos la variable "year" que se inicializa en 1990

let year = 1990; // inicialización fuera del while

let objetivo = 2177;

let interferencia = 2117;


/* En el bucle "while" le asignamos la condición de que si "year" es diferente (!=) de la variable "objetivo", se incremente en 1 hasta llegar al objetivo de 2177,
(en este caso 2176 por la condición (!=)), luego en el bloque de código asignamos la variable "year" con el operador de incremento (++) al final. */

while (year != objetivo) {
    
    console.log(`Estamos ahora en el año ${year}`); // Imprime los años desde 1991 hasta 2176
    year++;  //incremento dentro del bloque
}

 




// EJEMPLO 2


/* Tambien podemos cortar el bucle donde queramos, por ejemplo con un "if" dentro del bloque, 
y comprobamos que si "year" (1990) es igual (===) a "interferencia" (2117), se detenga el bucle en el año 2117 con un "break". */

while (year != objetivo) {
    console.log(`Estamos ahora en el año ${year}`); // Imprime los años desde 1991 hasta 2176
    year++;
    
    
    
    if (year === interferencia) {
        console.log(`¡Atención! En el año ${year} hay una interferencia.`); // ¡Atención! En el año 2117 hay una interferencia.
        break;
    }   
}
