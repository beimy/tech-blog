const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Tag extends Model {}

Tag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag'
  }
);

module.exports = Tag  