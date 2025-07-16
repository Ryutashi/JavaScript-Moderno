// CONSTANTES

/* En JavaScript, las constantes se definen con la palabra reservada "const". A diferencia de las variables definidas con "let", las constantes no pueden ser reasignadas una vez que se les ha asignado un valor. 
Esto significa que una vez que se ha definido una constante, su valor no puede cambiar. */

let nombre = "Jose Luis";
let web = "https://www.josecrow.com";


const cedula = "7779042";
/* Definimos una constante llamada "cedula" y le asignamos el valor "7779042", que en este caso va a ser un string o una cadena de texto,
al ser una cédula, es un dato que no va a cambiar con el tiempo, por lo que es apropiado usar una constante. */


console.log(nombre, web, cedula); // Esto nos da como resultado: 'Jose Luis', 'https://www.josecrow.com', '7779042'


cedula = "6544432"; 
/* Si intentamos cambiar al valor de una constante como en este ejemplo, lo que va a suceder es que en la consola del navegador se mostrará un error indicando que no se puede reasignar una constante.

Esto solo se puede hacer con variables definidas con "let" y "var" */


/* Es recomendable usar las constantes en los casos donde tengamos datos que nunca jamás deben ser modificados a nivel programático */

