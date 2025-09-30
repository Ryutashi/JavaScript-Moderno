

// FUNCIONES


// Una función es un bloque de código reutilizable que realiza una tarea específica.

/* Por ejemplo, es como crear una formula muy compleja y muy larga, con una serie de ingredientes 
y una serie de pasos para seguir, pero recordarla es muy difícil, entonces lo que hacemos es
preparar la formula y darle un nombre, para que cuando la necesitemos simplemente llamemos o usamos
esa formula por su nombre y no tengamos que recordar todos los ingredientes y pasos nuevamente. */


// Definición de una función

function saludar() {
    console.log('Hola, bienvenido a la programación en JavaScript');
}

// Llamada o invocación de la función
saludar(); // Esto ejecuta el código dentro de la función y muestra el mensaje en la consola


/* Una función es como agrupar bajo un mismo nombre, una serie de instrucciones para que luego podemos usarla
siempre que queramos, sin tener que escribir todo el código nuevamente. */


// las ventajas de una funcion es que permite la reutilización de código y la organización del mismo.

// Puedes dividir tareas grandes en pequeñas funciones, para que haga cada función una cosa, lo que facilita la lectura y el mantenimiento del código.


// Otro ejemplo, podemos usar la funcion en un ciclo o bucle

for (let i = 0; i < 5; i++) {
    saludar(); // Llama a la función 5 veces
}
 

// Tambien podemos hacer un "return" en una función, para que la función nos devuelva un valor

function saludar() {
    console.log('Hola, bienvenido a la programación en JavaScript');

    return 'Saludo ejecutado correctamente'; // El return devuelve este valor cuando se llama a la función, pero no se muestra en consola
}

// para ver el valor devuelto por la función, podemos almacenarlo en una variable y luego mostrarlo en consola
let mensaje = saludar(); // Llamada a la función y almacenar el valor devuelto en una variable  
console.log(mensaje); // Muestra el valor devuelto por la función en la consola
