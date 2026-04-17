/**
 * DIFERENCIA ENTRE FOREACH Y MAP
 */

const numeros = [1, 2, 3, 4, 5];

// 1. forEach: Se usa para ITERAR (recorrer) el array.
// No devuelve nada (undefined). Se usa para acciones externas (side effects) como imprimir en consola o guardar en una DB.
console.log("--- Ejemplo con forEach ---");
numeros.forEach((numero) => {
    console.log(`Procesando número: ${numero}`);
});


// 2. map: Se usa para TRANSFORMAR el array.
// Devuelve un NUEVO array con los resultados de la función aplicada a cada elemento, sin modificar el original.
console.log("\n--- Ejemplo con map ---");
const numerosDuplicados = numeros.map((numero) => {
    return numero * 2;
});

console.log("Array original:", numeros);
console.log("Nuevo array (duplicados):", numerosDuplicados);
