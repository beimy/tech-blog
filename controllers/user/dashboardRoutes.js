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
      attributes: ['username', 'email', 'about'],
    })

    console.log('---------------Made it to the dashboard route----------------')
    const username = userData[0].dataValues.username;
    const about = userData[0].dataValues.about;

      res.status(200).render('user-page', {
        username: username,
        pageTitle: `${username}'s Dashboard`,
        loggedIn: true,
        userNav: true,
        mainCSS: true,
        mainJS: true,
        dashboardJS: true
      });
  } catch (err) { 
    res.status(500).json(`Unexpected error encountered in Dashboard Route ${err}`)
  }
})



module.exports = router;