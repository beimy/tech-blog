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
    post_summary: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'No summary is currently available for this post. View full post for more details on this content.'
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: 'This area needs to have something in it... That is kind of the point of a post.'
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    }
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