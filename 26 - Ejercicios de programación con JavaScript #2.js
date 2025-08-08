// BLOQUE 11


/* EJERCICIO 11

Nuestros usuarios tienen gatos.

Y quieren saber que edad de gato tienen sus mascotas.

Un año de humano equivale a siete de gato.

Pregunta a los usuarios que edad tiene su gato y muestra un mensaje que diga "Tu gato tiene X años humanos". */
 



let edadGato = parseInt(prompt("¿Qué edad tiene tu gato? (en años)")); // Pregunta la edad del gato al usuario

let totalAñosGato = edadGato * 7; // Calcula la edad del gato en años humanos


if (totalAñosGato) {

    alert(`La edad de tu gato en años humanos es: ${totalAñosGato}`); // Muestra la edad del gato en años humanos

    console.log(`Tu gato tiene ${totalAñosGato} años humanos.`); // Tu gato tiene 14 años humanos

} 







// BLOQUE 12


/* EJERCICIO 12 

Haz un Programa que pida dos números, y que nos diga cual es mayor, el menor y si son iguales.

PLUS: si los números no son un número o son menores o iguales a cero, nos lo vuelva a pedir. */




let numero1 = parseInt(prompt("Introduce el primer número:", 0)); // Pide el primer número al usuario

let numero2 = parseInt(prompt("Introduce el segundo número:", 0)); // Pide el segundo número al usuario 


// Bucle "while para que nuevamente se repita la opción de introducir valores si se cumple esta condición

/* La función `isNaN` en JavaScript permite comprobar si un valor **no es un número** (“is Not a Number”). Devuelve `true` si el valor pasado no puede convertirse a número, y `false` si sí es un número válido, se usa para asegurarse de que el usuario introduzca valores numéricos válidos

Ejemplo:

isNaN(123);      // false (sí es un número)
isNaN("abc");    // true  (no es un número)
isNaN("123");    // false (puede convertirse a número)
isNaN(NaN);      // true */



while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {

    numero1 = parseInt(prompt("Introduce el primer número:", 0)); // Pide el primer número, valor por defecto de cero

    numero2 = parseInt(prompt("Introduce el segundo número:", 0)) // Pide el segundo número, valor por defecto de cero
    
}

// Creamos con "if las condiciones"

if (numero1 > numero2) {
    alert(`El número mayor es: ${numero1}, y el número menor es: ${numero2}`) // Mostramos en una alerta el resultado
    
}else if (numero2 > numero1) {
    alert(`El número mayor es: ${numero2}, y el número menor es: ${numero1}`) // Mostramos en una alerta ek resultado

    
    
}else if (numero1 === numero2) {
    alert(`Los números son iguales`) 
    
}else if (numero1 || numero2 <= 0) {
    alert("Por favor, introduce un valor mayor que cero."); 
    
}else {
    alert("Solo se permiten valores numéricos.");
    
} 








// BLOQUE 13


/* EJERCICIO 13 

Tengo un kanguro que salta tres metros cada vez.

Haz un programa que diga cuantos saltos ha dado el kanguro progresivamente...

y cual es la distancia total recorrida tras 17 saltos. */




let distanciaSalto = 3;

let saltos = 17;

let distanciaRecorrida = 0;

let distanciaTotal = distanciaSalto * saltos;

// Bucle "for" para contar cada vez que salta el kanguro, ademas para contar la distancia cada 3 metros
for (let contador = 1; contador <= saltos; contador++){
    // Empieza desde cero, se van sumando +3
    distanciaRecorrida += distanciaSalto;

    console.log(`El canguro ha saltado ${contador} veces, y ha recorrido ${distanciaRecorrida} metros`) // Mostramos el resultado por la consola

} 





    


// BLOQUE 14


/* EJERCICIO 14

Un DJ no sabe que género musical poner en la fiesta...

Preguntale al usuario que quiere (Pop, Rock, Rap)

Según lo que prefiera, devuelve un mensaje diferente. */



// Variable con el prompt para preguntar al usuario que género desea seleccionar
 let generoMusical = parseInt(prompt(`¿Que quieres escuchar?, selecciona una opción
    1 = Rock
    2 = Pop
    3 = Rap`));

    // condicional "switch" para seleccionar y mostrar una alerta del género musical escogido
    switch (generoMusical) {

        case 1: 
        alert("Has elegido Rock!");
        break;

        case 2: 
        alert("Has elegido Pop!");
        break;

        case 3:
        alert("Has elegido Rap!")

        default:
        alert("No has seleccionado ningún género");
    } 
        








// BLOQUE 15


/* EJERCICIO 15

Muestra la suma y la media de los números introducidos,

hasta introducir un numero negativo */



