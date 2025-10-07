// FUNCIONES DE FLECHA



// Además de usar la palabra reservada "function", la función flecha es una manera más corta y más moderna de trabajar con las funciones

// tiene dos maneras de utilizarse, al definir una función, o utilizarla en un callback



// UTILIZAR EN UNA FUNCIÓN


// Le pasamos como parámetro "ejemplo" (opcional)

// Si lleva un solo parámetro, no necesita ir obligatoriamente entre parentesis "()", pero si es más de un parámetro si
let funcionFlecha = (ejemplo) => {

    console.log("Esto es una función flecha como ejemplo "+ ejemplo); // 'Esto es una función flecha como ejemplo 1'

}


// Aqui le pasamos el valor de "1" al parámetro o argumento "ejemplo"
funcionFlecha(1)  




// UTILIZAR EN UN CALLBACK

setTimeout((callback = "callback") => {
    
    
    console.log("Estoy usando una función de flecha en un " + callback) // 'Estoy usando una función de flecha en un callback'
    
},2000);



// La ventaja de usar la funcíon flecha es que su sintaxis es mas corta, pero no se puede utilizar "this"

// Las funciones flecha son ideales para callbacks y métodos donde no necesitas un nuevo contexto de "this"

// Si necesitas que una función tenga su propio this, debes usar la sintaxis tradicional con "function"
