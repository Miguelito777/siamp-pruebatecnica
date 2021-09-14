module.exports = {
    HOST: "siamp.c8vhmcebxnsn.us-east-2.rds.amazonaws.com",
    PORT: "1434",
    USER: "admin",
    PASSWORD: "Jesucristo7778+",
    DB: "tempdb",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };