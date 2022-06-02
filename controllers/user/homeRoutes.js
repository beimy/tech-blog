const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');


router.get('/', async(req, res) => {
  const postData = await Post.findAll({
    attributes: ["id", "title", "post_content"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["id", "title", "comment_content", "user_id", "post_id"],
      },
    ],
  })
  const posts = postData.map(post => post.get({ plain: true }))

  res.status(200).render('index', { 
    posts,
    loggedIn: req.session.loggedIn,
    pageTitle: "Home",
    errorCSS: false,
    mainCSS: true,
    adminCSS: false,
    mainJS: true,
    errorJS: false,

  })
})



  



module.exports = router