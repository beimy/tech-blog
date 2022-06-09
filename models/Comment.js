const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { User, Post } = require('../models')
 
class Comment extends Model {}

Comment.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,  
      autoIncrement: true,    
      primaryKey: true,
      allowNull: false,

    },
    comment_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: "user_id"
      }
    // },
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'post',
    //     key: 'post_id'

    //   }
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