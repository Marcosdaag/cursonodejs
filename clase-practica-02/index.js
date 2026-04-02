/**
 * Ejercicio
 * 1- Crea un array con 10 obejtos donde cada objeto represente un automovil con la siguiente informacion:
 * Marca, Modelo, Year, Color.
 * 2- Usa un metodo de array para rerorrer la lista e imprime por conosla todos los datos de los automoviles cuyo year sea mayor a 2018
 * 3- Crea una funcion para recorrer el array y con un destructuring obtener el color de cada auto,
 * (la funcion debe aceptar un color como parametro y devolver por conosla cuantos autos tienen ese color)
 */

// Array de autos
const automoviles = [
  { marca: "Toyota", modelo: "Corolla", year: 2022, color: "Blanco" },
  { marca: "Honda", modelo: "Civic", year: 2017, color: "Negro" },
  { marca: "Ford", modelo: "Mustang", year: 2021, color: "Rojo" },
  { marca: "Tesla", modelo: "Model 3", year: 2023, color: "Gris" },
  { marca: "Chevrolet", modelo: "Onix", year: 2016, color: "Azul" },
  { marca: "Volkswagen", modelo: "Golf", year: 2019, color: "Blanco" },
  { marca: "Nissan", modelo: "Sentra", year: 2020, color: "Negro" },
  { marca: "Hyundai", modelo: "Tucson", year: 2015, color: "Plata" },
  { marca: "Audi", modelo: "A3", year: 2022, color: "Azul" },
  { marca: "BMW", modelo: "X3", year: 2018, color: "Blanco" },
];

// Encabezado de la lista
console.log("--- Autos con año mayor a 2018 ---");

// Filtro los autos que sean solo mayor a 2018 y por cada auto muestro sus datos por consola
automoviles
  .filter((auto) => auto.year > 2018)
  .forEach((auto) => {
    console.log(
      `${auto.marca} ${auto.modelo} (${auto.year}) - Color: ${auto.color}`,
    );
  });

// Funcion con destructuring para obtener el color de cada auto y con un parametro contar la cantidad de autos con ese color
function contarAutosPorColor(colorBuscado) {
  let contador = 0;

  for (const auto of automoviles) {
    const { color } = auto; // Esto es lo mismo que obtener el dato de la siguiente forma pero mas clean => auto.color

    if (color.toLowerCase() === colorBuscado.toLowerCase()) {
      contador++;
    }
  }

  console.log(`Cantidad de autos de color ${colorBuscado}: ${contador}`);
}

contarAutosPorColor("Rojo");
