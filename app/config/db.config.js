const env = require("./env.js");

const Sequelize = require("sequelize"); 

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: 0,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.shippings = require("../models/shippings.js")(sequelize, Sequelize);

sequelize.sync(); 
module.exports = db;
