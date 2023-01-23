const { Videogame } = require("../db");

const validate = async (req, res, next) => {
  const { name, description, platforms, genres } = req.body;
  if (!name) return res.status(400).json({ error: "Missing name" });
  if (!description)
    return res.status(400).json({ error: "Missing description" });
  if (!platforms) return res.status(400).json({ error: "Missing plataforms" });
  if (!genres) return res.status(400).json({ error: "Missing genres" });

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
