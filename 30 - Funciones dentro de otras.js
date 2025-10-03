// FUNCIONES


// FUNCIONES DENTRO DE OTRAS FUNCIONES


// Es una práctica común en programación para organizar el código y mejorar su legibilidad y mantenimiento.



// Función para realizar operaciones matemáticas básicas entre dos números, contiene un objetos con los resultados
function operaciones (numero1, numero2) { // Función principal que recibe dos números como parámetros

    // Objeto para almacenar los resultados de las operaciones
    let resultados = {
        "suma": (numero1 + numero2),
        "resta": (numero1 - numero2),
        "multiplicación": (numero1 * numero2),
        "división": (numero1 / numero2)
    };

    return resultados;
    
}



// funcion para mostrar resultados en consola, que será llamada desde otra función

function porConsola(numero1, numero2) {

    // Llamada a la función internamente para realizar las operaciones y obtener los resultados
    // Se define la variable 'resultados' para almacenar el objeto retornado por la función 'operaciones'
    // Es una función dentro de otra función (funcion "operaciones" dentro de la función "porConsola")
    let resultados = operaciones(numero1, numero2);

    // Muestra resultados en consola y se concatena el texto con la variable resultados y la propiedad, ejemplo (resultados.suma)
    console.log("Suma: " + resultados.suma);
    console.log("Resta: " + resultados.resta);
    console.log("Multiplicación: " + resultados.multiplicación);
    console.log("División: " + resultados.división);
    
    // Es aconsejable que las funciones retornen un valor, aunque no sea usado
    return true;
}    


// función principal que realiza operaciones matemáticas y puede mostrar resultados en consola o en el documento HTML

function calculadora(numero1, numero2, mostrar = false) { // 'mostrar' tiene un valor por defecto "false"

    

    if (mostrar == false) {

         // Ahora la funcion "porConsola" se llama desde la función "calculadora"
         porConsola(numero1, numero2); // Llamada a la función interna para mostrar resultados en consola

    }else {

       // Mostrar resultados en el documento HTML, incluyendo saltos de línea "<br>" para mejor legibilidad
       document.write("Suma: " + (numero1 + numero2) + "<br>");
       document.write("Resta: " + (numero1 - numero2) + "<br>");
       document.write("Multiplicación: " + (numero1 * numero2) + "<br>");
       document.write("División: " + (numero1 / numero2) + "<br>");

    }


    return true;

}

// Llamada a la función con ambos parámetros, se imprime en consola
calculadora(7, 9); // Sin el parámetro opcional, se usa el valor por defecto (false)

// Llamadas adicionales a la función con diferentes argumentos y variando el parámetro opcional, se imprimen los resultados en el documento HTML
calculadora(7, 12, true); // Con el parámetro opcional, se usa el valor proporcionado (true)


// Esto nos evitea repetir código y hace que el código sea más modular y fácil de mantener.
// Podemos cambiar la forma en que se muestran los resultados (consola o documento) simplemente cambiando el valor del parámetro opcional 'mostrar' al llamar a la función 'calculadora'.
