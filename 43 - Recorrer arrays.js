// BUCLES PARA RECORRER ARRAYS




// Tenemos un array con 6 elementos de nombres de actores

let actores = ["Arnold Schwarzenegger", "Silvester Stallone", "Jean Claude Van Damme", "Bruce Willis", "Leonardo Di Caprio", "Brad Pitt"];




// BUCLE FOR

/* Se define la variable de control "contador", que empieza desde cero "0" al igual que el array, y termine cuando contador sea menor a la longitud del array "actores", 
luego se inicia el conteo con "contador" y el operador de incremento (++), para empezar el conteo desde "0",
y en cada iteración nos arroje un elemento del array consecutivaente hasta llegar al final de la longitud del array */ 


// El for clásico es interesante utilizarlo cuando necesitas controlar el índice o hacer operaciones especificas en cada iteración


for (let contador = 0; contador < actores.length; contador++){

    // En consola, accedemos a la variable actores, y en los corchetes colocamos como parámetro la variable "contador" para ver el recorrido total del array
    console.log(actores[contador]); // 'Arnold Schwarzenegger' 'Silvester Stallone' 'Jean Claude Van Damme' 'Bruce Willis' 'Leonardo Di Caprio' 'Brad Pitt'

}







// BUCLE FOR OF


// Es un bucle que esta diseñado perfectamente para recorrer los arrays, ya que accede directamente al contenido del array sin tener información alguna del índice

// Se crea una variable, en este caso "actor", y en cada iteración del array, la variable creada mostrará el total del recorrido del array

// El resultado es exactamente igual al anterior, pero mucho mas corto y limpio



// Se utilzar solo cuando te interesa acceder solo al valor y no al índice, algo rápido y sencillo



for (let actor of actores) {

    // En consola, solo accedemos a la variable que se creó, ya que cada iteración queda bajo esta variable
    console.log(actor); // 'Arnold Schwarzenegger' 'Silvester Stallone' 'Jean Claude Van Damme' 'Bruce Willis' 'Leonardo Di Caprio' 'Brad Pitt'

}








// BUCLE FOR IN


// Nos permite acceder al índice de un array, y al igual que la anterior, por cada iteración que hagamos del array, nos va a crear una variable con su índice

// Se crea una variable, en este caso "indice", y por cada iteración del array, nos va a crear una variable bajo esta variable llamada "indice"


// Se utiliza no solo para acceder al índice, si no también para recorrer propiedades de objetos


for (let indice in actores) {

    // En consola, solo accedemos a la variable que se creó, ya que cada iteración queda bajo esta variable
    console.log(indice); // '0' '1' '2' '3' '4' '5'

   
    // Tambien de esta manera, podemos acceder tanto al índice, como a los elementos que corresponden a cada índice
    console.log(indice, actores[indice]) // [ '0', 'Arnold Schwarzenegger' ] [ '1', 'Silvester Stallone' ] [ '2', 'Jean Claude Van Damme' ] [ '3', 'Bruce Willis' ] [ '4', 'Leonardo Di Caprio' ] [ '5', 'Brad Pitt' ]

}








// BUCLE FOREACH


/* Es un método ideal cuando se quiere aplicar una función a cada elemento del array, 
es decir, se permite pasar una función de callback que se ejecuta en cada iteración, 
y te da acceso al índice y al array completo si se requiere */

// El ".forEach" nos permite recorrer mediante una función normal o flecha todos los elementos de un array


// Es perfecto de utilizar por que usa una sintaxis elegante y moderna, si no necesitamos recorrer un array a la inversa, es decir desde el último elemento al primero


// En este caso, podemos pasar 2 parámetros, el primero equivale a los elementos, el segúndo al índice o la posición del elemento, y definirlo en una función de flecha
actores.forEach((elemento, numero) => {


    // En consola pasamos los parámetro anteriores, y el resultado es elemento con su respectivo índice
    console.log(elemento, numero); // [ 'Arnold Schwarzenegger', 0 ] [ 'Silvester Stallone', 1 ] [ 'Jean Claude Van Damme', 2 ] [ 'Bruce Willis', 3 ] [ 'Leonardo Di Caprio', 4 ] [ 'Brad Pitt', 5 ]

});



// MÁS SINPLIFICADO


// Si solo pasamos un parámetro, se puede omitir el paréntesis
actores.forEach(elemento => {

    console.log(elemento); // 'Arnold Schwarzenegger' 'Silvester Stallone' 'Jean Claude Van Damme' 'Bruce Willis' 'Leonardo Di Caprio' 'Brad Pitt'
});







// BUCLE MAP


/* Tambien sirve para recorrer los elementos, y tiene algunas diferencias con el ".forEach",
 ya que el ".map" devuelve un nuevo array con el resultado tras aplicar una función, sin modificar el array original */


 // Nos sirve no solo para recorrer un array, si no también para cambiar cada elemento del array y devolver un nuevo array para transformar datos



 actores.map(elemento => {

    // En consola colocando el parámetro "elemento" da como resultado todos los elementos del array
    console.log(elemento);  // 'Arnold Schwarzenegger' 'Silvester Stallone' 'Jean Claude Van Damme' 'Bruce Willis' 'Leonardo Di Caprio' 'Brad Pitt'
 
 });




 // CON RETURN


  // Para acceder al return, debemos guardar todo en otra variable, en este caso "nuevoArray" 
  let nuevoArray = actores.map(elemento => {

    
    console.log(elemento);  // 'Arnold Schwarzenegger' 'Silvester Stallone' 'Jean Claude Van Damme' 'Bruce Willis' 'Leonardo Di Caprio' 'Brad Pitt'


    // Tambien podemos usar "return" para retornar un array nuevo concatenando la palabra "Hollywood" a cada elemento
    return elemento + " Hollywood";

 
 });


 // Acedemos a la variable en consola, y como resutado obtenemos todos los elementos de nuevo array con el string o la palabra concatenada que es "Hollywood"
 console.log(nuevoArray); // Array(6) ['Arnold Schwarzenegger Hollywood', 'Silvester Stallone Hollywood', 'Jean Claude Van Damme Hollywood','Bruce Willis Hollywood', 'Leonardo Di Caprio Hollywood', 'Brad Pitt Hollywood']
