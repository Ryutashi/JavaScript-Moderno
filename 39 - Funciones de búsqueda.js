// BUSCAR TEXTO EN UNA CADENA


// El método ".search()" nos permite buscar si la cadena o string existe, y en que posición está 


let texto = "Lo mejor de lo mejor en el Master en JavaScript";

// Especificamos en el parámetro o argumento la cadena que queremos buscar, en este caso está en la posición "3"
console.log(texto.search("mejor"));  // 3







// El método ".match()" devuelve lo mismo que la anterior, pero nos da información más completa en un array


console.log(texto.match("mejor")); // ['mejor', index: 3, input: 'Lo mejor de lo mejor en el Master en JavaScript', groups: undefined ]



// Ahora, si queremos buscar globalmente un texto, en caso de que este varias vaces en una cadema, commo es el caso de "mejor", debemos usar una expresión regular

// Ejemplo:

// Colocamos la expresión regular como parámetro entre diagonales, y nos da como resutado las dos cadenas texto que existen, pero sin los detalles como la anterior
console.log(texto.match(/mejor/g)); // [ 'mejor', 'mejor' ]





// NOTA: Una funcíón es aquella que está fuera de un objeto, y un método es una función que esta dentro de un objeto
