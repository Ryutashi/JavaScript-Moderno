// MÁS FUNCIONES


// FUNCIONES ANÓNIMAS


// Son funciones que no tienen nombre, se suelen guardar en variables

// Son utilles cuando no necesitas reutilizar la función en otros lugares

// Se utilizan mucho en callbacks o funciones que se pasan como argumentos a otras funciones



// El nombre de la variable es el que se utiliza para invocar la función

const saludo = function(nombre = "") { // Podemos pasarle parámetros o argumentos a la función anónima, en este  caso un parámetro "nombre" con valor por defecto de cadena vacía
    console.log("Hola "+nombre+" desde una función anónima"); // 'Hola Jose desde una función anónima'
}

saludo();



// FUNCIONES DE CALLBACK

// Se pasan como parámetros o argumentos a otra función, para que esa función las ejecute en un momento determinado

// Un ejemplo muy común es el uso de "setTimeout" y "setInterval"



// Tenemos una variable que cuenta las veces que se ha ejecutado el "setInterval"
let veces = 0;


// "SetTimeout" y "SetInterval" son funciones que reciben una función anónima como primer argumento

// El primer parámetro o argumento es la función anónima que se va a ejecutar
setInterval(function() {

    veces++; // Incrementamos la variable "veces" en 1 cada vez que se ejecuta el "setInterval"

    console.log('Se ha e jecutado el setInterval ' + veces + ' veces'); // Cada segundo se ejecuta esta función anónima (1000 milisegundos = 1 segundo)

}, 1000);  // El segundo parámetro o argumento es el tiempo en milisegundos que debe esperar para ejecutar la función



// Podemos pasarle tambien al "setInterval" una función que ya hemos definido

/* Si le pasamons un parámetro como en este caso "Jose", que recibe la variable "nombre", 
la función se ejecuta un sola vez y no cada 2 segundos porque estamos invocando la función directamente */

setInterval(saludo("Jose"), 2000); // Se ejecuta una sola vez y no cada 2 segundos porque estamos invocando la función directamente, pero no se ejecuta como callback


// Si queremos que se ejecute como callback cada 2 segundos, tenemos que pasarle la referencia a la función anónima sin invocarla

// Ejemplo:
setInterval(function() {

    saludo("Jose"); // 'Hola Jose desde una función anónima'    

}, 2000); // Se ejecuta cada 2 segundos porque le pasamos la referencia a la función y no la invocamos directamente



// O también podemos definir la función por separado y pasarle la referencia

// Ejemplo:
setInterval(saludo, 2000) // Se ejecuta cada 2 segundos porque le pasamos la referencia a la función y no la invocamos directamente



