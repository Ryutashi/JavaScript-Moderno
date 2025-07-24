// ESTRUCTURAS DE CONTROL

// CONDICIONAL IF

/* 
Las estructuras de control son instrucciones que permiten al programa tomar decisiones basadas en condiciones.

Esto es lo que se conoce como una estructura de control condicional, y en JavaScript se implementa con la sentencia if.

Si algo es verdadero, el programa hace una cosa, y si no, hace otra, o no hace nada.

Por ejemplo, si A es igual a B, entonces haz algo, si no, haz otra cosa.

*/


let estaLloviendo = true;

if (estaLloviendo == true) {
    // Si la condición es verdadera, se ejecuta este bloque de código, en este caso es verdadera, y se ejecuta solo este bloque.
    console.log("Lleva paraguas!!"); // Lleva paraguas!!

}else {
    // Si la condición es falsa, se ejecuta este bloque de código
    console.log("No hace falta paraguas"); // No hace falta paraguas
}


// else no es obligatorio, pero es una buena práctica incluirlo para manejar el caso en que la condición no se cumple.
