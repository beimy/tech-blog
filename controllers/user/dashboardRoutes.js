const router = require('express').Router();
const { User, Post, Comment, Tag } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

/*
================================================
USER DASHBOARD ROUTE - /dashboard
================================================
*/
router.get('/', async(req, res) => {
  try {
    const userId = req.session.user_id;
   const userData = await User.findAll({
      where: {
        user_id: userId
      },
      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: {
            user_id: userId,

          },
          attributes: ['comment_id', 'comment_title', 'comment_content'],
          required: false
        },
        {
          model: Post,
          where: {
            user_id: userId
          },
          attributes: ['post_id', 'post_title', 'post_content', 'created_at', 'updated_at'],
          required: false,
          include: [
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
            {
              model: Tag,
              as: 'tags',
            }
          ]
        }
      ]
    })

    console.log('---------------Made it to the dashboard route----------------')
    console.log(userData)
  
    const tempUserData = userData[0];
    console.log(tempUserData)

    const username = tempUserData.username;
    const posts = tempUserData.posts.map(post => post.get({ plain: true }));
    const comments = tempUserData.comments.map(comment => comment.get({ plain: true }));
    
    res.status(200).render('user-page', {
      userData,
      username,
      posts,
      comments,
      pageTitle: `${username} - Rabbit Hole`,
      loggedIn: true,
      userNav: true,
      mainCSS: true,
      mainJS: true
    });
    
  } catch (err) { 
    res.status(500).json(`Unexpected error encountered in Dashboard Route ${err}`)
  }
})



module.exports = router;