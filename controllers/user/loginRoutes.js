const router = require("express").Router();
const { keyBy } = require("lodash");
const { User, Post, Comment } = require("../../models");

/*
================================================
LOGIN ROUTES default: localhost:3010/user-login/
================================================
*/

// DEFAULT => RENDER LOGIN-SIGNUP-PAGE
router.get('/', async(req, res) => {
  res.status(200).render('login-signup-page', {
    pageTitle: 'Login',
  })
})

// RENDER REGISTRATION PAGE
router.get('/register', (req, res, next) => {
  res.status(200).render('register', {
    pageTitle: "Sign Up",
    loggedIn: false
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
      attributes: ['id', 'username', 'email', 'password']
    });
    const userPwd = userData.dataValues.password;
    console.log(userData.username)

    if(userPwd === password){
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.status(200).json({
          user: userData,
          message: "You are now logged in!",
        });
      });
      
    }else{
      res.status(400).json(`incorrect password`);
    }

  } catch (error) {
    res.status(400).json(`Error encountered in test-validate login route: ${err}`)
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
