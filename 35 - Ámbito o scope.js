// ÁMBITO VARIABLES (SCOPE)


// GLOBAL 


// Las variables globales pueden ser accedidas desde cualquier parte del código, incluyendo funciones y bloques.

// Ejemplo:


let ruta = "www.google.com"; // Variable global


function mostrarRuta() {

    console.log(ruta); // Accedemos a la variable global desde una función


}

// Llamamos a la función para mostrar la ruta
mostrarRuta(); // www.google.com





// LOCAL

// Las variables locales solo pueden ser accedidas dentro del bloque o función donde fueron declaradas.

// Ejemplo:


function mostrarNombre() {

    let nombre = "Jose Dev"; // Variable local

    console.log(nombre); // Accedemos a la variable local dentro de la función

    // No se puede acceder a menos que se haga un return
    // return nombre;
}

// Si tratamos de acceder a la variable local desde fuera de la función, obtendremos un error
// console.log(nombre); // Error: nombre is not defined (no podemos acceder a la variable local desde fuera de la función)





// BLOQUE

// Si declaramos una variable con "let" o "const", su ambito siempre se limita a su bloque donde este declarado
// Un bloque es básicamente algo que está entre llaves ({}), como bucles, condiciones o funciones


if (true) {

    let hobbie = "mi pasatiempo favorito son los videojuegos";

    console.log(hobbie) // Accedemos a la variable local dentro de la condición
}


console.log(hobbie) // Error: nombre is not defined (no podemos acceder a la variable local desde fuera de la condición)



/* Sin embargo, las variables declaradas con "var" tienen un ambito de función, 
lo que significa que son accesibles dentro de toda la función donde se declararon,
o incluso dentro del ambito global si se declara fuera de una función */


