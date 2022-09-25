'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user)
    }
  }
  room.init({
    room_name: DataTypes.STRING,
    player1_id: DataTypes.INTEGER,
    player2_id: DataTypes.INTEGER,
    player1_pick: DataTypes.STRING,
    player2_pick: DataTypes.STRING,
    player1_score: DataTypes.INTEGER,
    player2_score: DataTypes.INTEGER,
    player1_result: DataTypes.STRING,
    player2_result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'room',
  });
  return room;
};