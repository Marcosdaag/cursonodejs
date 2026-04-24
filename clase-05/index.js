const { sumar, restar } = require("./math");
const cowsay = require("cowsay");

const suma = sumar(3, 4);
const resta = restar(3, 4);

console.log(suma);
console.log(resta);

console.log(
  cowsay.say({
    text: "Hola",
    e: "oo",
    T: "U",
  }),
);
