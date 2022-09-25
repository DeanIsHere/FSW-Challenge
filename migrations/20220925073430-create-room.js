'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      room_name: {
        type: Sequelize.STRING,
        unique: true
      },
      player1_id: {
        type: Sequelize.INTEGER
      },
      player2_id: {
        type: Sequelize.INTEGER
      },
      player1_pick: {
        type: Sequelize.STRING
      },
      player2_pick: {
        type: Sequelize.STRING
      },
      player1_score: {
        type: Sequelize.INTEGER
      },
      player2_score: {
        type: Sequelize.INTEGER
      },
      player1_result: {
        type: Sequelize.STRING
      },
      player2_result: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};