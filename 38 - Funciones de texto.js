// FUNCIONES DE TEXTO


// LONGITUD

/* En JavaScript todo es un objeto, y en concreto cualquier variable con una cadena de texto dentro, 
se podría considerar un objeto, por lo tanto tiene ciertas propiedades o metodos que se pueden utiizar */



let nombre = "Jose Dev";


// Con la propiedad ".lenght" podemos saber la longitud de una cadena de texto.

// Es muy util para trabajar con las cadenas de texto

// El resultado por consola nos arroja que tiene 8 caracteres

// nombre.length   (nombre del objeto o variable + . + método o función)

console.log(nombre.length); // 8









// CONVERSIÓN A TEXTO


let numero = 7000;

// En este ejmplo se puede observar por consola el tipo de dato que tiene la variable "numero", en este caso es un "number"
console.log(typeof numero); // 'number'


// Si queremos cambiar el tipo de dato, se puede convertir a "string" con el método ".toString()"

console.log(typeof numero.toString()) // 'string'









// CONVERTIR TEXTO A MAYÚSCULAS


let web = "josecrowdev.net"


// Con el método ".toUppperCase()" podemos convertir todo el texto a mayúsculas


let webMayus = web.toUpperCase();

console.log(webMayus); // JOSECROWDEV.NET

// Opción más corta

console.log(web.toUpperCase()) // JOSECROWDEV.NET










// CONVERTIR TEXTO A MINÚSCULAS

// ".tolowerCase()" Funciona de la misma manera que el anterior, pero a la inversa


let plato = "PIZZA MEXICANA";

let platoMinus = plato.toLowerCase();

console.log(platoMinus); // 'pizza mexicana'

// Opción mas corta

console.log(plato.toLowerCase()) // 'pizza mexicana'










// CONSEGUIR O BUSCAR UNA LETRA CONCRETA

// El método ".chartAt()" funciona similar a los anteriores, con la diferencia que debemos pasar un parámero en los parentesis

// Como si fuera un array "[0]", debemos pasar el número de la posición de la letra para que la encuentre

/* Empezando desde la posición cero "0" como un array, siendo "0" la "S", y "4"la "j", 
los espacios tambien se cuentan y se reprensentan como una cadena o string vacío */


let frase = "Soy jose dev, desarrollador web";

let bucarLetra = frase.charAt(4);

console.log(bucarLetra); // 'j'

// Opción más corta

console.log(frase.charAt(6)); // 's'











// COMPROBAR SI HAY UNA CADENA (STRING) DENTRO DE OTRA

// Al igual que el anterior, con el método ".includes()" debemos pasar un parámetro que es la frase o el "string" que queremos comprobar

// En este caso se utiliza el método en un condicional "if"


let eslogan = "Jesus siempre está conmigo, hasta en la programación";

// Se incluye como parámetro el string "Jesus"
if (eslogan.includes("Jesus")) {
    
    // En este caso, en la cosola nos arroja este resultado, ya que si se incluye la frase o "string"
    console.log("la palabra SEGURAMENTE si existe en el eslogan"); // 'true'

}else {

    console.log("La palabra no existe");

}









// BUSCAR LA POSICIÓN DE UNA PALABRA

// Tambien podemos bucar la posición de una palabra con el método ".indexOf()", en este caso queremos buscar la posición de la palabra "autentico"


let mensaje = "Estas aprendiendo JavaScript como un autentico loco";

// Le pasamos por parámetro la frase a buscar
let posicionPalabra = mensaje.indexOf("autentico");

// En consola nos arroja que la palabra "autentico" se encuentra em la posición "37"
console.log(posicionPalabra); // 37


// Opción más corta

console.log(mensaje.indexOf("autentico")) // 37



// Esto lo podemos combinar por ejemplo con el método ".charAt()", colocando la posición "37" como parámetro o argumento
let buscarLetra37 = mensaje.charAt(37);

// En consola da como resultado la letra "a" que corresponde a la posición "37" precisamnete de la palabra "autentico"
console.log(buscarLetra37); // 'a'


// Opción más corta

console.log(mensaje.charAt(37)) // 'a'









// EXTRAER PARTE DE UN TEXTO

// Si queremos extraer o cortar el texto, el método ".slice()" nos permite realizarlo contanto las posiciones de las letras

// En este caso queremos extraer el texto "Master", contamos desce cero [0] que es la letra "M", hasta la posición [6] que es la letra "r"

let curso = "Master en JavaScript";


// Colocalos esto en los parámetros, separado por coma para extraer o cortar parte del texto
console.log(curso.slice(0,6)) // 'Master'

// Si queremos extraer texto de una posición más adelante
console.log(curso.slice(10,20)) // 'JavaScript'

