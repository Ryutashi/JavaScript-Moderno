// MAS FUNCIONES


// FUNCIONES DE CALLBACKS "AVANZADAS"


/* Una función de callback es una función que se pasa como parámetro o argumento a otra función,
y se ejecuta dentro de esa función externa para completar algún tipo de rutina o acción. *

/* Las funciones de callback son muy comunes en JavaScript, 
especialmente en operaciones asíncronas como manejo de eventos, solicitudes HTTP, temporizadores, etc. */


// Tenemos una función que resta dos números y recibe como parámetros dos funciones anónimas
function restame(n1, n2, multiplicarPortres, mostrar) {

    let resta = n1 - n2;

    mostrar(resta);

    multiplicarPortres(resta);

    return resta;
}


// Llamamos a la función "restame" y le pasamos dos callbacks o funciones anónimas como parámetros
// El primer callback muestra el resultado de la resta
restame(20, 5, function(resultado){
    console.log("El resultado de la resta es: " + resultado); // El resultado de la resta es: 15
},

// El segundo callback multiplica el resultado de la resta por 3
function(resultado){
    console.log("El resultado de la resta por 3 es: " + (resultado * 3)); // El resultado de la resta por 3 es: 45


}

)
