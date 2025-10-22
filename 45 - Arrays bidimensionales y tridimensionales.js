// ARRAYS BIDIMENSIONALES Y TRIDIMENSIONALES


/* Tenemos una tabla tridimencional o 3D, que es una carta de restaurante, contiene 4 arrays internos, 
cada uno con 4 elementos y cada elemento puede contener a su vez un array, es decir, 
un array de precios y un array de tamaños, con esto sería un array tridimensional */

// La tabla tiene 4 colunmas (vertical), y 4 filas (horizontal) contando el index o encabezado que es la primera fila


let cartaRestaurante = [
    ["Plato", "Cantidad", "Precio", "Tamaño"],
    ["Pizza", 2, [8, 10, 15], ["pequeno", "mediano", "grande"]],
    ["Burger", 4,[10, 12, 17], ["pequeno", "mediano", "grande"]],
    ["Sandwich", 10, [9, 11, 13], ["pequeno", "mediano", "grande"]]
];



// Recorremos el array tridimensional con un bucle "for...of"

// Creamos la variable "menu" para recorrer cada array interno de "cartaRestaurante"

for (let menu of cartaRestaurante) {
     
    // Creamos una separación visual en la consola para cada array interno, solo para mejorar la visualización
    console.log("-------------------------")
    
    // Luego con otro bucle for...of recorremos cada elemento del array interno, creeamos la variable "filas" para recorrer cada elemento de esa dimensión
    for (let filas of menu) {
        // De esta manera mostramos cada elemento de los arrays internos (plato, cantidad, precio y tamaño), pero los arrays de precios y tamaños se muestran como arrays completos
        console.log(filas); // Resultado 1


        //Ahora, si necesitamos recorrer los precios y los tamaños, tenemos que relaizar otro bucle for...of anidado, para ello, hacemos una comprobación con un "if" para ver si el elemento es un array

        // Array.isArray() es un método que devuelve true si el valor pasado es un array, de lo contrario devuelve false

        // Si Array.isArray(filas) devuelve true, significa que el elemento es un array
        if (Array.isArray(filas)) {

            // Si es un array, recorremos ese array con otro bucle for...of
            for (let subelemento of filas) {
                // De esta manera mostramos cada elemento de los arrays internos (precios y tamaños)
                console.log(subelemento); // Resultado 2
            }
         }else {
            // Si no es un array, mostramos el elemento directamente
            console.log(filas); // Resultado 3
        }
    }

}


// Resultado 1: 

/* 
------------------------------------
Plato
Cantidad
Precio
Tamaño
------------------------------------
Pizza
2
(3) [8, 10, 15]
(3) ['pequeno', 'mediano', 'grande']
------------------------------------
Burger
4
(3) [10, 12, 17]
(3) ['pequeno', 'mediano', 'grande']
-------------------------------------
Sandwich
10
(3) [9, 11, 13]
(3) ['pequeno', 'mediano', 'grande']
 */ 




// Resultado 2:

/*
-------------
8 
10 
15 
'pequeno' 
'mediano' 
'grande' 
-------------
10 
12 
17 
'pequeno' 
'mediano' 
'grande' 
-------------
9 
11 
13 
'pequeno' 
'mediano' 
'grande'
*/




// Resultado 3:

/*
-------------
'Plato' 
'Cantidad' 
'Precio' 
'Tamaño' 
-------------
'Pizza' 
2 
-------------
'Burger' 
4 
-------------
'Sandwich' 
10
*/

/* Podemos observar que el resultado 3 solo muestra los elementos que no son arrays, 
mientras que el resultado 1 muestra todos los elementos, incluyendo los de los arrays internos (precios y tamaños)
esto es por que en el "else" se muestra el elemento directamente, por lo tanto solo muestra elementos que no estan dentro de otros arrays, 
un ejemplo sería: ["Pizza", 2, [8, 10, 15], ["pequeno", "mediano", "grande"]], vemos que solo muestra los elementos que no son arrays, es decir: ["Pizza", 2] */






// Si queremos mostrar en concreto los datos más ordenados, o datos especificos, podemos acceder a ellos directamente de la siguiente manera:


for (let menu of cartaRestaurante) {

    if (Array.isArray(menu[2]) && Array.isArray(menu[3])) {

        console.log(`El plato es: ${menu[0]}, la cantidad es: ${menu[1]}, los precios son: ${menu[2]}, y los tamaños son: ${menu[3]}`);


    }
}
