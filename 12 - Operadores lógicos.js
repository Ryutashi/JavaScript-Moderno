// OPERADORES LÓGICOS


/* Los operadores lógicos se utilizan para combinar o invertir valores booleanos y devolver un valor booleano (true o false),
Se utilizan principalmente en estructuras de control como condicionales y bucles. */



let esMayorDeEdad = true;

let tieneEntrada = true;


// (&&)
console.log(esMayorDeEdad && tieneEntrada); // AND (true), ambos son true

// El operador AND (&&) devuelve true si ambos operandos son true, de lo contrario devuelve false.


// (||)
console.log(esMayorDeEdad || tieneEntrada); // OR (true), al menos uno es true

// El operador OR (||) devuelve true si al menos uno de los operandos es true, de lo contrario devuelve false.


// (!)
console.log(!esMayorDeEdad); 

// NOT (!) (false), invierte el valor de esMayorDeEdad, ya que es una negación.




//OPERADORES DE CADENAS

let mensaje1 = "hola";

let mensaje2 = "que tal?";

let mensaje_total = mensaje1 + " " + mensaje2;

mensaje_total += " " + "soy Jose Dev"; // Concatenación de cadenas


console.log(mensaje_total); // "hola que tal? soy Jose Dev"


/* Podemos usar esta asignación de concatenación por ejemplo para unir dos trozos de HTML que luego tenemos que incrustar con ciertos datos en un DIV
que tenemos en JavaScript */
