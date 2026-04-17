/***
 * En este fichero creamos un array con frutas y otro con verduras
 * y luego creamos un array con frutas y verduras usando el operador spread
 */
let frutas = ["Manzana", "Pera", "Naranja"];

let verduras = ["Lechuga", "Tomate", "Cebolla"];

let comida = [...frutas, ...verduras];

console.log(comida);