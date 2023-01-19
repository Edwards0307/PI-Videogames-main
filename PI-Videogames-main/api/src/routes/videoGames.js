const { Router } = require("express");
const {
  getGamesHandlersById,
  getGamesHandlers,
  createGamesHandlres,
} = require("../handlers/gamesHandlres");

const videogamesRouter = Router();

// routers

videogamesRouter.get("/", getGamesHandlers);
/* [ ] GET /videogames:
   [ ] GET / videogames ? name = "..." :*/

videogamesRouter.get("/:id", getGamesHandlersById);
/* [] GET / videogame / { idVideogame }: */

videogamesRouter.post("/", createGamesHandlres);
/* [] POST / videogames:*/

module.exports = videogamesRouter;
