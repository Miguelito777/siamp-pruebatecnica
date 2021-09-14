module.exports = (sequelize, Sequelize) => {
    const Fiscalia = sequelize.define("TC_FISCALIA", {
      FISCALIA: {
        type: Sequelize.STRING
      }
    });
  
    return Fiscalia;
  };