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
    const userId = 1;
   const userData = await User.findByPk(userId, {

      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: {
            user_id: userId
          },
          attributes: ['comment_id', 'comment_title', 'comment_content'],
        },
        {
          model: Post,
          where: {
            user_id: userId
          },
          attributes: ['post_id', 'post_title', 'post_content', 'created_at', 'updated_at'],
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
          ]
        }
      ]
    })

    console.log('---------------Made it to the dashboard route----------------')


    // const username = userData.dataValues.username;
    const posts = userData.dataValues.posts;
    const comments = userData.dataValues.comments;
    const username = userData.dataValues.username;
    
    
    res.status(200).render('user-page', {
      userData,
      username,
      posts,
      comments,
      // pageTitle: `${username}'s Dashboard`,
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