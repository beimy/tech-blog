const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment_Tags extends Model {}

Comment_Tags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,    
    },
    tag_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'tag_id'
      }
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'comment_id',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'comment_tag',
  }
)

module.exports = Comment_Tags
