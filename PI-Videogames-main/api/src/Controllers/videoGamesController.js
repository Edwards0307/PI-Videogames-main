const { Videogame } = require("../db");

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
};
