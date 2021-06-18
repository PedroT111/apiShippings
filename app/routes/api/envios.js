const router = require("express").Router();
const db= require("../../config/db.config.js");
const Shippings= db.shippings;



//Funcion calcular distancia

var EARTH_RADIUS = 6378.137; // radio de la Tierra   
function rad(d) {
    return d * Math.PI / 180.0;
}
function getDistance(lng1, lat1, lng2, lat2) {
    var radLat1 = rad(lat1);
    var radLat2 = rad(lat2);
    var a = radLat1 - radLat2;
    var b = rad(lng1) - rad(lng2);
    var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2)
        + Math.cos(radLat1) * Math.cos(radLat2)
        * Math.pow(Math.sin(b / 2), 2)));
    s = s * EARTH_RADIUS;
    s = Math.round(s * 10000) / 10000;
    return s;
}



//peticion get --> trae todos los envíos
router.get('/', async (req, res) => {
    
    const envio = await Shippings.findAll();
    
    res.json(envio);
    
});

//petición POST --> crea el envío 
router.post("/", async (req, res) => {
      
    let current_lat = req.body.current_lat
    let current_long = req.body.current_long;
    let end_long = req.body.end_long;
    let end_lat = req.body.end_lat
    
    try{ 
        console.log("error")
        const envio = await Shippings.create({
            customer: req.body.customer,
            describ: req.body.describ,
            status: req.body.status,
            origin_lat: req.body.origin_lat,
            origin_long: req.body.origin_long,
            current_lat: req.body.current_lat,
            current_long: req.body.current_long,
            end_lat: req.body.end_lat,
            end_long: req.body.end_long,
            aprox_distance: getDistance(current_long,current_lat,end_long,end_lat)//getDistance()
        });
       
        res.status(201);
        
        res.send(envio);     

    } catch(e){  
        res.status(400).send({"Error": e.message});

    }
   
    
});


//petición get id 
router.get("/:id", async (req,res) => {
    try{
        let envioID = req.params.id;
        const envio = await Shippings.findByPk(envioID);
        if(!envio){
            return res.status(404).send()
        }
        return res.status(200).json(envio);

    } catch(e){
        return res.status(500).send({"Error": e.message});
    }
        
       

});

// petición put 
router.put("/:id", async (req,res) => {
    
    //validacion para traer hora    
    let current_lat = req.body.current_lat;
    let current_long = req.body.current_long;
    let status = req.body.status;

        

    const shipping = await Shippings.update({
        current_lat : current_lat,
        current_long: current_long,
        status: status,
        //aprox_distance: getDistance();
    }, {
        where : {id: req.params.id}
    });
    //validación 
    if(!current_long && !current_lat && !status){
        return res.status(404).send("Datos Incompletos") 
    }
    if((!current_lat || !current_long) && status){
        return res.status(404).send("Datos sobre ubicación incompletos");
    }
    if(status="delivered"){
        //Actualizar fecha y hora
    }
            
    return res.status(200).json(shipping);
    
    
    
})
        
module.exports = router;
