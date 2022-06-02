const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/test-dashboard', async(req, res) => {
  try {
    const testUser = await User.findByPk(1, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: user_id = 1,
          attributes: ['id', 'title', 'comment_content'],
        },
      ]
      
    })
    const testPosts = await Post.findAll({
      where: user_id = 1,
      attributes: [
        'id',
        'title',
        'post_content'
      ]
    })


    res.status(200).render('user-page', {
      testUser,
      testPosts,
      pageTitle: 'Dashboard',
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(`Unexpected error encountered in Test User Route ${err}`)
  }
})



module.exports = router;