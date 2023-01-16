const { Router } = require("express");
const videogamesRouter = require("./videoGames");
const genresRouter = require("./genres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videogamesRouter);
router.use("/genres", genresRouter);

module.exports = router;
