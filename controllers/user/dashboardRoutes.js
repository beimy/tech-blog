const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/test-dashboard', (req, res) => {
  Post.findAll({
    where: {
      user_id: 1
    },
    attributes: [
      'id',
      'title',
      'post_content'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(dbPostData);
      console.log('-----------------------');
      console.log(posts);

      res.render('user-page', { 
        posts,
        loggedIn: req.session.loggedIn,
        pageTitle: "Home",
        errorCSS: false,
        mainCSS: true,
        adminCSS: false,
        mainJS: true,
        errorJS: false,
        });
    });
});


module.exports = router;