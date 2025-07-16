// VARIABLES

/* En un principio vamos a ver como se usan las variables que se definen con la palabra reservada "let", pero en la sección de "condicionales"
aprenderemos la diferencia entre "let", "var" y "const" 

En este caso y por regla general utilizaremos la palabra reservada "let" para definir nuestra variable */

let heroe = "Batman"; 
/* En este caso hemos definido una variable llamada "heroe" y le hemos asignado el valor "Batman", que debemos poner entre comillas dobles o simples 
porque es un "string" o una cadena de texto. */

let universo = "DC";
/* definimos una variable llamada "universo" y le hemos asignado el valor "DC", que también es un "string" o cadena de texto. */

let edad = 50;
/* definimos una variable llamada "edad" y le hemos asignado el valor 50, que es un número. En este caso no es necesario ponerlo entre comillas, al igual que los booleanos y otros tipos de datos, pero en este caso, por que es un número y no un "string". */

let heroe_y_universo = heroe + " de " + universo;
/* Tambien podemos concatenar o unir varias variables, en este caso hemos definido una variable llamada "heroe_y_universo" y le hemos asignado el valor de la concatenación de las variables "heroe" y "universo" que unimos con un "+", separadas por la cadena de texto " de ". */



console.log(heroe); // Mostramos el valor de la variable "heroe" en la consola del navegador que es: "Batman".

console.log(heroe_y_universo); // Mostramos el valor de la variable "heroe_y_universo" en la consola del navegador que es: "Batman de DC".

alert(universo); // Mostramos el valor de la variable "universo" en una ventana emergente de alerta que es: "DC".


// Podemos cambiar o sustituir el valor de una variable en cualquier momento.

// Como ya habiamos definido la variable anteriormmente, no es necesario volver a declararla con "let", simplemente asignamos un nuevo valor, por ejemplo:


heroe = "Spiderman"; // Ahora la variable "heroe" tiene el valor "Spiderman", si volvemos a mostrarla en la consola veremos que ha cambiado.

universo = "Marvel"; // Ahora la variable "universo" tiene el valor "Marvel", si volvemos a mostrarla en la consola veremos que ha cambiado.

edad = 25; // Ahora la variable "edad" tiene el valor 25, si volvemos a mostrarla en la consola veremos que ha cambiado.



/* Tambien podemos pasarle varios parámetros al "console.log" de las variables que tenemos, por ejemplo: */

console.log(heroe, universo, edad);
// Esto mostrará en la consola del navegador los valores de las variables "heroe", "universo" y "edad" y dará como resultado: "Spiderman Marvel 25".
