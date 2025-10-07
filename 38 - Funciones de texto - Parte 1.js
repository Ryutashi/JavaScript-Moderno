// FUNCIONES DE TEXTO


// LONGITUD

/* En JavaScript todo es un objeto, y en concreto cualquier variable con una cadena de texto dentro, 
se podría considerar un objeto, por lo tanto tiene ciertas propiedades o metodos que se pueden utiizar */



let nombre = "Jose Dev";


// Con la propiedad "lenght" podemos saber la longitud de una cadena de texto.

// Es muy util para trabajar con las cadenas de texto

// El resultado por consola nos arroja que tiene 8 caracteres

// nombre.length   (nombre del objeto o variable + . + método o función)

console.log(nombre.length); // 8









// CONVERSIÓN A TEXTO


let numero = 7000;

// En este ejmplo se puede observar por consola el tipo de dato que tiene la variable "numero", en este caso es un "number"
console.log(typeof numero); // 'number'


// Si queremos cambiar el tipo de dato, se puede convertir a "string" con el siguiente método

// numero.toString()  

console.log(typeof numero.toString()) // 'string'









// CONVERTIR TEXTO A MAYÚSCULAS


let web = "josecrowdev.net"


// Si queremos convertir todo el texto a mayúsculas, se debe usar el siguiente método

// web.toUpperCase()  

let webMayus = web.toUpperCase();

console.log(webMayus); // JOSECROWDEV.NET

// O tambien

console.log(web.toUpperCase()) // JOSECROWDEV.NET










// CONVERTIR TEXTO A MINÚSCULAS

// Funciona de la misma manera que el anterior

// plato.toLowerCase()


let plato = "PIZZA MEXICANA";

let platoMinus = plato.toLowerCase();

console.log(platoMinus); // 'pizza mexicana'

// O tambien

console.log(plato.toLowerCase()) // 'pizza mexicana'










// CONSEGUIR O BUSCAR UNA LETRA CONCRETA

// Funciona similar a los anteriores, con la diferencia que debemos pasar un parámero en los parentesis

// Como si fuera un array "[0]", debemos pasar el número de la posición de la letra para que la encuentre

/* Empezando desde la posición cero "0" como un array, siendo "0" la "S", y "4"la "j", 
los espacios tambien se cuentan y se reprensentan como una cadena o string vacío */

// frase.charAt()


let frase = "Soy jose dev, desarrollador web";

let bucarLetra = frase.charAt(4);

console.log(bucarLetra); // 'j'

// O tambien

console.log(frase.charAt(6)); // 's'











// COMPROBAR SI HAY UNA CADENA (STRING) DENTRO DE OTRA

// Al igual que el anterior, con este método debemos pasar un parámetro que es la frase o el "string" que queremos comprobar

// En este caso se utiliza el método en un condicional "if"

// eslogan.includes()


let eslogan = "Jesus siempre está conmigo, hasta en la programación";


if (eslogan.includes("Jesus")) {

    console.log("la palabra SEGURAMENTE si existe en el eslogan"); // 'true'

}else {

    console.log("La palabra no existe");

}





// NOTA: Una funcíón es aquella que está fuera de un objeto, y un método es una función que esta dentro de un objeto
