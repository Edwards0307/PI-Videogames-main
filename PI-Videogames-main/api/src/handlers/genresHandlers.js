const getGenresHandlers = (req, res) => {
  res.status(200).send("Muestra los primeros 6 juegos de cada genero");
};
/* Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí  */

module.exports = { getGenresHandlers };
