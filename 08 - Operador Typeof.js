// OPERADOR typeof


let frase = "Hola, soy una cadena de texto"; 

let anio = 2027; 

let precio = 19.99;

let mayorDeEdad = true; 

let vacio;  

let nulo = null; 

let frutas = ["manzana", "banana", "naranja"]; 

let heroe = { nombre: "Batman", universo: "DC Comics" }; 




/* El operador typeof devuelve el tipo de dato de una variable, en la consola del navegador se muestra el tipo de dato correspondiente */

console.log(typeof frase);  // "string"
console.log(typeof anio);   // "number"
console.log(typeof precio); // "number"
console.log(typeof mayorDeEdad); // "boolean"
console.log(typeof vacio);  // "undefined"
console.log(typeof nulo);   // "object"
console.log(typeof frutas); // "object"
console.log(typeof heroe);  // "object"
console.log(typeof heroe.nombre); // "string"
console.log(typeof heroe.universo); // "string"
