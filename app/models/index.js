const Sequelize = require("sequelize");


const sequelize = new Sequelize('d34hjkvt60bto6', 'cnramoosmzpsex', '2e7dbc7182d48be9cd3831a9d20a5a5f8793e58887dd846630ac1c630814bb44', {
  host: 'ec2-52-87-123-108.compute-1.amazonaws.com',
  dialect: 'postgres',/* one of 'mysql' | 'mariadb' | 'postgres' |  */
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<<< YOU NEED THIS
    }
  }
});
//aqui me quedé, hacer los otros modelos
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.fiscalia = require("./fiscalia.model.js")(sequelize, Sequelize);
db.bien = require("./bien.model.js") (sequelize, Sequelize);
db.ministerio = require("./ministerio.model.js") (sequelize, Sequelize);

db.ministerio.asociar(db);

console.log("All is ready");

module.exports = db;