const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,      
      primaryKey: true,
      allowNull: false,

      autoIncrement: true,
    },
    comment_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // foreignKey: true,
      // references: {
      //   model: 'user',
      //   key: 'user_id'
      // }

    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // foreignKey: true,
      // references: {
      //   model: 'post',
      //   key: 'post_id'
      // }
    },
    tag_id: {
      type: DataTypes.STRING,
      allowNull: true,

    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;