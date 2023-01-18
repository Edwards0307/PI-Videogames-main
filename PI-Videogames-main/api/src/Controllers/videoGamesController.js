const { Videogame } = require("../db");
require("dotenv").config();
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const getGameById = async (id, source) => {
  if (source === "api") {
    const game = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
    ).data;
    let gameOk = {
      id: game.id,
      name: game.name,
      genres: game.genres?.map((e) => e.name),
      platforms: game.platforms?.map((e) => e.platform.name),
      released: game.released,
      img: game.background_image,
      rating: game.rating,
      description: game.description,
    };
    return gameOk;
  } else {
    const gameOk = await Videogame.findByPk(id);
    return gameOk;
  }
};

const createGame = async (
  name,
  description,
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
  return newGame;
};

module.exports = {
  createGame,
  getGameById,
};
