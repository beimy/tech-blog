const router = require('express').Router();
const { User, Post, Comment, Category, Tag } = require('../../models');
const sequelize = require('../../config/connection');


router.get('/', async(req, res) => {
  const postData = await Post.findAll({
    attributes: [
      'post_id',
      'post_title',
      'post_content',
    ],
    include: [
      {

        model: User,
        attributes: ["username"],
      },
      {
        model: Category,
        attributes: ['category_id', 'category_name']
      },
      {
        model: Tag,
        as: 'tags',
      },
      {
        model: Comment,
        attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Tag,
            as: 'tags'
          }
        ]
      },
    ]

  });
  const posts = postData.map(post => post.get({ plain: true }))
  res.status(200).render('index', { 
    posts,
    loggedIn: req.session.loggedIn,
    pageTitle: "Home",
    userNav: true,
    mainCSS: true,
    mainJS: true,

  })
})



module.exports = router