// Ejercicios con arrays



/* Hacer un programa que pida al usuario un elemento del array, 

si el elemento existe dentro del propio array, que muestre el nombre del usuario */


// FORMA 1


// Variable con el promp para seleccionar un usuario, por defecto "0"
let indice = parseInt(prompt("Selecciona un usuario del array", 0));


// Bucle while para el manejo de errores, en caso de ingresar valores invalidos negativos o menores a "0", o mayores a la longitud del array que es "6"

/* NOTA: La longitud del array en este caso es de [6], pero al comenzar siempre el índice desde cero [0], termina en [5] aunque sean 6 en total, 
por eso al ingresar un valor mayor o igual a la longitud, mostrará la alerta de "El usuario no existe"  */

while (indice < 0 || indice >= nombres.length || isNaN(indice)) {

    // Mensaje de alerta al ingresar valores invalidos
    alert("El usuario no existe");
    
    // Nuevamente pide ungresar un valor
    indice = parseInt(prompt("Selecciona un usuario del array", 0));
    
}



// Con el condicional "if" se valida que el valor ingresado es correcto, mayor o igual que "0", y menor a la longitud del array

/* NOTA: La longitud del array en este caso es de [6], pero al comenzar siempre el índice desde cero [0], termina en [5] aunque sean 6 en total, 
por eso el valor ingresado debe ser menor a la longitud, para que en vez de [6], sea [5] que es el correcto  */

if (indice >= 0 && indice < nombres.length) {

    // Se muestra en una alerta el resultado concatenando la variable "nombres" y entre corchetes el valor que contenga la variable "indice"
    alert(`El resultado es: ${nombres[indice]}`);

    console.log(indice);

};




// FORMA 2


// Manera sencilla sin manejo de errores


// Variable con el promp para seleccionar un usuario, por defecto "0"
let elemento = parseInt(prompt("Selecciona un usuario del array", 0));

/* Condicional "if" para verificar si el valor ingresado es mayor o igual a la longitud del array, en caso de ser verdadero, aunque
la longitud del array es de [6] elementos, se empieza a contar desde cero [0], por lo tanto el último número o índice sería [5] y no [6],
por esto se valida de esta manera, si el valor es mayor o igual a la longitud, muestra un alert de "El usuario no existe" */

if (elemento >= nombres.length){

    alert("El usuario no existe");


}else{

    // Se muestra en una alerta el resultado concatenando la variable "nombres" y entre corchetes el valor que contenga la variable "elemento"
    alert(`El resultado es: ${nombres[elemento]}`);


}
