// ARRAYS MULTIDIMENSIONALES 



// Es un array que tiene varias dimensiones de arrays en un mismo array (arrays dentro de otro)



// Tenemos 2 arrays basados en videojuegos, el primero con 6 categorías, el segundo con el nombre de 6 títulos

let categorias = ["RPG", "Lucha", "Acción", "Sandbox", "Carreras", "Deportes"];

let titulos = ["Final Fantasy", "Tekken", "Stellar Blade", "Horizon Zero Dawn", "Gran Turismo", "UFC"];



/*  Podemos unir todos estos datos en un solo array, bajo la variable "videojuegos", 
creamos un array que contenga los arrays anteriores de "categorias" y "titulos" que serían dos dimensiones */

let videojuegos = [categorias, titulos];

// En consola podemos ver que contiene todos los elementos anteriores de los 2 arrays
console.log(videojuegos); // [Array(6) [ 'RPG', 'Lucha', 'Acción', 'Sandbox', 'Carreras', 'Deportes' ],  Array(6) ['Final Fantasy', 'Tekken', 'Stellar Blade', 'Horizon Zero Dawn', 'Gran Turismo','UFC']]

/* Para acceder a los datos de un array de arrays, y seleccionar el array de "categorias", accedemos por consola a "videojuegos", 
luego entre corchetes, el primer valor que es [0] corresponde a "categorias", en el segundo valor seleccionamos el índice o la posicíon del elemento que es [2] para seleccionar "Acción" */
console.log(videojuegos[0][2]); // 'Acción'


/* De igual manera, para acceder al array de "titulos", entre corchetes el valor que corresponde a "títulos" es [1], luego en el segundo valor seleccionamos el indice [2] 
para seleccionar "Stellar Blade" */
console.log(videojuegos[1][2]); // 'Stellar Blade'






// ARRAYS BIDIMENSIONALES
 
 
// Tenemos una tabla multidimencional o 2D, contiene 4 arrays internos

// La tabla tiene 3 colunmas (vertical), y 4 filas (horizontal)

let tabla = [
    ["Prodcuto", "Cantidad", "Precio"],
    ["PC", 2, 900],
    ["Laptop", 1, 1200],
    ["NVIDIA GFORCE RTX 5080", 3, 1300]
];


/*  Al igual que antes, accedemos a los datos del array de la misma manera,
en este caso para ver el producto "Laptop" accedemos a la fila [2] y columna [0] */

// luego para ver su su precio, accedemos a la fila [2] y columna [2] 

console.log(tabla[2][0], tabla[2][2]); // [ 'Laptop', 1200 ]



// Para no acceder a cada elemento uno por uno, lo recorremos con un ".forEach"

tabla.forEach(fila => {
    
    // De esta manera en la consola se muestran todos los arrays que contiene la variable tabla
    console.log(fila);

    
    // Creando un forEach dentro de otro, podemos mostras todos los elementos de la variable tabla
    fila.forEach(elemento => {

        console.log(elemento);
    });


});



// Si usamos "console.table", nos mostrará en la cosnsola del navegador el array en formato tabla

// De esta manera podemos representar de manera correcta en la propia web la tabla con "document.write"

// document.write("<table>);

console.table(tabla);


/* ----------------------------------------------------------------------------------------------------
   |index               | 0                        | 1                      | 2                       |
   |--------------------------------------------------------------------------------------------------|                  
   | 0                  |'Producto'                |'Cantidad'              |'Precio'                 | 
   | 1                  |'PC'                      | 2                      | 900                     | 
   | 2                  |'Laptop'                  | 1                      | 1200                    |
   | 3                  |'NVIDIA GFORCE RTX 5080'  | 3                      | 1300                    |
   ----------------------------------------------------------------------------------------------------
*/




