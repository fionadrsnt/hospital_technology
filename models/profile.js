'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' });
      Profile.hasMany(models.Post, {foreignKey: 'profileId' });
      Profile.hasMany(models.Comment, {foreignKey: 'profileId' });

      // define association here
    }
  }
  Profile.init({
    displayName: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};