module.exports = function(sequelize, DataTypes) {
  var facts = sequelize.define("facts", {
    factid: {
      type: DataTypes.INTEGER,
    },
    fact: {
      type: DataTypes.STRING(100),
    },
    description: {
      type: DataTypes.TEXT,
    },
    freezeTableName: true,
    timestamps: false
  });
  return facts;
};