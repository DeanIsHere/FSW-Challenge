'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class histories extends Model {
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
  histories.init({
    userID: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    attempt: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    draw: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'histories',
  });
  return histories;
};