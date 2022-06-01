const sequelize = require('../config/connection');
const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'tag1',
  },
  {
    tag_name: 'tag2',
  },
  {
    tag_name: 'tag3',
  },
  {
    tag_name: 'tag4',
  },
  {
    tag_name: 'tag5',
  },
  {
    tag_name: 'tag6',
  },
  {
    tag_name: 'tag7',
  },
  {
    tag_name: 'tag8',
  },
  {
    tag_name: 'tag9',
  },
]



const tagSeeds = () => Tag.bulkCreate(tagData);
module.exports = tagSeeds;