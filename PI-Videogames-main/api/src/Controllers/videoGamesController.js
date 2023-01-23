const { Videogame, Genre } = require("../db");
require("dotenv").config();
const axios = require("axios");
const { YOUR_API_KEY } = process.env;
const { cleanArray, cleanArray2 } = require("../Utils/tool");

/* 1) Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal */
const allGames = async () => {
  let url = `https://api.rawg.io/api/games?key=${YOUR_API_KEY}`;
  try {
    const videogamesBDD = await Videogame.findAll({
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    for (let i = 0; i < 5; i++) {
      const response = await axios.get(url);
      let gamesList = response.data.results;
      let videogamesApi = cleanArray(gamesList);
      url = response.data.next;

      return [...videogamesBDD, ...videogamesApi];
    }
  } catch (error) {
    throw new Error("An error occurred while bringing all games");
  }
};

/* 2) Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado  */
const allByNameGames = async (name) => {
  let url = `https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}`;
  try {
    const gamesByBdd = await Videogame.findAll({
      where: {
        name: name,
      },
    });
    const response = await axios.get(url);
    const gamesList = response.data.results;
    if (gamesList.length < 1) {
      throw new Error("Not Found");
    }
    let videogamesApi = cleanArray(gamesList);
    return [...gamesByBdd, ...videogamesApi].slice(0, 15);
  } catch (error) {
    throw new Error("Not found");
  }
};

/* Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados */
const getGameById = async (id, source) => {
  let url = `https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`;
  try {
    if (source === "api") {
      const response = await axios.get(url);
      const gamesList = response.data;
      let videogamesApi = cleanArray2(gamesList);
      return videogamesApi;
    } else {
      const videogamesBDD = await Videogame.findByPk(id, {
        include: [
          {
            model: Genre,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      });
      return videogamesBDD;
    }
  } catch (error) {
    throw new Error("No hay juegos con ese id");
  }
};

/* Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos, relacionado a sus géneros. */
const createGame = async (
  name,
  description,
  genres,
  released,
  rating,
  platforms,
  img
) => {
  const newGame = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    img,
  });

  let genreBdd = await Genre.findAll({
    where: {
      name: genres,
    },
  });
  newGame.addGenre(genreBdd);
};

module.exports = {
  createGame,
  getGameById,
  allByNameGames,
  allGames,
};
