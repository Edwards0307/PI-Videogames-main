const { Videogame } = require("../db");

const validate = async (req, res, next) => {
  const { name, description, platforms, genres } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!description)
    return res.status(400).json({ error: "Missing description" });
  if (!platforms) return res.status(400).json({ error: "Missing plataforms" });
  if (!genres) return res.status(400).json({ error: "Missing genres" });

  arr = [
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "PlayStation 5",
    "PC",
    "Xbox",
  ];
  let cleanArray = platforms.filter((element) => arr.includes(element));
  if (cleanArray.length !== platforms.length)
    return res.status(400).json({ error: "Platform not allowed" });

  let findBdd = await Videogame.findAll({
    where: {
      name: name,
    },
  });
  let findByName = findBdd.map((element) => element.name);
  if (findByName.includes(name)) {
    return res
      .status(400)
      .json({ error: "There is already a game with that name" });
  }

  next();
};

module.exports = { validate };
