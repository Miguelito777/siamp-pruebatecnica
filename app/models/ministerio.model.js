module.exports = (sequelize, Sequelize) => {
    const Ministerio = sequelize.define("TC_MINISTERIO", {
        NOMBRE:{
            type:Sequelize.STRING
        },
        OBSERVACIONES:{
            type:Sequelize.STRING
        },
        ID_ESTADO: {
            type: Sequelize.INTEGER
        }
    });

    Ministerio.asociar=function(models){
        Ministerio.hasMany(models.bien,{ foreignKey: 'id_ministerio' });
    }
    
    return Ministerio;
    //Ministerio.hasMany(bienModel); //aquí me quede => intentá hacer la relación de bien con ministerio.
    //https://www.youtube.com/watch?v=M3RibLGMmqk 
    //bienModel.belongsTo(Ministerio);
}