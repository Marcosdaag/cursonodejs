const { Person } = require("./clase.js");

const persona1 = new Person("Marcos", 25);

let mensaje = persona1.saludar();
console.log(mensaje);
