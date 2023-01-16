const { Router } = require("express");

const genresRouter = Router();

genresRouter.get("/", (req, res) => {
  res.status(200).send("Estamos en GET / genres:");
});
/* [] GET / genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí */

module.exports = genresRouter;
