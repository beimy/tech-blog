const router = require("express").Router();
const { keyBy } = require("lodash");
const bcrypt = require('bcrypt');
const { User, Post, Comment } = require("../../models");

/*
================================================
LOGIN ROUTES default: localhost:3010/user-login/
================================================
*/

// RENDER REGISTRATION PAGE
router.get('/register', (req, res, next) => {
  res.status(200).render('registrationPage', {
    pageTitle: "Sign Up - Rabbit Hole",
    registerJS: true
  })
});

// VALIDATE LOGIN CREDENTIALS
router.post('/validate', async(req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    
    const userData = await User.findOne({
      where: {
        email: email
      },
      attributes: ['user_id', 'username', 'email', 'password']
    });

    const userPassword = userData.dataValues.password;

    const validPassword = await bcrypt.compare(password, userPassword);

    if(validPassword){
      console.log(userData)
      req.session.save(() => {
        req.session.user_id = userData.dataValues.user_id;
        req.session.username = userData.dataValues.username;
        req.session.loggedIn = true;
  
        res.status(200).json(userData);
      }); 
    } else {
      res.status(400).json(`incorrect password`);
      console.log('incorrect password')
    }

  } catch(error) {
    res.status(400).json(`Error encountered in test-validate login route: ${error}`)
    console.error(error)
  }
})

// REGISTER NEW USER
router.post("/register", (req, res) => {
  console.log(req.body)
  User.create({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    about: 'Write a little something about yourself'
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;

        res.status(200).json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// LOGOUT
router.post('/logout', async(req, res) => {
  try {
    console.log(req)
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).json();
      });
    } else {
      res.status(500).json(`no active session found`);
    }
  } catch (err) {
    res.status(400).json(`unexpected error occurred when logging out: ${err}`)
  }
})

// router.post("/logout", (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

module.exports = router;
