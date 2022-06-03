const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    post_id: {
      type: DataTypes.INTEGER,    
      primaryKey: true,
      allowNull: false,
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
      // foreignKey: true,
      // references: {
      //   model: 'category',
      //   key: 'category_id',
      // }
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // foreignKey: true,
      // references: {
      //   model: 'user',
      //   key: 'user_id'
      // }
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