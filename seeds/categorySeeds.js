const Sequelize = require('../config/connection');
const { Category } = require('../models');

const categoryData = [

  {
    category_name: 'category# 1',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 2',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 3',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 4',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 5',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 6',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 7',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 8',
    category_description: 'description of the category goes here',
  },
  {
    category_name: 'category# 9',
    category_description: 'description of the category goes here',
  },
];

const categorySeeds = () => Category.bulkCreate(categoryData);
module.exports = categorySeeds;