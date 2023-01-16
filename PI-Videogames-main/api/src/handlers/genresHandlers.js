const getGenresHandlers = (req, res) => {
  res
    .status(200)
    .send("Obtiene todos los tipos de géneros de videojuegos posibles");
};
/* Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí  */

module.exports = { getGenresHandlers };
