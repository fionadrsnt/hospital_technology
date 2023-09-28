'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up(queryInterface, Sequelize) {
return queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      profileId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Profiles', 
          },
          key: 'id', 
        },
      },
      PostId: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: "Posts",
          },
          key:"id"
        }
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
   down(queryInterface, Sequelize) {
    return  queryInterface.dropTable('Comments');
  }
};