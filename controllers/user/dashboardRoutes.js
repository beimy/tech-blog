const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/test-dashboard', async(req, res) => {
  try {
    const userData = await User.findByPk(1, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: user_id = 1,
          attributes: ['id', 'title', 'comment_content'],
        },
        {
          model: Post,
          where: user_id = 1,
          attributes: ['title', 'post_content',]
        }
      ]
    })
    
    console.log(userData)
    // res.status(200).render('user-page', {
    //   testUser,
    //   pageTitle: 'Dashboard',
    //   loggedIn: true,
    // });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(`Unexpected error encountered in Test User Route ${err}`)
  }
})



module.exports = router;