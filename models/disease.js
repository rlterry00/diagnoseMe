module.exports = function(sequelize, DataTypes) {
  var disease = sequelize.define("disease", {
    a2z: {
      type: DataTypes.STRING(1),
    },
    name: {
      type: DataTypes.STRING(255),
    },
    freezeTableName: true,
    timestamps: false
  });
  return disease;
};