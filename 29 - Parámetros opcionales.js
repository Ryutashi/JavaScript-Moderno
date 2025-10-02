// FUNCIONES


// PARÁMETROS OPCIONALES



// Parámetro opcional: Un parámetro que puede ser omitido al llamar a la función. Si no se proporciona un valor, se utiliza un valor por defecto.

function receta(nombre = "Jose", plato = "tarta de queso") { // 'nombre' y 'plato' tienen un valor por defecto 

    // Uso de los parámetros dentro de la función concatenándolos en un mensaje//
    console.log("Hola " + nombre + ", bienvenido a la receta de " + plato); // 'Hola Jose, bienvenido a la receta de Tortilla de patatas'

    // Retorno de un valor desde la función
    return "Receta ejecutada correctamente";
}

// Llamada a la función con ambos parámetros, solo tiene el argumento 'nombre', se usa el valor por defecto para 'plato'
receta("Juan"); // 'Hola Juan, bienvenido a la receta de tarta de queso' 


// Llamada a la función sin argumentos, se usan los valores por defecto para ambos parámetros
receta(); // 'Hola Jose, bienvenido a la receta de tarta de queso' 


// Llamadas adicionales a la función con diferentes argumentos, como ya estan definidos, no se usa el valor por defecto.

receta("Ana", "Ensalada"); // 'Hola Ana, bienvenido a la receta de Ensalada'
receta("Luis", "Paella"); // 'Hola Luis, bienvenido a la receta de Paella' 
receta("Marta", "Spaghetti"); // 'Hola Marta, bienvenido a la receta de Sopaghetti'
receta("Carlos", "Pizza"); // 'Hola Carlos, bienvenido a la receta de Pizza'
receta("Lucia", "Hamburguesa"); // 'Hola Lucia, bienvenido a la receta de Hamburguesa'







