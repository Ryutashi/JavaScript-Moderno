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

        /* Entonces a la variable "mensaje" se agrega o concatena (despues del mensaje que ya tiene guardado) los números del bucle de la variable "rango" 
        que representa los números impares encontrados, luego se concatena un salto de linea con "\n" por número encontrado. */
        mensaje += rango + "\n"; 
    }
 
}
// Se muestra el mensaje en una alerta
alert(mensaje);










// BLOQUE 18


/* EJERCICIO 18

Tenemos una colección de numeros desde el 1 al 17.

Y el usuario tiene que adivinar cual es el elegido .

Haz un programa para que pueda adivinar el número */



// Creamos la constante con el número elegido
const numeroElegido = 7;

// Definimos la variable intento que contendrá el número ingresado, sin inicializar todavía
let intento;



/* creamos un bucle "while" infinito, y solamente se detendrá cuando no se cumpla esta condición, 
si "intento" no es igual a "numeroElegido" se seguirá ejecutando el bucle hasta que el usuario ingrese el número correcto */

while (intento != numeroElegido) {

    // Inicializamos la variable "intento" con el prompt para ingresar los números
    intento = parseInt(prompt("Adivina el número del 1 al 17"));

    // Con un "if" creamos la condición, si "numeroElegido" es estrictamente igual a "intento" (número ingresado por el usuario)
    if (numeroElegido === intento){

        // Se ejecuta un alert con el mensaje de ¡Enhorabuena!
        alert("¡Enhorabuena!\n Has adivinado el número")

    }else{
        // Si no se cumple o el falso, se ejecuta esta alerta
        alert("número incorrecto")

    }



}








// BLOQUE 19


/* EJERCICIO 19

Muestra todos los números divisores de un número ingresados en un prompt */



// Definimos la variable número con el prompt para ingresar los valores
let numero = parseInt(prompt("Ingresa un número para ver los divisores", 1));


// Con el bucle "for", inicializamos la variable "contador" en "1", luego cuando "contador" sea menor o igual al numero ingresado, inicie el conteo (contador++)
for(let contador = 1; contador <= numero; contador++){

    // Creamos la condición con "if", si el número ingresado, el módulo o resto (%) por el contador es igual a cero "0"
    if(numero % contador == 0){

        // Se muestra el resultado de los divisores por consola
        console.log(`El ${contador} es divisor de ${numero}`);
        
    }
    
    
}








//BLOQUE 20


/* EJERCICIO 20

En base al número que nos da el usuario.

Decirle si es par o impar. */


// Definimos la variable número con el prompt para ingresar los valores
let numero = parseInt(prompt("Ingrese un número:"));


// Validamos que el valor ingresado sea un número con el bucle while con isNaN.
while (isNaN(numero)) {

    // Se ejecuta un alert si el valor ingresado no es un número
    alert("El valor ingresado no es un número válido");


    // Se vuelve a pedir el número al usuario
    numero = parseInt(prompt("Ingrese un número:"));
    
}

/* Condicional "if" para determinar si el número es par o impar, 
donde la variable "numero" se divide entre 2 y si el resto o modulo (%) es 0, es par, de lo contrario es impar.*/
if (numero % 2 === 0) {
    alert(`El número ${numero} es par`);

}else {
    alert(`El número ${numero} es impar`);
}










// BLOQUE 21


/* EJERCICIO 21

CALCULADORA:

- Pida dos números por pantalla
- Si se ingresan números inválidos, que lo vuelva a pedir
- En caso de ingresar números válidos, pedir qué operación se quiere realizar
- Mostrar el resultado por consola y por pantalla en una alerta */



// Solicitar dos números al usuario

let numero1 = parseFloat(prompt("Ingrese el primer número:"));

let numero2 = parseFloat(prompt("Ingrese el segundo número:"));


