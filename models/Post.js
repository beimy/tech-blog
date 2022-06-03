const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'You Forgot Something'
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'This area needs to have something in it... That is kind of the point of a post.'
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'category_id',
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post