// NUEVAS FUNCIONES Y MÉTODOS PARA ARRAYS EN JAVASCRIPT




let dispositivos = ['ps5', 'pc', 'laptop', 'tablet', 'smartphone', 'smartwatch'];





// SOME

// Método ".some()" para comprobar si al menos un elemento en el array cumple con una condición específica

let tieneSmart = dispositivos.some(dispositivos => dispositivos.includes('smart')); // Comprobamos si almenos un dispositivo incluye la palabra 'smart'

// Devolvemos el resultado por consola, en este caso devuelve true porque hay varios dispositivos que incluyen 'smart' como 'smartphone' y 'smartwatch'
console.log(tieneSmart); // true







// EVERY

// Método ".every()" para comprobar si todos los elementos en el array cumplen con una condición específica

let todosSonSmart = dispositivos.every(dispositivo => dispositivo.includes('smart')); // Comprobamos si todos los dispositivos incluyen la palabra 'smart'

// Devolvemos el resultado por consola, en este caso devuelve false porque no todos los dispositivos incluyen 'smart'
console.log(todosSonSmart); // false







// APLANAR UN ARRAY (FLAT)

// Método ".flat()" para aplanar un array de arrays en un solo array


// Tenemos un array de arrays con varios dispositivos dentro de otros arrays
let arrayDeArrays = [['ps5', 'pc', ['monitor, teclado, raton']], ['laptop', 'tablet'], ['smartphone', 'smartwatch']];

// Se usa flat(2) para aplanar el array de arrays hasta 2 niveles de profundidad o 2 dimensiones
let aplanar = arrayDeArrays.flat(2); // Aplanamos el array de arrays, para que todos los dispositivos queden en un solo array

// Devolvemos el resultado por consola, ahora todos los dispositivos están en un solo array
console.log(aplanar); // [ 'ps5', 'pc', 'monitor, teclado, raton', 'laptop', 'tablet', 'smartphone', 'smartwatch' ]







// COPYWITHIN

// Método ".copyWithin()" para copiar una parte del array dentro del mismo array, sobrescribiendo los elementos existentes

let consolasPortatiles = ['Steam Deck', 'Asus ROG Ally', 'Lenovo Legion Go', 'MSI Claw 8', 'Nintendo Switch 2', 'Ayaneo 2'];

// El primer parámetro es el índice de destino donde se copiarán los elementos
// El segundo parámetro es el índice de inicio desde donde se copiarán los elementos
// El tercer parámetro es el índice final (no incluido) hasta donde se copiarán los elementos
let copiarDentro = consolasPortatiles.copyWithin(0, 3, 5); // Copiamos los elementos desde el índice 3 hasta el 5 y los pegamos empezando desde el índice 0

// Devolvemos el resultado por consola, los elementos en los índices 0 y 1 han sido sobrescritos
console.log(copiarDentro); // [ 'MSI Claw 8', 'Nintendo Switch 2', 'Lenovo Legion Go', 'MSI Claw 8', 'Nintendo Switch 2', 'Ayaneo 2' ]







// CONVERTIR STRING A ARRAY (FROM)

// Método ".from()" para convertir una cadena de texto en un array, separando cada carácter en un elemento del array


let cadenaTexto = 'Dispositivos';

let convertirArray = Array.from(cadenaTexto); // Convertimos la cadena de texto en un array

// Devolvemos el resultado por consola, cada carácter de la cadena es un elemento del array
console.log(convertirArray); // [ 'D', 'i', 's', 'p', 'o', 's', 'i', 't', 'i', 'v', 'o', 's' ]







// DESESTRUCTURAR UN ARRAY (DESTRUCTURING)


// La desestructuración de arrays nos permite extraer valores de un array y asignarlos a variables individuales


// Tenemos varias variables asignadas de golpe, y tres valores asignados de una vez
let [uno, dos, tres] = [1, 2, 3]; // Desestructuramos el array y asignamos los valores a las variables uno, dos y tres


// Devolvemos el resultado por consola, mostrando los valores de las variables
console.log(uno); // 1
console.log(dos); // 2
console.log(tres); // 3




// También podemos usar la desestructuración para extraer el primer elemento de un array y el resto de elementos en otro array usando el operador rest "..."
let [dispositivo, ...restoDispositivos] = ['pc', 'laptop', 'steam deck', 'ps5'];


console.log(dispositivo); // pc

console.log(restoDispositivos); // [ 'laptop', 'steam deck', 'ps5' ]








// EXPANDIR UN ARRAY (...SPREAD)


let array1 = [1, 2, 3];

let array2 = [4, 5, 6];

// Combinamos ambos arrays en uno nuevo usando el operador spread
let arrayCombinado = [...array1, ...array2]; // Usamos el operador spread "..." para expandir ambos arrays dentro de uno nuevo

// Devolvemos el resultado por consola, mostrando el array combinado
console.log(arrayCombinado); // [ 1, 2, 3, 4, 5, 6 ]







// DE ARRAY A STRING (TOSTRING)

// Método ".toString()" para convertir un array en una cadena de texto, separando los elementos por comas


let convertirString = dispositivos.toString(); // Convertimos el array en una cadena de texto

// Devolvemos el resultado por consola, mostrando la cadena de texto
console.log(convertirString); // 'tablet,smartwatch,smartphone,ps5,pc,laptop'








// DE STRING A ARRAY (SPLIT)

// Método ".split()" para convertir una cadena de texto en un array, separando los elementos por el valor que le indiquemos entre paréntesis

// Tenemos una cadena de texto con varios dispositivos separados por espacios
let cadena = 'monitor teclado ratón altavoces';

// Como parametro le pasamos el espacio ' ' para separar los elementos
let convertirArray2 = cadena.split(' '); // Convertimos la cadena de texto en un array

// Devolvemos el resultado por consola, mostrando el array
console.log(convertirArray2); // [ 'monitor', 'teclado', 'ratón', 'altavoces' ]







// PASAR A SEO SLUG

// Usando el array convertido anteriormente, unimos los elementos con guiones para crear un slug SEO
let slug = convertirArray2.join("-");


// Devolvemos el resultado por consola, mostrando el slug SEO
console.log(slug); // 'monitor-teclado-ratón-altavoces'
