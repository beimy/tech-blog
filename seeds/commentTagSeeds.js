const sequelize = require('../config/connection');
const { Tag, Comment, Comment_Tags } = require('../models');

const commentTagData = [
  {
    tag_id: 1,
    comment_id: 1,
  },
  {
    tag_id: 1,
    comment_id: 2,
  },
  {
    tag_id: 1,
    comment_id: 3,
  },
  {
    tag_id: 2,
    comment_id: 4,
  },
  {
    tag_id: 2,
    comment_id: 5,
  },
  {
    tag_id: 2,
    comment_id: 6,
  },
  {
    tag_id: 9,
    comment_id: 7,
  },
  {
    tag_id: 3,
    comment_id: 8,
  },
  {
    tag_id: 3,
    comment_id: 9,
  },
  {
    tag_id: 4,
    comment_id: 10,
  },
  {
    tag_id: 4,
    comment_id: 11,
  },
  {
    tag_id: 5,
    comment_id: 12,
  },
  {
    tag_id: 5,
    comment_id: 13,
  },
  {
    tag_id: 6,
    comment_id: 14,
  },
  {
    tag_id: 6,
    comment_id: 15,
  },
  {
    tag_id: 7,
    comment_id: 1,
  },
  {
    tag_id: 7,
    comment_id: 12,
  },
  {
    tag_id: 8,
    comment_id: 3,
  },
  {
    tag_id: 8,
    comment_id: 4,
  },
  {
    tag_id: 9,
    comment_id: 5,
  },
  {
    tag_id: 9,
    comment_id: 6,
  },
    {
    tag_id: 6,
    comment_id: 7,
  },
]

const commentTagSeeds = () => Comment_Tags.bulkCreate(commentTagData);
module.exports = commentTagSeeds;