/* El bucle "do while" es mejor en este caso porque garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio. 
Así, el usuario siempre podrá introducir al menos un número antes de que se evalúe si es negativo y se termina el ciclo. 
Esto es útil cuando necesitas pedir datos al usuario al menos una vez, como en este ejercicio. */


let suma = 0;

let numero = 0;

let ejecuciones = 0;


// Bucle "do while", para comprobar primero que la variable "numero" es mayor o igual a cero
do {

    numero = parseInt(prompt("Dime números hasta que pongas uno negativo", 0))

    // Condicional "if con "isNanN" (is Not a Number) para comprobar si no es número, entonces igualar el número a cero, para que no se sume nada más
    if (isNaN(numero)){
        numero = 0;

    // Luego si "numero" es mayor o ogual a cero, 
    }else if (numero >= 0) {
        // suma = suma + numero
        suma += numero;

        // aqui se van contando las operaciones que se van haciendo
        ejecuciones++
    }



}while (numero >= 0);


alert(`La suma de los números es: ${suma}`);
alert(`La media de los números es: ${(suma / ejecuciones)}`); 










// BLOQUE 16


/* EJERCICIO 16

Escribe un programa que muestre la tabla de multiplicar del

numero que te diga el usuario */



// Variable a la cual se multiplicará el número ingresado, que luego se utiliza para incrementar su valor en 1 cada vez hasta llegar a 10
let multiplicar = 1;

// Variable para guardar resultados
let resultado;

// Variable tipo string o cadena vacía de texto, para luego agregarle un texto
let mensaje = "";

// Variable con el prompt para que el usuario ingrese un número
let tablaDeMultiplicar = parseInt(prompt(`Ingresa un número del 1 al 10 para mostrar la tabla`)); 


/* Creamos la condición en un "if", en la que se empieza negando el valor de (!isNaN) para que devuelva "true" si el valor si es un "número", 
además de si el número ingresado es mayor a "0", y menor o igual a "10" */

if (!isNaN(tablaDeMultiplicar) && tablaDeMultiplicar > 0 && tablaDeMultiplicar <= 10) {
    for (multiplicar = 1; multiplicar <= 10; multiplicar++) {
        // Definimos la variable resultado
        resultado = tablaDeMultiplicar * multiplicar;

        // Agregamos la variable mensaje que va a contener el resultado, y le concatenamos con "+=" para que se agreguen los demás textos o resultados,
        // Tambien le agregamos un salto de linea con "\n", para que no muestre el texto en una sola linea.
        mensaje += `${tablaDeMultiplicar} X ${multiplicar} = ${resultado}\n`;

        // Mostramos el resultado en la consola del navegador tambien
        console.log(`${tablaDeMultiplicar} X ${multiplicar} = ${resultado}\n`)
    }
    // mostranos el mensaje en una alerta
    alert(mensaje);
} else {
    // Si (!isNaN) devuelve "false", al no ser un número, se muestra esta alerta
    alert("Por favor, ingresa un número válido del 1 al 10.");
} 







// BLOQUE 17


/* EJERCICIO 17 

Mostrar todos los números impares que hay entre un rango de dos números ingresados por el usuario */


let primerNumero = parseFloat(prompt("Ingrese el primer número"));

let segundoNumero = parseFloat(prompt("Ingrese el segundo número")); 


/* Se utiliza el método "Math" que se usa para encontrar el menor y el mayor valor, respectivamente, entre dos o más números */


let menor = Math.min(primerNumero, segundoNumero);

let mayor = Math.max(primerNumero, segundoNumero);


//Se crea la variable con el mensaje de: Números impares entre "numero x" y "numero y"
let mensaje = `Números impares entre ${menor} y ${mayor}\n`;


/* Bucle "for" para recorrer el rango entre el primer número al segundo número ingresado por el usario ejemplo: (1....=>....20), 
graciás al método "Math", no importa el orden en que el usuario ingrese el número, es decir si es mayor o menor primero, 
ya que siempre se comienza por el que hayamos definido, en este caso por el menor */

/* Se inicializa y define la variable "rango" en el bucle, que ya es igual a la variable "menor", y con "+ 1"
le indicamos a "rango" que empiece el conteo un número despues o siguiente del número menor ingresado,
luego si "rango" es menor a la variable "mayor", activamos el contador con "rango++"  */


for (let rango = menor + 1; rango < mayor; rango++ ){

    // Si en "rango" el modulo o resto "%" dividido entre "2" no es exactamente "0" (es decir, devuelve "true" o verdadero si es impar)
    if(rango % 2 !== 0){

        // Entonces a la variable "mensaje" se agrega o concatena (despues del mensaje que ya tiene guardado) los números del bucle de la variable "rango" que representa los números impares encontrados, luego se concatena un salto de linea con "\n" por número encontrado.
        mensaje += rango + "\n"; 
    }
 
}
// Se muestra el mensaje en una alerta
alert(mensaje);

*/
