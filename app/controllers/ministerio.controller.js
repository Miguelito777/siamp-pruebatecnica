const { EmptyResultError } = require("sequelize/types");
const db = require("../models");
const Op = db.Sequelize.Op;
const Ministerio = db.ministerio;

exports.create = (req, res) => {
 if(!req.body.NOMBRE) {
     res.status(400).send({
         message:"Ingrese el nombre del ministerio"
     })
     return;
 }   
 const ministerio = {
     NOMBRE:req.body.NOMBRE,
     OBSERVACIONES:req.body.OBSERVACIONES
 }
 Ministerio.create(ministerio)
 .then(data => {
     res.send(data);
 })
 .catch( err => {
     res.status(500).send({
         message:
         EmptyResultError.message || "Ocurrio algún error al crear el ministerio"
     });
 });
}