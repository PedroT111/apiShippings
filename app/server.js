const express = require('express');
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());




//Setting
const port= process.env.PORT || 3000;
const db = require("./config/db.config.js");

const apiRouter = require("./routes/api.js");

/*/ force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});*/


//Todas las rutas con '/api' son controladas por apiRouter
app.use('/api', apiRouter);



app.use('/', (req, res) => {
    res.send("Hello World from Node Js");
})






app.listen(port, () => {
    console.log("Start server on port" + port);
})
