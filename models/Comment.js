const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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

    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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