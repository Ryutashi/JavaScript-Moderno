// TEMPLATE STRING


/* El template string es una forma de crear cadenas de texto en JavaScript que permite incluir variables y expresiones dentro de la cadena de manera más legible y sencilla.

Se utiliza comillas invertidas (``) en lugar de comillas simples ('') o dobles ("") para definir el template string.

Dentro del template string, se pueden incluir variables y expresiones utilizando la sintaxis ${variable} para interpolar el valor de la variable directamente en la cadena de texto. */


let jirafaKg = 1120;

const hojasFrescas = 141;

let pesoTotal = jirafaKg + hojasFrescas;

// OPCIÓN 1
// COMILLAS DOBLES O SIMPLES ("")('')
console.log("El peso final de la jirafa tras comer " + hojasFrescas + " kilos de hojas frescas es: " + pesoTotal + " kilos"); // El peso final de la jirafa tras comer 141 kilos de hojas frescas es: 1261 kilos


 
// OPCIÓN 2 (TEMPLATE STRING)
// COMILLAS INVERTIDAS (``)

/* 

En lugar de utilizar comillas dobles (""), podemos utilzar comillas invertidas (``) para incluir variables directamente en el texto.
Con dollar y llaves ${} podemos incrustar para interpolar una variable.
Tambien nos permite realizar saltos de linea cuando queramos incrustar ciertos trozos que hemos procesado con JavaScript de HTML en nuestro HTML principal

*/

console.log(`El peso final de la jirafa tras comer ${hojasFrescas} kilos de hojas frescas es: ${pesoTotal} kilos`); // El peso final de la jirafa tras comer 141 kilos de hojas frescas es: 1261 kilos
