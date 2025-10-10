// ARRAYS FUNDAMENTALES


// Un array en JavaScript es una lista ordenada de elementos

// Tambien se conoce como arreglos o matrices

// No deja de ser una serie de variables guardadas bajo un mismo nombre


// Ejemplo:


// Tenemos la variable nombre, donde tenemos un solo dato, una sola información

let nombre = "Jose Crow"


// Pero un Array es una colección de datos

// Cada uno de estos nombres tiene un índice o numeración, empezando desde cero

// Para luego poder acceder a cada elemento por su número

// ['0', '1', '2', '3', '4', '5']


let nombres = ['Jose', 'Juan', 'Luis', 'Estella', 'Viviana', 'Allison'];
//                0       1       2        3          4          5 

console.log(nombres); // Array(6) [ 'Jose', 'Juan', 'Luis', 'Estella', 'Viviana', 'Allison' ]

// Con ".length" podemos ver la longitud o cantidad de datos almacenados en la variable
console.log(nombres.length); // 6






// CONSTRUCTOR DE ARRAYS


// Esta manera de trabajar con arrays tambien es válida, pero la anterior es más sencilla y más utilizada

// Se comporta exactamente igual al anterior


let peliculas = new Array("Gran Gatsbi", "Crazy Stupid Love", "Troya", "Locos de ira");


console.log(peliculas); // [ 'Gran Gatsbi', 'Crazy Stupid Love', 'Troya', 'Locos de ira' ]


console.log(peliculas.length) // 4






// ACCEDER A LOS ELEMENTOS DE UN ARRAY

// Desde la consola podemos acceder a los elementos de un array, y colocar el índice del elemento entre corchetes "[]"

// Ejemplo:


// Array de nombres

console.log(nombres[0]); // 'Jose'

console.log(nombres[1]); // 'Juan'

console.log(nombres[2]); // 'Luis'

console.log(nombres[3]); // 'Estella'

console.log(nombres[4]); // 'Viviana'

console.log(nombres[5]); // 'Allison'


// Array de películas

console.log(peliculas[2]); // 'Troya'






//MODIFICAR ELEMENTOS DE UN ARRAY


/*  Si queremos modificar elementos de un array, seleccionamos la variable con el indíce a modificar,
luego reasignamos el valor como normalmente se hace, con el operador de asignación igual (=) y el nuevo valor */

nombres[0] = "Jose Dev";

// Nos da como resultado en consola el nuevo valor que se reasignó (Jose -> Jose Dev) 
console.log(nombres[0]); // 'Jose Dev'




