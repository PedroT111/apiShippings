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
    try{
        let status = req.body.status 
        const envio = await Table.create({
            customer: req.body.customer,
            describ: req.body.describ,
            status: status,
            origin_lat: req.body.origin_lat,
            origin_long: req.body.origin_long,
            current_lat: req.body.current_lat,
            current_long: req.body.current_long,
            end_lat: req.body.end_lat,
            end_long: req.body.end_long,
            aprox_distance: req.body.aprox_distance
        })
        if(status != "Pendiente" && status != "En proceso" && status != "Entregado"){
            throw new Error ("Ingrese un valor válido para status");
        }
        res.status(200);
        res.send("Envío Creado");

              
       

    } catch(e){  
        res.status(413).send({"Error": e.message})

    }
   
    
});

//petición get id --> falta filtrar datos
router.get("/:id", async (req,res) => {
        let envioID = req.params.id;
        const envio = await Table.findByPk(envioID).then((table) => {
            res.status(200).send({table});
        })

       

});

// petición put --> falta editar la distancia aprox
router.put("/:id", async (req,res) => {
    let current_lat = req.body.current_lat;
    let current_long = req.body.current_long;
    let status = req.body.status;

    await Table.update({
        current_lat : current_lat,
        current_long: current_long,
        status: status
    }, {
        where : {id: req.params.id}
    });
    
     res.send("Se ha actualizado la información del envío");
    
})
        

   













module.exports = router;
