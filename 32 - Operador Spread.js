// FUNCIONES


// OPERADOR SPREAD (...)

// Funciona igual que REST, pero al revés por que en lugar de agrupar, "expande"
// Se usa para "expandir" los elementos de un array o de un objeto en otro array u objeto


// Tenemos una variable que es un array con números
let numeros = [1, 2, 3, 4];

// Queremos añadir más números al array, pero sin modificar el array original
// Usamos el operador spread (...) para "expandir" el array dentro de uno nuevo
// De esta forma, creamos un nuevo array que contiene los elementos del array original más los nuevos números
let misNumeros = [...numeros, 5, 6, 7, 8, 9, 10];

console.log(misNumeros); // Muestra: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]




// Si no usamos el operador spread, el nuevo array contendrá el array original como un solo elemento
let misNumeros2 = [numeros, 5, 6, 7, 8, 9, 10]; 

console.log(misNumeros2); // Muestra: [[1, 2, 3, 4], 5, 6, 7, 8, 9, 10]



// Otro ejemplo con REST Y SPREAD

// Tenemos un array con nuestras películas favoritas

let misPelisfavoritas = ["Terminator 2", "Blade Runner", "Forrest Gump"];

// Función que recibe dos películas y el resto de películas como un array usando REST
// El operador REST se usa en la definición de la función para agrupar los argumentos restantes en un array
function misPeliculas(pelicula1, pelicula2, ...peliculasRestantes) {

    console.log("Película 1: " + pelicula1); // 'pelicula1: Terminator 2'
    console.log("Película 2: " + pelicula2); // 'pelicula2: Blade Runner'
    console.log(peliculasRestantes); // Muestra el array con las películas restantes: ['Forrest Gump', 'El Padrino', 'Desperado', 'Pulp Fiction']

}

// Llamamos a la función pasando el array con el operador SPREAD para expandir sus elementos
// Sin el operador SPREAD, el primer argumento sería el array completo y no funcionaría como esperamos
misPeliculas(...misPelisfavoritas, "El Padrino", "Desperado", "Pulp Fiction");
