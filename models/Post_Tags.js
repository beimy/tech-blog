const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post_Tags extends Model {}

Post_Tags.init(
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
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'post_id',
      }
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'post_tag',
  }
)

module.exports = Post_Tags
