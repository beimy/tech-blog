
const router = require('express').Router();
const { request } = require('http');
const { isNull } = require('lodash');
const { Post, Comment, User, Tag, Category, Post_Tags } = require('../../models');
const withAuth = require('../../utils/auth');
require("../../utils/auth");


/*
================================================
POST ROUTES | NO-AUTHENTICATION | SEARCH POSTS
================================================
*/

//TEST ROUTE FOR RENDERING NEW POSTS PAGE
router.get("/post-test", async (req, res) => {
  try {
    res.status(200).render("post-page", {
      pageTitle: "Test Post-Page",
      userNav: true,
      mainCSS: true,
      createPostCSS: true
    });
  } catch (err) {
    res.status(400).json(`Error encountered in test-post route: ${err}`);
  }
});

//DEFAULT ROUTE => GET ALL POSTS

router.get('/', async (req, res) => {
  try{
    const postData = await Post.findAll({
      attributes: [
        'post_id',
        'post_title',
        'post_content',
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

    res.status(200).json(postData);
  } catch (err) {
    res
      .status(500)
      .json(`Unexpected error encountered in GET all Posts route: ${err}`);
  }
});

// GET POST BY ID
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findByPk(postId, {
      attributes: [
        'post_id',
        'post_title',
        'post_content',
      ],
      include: [
        {
          model: User,
          attributes: ["username", "user_id"],
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

    res.status(200).json(postData);  
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET Post by id route: ${err}`)
  }
});

//GET POSTS BY USER ID
router.get('/user/:id', async (req, res) => {
  try{
    const userId = req.params.id;
    const postData = await Post.findAll({
      where:{
        user_id: userId
      },
      attributes: [
        'post_id',
        'post_title',
        'post_content',
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

    res.status(200).json(postData);
  }catch(err){
    res.status(500).json(`Unexpected error encountered in GET all Posts By User route: ${err}`)
 }
});

/*
================================================
POST ROUTES | AUTHENTICATION-REQUIRED | USER 
================================================
*/
  
// CREATE NEW POST - this post was had withAuth removed for testing purposes. add in withAuth when testing from live site
//change (user_id: req.body.user_id) to (user_id: req.session.user_id) when testing for live site
router.post('/', async(req, res) => {
   
  try {
    const newPostDate = await
      Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        category_id: req.body.category_id,
        user_id: req.session.user_id
      });

    res.status(200).json(`New post successfully created.`)
    
  } catch (err) {
    res
      .status(500)
      .json(`unexpected error encountered in Create New Post Route: ${err}`);
  }
});

//UPDATE POST BY ID | EDIT POST BY ID
// withAuth has been removed for testing and will need to be added back in before deployment to prevent users from editing posts they dont own.
router.put('/:id', async(req, res) => {
  try {
    const postId = req.params.id;
    const postTitle = req.body.title;
    const postContent = req.body.content;
    const postCategory = req.body.category;

    Post.update(
    {
      post_title: postTitle,
      post_content: postContent,
      category_id: postCategory
    },
    {
      where: {
        post_id: postId, 
      },
    },
    )
    res.status(200).json({message: `Post "${postId}" has been updated`})
    
  } catch (err) {
    res.status(500).json({message: `Unexpected error encountered in Edit Post Route: ${err}`});
  }
})

//DELETE POST BY ID
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy(
      {
      where: {
        id: req.params.id,
      },
  }
  );
    
      if (!deletePost) {
        res.status(404).json({
          message: "No post found with this id",
        });
        return;
      }
      res.status(200).json(deletePost);
    } catch (err) {
      res
      .status(500)
      .json(`Unexpected error encountered in Delete Post Route: ${err}`);
    }
  });

module.exports = router;
