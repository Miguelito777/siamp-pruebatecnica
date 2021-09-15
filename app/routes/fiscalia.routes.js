module.exports = app => {
    const fiscalia = require("../controllers/fiscalia.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fiscalia.create);
    
    // Retrieve all Tutorials
    router.get("/", fiscalia.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", fiscalia.findOne);

    // Update a Tutorial with id
    router.put("/:id", fiscalia.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fiscalia.delete);

    /*// Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  

  
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);*/
  
    app.use('/api/fiscalia', router);
  };