// Validar que los números ingresados sean válidos con condicional "if" e isNaN
if(!isNaN(numero1) && !isNaN(numero2) ){
    numero1 = numero1;
    numero2 = numero2;

// Si uno de los números es inválido, pedir ambos números nuevamente
}else if (isNaN(numero1) && isNaN(numero2)) {

    // Mientras ambos números sean inválidos, seguir pidiendo los números en el bucle while
    while (isNaN(numero1) && isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        numero1 = parseFloat(prompt("Ingrese el primer número:"));
        numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
}


// Se definen las operaciones
let sumar = numero1 + numero2;

let restar = numero1 - numero2; 

let multiplicar = numero1 * numero2;

let dividir = numero1 / numero2;


// Solicitar la operación a realizar con condicional "if" y "toLowerCase" para evitar errores de mayúsculas y minúsculas
if (!isNaN(numero1) && !isNaN(numero2) ){
   
   // definimos la variable operacion con el prompt para ingresar la operación, se define con "var" para que sea accesible globalmente 
   var operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):").toLowerCase();
}




// Validar que la operación ingresada sea válida con el bucle while
while (operacion !== "sumar" && operacion !== "restar" && operacion !== "multiplicar" && operacion !== "dividir") {

    // Si la operación no es válida, mostrar un alert
    alert("Operación no válida. Por favor, ingrese una operación válida (sumar, restar, multiplicar, dividir).");

    // Volver a pedir la operación al usuario
    operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):").toLowerCase();

}


// Condicional "if" para mostrar el resultado de la operación por consola y por pantalla en una alerta
if (operacion === "sumar") {

    alert(`El resultado de la suma es: ${sumar}`);
    console.log(`El resultado de la suma es: ${sumar}`);


}else if (operacion === "restar") {

    alert(`El resultado de la resta es: ${restar}`);
    console.log(`El resultado de la resta es: ${restar}`);



}else if (operacion === "multiplicar") {

    alert(`El resultado de la multiplicación es: ${multiplicar}`);
    console.log(`El resultado de la multiplicación es: ${multiplicar}`);



}else if (operacion === "dividir") {

    alert(`El resultado de la división es: ${dividir}`);
    console.log(`El resultado de la división es: ${dividir}`);


}









// BLOQUE 22


/* EJERCICIO 22

Tenemos una bolsa con 37 caramelos.

Cada vez que te comes uno, quedan menos.

Haz una simulación de esto con un bucle. */



// Definimos la variable caramelos con el número inicial de caramelos

let caramelos = 37;


// Bucle while que se ejecuta mientras queden caramelos en la bolsa
while (caramelos >= 1) {

    // Definimos las variables "bolsa" y "comerUno" para mostrar el mensaje por consola, restando uno (-1) a la variable "caramelos" para mostrar los caramelos restantes
    let bolsa = `Quedan ${caramelos - 1} caramelos en la bolsa.`;
    
    let comerUno = `Haz comido un caramelo, ${bolsa}`;
    
    // Mostramos el mensaje por consola
    console.log(comerUno); // 'Haz comido un caramelo, Quedan 36 caramelos en la bolsa.'...
    
    // Restamos uno a la variable caramelos en cada iteración del bucle
    caramelos--;
    
    
}










// BLOQUE 23


/* EJERCICIO 23

Tenemos que despegar con un cohete al espacio

y necesitamos una cuenta regresiva de 10.

Hazlo con el bucle for. */



// Definimos las variables "cohete" y "mensaje" para mostrar los mensajes por consola
let cohete = "El cohete ha despegado satisfactoriamente";

let mensaje = "Iniciando cuenta regresiva...: ";

// Mostramos el mensaje por consola para iniciar primero el mensaje de la cuenta regresiva
console.log(mensaje);

// Bucle for que inicia en 10 y va decrementando hasta 1
for (let conteo = 10; conteo >= 1; conteo--) {

    
    console.log(conteo);

}

// Mostramos el mensaje por consola una vez finalizado el bucle, informando que el cohete ha despegado
console.log(cohete);
