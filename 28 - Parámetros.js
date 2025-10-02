// FUNCIONES


// PARÁMETROS Y ARGUMENTOS



// Definición de la función con parámetros "nombre" y "plato"
function receta(nombre, plato) {

    // Uso de los parámetros dentro de la función concatenándolos en un mensaje
    console.log("Hola " + nombre + ", bienvenido a la receta de " + plato); // 'Hola Jose, bienvenido a la receta de Tortilla de patatas'

    // Retorno de un valor desde la función
    return "Receta ejecutada correctamente";
}

// Llamada a la función con argumentos "Jose" y "Tortilla de patatas"
let resultado = receta("Jose", "Tortilla de patatas");

// Impresión del valor retornado por la función
console.log(resultado); // 'Receta ejecutada correctamente'


// Llamadas adicionales a la función con diferentes argumentos

receta("Ana", "Ensalada"); // 'Hola Ana, bienvenido a la receta de Ensalada'
receta("Luis", "Paella"); // 'Hola Luis, bienvenido a la receta de Paella' 
receta("Marta", "Spaghetti"); // 'Hola Marta, bienvenido a la receta de Sopaghetti'
receta("Carlos", "Pizza"); // 'Hola Carlos, bienvenido a la receta de Pizza'
receta("Lucia", "Hamburguesa"); // 'Hola Lucia, bienvenido a la receta de Hamburguesa'



/* Al final un parámetro no es más que una variable que se define en la declaración de la función,
y un argumento es el valor que se pasa a esa variable cuando se llama a la función. */
