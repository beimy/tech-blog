const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post_Comment extends Model {}

Post_Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comment',
        key: 'comment_id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'post_id'
      }
    }
  }
)

module.exports = Post_Comment