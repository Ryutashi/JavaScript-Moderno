// HOISTING O ELEVACIÓN


// VAR


// Normalmente se define la variable y luego se accede a esta, en este caso realizando un "console.log"


// Ejemplo:


var auto = "Bugatti";

console.log(auto);  // 'Bugatti'





// Pero si primero realizamos el "console.log" antes de definir la variable, aunque con "var" no da error, nos arroja que la variable no está definida

// Esto sucede por que el motor de JavaScript lo que hace es elevar la declaración, pero no la inicialización, es decir, hace que exista pero sin contenido

// Por lo que "motocicleta" esta definido pero el valor sigue siendo "undefined" o sin definir


// Ejemplo:


console.log(motocicleta) // 'undefined'

var motocicleta = "Kawasaki Ninja"





// LET Y CONST

/* Con "let" y "const" las reglas son mas estrictas, no se puede acceder a la variable antes de declararse, 
por lo que a diferencia de "var", no se elevan y nos arroja error */


// Ejemplo:


console.log(avion); // No se puede acceder 'avion' antes de inicializarla

let avion = "F14";



// Esto nos permite conocer el orden de las declaraciones y acceso a las variables correctamente
