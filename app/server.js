 require('dotenv').config({path:'../.env'})
const express = require('express');
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Setting
const port= process.env.PORT || 3000;
require("./config/db.config.js");

const apiRouter = require("./routes/api.js");
//Todas las rutas con '/api' son controladas por apiRouter
app.use('/api', apiRouter);


app.listen(port, () => {
    console.log("Start server on port" + port);
})
