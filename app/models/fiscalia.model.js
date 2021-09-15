module.exports = (sequelize, Sequelize) => {
    const Fiscalia = sequelize.define("TC_FISCALIA", {
      FISCALIA: {
        type: Sequelize.STRING
      },
      DIRECCION: {
        type: Sequelize.STRING
      },
      TELEFONO: {
        type: Sequelize.STRING
      },
      LATITUD: {
        type: Sequelize.STRING
      },
      LONGITUD: {
        type: Sequelize.STRING
      }
    });
  
    return Fiscalia;
  };