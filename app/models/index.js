const Sequelize = require("sequelize");


const sequelize = new Sequelize('tempdb', 'admin', 'Jesucristo7778+', {
  host: 'siamp.c8vhmcebxnsn.us-east-2.rds.amazonaws.com',
  dialect: 'mssql'/* one of 'mysql' | 'mariadb' | 'postgres' |  */
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.fiscalia = require("./fiscalia.model.js")(sequelize, Sequelize);

console.log("All is ready");

module.exports = db;