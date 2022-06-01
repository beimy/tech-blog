const router = require('express').Router();
const { Post } = require('../../models');
const { Comment } = require('../../models');
const { User } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'body',
      'category',
      'tags',
      'user_id'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'title', 'body', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router