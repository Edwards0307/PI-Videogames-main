const { Router } = require("express");

const videogamesRouter = Router();

// routers

videogamesRouter.get("/", (req, res) => {
  res.status(200).send("Estoy en  GET /videogames:");
});
/* [ ] GET /videogames:
Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal */

/* [] GET / videogames ? name = "..." :
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado */

videogamesRouter.get("/:id", (req, res) => {
  res.status(200).send("Estamos en GET / videogame / { idVideogame }:");
});
/* [] GET / videogame / { idVideogame }:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados */

videogamesRouter.post("/", (req, res) => {
  res.status(200).send("Estamos en POST / videogames:");
});
/* [] POST / videogames:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros. */

module.exports = videogamesRouter;
