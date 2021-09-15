//https://www.bezkoder.com/node-js-sql-server-crud/
/*const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

  app.post('/add', function(req, res, next) { 
    var sql = require("mssql");
    var name = req.body.FISCALIA;
    var config = {
      user: 'admin',
      password: 'Jesucristo7778+',
      server: 'siamp.c8vhmcebxnsn.us-east-2.rds.amazonaws.com', 
      database: 'tempdb',
      options: {
          trustServerCertificate: true
        } 
    };
    sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var request = new sql.Request();

      var query = "INSERT INTO TC_FISCALIA (FISCALIA) VALUES (?);";
      console.log(query);
      request.query(query,name,function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });


    });
  });


app.listen(PORT,function(){
  console.log('server successfully started on port '+PORT);
});*/

const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/fiscalia.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

