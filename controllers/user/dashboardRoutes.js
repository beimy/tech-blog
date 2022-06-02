const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// router.get('/', (req, res) => {
//   Post.findAll({
//     where: {
//       user_id: 1
//     },
//     attributes: [
//       'id',
//       'title',
//       'post_content'
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));
//       console.log(dbPostData);
//       console.log('-----------------------');
//       console.log(posts);

//       res.render('user-page', { 
//         posts,
//         loggedIn: req.session.loggedIn,
//         pageTitle: "Home",
//         errorCSS: false,
//         mainCSS: true,
//         adminCSS: false,
//         mainJS: true,
//         errorJS: false,
//         });
//     });
// });


router.get('/', withAuth, async(req, res) => {
  try {
    const userId = req.session.user_id;
    const userData = await User.findByPk(userId, {
      attributes: ['username', 'email'],
      include: [
        {
          model: Comment,
          where: user_id = userId,
          attributes: ['id', 'title', 'comment_content'],
        },
        {
          model: Post,
          where: user_id = userId,
          attributes: ['title', 'post_content',]
        }
      ]
    })
    const username = userData.dataValues.username;
    const posts = userData.Posts.map(post => post.get({ plain: true }));
    const comments = userData.Comments.map(comment => comment.get({ plain: true }));

    res.status(200).render('user-page', {
      userData,
      username,
      posts,
      comments,
      pageTitle: `${username}'s Dashboard`,
      loggedIn: true,
    });
    
  } catch (err) {
    res.status(500).json(`Unexpected error encountered in Test User Route ${err}`)
  }
})



module.exports = router;