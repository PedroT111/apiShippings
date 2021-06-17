# traineeNodejs
-Instrucciones:
*1-Encontrará un archivo con el nombre .env el directorio raíz del proyecto
*2-Cambie los valores del archivo a su entorno.
*3-Ejecute el desarrollo y cree la base de datos con: node server


-Routes:
*POST /api/shippings - create a shipping
*GET /api/shippings - get all shippings
*GET /api/shippings/:id - get shipping
*PUT /api/shippings/:id - update shipping



-Script db: CREATE TABLE IF NOT EXISTS `shippings` (`id` INTEGER NOT NULL auto_increment , `customer` VARCHAR(100) NOT NULL, `describ` TEXT NOT NULL, `status` VARCHAR(10) NOT NULL, `origin_lat` DECIMAL(11,8) NOT NULL, `origin_long` DECIMAL(11,8) NOT NULL, `current_lat` DECIMAL(11,8) NOT NULL, `current_long` DECIMAL(11,8) NOT NULL, `end_lat` DECIMAL(11,8) NOT NULL, `end_long` DECIMAL(11,8) NOT NULL, `aprox_distance` FLOAT NOT NULL, `finish_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
 
