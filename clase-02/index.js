// file system
const fs = require("fs");


// crea un archivo y guardo el texto ingresado
fs.writeFileSync("hola.txt", "Hola Node.js");


// asincronia
/* 
todo funciona en un hilo principal, mientras hay tareas secundarias que se ejecutan en segundo plano
*/
console.log(1);

// aunque ponga el timeout en 0, se va a ejecutar despues del 2 ya que aunque el tiempo de espera sea de 0 igual sigue mantentiendo el proceso de pasar a segundo plano y tiene un delay
setTimeout(()=>{
    console.log(2);
},2000);

console.log(3);


// funciones
function saludar(nombre){
    console.log(`Hola ${nombre}.`);
    // console.log("Hola "+nombre+".");
}

saludar("Marcos");