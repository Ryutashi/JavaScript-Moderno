// BLOQUE 1

/* EJERCICIO 1

Calcula cuantas horas le llevaría llegar a la luna a una nave espacial y guarda el resultado en una variable.

La distancia desde la tierra hasta la luna es de 384.400 kilometros.

La velocidad de la nave es de 1225 kilometros por hora. */ 


let distancia = 384400; // Distancia a la luna en kilómetros

let velocidadNave = 1225; // Velocidad de la nave en kilómetros por hora

let horas = distancia / velocidadNave; // Tiempo en horas para llegar a la luna

console.log("Horas para llegar a la luna: " + horas + " horas"); // Horas para llegar a la luna: 313.7959183673469 horas



// Si queremos redondear el resultado a un número entero, podemos usar Math.round()
horas = Math.round(horas); // Redondear a número entero

console.log("Horas para llegar a la luna (redondeado): " + horas + " horas"); // Horas para llegar a la luna: (redondeado): 314 horas








// BLOQUE 2

/* EJERCICIO 2 

Tenemos 7 cajas con 8 cookies rellena de chocolate cada una.

¿Cuántas cookies en total tenemos en realidad? */


let cajas = 7; // Número de cajas

const cookies = 8; // Número de cookies por caja

let totalCookies = cookies * cajas; // Total de cookies

console.log("Total de cookies: " + totalCookies + " cookies"); // Total de cookies: 56 cookies








//BLOQUE 3

/* EJERCICIO 3

¿Cuantos minutos tienen 7 horas?

Utiliza variables y operadores para resolverlo */


const minuto = 60; // Cantida de munutos

let hora = 7; // Cantidad de horas

let total = minuto * hora; // Total de minutos

console.log("7 horas tiene: " + total + " minutos"); // 7 horas tienen: 420 minutos








//BLOQUE 4

/* EJERCICIO 4

Tenemos una jirafa en el zoo que pesa 1.120 kilos.

Y le damos de comer 141 kilos de hojas frescas.

¿Cuanto pesa ahora la jirafa? */


let jirafaKg = 1120;

const hojasFrescas = 141;

let pesoTotal = jirafaKg + hojasFrescas;

console.log("El peso final de la jirafa tras comer " + hojasFrescas + " kilos de hojas frescas es: " + pesoTotal + " kilos"); // El peso final de la jirafa tras comer 141 kilos de hojas frescas es: 1261 kilos

// TEMPLATE STRING

/* En lugar de utilizar comillas dobles (""), podemos utilzar comillas invertidas (``) para incluir variables directamente en el texto.
con dollar y llaves ${} podemos incrustar para interpolar una variable

Tambien nos permite realizar saltos de linea cuando queramos incrustar ciertos trozos que hemos procesado con JavaScript de HTML en nuestro HTML principal */

console.log(`El peso final de la jirafa tras comer ${hojasFrescas} kilos de hojas frescas es: ${pesoTotal} kilos`); // El peso final de la jirafa tras comer 141 kilos de hojas frescas es: 1261 kilos







//BLOQUE 5

/* EJERCICIO 5

Tengo una tarta de queso con 16 porciones.

Cada porción cuesta 3.8 euros.

¿Si vendo todas las porciones, cuánto dinero gano en total? */


const tartaPorciones = 16; // Porciones de tarta

let valorPorcion = 3.8; // Precio por porción

let totalGanancias = valorPorcion * tartaPorciones; // Total de ganancias|


console.log(`Si vendo todas las ${tartaPorciones} porciones de la tarta a ${valorPorcion} euros, gano un total de ${totalGanancias} euros.`) // Si vendo todas las 16 porciones de la tarta a 3.8 euros, gano un total de 60.8 euros.









//BLOQUE 6

/* EJERCICIO 6

En mi tienda de videojuegos tenemos una oferta.

Si compras un juego de 50 euros o más, te hacemos un 20% de descuento.

Si un cliente compra el Tekken 7 que cuesta 50 euros, ¿En cuento le sale el juego con el descuento aplicado? */


const Tekken7 = 50; // Precio del juego

let oferta = 0.2; // Descuento del 20%

let totalDescuento = oferta * Tekken7; // valor a descontar  (10 euros) = (0.2 * 50)

let precioConDescuento = Tekken7 - totalDescuento; // Precio final del juego

console.log(`El precio final de Tekken 7 con el descuento del 20% aplicado es: ${precioConDescuento} euros.`); // El precio final de Tekken 7 con el descuento del 20% aplicado es: 40 euros.








//BLOQUE 7

/* EJERCICIO 7

Tenemos un circulo con un diametro de 18 cm.

Calcula el radio del circulo y ponlo en una alerta. */


const diametro = 18; // Diámetro del círculo

let radio = diametro / 2; // Radio del círculo (18 / 2 = 9 cm)

console.log(`El radio del círculo es: ${radio} cm`); // El radio del circulo es: 9 cm

// alert(`El radio del círculo es: ${radio} cm`); // Muestra el radio en una alerta








//BLOQUE 8

/* EJERCICIO 8

Tengo una heladeria y cada bola de helado vale 1.8 euros.

¿Cuanto cuestan los conos de 1, 2 y tres bolas.

Ten en cuenta que el barquillo cuesta cincuenta centimos de euros (0.50). */


let precioBola = 1.8;

const barquillo = 0.50;


let heladoX1 = precioBola + barquillo;

let heladoX2 = (precioBola * 2) + barquillo;

let heladoX3 = (precioBola * 3) + barquillo;



console.log(`
    1. Cono de una bola: ${heladoX1} euros
    2. Cono de dos bolas: ${heladoX2} euros
    3. Cono de tres bolas: ${heladoX3} euros
 `); 

 // 1. Cono de una bola: 2.3 euros
 // 2. Cono de dos bolas: 4.1 euros
 // 3. Cono de tres bolas: 5.9 euros








 //BLOQUE 9

/* EJERCICIO 9

Una milla son 1.6 kilometros.

¿Cuantos kilometros tiene una autopista de 120 millas? */


const milla = 1.6;

let autopista = 120;

let kilometros = milla * autopista;

console.log(`Una autopista de 120 millas tiene: ${kilometros} kilometros`); // Una autopista de 120 millas tiene: 192 kilometros 









 //BLOQUE 10

/* EJERCICIO 10

El otro dia fuí con mi amigo Pepe y Manolo a un restaurante de smash burgers.

Yo me comí 2, Pepe se comió 3, y Manolo, como es culturista se comio 6.

¿Cuantas hamburguesas nos comimos en total?

Y... ¿Es cierto que yo comí menos que Pepe?

Responde a estas dos preguntas devolviendo el resultado en la consola del navegador. */



let yo = 2;

let pepe = 3;

let manolo = 6;

let totalHamburguesas = yo + pepe + manolo;

let esCierto = yo < pepe;


console.log(`En total comimos: ${totalHamburguesas} hamburguesas`); // En total comimos: 11 hamburguesas

console.log(`¿Es cierto que comí menos que pepe?: ${esCierto}`) // Es cierto que comí menos que pepe?: true

    
    




