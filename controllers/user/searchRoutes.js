const router = require('express').Router();
const { User, Post, Comment, Category, Tag, Post_Tags } = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// GET route for displaying posts from search
router.get('/', async(req, res) => {
    console.log('-----------------------------------------');
    console.log(req.query.id);
    try{  
        idArr = req.query.id;
        const postData = await Post.findAll({
        where: {
            post_id: idArr
        },
        attributes: [
            'post_id',
            'post_title',
            'post_content',
            'created_at',
            'updated_at'
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
        const posts = postData.map(post => post.get({ plain: true }))
        res.status(200).render('home', { 
        posts,
        loggedIn: req.session.loggedIn,
        pageTitle: "Home/Search - Rabbit Hole",
        errorCSS: false,
        mainCSS: true,
        adminCSS: false,
        mainJS: true,
        errorJS: false,
        userNav: true,
    
        })
    } catch (err) {
        res.status(500).json(`Unexpected error occured in search route /search ${err}`);
    } finally {

    }
    
});

// GET POSTS BY TAG ID
router.get('/tag/:id', async(req,res) => {
    try {
      const response = await Post_Tags.findAll({
        where: {
          tag_id: req.params.id
        },
        attributes: [
          'tag_id',
          'post_id'
        ], 
        include: [
          {
            model: Tag,
            key: 'tag_id',
            attributes: ['tag_name', 'tag_description']
          },
          {
            model: Post,
            key: 'post_id',
            attributes: ['post_id', 'post_title','post_summary', 'post_content', 'category_id', 'post_url', 'user_id', 'created_at', 'updated_at' ],
            include: [
              {
                model: User,
                attributes: ['username']
              },
              {
                model: Category,
                attributes: ['category_name']
              },
              {
                model: Comment,
                attributes: ['comment_id', 'comment_title', 'comment_content', 'user_id'],
                include: [
                  {
                    model: User,
                    attributes: ['username']
                  }
                ]
              }
            ]
          }
        ]
      })

      const tagData = await Tag.findAll({
        attributes: [
          'tag_id',
          'tag_name',
          'tag_description'
        ],
      })
    
      const posts = response.map(postTag => postTag.post.get({ plain: true }));
      const tags = tagData.map(tag => tag.get({ plain: true }));
      console.log('---------------------------')
      console.log(posts)

      res.status(200).render('home', {
          tags,
          posts,
          loggedIn: req.session.loggedIn,
          pageTitle: "Home/Search - Rabbit Hole",
          userNav: true,
          mainCSS: true,
          mainJS: true
      });
    } catch (err) {
      res.status(500).json({message: `Unexpected error encountered in (route name here): ${err}`});
      console.log(err);
    }
  });

module.exports = router