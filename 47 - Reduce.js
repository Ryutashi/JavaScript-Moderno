// REDUCE


// Método ".reduce()" para reducir un array a un único valor según una función


// En este caso nos permite devolver el valor total y actual separados por comas



let dispositivos = ['ps5', 'pc', 'laptop', 'tablet', 'smartphone', 'smartwatch'];


// Creamos la variable reducir, que utiliza el método ".reduce()" sobre el array dispositivos

// ".reduce()" tiene dos parámetros: "total" que es el acumulador de valores, y "actual" que es el valor actual del array que se está procesando

// Se puede utilizar un solo parámetro, por ejemplo para obtener la suma de números, pero en este caso necesitamos ambos parámetros

// La función flecha recibe estos dos parámetros y devuelve la concatenación de ambos separados por una coma


let reducir = dispositivos.reduce((total, actual) => total + ', ' + actual);

// Devolvemos el resultado por consola separado por comas
console.log(reducir); // 'ps5, pc, laptop, tablet, smartphone, smartwatch'






// Tambien podemos colocar todo el texto en mayúsculas usando ".toUpperCase()", colocando el método en ambos valores "total" y "actual"

let reducirMayusculas = dispositivos.reduce((total, actual) => total.toUpperCase() + ', ' + actual.toUpperCase());

// Devolvemos el resultado por consola separado por comas y en mayúsculas
console.log(reducirMayusculas); // 'PS5, PC, LAPTOP, TABLET, SMARTPHONE, SMARTWATCH'





// Para colocar solo la primera letra de cada palabra en mayúsculas, usamos una función para ello

let reducirPrimeraMayuscula = dispositivos.reduce((total, actual, indice) => {
    
    // Creamos una variable para el total, inicialmente igual al total recibido o sin cambios
    let primeraMayusculaTotal = total;
    
    // Si el índice es 1 (el segundo elemento del array), aplicamos el cambio de primera letra en mayúsculas al total
    if (indice === 1){

        // Creamos una variable que contiene la primera letra en mayúsculas y el resto en minúsculas
        // Usamos "total[0]" para obtener la primera letra, y ".slice(1)" para obtener el resto del string desde la posición 1 en adelante
        // Como podemos enlazar métodos, usamos ".tolowerCase()" para convertir el resto del string a minúsculas
        primeraMayusculaTotal = total[0].toUpperCase() + total.slice(1).toLowerCase();
    }
    
    // Creamos una variable para el actual, con la primera letra en mayúsculas y el resto en minúsculas
    let primeraMayusculaActual = actual[0].toUpperCase() + actual.slice(1).toLowerCase();

    // Devolvemos la concatenación del total con la palabra con la primera letra en mayúsculas
    return primeraMayusculaTotal+ ', ' + primeraMayusculaActual;

});


// Devolvemos el resultado por consola separado por comas y con la primera letra en mayúsculas
console.log(reducirPrimeraMayuscula); // 'Ps5, Pc, Laptop, Tablet, Smartphone, Smartwatch'





// Lo anterior da a entender como funciona ".reduce()" con cadenas de texto, pero en realidad .reduce() se usa más comúnmente con números para obtener sumas, promedios, etc.




// Ejemplo de suma de números en un array usando .reduce()

let numeros = [10, 20, 30, 40, 50];

// Tenemos la variable suma, que utiliza el método .reduce() sobre el array numeros
// Con los parámetros "acumulador" (el total acumulado) y "numeroActual" (el número actual del array que se está procesando)
// También usamos el parámetro "iteraciones" para contar cuántas iteraciones se han realizado (opcional)
// La función flecha devuelve la suma del acumulador más el número actual
let suma = numeros.reduce((acumulador, numeroActual, iteraciones) => acumulador + numeroActual);

// Devolvemos el resultado por consola, que es la suma de todos los números del array
console.log(suma); // 150
