'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.Profile, {foreignKey: 'profileId' });
      // Post.belongsTo(models.Comment, {foreignKey: 'postId'});
      // define association here
    }
  }
  Post.init({
    image: DataTypes.STRING,
    content: DataTypes.TEXT,
    profileId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};