// O bien, todo el texto a partir de una sola posición
console.log(curso.slice(0)) // 'Master en JavaScript'










// REEMPLAZAR PARTE DE UN TEXTO (STRING)

// El método ".replace()" nos permite reemplazar una parte del texto que seleccionemos

// En este caso se reemplaza "regalo" por "juguete", lo cual colocamos como parametro o argumento, empezando por el texto a reemplazar, y luego el nuevo


let pelicula = "El regalo prometido";


console.log(pelicula.replace("regalo", "juguete")); // 'El juguete prometido'



// Ahora, el método nuevo ".replaceAll()" reemplaza todas las coincidencias de texto si existen, a diferencia de la anterior que solo reemplaza una


let pelicula2 = "Dos tontos muy tontos"

console.log(pelicula2.replaceAll("tontos", "listos")); // 'Dos listos muy listos'











// TRIM O ELIMINAR ESPACIOS EN BLANCO


// El método ".trim()" Permite eliminar los espacios en blanco al inicio o al final de un string o cadena de texto

/* Es muy útil para login de usuarios o guardar información en bases de datos, ya que por error se suelen incluir espacios en el texto, 
y esto nos permite limpiarlos por completo */


// En este caso tenemos un correo con 3 espacio por delante
let email = "   josecrowdev@outlook.com";

// Como resultado, la consola arroja el texto sin espacios
console.log(email.trim()); // 'josecrowdev@outlook.com'











// SEPARAR CADENAS POR PARTES 

// El método ".split()" nos permite separar el texto y guardarlo en un array


let listaCompra = "Tarjeta gráfica,Procesador,Ram,SSD,Board,Disipador";

// Es importante indicar en el parámetro un separador, que puede ser una coma (,), un espacio (" "), o un guion (-)
// En este caso es una coma "," como separador
let listaArray = listaCompra.split(",");

console.log(listaArray); // Array(6) ['Tarjeta gráfica', ' Procesador', ' Ram', ' SSD', ' Board', ' Disipador' ]










// EXTRAER PARTE DE UN TEXTO #2

// El método ".substring()" funciona igual que el método ".slice()", la única diferencia es que no acepta índices negativos, el ".slice()" si


let curso2 = "Master en React";

// Extraemos el texto colocando como parámetro el índice o posición según se necesite
console.log(curso2.substring(0,6)); // 'Master'











// CONCATENAR O UNIR CADENAS DE TEXTO

// Concatenación clásica con el operador (+) y comillas dobles ("")

let ciudad = "Madrid";

let pais = "España";


let fraseFinal = "Mi ciudad es "+ ciudad + " y está en " + pais;


console.log(fraseFinal); // 'Mi ciudad es Madrid y está en España'



// TEMPLATE STRING

// Concatenación con comillas invertidas (``) y dollar llaves ${}

let fraseFinal2 = `Mi ciudad es ${ciudad} y esta en ${pais}`;

console.log(fraseFinal2); // 'Mi ciudad es Madrid y esta en España'



// MÉTODO ".concat()"


let fraseFinal3 = "".concat("Mi ciudad es ", ciudad, " y está en ", pais);

console.log(fraseFinal3); // 'Mi ciudad es Madrid y está en España'











// BUSCAR O COMPROBAR SI UNA CADENA DE TEXTO COMIENZA POR UNA PALABRA ESPECIFICA


// Con el método ".startsWith()" nos permite saber si un texto o string empieza con una palabra especifica

// Unicamente busca o encuentra la primera palabra, y según sea el caso, arrojará "true" o "false"


let frase2 = "Bienvenido al Master en JavaScript";

// Especificamos en el parámetro la frase, en este caso en "true"
console.log(frase2.startsWith("Bienvenido")); // true

                                             


// COMPROBAR SI UNA CADENA DE TEXTO TERMINA CON UNA PALABRA ESPECIFICA

// Con el método ".endsWith()" podemos saber si un texto o string termina con una palabra especifica, lo contrario al anterior método


let frase3 = "Bienvenido al Master en JavaScript";

// Especificamos en el parámetro la frase, en este caso en "true"
console.log(frase3.endsWith("JavaScript")); // 'true'










// REPETIR PALABRAS

// Con el método ".repeat()" podemos repetir el texto tantas veces como se necesite


let mensajito = "JavaScript es genial!!\n";

// Especificamos en el parámetro las veces que queremos replicar el texto, en este caso 3 veces
console.log(mensajito.repeat(3)); // 'JavaScript es genial!!\nJavaScript es genial!!\nJavaScript es genial!!\n'






// NOTA: Una funcíón es aquella que está fuera de un objeto, y un método es una función que esta dentro de un objeto
