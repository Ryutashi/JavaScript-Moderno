// FUNCIONES PARA ARRAYS EN JAVASCRIPT



// Esto es un array vacío con un tamaño determinado, en este caso de 4 posiciones o longitud, pero esta es la forma menos usada de crear un array

let vacio = new Array (4);


console.log(vacio); // [ undefined, undefined, undefined, undefined ]




// Forma más común de crear un array con elementos

let dispositivos = ['PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch'];


console.log(dispositivos); // [ 'PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch' ]





// VER LONGITUD DE UN ARRAY (LENGTH)


// Método ".length" para conocer la longitud de un array

console.log(dispositivos.length); // 5




// AÑADIR ELEMENTOS A UN ARRAY (PUSH)


// Metodo ".push()" para añadir elementos al final de un array

dispositivos.push('PS5'); // Añade un elemento al final del array

dispositivos.push('Xbox Series X', 'Nintendo Switch'); // Añade varios elementos al final del array


// El resultado del método ".push()" es la nueva longitud del array, se han añadido 3 elementos, por lo que la nueva longitud es 8
console.log(dispositivos); // [ 'PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch', 'PS5', 'Xbox Series X', 'Nintendo Switch' ]





// ELIMINAR ELEMENTOS DE UN ARRAY (POP)


// Método ".pop()" para eliminar el último elemento de un array

dispositivos.pop(); // Elimina el último elemento del array

dispositivos.pop(); // Elimina otro elemento del final del array


// El resultado del método ".pop()" son dos elementos elimimados, en este caso 'Nintendo Switch' y 'Xbox Series X', ahora el array vuelve a tener 6 elementos
console.log(dispositivos); // [ 'PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch', 'PS5' ]





//AÑADIR ELEMENTOS AL INICIO DE UN ARRAY (UNSHIFT)


// Método ".unshift()" para añadir elementos al inicio de un array

dispositivos.unshift('PS4'); // Añade un elemento al inicio del array

dispositivos.unshift('PS3', 'PS2'); // Añade varios elementos al inicio del array


// El resultado del método ".unshift()" es la nueva longitud del array, se han añadido 3 elementos, por lo que la nueva longitud es 9
console.log(dispositivos); // [ 'PS2', 'PS3', 'PS4', 'PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch', 'PS5' ]






// ELIMINAR ELEMENTOS DEL INICIO DE UN ARRAY (SHIFT)


// Método ".shift()" para eliminar el primer elemento de un array

dispositivos.shift(); // Elimina el primer elemento del array

dispositivos.shift(); // Elimina otro elemento del inicio del array


// El resultado del método ".shift()" son dos elementos eliminados, en este caso 'PS2' y 'PS3', ahora el array vuelve a tener 7 elementos
console.log(dispositivos); // [ 'PS4', 'PC', 'Laptop', 'Tablet', 'Smartphone', 'Smartwatch', 'PS5' ]





// BUSCAR INDICES EN UN ARRAY (INDEXOF)


// Método ".indexOf()" para buscar el índice de un elemento en un array

let indice = dispositivos.indexOf('Laptop'); // Busca el índice del elemento 'Laptop' en el array

// Si no se encuentra el elemento, el método devuelve -1
console.log(indice); // 2




// BUSCAR SI EXISTE UN ELEMENTO EN UN ARRAY (INCLUDES)


// Método ".includes()" para saber si un elemento existe en un array

let existe = dispositivos.includes('Tablet'); // Busca si el elemento 'Tablet' existe en el array

// Si el elemento no existe, el método devuelve false
console.log(existe); // true





// FILTRAR ARRAYS (FILTER)

// Método ".filter()" para filtrar elementos de un array según una condición

// Para este método vamos añadir algunos elementos


dispositivos.push('Steam Deck');
dispositivos.push('Asus ROG Ally');
dispositivos.push('Lenovo Legion Go');


// Filtra los elementos del array que contienen la letra 'a' o 'A'
let dispositivosConA = dispositivos.filter(dispositivos => {
    
    // Creamos una variable resultado que inicialmente es false, para luego cambiarla a true si se cumple la condición
    let resultado = false;

    // Condición: si el elemento contiene la letra 'a' o 'A', cambiamos resultado a true
    // Con ".toLowerCase()" convertimos el string a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
    if (dispositivos.toLowerCase().includes('a')) {
        resultado = true;
    }
    // Devolvemos el resultado de la condición
    return resultado;
});

// Mostramos el array filtrado por consola de los elementos que contienen la letra 'a' o 'A'
console.log(dispositivosConA); // Array(6) ['Laptop', 'Tablet', 'Smartphone', 'Smartwatch', 'Steam Deck', 'Asus ROG Ally']




// Podemos simplificar el código del método ".filter()" usando una función flecha sin llaves ni return

let dispositivosConE = dispositivos.filter(dispositivos => dispositivos.toLowerCase().includes('s'));

// Mostramos el array filtrado por consola de los elementos que contienen la letra 's'
console.log(dispositivosConE); // Array(6) ['PS4', 'Smartphone', 'Smartwatch', 'PS5', 'Steam Deck', 'Asus ROG Ally']
