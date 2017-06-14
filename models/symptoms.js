module.exports = function(sequelize, DataTypes) {
  var symptoms = sequelize.define("symptoms", {
    zipcode: {
      type: DataTypes.INTEGER(5),
      allowNull: false      
    },
    symptoms: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return symptoms;
};