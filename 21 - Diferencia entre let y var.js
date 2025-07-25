// ESTRUCTURAS DE CONTROL


// MÁS CONDICIONALES




//DIFERENCIA ENTRE VAR Y LET (ALCANCE / BLOQUE)



/* Normalmente podemos acceder facilmente a una variable siempre y cuando esten definidas fuera de un bloque, ya sea
"let" o "const", de lo contrarío no se puede acceder a ella a menos que se use un bloque de código que la contenga,
pero con "var" es diferente, por que si se puede acceder a ella incluso si se encuentra dentro de un bloque. */


// EJEMPLO 1

// VAR

var variableVar = "Se puede acceder globalmente";


if ("Tipos de variables" == "Tipos de variables") {
    // Variable var definida fuera del bloque, se cambia su valor
    variableVar = "Se ha cambiado el valor de esta variable";

    // Variable var definida dentro de este bloque o condicional.
    var variableVar2 = "Se puede acceder globalmente"

}

/* se puede acceder a esta variable, y es lo normal de cualquier variable definida globalmente o fuera cualquier bloque, tambien se cambia su valor para mostrar el alcance, 
ya que podemos cambiar su valor dentro de un bloque, y luego seguir accediendo a la variable ya sea fuera, o dentro de otros bloques.*/

console.log(variableVar); // Se ha cambiado el valor de esta variable


// Se puede acceder a esta variable, aún cuando solo fue definida dentro del bloque del condicional if
console.log(variableVar2) // Se puede acceder globalmente





// EJEMPLO 2

// LET


let variableLet = "Se puede acceder globalmente";



if ("Tipos de variables" == "Tipos de variables") {
    // Variable let definida fuera del bloque, se cambia su valor para mostrar el alcance de las variables.
    variableLet = "Se ha cambiado el valor de esta variable";

    // Variable let definida dentro de este bloque o condicional.
    let variableLet2 = "Solo accesible dentro de este bloque";

    // podemos acceder y motrar el resultado dentro del bloque donde se encuentra la variable
    console.log(variableLet2) // Solo accesible dentro de este bloque

}

// Como en anteriores resultados, a esta variable se puede acceder y sobreescribir el valor desde cualquier punto al encontrarse a nivel global.
console.log(variableLet) // Se ha cambiado el valor de esta variable


/* En la consola del navegador nos muestra el error que la variable "variableLet2" no se encuentra definida aún, ya que no puede acceder a la que está dentro del condicional if o bloque. */

console.log(variableLet2) // variableLet2 no está definida


/* La ventaja de "let" y "const" es que nos ayudan a evitar errores de alcance y sobreescritura de variables, ya que su alcance se limita al bloque en el que se definen. 
Esto hace que nuestro código sea más predecible y fácil de entender. */

