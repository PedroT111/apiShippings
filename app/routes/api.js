const router = require("express").Router();

const shippingsRouter = require("./api/envios.js");

//Todas las rutas '/api/shippings' son controladas por envios.js
router.use("/shippings", shippingsRouter);

module.exports = router;

