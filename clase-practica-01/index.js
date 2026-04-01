// Al ser una constante, no puede cambair su valor, siempre va a ser un array

/**
 * Ejercicio:
 *
 * “Imaginá que los precios de los productos del cliente están listos para cargarse en el sistema”
 * te dicen. Pero hay un detalle: antes de enviarlos, tenés que calcular el IVA del 21% y presentarlos
 * de manera clara.
 *
 * 1- Creá un array con 10 números que representen los precios de los productos.
 * 2- Utilizá un método de array para calcular el precio con IVA incluido para cada valor.
 * 3- Mostrar los precios con la siguiente estructura "El precio es: ${valor}.- IVA incluido."
 */

const numbers = [50, 25, 100, 97];
const numbersWithIva = [];

for (i = 0; i < numbers.length; i++) {
  var numberToAdd = numbers[i] * 1.21;
  numbersWithIva.push(numberToAdd);
}

numbersWithIva.forEach((numberWithIva) => {
  console.log(`El precio es: ${numberWithIva}.- IVA incluido.`);
});
