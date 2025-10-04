// FUNCIONES


// PARÁMETROS ...REST (resto de parámetros)



// Permite representar un número indefinido de argumentos como un array
// Un array es una colección de variables, que pueden ser de cualquier tipo de dato


// Ejemplo:

function misPeliculas(pelicula1, pelicula2, ...restoPeliculas) {

    console.log("Película 1: " + pelicula1); //'Pellicula 1: Batman'
    console.log("Película 2: " + pelicula2); //'Pellicula 2: Spiderman'
    console.log(restoPeliculas); // Muestra el array con las películas restantes ['Jurassic Park', 'Harry Potter', 'Sin limites']

}

// Llamada a la función con varios argumentos
misPeliculas("Batman", "Spiderman", "Jurassic Park", "Harry Potter", "Sin limites");
