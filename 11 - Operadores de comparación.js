// OPERADORES

// OPERADORES DE COMPARACIÓN

// Los operadores de comparación se utilizan para comparar dos valores y devolver un valor booleano (true o false).



// IGUALDAD
// La igualdad (==) se utiliza para comparar dos valores y devolver un valor booleano (true o false).

let numerazo = 31;

console.log(numerazo == 31); // Igualdad (true), tipo de dato number

console.log(numerazo == 32); // Igualdad (false), tipo de dato number

console.log(numerazo == "31"); // Desigualdad (true), tipo de dato string

/* El operador de igualdad (==) no es estricto, y en este caso que el tipo de dato es "string" y no "number",
pero el valor es el mismo "31", devuelve "true", ya que se compara el valor y no el tipo de dato. */



// IGUALDAD ESTRICTA

// La igualdad estricta (===), se utiliza para comparar dos valores y tipos de datos, y devolver un valor booleano (true o false),

/* Si queremos que sea más estricto, debemos usar este operador, ya que compara el valor y los tipos de datos */

console.log(numerazo === 31); // Igualdad estricta (true), tipo de dato number

console.log(numerazo === "31"); // Igualdad estricta (false), tipo de dato string



// DESIGUALDAD

// Desigualdad (!=), (no igual) se utiliza para comparar dos valores y devolver un valor booleano (true o false).

console.log(numerazo != 31); // Desigualdad (false), tipo de dato number

console.log(numerazo != 32); // Desigualdad (true), tipo de dato number


/* El operador de desigualdad (!=) no es estricto y no compara el tipo de dato, solo su valor, si el valor es igual, devuelve "false" ya que son el mismo valor, pero si es diferente, devuelve "true". */



// DESIGUALDAD ESTRICTA

// Desigualdad estricta (!==), se utiliza para comparar dos valores y tipos de datos, y devolver un valor booleano (true o false).

console.log(numerazo !== 31); // Desigualdad estricta (false), tipo de dato number

console.log(numerazo !== "31"); // Desigualdad estricta (true), tipo de dato string



// MAYOR QUE

// Mayor que (>), se utiliza para comparar dos valores y devolver un valor booleano (true o false).

console.log(numerazo > 30); // Mayor que (true), tipo de dato number

console.log(numerazo > 31); // Mayor que (false), tipo de dato number

console.log(numerazo > "30"); // Mayor que (true), tipo de dato string



// MENOR QUE

// Menor que (<), se utiliza para comparar dos valores y devolver un valor booleano (true o false).

console.log(numerazo < 30); // Menor que (false), tipo de dato number

console.log(numerazo < 31); // Menor que (false), tipo de dato number

console.log(numerazo < "32"); // Menor que (true), tipo de dato string



// MAYOR O IGUAL QUE

// Mayor o igual que (>=), se utiliza para comparar dos valores y devolver un valor booleano (true o false).

console.log(numerazo >= 31); // Mayor o igual que (true), tipo de dato number

console.log(numerazo >= 32); // Mayor o igual que (false), tipo de dato number

console.log(numerazo >= "31"); // Mayor o igual que (true), tipo de dato string



// MENOR O IGUAL QUE

// Menor o igual que (<=), se utiliza para comparar dos valores y devolver un valor booleano (true o false).

console.log(numerazo <= 31); // Menor o igual que (true), tipo de dato number

console.log(numerazo <= 32); // Menor o igual que (true), tipo de dato number

console.log(numerazo <= "31"); // Menor o igual que (true), tipo de dato string
