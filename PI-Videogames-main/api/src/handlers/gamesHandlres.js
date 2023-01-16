const getGamesHandlers = (req, res) => {
  res.status(200).send("Esta ruta trae Todos los juegos");
};
/* 1) Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal
  2) Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado  */

const getGameHandlers = (req, res) => {
  res
    .status(200)
    .send("Esta ruta trae la info de un usuario determinado por ID");
};
/* Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados */

const createGamesHandlres = (req, res) => {
  res.status(200).send("Esta ruta crea un nuevo usuario");
};
/* Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros. */

module.exports = {
  getGameHandlers,
  getGamesHandlers,
  createGamesHandlres,
};
