'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodatas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users)
    }
  }
  biodatas.init({
    userID: DataTypes.INTEGER,
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'biodatas',
  });
  return biodatas;
};
