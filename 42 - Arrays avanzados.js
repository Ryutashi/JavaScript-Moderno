// ARRAYS AVANZADOS




let frameworks = ["Angular", "React", "Vue", "Astro", "Svelte", "Solid JS", "NodeJS", "ExpressJS"];


// ACCESO MANUAL

// Acceder de esta manera a los arrays es incorrecta, ya que es insostenible e inproductivo acceder a cada elemento uno por uno

console.log(frameworks[0]); // 'Angular'
console.log(frameworks[1]); // 'React'
console.log(frameworks[2]); // 'Vue'
console.log(frameworks[3]); // 'Astro'  
console.log(frameworks[4]); // 'Svelte'
console.log(frameworks[5]); // 'Solid JS'
console.log(frameworks[6]); // 'NodeJS'
console.log(frameworks[7]); // 'ExpressJS'   




// ACCESO CON BUCLES

/*  Es la manera correcta de acceder a los arrays, en vez de acceder a cada elemento manualmente uno por uno,
 una forma es con el bucle "for", con el cual podemos recorrer todo el array, creando una variable de control, 
 en este caso "contador" inicializado en cero "0" y que termine el recorrido cuando sea menor a la longitud de la variable "frameworks" */


for (let contador = 0; contador < frameworks.length; contador++) {

    // Nos da como resultado por consola el total de elementos que contiene el array
    console.log(frameworks[contador]); // 'Angular' 'React' 'Vue' 'Astro' 'Svelte' 'Solid JS' 'NodeJS' 'ExpressJS'


}
