module.exports = (sequelize, Sequelize) => {
    const Bien = sequelize.define("TC_BIEN",{
        CODIGO: {
            type: Sequelize.STRING
        },
        BIEN: {
            type: Sequelize.STRING
        },
        COSTO: {
            type: Sequelize.STRING
        },
        CANTIDAD: {
            type: Sequelize.STRING
        },
        OBSERVACIONES: {
            type: Sequelize.STRING
        },
        ID_ESTADO: {
            type: Sequelize.INTEGER
        }
    });
    return Bien;
}