const router = require('express').Router();
const { User, Post } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res, next) => {
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
      const userData = await User.findOne({
        logging: console.log,
        where: {
          email: req.body.userEmail
        },
      });

      if(!userData){
        res.status(400).json({ message: `The email address provided ${req.body.userEmail} is not registered. Try again with another email or sign up below.`})
        return;
      }

      req.session.save(() => {
        req.session.loggedIn = true;
  
        res
          .status(200)
          .json({ user: dbUserData, message: 'You are now logged in!' });
      });
      
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