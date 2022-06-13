const router = require('express').Router();
const { User, Post, Comment, Category, Tag } = require('../../models');
const sequelize = require('../../config/connection');


router.get('/', async(req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'post_id',
        'post_title',
        'post_content',
        'created_at',
        'updated_at'
      ],
      order: [
        ['created_at', 'DESC']
      ],
      include: [
        {
  
          model: User,
          attributes: ["username"],
        },
        {
          model: Category,
          attributes: ['category_id', 'category_name']
        },
        {
          model: Tag,
          as: 'tags',
        },
        {
          model: Comment,
          attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id', 'created_at'],
          order: [
            ['created_at', 'DESC']
          ],
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
    });
  
    const tagData = await Tag.findAll({
      attributes: [
        'tag_id',
        'tag_name',
        'tag_description'
      ],
    })
  
    const posts = postData.map(post => post.get({ plain: true }));
    const tags = tagData.map(tag => tag.get({ plain: true }));
    
    console.log('------------Made it into the home route-----------------');
    console.log(posts[1]);
    console.log(posts[1].tags);
    
    res.status(200).render('home', { 
      tags,
      posts,
      loggedIn: req.session.loggedIn,
      pageTitle: "Rabbit Hole",
      userNav: true,
      mainCSS: true,
      mainJS: true,
    })
  } catch (err) {
    res.status(500).json(`Error encountered in home route: ${err}`);
    console.log(err);
  }
})



module.exports = router