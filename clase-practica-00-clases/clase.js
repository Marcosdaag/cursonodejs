class Person {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola ${this.nombre}, tu edad es de ${this.edad}`;
  }
}

module.exports = { Person };