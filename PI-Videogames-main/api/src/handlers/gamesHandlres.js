const { createGame } = require("../Controllers/videoGamesController");

const getGamesHandlers = (req, res) => {
  const { name } = req.query;
  if (name) {
    res.status(200).send(`Esta trae la info del juego ${name}`);
  } else {
    res.status(200).send("Trae Todos los juegos");
  }
};
/* 1) Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal
  2) Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado  */

const getGameHandlers = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`Muestra el detalle del juego con ID ${id}`);
};
/* Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados */

const createGamesHandlres = async (req, res) => {
  try {
    const { name, description, released, rating, platforms, img } = req.body;
    const newGame = await createGame(
      name,
      description,
      released,
      rating,
      platforms,
      img
    );
    res.status(201).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
/* Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros. */

module.exports = {
  getGameHandlers,
  getGamesHandlers,
  createGamesHandlres,
};
