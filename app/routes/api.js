const router = require("express").Router();

const apiEnviosRouter = require("./api/envios.js");

//Todas las rutas '/api/envios' son controladas por envios.js
router.use("/envios", apiEnviosRouter);

module.exports = router;

