const router = require("express").Router();
const db= require("../../config/db.config.js");
const Table= db.table;



//peticion get --> trae todos los envíos
router.get('/', async (req, res) => {
    const envio = await Table.findAll();
    res.json(envio);
    
});

//petición POST --> crea el envío //Funciona
router.post("/", async (req, res) => {
    const envio = await Table.create(req.body);
    res.json(envio);
})













module.exports = router;
