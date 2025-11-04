// MÁS MÉTODOS PARA ARRAYS




let dispositivos = ['ps5', 'pc', 'laptop', 'tablet', 'smartphone', 'smartwatch'];

let accesorios = ['monitor', 'teclado', 'ratón', 'altavoces'];





// ORDENAR UN ARRAY (SORT)

// Método ".sort()" para ordenar los elementos de un array alfabéticamente

let ordenar = dispositivos.sort();

// Devolvemos el resultado por consola ordenado alfabéticamente
console.log(ordenar); // ['laptop', 'pc', 'ps5', 'smartphone', 'smartwatch', 'tablet']







// REVERTIR EL ORDEN DE UN ARRAY (REVERSE)

// Método ".reverse()" para revertir el orden de los elementos de un array, es decir el último pasa a ser el primero, el penúltimo el segundo, y así sucesivamente

let revertir = dispositivos.reverse();

// Devolvemos el resultado por consola revertido
console.log(revertir); // [ 'tablet', 'smartwatch', 'smartphone', 'ps5', 'pc', 'laptop' ]






// COMBINAR DOS ARRAYS (CONCAT)

// Método ".concat()" para combinar dos arrays en uno solo

let combinar = dispositivos.concat(accesorios);

// Devolvemos el resultado por consola con ambos arrays combinados
console.log(combinar); // [ 'tablet', 'smartwatch', 'smartphone', 'ps5', 'pc', 'laptop', 'monitor', 'teclado', 'ratón', 'altavoces' ]







// CONVERTIR UN ARRAY A STRING O CADENA DE TEXTO (JOIN)

// Método ".join()" para convertir un array en una cadena de texto, separando los elementos por el valor que le indiquemos entre paréntesis
// En este caso usamos ' - ' como separador

let unir = dispositivos.join(' - ');

// Devolvemos el resultado por consola como una cadena de texto
console.log(unir); // 'tablet - smartwatch - smartphone - ps5 - pc - laptop'







// COPIAR UN FRAGMENTO DE UN ARRAY (SLICE)

// Método ".slice()" para copiar un fragmento de un array, indicando el índice inicial y el índice final
// Si se incluye solo un paramámetro, copia desde ese índice hasta el final del array, si se incluyen dos parámetros, copia desde el índice inicial hasta el índice final (sin incluir el elemento del índice final)

let dispositivosFavoritos = dispositivos.slice(3, 6); // Indicamos que queremos copiar desde el índice 3 hasta el 6

// Devolvemos el resultado por consola con el fragmento copiado
console.log(dispositivosFavoritos) // [ 'ps5', 'pc', 'laptop' ]






// BUSQUEDA DE ELEMENTOS EN UN ARRAY (FIND)

// Método ".find()" para buscar un elemento en un array que cumpla con una condición específica

let buscarDispositivo = dispositivos.find(dispositivo => dispositivo.length > 5); // Buscamos el primer dispositivo cuyo nombre tenga más de 5 caracteres

// Devolvemos el resultado por consola con el dispositivo encontrado
// "tablet" es el primer dispositivo que cumple la condición, aunque hay otros como 'smartwatch' y 'smartphone' en este caso solo devuelve el primero que encuentra
console.log(buscarDispositivo); // 'tablet'
  


// Tambien podemos buscar un elemento específico en un array

let buscarEspecifico = dispositivos.find(dispositivo => dispositivo === 'pc'); // Buscamos el dispositivo 'pc'

// Devolvemos el resultado por consola con el dispositivo encontrado
console.log(buscarEspecifico); // 'pc'







// BUSCAR Y DEVOLVER EL ÍNDICE DE UN ELEMENTO EN UN ARRAY (FINDINDEX)

// Método ".findIndex()" para buscar el índice de un elemento en un array que cumpla con una condición específica

let indiceDispositivo = dispositivos.findIndex(dispositivo => dispositivo === 'laptop'); // Buscamos el índice del dispositivo 'laptop'

// Devolvemos el resultado por consola con el índice encontrado
console.log(indiceDispositivo); // 5




// Tambien podemos buscar el indice con la longitud del nombre del dispositivo

let indiceLongitud = dispositivos.findIndex(dispositivo => dispositivo.length > 7); // Buscamos el índice del primer dispositivo cuyo nombre tenga más de 7 caracteres

// Devolvemos el resultado por consola con el índice encontrado
// "smartwatch" es el primer dispositivo que cumple la condición, aunque hay otros como 'smartphone' en este caso solo devuelve el índice del primero que encuentra
console.log(indiceLongitud); // 1

