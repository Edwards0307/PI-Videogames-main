const cleanArray = (gamesList) => {
  let videogamesApi = [];
  gamesList.map((element) => {
    videogamesApi.push({
      id: element.id,
      name: element.name,
      image: element.background_image,
      released: element.released,
      rating: element.rating,
      platforms: element.platforms?.map((el) => el.platform.name),
      genres: element.genres?.map((el) => el.name),
    });
  });
  return videogamesApi;
};

const cleanArray2 = (gamesList) => {
  let videogamesApi = [];
  videogamesApi.push({
    id: gamesList.id,
    name: gamesList.name,
    image: gamesList.background_image,
    genres: gamesList.genres?.map((g) => g.name),
    description: gamesList.description,
    released: gamesList.released,
    rating: gamesList.rating,
    platforms: gamesList.platforms?.map((el) => el.platform.name),
  });
  return videogamesApi;
};

module.exports = {
  cleanArray,
  cleanArray2,
};
