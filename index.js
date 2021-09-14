const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });

  app.get('/fiscalias', function (req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'admin',
        password: 'Jesucristo7778+',
        server: 'siamp.c8vhmcebxnsn.us-east-2.rds.amazonaws.com', 
        database: 'tempdb',
        options: {
            //trustedConnection: true,
            //encrypt: true,
            //enableArithAbort: true,
            trustServerCertificate: true
          } 
    };
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from TC_FISCALIA', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });




  });

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});