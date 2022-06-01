const router = require('express').Router();
const { User, Post } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res, next) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
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

      res.status(200).render('index', { 
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

  router.post('/login', async(req, res, next) => {
    try{
      const dbUserData = await User.findOne({
        logging: console.log,
        where: {
          email: req.body.userEmail
        },
      });
      if(!dbUserData){
        res.status(400).json({ message: `The email address provided ${req.body.userEmail} is not registered. Try again with another email or sign up below.`})
      }
    }catch(err){
      console.error(`Unexpected error encountered in homeRoutes.js POST/login: ${err}`)
    }
  });

  router.get('/register', (req, res, next) => {
    res.status(200).render('register', {
      pageTitle: "Sign Up",
      loggedIn: false
    })
  });

module.exports = router