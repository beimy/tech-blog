const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,

    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '# Insert Description Here',
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category;