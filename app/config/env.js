const env = {
    database:process.env.DB_NAME, //name database
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST,  
    dialect: "mysql",
  };
  
  module.exports = env;