// VENTANAS Y ALERTAS


/*  Las ventanas emergentes son elementos de la interfaz de usuario que aparecen sobre el contenido de la página web y requieren la interacción del usuario. 
Los tipos más comunes de ventanas emergentes son las alertas, las confirmaciones y los prompts. */



// ALERTAS


let mensaje = "Este es un mensaje de alerta";

alert(mensaje); // Muestra una alerta con el mensaje.






// CONFIRMACIÓN 


let pregunta = confirm("¿Estas seguro que deseas continuar?"); // Confirmación para realizar una acción

console.log(pregunta); // En la consola vemos si el dato de tipo "boolean" es "true" o "false" según haya aceptado o rechazado la confirmación






// PROMPTS (INGRESO DE DATOS)


let nombre = prompt("¿Cual es tu nombre?"); // Pregunta de ingreso de datos tipo string o texto

let edad = parseInt(prompt("¿Que edad tienes?")); // Pregunta de ingreso de datos tipo number o número


console.log(nombre); // En la consola podemos ver el dato de tipo "string" que ingresó el usuario

console.log(edad); // De igual manera para el dato de tipo "number"
