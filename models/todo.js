module.exports = function (sequelize, DataTypes) {
  return sequelize.define('todos', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultvalue: false
    }
  });
}
